
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const RecentTransactions = () => {
  const transactions = [
    {
      id: "TX123456",
      customer: {
        name: "Sophie Martin",
        email: "sophie@example.com",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      amount: "538.20€",
      status: "completed",
      date: "Il y a 2 heures",
      currency: "BTC",
    },
    {
      id: "TX123457",
      customer: {
        name: "Thomas Dubois",
        email: "thomas@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      amount: "149.99€",
      status: "processing",
      date: "Il y a 5 heures",
      currency: "ETH",
    },
    {
      id: "TX123458",
      customer: {
        name: "Marie Leroy",
        email: "marie@example.com",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      amount: "99.50€",
      status: "completed",
      date: "Hier",
      currency: "USDT",
    },
    {
      id: "TX123459",
      customer: {
        name: "Lucas Bernard",
        email: "lucas@example.com",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      amount: "299.00€",
      status: "failed",
      date: "Hier",
      currency: "BTC",
    },
    {
      id: "TX123460",
      customer: {
        name: "Emma Petit",
        email: "emma@example.com",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      amount: "75.30€",
      status: "completed",
      date: "Il y a 2 jours",
      currency: "ETH",
    },
  ];

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between space-x-4 rounded-md border p-3"
        >
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <img src={transaction.customer.avatar} alt={transaction.customer.name} />
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{transaction.customer.name}</p>
              <p className="text-xs text-muted-foreground">{transaction.customer.email}</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium leading-none">{transaction.amount}</p>
              <span className="text-xs text-muted-foreground">({transaction.currency})</span>
            </div>
            <div className="flex items-center space-x-1">
              <Badge
                variant={
                  transaction.status === "completed" 
                    ? "success" 
                    : transaction.status === "processing" 
                    ? "secondary" 
                    : "destructive"
                }
                className="rounded-sm"
              >
                {transaction.status === "completed" 
                  ? "Complétée" 
                  : transaction.status === "processing" 
                  ? "En cours" 
                  : "Échouée"}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {transaction.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
