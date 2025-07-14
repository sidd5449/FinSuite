import { getInvoiceByIdAction } from '@/app/actions';
import { notFound } from 'next/navigation';
import InvoiceDetailsView from '@/components/invoices/invoice-details-view';

export default async function ViewInvoicePage({ params }: { params: { id: string } }) {
  const result = await getInvoiceByIdAction(params.id);

  if (!result.success || !result.data) {
    notFound();
  }

  return <InvoiceDetailsView invoice={result.data} />;
}
