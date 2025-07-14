'use client';

import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { confirmStripePaymentAction } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import type { Invoice } from '@/lib/types';
import { cn } from '@/lib/utils';

interface PaymentFormContentProps {
  invoice: Invoice;
  onPaymentSuccess: (invoice: Invoice) => void;
  onCancel?: () => void;
}

const cardElementOptions = {
    style: {
      base: {
        color: 'hsl(var(--foreground))',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased' as const,
        fontSize: '16px',
        '::placeholder': {
          color: 'hsl(var(--muted-foreground))'
        },
      },
      invalid: {
        color: 'hsl(var(--destructive))',
        iconColor: 'hsl(var(--destructive))'
      }
    }
};

export default function PaymentFormContent({ invoice, onPaymentSuccess, onCancel }: PaymentFormContentProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded yet. Please try again in a moment.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setErrorMessage('Card element not found. Please refresh and try again.');
      setLoading(false);
      return;
    }

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    
    if (paymentMethodError) {
        setErrorMessage(paymentMethodError.message || 'An unknown error occurred while creating payment method.');
        setLoading(false);
        return;
    }
    
    const clientSecret = elements.getClientSecret();
    if (!clientSecret) {
        setErrorMessage('Client secret not found. Cannot proceed with payment.');
        setLoading(false);
        return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
    });

    if (confirmError) {
      setErrorMessage(confirmError.message || 'Failed to process payment.');
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      const result = await confirmStripePaymentAction(invoice.id, paymentIntent.id);
      
      if (result.success && result.data) {
        onPaymentSuccess(result.data as Invoice);
      } else {
         toast({
            variant: 'destructive',
            title: 'Confirmation Error',
            description: result.error || 'Payment was successful with Stripe, but failed to update on our server. Please contact support.'
        });
      }
    } else {
      setErrorMessage(`Payment status: ${paymentIntent?.status}. Please contact support.`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-md bg-background">
        <CardElement options={cardElementOptions} />
      </div>
      {errorMessage && (
        <div className="text-sm font-medium text-destructive">{errorMessage}</div>
      )}
      <div className={cn("flex pt-4", onCancel ? "justify-end" : "justify-start")}>
        <div className="flex gap-4">
          {onCancel && (
            <Button type="button" variant="ghost" onClick={onCancel} disabled={loading}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={!stripe || loading} className={cn(!onCancel && "w-full")}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Pay ${invoice.total.toFixed(2)}
          </Button>
        </div>
      </div>
    </form>
  );
}
