import { getClientByIdAction } from '@/app/actions';
import ClientForm from '@/components/clients/client-form';
import { notFound } from 'next/navigation';

export default async function EditClientPage({ params }: { params: { id: string } }) {
  const result = await getClientByIdAction(params.id);
  
  if (!result.success || !result.data) {
    notFound();
  }

  const client = result.data;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold tracking-tight">Edit Client: {client.name}</h1>
      <ClientForm clientToEdit={client} />
    </div>
  );
}
