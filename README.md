# FinDash - Personal Finance Dashboard

A clean, responsive, and interactive personal finance dashboard built as a frontend development assignment. This application allows users to track their financial activity, view insightful charts, and manage their transactions.

##  Features

* **Dashboard Overview:** View total balance, income, and expenses at a glance.
* **Smart Insights:** Automatically calculates the highest spending category, largest single expense, and overall savings rate.
* **Data Visualizations:** Interactive Pie Chart for expense breakdowns and Bar Chart for monthly income vs. expenses.
* **Transaction Management:** * View all transactions in a sortable, chronologically ordered table.
    * Search transactions by category.
    * Filter by Income or Expense.
* **Role-Based Access Control (RBAC):**
    * **Viewer Mode:** Can only view data and charts.
    * **Admin Mode:** Unlocks the ability to add new transactions and delete existing ones.
* **Theme Toggle:** Seamlessly switch between Light and Dark mode.
* **Data Persistence:** Uses browser `localStorage` so your data and theme preferences are saved even if you refresh the page.

##  Tech Stack

* **Framework:** React.js (with Vite for fast bundling)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Charts:** Recharts
* **State Management:** React Hooks (`useState`, `useEffect`) & LocalStorage

##  Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone the repository (or download the zip file):
   ```bash
   git clone <your-repository-url>