
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { AtSign, CreditCard, Key, Lock, Shield, User } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    company: "Tech Solutions SAS",
    role: "Directeur technique"
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: true,
    notificationsEnabled: true,
    sessionTimeout: "30"
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go API call to update profile
    setIsEditing(false);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations personnelles ont été mises à jour avec succès."
    });
  };

  const handleSecurityUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go API call to update security settings
    toast({
      title: "Paramètres de sécurité mis à jour",
      description: "Vos paramètres de sécurité ont été mis à jour avec succès."
    });
  };

  return (
    <DashboardLayout title="Profil utilisateur">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">Informations générales</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="verification">Vérification</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>
                    Gérez vos informations personnelles et de contact
                  </CardDescription>
                </div>
                <Button 
                  variant={isEditing ? "outline" : "default"} 
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? "Annuler" : "Modifier"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate}>
                <div className="grid gap-6 py-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2 space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input 
                        id="firstName" 
                        value={profileData.firstName} 
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input 
                        id="lastName" 
                        value={profileData.lastName} 
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        className="pl-10" 
                        value={profileData.email} 
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input 
                      id="phone" 
                      value={profileData.phone} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2 space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input 
                        id="company" 
                        value={profileData.company} 
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 space-y-2">
                      <Label htmlFor="role">Fonction</Label>
                      <Input 
                        id="role" 
                        value={profileData.role} 
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                
                {isEditing && (
                  <div className="flex justify-end">
                    <Button type="submit">
                      Enregistrer les modifications
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de sécurité</CardTitle>
              <CardDescription>
                Gérez les paramètres de sécurité de votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSecurityUpdate}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Authentification à deux facteurs</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Ajoutez une couche de sécurité supplémentaire à votre compte
                        </p>
                      </div>
                    </div>
                    <Switch 
                      checked={securitySettings.twoFactorEnabled} 
                      onCheckedChange={(checked) => setSecuritySettings({...securitySettings, twoFactorEnabled: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Notifications de transaction</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Recevez des alertes pour toutes les transactions
                        </p>
                      </div>
                    </div>
                    <Switch 
                      checked={securitySettings.notificationsEnabled} 
                      onCheckedChange={(checked) => setSecuritySettings({...securitySettings, notificationsEnabled: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeout">Délai d'expiration de session (minutes)</Label>
                    <Input 
                      id="timeout" 
                      type="number" 
                      value={securitySettings.sessionTimeout} 
                      onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Délai après lequel vous serez automatiquement déconnecté en cas d'inactivité
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Mot de passe</h4>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Key className="mr-2 h-4 w-4" /> Changer de mot de passe
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button type="submit">
                    Enregistrer les paramètres
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Vérification d'identité</CardTitle>
              <CardDescription>
                Complétez votre vérification KYC pour accéder à toutes les fonctionnalités
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      La vérification de votre identité est requise pour les transactions dépassant 1 000 € et pour accéder à certaines fonctionnalités avancées.
                    </p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Informations personnelles</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Nom, date de naissance, nationalité
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">Complété</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Pièce d'identité</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Passeport, carte d'identité ou permis de conduire
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Soumettre
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <AtSign className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Justificatif de domicile</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Facture d'énergie, relevé bancaire (moins de 3 mois)
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Soumettre
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Profile;
