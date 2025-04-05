
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Conditions d'utilisation | CryptoWhite</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <section className="py-16 bg-white dark:bg-crypto-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-crypto-blue dark:text-white">
                  Conditions d'utilisation
                </h1>
                
                <div className="prose prose-lg dark:prose-invert">
                  <p>Dernière mise à jour : 5 avril 2025</p>
                  
                  <h2>1. Acceptation des conditions</h2>
                  <p>
                    En accédant ou en utilisant les services de CryptoWhite, vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                  </p>
                  
                  <h2>2. Description du service</h2>
                  <p>
                    CryptoWhite fournit une plateforme de paiement en cryptomonnaie permettant aux entreprises d'accepter, de gérer et de convertir des paiements en cryptomonnaie.
                  </p>
                  
                  <h2>3. Inscription et compte</h2>
                  <p>
                    Pour utiliser certaines fonctionnalités de notre service, vous devez créer un compte. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités qui se produisent sous votre compte.
                  </p>
                  
                  <h2>4. Conditions financières</h2>
                  <p>
                    Les frais applicables à nos services sont décrits sur notre page de tarification. Nous nous réservons le droit de modifier nos tarifs à tout moment, avec un préavis raisonnable.
                  </p>
                  
                  <h2>5. Propriété intellectuelle</h2>
                  <p>
                    Tous les droits de propriété intellectuelle relatifs à notre service, y compris les logiciels, les designs, les logos et le contenu, sont la propriété de CryptoWhite ou de ses concédants de licence.
                  </p>
                  
                  <h2>6. Utilisation acceptable</h2>
                  <p>
                    Vous acceptez de ne pas utiliser notre service pour des activités illégales ou interdites par ces conditions ou toute loi applicable. CryptoWhite se réserve le droit de suspendre ou de résilier votre accès à notre service en cas de violation.
                  </p>
                  
                  <h2>7. Confidentialité</h2>
                  <p>
                    Notre traitement de vos informations personnelles est régi par notre Politique de confidentialité, que vous pouvez consulter sur notre site web.
                  </p>
                  
                  <h2>8. Limitation de responsabilité</h2>
                  <p>
                    Dans les limites autorisées par la loi, CryptoWhite ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de revenus.
                  </p>
                  
                  <h2>9. Modifications des conditions</h2>
                  <p>
                    Nous pouvons modifier ces conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site web. Votre utilisation continue du service après de telles modifications constitue votre acceptation des nouvelles conditions.
                  </p>
                  
                  <h2>10. Loi applicable</h2>
                  <p>
                    Ces conditions sont régies par les lois françaises, sans tenir compte des principes de conflit de lois.
                  </p>
                  
                  <h2>11. Contact</h2>
                  <p>
                    Si vous avez des questions concernant ces conditions, veuillez nous contacter à legal@cryptowhite.com.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
