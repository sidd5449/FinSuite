'use server'

import { z } from 'zod'
import { generateFinancialInsights } from '@/ai/flows/generate-financial-insights'
import { invoiceSchema, clientSchema } from '@/lib/types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080/api';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required')
})

// --- Helper function for API calls ---
async function apiFetch(url: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({ message: `Request failed with status ${res.status}` }));
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

  // Mock authentication logic - in a real app, this would call an API
  if (email === 'user@example.com' && password === 'password') {
    cookies().set('session', 'mock-session-token', {
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

export async function logoutAction() {
  cookies().delete('session')
  redirect('/login')
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
    const total = parsedData.data.lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const newInvoiceData = { ...parsedData.data, total };
    
    await apiFetch('/invoices', {
      method: 'POST',
      body: JSON.stringify(newInvoiceData),
    });
    
    revalidatePath('/dashboard/invoices');
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
    const total = parsedData.data.lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const updatedInvoiceData = { ...parsedData.data, total };

    await apiFetch(`/invoices/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedInvoiceData),
    });

    revalidatePath('/dashboard/invoices');
    revalidatePath(`/dashboard/invoices/${id}`);
    revalidatePath(`/dashboard/invoices/${id}/edit`);
    return { success: true, message: `Invoice ${data.invoiceNumber} updated successfully!` };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to update invoice.' };
  }
}

export async function deleteInvoiceAction(id: string) {
  try {
    await apiFetch(`/invoices/${id}`, { method: 'DELETE' });
    revalidatePath('/dashboard/invoices');
    return { success: true, message: 'Invoice deleted successfully!' };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to delete invoice.' };
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

// --- Payment Actions ---

export async function getPaymentsAction() {
    try {
        const payments = await apiFetch('/payments');
        return { success: true, data: payments };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch payments.' };
    }
}

// --- AI Actions ---

export async function getFinancialInsightsAction() {
  try {
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
    })
    return { success: true, data: insights }
  } catch (error) {
    console.error('Error generating financial insights:', error)
    return { success: false, error: 'Failed to generate financial insights.' }
  }
}
