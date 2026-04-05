import { Lightbulb } from 'lucide-react';

export default function Insights({ transactions }) {
  // --- CALCULATE INSIGHTS ---
  
  // To get only the expenses
  const expenses = transactions.filter(t => t.type === 'expense');

  // 1. Calculate Highest Spending Category
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  let highestCategory = 'None';
  let highestAmount = 0;

  for (const [category, amount] of Object.entries(categoryTotals)) {
    if (amount > highestAmount) {
      highestAmount = amount;
      highestCategory = category;
    }
  }

  // 2. Find Largest Single Expense
  let largestExpense = { category: 'None', amount: 0 };
  if (expenses.length > 0) {
    largestExpense = expenses.reduce((max, t) => t.amount > max.amount ? t : max, expenses[0]);
  }

  // 3. Simple Savings Rate (Total Income vs Total Expense)
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome * 100).toFixed(1) : 0;

  // --- UI RENDERING ---
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Lightbulb className="text-yellow-500" size={20} />
        Smart Insights
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Insight 1: Top Spending Category */}
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800/30">
          <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-1">Top Spending Category</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">{highestCategory}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">₹{highestAmount.toLocaleString()} total</div>
        </div>

        {/* Insight 2: Largest Single Expense */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Largest Single Expense</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">{largestExpense.category}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">₹{largestExpense.amount.toLocaleString()}</div>
        </div>

        {/* Insight 3: Savings Rate */}
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800/30">
          <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">Overall Savings Rate</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">{savingsRate}%</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">of total income saved</div>
        </div>
      </div>
    </div>
  );
}