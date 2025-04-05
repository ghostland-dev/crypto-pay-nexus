
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité | CryptoWhite</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <section className="py-16 bg-white dark:bg-crypto-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-crypto-blue dark:text-white">
                  Politique de confidentialité
                </h1>
                
                <div className="prose prose-lg dark:prose-invert">
                  <p>Dernière mise à jour : 5 avril 2025</p>
                  
                  <h2>1. Introduction</h2>
                  <p>
                    Chez CryptoWhite, nous prenons la protection de vos données personnelles très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles.
                  </p>
                  
                  <h2>2. Informations que nous collectons</h2>
                  <p>
                    Nous pouvons collecter les types d'informations suivants :
                  </p>
                  <ul>
                    <li>Informations d'identification (nom, adresse e-mail, numéro de téléphone)</li>
                    <li>Informations de paiement (coordonnées bancaires, adresses de portefeuille crypto)</li>
                    <li>Informations de transaction (historique des paiements, montants)</li>
                    <li>Informations techniques (adresse IP, cookies, identifiants d'appareil)</li>
                  </ul>
                  
                  <h2>3. Comment nous utilisons vos informations</h2>
                  <p>
                    Nous utilisons vos informations pour :
                  </p>
                  <ul>
                    <li>Fournir, maintenir et améliorer nos services</li>
                    <li>Traiter les transactions et envoyer des notifications</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                    <li>Prévenir la fraude et assurer la sécurité</li>
                    <li>Communiquer avec vous concernant nos services</li>
                  </ul>
                  
                  <h2>4. Partage d'informations</h2>
                  <p>
                    Nous pouvons partager vos informations avec :
                  </p>
                  <ul>
                    <li>Des prestataires de services qui nous aident à exploiter notre plateforme</li>
                    <li>Des partenaires financiers pour faciliter les transactions</li>
                    <li>Des autorités légales lorsque cela est requis par la loi</li>
                  </ul>
                  
                  <h2>5. Sécurité des données</h2>
                  <p>
                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre la perte, l'accès non autorisé, la divulgation et la destruction.
                  </p>
                  
                  <h2>6. Conservation des données</h2>
                  <p>
                    Nous conservons vos informations aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. La durée de conservation peut varier en fonction du type d'information et des exigences réglementaires.
                  </p>
                  
                  <h2>7. Vos droits</h2>
                  <p>
                    Selon votre juridiction, vous pouvez avoir les droits suivants concernant vos données personnelles :
                  </p>
                  <ul>
                    <li>Droit d'accès</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement (droit à l'oubli)</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                    <li>Droit d'opposition</li>
                  </ul>
                  
                  <h2>8. Transferts internationaux</h2>
                  <p>
                    Vos informations peuvent être transférées et traitées dans des pays autres que celui où vous résidez. Nous prenons des mesures pour assurer que vos données bénéficient d'un niveau de protection adéquat.
                  </p>
                  
                  <h2>9. Modifications de cette politique</h2>
                  <p>
                    Nous pouvons mettre à jour cette politique de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous informerons de tout changement significatif.
                  </p>
                  
                  <h2>10. Contact</h2>
                  <p>
                    Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou le traitement de vos données personnelles, veuillez nous contacter à privacy@cryptowhite.com.
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

export default Privacy;
