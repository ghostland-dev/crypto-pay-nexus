
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, ExternalLink, Plus, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: 'payment' | 'analytics' | 'tools' | 'api';
  status: 'active' | 'inactive' | 'pending';
  logo: string;
  isPopular?: boolean;
}

const Integrations = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [integrationStatus, setIntegrationStatus] = useState<Record<string, 'active' | 'inactive' | 'pending'>>({});

  const integrations: Integration[] = [
    {
      id: "stripe",
      name: "Stripe",
      description: "Traitez les paiements par carte et les virements bancaires en toute sécurité.",
      category: "payment",
      status: "active",
      logo: "/placeholder.svg",
      isPopular: true
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Acceptez les paiements via PayPal et les portefeuilles numériques.",
      category: "payment",
      status: "inactive",
      logo: "/placeholder.svg"
    },
    {
      id: "google-analytics",
      name: "Google Analytics",
      description: "Suivez les performances et le comportement des utilisateurs sur votre plateforme.",
      category: "analytics",
      status: "active",
      logo: "/placeholder.svg",
      isPopular: true
    },
    {
      id: "slack",
      name: "Slack",
      description: "Recevez des notifications et des alertes directement dans vos canaux Slack.",
      category: "tools",
      status: "inactive",
      logo: "/placeholder.svg"
    },
    {
      id: "zapier",
      name: "Zapier",
      description: "Automatisez les flux de travail entre CryptoWhite et vos autres applications.",
      category: "tools",
      status: "pending",
      logo: "/placeholder.svg"
    },
    {
      id: "binance",
      name: "Binance API",
      description: "Connectez-vous à l'API Binance pour les données de marché et les échanges.",
      category: "api",
      status: "inactive",
      logo: "/placeholder.svg"
    },
    {
      id: "coinbase",
      name: "Coinbase API",
      description: "Intégrez les fonctionnalités de Coinbase pour les achats et les ventes.",
      category: "api",
      status: "inactive",
      logo: "/placeholder.svg",
      isPopular: true
    },
    {
      id: "metamask",
      name: "MetaMask",
      description: "Permettez aux utilisateurs de se connecter avec leur portefeuille MetaMask.",
      category: "tools",
      status: "active",
      logo: "/placeholder.svg"
    }
  ];

  // Initialize integration status from the initial data
  useState(() => {
    const initialStatus: Record<string, 'active' | 'inactive' | 'pending'> = {};
    integrations.forEach(integration => {
      initialStatus[integration.id] = integration.status;
    });
    setIntegrationStatus(initialStatus);
  });

  const filteredIntegrations = activeTab === "all" 
    ? integrations 
    : integrations.filter(integration => integration.category === activeTab);

  const handleToggleIntegration = (id: string) => {
    setIntegrationStatus(prev => {
      const newStatus = prev[id] === 'active' ? 'inactive' : 'active';
      
      toast({
        title: newStatus === 'active' ? "Intégration activée" : "Intégration désactivée",
        description: `L'intégration a été ${newStatus === 'active' ? 'activée' : 'désactivée'} avec succès.`,
      });
      
      return { ...prev, [id]: newStatus };
    });
  };

  const handleConnect = (id: string) => {
    toast({
      title: "Connexion initiée",
      description: "Vous allez être redirigé vers la page d'autorisation.",
    });
  };

  return (
    <DashboardLayout title="Intégrations">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Centre d'intégrations</CardTitle>
            <CardDescription>
              Connectez CryptoWhite à vos applications et services préférés pour améliorer votre expérience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="payment">Paiement</TabsTrigger>
                <TabsTrigger value="analytics">Analytique</TabsTrigger>
                <TabsTrigger value="tools">Outils</TabsTrigger>
                <TabsTrigger value="api">APIs</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredIntegrations.map((integration) => (
                    <Card key={integration.id} className="overflow-hidden border border-gray-200 dark:border-gray-700">
                      <CardHeader className="p-4 flex flex-row items-start space-y-0 gap-3">
                        <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <img
                            src={integration.logo}
                            alt={`${integration.name} logo`}
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-semibold">
                              {integration.name}
                              {integration.isPopular && (
                                <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs">
                                  Populaire
                                </Badge>
                              )}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-xs mt-1">
                            {integration.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        {integrationStatus[integration.id] === 'active' ? (
                          <span className="flex items-center text-xs text-green-600 dark:text-green-400">
                            <Check className="h-3 w-3 mr-1" />
                            Connecté
                          </span>
                        ) : integrationStatus[integration.id] === 'pending' ? (
                          <span className="text-xs text-amber-600 dark:text-amber-400">En attente</span>
                        ) : (
                          <span className="text-xs text-gray-500 dark:text-gray-400">Non connecté</span>
                        )}

                        <div className="flex items-center space-x-2">
                          {integrationStatus[integration.id] === 'active' || integrationStatus[integration.id] === 'inactive' ? (
                            <div className="flex items-center space-x-2">
                              <Switch 
                                id={`switch-${integration.id}`}
                                checked={integrationStatus[integration.id] === 'active'}
                                onCheckedChange={() => handleToggleIntegration(integration.id)}
                              />
                              <Label htmlFor={`switch-${integration.id}`} className="text-xs cursor-pointer">
                                {integrationStatus[integration.id] === 'active' ? 'Activé' : 'Désactivé'}
                              </Label>
                            </div>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-xs flex items-center"
                              onClick={() => handleConnect(integration.id)}
                            >
                              <Plus className="h-3 w-3 mr-1" />
                              Connecter
                            </Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {/* Add Custom Integration Card */}
                  <Card className="overflow-hidden border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                      <Zap className="h-8 w-8 text-gray-400 dark:text-gray-500 mb-3" />
                      <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-1">Intégration personnalisée</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Besoin d'une intégration spécifique ? Contactez notre équipe d'experts.
                      </p>
                      <Button variant="outline" className="text-xs" asChild>
                        <a href="/contact" className="flex items-center">
                          Contacter le support
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Intégrations API</CardTitle>
            <CardDescription>
              Utilisez nos clés API pour intégrer CryptoWhite directement dans vos applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Clé API de production</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Production
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Utilisez cette clé pour les intégrations en production. Ne partagez jamais cette clé publiquement.
                </p>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      toast({
                        title: "Clé API copiée",
                        description: "La clé API a été copiée dans le presse-papiers",
                      });
                    }}
                  >
                    Afficher / Copier la clé
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      toast({
                        title: "Clé API régénérée",
                        description: "Une nouvelle clé API a été générée. L'ancienne clé est désormais invalide.",
                      });
                    }}
                  >
                    Régénérer la clé
                  </Button>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Clé API de test</h3>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    Développement
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Utilisez cette clé pour les tests et le développement. Les transactions effectuées avec cette clé n'affecteront pas les données de production.
                </p>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      toast({
                        title: "Clé API de test copiée",
                        description: "La clé API de test a été copiée dans le presse-papiers",
                      });
                    }}
                  >
                    Afficher / Copier la clé
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      toast({
                        title: "Clé API de test régénérée",
                        description: "Une nouvelle clé API de test a été générée. L'ancienne clé est désormais invalide.",
                      });
                    }}
                  >
                    Régénérer la clé
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
