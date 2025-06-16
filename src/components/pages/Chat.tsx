import { useState } from "react";
import { Send, Search, MoreHorizontal } from "lucide-react";

const Chat = () => {
  const [selectedClient, setSelectedClient] = useState("acme-corp");
  const [message, setMessage] = useState("");

  const clients = [
    {
      id: "acme-corp",
      name: "Acme Corp",
      lastMessage: "Thanks for the update on the project.",
      timestamp: "2 hours ago",
      unread: 2,
      online: true,
    },
    {
      id: "tech-startup",
      name: "Tech Startup",
      lastMessage: "When can we schedule the next meeting?",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
    },
    {
      id: "global-industries",
      name: "Global Industries",
      lastMessage: "The deliverables look great!",
      timestamp: "2 days ago",
      unread: 1,
      online: true,
    },
    {
      id: "retail-plus",
      name: "Retail Plus",
      lastMessage: "Can you send the latest mockups?",
      timestamp: "3 days ago",
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "client",
      content:
        "Hi Alex, I wanted to check on the progress of our website redesign project.",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      content:
        "Hello! The project is going well. We've completed the initial design phase and are now working on the development.",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      sender: "client",
      content:
        "That's great to hear! When do you expect to have a working prototype ready?",
      timestamp: "10:35 AM",
    },
    {
      id: 4,
      sender: "me",
      content:
        "We should have a working prototype ready by next Friday. I'll send you the link once it's deployed.",
      timestamp: "10:37 AM",
    },
    {
      id: 5,
      sender: "client",
      content: "Perfect! Thanks for the update.",
      timestamp: "10:40 AM",
    },
  ];

  const selectedClientData = clients.find(
    (client) => client.id === selectedClient
  );

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Client List Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client.id)}
              className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                selectedClient === client.id
                  ? "bg-blue-50 border-r-2 border-r-blue-500"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {client.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    {client.online && (
                      <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {client.name}
                    </h3>
                    <p className="text-xs text-gray-500">{client.timestamp}</p>
                  </div>
                </div>
                {client.unread > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full">
                    {client.unread}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 truncate">
                {client.lastMessage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  {selectedClientData?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedClientData?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedClientData?.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
