import React from 'react';
import { Users, FolderOpen, Receipt, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const summaryCards = [
    {
      title: 'Total Clients',
      value: '24',
      change: '+2 this month',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Projects',
      value: '12',
      change: '+3 this week',
      icon: FolderOpen,
      color: 'bg-green-500',
    },
    {
      title: 'Pending Invoices',
      value: '$8,450',
      change: '5 overdue',
      icon: Receipt,
      color: 'bg-yellow-500',
    },
    {
      title: 'Monthly Revenue',
      value: '$24,680',
      change: '+12% from last month',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  const recentActivity = [
    { action: 'Invoice #1234 sent to Acme Corp', time: '2 hours ago', type: 'invoice' },
    { action: 'Project files uploaded by Sarah Wilson', time: '4 hours ago', type: 'file' },
    { action: 'New client "Tech Startup" added', time: '1 day ago', type: 'client' },
    { action: 'Payment received from Global Industries', time: '2 days ago', type: 'payment' },
    { action: 'Project "Website Redesign" completed', time: '3 days ago', type: 'project' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
        <p className="text-gray-600">Here's what's happening with your business today.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${card.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">{card.value}</p>
                <p className="text-sm text-gray-500">{card.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'invoice' ? 'bg-blue-500' :
                  activity.type === 'file' ? 'bg-green-500' :
                  activity.type === 'client' ? 'bg-purple-500' :
                  activity.type === 'payment' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`} />
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