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
  insights: z.string().describe('Insights about the business\s financial health.'),
  cashFlowPrediction: z
    .string()
    .describe('Prediction of future cash flow.'),
  financialProjections: z
    .string()
    .describe('Informed financial projections.'),
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
  prompt: `You are a financial analyst providing insights, predictions, and projections based on invoice and payment data.

  Analyze the following invoice and payment data to generate insights about the business's financial health, predict future cash flow, and make informed financial projections.

  Invoice Data: {{{invoiceData}}}
  Payment Data: {{{paymentData}}}

  Provide your analysis in a structured format.
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
