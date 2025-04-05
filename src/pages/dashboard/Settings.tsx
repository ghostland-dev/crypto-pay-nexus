
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const Settings = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    company: "Entreprise Example",
    role: "Administrateur",
  });

  const [security, setSecurity] = useState({
    twoFactorEnabled: false,
    emailNotifications: true,
    activityAlerts: true,
    marketingEmails: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSecurityChange = (key: string, value: boolean) => {
    setSecurity(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveProfile = () => {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profil mis à jour",
        description: "Vos modifications ont été enregistrées.",
      });
    }, 500);
  };

  const handleSaveSecurity = () => {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Paramètres de sécurité mis à jour",
        description: "Vos modifications ont été enregistrées.",
      });
    }, 500);
  };

  return (
    <DashboardLayout title="Paramètres">
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Facturation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations de profil</CardTitle>
              <CardDescription>
                Gérez les informations de votre compte.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={profile.name} 
                  onChange={handleProfileChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={profile.email} 
                  onChange={handleProfileChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Entreprise</Label>
                <Input 
                  id="company" 
                  name="company" 
                  value={profile.company} 
                  onChange={handleProfileChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Rôle</Label>
                <Input 
                  id="role" 
                  name="role" 
                  value={profile.role} 
                  onChange={handleProfileChange} 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-crypto-purple hover:bg-crypto-purple/90"
                onClick={handleSaveProfile}
              >
                Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité du compte</CardTitle>
              <CardDescription>
                Gérez les paramètres de sécurité de votre compte.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Authentification à deux facteurs</Label>
                    <p className="text-sm text-muted-foreground">
                      Renforcez la sécurité de votre compte avec une deuxième couche de protection.
                    </p>
                  </div>
                  <Switch 
                    id="two-factor" 
                    checked={security.twoFactorEnabled}
                    onCheckedChange={(checked) => handleSecurityChange("twoFactorEnabled", checked)}
                  />
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="outline">Changer de mot de passe</Button>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="mb-2 text-lg font-medium">Sessions actives</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Paris, France</p>
                        <p className="text-xs text-muted-foreground">Cet appareil • Dernière activité il y a 2 minutes</p>
                      </div>
                      <Button variant="ghost" size="sm">Déconnecter</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Lyon, France</p>
                        <p className="text-xs text-muted-foreground">Chrome sur Windows • Dernière activité il y a 3 jours</p>
                      </div>
                      <Button variant="ghost" size="sm">Déconnecter</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-crypto-purple hover:bg-crypto-purple/90"
                onClick={handleSaveSecurity}
              >
                Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notification</CardTitle>
              <CardDescription>
                Configurez comment et quand vous souhaitez être notifié.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Notifications par email</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevez des notifications par email pour les événements importants.
                    </p>
                  </div>
                  <Switch 
                    id="email-notifications" 
                    checked={security.emailNotifications}
                    onCheckedChange={(checked) => handleSecurityChange("emailNotifications", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="activity-alerts">Alertes d'activité</Label>
                    <p className="text-sm text-muted-foreground">
                      Soyez informé des connexions suspectes ou des modifications de votre compte.
                    </p>
                  </div>
                  <Switch 
                    id="activity-alerts" 
                    checked={security.activityAlerts}
                    onCheckedChange={(checked) => handleSecurityChange("activityAlerts", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Emails marketing</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevez les dernières actualités, offres et mises à jour.
                    </p>
                  </div>
                  <Switch 
                    id="marketing-emails" 
                    checked={security.marketingEmails}
                    onCheckedChange={(checked) => handleSecurityChange("marketingEmails", checked)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-crypto-purple hover:bg-crypto-purple/90"
                onClick={handleSaveSecurity}
              >
                Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations de facturation</CardTitle>
              <CardDescription>
                Gérez vos informations de paiement et votre abonnement.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Plan Business</p>
                    <p className="text-sm text-muted-foreground">49€ / mois</p>
                  </div>
                  <Button variant="outline">Changer de plan</Button>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium">Prochaine facturation: 15/05/2025</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Méthode de paiement</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-6 bg-gray-200 rounded mr-3 flex items-center justify-center">
                      <span className="text-xs font-bold">VISA</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Visa se terminant par 4242</p>
                      <p className="text-xs text-muted-foreground">Expire le 12/2026</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Modifier</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Historique de facturation</h3>
                <div className="space-y-2">
                  {[
                    { date: "01/04/2025", amount: "49.00€", status: "Payée" },
                    { date: "01/03/2025", amount: "49.00€", status: "Payée" },
                    { date: "01/02/2025", amount: "49.00€", status: "Payée" },
                  ].map((invoice, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Facture {i + 1}</p>
                        <p className="text-xs text-muted-foreground">{invoice.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{invoice.status}</Badge>
                        <p className="text-sm font-medium">{invoice.amount}</p>
                        <Button variant="ghost" size="sm">Télécharger</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
