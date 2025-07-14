'use client';

import InvoiceForm from '@/components/invoices/invoice-form';
import { useSearchParams } from 'next/navigation';
import type { AIGeneratedInvoiceData } from '@/lib/types';
import { Suspense } from 'react';

function NewInvoicePageContent() {
  const searchParams = useSearchParams();
  const aiDataString = searchParams.get('data');
  let aiData: AIGeneratedInvoiceData | undefined = undefined;

  if (aiDataString) {
    try {
      // The data is encoded twice, once by the browser and once manually
      aiData = JSON.parse(aiDataString);
    } catch (e) {
      console.error("Failed to parse AI data from URL", e);
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold tracking-tight">Create New Invoice</h1>
      <InvoiceForm aiGeneratedData={aiData} />
    </div>
  );
}


export default function NewInvoicePage() {
  // Wrap with Suspense because useSearchParams() needs it.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewInvoicePageContent />
    </Suspense>
  )
}
