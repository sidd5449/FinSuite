import { getInvoiceByIdAction } from '@/app/actions';
import InvoiceForm from '@/components/invoices/invoice-form';
import { notFound } from 'next/navigation';

export default async function EditInvoicePage({ params }: { params: { id: string } }) {
  const result = await getInvoiceByIdAction(params.id);
  
  if (!result.success || !result.data) {
    notFound();
  }

  const invoice = result.data;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold tracking-tight">Edit Invoice {invoice.invoiceNumber}</h1>
      <InvoiceForm invoiceToEdit={invoice} />
    </div>
  );
}
