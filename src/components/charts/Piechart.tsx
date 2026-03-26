import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A pie chart with a label";

interface ChartProps {
  chartData: any[];
  chartConfig: ChartConfig;
}

export default function Piechart({ chartData, chartConfig }: ChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[320px] w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
      </PieChart>
    </ChartContainer>
  );
}
