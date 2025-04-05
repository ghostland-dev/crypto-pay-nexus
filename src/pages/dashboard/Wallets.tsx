
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink, Copy, Wallet, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const wallets = [
  {
    id: "wallet-1",
    name: "Bitcoin Wallet",
    symbol: "BTC",
    balance: "0.154",
    value: "7,532.45",
    address: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
    iconUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    color: "#F7931A",
  },
  {
    id: "wallet-2",
    name: "Ethereum Wallet",
    symbol: "ETH",
    balance: "2.345",
    value: "4,312.78",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    color: "#627EEA",
  },
  {
    id: "wallet-3",
    name: "Tether Wallet",
    symbol: "USDT",
    balance: "500.00",
    value: "500.00",
    address: "TKrRJUjvp9otP2XZmviBfTiL5YMSghMmRu",
    iconUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    color: "#26A17B",
  },
  {
    id: "wallet-4",
    name: "USD Coin Wallet",
    symbol: "USDC",
    balance: "200.50",
    value: "200.50",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    iconUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    color: "#2775CA",
  },
];

const Wallets = () => {
  const { toast } = useToast();
  const [isAddingWallet, setIsAddingWallet] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Adresse copiée !",
        description: "L'adresse a été copiée dans le presse-papier.",
      });
    });
  };

  return (
    <DashboardLayout title="Portefeuilles">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <p className="text-muted-foreground">
            Gérez vos portefeuilles de cryptomonnaies et effectuez des transactions
          </p>
        </div>
        <Button 
          className="mt-4 md:mt-0 bg-crypto-purple hover:bg-crypto-purple/90" 
          onClick={() => setIsAddingWallet(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un portefeuille
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {wallets.map((wallet) => (
          <Card key={wallet.id} className="overflow-hidden">
            <CardHeader className="pb-2" style={{ borderBottom: `4px solid ${wallet.color}` }}>
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-3 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src={wallet.iconUrl} alt={wallet.name} className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{wallet.name}</CardTitle>
                    <CardDescription>{wallet.symbol}</CardDescription>
                  </div>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex justify-between items-baseline mb-2">
                <div className="text-2xl font-bold">{wallet.balance} {wallet.symbol}</div>
                <div className="text-lg">{wallet.value}€</div>
              </div>
              
              <div className="flex items-center mt-4 mb-1 text-sm text-muted-foreground">
                <Wallet className="h-4 w-4 mr-1" />
                <span className="font-medium">Adresse du portefeuille</span>
              </div>
              
              <div className="flex items-center bg-gray-100 dark:bg-crypto-gray/30 p-2 rounded-md">
                <code className="text-xs truncate flex-1">
                  {wallet.address}
                </code>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 ml-1"
                  onClick={() => copyToClipboard(wallet.address)}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button 
                variant="outline" 
                size="sm"
                className="w-[48%] border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Recevoir
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="w-[48%] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <ArrowUp className="mr-2 h-4 w-4" />
                Envoyer
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Carte pour ajouter un nouveau portefeuille */}
        <Card className="border-dashed border-2 bg-transparent flex flex-col items-center justify-center p-6 hover:border-crypto-purple cursor-pointer" onClick={() => setIsAddingWallet(true)}>
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <Plus className="h-6 w-6 text-crypto-purple" />
          </div>
          <p className="text-lg font-medium text-center">Ajouter un nouveau portefeuille</p>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Connectez un portefeuille existant ou créez-en un nouveau
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Wallets;
