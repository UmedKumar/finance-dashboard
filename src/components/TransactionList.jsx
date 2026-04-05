import { useState } from 'react';
import { Search, Plus, Trash2 } from 'lucide-react';

export default function TransactionList({ transactions, setTransactions, role }) {
  // --- STATE FOR SEARCH, FILTER, AND NEW TRANSACTIONS ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  // State for the "Add Transaction" form
  const [newTx, setNewTx] = useState({ date: '', amount: '', category: '', type: 'expense' });

  // --- ACTIONS ---
  const handleAddTransaction = (e) => {
    e.preventDefault(); 
    
    const transaction = {
      id: Date.now(), 
      date: newTx.date,
      amount: parseFloat(newTx.amount),
      category: newTx.category,
      type: newTx.type
    };

    setTransactions([transaction, ...transactions]);
    setNewTx({ date: '', amount: '', category: '', type: 'expense' });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // --- FILTERING AND SORTING ---
  const displayTransactions = transactions
    .filter(t => {
      const matchesSearch = t.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || t.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorts dates from newest to oldest!

  // --- UI RENDERING ---
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
      
      {/* Header & Controls */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>
          
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="income">Income Only</option>
            <option value="expense">Expense Only</option>
          </select>
        </div>
      </div>

      {/* Add Transaction Form */}
      {role === 'admin' && (
        <form onSubmit={handleAddTransaction} className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border-b border-gray-100 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
            <input required type="date" value={newTx.date} onChange={e => setNewTx({...newTx, date: e.target.value})} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
            <input required type="text" placeholder="e.g. Coffee" value={newTx.category} onChange={e => setNewTx({...newTx, category: e.target.value})} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount (₹)</label>
            <input required type="number" min="1" placeholder="0" value={newTx.amount} onChange={e => setNewTx({...newTx, amount: e.target.value})} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
            <select value={newTx.type} onChange={e => setNewTx({...newTx, type: e.target.value})} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Plus size={18} /> Add
          </button>
        </form>
      )}

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm border-b border-gray-100 dark:border-gray-700">
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium">Amount</th>
              {role === 'admin' && <th className="p-4 font-medium text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {displayTransactions.length > 0 ? (
              displayTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-gray-900 dark:text-gray-300">{tx.date}</td>
                  <td className="p-4 text-gray-900 dark:text-gray-300 font-medium">{tx.category}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                      tx.type === 'income' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                    </span>
                  </td>
                  <td className={`p-4 font-bold ${tx.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                    {tx.type === 'income' ? '+' : '-'}₹{tx.amount.toLocaleString()}
                  </td>
                  {role === 'admin' && (
                    <td className="p-4 text-right">
                      <button onClick={() => handleDelete(tx.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}