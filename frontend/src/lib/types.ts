import { z } from 'zod';

export const clientSchema = z.object({
  name: z.string().min(1, 'Client name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Client address is required'),
});

const noteSchema = z.object({
  content: z.string(),
  date: z.string(), // from API it's a string
  _id: z.string().optional(),
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
  subtotal: z.number().optional(), // Calculated on submit
  tax: z.number().optional().default(0),
  taxRate: z.number().optional().default(0),
  total: z.number().optional(), // Calculated on submit
  currency: z.enum(['USD', 'EUR', 'GBP']),
  status: z.enum(['paid', 'pending', 'overdue']),
  signature: z.string(),
  notes: z.string().optional(),
});

export type Client = z.infer<typeof clientSchema>;
export type Note = z.infer<typeof noteSchema>;
export type ClientWithId = Client & { id: string; notes?: Note[] };
export type LineItem = z.infer<typeof lineItemSchema>;
export type Invoice = z.infer<typeof invoiceSchema> & { 
  id: string, 
  subtotal: number,
  tax: number,
  taxRate: number,
  total: number 
};

const invoiceForPaymentSchema = z.object({
    id: z.string(),
    invoiceNumber: z.string(),
    client: clientSchema.pick({ name: true })
});

export const paymentSchema = z.object({
    id: z.string(),
    invoiceId: invoiceForPaymentSchema,
    amount: z.number(),
    date: z.string(), // Comes as a string from API
    method: z.string(),
});

export type Payment = z.infer<typeof paymentSchema>;

export const aiGeneratedInvoiceSchema = z.object({
    client: clientSchema,
    lineItems: z.array(lineItemSchema)
});
export type AIGeneratedInvoiceData = z.infer<typeof aiGeneratedInvoiceSchema>;
