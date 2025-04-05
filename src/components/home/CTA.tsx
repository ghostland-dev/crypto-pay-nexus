
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-crypto-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <div className="relative p-12 md:p-16 crypto-gradient">
            {/* Motif d'arrière-plan */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Prêt à révolutionner vos paiements?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Rejoignez les milliers d'entreprises qui utilisent déjà CryptoPay pour accepter des paiements en cryptomonnaie en toute simplicité.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-crypto-blue hover:bg-white/90" asChild>
                  <Link to="/register">
                    Démarrer gratuitement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    Contacter un expert
                  </Link>
                </Button>
              </div>
              
              <p className="mt-6 text-white/70 text-sm">
                Pas de carte de crédit requise • Configuration en 5 minutes • Annulez à tout moment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
