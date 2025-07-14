'use server';
/**
 * @fileOverview An AI flow to calculate sales tax based on location.
 * 
 * - calculateTax - A function that handles the tax calculation.
 * - CalculateTaxInput - The input type for the function.
 * - CalculateTaxOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CalculateTaxInputSchema = z.object({
  address: z.string().describe("The client's full address."),
  subtotal: z.number().describe('The subtotal of the invoice before tax.'),
});
export type CalculateTaxInput = z.infer<typeof CalculateTaxInputSchema>;

const CalculateTaxOutputSchema = z.object({
  taxRate: z.number().describe('The calculated tax rate as a percentage (e.g., 8.25 for 8.25%).'),
  taxAmount: z.number().describe('The calculated tax amount.'),
});
export type CalculateTaxOutput = z.infer<typeof CalculateTaxOutputSchema>;


export async function calculateTax(input: CalculateTaxInput): Promise<CalculateTaxOutput> {
  return calculateTaxFlow(input);
}

const prompt = ai.definePrompt({
    name: 'calculateTaxPrompt',
    input: { schema: CalculateTaxInputSchema },
    output: { schema: CalculateTaxOutputSchema },
    prompt: `You are a tax calculation AI. Your task is to determine the correct sales tax rate based on a client's address and calculate the tax amount based on an invoice subtotal.

    Analyze the address to determine the region. Use the following heuristic for tax rates:
    - If the address is in California (CA), use 9.5%.
    - If the address is in New York (NY), use 8.875%.
    - If the address is in Texas (TX), use 8.25%.
    - If the address is in the United Kingdom, use 20%.
    - For any other location, use a default rate of 7%.

    Client Address: {{address}}
    Invoice Subtotal: {{subtotal}}

    Calculate the tax amount and return the rate used and the final tax amount.
    `,
});

const calculateTaxFlow = ai.defineFlow(
  {
    name: 'calculateTaxFlow',
    inputSchema: CalculateTaxInputSchema,
    outputSchema: CalculateTaxOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
