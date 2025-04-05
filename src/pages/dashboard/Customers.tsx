
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Check, Filter, MoreHorizontal, Plus, Search, Shield, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  verification: 'verified' | 'unverified' | 'pending';
  balance: string;
  lastActivity: string;
}

const Customers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Données clients fictives
  const customers: Customer[] = [
    {
      id: "cust-001",
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      status: "active",
      verification: "verified",
      balance: "12,345€",
      lastActivity: "Aujourd'hui"
    },
    {
      id: "cust-002",
      name: "Marie Lambert",
      email: "marie.lambert@example.com",
      status: "active",
      verification: "verified",
      balance: "8,920€",
      lastActivity: "Hier"
    },
    {
      id: "cust-003",
      name: "Thomas Bernard",
      email: "thomas.bernard@example.com",
      status: "inactive",
      verification: "unverified",
      balance: "0€",
      lastActivity: "Il y a 2 mois"
    },
    {
      id: "cust-004",
      name: "Sophie Martin",
      email: "sophie.martin@example.com",
      status: "active",
      verification: "verified",
      balance: "5,630€",
      lastActivity: "Il y a 3 jours"
    },
    {
      id: "cust-005",
      name: "Lucas Petit",
      email: "lucas.petit@example.com",
      status: "pending",
      verification: "pending",
      balance: "0€",
      lastActivity: "Aujourd'hui"
    },
    {
      id: "cust-006",
      name: "Julie Dubois",
      email: "julie.dubois@example.com",
      status: "active",
      verification: "verified",
      balance: "24,750€",
      lastActivity: "Il y a 1 semaine"
    },
    {
      id: "cust-007",
      name: "Pierre Leroy",
      email: "pierre.leroy@example.com",
      status: "active",
      verification: "unverified",
      balance: "3,210€",
      lastActivity: "Il y a 2 jours"
    }
  ];
  
  const filteredCustomers = searchTerm
    ? customers.filter(
        customer =>
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : customers;
  
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active':
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case 'inactive':
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      case 'pending':
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      default:
        return "";
    }
  };
  
  const getVerificationBadgeVariant = (verification: string) => {
    switch (verification) {
      case 'verified':
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case 'unverified':
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case 'pending':
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "";
    }
  };
  
  const handleAction = (action: string, customerId: string) => {
    toast({
      title: `Action: ${action}`,
      description: `Action ${action} sur le client ${customerId}`,
    });
  };
  
  return (
    <DashboardLayout title="Gestion des clients">
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Vue d'ensemble des clients</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Filter className="h-4 w-4" />
                Filtrer
              </Button>
              <Button variant="default" size="sm" className="h-8 gap-1">
                <UserPlus className="h-4 w-4" />
                Ajouter un client
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <div className="border rounded-md p-2 text-center min-w-[120px]">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{customers.length}</p>
                </div>
                <div className="border rounded-md p-2 text-center min-w-[120px]">
                  <p className="text-sm text-muted-foreground">Actifs</p>
                  <p className="text-2xl font-bold text-green-600">
                    {customers.filter(c => c.status === 'active').length}
                  </p>
                </div>
                <div className="border rounded-md p-2 text-center min-w-[120px]">
                  <p className="text-sm text-muted-foreground">En attente</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {customers.filter(c => c.status === 'pending').length}
                  </p>
                </div>
              </div>
              
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un client..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Vérification</TableHead>
                    <TableHead className="text-right">Solde</TableHead>
                    <TableHead>Dernière activité</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusBadgeVariant(customer.status)}>
                          {customer.status === 'active' ? 'Actif' : 
                           customer.status === 'inactive' ? 'Inactif' : 'En attente'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getVerificationBadgeVariant(customer.verification)}>
                          {customer.verification === 'verified' ? (
                            <span className="flex items-center gap-1">
                              <Check className="h-3 w-3" />
                              Vérifié
                            </span>
                          ) : customer.verification === 'unverified' ? 'Non vérifié' : 'En cours'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">{customer.balance}</TableCell>
                      <TableCell>{customer.lastActivity}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("voir", customer.id)}>
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("editer", customer.id)}>
                              Éditer
                            </DropdownMenuItem>
                            {customer.verification !== 'verified' && (
                              <DropdownMenuItem onClick={() => handleAction("verifier", customer.id)}>
                                <Shield className="h-4 w-4 mr-2" />
                                Vérifier l'identité
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              onClick={() => handleAction("supprimer", customer.id)}
                              className="text-red-600 focus:text-red-600"
                            >
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  
                  {filteredCustomers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        Aucun résultat trouvé.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Inviter des clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Input placeholder="Email du client" className="max-w-md" />
              <Button onClick={() => toast({
                title: "Invitation envoyée",
                description: "Un email d'invitation a été envoyé au client",
              })}>
                <Plus className="h-4 w-4 mr-2" />
                Inviter
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Les clients invités recevront un email avec des instructions pour créer un compte.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
