
import { 
  Shield, 
  Globe, 
  CreditCard, 
  BarChart4, 
  Wallet, 
  RefreshCw, 
  Bell, 
  Key 
} from "lucide-react";

const features = [
  {
    icon: <Globe className="h-8 w-8 text-crypto-blue" />,
    title: "Support multi-cryptos",
    description: "Acceptez Bitcoin, Ethereum, USDT et plus de 50 autres cryptomonnaies populaires."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-crypto-blue" />,
    title: "Conversion automatique",
    description: "Conversion instantanée en monnaies fiduciaires (EUR, USD) avec taux de change en temps réel."
  },
  {
    icon: <Wallet className="h-8 w-8 text-crypto-blue" />,
    title: "Gestion multi-portefeuilles",
    description: "Gérez facilement plusieurs portefeuilles crypto pour différentes devises et usages."
  },
  {
    icon: <Bell className="h-8 w-8 text-crypto-blue" />,
    title: "Notifications en temps réel",
    description: "Recevez des alertes instantanées pour chaque transaction réussie ou échouée."
  },
  {
    icon: <Shield className="h-8 w-8 text-crypto-blue" />,
    title: "Sécurité renforcée",
    description: "Protection SSL et authentification à deux facteurs (2FA) pour tous les utilisateurs."
  },
  {
    icon: <Key className="h-8 w-8 text-crypto-blue" />,
    title: "Conformité AML et KYC",
    description: "Respect des régulations anti-blanchiment et de connaissance client."
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-crypto-blue" />,
    title: "Tableau de bord analytique",
    description: "Suivez vos performances et générez des rapports détaillés en quelques clics."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-crypto-blue" />,
    title: "Paiements simplifiés",
    description: "Envoyez des demandes de paiement par email ou via un lien partageable."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-crypto-gray hex-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
            Fonctionnalités avancées pour tous vos besoins
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Notre plateforme offre tout ce dont vous avez besoin pour gérer vos paiements en cryptomonnaie de manière efficace et sécurisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-crypto-gray/50 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="mb-4 bg-blue-50 dark:bg-crypto-blue/10 rounded-full h-16 w-16 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
