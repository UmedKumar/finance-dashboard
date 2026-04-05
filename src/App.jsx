import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SummaryCards from './components/SummaryCards';
import Charts from './components/Charts';
import Insights from './components/Insights';
import TransactionList from './components/TransactionList';
import { initialTransactions } from './data/mockData';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [role, setRole] = useState('viewer');
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) return JSON.parse(saved);
    return initialTransactions;
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} role={role} setRole={setRole} />
      
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard Overview</h1>
        
        {/* 1. Summary Cards */}
        <SummaryCards transactions={transactions} />

        {/* 2. Charts */}
        <Charts transactions={transactions} />

        {/* 3. NEW: Smart Insights */}
        <Insights transactions={transactions} />

        {/* 4. Transaction Data */}
        <TransactionList 
          transactions={transactions} 
          setTransactions={setTransactions} 
          role={role} 
        />
        
      </main>
    </div>
  );
}

export default App;