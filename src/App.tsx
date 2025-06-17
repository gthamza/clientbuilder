import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Projects from "./components/pages/Projects";
import Clients from "./components/pages/Clients";
import Files from "./components/pages/Files";
import Invoices from "./components/pages/Invoices";
import Chat from "./components/pages/Chat";
import Settings from "./components/pages/Settings";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Default to false
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  // Redirect to dashboard after login/signup
  useEffect(() => {
    if (isAuthenticated) {
      setCurrentPage("dashboard");
    }
  }, [isAuthenticated]);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setAuthMode("signin");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        return <Projects />;
      case "clients":
        return <Clients />;
      case "files":
        return <Files />;
      case "invoices":
        return <Invoices />;
      case "chat":
        return <Chat />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  // Show authentication screens if user is not authenticated
  if (!isAuthenticated) {
    return authMode === "signin" ? (
      <SignIn
        onSignIn={handleSignIn}
        onSwitchToSignUp={() => setAuthMode("signup")}
      />
    ) : (
      <SignUp
        onSignUp={handleSignUp}
        onSwitchToSignIn={() => setAuthMode("signin")}
      />
    );
  }

  // Show main app layout when authenticated
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSignOut={handleSignOut} />
      <div className="flex">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <div className="p-6">{renderCurrentPage()}</div>
        </main>
      </div>
    </div>
  );
}

export default App;