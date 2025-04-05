
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Database, Globe, Code, Copy, Check } from "lucide-react";
import { useState } from "react";

const Docs = () => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
              Documentation développeur
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Tout ce dont vous avez besoin pour intégrer CryptoPay à votre application
            </p>

            <Tabs defaultValue="getting-started">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="getting-started" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Démarrage
                </TabsTrigger>
                <TabsTrigger value="payments" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> Paiements
                </TabsTrigger>
                <TabsTrigger value="api" className="flex items-center gap-2">
                  <Code className="h-4 w-4" /> API
                </TabsTrigger>
                <TabsTrigger value="webhooks" className="flex items-center gap-2">
                  <Database className="h-4 w-4" /> Webhooks
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started" className="space-y-6">
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Démarrage rapide</h2>
                  <p className="mb-4">
                    CryptoPay vous permet d'accepter facilement des paiements en cryptomonnaie sur votre site ou application. 
                    Suivez ces étapes pour commencer:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-crypto-blue/20 flex items-center justify-center text-crypto-blue flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Créez un compte</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Inscrivez-vous et configurez votre profil entreprise pour accéder à votre tableau de bord.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-crypto-blue/20 flex items-center justify-center text-crypto-blue flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Configurez vos cryptomonnaies</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Choisissez les cryptomonnaies que vous souhaitez accepter et ajoutez vos portefeuilles ou utilisez les nôtres.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-crypto-blue/20 flex items-center justify-center text-crypto-blue flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Intégrez notre API</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Utilisez notre SDK ou intégrez directement notre API pour créer des demandes de paiement.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-crypto-blue/20 flex items-center justify-center text-crypto-blue flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Configurez les webhooks</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Mettez en place des webhooks pour recevoir des notifications en temps réel sur l'état des paiements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Installation</h2>
                  
                  <h3 className="font-semibold text-lg mb-2">JavaScript</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>npm install cryptopay-js --save</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('install', 'npm install cryptopay-js --save')}
                    >
                      {copied['install'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="payments" className="space-y-6">
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Créer un paiement</h2>
                  <p className="mb-4">
                    Utilisez notre API pour créer une demande de paiement que vos clients pourront régler en cryptomonnaie.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-2">Exemple de requête</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`const response = await cryptopay.createPayment({
  amount: 25.00,         // Montant
  currency: 'EUR',       // Devise de référence
  crypto: 'BTC',         // Cryptomonnaie souhaitée (optionnel)
  orderId: 'ORDER-123',  // Votre référence de commande
  customerEmail: 'client@example.com',
  redirectUrl: 'https://votresite.com/success',
  cancelUrl: 'https://votresite.com/cancel'
});`}</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('payment', `const response = await cryptopay.createPayment({
  amount: 25.00,
  currency: 'EUR',
  crypto: 'BTC',
  orderId: 'ORDER-123',
  customerEmail: 'client@example.com',
  redirectUrl: 'https://votresite.com/success',
  cancelUrl: 'https://votresite.com/cancel'
});`)}
                    >
                      {copied['payment'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  
                  <h3 className="font-semibold text-lg mt-6 mb-2">Réponse</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`{
  "id": "pay_123456789",
  "status": "pending",
  "amount": 25.00,
  "currency": "EUR",
  "cryptoAmount": 0.00045,
  "cryptoCurrency": "BTC",
  "paymentUrl": "https://cryptopay.com/pay/123456789",
  "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  "expiresAt": "2025-04-05T12:34:56Z"
}`}</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('response', `{
  "id": "pay_123456789",
  "status": "pending",
  "amount": 25.00,
  "currency": "EUR",
  "cryptoAmount": 0.00045,
  "cryptoCurrency": "BTC",
  "paymentUrl": "https://cryptopay.com/pay/123456789",
  "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  "expiresAt": "2025-04-05T12:34:56Z"
}`)}
                    >
                      {copied['response'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Vérifier l'état d'un paiement</h2>
                  
                  <h3 className="font-semibold text-lg mb-2">Exemple de requête</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`const status = await cryptopay.getPayment('pay_123456789');`}</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('check', `const status = await cryptopay.getPayment('pay_123456789');`)}
                    >
                      {copied['check'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="api" className="space-y-6">
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Authentification API</h2>
                  <p className="mb-4">
                    Toutes les requêtes API doivent être authentifiées avec votre clé API. Vous pouvez obtenir votre clé depuis votre tableau de bord.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-2">En-tête d'authentification</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`Authorization: Bearer votre_clé_api_secrète`}</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('auth', `Authorization: Bearer votre_clé_api_secrète`)}
                    >
                      {copied['auth'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Points de terminaison API</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Créer un paiement</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">POST /api/v1/payments</code>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Crée une nouvelle demande de paiement en cryptomonnaie.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Récupérer un paiement</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">GET /api/v1/payments/:id</code>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Récupère les détails d'un paiement existant.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Lister les paiements</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">GET /api/v1/payments</code>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Récupère une liste paginée de vos paiements.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Taux de conversion</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">GET /api/v1/exchange-rates</code>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Récupère les taux de change actuels entre les devises fiduciaires et les cryptomonnaies.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="webhooks" className="space-y-6">
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Configuration des webhooks</h2>
                  <p className="mb-4">
                    Les webhooks vous permettent de recevoir des notifications en temps réel lorsque l'état d'un paiement change.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-2">Événements disponibles</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">payment.created</code> - Nouvelle demande de paiement créée</li>
                    <li><code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">payment.pending</code> - Transaction détectée mais pas encore confirmée</li>
                    <li><code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">payment.confirmed</code> - Paiement confirmé sur la blockchain</li>
                    <li><code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">payment.failed</code> - Échec du paiement</li>
                    <li><code className="bg-gray-100 dark:bg-crypto-gray px-2 py-1 rounded">payment.expired</code> - La demande de paiement a expiré</li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mb-2">Exemple de payload de webhook</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`{
  "id": "evt_123456789",
  "type": "payment.confirmed",
  "created": "2025-04-05T12:34:56Z",
  "data": {
    "id": "pay_123456789",
    "status": "confirmed",
    "amount": 25.00,
    "currency": "EUR",
    "cryptoAmount": 0.00045,
    "cryptoCurrency": "BTC",
    "transactionHash": "0x1234...5678",
    "confirmations": 6,
    "orderId": "ORDER-123"
  }
}`}</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('webhook', `{
  "id": "evt_123456789",
  "type": "payment.confirmed",
  "created": "2025-04-05T12:34:56Z",
  "data": {
    "id": "pay_123456789",
    "status": "confirmed",
    "amount": 25.00,
    "currency": "EUR",
    "cryptoAmount": 0.00045,
    "cryptoCurrency": "BTC",
    "transactionHash": "0x1234...5678",
    "confirmations": 6,
    "orderId": "ORDER-123"
  }
}`)}
                    >
                      {copied['webhook'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-crypto-gray/50 rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Vérification de sécurité</h2>
                  <p className="mb-4">
                    Pour sécuriser vos webhooks, nous signons chaque requête avec une signature HMAC.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-2">Vérification de la signature</h3>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-crypto-gray p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`// Exemple Node.js avec Express
const crypto = require('crypto');

app.post('/webhook', (req, res) => {
  const payload = req.body;
  const signature = req.headers['cryptopay-signature'];
  const secret = 'votre_clé_secrète_webhook';
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
    
  if (expectedSignature === signature) {
    // Signature valide, traiter l'événement
    console.log('Webhook vérifié:', payload);
    res.status(200).send('OK');
  } else {
    // Signature invalide
    console.error('Signature invalide');
    res.status(400).send('Signature invalide');
  }
});`}</code>
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-crypto-gray/70 rounded-md"
                      onClick={() => handleCopy('verify', `// Exemple Node.js avec Express
const crypto = require('crypto');

app.post('/webhook', (req, res) => {
  const payload = req.body;
  const signature = req.headers['cryptopay-signature'];
  const secret = 'votre_clé_secrète_webhook';
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
    
  if (expectedSignature === signature) {
    // Signature valide, traiter l'événement
    console.log('Webhook vérifié:', payload);
    res.status(200).send('OK');
  } else {
    // Signature invalide
    console.error('Signature invalide');
    res.status(400).send('Signature invalide');
  }
});`)}
                    >
                      {copied['verify'] ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
