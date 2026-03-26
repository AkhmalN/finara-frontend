import Piechart from "@/components/charts/Piechart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pieChartConfig } from "@/configs/chart-config";
import { pieChartData } from "@/lib/dummy-data";

const ExpensesCategories = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Categories</CardTitle>
        <CardDescription>
          Breakdown of your current month expenses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Piechart chartConfig={pieChartConfig} chartData={pieChartData} />
      </CardContent>
    </Card>
  );
};

export default ExpensesCategories;
