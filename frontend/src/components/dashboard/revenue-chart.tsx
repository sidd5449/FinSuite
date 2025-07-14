'use client'

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { Invoice } from '@/lib/types'
import { format, subMonths, startOfMonth, eachMonthOfInterval } from 'date-fns'
import { Calendar as CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface RevenueChartProps {
  invoices: Invoice[];
}

const chartConfig = {
  invoiced: {
    label: "Invoiced",
    color: "hsl(var(--chart-1))",
  },
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function RevenueChart({ invoices }: RevenueChartProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subMonths(new Date(), 5),
    to: new Date(),
  });
  
  const processData = () => {
    const fromDate = date?.from;
    const toDate = date?.to || date?.from;

    let monthsToDisplay: Date[];

    if (fromDate && toDate) {
        monthsToDisplay = eachMonthOfInterval({
            start: startOfMonth(fromDate),
            end: startOfMonth(toDate),
        });
    } else {
        // Fallback to last 6 months if no dates are set at all
        monthsToDisplay = Array.from({ length: 6 }).map((_, i) => subMonths(new Date(), i)).reverse();
    }
    
    const monthlyData = monthsToDisplay.map(monthStart => {
        const monthName = format(monthStart, 'MMM yyyy');
        
        // Filter all invoices to find ones that fall into the current month of the iteration
        const monthlyInvoices = invoices.filter(inv => {
            const invoiceDate = new Date(inv.invoiceDate);
            return format(invoiceDate, 'yyyy-MM') === format(monthStart, 'yyyy-MM');
        });

        const totalInvoiced = monthlyInvoices.reduce((sum, inv) => sum + inv.total, 0);
        const totalPaid = monthlyInvoices
            .filter(inv => inv.status === 'paid')
            .reduce((sum, inv) => sum + inv.total, 0);

        return {
            month: monthName,
            invoiced: totalInvoiced,
            paid: totalPaid,
        }
    });

    return monthlyData;
  }
  
  const chartData = processData();

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="font-headline">Monthly Overview</CardTitle>
          <CardDescription>Invoiced vs. Paid amounts for the selected period.</CardDescription>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-full sm:w-[260px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
                tickFormatter={(value) => `$${Number(value) / 1000}k`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
            />
             <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="invoiced" fill="var(--color-invoiced)" radius={4} />
            <Bar dataKey="paid" fill="var(--color-paid)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
