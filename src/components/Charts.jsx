import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip as PieTooltip
} from 'recharts';

export default function Charts({ transactions }) {
  // --- DATA PREPARATION ---
  
  // 1. Prepare data for Bar Chart (Monthly Income vs Expense)
  const monthlyDataMap = transactions.reduce((acc, curr) => {
    // Get just the month and year (e.g., "Mar")
    const month = new Date(curr.date).toLocaleString('default', { month: 'short' });
    
    if (!acc[month]) {
      acc[month] = { name: month, income: 0, expense: 0 };
    }
    
    // Add the amount to either income or expense
    acc[month][curr.type] += curr.amount;
    return acc;
  }, {});
  
  // Convert map into an array for the chart library
  const barChartData = Object.values(monthlyDataMap);

  // 2. Prepare data for Pie Chart (Expense Categories)
  const expenseDataMap = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { name: curr.category, value: 0 };
      }
      acc[curr.category].value += curr.amount;
      return acc;
    }, {});

  const pieChartData = Object.values(expenseDataMap);
  
  // Colors for the Pie Chart slices
  const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#06b6d4', '#3b82f6', '#8b5cf6'];

  // --- UI RENDERING ---
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      
      {/* Box 1: Pie Chart (Expenses by Category) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Expense Breakdown</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <PieTooltip 
                formatter={(value) => `₹${value.toLocaleString()}`}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Box 2: Bar Chart (Monthly Income vs Expenses) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Income vs Expenses</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
              <BarTooltip 
                formatter={(value) => `₹${value.toLocaleString()}`}
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Bar dataKey="income" name="Income" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={40} />
              <Bar dataKey="expense" name="Expense" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}