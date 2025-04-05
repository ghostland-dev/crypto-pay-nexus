
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 dark:bg-crypto-gray/95 shadow-sm backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full crypto-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">CP</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-crypto-blue to-crypto-purple bg-clip-text text-transparent">
            CryptoPay
          </span>
        </Link>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Boutons d'action pour desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Se connecter</Link>
          </Button>
          <Button className="bg-crypto-purple hover:bg-crypto-purple/90" asChild>
            <Link to="/register">Commencer</Link>
          </Button>
        </div>

        {/* Bouton menu pour mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-crypto-gray shadow-md py-4 px-4 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile setIsOpen={setIsOpen} />
            <hr className="my-2" />
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/login" onClick={() => setIsOpen(false)}>Se connecter</Link>
            </Button>
            <Button className="bg-crypto-purple hover:bg-crypto-purple/90 w-full" asChild>
              <Link to="/register" onClick={() => setIsOpen(false)}>Commencer</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsOpen?: (value: boolean) => void;
}

const NavLinks = ({ mobile, setIsOpen }: NavLinksProps) => {
  const links = [
    { name: "Fonctionnalités", path: "/#features" },
    { name: "Tarifs", path: "/#pricing" },
    { name: "Documentation", path: "/docs" },
    { name: "Démonstration", path: "/demo" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`${
            mobile
              ? "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-crypto-gray/70 rounded"
              : "text-gray-700 dark:text-gray-200 hover:text-crypto-purple dark:hover:text-crypto-purple font-medium"
          }`}
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
