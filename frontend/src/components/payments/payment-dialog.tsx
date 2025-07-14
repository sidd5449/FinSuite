'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import PaymentFormContent from './payment-form-content';
import type { Invoice } from '@/lib/types';
import { createPaymentIntentAction } from '@/app/actions';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Make sure to set NEXT_PUBLIC_STRIPE_PUBLIC_KEY in your .env file
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface PaymentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  invoice: Invoice;
  onPaymentSuccess: (invoice: Invoice) => void;
}

export default function PaymentDialog({ isOpen, onOpenChange, invoice, onPaymentSuccess }: PaymentDialogProps) {
  const [clientSecret, setClientSecret] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && invoice.total > 0) {
      // Create PaymentIntent as soon as the dialog opens
      createPaymentIntentAction(invoice.total, invoice.currency)
        .then(result => {
          if (result.success && result.clientSecret) {
            setClientSecret(result.clientSecret);
          } else {
            console.error('Failed to create payment intent:', result.error);
            toast({
                variant: 'destructive',
                title: 'Payment Error',
                description: 'Could not initialize payment. Please try again.'
            })
            onOpenChange(false); // Close dialog on error
          }
        });
    }
  }, [isOpen, invoice.total, invoice.currency, onOpenChange, toast]);

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Process Payment for Invoice {invoice.invoiceNumber}</DialogTitle>
          <DialogDescription>
            You are about to charge ${invoice.total.toFixed(2)} for this invoice. Enter the card details below.
          </DialogDescription>
        </DialogHeader>
        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <PaymentFormContent 
                invoice={invoice} 
                onPaymentSuccess={onPaymentSuccess}
                onCancel={() => onOpenChange(false)}
            />
          </Elements>
        ) : (
            <div className="text-center p-8">Loading payment form...</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
