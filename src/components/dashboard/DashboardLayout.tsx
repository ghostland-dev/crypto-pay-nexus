
import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{title} | CryptoWhite Dashboard</title>
      </Helmet>
      <div className="flex h-screen bg-gray-100 dark:bg-crypto-gray/30">
        <DashboardSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <DashboardHeader />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
