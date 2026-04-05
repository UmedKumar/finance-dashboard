import { Sun, Moon, User, Shield } from 'lucide-react';

export default function Navbar({ theme, setTheme, role, setRole }) {
  // Functions to handle toggling
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleRole = () => setRole(role === 'viewer' ? 'admin' : 'viewer');

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center transition-colors duration-300">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        FinDash
      </div>
      
      <div className="flex items-center gap-4">
        {/* Role Toggle Button */}
        <button
          onClick={toggleRole}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {role === 'admin' ? <Shield size={18} className="text-red-500" /> : <User size={18} className="text-blue-500" />}
          <span className="capitalize font-medium">{role} Mode</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
        </button>
      </div>
    </nav>
  );
}