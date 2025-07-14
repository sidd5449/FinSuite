'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { createClientAction, updateClientAction } from '@/app/actions';
import { clientSchema } from '@/lib/types';
import type { ClientWithId } from '@/lib/types';

type ClientFormValues = z.infer<typeof clientSchema>;

interface ClientFormProps {
  clientToEdit?: ClientWithId;
}

export default function ClientForm({ clientToEdit }: ClientFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const isEditMode = !!clientToEdit;

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues: isEditMode
      ? clientToEdit
      : {
          name: '',
          email: '',
          address: '',
        },
  });

  async function onSubmit(data: ClientFormValues) {
    let result;
    if (isEditMode) {
        result = await updateClientAction(clientToEdit.id, data);
    } else {
        result = await createClientAction(data);
    }
    
    if (result.success) {
      toast({
        title: 'Success!',
        description: result.message,
      });
      if (isEditMode) {
        router.push(`/dashboard/clients/${clientToEdit.id}`);
      } else {
        router.push('/dashboard/clients');
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Client Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                        <Input placeholder="client@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Mailing Address</FormLabel>
                        <FormControl>
                        <Textarea placeholder="123 Main St, Anytown, USA" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </CardContent>
        </Card>
        
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting 
              ? (isEditMode ? 'Saving...' : 'Creating...') 
              : (isEditMode ? 'Save Changes' : 'Create Client')}
          </Button>
        </div>
      </form>
    </Form>
  );
}
