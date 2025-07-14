import { getClientByIdAction, getInvoicesAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Mail, MapPin, User, UserCheck, FileText, Clock } from 'lucide-react';
import InvoicesTable from '@/components/invoices/invoices-table';
import RevenueChart from '@/components/dashboard/revenue-chart';
import StatusPieChart from '@/components/dashboard/status-pie-chart';
import StatCard from '@/components/dashboard/stat-card';
import ClientNotes from '@/components/clients/client-notes';

export default async function ViewClientPage({ params }: { params: { id: string } }) {
  const clientResult = await getClientByIdAction(params.id);

  if (!clientResult.success || !clientResult.data) {
    notFound();
  }

  const client = clientResult.data;

  // Fetch invoices specifically for this client
  const invoicesResult = await getInvoicesAction({ clientId: client.id });
  const clientInvoices = invoicesResult.success ? invoicesResult.data : [];

  const lifetimeValue = clientInvoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.total, 0);
  const totalInvoiced = clientInvoices.reduce((sum, inv) => sum + inv.total, 0);
  const amountOverdue = clientInvoices
    .filter(inv => inv.status === 'overdue')
    .reduce((sum, inv) => sum + inv.total, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/clients">
                    <ArrowLeft />
                    <span className="sr-only">Back to Clients</span>
                </Link>
            </Button>
            <h1 className="text-3xl font-headline font-bold tracking-tight">
                {client.name}
            </h1>
        </div>
        <Button asChild>
            <Link href={`/dashboard/clients/${client.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Client
            </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Client Details</CardTitle>
            <CardDescription>Contact and address information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-muted-foreground" />
                <span>{client.name}</span>
            </div>
            <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href={`mailto:${client.email}`} className="text-primary hover:underline">
                    {client.email}
                </a>
            </div>
            <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{client.address}</span>
            </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
            title="Lifetime Value" 
            value={`$${lifetimeValue.toLocaleString()}`} 
            icon={UserCheck}
            description="Total amount paid by this client."
        />
        <StatCard 
            title="Total Invoiced" 
            value={`$${totalInvoiced.toLocaleString()}`} 
            icon={FileText}
            description="Total amount invoiced to this client."
        />
        <StatCard 
            title="Amount Overdue" 
            value={`$${amountOverdue.toLocaleString()}`} 
            icon={Clock}
            description="Total amount currently overdue."
        />
      </div>

      {clientInvoices.length > 0 && (
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <RevenueChart invoices={clientInvoices} />
            </div>
            <div>
                <StatusPieChart invoices={clientInvoices} />
            </div>
        </div>
      )}

      <div className="grid gap-8 xl:grid-cols-2">
        <ClientNotes client={client} />
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Invoice History</CardTitle>
                <CardDescription>All invoices associated with this client.</CardDescription>
            </CardHeader>
            <CardContent>
                {clientInvoices.length > 0 ? (
                <InvoicesTable invoices={clientInvoices} />
                ) : (
                <p className="text-muted-foreground text-center">No invoices found for this client.</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
