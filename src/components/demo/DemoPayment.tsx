
import { useState } from "react";
import { 
  ArrowRight, 
  Copy, 
  Check, 
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const cryptocurrencies = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", value: 0.00045 },
  { id: "eth", name: "Ethereum", symbol: "ETH", value: 0.0082 },
  { id: "usdt", name: "Tether", symbol: "USDT", value: 25.00 },
  { id: "sol", name: "Solana", symbol: "SOL", value: 0.25 },
];

const DemoPayment = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]);
  const [paymentStatus, setPaymentStatus] = useState<"waiting" | "processing" | "confirmed" | "failed">("waiting");
  const [copied, setCopied] = useState(false);
  
  const handleCopyAddress = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const simulatePayment = () => {
    setPaymentStatus("processing");
    setTimeout(() => {
      // 80% chance de succès pour la démo
      const success = Math.random() < 0.8;
      setPaymentStatus(success ? "confirmed" : "failed");
    }, 3000);
  };
  
  const resetDemo = () => {
    setPaymentStatus("waiting");
  };
  
  return (
    <div className="max-w-md w-full mx-auto bg-white dark:bg-crypto-gray shadow-xl rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-2">Démonstration de paiement</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Simulez un paiement en cryptomonnaie
        </p>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Montant et sélection de crypto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Choisissez une cryptomonnaie
          </label>
          <div className="grid grid-cols-2 gap-3">
            {cryptocurrencies.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto)}
                className={`p-3 rounded-lg border ${
                  selectedCrypto.id === crypto.id
                    ? "border-crypto-purple bg-purple-50 dark:bg-crypto-purple/10"
                    : "border-gray-200 dark:border-gray-700"
                } flex items-center space-x-2 transition-all duration-200`}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-crypto-gray flex items-center justify-center font-bold text-xs">
                  {crypto.symbol}
                </div>
                <div className="text-left">
                  <span className={`text-sm font-medium ${
                    selectedCrypto.id === crypto.id
                      ? "text-crypto-purple"
                      : "text-gray-700 dark:text-gray-300"
                  }`}>
                    {crypto.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Détails du paiement */}
        <div className="bg-gray-50 dark:bg-crypto-gray/50 rounded-lg p-4">
          <div className="flex justify-between mb-4">
            <span className="text-gray-500 dark:text-gray-400">Montant:</span>
            <span className="font-medium">25.00 EUR</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500 dark:text-gray-400">Équivalent:</span>
            <span className="font-bold">{selectedCrypto.value} {selectedCrypto.symbol}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Frais:</span>
            <span className="font-medium text-green-600">0.5%</span>
          </div>
        </div>
        
        {/* Adresse et QR Code */}
        {paymentStatus === "waiting" && (
          <div className="text-center">
            <div className="mb-4 mx-auto w-48 h-48 bg-gray-100 dark:bg-crypto-gray flex items-center justify-center rounded-lg">
              <span className="text-gray-400">QR Code</span>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Envoyez exactement <span className="font-bold">{selectedCrypto.value} {selectedCrypto.symbol}</span> à cette adresse:
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-100 dark:bg-crypto-gray/70 p-2 rounded text-sm font-mono truncate">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </div>
                <button 
                  onClick={handleCopyAddress}
                  className="p-2 text-gray-500 hover:text-crypto-purple"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
            
            <Button 
              className="w-full bg-crypto-blue hover:bg-crypto-blue/90"
              onClick={simulatePayment}
            >
              Simuler un paiement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        
        {/* État du paiement */}
        {paymentStatus === "processing" && (
          <div className="text-center py-8">
            <RefreshCw className="h-16 w-16 text-crypto-blue animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Traitement en cours...</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Votre paiement est en cours de confirmation sur la blockchain.
            </p>
          </div>
        )}
        
        {paymentStatus === "confirmed" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600 dark:text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Paiement confirmé!</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Votre paiement de {selectedCrypto.value} {selectedCrypto.symbol} a été reçu et confirmé.
            </p>
            <Button 
              variant="outline" 
              onClick={resetDemo}
            >
              Réinitialiser la démo
            </Button>
          </div>
        )}
        
        {paymentStatus === "failed" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Paiement échoué</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Nous n'avons pas pu confirmer votre paiement. Veuillez réessayer.
            </p>
            <Button 
              variant="outline" 
              onClick={resetDemo}
            >
              Réinitialiser la démo
            </Button>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-gray-50 dark:bg-crypto-gray/30 text-center text-sm text-gray-500 dark:text-gray-400">
        Ceci est une démonstration et aucun paiement réel n'est effectué.
      </div>
    </div>
  );
};

export default DemoPayment;
