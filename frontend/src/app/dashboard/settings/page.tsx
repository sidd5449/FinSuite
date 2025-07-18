'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { createPortalSessionAction, getUserAction } from '@/app/actions'
import { useEffect, useState } from 'react'
import { Crown, ExternalLink, Activity, FileText } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { planLimits } from '@/lib/subscriptions'

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can be used a mock user data
const defaultValues: Partial<ProfileFormValues> = {
  name: 'Test User',
  email: 'user@example.com',
}

const passwordFormSchema = z.object({
    currentPassword: z.string().min(1, 'Current password is required.'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters.'),
    confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match",
    path: ["confirmPassword"],
})

interface User {
    plan: 'free' | 'pro' | 'advanced';
    subscriptionStatus: string;
    invoiceCount: number;
    aiRequestCount: number;
}


export default function SettingsPage() {
  const { toast } = useToast()
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function fetchUser() {
        setLoadingUser(true);
        const result = await getUserAction();
        if (result.success) {
            setUser(result.data);
        }
        setLoadingUser(false);
    }
    fetchUser();
  }, []);


  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
      resolver: zodResolver(passwordFormSchema),
      defaultValues: {
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
      }
  })

  function onProfileSubmit(data: ProfileFormValues) {
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been successfully updated.',
    })
    console.log(data)
  }

  function onPasswordSubmit(data: z.infer<typeof passwordFormSchema>) {
    toast({
        title: "Password Updated",
        description: "Your password has been changed successfully."
    })
    console.log(data)
    passwordForm.reset()
  }

  const currentPlanLimits = user ? planLimits[user.plan] : planLimits.free;
  const invoiceUsagePercentage = user ? (user.invoiceCount / currentPlanLimits.invoices) * 100 : 0;
  const aiUsagePercentage = user ? (user.aiRequestCount / currentPlanLimits.aiRequests) * 100 : 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      
      <Card>
          <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Crown />
                Subscription & Usage
              </CardTitle>
              <CardDescription>Manage your billing and view your current usage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {loadingUser ? (
                <Skeleton className="h-10 w-1/2" />
            ) : user ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border bg-muted/50 p-4">
                    <div>
                        <p className="font-semibold">
                            You are currently on the <span className="capitalize text-primary">{user.plan}</span> plan.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Status: <span className="capitalize">{user.subscriptionStatus || 'Active'}</span>
                        </p>
                    </div>
                     <form action={createPortalSessionAction}>
                        <Button type="submit" variant="outline">
                            Manage Billing
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>
            ) : (
                 <p className="text-muted-foreground">Could not load subscription details.</p>
            )}

            {loadingUser ? (
                <div className="space-y-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
            ) : user && (
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm font-medium flex items-center gap-2"><FileText /> Invoices</p>
                            <p className="text-sm text-muted-foreground">{user.invoiceCount} / {currentPlanLimits.invoices === Infinity ? 'Unlimited' : currentPlanLimits.invoices}</p>
                        </div>
                        <Progress value={invoiceUsagePercentage} />
                    </div>
                     <div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm font-medium flex items-center gap-2"><Activity /> AI Requests</p>
                            <p className="text-sm text-muted-foreground">{user.aiRequestCount} / {currentPlanLimits.aiRequests === Infinity ? 'Unlimited' : currentPlanLimits.aiRequests}</p>
                        </div>
                        <Progress value={aiUsagePercentage} />
                    </div>
                </div>
            )}
          </CardContent>
      </Card>


      <Card>
          <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-8">
                <FormField
                    control={profileForm.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} disabled />
                        </FormControl>
                        <FormDescription>
                        You cannot change your login email.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit">Update Profile</Button>
                </form>
            </Form>
          </CardContent>
      </Card>
      
      <Card>
          <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password. Make sure it's a strong one.</CardDescription>
          </CardHeader>
          <CardContent>
          <Form {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-8">
                <FormField
                    control={passwordForm.control}
                    name="currentPassword"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                        <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                        <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                        <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit">Change Password</Button>
            </form>
            </Form>
          </CardContent>
      </Card>

    </div>
  )
}
