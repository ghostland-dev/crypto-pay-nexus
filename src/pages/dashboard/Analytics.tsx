
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownRight, ArrowUpRight, DollarSign, LineChart, Users } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const AnalyticsPage = () => {
  const [timeframe, setTimeframe] = useState("month");
  
  // Données fictives pour les graphiques
  const balanceData = [
    { name: 'Jan', value: 5000 },
    { name: 'Feb', value: 8000 },
    { name: 'Mar', value: 7500 },
    { name: 'Apr', value: 9000 },
    { name: 'May', value: 11000 },
    { name: 'Jun', value: 10000 },
    { name: 'Jul', value: 12500 },
    { name: 'Aug', value: 14000 },
    { name: 'Sep', value: 16000 },
    { name: 'Oct', value: 18000 },
    { name: 'Nov', value: 21000 },
    { name: 'Dec', value: 25000 },
  ];
  
  const transactionData = [
    { name: 'Jan', entrées: 8000, sorties: 3000 },
    { name: 'Feb', entrées: 12000, sorties: 4000 },
    { name: 'Mar', entrées: 10000, sorties: 2500 },
    { name: 'Apr', entrées: 15000, sorties: 6000 },
    { name: 'May', entrées: 18000, sorties: 7000 },
    { name: 'Jun', entrées: 16000, sorties: 6000 },
    { name: 'Jul', entrées: 19000, sorties: 6500 },
    { name: 'Aug', entrées: 22000, sorties: 8000 },
    { name: 'Sep', entrées: 25000, sorties: 9000 },
    { name: 'Oct', entrées: 28000, sorties: 10000 },
    { name: 'Nov', entrées: 32000, sorties: 11000 },
    { name: 'Dec', entrées: 37000, sorties: 12000 },
  ];
  
  const customerGrowthData = [
    { name: 'Jan', customers: 10 },
    { name: 'Feb', customers: 18 },
    { name: 'Mar', customers: 24 },
    { name: 'Apr', customers: 35 },
    { name: 'May', customers: 47 },
    { name: 'Jun', customers: 56 },
    { name: 'Jul', customers: 69 },
    { name: 'Aug', customers: 85 },
    { name: 'Sep', customers: 104 },
    { name: 'Oct', customers: 125 },
    { name: 'Nov', customers: 142 },
    { name: 'Dec', customers: 165 },
  ];
  
  const stats = {
    revenue: {
      value: "32,543€",
      change: 24.6,
      label: "Revenu total"
    },
    transactions: {
      value: "1,243",
      change: 18.2,
      label: "Transactions"
    },
    customers: {
      value: "165",
      change: 15.8,
      label: "Clients"
    },
    averageValue: {
      value: "197€",
      change: -2.3,
      label: "Valeur moyenne"
    }
  };
  
  return (
    <DashboardLayout title="Analyses">
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stats).map(([key, stat]) => (
            <Card key={key}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                {key === 'revenue' ? (
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                ) : key === 'transactions' ? (
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Users className="h-4 w-4 text-muted-foreground" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  {stat.change > 0 ? (
                    <>
                      <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                      <span className="text-green-500">+{stat.change}%</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                      <span className="text-red-500">{stat.change}%</span>
                    </>
                  )}
                  <span className="ml-1">depuis le mois dernier</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Balance Evolution */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Évolution du solde</CardTitle>
              <CardDescription>
                Évolution de votre solde total au cours du temps
              </CardDescription>
              <Tabs 
                defaultValue="month" 
                value={timeframe} 
                onValueChange={setTimeframe}
                className="mt-2"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="month">Mois</TabsTrigger>
                  <TabsTrigger value="quarter">Trimestre</TabsTrigger>
                  <TabsTrigger value="year">Année</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={balanceData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Transaction Volume */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Volume de transactions</CardTitle>
              <CardDescription>
                Entrées et sorties de fonds sur votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={transactionData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="entrées" fill="#4ade80" />
                  <Bar dataKey="sorties" fill="#f87171" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Customer Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Croissance des clients</CardTitle>
            <CardDescription>
              Évolution du nombre de clients au cours du temps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={customerGrowthData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="customers" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
