import { useUser } from "@clerk/clerk-react";
import { Users, FolderOpen, Receipt, TrendingUp } from "lucide-react";
import { useMemo } from "react";

// Example data for calculation
const clients = [
  { id: 1, name: "Acme Corp", createdAt: "2024-06-01" },
  { id: 2, name: "Tech Startup", createdAt: "2024-06-10" },
  { id: 3, name: "Global Industries", createdAt: "2024-05-15" },
  // ...add more as needed
];

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "Active",
    startedAt: "2024-06-12",
  },
  { id: 2, name: "Mobile App", status: "Active", startedAt: "2024-06-10" },
  {
    id: 3,
    name: "Brand Identity",
    status: "Completed",
    startedAt: "2024-05-01",
  },
  // ...add more as needed
];

const invoices = [
  {
    id: "INV-001",
    amount: 5500,
    status: "Pending",
    dueDate: "2024-06-20",
    paid: false,
    overdue: false,
  },
  {
    id: "INV-002",
    amount: 3200,
    status: "Overdue",
    dueDate: "2024-06-10",
    paid: false,
    overdue: true,
  },
  {
    id: "INV-003",
    amount: 2450,
    status: "Paid",
    dueDate: "2024-06-05",
    paid: true,
    paidDate: "2024-06-06",
  },
  {
    id: "INV-004",
    amount: 1300,
    status: "Pending",
    dueDate: "2024-06-25",
    paid: false,
    overdue: false,
  },
  // ...add more as needed
];

const payments = [
  { id: 1, amount: 2450, date: "2024-06-06" },
  { id: 2, amount: 1800, date: "2024-06-01" },
  // ...add more as needed
];

const Dashboard = () => {
  // Calculate summary values
  const {
    totalClients,
    newClientsThisMonth,
    activeProjects,
    newProjectsThisWeek,
    pendingInvoices,
    overdueInvoices,
    monthlyRevenue,
    revenueChange,
  } = useMemo(() => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());

    // Clients
    const totalClients = clients.length;
    const newClientsThisMonth = clients.filter(
      (c) => new Date(c.createdAt) >= startOfMonth
    ).length;

    // Projects
    const activeProjects = projects.filter((p) => p.status === "Active").length;
    const newProjectsThisWeek = projects.filter(
      (p) => new Date(p.startedAt) >= startOfWeek
    ).length;

    // Invoices
    const pendingInvoices = invoices.filter((i) => i.status === "Pending");
    const overdueInvoices = invoices.filter((i) => i.status === "Overdue");
    const pendingInvoicesAmount = pendingInvoices.reduce(
      (sum, i) => sum + i.amount,
      0
    );
    const overdueInvoicesCount = overdueInvoices.length;

    // Revenue
    const thisMonth = now.toISOString().slice(0, 7);
    const monthlyRevenue = payments
      .filter((p) => p.date.startsWith(thisMonth))
      .reduce((sum, p) => sum + p.amount, 0);

    // For demo, fake a revenue change
    const revenueChange = "+12% from last month";

    return {
      totalClients,
      newClientsThisMonth,
      activeProjects,
      newProjectsThisWeek,
      pendingInvoices: `$${pendingInvoicesAmount.toLocaleString()}`,
      overdueInvoices: `${overdueInvoicesCount} overdue`,
      pendingInvoicesAmount,
      overdueInvoicesCount,
      monthlyRevenue: `$${monthlyRevenue.toLocaleString()}`,
      revenueChange,
    };
  }, []);

  const summaryCards = [
    {
      title: "Total Clients",
      value: totalClients,
      change: `+${newClientsThisMonth} this month`,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Active Projects",
      value: activeProjects,
      change: `+${newProjectsThisWeek} this week`,
      icon: FolderOpen,
      color: "bg-green-500",
    },
    {
      title: "Pending Invoices",
      value: pendingInvoices,
      change: overdueInvoices,
      icon: Receipt,
      color: "bg-yellow-500",
    },
    {
      title: "Monthly Revenue",
      value: monthlyRevenue,
      change: revenueChange,
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ];

  const recentActivity = [
    {
      action: "Invoice #1234 sent to Acme Corp",
      time: "2 hours ago",
      type: "invoice",
    },
    {
      action: "Project files uploaded by Sarah Wilson",
      time: "4 hours ago",
      type: "file",
    },
    {
      action: 'New client "Tech Startup" added',
      time: "1 day ago",
      type: "client",
    },
    {
      action: "Payment received from Global Industries",
      time: "2 days ago",
      type: "payment",
    },
    {
      action: 'Project "Website Redesign" completed',
      time: "3 days ago",
      type: "project",
    },
  ];
  const { user } = useUser();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.firstName || user?.username || "Guest"}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${card.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {card.value}
                </p>
                <p className="text-sm text-gray-500">{card.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "invoice"
                      ? "bg-blue-500"
                      : activity.type === "file"
                      ? "bg-green-500"
                      : activity.type === "client"
                      ? "bg-purple-500"
                      : activity.type === "payment"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
