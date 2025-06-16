import {
  Upload,
  FileText,
  Image,
  Download,
  MoreHorizontal,
  X,
} from "lucide-react";
import { useState } from "react";

const Files = () => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadedBy: "Alex Johnson",
      uploadedAt: "2024-01-15",
      client: "Acme Corp",
    },
    {
      id: 2,
      name: "Logo Design.png",
      type: "image",
      size: "1.8 MB",
      uploadedBy: "Sarah Wilson",
      uploadedAt: "2024-01-14",
      client: "Tech Startup",
    },
    {
      id: 3,
      name: "Contract Agreement.pdf",
      type: "pdf",
      size: "945 KB",
      uploadedBy: "Alex Johnson",
      uploadedAt: "2024-01-12",
      client: "Global Industries",
    },
    {
      id: 4,
      name: "Website Mockup.png",
      type: "image",
      size: "3.2 MB",
      uploadedBy: "Design Team",
      uploadedAt: "2024-01-10",
      client: "Retail Plus",
    },
    {
      id: 5,
      name: "Meeting Notes.pdf",
      type: "pdf",
      size: "567 KB",
      uploadedBy: "Alex Johnson",
      uploadedAt: "2024-01-09",
      client: "Digital Agency",
    },
    {
      id: 6,
      name: "Brand Guidelines.pdf",
      type: "pdf",
      size: "4.1 MB",
      uploadedBy: "Creative Team",
      uploadedAt: "2024-01-08",
      client: "Acme Corp",
    },
  ]);
  const [form, setForm] = useState({
    name: "",
    type: "pdf",
    size: "",
    uploadedBy: "",
    uploadedAt: "",
    client: "",
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <Image className="w-8 h-8 text-blue-500" />;
      case "pdf":
        return <FileText className="w-8 h-8 text-red-500" />;
      default:
        return <FileText className="w-8 h-8 text-gray-500" />;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddFile = (e: React.FormEvent) => {
    e.preventDefault();
    setFiles([
      {
        id: files.length + 1,
        ...form,
      },
      ...files,
    ]);
    setForm({
      name: "",
      type: "pdf",
      size: "",
      uploadedBy: "",
      uploadedAt: "",
      client: "",
    });
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Files</h1>
          <p className="text-gray-600">
            Manage and organize your project files
          </p>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          onClick={() => setShowModal(true)}
        >
          <Upload className="w-4 h-4" />
          <span>Upload File</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold mb-4">Upload New File</h2>
            <form onSubmit={handleAddFile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  File Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="pdf">PDF</option>
                  <option value="image">Image</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  value={form.size}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 2.4 MB"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Uploaded By
                </label>
                <input
                  type="text"
                  name="uploadedBy"
                  value={form.uploadedBy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="uploadedAt"
                  value={form.uploadedAt}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Client
                </label>
                <input
                  type="text"
                  name="client"
                  value={form.client}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
              >
                Upload File
              </button>
            </form>
          </div>
        </div>
      )}

      {/* File Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <div
            key={file.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getFileIcon(file.type)}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </h3>
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
                <span className="font-medium text-gray-900">
                  {file.uploadedBy}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Date</span>
                <span className="font-medium text-gray-900">
                  {file.uploadedAt}
                </span>
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
