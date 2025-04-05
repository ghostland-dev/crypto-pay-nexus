
import { Card } from "@/components/ui/card";

const TrustedBy = () => {
  const companies = [
    {
      name: "Binance",
      logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    },
    {
      name: "Coinbase",
      logo: "https://cryptologos.cc/logos/coinbase-coin-usdc-logo.png",
    },
    {
      name: "Kraken",
      logo: "https://cryptologos.cc/logos/kraken-kfee-logo.png",
    },
    {
      name: "BlockFi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/BlockFi_Logo.png",
    },
    {
      name: "Crypto.com",
      logo: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png",
    },
    {
      name: "Ledger",
      logo: "https://cryptologos.cc/logos/ledgercoin-led-logo.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-crypto-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm uppercase font-medium tracking-wider">
            ILS NOUS FONT CONFIANCE
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, i) => (
            <Card key={i} className="border-none shadow-none bg-transparent hover:scale-110 transition-transform duration-300">
              <div className="h-16 w-32 flex items-center justify-center p-2">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-full max-w-full object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
