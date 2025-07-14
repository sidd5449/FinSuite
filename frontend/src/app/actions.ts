'use server'

import { z } from 'zod'
import { generateFinancialInsights } from '@/ai/flows/generate-financial-insights'
import { generateInvoiceFromText } from '@/ai/flows/generate-invoice-from-text'
import { calculateTax } from '@/ai/flows/calculate-tax'
import { invoiceSchema, clientSchema } from '@/lib/types'
import { planLimits } from '@/lib/subscriptions';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080/api';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required')
});

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});


// --- Helper function for API calls ---
async function apiFetch(url: string, options: RequestInit = {}) {
  const sessionToken = cookies().get('session')?.value;
  try {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(sessionToken && { 'Authorization': `Bearer ${sessionToken}` }),
        ...options.headers,
      },
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({ message: `Request failed with status ${res.status}` }));
      // For 403 Forbidden, we want to show a specific message from the API
      if (res.status === 403) {
          throw new Error(errorBody.message || 'You do not have permission to perform this action. Please upgrade your plan.');
      }
      throw new Error(errorBody.message || 'An API error occurred');
    }

    if (res.status === 204) { // No Content
        return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`API Error fetching ${url}:`, error);
    const message = error instanceof Error ? error.message : 'An unknown network error occurred';
    throw new Error(message);
  }
}


export async function loginAction(data: z.infer<typeof loginSchema>) {
  const parsedData = loginSchema.safeParse(data);
  if (!parsedData.success) {
      return { success: false, error: "Invalid data provided."}
  }

  const { email, password } = parsedData.data;

  // Mock authentication logic - in a real app, this would call a /login API endpoint
  // that validates hashed passwords.
  if (password === 'password') { // Simplified check for any known user
    // For this demo, we use the user's email as their session "token".
    // This allows the backend to identify the user for each request.
    cookies().set('session', email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      // Removed maxAge to make it a session cookie
    })
    return { success: true }
  } else {
    return { success: false, error: 'Invalid credentials.' }
  }
}

export async function signupAction(data: z.infer<typeof signupSchema>) {
    const parsedData = signupSchema.safeParse(data);
    if (!parsedData.success) {
        return { success: false, error: "Invalid data provided." }
    }
    const { email, password } = parsedData.data;

    try {
        await apiFetch('/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        
        // Automatically log in the user after successful sign up
        cookies().set('session', email, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
        });

        return { success: true };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred during sign up.' };
    }
}


export async function logoutAction() {
  cookies().delete('session')
  redirect('/login')
}

// --- User Actions ---
export async function getUserAction() {
  try {
    const user = await apiFetch('/users/me');
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: 'User not found.' };
  }
}


// --- Invoice Actions ---

export async function getInvoicesAction(params?: { clientId?: string }) {
  try {
    const url = params?.clientId ? `/invoices?clientId=${params.clientId}` : '/invoices';
    const invoices = await apiFetch(url);
    return { success: true, data: invoices };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch invoices.' };
  }
}

export async function createInvoiceAction(data: z.infer<typeof invoiceSchema>) {
  const parsedData = invoiceSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: 'Invalid data provided.' };
  }
  
  try {
    const subtotal = parsedData.data.lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const tax = parsedData.data.tax || 0;
    const total = subtotal + tax;

    const newInvoiceData = { ...parsedData.data, subtotal, tax, total };
    
    // The backend will now check the user's plan and invoice count before creating.
    await apiFetch('/invoices', {
      method: 'POST',
      body: JSON.stringify(newInvoiceData),
    });
    
    revalidatePath('/dashboard/invoices');
    revalidatePath('/dashboard/payments');
    revalidatePath('/dashboard/settings'); // To update usage display
    return { success: true, message: 'Invoice created successfully!' };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to create invoice.' };
  }
}

export async function getInvoiceByIdAction(id: string) {
  try {
    const invoice = await apiFetch(`/invoices/${id}`);
    return { success: true, data: invoice };
  } catch (error) {
    return { success: false, error: 'Invoice not found.' };
  }
}

export async function updateInvoiceAction(id: string, data: z.infer<typeof invoiceSchema>) {
  const parsedData = invoiceSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  try {
    const subtotal = parsedData.data.lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const tax = parsedData.data.tax || 0;
    const total = subtotal + tax;

    const updatedInvoiceData = { ...parsedData.data, subtotal, tax, total };

    await apiFetch(`/invoices/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedInvoiceData),
    });

    revalidatePath('/dashboard/invoices');
    revalidatePath(`/dashboard/invoices/${id}`);
    revalidatePath(`/dashboard/invoices/${id}/edit`);
    revalidatePath('/dashboard/payments');
    return { success: true, message: `Invoice ${data.invoiceNumber} updated successfully!` };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to update invoice.' };
  }
}

export async function deleteInvoiceAction(id: string) {
  try {
    await apiFetch(`/invoices/${id}`, { method: 'DELETE' });
    revalidatePath('/dashboard/invoices');
    revalidatePath('/dashboard/payments');
    return { success: true, message: 'Invoice deleted successfully!' };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to delete invoice.' };
  }
}

export async function updateInvoiceStatusAction(id: string, status: 'paid' | 'pending' | 'overdue') {
  try {
    await apiFetch(`/invoices/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
    revalidatePath('/dashboard/invoices');
    revalidatePath(`/dashboard/invoices/${id}`);
    revalidatePath('/dashboard'); // For the stats cards
    revalidatePath('/dashboard/payments');
    return { success: true, message: `Invoice status updated to ${status}.` };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to update invoice status.' };
  }
}

export async function sendInvoiceReminderAction(invoiceId: string) {
  try {
    const result = await apiFetch(`/invoices/${invoiceId}/remind`, { method: 'POST' });
    return { success: true, message: result.message || 'Reminder sent successfully!' };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send reminder.' };
  }
}

// --- Client Actions ---

export async function getClientsAction() {
    try {
        const clients = await apiFetch('/clients');
        return { success: true, data: clients };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch clients.' };
    }
}

export async function getClientByIdAction(id: string) {
    try {
        const client = await apiFetch(`/clients/${id}`);
        return { success: true, data: client };
    } catch (error) {
        return { success: false, error: 'Client not found.' };
    }
}

export async function createClientAction(data: z.infer<typeof clientSchema>) {
    const parsedData = clientSchema.safeParse(data);
    if (!parsedData.success) {
        return { success: false, error: "Invalid data provided."}
    }
    try {
        await apiFetch('/clients', {
            method: 'POST',
            body: JSON.stringify(parsedData.data),
        });
        revalidatePath('/dashboard/clients');
        return { success: true, message: 'Client created successfully!' };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to create client.' };
    }
}

export async function updateClientAction(id: string, data: z.infer<typeof clientSchema>) {
    const parsedData = clientSchema.safeParse(data);
    if (!parsedData.success) {
        return { success: false, error: 'Invalid data provided.'}
    }
    try {
        await apiFetch(`/clients/${id}`, {
            method: 'PUT',
            body: JSON.stringify(parsedData.data),
        });
        revalidatePath('/dashboard/clients');
        revalidatePath(`/dashboard/clients/${id}`);
        revalidatePath(`/dashboard/clients/${id}/edit`);
        return { success: true, message: `Client ${data.name} updated successfully!` };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to update client.' };
    }
}

export async function deleteClientAction(id: string) {
    try {
        await apiFetch(`/clients/${id}`, { method: 'DELETE' });
        revalidatePath('/dashboard/clients');
        return { success: true, message: 'Client deleted successfully!' };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to delete client.' };
    }
}

const noteFormSchema = z.object({
  content: z.string().min(1, 'Note content cannot be empty.'),
});

export async function addClientNoteAction(clientId: string, data: z.infer<typeof noteFormSchema>) {
  const parsedData = noteFormSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: 'Invalid data provided.' };
  }
  try {
    const updatedClient = await apiFetch(`/clients/${clientId}/notes`, {
      method: 'POST',
      body: JSON.stringify(parsedData.data),
    });
    revalidatePath(`/dashboard/clients/${clientId}`);
    return { success: true, message: 'Note added successfully!', data: updatedClient };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to add note.' };
  }
}

// --- Payment Actions ---

export async function getPaymentsAction() {
    try {
        const payments = await apiFetch('/payments');
        return { success: true, data: payments };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch payments.' };
    }
}

// --- Stripe / Subscription Actions ---
export async function createPaymentIntentAction(amount: number, currency: string) {
    try {
        const result = await apiFetch('/stripe/create-payment-intent', {
            method: 'POST',
            body: JSON.stringify({ amount, currency }),
        });
        return { success: true, clientSecret: result.clientSecret };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to create payment intent.' };
    }
}

export async function confirmStripePaymentAction(invoiceId: string, paymentIntentId: string) {
    try {
        const updatedInvoice = await apiFetch(`/invoices/${invoiceId}/confirm-payment`, {
            method: 'POST',
            body: JSON.stringify({ paymentIntentId }),
        });
        revalidatePath(`/dashboard/invoices/${invoiceId}`);
        revalidatePath('/dashboard/invoices');
        revalidatePath('/dashboard/payments');
        return { success: true, message: 'Payment confirmed successfully!', data: updatedInvoice };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to confirm payment.' };
    }
}

export async function createCheckoutSessionAction(priceId: string) {
    try {
        const result = await apiFetch('/subscriptions/create-checkout-session', {
            method: 'POST',
            body: JSON.stringify({ priceId }),
        });
        if (result.url) {
            redirect(result.url);
        } else {
            return { success: false, error: 'Could not create checkout session.' };
        }
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to create checkout session.' };
    }
}

export async function createPortalSessionAction() {
    try {
        const result = await apiFetch('/subscriptions/create-portal-session', {
            method: 'POST'
        });
        if (result.url) {
            redirect(result.url);
        } else {
            return { success: false, error: 'Could not create portal session.' };
        }
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to create portal session.' };
    }
}


// --- AI Actions ---

async function checkAiUsageLimit() {
    const userResult = await getUserAction();
    if (!userResult.success) {
        throw new Error('Could not identify user. Please log in again.');
    }
    const user = userResult.data;
    const limits = planLimits[user.plan as keyof typeof planLimits] || planLimits.free;

    if (user.aiRequestCount >= limits.aiRequests) {
        throw new Error(`You have reached your monthly limit of ${limits.aiRequests} AI requests. Please upgrade your plan.`);
    }
}

async function incrementAiUsage() {
    try {
        await apiFetch('/users/me/increment-ai', { method: 'PUT' });
        revalidatePath('/dashboard/settings');
    } catch (error) {
        console.error("Failed to increment AI usage count:", error);
        // We don't throw here to not fail the main operation, but we log the error.
    }
}

export async function getFinancialInsightsAction() {
  try {
    await checkAiUsageLimit();

    const [invoicesResult, paymentsResult] = await Promise.all([
      getInvoicesAction(),
      getPaymentsAction(),
    ]);

    if (!invoicesResult.success || !paymentsResult.success) {
      throw new Error('Failed to fetch financial data for analysis.');
    }

    const insights = await generateFinancialInsights({
      invoiceData: JSON.stringify(invoicesResult.data),
      paymentData: JSON.stringify(paymentsResult.data),
    });

    await incrementAiUsage();
    return { success: true, data: insights };
  } catch (error) {
    console.error('Error generating financial insights:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate financial insights.';
    return { success: false, error: message };
  }
}

export async function generateInvoiceFromTextAction(text: string) {
  try {
    await checkAiUsageLimit();
    const result = await generateInvoiceFromText(text);
    await incrementAiUsage();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating invoice from text:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate invoice from text.';
    return { success: false, error: message };
  }
}

export async function calculateTaxAction(address: string, subtotal: number) {
  try {
    await checkAiUsageLimit();
    const result = await calculateTax({ address, subtotal });
    await incrementAiUsage();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error calculating tax:', error);
    const message = error instanceof Error ? error.message : 'Failed to calculate tax with AI.';
    return { success: false, error: message };
  }
}
