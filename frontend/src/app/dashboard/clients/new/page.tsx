import ClientForm from '@/components/clients/client-form';

export default function NewClientPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold tracking-tight">Add New Client</h1>
      <ClientForm />
    </div>
  );
}
