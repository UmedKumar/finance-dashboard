import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function SummaryCards({ transactions }) {

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      
      {/* Total Balance Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-500 dark:text-gray-400 font-medium">Total Balance</h3>
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Wallet className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          ₹{balance.toLocaleString()}
        </p>
      </div>

      {/* Total Income Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-500 dark:text-gray-400 font-medium">Total Income</h3>
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          ₹{totalIncome.toLocaleString()}
        </p>
      </div>

      {/* Total Expense Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-500 dark:text-gray-400 font-medium">Total Expenses</h3>
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <TrendingDown className="text-red-600 dark:text-red-400" size={24} />
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          ₹{totalExpense.toLocaleString()}
        </p>
      </div>

    </div>
  );
}