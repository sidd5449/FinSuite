import { getClientByIdAction, getInvoicesAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Mail, MapPin, User } from 'lucide-react';
import InvoicesTable from '@/components/invoices/invoices-table';

export default async function ViewClientPage({ params }: { params: { id: string } }) {
  const clientResult = await getClientByIdAction(params.id);

  if (!clientResult.success || !clientResult.data) {
    notFound();
  }

  const client = clientResult.data;

  // Fetch invoices specifically for this client
  const invoicesResult = await getInvoicesAction({ clientId: client.id });
  const clientInvoices = invoicesResult.success ? invoicesResult.data : [];

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
  );
}
