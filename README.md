#  FinDash – Personal Finance Dashboard

A modern, responsive, and interactive **Personal Finance Dashboard** built with React to help users track income, expenses, and financial insights in a simple and intuitive way.

---

##  Live Overview

FinDash provides a complete financial tracking experience with:
-  Real-time balance updates
-  Interactive charts
-  Smart insights
-  Role-based access control
-  Persistent data storage

---

##  Features

###  Dashboard Overview
- View **Total Balance**, **Income**, and **Expenses** instantly
- Clean card-based UI for quick understanding

###  Smart Insights
- Highest spending category
- Largest single expense
- Savings rate calculation

###  Data Visualization
- **Pie Chart** → Expense breakdown by category
- **Bar Chart** → Monthly income vs expenses

###  Transaction Management
- Add new transactions (Admin mode)
- Delete transactions
- Search by category
- Filter by Income / Expense
- Chronological transaction list

###  Role-Based Access Control (RBAC)
- **Viewer Mode:** Read-only access
- **Admin Mode:** Full control (Add/Delete transactions)

###  Theme Toggle
- Light mode
- Dark mode

###  Data Persistence
- Uses **localStorage**
- Saves:
  - Transactions
  - Theme
  - User role

---

##  Tech Stack

| Technology | Usage |
|---|---|
| React.js (Vite) | Frontend Framework |
| Tailwind CSS | Styling |
| Recharts | Data Visualization |
| Lucide React | Icons |
| LocalStorage | Data Persistence |
| React Hooks | State Management |

---

##  Project Structure

```
src/
├── components/
│   ├── Charts.jsx
│   ├── Insights.jsx
│   ├── Navbar.jsx
│   ├── SummaryCards.jsx
│   └── TransactionList.jsx
├── data/
│   └── mockData.js
├── App.jsx
├── index.css
└── main.jsx
```

| File | Description |
|---|---|
| `Charts.jsx` | Recharts visualizations |
| `Insights.jsx` | Smart calculations (savings rate, top category) |
| `Navbar.jsx` | Top navigation with theme & role toggles |
| `SummaryCards.jsx` | Balance, Income, and Expense cards |
| `TransactionList.jsx` | Table, search, filter, and add form |
| `mockData.js` | Initial dummy data to populate the dashboard |
| `App.jsx` | Main layout and state management |
| `index.css` | Tailwind directives and base styles |
| `main.jsx` | React entry point |

---

##  Installation & Setup

**1️⃣ Clone the Repository**

```bash
git clone https://github.com/UmedKumar/finance-dashboard.git
```

**2️⃣ Navigate to Project Folder**

```bash
cd finance-dashboard
```

**3️⃣ Install Dependencies**

```bash
npm install
```

**4️⃣ Run Development Server**

```bash
npm run dev
```

**5️⃣ Open in Browser**

```
http://localhost:5173
```

---

##  Key Highlights

-  Fast performance with Vite
-  Clean and minimal UI design
-  Fully responsive layout
-  Real-time updates
-  Modular component structure
-  Beginner-friendly architecture

---

##  Future Enhancements

- [ ] Export data to CSV / Excel
- [ ] Authentication system
- [ ] Cloud database integration (Firebase / MongoDB)
- [ ] Budget tracking & alerts
- [ ] AI-based financial recommendations

---

##  Inspiration

Built to simplify personal finance tracking while combining:

-  Data visualization
-  User experience
-  Practical real-world use case

---

> Made with ❤️ using React + Vite