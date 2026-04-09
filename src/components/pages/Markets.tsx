import { TrendingUp, TrendingDown, DollarSign, Activity, BarChart3, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Markets() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);
  const statsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tableRowsRef = useRef<(HTMLTableRowElement | null)[]>([]);
  const trendingItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const topMarkets = [
    { name: 'Ethereum', symbol: 'ETH', price: '$3,845.20', change: '+5.2%', positive: true, volume: '$24.5B' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$62,345.80', change: '+2.8%', positive: true, volume: '$38.2B' },
    { name: 'Solana', symbol: 'SOL', price: '$168.45', change: '-1.3%', positive: false, volume: '$4.8B' },
    { name: 'BNB', symbol: 'BNB', price: '$589.30', change: '+3.1%', positive: true, volume: '$2.1B' },
    { name: 'XRP', symbol: 'XRP', price: '$0.845', change: '-0.5%', positive: false, volume: '$1.9B' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.452', change: '+1.2%', positive: true, volume: '$0.8B' },
  ];

  const trendingTokens = [
    { name: 'Pepe', symbol: 'PEPE', price: '$0.000012', change: '+45%', positive: true },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.152', change: '+18%', positive: true },
    { name: 'Shiba Inu', symbol: 'SHIB', price: '$0.000023', change: '-5%', positive: false },
    { name: 'Bonk', symbol: 'BONK', price: '$0.0000024', change: '+32%', positive: true },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }

      statsItemsRef.current.forEach((stat, index) => {
        if (!stat) return;
        gsap.fromTo(stat, { opacity: 0, y: 30, scale: 0.9 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.6, delay: index * 0.1, ease: "back.out(0.6)",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });

      tableRowsRef.current.forEach((row, index) => {
        if (!row) return;
        gsap.fromTo(row, { opacity: 0, x: -20 }, {
          opacity: 1, x: 0, duration: 0.4, delay: index * 0.05, ease: "power2.out",
          scrollTrigger: { trigger: tableRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        });
      });

      trendingItemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, y: 30, scale: 0.9 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.5, delay: index * 0.1, ease: "back.out(0.6)",
          scrollTrigger: { trigger: trendingRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        });
        item.addEventListener('mouseenter', () => { gsap.to(item, { y: -8, scale: 1.02, duration: 0.3 }); });
        item.addEventListener('mouseleave', () => { gsap.to(item, { y: 0, scale: 1, duration: 0.3 }); });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent shimmer-text">Live Markets</h1>
          <p className="text-slate-400 text-xl">Real-time cryptocurrency prices, trends, and analytics</p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[{ icon: Globe, label: 'Global Market Cap', value: '$2.45T', change: '+3.2%' }, { icon: Activity, label: '24h Volume', value: '$98.4B', change: '+12.5%' }, { icon: BarChart3, label: 'Active Coins', value: '12,845', change: '+342 new' }, { icon: DollarSign, label: 'DeFi TVL', value: '$124.5B', change: '+5.8%' }].map((stat, index) => (
            <div key={index} ref={el => { statsItemsRef.current[index] = el; }} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 group hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-2 text-slate-400 mb-2"><stat.icon className="w-4 h-4" /><span className="text-sm">{stat.label}</span></div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-green-500 text-sm">{stat.change}</div>
            </div>
          ))}
        </div>

        <div ref={tableRef} className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden mb-12">
          <div className="p-6 border-b border-white/5"><h2 className="text-xl font-bold text-white">Top Cryptocurrencies</h2></div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900/50"><tr className="text-left text-slate-400 text-sm"><th className="px-6 py-4">Asset</th><th className="px-6 py-4">Price</th><th className="px-6 py-4">24h Change</th><th className="px-6 py-4">Volume</th></tr></thead>
              <tbody>
                {topMarkets.map((market, index) => (
                  <tr key={index} ref={el => { tableRowsRef.current[index] = el; }} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4"><div className="font-bold text-white">{market.name}</div><div className="text-sm text-slate-400">{market.symbol}</div></td>
                    <td className="px-6 py-4 text-white font-semibold">{market.price}</td>
                    <td className="px-6 py-4"><span className={`flex items-center gap-1 ${market.positive ? 'text-green-500' : 'text-red-500'}`}>{market.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}{market.change}</span></td>
                    <td className="px-6 py-4 text-slate-300">{market.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div ref={trendingRef}>
          <h2 className="text-2xl font-bold text-white mb-6">🔥 Trending Now</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingTokens.map((token, index) => (
              <div key={index} ref={el => { trendingItemsRef.current[index] = el; }} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 cursor-pointer group hover:border-blue-500/50 transition-all">
                <div className="flex justify-between items-start mb-4"><div><div className="font-bold text-white text-lg">{token.name}</div><div className="text-sm text-slate-400">{token.symbol}</div></div><div className={`px-2 py-1 rounded-lg text-xs font-bold ${token.positive ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>{token.change}</div></div>
                <div className="text-2xl font-bold text-white">{token.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}