
import { getPaymentsAction } from '@/app/actions';
import PaymentsTable from '@/components/payments/payments-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import StatCard from '@/components/dashboard/stat-card';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';
import type { Payment } from '@/lib/types';
import { startOfMonth, isWithinInterval } from 'date-fns';

export default async function PaymentsPage() {
  const result = await getPaymentsAction();

  const payments: Payment[] = result.success ? result.data : [];

  const totalReceived = payments.reduce((sum, p) => sum + p.amount, 0);

  const now = new Date();
  const startOfThisMonth = startOfMonth(now);
  const paymentsThisMonth = payments.filter(p => 
    isWithinInterval(new Date(p.date), { start: startOfThisMonth, end: now })
  );
  const totalThisMonth = paymentsThisMonth.reduce((sum, p) => sum + p.amount, 0);
  
  const averagePaymentAmount = payments.length > 0 ? totalReceived / payments.length : 0;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-headline font-bold tracking-tight">Payments</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
            title="Total Received" 
            value={`$${totalReceived.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} 
            icon={DollarSign}
            description="Total amount of all payments recorded."
        />
        <StatCard 
            title="Total This Month" 
            value={`$${totalThisMonth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} 
            icon={Calendar}
            description="Total amount received this calendar month."
        />
        <StatCard 
            title="Average Payment" 
            value={`$${averagePaymentAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} 
            icon={TrendingUp}
            description="The average amount per payment."
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Payment History</CardTitle>
        </CardHeader>
        <CardContent>
           {result.success ? (
            <PaymentsTable payments={result.data} />
          ) : (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{result.error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
