import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
}

export default function StatCard({ title, value, icon: Icon, description }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium font-body">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-headline">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
