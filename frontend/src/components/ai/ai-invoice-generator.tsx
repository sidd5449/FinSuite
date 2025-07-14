'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { WandSparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateInvoiceFromTextAction } from '@/app/actions';

export default function AIInvoiceGenerator() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a description for the invoice.',
      });
      return;
    }

    setLoading(true);
    const result = await generateInvoiceFromTextAction(text);
    setLoading(false);

    if (result.success && result.data) {
      toast({
        title: 'Invoice Data Generated!',
        description: 'Redirecting you to the invoice form...',
      });
      const dataStr = JSON.stringify(result.data);
      router.push(`/dashboard/invoices/new?data=${encodeURIComponent(dataStr)}`);
    } else {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error || 'The AI failed to generate invoice data. Please try again.',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <WandSparkles className="text-primary" />
          AI Invoice Generator
        </CardTitle>
        <CardDescription>
          Describe the invoice in plain English, and let AI create it for you. Include client details and line items.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="e.g., Invoice for John Doe (john@example.com) for a new website design, 40 hours at $120/hr, and a monthly hosting fee of $25."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          disabled={loading}
        />
        <div className="flex justify-start">
          <Button onClick={handleGenerate} disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <WandSparkles className="mr-2 h-4 w-4" />
            )}
            {loading ? 'Generating...' : 'Generate with AI'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
