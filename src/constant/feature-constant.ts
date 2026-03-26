import {
  CircleDollarSign,
  Goal,
  LayoutDashboard,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

export const FEATURES: Feature[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: CircleDollarSign,
    path: "/transactions",
  },
  {
    id: "budgets",
    label: "Budgets",
    icon: Wallet,
    path: "/budgets",
  },
  {
    id: "goals",
    label: "Goals",
    icon: Goal,
    path: "/goals",
  },
];
