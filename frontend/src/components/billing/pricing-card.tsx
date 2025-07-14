
'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { createCheckoutSessionAction } from "@/app/actions";
import { useTransition } from "react";

interface Plan {
    name: string;
    description: string;
    price: string;
    priceId: string;
    features: string[];
    isPopular?: boolean;
}

interface PricingCardProps {
    plan: Plan;
    isCurrentPlan: boolean;
}

export default function PricingCard({ plan, isCurrentPlan }: PricingCardProps) {
    const [isPending, startTransition] = useTransition();

    const handleSubscribe = () => {
        if (!plan.priceId) return;
        startTransition(async () => {
            await createCheckoutSessionAction(plan.priceId);
        });
    };

    return (
        <Card className={cn("flex flex-col", plan.isPopular && "border-primary shadow-lg", isCurrentPlan && "ring-2 ring-primary")}>
            <CardHeader className="relative">
                {plan.isPopular && (
                    <div className="absolute top-0 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                        Most Popular
                    </div>
                )}
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-headline">{plan.price}</span>
                    { plan.price !== '$0' && <span className="text-muted-foreground">/ month</span> }
                </div>
                <ul className="space-y-3">
                    {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                 {isCurrentPlan ? (
                    <Button className="w-full" disabled>
                        Current Plan
                    </Button>
                ) : (
                    <Button 
                        className="w-full" 
                        variant={plan.isPopular ? "default" : "outline"}
                        onClick={handleSubscribe}
                        disabled={isPending || !plan.priceId}
                    >
                        {isPending ? 'Redirecting...' : 'Choose Plan'}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
