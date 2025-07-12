import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CryptoPrices() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd'
      );
      setPrices(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching prices:', err);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Crypto Prices</h2>
      {loading ? (
        <p className="text-center text-gray-400">Loading prices...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
            { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
            { id: 'solana', name: 'Solana', symbol: 'SOL' },
            { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE' },
          ].map((coin) => (
            <div
              key={coin.id}
              className="bg-gray-900 rounded-lg p-6 text-center shadow-lg hover:shadow-blue-500/30 transition"
            >
              <h3 className="text-2xl font-bold mb-2">{coin.name} ({coin.symbol})</h3>
              <p className="text-3xl font-mono text-blue-400 mb-2">
                ${prices[coin.id]?.usd?.toLocaleString() ?? 'N/A'}
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Buy</button>
                <button className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black">Trade</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
