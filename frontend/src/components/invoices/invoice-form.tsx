'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { CalendarIcon, Trash, PlusCircle, DollarSign, Euro, PoundSterling, WandSparkles, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import SignaturePad from '@/components/invoices/signature-pad';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { createInvoiceAction, updateInvoiceAction, calculateTaxAction } from '@/app/actions';
import { invoiceSchema, type Invoice, type AIGeneratedInvoiceData } from '@/lib/types';

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

interface InvoiceFormProps {
  invoiceToEdit?: Invoice;
  aiGeneratedData?: AIGeneratedInvoiceData;
}

export default function InvoiceForm({ invoiceToEdit, aiGeneratedData }: InvoiceFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const isEditMode = !!invoiceToEdit;
  const isAiMode = !!aiGeneratedData;
  const [isCalculatingTax, setIsCalculatingTax] = useState(false);

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: isEditMode
      ? {
          ...invoiceToEdit,
          invoiceDate: new Date(invoiceToEdit.invoiceDate),
          dueDate: new Date(invoiceToEdit.dueDate),
        }
      : isAiMode
      ? {
          ...aiGeneratedData,
          invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
          invoiceDate: new Date(),
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          currency: 'USD',
          status: 'pending',
          notes: 'Thank you for your business.',
          signature: '',
          tax: 0,
          taxRate: 0,
      }
      : {
          client: { name: '', email: '', address: '' },
          invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
          invoiceDate: new Date(),
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          lineItems: [{ description: '', quantity: 1, rate: 0 }],
          currency: 'USD',
          notes: 'Thank you for your business.',
          signature: '',
          status: 'pending',
          tax: 0,
          taxRate: 0,
        },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'lineItems',
  });

  const watchLineItems = form.watch('lineItems');
  const watchTax = form.watch('tax');

  const subtotal = useMemo(() => {
    return watchLineItems.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.rate || 0),
      0
    );
  }, [watchLineItems]);

  const total = useMemo(() => {
    return subtotal + (watchTax || 0);
  }, [subtotal, watchTax]);


  async function handleCalculateTax() {
    const clientAddress = form.getValues('client.address');
    if (!clientAddress) {
        toast({
            variant: 'destructive',
            title: 'Client Address Required',
            description: 'Please enter a client address to calculate tax.'
        });
        return;
    }
    
    setIsCalculatingTax(true);
    const result = await calculateTaxAction(clientAddress, subtotal);
    setIsCalculatingTax(false);

    if (result.success && result.data) {
        form.setValue('tax', result.data.taxAmount, { shouldValidate: true });
        form.setValue('taxRate', result.data.taxRate, { shouldValidate: true });
        toast({
            title: 'Tax Calculated',
            description: `Applied a tax rate of ${result.data.taxRate.toFixed(2)}%`
        });
    } else {
        toast({
            variant: 'destructive',
            title: 'Tax Calculation Failed',
            description: result.error
        });
    }
  }

  async function onSubmit(data: InvoiceFormValues) {
    const formData = { ...data, subtotal, total };

    let result;
    if (isEditMode) {
        result = await updateInvoiceAction(invoiceToEdit.id, formData);
    } else {
        result = await createInvoiceAction(formData);
    }
    
    if (result.success) {
      toast({
        title: 'Success!',
        description: result.message,
      });
      if (isEditMode) {
        router.push(`/dashboard/invoices/${invoiceToEdit.id}`);
      } else {
        form.reset();
        router.push('/dashboard/invoices');
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="client.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="client.email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Email</FormLabel>
                      <FormControl>
                        <Input placeholder="client@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="client.address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="123 Main St, Anytown, USA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Invoice Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex flex-col md:flex-row gap-4 items-start">
                      <FormField
                        control={form.control}
                        name={`lineItems.${index}.description`}
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormLabel className={cn(index !== 0 && "sr-only")}>Description</FormLabel>
                            <FormControl>
                              <Input placeholder="Service or product description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name={`lineItems.${index}.quantity`}
                            render={({ field }) => (
                            <FormItem className="w-24">
                                <FormLabel className={cn(index !== 0 && "sr-only")}>Qty</FormLabel>
                                <FormControl>
                                <Input type="number" placeholder="1" {...field} onChange={e => field.onChange(parseFloat(e.target.value) || 0)} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`lineItems.${index}.rate`}
                            render={({ field }) => (
                            <FormItem className="w-32">
                                <FormLabel className={cn(index !== 0 && "sr-only")}>Rate</FormLabel>
                                <FormControl>
                                <Input type="number" placeholder="100.00" {...field} onChange={e => field.onChange(parseFloat(e.target.value) || 0)} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                       </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(index)}
                        className="mt-0 md:mt-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => append({ description: '', quantity: 1, rate: 0 })}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-between items-start">
                  <Button type="button" variant="outline" onClick={handleCalculateTax} disabled={isCalculatingTax}>
                    {isCalculatingTax ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <WandSparkles className="mr-2 h-4 w-4" />}
                    {isCalculatingTax ? 'Calculating...' : 'Calculate Tax with AI'}
                  </Button>
                  <div className="text-right space-y-2 w-full max-w-xs">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                         <FormField
                            control={form.control}
                            name="tax"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-2">
                                    <span className="text-muted-foreground">$</span>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            className="h-7 w-24 text-right"
                                            {...field}
                                            onChange={e => field.onChange(parseFloat(e.target.value) || 0)}
                                            />
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Invoice Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="invoiceNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Invoice Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a currency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="USD"><DollarSign className="inline-block h-4 w-4 mr-2" /> USD</SelectItem>
                          <SelectItem value="EUR"><Euro className="inline-block h-4 w-4 mr-2" /> EUR</SelectItem>
                          <SelectItem value="GBP"><PoundSterling className="inline-block h-4 w-4 mr-2" /> GBP</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="invoiceDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Invoice Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Signature</CardTitle>
                <FormDescription>Sign below to authorize this invoice.</FormDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="signature"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <SignaturePad onSave={field.onChange} initialDataUrl={field.value} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Add any additional terms or notes..." {...field} />
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
              : (isEditMode ? 'Save Changes' : 'Create Invoice')}
          </Button>
        </div>
      </form>
    </Form>
  );
}
