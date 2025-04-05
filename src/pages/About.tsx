
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos | CryptoWhite</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          {/* Hero section */}
          <section className="py-16 bg-white dark:bg-crypto-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
                  Notre mission
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Simplifier les paiements en cryptomonnaie pour les entreprises du monde entier.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mb-20">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-crypto-blue dark:text-white">
                    Notre histoire
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Fondée en 2023 par une équipe de passionnés de cryptomonnaies et d'experts en technologie financière, CryptoWhite est née d'un constat simple : les entreprises qui souhaitent accepter les paiements en cryptomonnaie font face à des défis techniques et réglementaires complexes.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Notre équipe a développé une solution tout-en-un qui permet aux entreprises d'accepter facilement les paiements en cryptomonnaie, tout en bénéficiant d'une sécurité de pointe et d'une conformité réglementaire totale.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-100 dark:bg-crypto-gray/50 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="CryptoWhite équipe" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-20">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-crypto-blue dark:text-white">
                    Notre vision
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Nous croyons que les cryptomonnaies ont le potentiel de révolutionner le commerce mondial en offrant des transactions plus rapides, plus sécurisées et moins coûteuses que les méthodes de paiement traditionnelles.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Notre vision est de construire un écosystème où les entreprises de toutes tailles peuvent facilement intégrer les paiements en cryptomonnaie dans leurs opérations quotidiennes, sans avoir à se soucier des complexités techniques ou réglementaires.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-100 dark:bg-crypto-gray/50 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Cryptomonnaies" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Valeurs */}
              <div className="mb-20">
                <h2 className="text-2xl font-bold mb-8 text-center text-crypto-blue dark:text-white">
                  Nos valeurs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-crypto-gray/50 p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-crypto-purple/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sécurité</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      La sécurité est notre priorité absolue. Nous utilisons les technologies de pointe pour protéger les fonds et les données de nos clients.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-crypto-gray/50 p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-crypto-purple/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nous sommes constamment à la recherche de nouvelles façons d'améliorer notre plateforme et d'offrir de meilleures solutions à nos clients.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-crypto-gray/50 p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-crypto-purple/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Accessibilité</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nous croyons que les cryptomonnaies devraient être accessibles à tous. Notre plateforme est conçue pour être simple et intuitive.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Équipe */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-center text-crypto-blue dark:text-white">
                  Notre équipe
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      name: "Sophie Martin",
                      role: "CEO & Co-fondatrice",
                      image: "https://randomuser.me/api/portraits/women/44.jpg"
                    },
                    {
                      name: "Thomas Dubois",
                      role: "CTO & Co-fondateur",
                      image: "https://randomuser.me/api/portraits/men/32.jpg"
                    },
                    {
                      name: "Marie Leroy",
                      role: "Directrice Marketing",
                      image: "https://randomuser.me/api/portraits/women/68.jpg"
                    },
                    {
                      name: "Lucas Bernard",
                      role: "Lead Développeur",
                      image: "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-white dark:bg-crypto-gray/50 rounded-xl shadow-md overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-crypto-purple">{member.role}</p>
                      </div>
                    </div>
                  ))}
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

export default About;
