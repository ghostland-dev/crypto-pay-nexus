
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  CreditCard, 
  DollarSign, 
  Users, 
  Wallet 
} from "lucide-react";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { TransactionChart } from "@/components/dashboard/TransactionChart";

const Dashboard = () => {
  const [stats, setStats] = useState({
    revenue: "12,543€",
    revenueChange: 12.5,
    transactions: 621,
    transactionsChange: 8.2,
    customers: 24,
    customersChange: -3.1,
    wallets: 4,
    walletsChange: 0,
  });

  return (
    <DashboardLayout title="Vue d'ensemble">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revenue}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {stats.revenueChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{stats.revenueChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{stats.revenueChange}%</span>
                </>
              )}
              <span className="ml-1">depuis le mois dernier</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.transactions}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {stats.transactionsChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{stats.transactionsChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{stats.transactionsChange}%</span>
                </>
              )}
              <span className="ml-1">depuis le mois dernier</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.customers}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {stats.customersChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{stats.customersChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{stats.customersChange}%</span>
                </>
              )}
              <span className="ml-1">depuis le mois dernier</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portefeuilles</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.wallets}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {stats.walletsChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{stats.walletsChange}%</span>
                </>
              ) : stats.walletsChange < 0 ? (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{stats.walletsChange}%</span>
                </>
              ) : (
                <span>Pas de changement</span>
              )}
              <span className="ml-1">depuis le mois dernier</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Aperçu des transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Transactions récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
