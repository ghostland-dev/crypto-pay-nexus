import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Bitcoin, CreditCard, DollarSign, LineChart, LogOut, ReceiptText, RefreshCw, User, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const stats = [
    {
      title: "Transactions",
      value: "1,294",
      change: "+12.3%",
      icon: ReceiptText,
      trend: "up",
    },
    {
      title: "Revenus",
      value: "€24,563",
      change: "+8.2%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Clients",
      value: "573",
      change: "+32.1%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Conversion",
      value: "3.2%",
      change: "-0.4%",
      icon: RefreshCw,
      trend: "down",
    },
  ];

  const recentTransactions = [
    { id: "TX123456", amount: "€245.50", currency: "BTC", status: "completed", date: "Il y a 2 heures" },
    { id: "TX123455", amount: "€1,000.00", currency: "ETH", status: "pending", date: "Il y a 5 heures" },
    { id: "TX123454", amount: "€58.23", currency: "USDT", status: "completed", date: "Il y a 1 jour" },
    { id: "TX123453", amount: "€324.00", currency: "BTC", status: "failed", date: "Il y a 2 jours" },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-crypto-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tableau de bord</h1>
              <p className="text-gray-600 dark:text-gray-400">Bienvenue {user?.name || "sur votre espace CryptoPay"}</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Configurer API
              </Button>
              <Button className="bg-crypto-blue hover:bg-crypto-blue/90 flex items-center gap-2">
                <Bitcoin className="h-4 w-4" />
                Nouveau paiement
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full p-2 bg-gray-100 dark:bg-crypto-gray">
                      <stat.icon className="h-6 w-6 text-crypto-blue" />
                    </div>
                    <span 
                      className={`text-sm font-medium ${
                        stat.trend === "up" 
                          ? "text-green-600 dark:text-green-400" 
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Activité des paiements</CardTitle>
                  <CardDescription>Évolution des transactions sur 30 jours</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Exporter
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-crypto-gray rounded-md">
                  <LineChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Graphique d'activité (à implémenter)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transactions récentes</CardTitle>
                <CardDescription>Dernières transactions effectuées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3">
                      <div className="flex items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          tx.status === "completed" ? "bg-green-100 text-green-600" : 
                          tx.status === "pending" ? "bg-yellow-100 text-yellow-600" : 
                          "bg-red-100 text-red-600"
                        }`}>
                          {tx.currency === "BTC" ? <Bitcoin className="h-4 w-4" /> : 
                           tx.currency === "ETH" ? <span className="text-sm font-bold">ETH</span> : 
                           <span className="text-sm font-bold">USD</span>}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{tx.id}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{tx.amount}</p>
                        <p className={`text-xs ${
                          tx.status === "completed" ? "text-green-600" : 
                          tx.status === "pending" ? "text-yellow-600" : 
                          "text-red-600"
                        }`}>
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-crypto-purple hover:text-crypto-purple/80">
                  Voir toutes les transactions
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil</CardTitle>
                <CardDescription>Gérez vos informations personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-crypto-blue/20 flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-crypto-blue" />
                  </div>
                  <h3 className="text-lg font-medium">{user?.name || "Jean Dupont"}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email || "jean.dupont@exemple.com"}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    Modifier le profil
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portefeuilles</CardTitle>
                <CardDescription>Vos portefeuilles connectés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-md">
                    <div className="flex items-center">
                      <Bitcoin className="h-5 w-5 text-yellow-500" />
                      <span className="ml-3 font-medium">Bitcoin</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Gérer
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-md">
                    <div className="flex items-center">
                      <div className="h-5 w-5 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-500">ETH</span>
                      </div>
                      <span className="ml-3 font-medium">Ethereum</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Gérer
                    </Button>
                  </div>
                  <Button className="w-full bg-crypto-purple hover:bg-crypto-purple/90">
                    Ajouter un portefeuille
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clés API</CardTitle>
                <CardDescription>Gérez vos clés d'API pour l'intégration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Clé publique</p>
                    <div className="flex mt-1">
                      <Input 
                        value="pk_test_51HxBQHGy7yJ..." 
                        className="rounded-r-none bg-gray-50" 
                        readOnly 
                      />
                      <Button variant="outline" className="rounded-l-none border-l-0">
                        Copier
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Clé secrète</p>
                      <p className="text-xs text-gray-500">Cachée</p>
                    </div>
                    <div className="flex mt-1">
                      <Input 
                        value="••••••••••••••••••••••••" 
                        className="rounded-r-none bg-gray-50" 
                        readOnly 
                      />
                      <Button variant="outline" className="rounded-l-none border-l-0">
                        Révéler
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Régénérer les clés
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
