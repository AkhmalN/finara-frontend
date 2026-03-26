import Barchart from "@/components/charts/Barchart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { barChartConfig } from "@/configs/chart-config";
import { barChartData } from "@/lib/dummy-data";

const MonthlyTrend = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Income & Expense trend</CardTitle>
        <CardDescription>Your spending over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <Barchart chartConfig={barChartConfig} chartData={barChartData} />
      </CardContent>
    </Card>
  );
};

export default MonthlyTrend;
