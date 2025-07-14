'use client'

import * as React from "react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { Invoice } from '@/lib/types'

interface StatusPieChartProps {
  invoices: Invoice[];
}

const chartConfig = {
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-2))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-4))",
  },
  overdue: {
    label: "Overdue",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function StatusPieChart({ invoices }: StatusPieChartProps) {
  const chartData = React.useMemo(() => {
    const paid = invoices.filter(inv => inv.status === 'paid').length;
    const pending = invoices.filter(inv => inv.status === 'pending').length;
    const overdue = invoices.filter(inv => inv.status === 'overdue').length;

    return [
      { status: 'paid', count: paid, fill: 'var(--color-paid)' },
      { status: 'pending', count: pending, fill: 'var(--color-pending)' },
      { status: 'overdue', count: overdue, fill: 'var(--color-overdue)' },
    ].filter(item => item.count > 0);
  }, [invoices]);

  const totalInvoices = React.useMemo(() => {
      return invoices.length;
  }, [invoices]);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-headline">Invoices by Status</CardTitle>
        <CardDescription>A breakdown of your current invoices.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/3 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
