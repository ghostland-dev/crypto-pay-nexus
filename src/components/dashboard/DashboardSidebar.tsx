
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  CreditCard, 
  Home, 
  Layers, 
  Menu, 
  Settings, 
  Users, 
  Wallet, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    icon: Home,
    label: "Vue d'ensemble",
    path: "/dashboard",
  },
  {
    icon: BarChart3,
    label: "Analyses",
    path: "/dashboard/analytics",
  },
  {
    icon: CreditCard,
    label: "Transactions",
    path: "/dashboard/transactions",
  },
  {
    icon: Wallet,
    label: "Portefeuilles",
    path: "/dashboard/wallets",
  },
  {
    icon: Layers,
    label: "Intégrations",
    path: "/dashboard/integrations",
  },
  {
    icon: Users,
    label: "Clients",
    path: "/dashboard/customers",
  },
  {
    icon: Settings,
    label: "Paramètres",
    path: "/dashboard/settings",
  },
];

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Overlay for mobile sidebar */}
      <div 
        className={cn(
          "fixed inset-0 z-40 lg:hidden bg-black/50 transition-opacity duration-200 ease-in-out",
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        onClick={() => setIsCollapsed(true)}
      />

      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-crypto-purple text-white shadow-lg rounded-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside 
        className={cn(
          "flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-crypto-gray transition-all duration-300 ease-in-out z-40",
          "fixed inset-y-0 left-0 lg:relative transform lg:translate-x-0",
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full crypto-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">CW</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-crypto-blue to-crypto-purple bg-clip-text text-transparent">
              CryptoWhite
            </span>
          </Link>
        </div>

        {/* Menu items */}
        <nav className="flex-1 py-6 px-3 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-crypto-purple/10 text-crypto-purple"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-crypto-gray/70"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-crypto-gray/50 rounded-lg p-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Besoin d'aide avec votre intégration ?
            </p>
            <Button 
              className="w-full bg-crypto-purple hover:bg-crypto-purple/90 text-white"
              size="sm"
              asChild
            >
              <Link to="/docs">
                Voir la documentation
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
