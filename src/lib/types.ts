import { z } from 'zod';

export const clientSchema = z.object({
  name: z.string().min(1, 'Client name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Client address is required'),
});

export const lineItemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(0.01, 'Quantity must be positive'),
  rate: z.number().min(0, 'Rate must be non-negative'),
});

export const invoiceSchema = z.object({
  id: z.string().optional(),
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  client: clientSchema,
  invoiceDate: z.date(),
  dueDate: z.date(),
  lineItems: z.array(lineItemSchema).min(1, 'At least one line item is required'),
  total: z.number().optional(), // Will be calculated
  currency: z.enum(['USD', 'EUR', 'GBP']),
  status: z.enum(['paid', 'pending', 'overdue']),
  signature: z.string(),
  notes: z.string().optional(),
});

export type Client = z.infer<typeof clientSchema>;
export type ClientWithId = Client & { id: string };
export type LineItem = z.infer<typeof lineItemSchema>;
export type Invoice = z.infer<typeof invoiceSchema> & { id: string, total: number };

export const paymentSchema = z.object({
    id: z.string(),
    invoiceId: z.string(),
    amount: z.number(),
    date: z.date(),
    method: z.string(),
});

export type Payment = z.infer<typeof paymentSchema>;
