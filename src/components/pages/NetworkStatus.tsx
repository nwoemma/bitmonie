import { CheckCircle, AlertCircle, Clock, Activity, RefreshCw } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NetworkStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const networksRef = useRef<HTMLDivElement>(null);
  const networkRowsRef = useRef<(HTMLTableRowElement | null)[]>([]);

  const networks = [
    { name: 'Ethereum', status: 'operational', latency: '42ms', uptime: '99.99%', blockHeight: '19,284,562', tps: '28.4' },
    { name: 'BSC', status: 'operational', latency: '38ms', uptime: '99.98%', blockHeight: '34,827,193', tps: '156.2' },
    { name: 'Polygon', status: 'operational', latency: '45ms', uptime: '99.97%', blockHeight: '52,183,447', tps: '89.7' },
    { name: 'Arbitrum', status: 'operational', latency: '51ms', uptime: '99.95%', blockHeight: '184,293,562', tps: '42.1' },
    { name: 'Optimism', status: 'degraded', latency: '89ms', uptime: '99.89%', blockHeight: '117,482,039', tps: '31.8' },
    { name: 'Avalanche', status: 'operational', latency: '44ms', uptime: '99.99%', blockHeight: '38,192,847', tps: '67.3' },
    { name: 'Solana', status: 'operational', latency: '32ms', uptime: '99.95%', blockHeight: '248,193,562', tps: '2,847' },
    { name: 'Base', status: 'operational', latency: '47ms', uptime: '99.96%', blockHeight: '14,827,394', tps: '23.5' }
  ];

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => setLastUpdated(new Date()), 30000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (statusRef.current) {
        gsap.fromTo(statusRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: "back.out(0.5)" });
      }
      networkRowsRef.current.forEach((row, index) => {
        if (!row) return;
        gsap.fromTo(row, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, delay: index * 0.05, ease: "power2.out", scrollTrigger: { trigger: networksRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      });
    });
    return () => ctx.revert();
  }, []);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'operational': return <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-3 h-3" /> Operational</span>;
      case 'degraded': return <span className="flex items-center gap-1 text-yellow-400"><AlertCircle className="w-3 h-3" /> Degraded</span>;
      default: return <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3" /> {status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="flex flex-wrap justify-between items-center mb-8">
          <div><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4"><Activity className="w-3 h-3" /> SYSTEM STATUS</div><h1 className="text-4xl md:text-5xl font-black text-white shimmer-text">Network Status</h1></div>
          <div className="flex items-center gap-4"><div className="text-right"><div className="text-xs text-slate-500">Last updated</div><div className="text-sm text-slate-400">{lastUpdated.toLocaleTimeString()}</div></div><button onClick={() => { setLastUpdated(new Date()); setAutoRefresh(true); }} className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"><RefreshCw className={`w-4 h-4 text-slate-400 ${autoRefresh ? 'animate-spin-slow' : ''}`} /></button></div>
        </div>

        <div ref={statusRef} className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" /><span className="text-green-400 font-bold">All Systems Operational</span><span className="text-slate-400 text-sm">Most services running normally</span></div>
          <div className="text-sm text-slate-400">Uptime: <span className="text-white font-bold">99.96%</span> over last 90 days</div>
        </div>

        <div ref={networksRef} className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden mb-8">
          <div className="p-4 border-b border-white/5 bg-slate-900/50"><h2 className="text-lg font-bold text-white">Blockchain Networks</h2></div>
          <div className="overflow-x-auto"><table className="w-full"><thead className="bg-slate-800/50 text-slate-400 text-xs"><tr><th className="p-3 text-left">Network</th><th className="p-3 text-left">Status</th><th className="p-3 text-left">Latency</th><th className="p-3 text-left">Uptime</th><th className="p-3 text-left">Block Height</th><th className="p-3 text-left">TPS</th></tr></thead>
          <tbody>{networks.map((network, index) => (<tr key={index} ref={el => { networkRowsRef.current[index] = el; }} className="border-b border-white/5 hover:bg-white/5 transition-colors"><td className="p-3 font-medium text-white">{network.name}</td><td className="p-3">{getStatusBadge(network.status)}</td><td className="p-3 text-slate-300">{network.latency}</td><td className="p-3 text-slate-300">{network.uptime}</td><td className="p-3 font-mono text-xs text-slate-300">{network.blockHeight}</td><td className="p-3 text-slate-300">{network.tps}</td></tr>))}</tbody></table></div>
        </div>
      </div>
    </div>
  );
}