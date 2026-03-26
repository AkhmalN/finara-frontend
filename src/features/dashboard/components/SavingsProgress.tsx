import Linechart from "@/components/charts/Linechart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { lineChartConfig } from "@/configs/chart-config";
import { lineChartData } from "@/lib/dummy-data";

const SavingsProgress = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Progress</CardTitle>
        <CardDescription>Monthly savings trend</CardDescription>
      </CardHeader>
      <CardContent>
        <Linechart chartConfig={lineChartConfig} chartData={lineChartData} />
      </CardContent>
    </Card>
  );
};

export default SavingsProgress;
