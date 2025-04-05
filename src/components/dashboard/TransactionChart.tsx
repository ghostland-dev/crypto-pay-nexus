
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Button } from "@/components/ui/button";

const data = {
  weekly: [
    { name: "Lun", BTC: 400, ETH: 240, USDT: 320 },
    { name: "Mar", BTC: 300, ETH: 139, USDT: 250 },
    { name: "Mer", BTC: 200, ETH: 980, USDT: 100 },
    { name: "Jeu", BTC: 278, ETH: 390, USDT: 190 },
    { name: "Ven", BTC: 189, ETH: 480, USDT: 210 },
    { name: "Sam", BTC: 239, ETH: 380, USDT: 250 },
    { name: "Dim", BTC: 349, ETH: 430, USDT: 210 },
  ],
  monthly: [
    { name: "Jan", BTC: 4000, ETH: 2400, USDT: 3200 },
    { name: "Fév", BTC: 3000, ETH: 1398, USDT: 2500 },
    { name: "Mar", BTC: 2000, ETH: 9800, USDT: 1000 },
    { name: "Avr", BTC: 2780, ETH: 3908, USDT: 1900 },
    { name: "Mai", BTC: 1890, ETH: 4800, USDT: 2100 },
    { name: "Juin", BTC: 2390, ETH: 3800, USDT: 2500 },
    { name: "Juil", BTC: 3490, ETH: 4300, USDT: 2100 },
    { name: "Août", BTC: 3490, ETH: 4300, USDT: 2100 },
    { name: "Sep", BTC: 3490, ETH: 4300, USDT: 2100 },
    { name: "Oct", BTC: 3490, ETH: 4300, USDT: 2100 },
    { name: "Nov", BTC: 3490, ETH: 4300, USDT: 2100 },
    { name: "Déc", BTC: 3490, ETH: 4300, USDT: 2100 },
  ],
  yearly: [
    { name: "2021", BTC: 40000, ETH: 24000, USDT: 32000 },
    { name: "2022", BTC: 30000, ETH: 13980, USDT: 25000 },
    { name: "2023", BTC: 20000, ETH: 98000, USDT: 10000 },
    { name: "2024", BTC: 27800, ETH: 39080, USDT: 19000 },
    { name: "2025", BTC: 18900, ETH: 48000, USDT: 21000 },
  ],
};

export const TransactionChart = () => {
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly" | "yearly">("monthly");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={timeframe === "weekly" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("weekly")}
        >
          Semaine
        </Button>
        <Button
          variant={timeframe === "monthly" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("monthly")}
        >
          Mois
        </Button>
        <Button
          variant={timeframe === "yearly" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("yearly")}
        >
          Année
        </Button>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data[timeframe]}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F7931A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F7931A" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorETH" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#627EEA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#627EEA" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUSDT" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#26A17B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#26A17B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip 
              formatter={(value: number) => [`${value}€`, undefined]}
              labelFormatter={(label) => `${label}`}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="BTC"
              stroke="#F7931A"
              fillOpacity={1}
              fill="url(#colorBTC)"
            />
            <Area
              type="monotone"
              dataKey="ETH"
              stroke="#627EEA"
              fillOpacity={1}
              fill="url(#colorETH)"
            />
            <Area
              type="monotone"
              dataKey="USDT"
              stroke="#26A17B"
              fillOpacity={1}
              fill="url(#colorUSDT)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
