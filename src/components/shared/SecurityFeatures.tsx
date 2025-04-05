
import { BadgeCheck, Lock, ShieldCheck } from "lucide-react";

interface SecurityFeaturesProps {
  className?: string;
}

const SecurityFeatures = ({ className = "" }: SecurityFeaturesProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
          <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Sécurité renforcée</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Stockage à froid, authentification multi-facteurs et chiffrement de bout en bout pour une protection maximale.
        </p>
      </div>
      
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
          <BadgeCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Conformité réglementaire</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Respect de toutes les réglementations en vigueur et procédures KYC/AML pour des transactions sécurisées.
        </p>
      </div>
      
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
          <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Protection des fonds</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Assurance contre les cyberattaques et réserves à 100% pour garantir la sécurité de vos actifs.
        </p>
      </div>
    </div>
  );
};

export default SecurityFeatures;
