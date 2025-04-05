
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-crypto-gray pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full crypto-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">CP</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-crypto-blue to-crypto-purple bg-clip-text text-transparent">
                CryptoPay
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              La solution de paiement en cryptomonnaie sécurisée et fiable pour votre entreprise.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" className="text-gray-500 hover:text-crypto-purple">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-crypto-purple">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-crypto-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-4">Produit</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Démonstration
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-4">Mentions légales</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-600 dark:text-gray-400 hover:text-crypto-purple dark:hover:text-crypto-purple">
                  Conformité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 my-8" />

        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 CryptoPay Nexus. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
