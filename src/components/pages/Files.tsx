import React from 'react';
import { Upload, FileText, Image, Download, MoreHorizontal } from 'lucide-react';

const Files = () => {
  const files = [
    {
      id: 1,
      name: 'Project Proposal.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadedBy: 'Alex Johnson',
      uploadedAt: '2024-01-15',
      client: 'Acme Corp',
    },
    {
      id: 2,
      name: 'Logo Design.png',
      type: 'image',
      size: '1.8 MB',
      uploadedBy: 'Sarah Wilson',
      uploadedAt: '2024-01-14',
      client: 'Tech Startup',
    },
    {
      id: 3,
      name: 'Contract Agreement.pdf',
      type: 'pdf',
      size: '945 KB',
      uploadedBy: 'Alex Johnson',
      uploadedAt: '2024-01-12',
      client: 'Global Industries',
    },
    {
      id: 4,
      name: 'Website Mockup.png',
      type: 'image',
      size: '3.2 MB',
      uploadedBy: 'Design Team',
      uploadedAt: '2024-01-10',
      client: 'Retail Plus',
    },
    {
      id: 5,
      name: 'Meeting Notes.pdf',
      type: 'pdf',
      size: '567 KB',
      uploadedBy: 'Alex Johnson',
      uploadedAt: '2024-01-09',
      client: 'Digital Agency',
    },
    {
      id: 6,
      name: 'Brand Guidelines.pdf',
      type: 'pdf',
      size: '4.1 MB',
      uploadedBy: 'Creative Team',
      uploadedAt: '2024-01-08',
      client: 'Acme Corp',
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-8 h-8 text-blue-500" />;
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />;
      default:
        return <FileText className="w-8 h-8 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Files</h1>
          <p className="text-gray-600">Manage and organize your project files</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Upload className="w-4 h-4" />
          <span>Upload File</span>
        </button>
      </div>

      {/* File Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <div key={file.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getFileIcon(file.type)}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{file.name}</h3>
                  <p className="text-xs text-gray-500">{file.size}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Client</span>
                <span className="font-medium text-gray-900">{file.client}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Uploaded by</span>
                <span className="font-medium text-gray-900">{file.uploadedBy}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Date</span>
                <span className="font-medium text-gray-900">{file.uploadedAt}</span>
              </div>
            </div>
            
            <button className="mt-4 w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm">Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;