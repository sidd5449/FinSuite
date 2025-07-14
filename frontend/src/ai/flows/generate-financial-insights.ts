
// use server'
'use server';

/**
 * @fileOverview AI-driven financial insights flow.
 *
 * - generateFinancialInsights - A function that generates financial insights.
 * - GenerateFinancialInsightsInput - The input type for the generateFinancialInsights function.
 * - GenerateFinancialInsightsOutput - The return type for the generateFinancialInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFinancialInsightsInputSchema = z.object({
  invoiceData: z.string().describe('The invoice data in JSON format.'),
  paymentData: z.string().describe('The payment data in JSON format.'),
});

export type GenerateFinancialInsightsInput = z.infer<
  typeof GenerateFinancialInsightsInputSchema
>;

const GenerateFinancialInsightsOutputSchema = z.object({
  insights: z.string().describe('A summary of key financial health insights based on the data. Should be a short paragraph.'),
  cashFlowAnalysis: z
    .string()
    .describe('An analysis of historical and current cash flow. Should be a short paragraph.'),
  revenueForecasting: z
    .string()
    .describe('A simple revenue forecast for the next quarter based on trends. Should be a short paragraph.'),
});

export type GenerateFinancialInsightsOutput = z.infer<
  typeof GenerateFinancialInsightsOutputSchema
>;

export async function generateFinancialInsights(
  input: GenerateFinancialInsightsInput
): Promise<GenerateFinancialInsightsOutput> {
  return generateFinancialInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFinancialInsightsPrompt',
  input: {schema: GenerateFinancialInsightsInputSchema},
  output: {schema: GenerateFinancialInsightsOutputSchema},
  prompt: `You are an expert financial analyst for a small business. Your task is to analyze invoice and payment data to provide actionable insights.

  Based on the JSON data provided below, generate:
  1.  A summary of the business's current financial health.
  2.  An analysis of the cash flow.
  3.  A simple revenue forecast for the upcoming quarter.

  Keep your analysis concise and easy to understand for a non-expert.

  Invoice Data:
  {{{invoiceData}}}

  Payment Data:
  {{{paymentData}}}

  Provide your response in the requested JSON format.
`,
});

const generateFinancialInsightsFlow = ai.defineFlow(
  {
    name: 'generateFinancialInsightsFlow',
    inputSchema: GenerateFinancialInsightsInputSchema,
    outputSchema: GenerateFinancialInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
