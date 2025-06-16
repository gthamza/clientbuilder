import React from 'react';
import { Plus, MoreHorizontal, Download, Eye } from 'lucide-react';

const Invoices = () => {
  const invoices = [
    {
      id: 'INV-001',
      client: 'Acme Corp',
      amount: '$5,500',
      status: 'Paid',
      dueDate: '2024-01-15',
      issueDate: '2024-01-01',
      paidDate: '2024-01-10',
    },
    {
      id: 'INV-002',
      client: 'Tech Startup',
      amount: '$3,200',
      status: 'Pending',
      dueDate: '2024-01-20',
      issueDate: '2024-01-05',
      paidDate: null,
    },
    {
      id: 'INV-003',
      client: 'Global Industries',
      amount: '$7,800',
      status: 'Overdue',
      dueDate: '2024-01-10',
      issueDate: '2023-12-27',
      paidDate: null,
    },
    {
      id: 'INV-004',
      client: 'Retail Plus',
      amount: '$4,150',
      status: 'Pending',
      dueDate: '2024-01-25',
      issueDate: '2024-01-10',
      paidDate: null,
    },
    {
      id: 'INV-005',
      client: 'Digital Agency',
      amount: '$2,900',
      status: 'Paid',
      dueDate: '2024-01-18',
      issueDate: '2024-01-03',
      paidDate: '2024-01-15',
    },
    {
      id: 'INV-006',
      client: 'Acme Corp',
      amount: '$6,400',
      status: 'Draft',
      dueDate: '2024-01-30',
      issueDate: '2024-01-15',
      paidDate: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
          <p className="text-gray-600">Track and manage your client invoices</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Invoice</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Outstanding</p>
          <p className="text-2xl font-bold text-red-600">$10,250</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Paid This Month</p>
          <p className="text-2xl font-bold text-green-600">$8,400</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Overdue</p>
          <p className="text-2xl font-bold text-red-600">$7,800</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Invoices</p>
          <p className="text-2xl font-bold text-gray-900">6</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{invoice.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{invoice.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{invoice.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.issueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoices;