
import { Crown } from "lucide-react";
import { subscriptionPlans } from "@/lib/subscriptions";
import PricingCard from "@/components/billing/pricing-card";
import { getUserAction } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function BillingPage() {
    const userResult = await getUserAction();
    const currentUserPlan = userResult.success ? userResult.data.plan : 'free';

    return (
        <div className="space-y-8">
            <div className="text-center">
                <Crown className="mx-auto h-12 w-12 text-primary" />
                <h1 className="text-3xl font-headline font-bold tracking-tight mt-4">Choose Your Plan</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Unlock powerful features to streamline your invoicing and financial management.
                </p>
            </div>
            
            {userResult.success && userResult.data.subscriptionStatus === 'past_due' && (
                <Alert variant="destructive">
                    <AlertTitle>Payment Issue</AlertTitle>
                    <AlertDescription>
                        There is an issue with your subscription payment. Please update your payment method to continue using our services.
                    </AlertDescription>
                </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {subscriptionPlans.map((plan) => (
                    <PricingCard 
                        key={plan.name} 
                        plan={plan} 
                        isCurrentPlan={plan.name.toLowerCase() === currentUserPlan}
                    />
                ))}
            </div>
        </div>
    );
}
