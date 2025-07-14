'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PaymentFormContent from './payment-form-content';
import type { Invoice } from '@/lib/types';
import { createPaymentIntentAction } from '@/app/actions';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface PublicPaymentFormProps {
  invoice: Invoice;
}

export default function PublicPaymentForm({ invoice }: PublicPaymentFormProps) {
  const [clientSecret, setClientSecret] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (invoice.total > 0) {
      createPaymentIntentAction(invoice.total, invoice.currency)
        .then(result => {
          if (result.success && result.clientSecret) {
            setClientSecret(result.clientSecret);
          } else {
            console.error('Failed to create payment intent:', result.error);
            toast({
                variant: 'destructive',
                title: 'Payment Error',
                description: 'Could not initialize the payment form. Please try refreshing the page.'
            });
          }
        });
    }
  }, [invoice.total, invoice.currency, toast]);

  const handlePaymentSuccess = () => {
    toast({
        title: 'Payment Successful!',
        description: 'Thank you! Your payment has been processed.',
    });
    // Redirect to the same page with a success flag to show the confirmation message
    router.push(`/invoice/${invoice.id}?status=success`, { scroll: false });
    router.refresh(); // Refresh to get the latest invoice status
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Pay Invoice</CardTitle>
        <CardDescription>Enter your card details below to securely pay this invoice.</CardDescription>
      </CardHeader>
      <CardContent>
        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <PaymentFormContent 
                invoice={invoice} 
                onPaymentSuccess={handlePaymentSuccess}
            />
          </Elements>
        ) : (
            <div className="text-center p-8">Loading payment form...</div>
        )}
      </CardContent>
    </Card>
  );
}
