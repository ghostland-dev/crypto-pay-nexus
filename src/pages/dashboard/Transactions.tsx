
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Filter, ArrowUpDown } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  customer: string;
  email: string;
  amount: string;
  status: "completed" | "processing" | "failed";
  method: string;
}

const transactions: Transaction[] = [
  {
    id: "TX-1234",
    date: "05/04/2025",
    customer: "Sophie Martin",
    email: "sophie@example.com",
    amount: "538.20€",
    status: "completed",
    method: "Bitcoin (BTC)",
  },
  {
    id: "TX-1235",
    date: "04/04/2025",
    customer: "Thomas Dubois",
    email: "thomas@example.com",
    amount: "149.99€",
    status: "processing",
    method: "Ethereum (ETH)",
  },
  {
    id: "TX-1236",
    date: "03/04/2025",
    customer: "Marie Leroy",
    email: "marie@example.com",
    amount: "99.50€",
    status: "completed",
    method: "Tether (USDT)",
  },
  {
    id: "TX-1237",
    date: "03/04/2025",
    customer: "Lucas Bernard",
    email: "lucas@example.com",
    amount: "299.00€",
    status: "failed",
    method: "Bitcoin (BTC)",
  },
  {
    id: "TX-1238",
    date: "02/04/2025",
    customer: "Emma Petit",
    email: "emma@example.com",
    amount: "75.30€",
    status: "completed",
    method: "USD Coin (USDC)",
  },
  {
    id: "TX-1239",
    date: "01/04/2025",
    customer: "Nicolas Durand",
    email: "nicolas@example.com",
    amount: "189.99€",
    status: "completed",
    method: "Ethereum (ETH)",
  },
  {
    id: "TX-1240",
    date: "01/04/2025",
    customer: "Julie Martin",
    email: "julie@example.com",
    amount: "42.50€",
    status: "processing",
    method: "Bitcoin (BTC)",
  },
  {
    id: "TX-1241",
    date: "31/03/2025",
    customer: "Alexandre Dupont",
    email: "alex@example.com",
    amount: "520.00€",
    status: "completed",
    method: "Tether (USDT)",
  },
  {
    id: "TX-1242",
    date: "30/03/2025",
    customer: "Camille Rousseau",
    email: "camille@example.com",
    amount: "67.80€",
    status: "completed",
    method: "Ethereum (ETH)",
  },
  {
    id: "TX-1243",
    date: "29/03/2025",
    customer: "Paul Lefèvre",
    email: "paul@example.com",
    amount: "250.00€",
    status: "failed",
    method: "Bitcoin (BTC)",
  },
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactions);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === "") {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(
        (transaction) =>
          transaction.id.toLowerCase().includes(term) ||
          transaction.customer.toLowerCase().includes(term) ||
          transaction.email.toLowerCase().includes(term) ||
          transaction.method.toLowerCase().includes(term)
      );
      setFilteredTransactions(filtered);
    }
  };

  const getStatusBadge = (status: "completed" | "processing" | "failed") => {
    if (status === "completed") {
      return <Badge variant="success">Complétée</Badge>;
    } else if (status === "processing") {
      return <Badge variant="secondary">En cours</Badge>;
    } else {
      return <Badge variant="destructive">Échouée</Badge>;
    }
  };

  return (
    <DashboardLayout title="Transactions">
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <CardTitle>Historique des transactions</CardTitle>
            <CardDescription>
              Une liste complète de toutes vos transactions.
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher par ID, client, email ou méthode..."
                className="pl-8"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <div className="flex items-center space-x-1">
                      <span>ID</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1">
                      <span>Date</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1">
                      <span>Montant</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Méthode</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{transaction.customer}</div>
                        <div className="text-xs text-muted-foreground">{transaction.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                    <TableCell>{transaction.method}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Transactions;
