export const recapitulationFragmentsData = [
  {
    id: 1,
    title: "Total Balance",
    type: "balance",
    amount: "Rp 10.000.000",
    percentage: "+5.2%",
    trend: "up",
  },
  {
    id: 2,
    title: "Total Income",
    type: "income",
    amount: "Rp 15.000.000",
    percentage: "+8.1%",
    trend: "up",
  },
  {
    id: 3,
    title: "Total Expenses",
    type: "expense",
    amount: "Rp 5.000.000",
    percentage: "-3.4%",
    trend: "down",
  },
  {
    id: 4,
    title: "Total Goals",
    type: "goals",
    amount: "Rp 20.000.000",
    percentage: "+12.5%",
  },
];

export const barChartData = [
  { month: "January", income: 186, expense: 80 },
  { month: "February", income: 305, expense: 200 },
  { month: "March", income: 237, expense: 120 },
  { month: "April", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
];

export const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

export const lineChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const dummyBudgetOverview = [
  {
    id: 1,
    category: "Food & Dining",
    amountSpent: 500000,
    budgetLimit: 1000000,
  },
  {
    id: 2,
    category: "Transportation",
    amountSpent: 300000,
    budgetLimit: 500000,
  },
  {
    id: 3,
    category: "Entertainment",
    amountSpent: 200000,
    budgetLimit: 400000,
  },
  {
    id: 4,
    category: "Health & Fitness",
    amountSpent: 150000,
    budgetLimit: 300000,
  },
];

export const dummyFinancialGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    amountSaved: 5000000,
    goalAmount: 10000000,
    deadline: "2024-12-31",
  },
  {
    id: 2,
    title: "Vacation",
    amountSaved: 2000000,
    goalAmount: 5000000,
    deadline: "2024-06-30",
  },
  {
    id: 3,
    title: "New Laptop",
    amountSaved: 3000000,
    goalAmount: 3000000,
    deadline: "2024-03-31",
  },
];
