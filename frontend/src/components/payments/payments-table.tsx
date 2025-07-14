'use client';

import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format } from 'date-fns';
import type { Payment } from '@/lib/types';
import { Button } from '../ui/button';

interface PaymentsTableProps {
  payments: Payment[];
}

export default function PaymentsTable({ payments }: PaymentsTableProps) {
  if (payments.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No payments have been recorded yet.
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice #</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Payment Date</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">
              <Button variant="link" asChild className="p-0 h-auto">
                <Link href={`/dashboard/invoices/${payment.invoiceId.id}`}>
                  {payment.invoiceId.invoiceNumber}
                </Link>
              </Button>
            </TableCell>
            <TableCell>{payment.invoiceId.client.name}</TableCell>
            <TableCell>{format(new Date(payment.date), 'MMM d, yyyy')}</TableCell>
            <TableCell>{payment.method}</TableCell>
            <TableCell className="text-right">${payment.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
