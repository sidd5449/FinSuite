'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Eye, Edit, Trash, Loader2, Mail } from 'lucide-react';
import type { Invoice } from '@/lib/types';
import { format } from 'date-fns';
import DeleteInvoiceDialog from '@/components/invoices/delete-invoice-dialog';
import { updateInvoiceStatusAction, sendInvoiceReminderAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface InvoicesTableProps {
  invoices: Invoice[];
}

const statusVariantMap: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  paid: 'default',
  pending: 'secondary',
  overdue: 'destructive',
};

export default function InvoicesTable({ invoices: initialInvoices }: InvoicesTableProps) {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [remindingId, setRemindingId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setInvoices(initialInvoices);
  }, [initialInvoices]);

  const handleDeleteClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setDialogOpen(true);
  };
  
  const handleSuccess = (deletedInvoiceId: string) => {
    setInvoices(currentInvoices => currentInvoices.filter(inv => inv.id !== deletedInvoiceId));
    setDialogOpen(false);
  };

  const handleStatusChange = async (invoiceId: string, status: 'paid' | 'pending' | 'overdue') => {
    setUpdatingId(invoiceId);
    const result = await updateInvoiceStatusAction(invoiceId, status);
    if (result.success) {
      toast({
        title: 'Success!',
        description: result.message,
      });
      // The revalidation should handle the update, but we can optimistically update here too
       setInvoices(current => current.map(inv => inv.id === invoiceId ? {...inv, status: status} : inv));
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
    setUpdatingId(null);
  };

  const handleSendReminder = async (invoiceId: string) => {
    setRemindingId(invoiceId);
    const result = await sendInvoiceReminderAction(invoiceId);
    if (result.success) {
      toast({
        title: 'Success!',
        description: result.message,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
    setRemindingId(null);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
              <TableCell>{invoice.client.name}</TableCell>
              <TableCell>${invoice.total.toLocaleString()}</TableCell>
              <TableCell>{format(new Date(invoice.dueDate), 'MMM d, yyyy')}</TableCell>
              <TableCell>
                {updatingId === invoice.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="p-0 h-auto focus-visible:ring-1 focus-visible:ring-ring rounded-md">
                        <Badge variant={statusVariantMap[invoice.status]} className="capitalize cursor-pointer">
                          {invoice.status}
                        </Badge>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Change status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {(['paid', 'pending', 'overdue'] as const).map((status) => (
                        <DropdownMenuItem
                          key={status}
                          disabled={invoice.status === status}
                          onSelect={() => handleStatusChange(invoice.id, status)}
                          className="capitalize"
                        >
                          {status}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/invoices/${invoice.id}`}>
                        <Eye className="mr-2 h-4 w-4" /> View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem
                        disabled={invoice.status === 'paid' || remindingId === invoice.id}
                        onSelect={() => handleSendReminder(invoice.id)}
                      >
                        {remindingId === invoice.id ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Mail className="mr-2 h-4 w-4" />
                        )}
                        Send Reminder
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive focus:bg-destructive/10"
                      onClick={() => handleDeleteClick(invoice)}
                    >
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedInvoice && (
        <DeleteInvoiceDialog
          isOpen={dialogOpen}
          onOpenChange={setDialogOpen}
          invoiceId={selectedInvoice.id}
          invoiceNumber={selectedInvoice.invoiceNumber}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
}
