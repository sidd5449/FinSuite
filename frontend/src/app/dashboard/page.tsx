import { DollarSign, FileText, Clock } from 'lucide-react';
import StatCard from '@/components/dashboard/stat-card';
import InvoicesTable from '@/components/invoices/invoices-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getInvoicesAction } from '../actions';
import type { Invoice } from '@/lib/types';
import RevenueChart from '@/components/dashboard/revenue-chart';
import StatusPieChart from '@/components/dashboard/status-pie-chart';

export default async function DashboardPage() {
  const result = await getInvoicesAction();
  const invoices: Invoice[] = result.success ? result.data : [];

  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.total, 0);
  const totalPaid = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.total, 0);
  const totalOverdue = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.total, 0);

  const recentInvoices = invoices.slice(0, 5);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
          title="Total Invoiced" 
          value={`$${totalInvoiced.toLocaleString()}`} 
          icon={FileText}
          description="Total amount of all invoices."
        />
        <StatCard 
          title="Total Paid" 
          value={`$${totalPaid.toLocaleString()}`} 
          icon={DollarSign}
          description="Total amount received from clients."
        />
        <StatCard 
          title="Overdue" 
          value={`$${totalOverdue.toLocaleString()}`} 
          icon={Clock}
          description="Total amount of overdue invoices."
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <RevenueChart invoices={invoices} />
        </div>
        <div>
            <StatusPieChart invoices={invoices} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <InvoicesTable invoices={recentInvoices} />
        </CardContent>
      </Card>
    </div>
  );
}
