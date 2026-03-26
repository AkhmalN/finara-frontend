import { memo, type JSX } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  DollarSign,
  Goal,
} from "lucide-react";

type iconRender = {
  [key: string]: JSX.Element;
};

interface RecapitulationFragmentProps {
  data: any[];
}

const RecapitulationFragment = memo<RecapitulationFragmentProps>(({ data }) => {
  const icons: iconRender = {
    balance: <DollarSign size={15} />,
    income: <BanknoteArrowUp size={15} />,
    expense: <BanknoteArrowDown size={15} />,
    goals: <Goal size={15} />,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
      {data.map((item) => (
        <Card size="md" key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardAction>{icons[item.type]}</CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <span className="text-xl font-bold text-slate-900">
                {item.amount}
              </span>
              {item.type === "goals" ? (
                <div className="flex flex-col gap-2">
                  <div className="w-full bg-slate-300 rounded-full h-2">
                    <div
                      className="bg-slate-900 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-500">
                    {item.percentage}% of {item.goalAmount} goal
                  </span>
                </div>
              ) : (
                <div className="flex flex-row items-center gap-1 text-xs ">
                  <span
                    className={`font-medium ${
                      item.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.percentage}%
                  </span>
                  <span className="text-slate-500">from last month</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});

export default RecapitulationFragment;
