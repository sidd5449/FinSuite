import FinancialInsights from '@/components/analytics/financial-insights';
import AIInvoiceGenerator from '@/components/ai/ai-invoice-generator';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-headline font-bold tracking-tight">AI Studio</h1>
      </div>
      <AIInvoiceGenerator />
      <FinancialInsights />
    </div>
  );
}
