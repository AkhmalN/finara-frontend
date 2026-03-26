import { recapitulationFragmentsData } from "@/lib/dummy-data";
import RecapitulationFragment from "../components/RecapitulationFragment";
import BudgetOverview from "../components/BudgetOverview";
import MonthlyTrend from "../components/MonthlyTrend";
import ExpensesCategories from "../components/ExpensesCategories";
import SavingsProgress from "../components/SavingsProgress";
import FinancialGoals from "../components/FinancialGoals";

const DashboardView = () => {
  return (
    <div className="space-y-8">
      <RecapitulationFragment data={recapitulationFragmentsData} />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <MonthlyTrend />
        </div>
        <div className="col-span-2">
          <ExpensesCategories />
        </div>
        <div className="col-span-2">
          <SavingsProgress />
        </div>
        <div className="col-span-2">
          <BudgetOverview />
        </div>
        <div className="col-span-4">
          <FinancialGoals />
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
