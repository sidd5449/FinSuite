import { getInvoiceByIdAction } from '@/app/actions';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { Landmark, CheckCircle } from 'lucide-react';
import PublicPaymentForm from '@/components/payments/public-payment-form';
import { Suspense } from 'react';

const statusVariantMap: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  paid: 'default',
  pending: 'secondary',
  overdue: 'destructive',
};

async function PublicInvoicePageContent({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
  const result = await getInvoiceByIdAction(params.id);

  if (!result.success || !result.data) {
    notFound();
  }

  const invoice = result.data;

  // Use searchParams to show a success message after payment.
  const isPaymentSuccess = searchParams.status === 'success';

  const subtotal = invoice.subtotal || invoice.total;
  const tax = invoice.tax || 0;

  return (
    <main className="min-h-screen bg-muted/40 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Landmark className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline font-bold">FinSuite</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <CardTitle className="font-headline text-2xl">Invoice {invoice.invoiceNumber}</CardTitle>
                <CardDescription>Issued on {format(new Date(invoice.invoiceDate), 'PPP')}</CardDescription>
              </div>
              <Badge variant={statusVariantMap[invoice.status]} className="capitalize text-lg px-4 py-1">
                {invoice.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Billed To:</h3>
                <p className="font-bold">{invoice.client.name}</p>
                <p>{invoice.client.email}</p>
                <p className="text-muted-foreground">{invoice.client.address}</p>
              </div>
              <div className="md:text-right">
                <h3 className="font-semibold mb-2">Payment Details:</h3>
                <p>Due Date: {format(new Date(invoice.dueDate), 'PPP')}</p>
                <p>Currency: {invoice.currency}</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Line Items</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoice.lineItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className="text-center">{item.quantity}</TableCell>
                      <TableCell className="text-right">${item.rate.toFixed(2)}</TableCell>
                      <TableCell className="text-right font-medium">${(item.quantity * item.rate).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <Separator />

            <div className="flex justify-end">
              <div className="text-right space-y-2 w-full max-w-xs">
                  <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                  </div>
                   <div className="flex justify-between text-muted-foreground">
                      <span>Tax {invoice.taxRate && invoice.taxRate > 0 ? `(${invoice.taxRate.toFixed(2)}%)` : ''}</span>
                      <span>${tax.toFixed(2)}</span>
                  </div>
                   <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${invoice.total.toFixed(2)}</span>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {invoice.status !== 'paid' && !isPaymentSuccess && (
          <PublicPaymentForm invoice={invoice} />
        )}

        {(invoice.status === 'paid' || isPaymentSuccess) && (
            <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                    <div>
                        <CardTitle className="text-green-800 dark:text-green-300">Payment Complete</CardTitle>
                        <CardDescription className="text-green-700 dark:text-green-400">
                            Thank you for your payment. This invoice has been successfully paid.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        )}
      </div>
    </main>
  );
}

// Wrap with Suspense to handle searchParams
export default function PublicInvoicePage({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading invoice...</div>}>
      <PublicInvoicePageContent params={params} searchParams={searchParams} />
    </Suspense>
  )
}
