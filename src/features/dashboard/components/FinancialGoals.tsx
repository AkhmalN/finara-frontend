import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { dummyFinancialGoals } from "@/lib/dummy-data";

const FinancialGoals = () => {
  return (
    <Card size="xl">
      <CardHeader>
        <CardTitle>Financial Goals</CardTitle>
        <CardDescription>
          Track your progress towards financial milestones
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-5">
        {dummyFinancialGoals.map((goal) => (
          <Field className="w-full max-w-sm my-2" key={goal.id}>
            <FieldLabel htmlFor={`progress-${goal.id}`}>
              <span>{goal.title}</span>
              <span className="ml-auto">
                <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                  Active
                </Badge>
              </span>
            </FieldLabel>
            <Progress
              value={(goal.amountSaved / goal.goalAmount) * 100}
              id={`progress-${goal.id}`}
            />
            <FieldLabel htmlFor={`progress-${goal.id}`} className="mt-1">
              <span className="text-xs text-slate-500">
                {new Intl.NumberFormat().format(goal.amountSaved)}/
                {new Intl.NumberFormat().format(goal.goalAmount)}
              </span>
            </FieldLabel>
          </Field>
        ))}
      </CardContent>
    </Card>
  );
};

export default FinancialGoals;
