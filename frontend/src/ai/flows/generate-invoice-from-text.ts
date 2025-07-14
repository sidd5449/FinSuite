'use server';
/**
 * @fileOverview An AI flow to generate structured invoice data from a text description.
 * 
 * - generateInvoiceFromText - A function that handles parsing text into invoice data.
 * - GenerateInvoiceFromTextInput - The input type for the function.
 * - GenerateInvoiceFromTextOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { clientSchema, lineItemSchema } from '@/lib/types';

const GenerateInvoiceFromTextInputSchema = z.string();
export type GenerateInvoiceFromTextInput = z.infer<typeof GenerateInvoiceFromTextInputSchema>;

const GenerateInvoiceFromTextOutputSchema = z.object({
  client: clientSchema.describe("The client's information extracted from the text."),
  lineItems: z.array(lineItemSchema).describe("An array of line items extracted from the text."),
});
export type GenerateInvoiceFromTextOutput = z.infer<typeof GenerateInvoiceFromTextOutputSchema>;


export async function generateInvoiceFromText(input: GenerateInvoiceFromTextInput): Promise<GenerateInvoiceFromTextOutput> {
  return generateInvoiceFromTextFlow(input);
}

const prompt = ai.definePrompt({
    name: 'generateInvoiceFromTextPrompt',
    input: { schema: GenerateInvoiceFromTextInputSchema },
    output: { schema: GenerateInvoiceFromTextOutputSchema },
    prompt: `You are an intelligent assistant that helps create invoices. Your task is to parse the user's text description of an invoice and convert it into a structured JSON object.

    The user will provide a natural language description. You need to extract the client's name, email, and address, as well as all the line items with their description, quantity, and rate.

    If any information is missing, make reasonable assumptions. For example, if an address is not provided, you can use a placeholder like 'N/A'. If quantity isn't specified, assume 1.

    User's invoice description:
    "{{prompt}}"
    `,
});

const generateInvoiceFromTextFlow = ai.defineFlow(
  {
    name: 'generateInvoiceFromTextFlow',
    inputSchema: GenerateInvoiceFromTextInputSchema,
    outputSchema: GenerateInvoiceFromTextOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
