
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Shield } from "lucide-react";

const Compliance = () => {
  return (
    <>
      <Helmet>
        <title>Conformité réglementaire | CryptoWhite</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <section className="py-16 bg-white dark:bg-crypto-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
                  Conformité réglementaire
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  CryptoWhite s'engage à respecter toutes les réglementations applicables aux services de paiement en cryptomonnaies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="p-2">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">KYC/AML</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Procédures de vérification d'identité et de lutte contre le blanchiment d'argent.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-2">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Protection des données</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Conformité RGPD et mesures de protection des données personnelles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-2">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Licences et certifications</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Autorisations légales et certifications de sécurité.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Quelles réglementations CryptoWhite respecte-t-il ?</AccordionTrigger>
                    <AccordionContent>
                      CryptoWhite respecte toutes les réglementations applicables dans l'UE, y compris MiCA (Markets in Crypto-Assets), 
                      les directives anti-blanchiment (AMLD5), le Règlement Général sur la Protection des Données (RGPD), et les 
                      exigences locales dans chaque pays où nous opérons.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Quelles informations sont requises pour la vérification KYC ?</AccordionTrigger>
                    <AccordionContent>
                      Notre processus KYC standard nécessite une pièce d'identité officielle (passeport, carte d'identité), 
                      un justificatif de domicile récent, et dans certains cas, des informations supplémentaires selon le 
                      niveau de transaction. Pour les entreprises, des documents d'enregistrement de l'entreprise et des informations 
                      sur les bénéficiaires effectifs sont requis.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Comment CryptoWhite assure-t-il la conformité des commerçants ?</AccordionTrigger>
                    <AccordionContent>
                      Nous effectuons une vérification préalable des commerçants avant leur intégration, surveillons en permanence 
                      les transactions pour détecter les activités suspectes, et proposons des formations et des outils pour aider 
                      les commerçants à rester conformes. Notre équipe de conformité est disponible pour accompagner les commerçants 
                      dans toutes les questions réglementaires.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Quelles mesures sont en place pour la protection des fonds ?</AccordionTrigger>
                    <AccordionContent>
                      Les fonds sont conservés dans des portefeuilles multi-signatures à froid pour une sécurité maximale. 
                      Nous maintenons des réserves de 100% et effectuons des audits réguliers par des tiers indépendants. 
                      Nos assurances couvrent les fonds contre les cyberattaques et autres incidents de sécurité.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Comment signaler une activité suspecte ?</AccordionTrigger>
                    <AccordionContent>
                      Si vous suspectez une activité frauduleuse ou un non-respect des règles, contactez immédiatement notre 
                      équipe de conformité à compliance@cryptowhite.com ou via le formulaire dédié dans votre tableau de bord. 
                      Toutes les déclarations sont traitées de manière confidentielle et font l'objet d'une enquête approfondie.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Compliance;
