
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoPayment from "@/components/demo/DemoPayment";

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
              Essayez notre plateforme de paiement
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Découvrez comment vos clients peuvent payer facilement avec des cryptomonnaies.
            </p>
          </div>
          
          <DemoPayment />
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-crypto-blue dark:text-white">
              Comment ça fonctionne
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 rounded-full bg-crypto-blue/10 flex items-center justify-center text-xl font-bold text-crypto-blue mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Sélectionnez une crypto</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choisissez parmi plus de 50 cryptomonnaies différentes pour accepter les paiements.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-crypto-blue/10 flex items-center justify-center text-xl font-bold text-crypto-blue mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Partagez l'adresse</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Envoyez le lien ou le QR code à votre client pour qu'il effectue le paiement.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-crypto-blue/10 flex items-center justify-center text-xl font-bold text-crypto-blue mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Recevez votre paiement</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Confirmation en temps réel et conversion automatique en devises fiduciaires si souhaité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
