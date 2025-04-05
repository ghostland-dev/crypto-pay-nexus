
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-xl px-4 py-20">
          <div className="w-24 h-24 rounded-full crypto-gradient flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-5xl">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">Page non trouvée</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <Button size="lg" className="bg-crypto-blue hover:bg-crypto-blue/90" asChild>
            <Link to="/">
              Retourner à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
