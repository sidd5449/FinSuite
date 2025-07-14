'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { addClientNoteAction } from '@/app/actions';
import { type ClientWithId, type Note } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const noteFormSchema = z.object({
    content: z.string().min(1, 'Note content cannot be empty.'),
});

interface ClientNotesProps {
    client: ClientWithId;
}

export default function ClientNotes({ client }: ClientNotesProps) {
    const [notes, setNotes] = useState<Note[]>(client.notes || []);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof noteFormSchema>>({
        resolver: zodResolver(noteFormSchema),
        defaultValues: { content: '' },
    });

    async function onSubmit(data: z.infer<typeof noteFormSchema>) {
        const result = await addClientNoteAction(client.id, data);

        if (result.success && result.data?.notes) {
            toast({
                title: 'Note Added',
                description: 'The note has been successfully added to the client.',
            });
            setNotes(result.data.notes);
            form.reset();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error,
            });
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Client Log</CardTitle>
                <CardDescription>Record interactions, notes, and important information.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea placeholder="Add a new note..." {...field} rows={3} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Adding...' : 'Add Note'}
                            </Button>
                        </div>
                    </form>
                </Form>
                <Separator className="my-6" />
                <h4 className="text-sm font-medium mb-4">History</h4>
                {notes.length > 0 ? (
                    <ScrollArea className="h-72">
                        <div className="space-y-6 pr-4">
                            {notes.map((note) => (
                                <div key={note._id} className="text-sm">
                                    <p className="text-muted-foreground whitespace-pre-wrap">{note.content}</p>
                                    <p className="text-xs text-muted-foreground/80 mt-1">
                                        {format(new Date(note.date), 'PPP p')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No notes for this client yet.</p>
                )}
            </CardContent>
        </Card>
    );
}
