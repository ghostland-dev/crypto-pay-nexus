
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-crypto-gray dark:to-crypto-gray/80 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-crypto-blue dark:text-white">
              Acceptez les <span className="bg-gradient-to-r from-crypto-purple to-crypto-blue bg-clip-text text-transparent">crypto-paiements</span> en toute simplicité
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Intégrez des paiements en cryptomonnaie sécurisés pour votre entreprise en quelques minutes, pas quelques mois.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-crypto-blue hover:bg-crypto-blue/90 text-white" asChild>
                <Link to="/register">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">
                  Voir la démo
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-crypto-gray flex items-center justify-center text-xs font-medium">
                    👤
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                Plus de <span className="font-semibold">500+ entreprises</span> nous font confiance
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-crypto-blue/20 to-crypto-purple/20 rounded-3xl transform rotate-3 scale-105 dark:opacity-30"></div>
            <div className="relative bg-white dark:bg-crypto-gray/90 rounded-3xl p-6 shadow-xl">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="pt-8">
                <div className="mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-medium mb-2">Acceptez plusieurs cryptomonnaies</h3>
                  <div className="flex space-x-3">
                    {["BTC", "ETH", "USDT", "BNB", "SOL"].map((crypto) => (
                      <div key={crypto} className="w-12 h-12 rounded-full bg-gray-100 dark:bg-crypto-gray flex items-center justify-center text-xs font-bold">
                        {crypto}
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-crypto-gray flex items-center justify-center text-xs font-bold">
                      +10
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-crypto-gray/70 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dernière transaction</p>
                      <p className="font-medium">0.05 BTC • <span className="text-crypto-green">Réussie</span></p>
                    </div>
                    <span className="text-sm bg-gray-200 dark:bg-crypto-gray px-3 py-1 rounded-full">
                      Il y a 2m
                    </span>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-crypto-gray/70 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Conversion automatique</p>
                      <div className="w-10 h-6 bg-crypto-green rounded-full flex items-center justify-end p-1">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Conversion instantanée en EUR, USD, etc.</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-crypto-gray/70 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Taux de transaction</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Frais réduits à 0.5%</p>
                    </div>
                    <span className="font-bold text-crypto-green">0.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
