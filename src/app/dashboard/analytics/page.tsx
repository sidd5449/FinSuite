import FinancialInsights from '@/components/analytics/financial-insights';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-headline font-bold tracking-tight">Financial Analytics</h1>
      </div>
      <FinancialInsights />
    </div>
  );
}
