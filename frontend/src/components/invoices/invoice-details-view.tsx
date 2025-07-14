'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit } from 'lucide-react';
import type { Invoice } from '@/lib/types';

const statusVariantMap: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  paid: 'default',
  pending: 'secondary',
  overdue: 'destructive',
};

interface InvoiceDetailsViewProps {
  invoice: Invoice;
}

export default function InvoiceDetailsView({ invoice }: InvoiceDetailsViewProps) {
  const subtotal = invoice.subtotal || invoice.total;
  const tax = invoice.tax || 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/invoices">
                    <ArrowLeft />
                    <span className="sr-only">Back to Invoices</span>
                </Link>
            </Button>
            <h1 className="text-3xl font-headline font-bold tracking-tight">
            Invoice {invoice.invoiceNumber}
            </h1>
        </div>
        <div className="flex gap-2">
            <Button asChild>
                <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Invoice
                </Link>
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="font-headline text-2xl">Invoice Details</CardTitle>
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
          
          {invoice.notes && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Notes</h3>
                <p className="text-muted-foreground">{invoice.notes}</p>
              </div>
            </>
          )}

          {invoice.signature && invoice.signature.length > 50 && (
             <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Signature</h3>
                <div className="border rounded-md p-4 bg-gray-50 max-w-sm">
                    <img src={invoice.signature} alt="Signature" className="h-24 w-full object-contain" />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
