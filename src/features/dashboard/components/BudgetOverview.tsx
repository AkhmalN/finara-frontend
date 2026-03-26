import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { dummyBudgetOverview } from "@/lib/dummy-data";

const BudgetOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>
          Track your spending against your budget
        </CardDescription>
      </CardHeader>
      <CardContent>
        {dummyBudgetOverview.map((item) => (
          <Field className="w-full max-w-sm my-2" key={item.id}>
            <FieldLabel htmlFor={`progress-${item.id}`}>
              <span>{item.category}</span>
              <span className="ml-auto">
                {new Intl.NumberFormat().format(item.amountSpent)}/
                {new Intl.NumberFormat().format(item.budgetLimit)}
              </span>
            </FieldLabel>
            <Progress
              value={(item.amountSpent / item.budgetLimit) * 100}
              id={`progress-${item.id}`}
            />
          </Field>
        ))}
      </CardContent>
    </Card>
  );
};

export default BudgetOverview;
