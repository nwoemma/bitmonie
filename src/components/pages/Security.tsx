import { Shield, Lock, Server, Key, Fingerprint, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const auditsRef = useRef<HTMLDivElement>(null);
  const featuresItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const securityFeatures = [
    { icon: Shield, title: 'Smart Contract Audits', description: 'Automated and manual audits of all listed tokens with detailed risk reports.', status: 'Active' },
    { icon: Lock, title: 'End-to-End Encryption', description: 'All data transmitted is encrypted using AES-256 military-grade encryption.', status: 'Active' },
    { icon: Fingerprint, title: 'Multi-Factor Authentication', description: 'Optional 2FA support for API keys and sensitive operations.', status: 'Available' },
    { icon: Server, title: 'Decentralized Infrastructure', description: 'No single point of failure with distributed node architecture.', status: 'Active' },
    { icon: Key, title: 'Non-Custodial', description: 'We never hold your private keys or assets. You remain in full control.', status: 'Active' },
    { icon: Users, title: 'Bug Bounty Program', description: '$1,000,000 bounty pool for responsible vulnerability disclosures.', status: 'Live' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (scoreRef.current) {
        gsap.fromTo(scoreRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.7, delay: 0.2, ease: "back.out(0.6)" });
        const scoreNumber = scoreRef.current.querySelector('.score-number');
        if (scoreNumber) {
          let count = 0;
          gsap.to({}, { duration: 2, onUpdate: function() { count = Math.ceil((this.progress() || 0) * 99.98); if (scoreNumber) scoreNumber.textContent = count.toFixed(2) + '%'; } });
        }
      }
      featuresItemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, y: 40, rotationY: 15 }, {
          opacity: 1, y: 0, rotationY: 0, duration: 0.7, delay: index * 0.1, ease: "back.out(0.6)",
          scrollTrigger: { trigger: featuresRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        });
        item.addEventListener('mouseenter', () => { gsap.to(item, { y: -8, scale: 1.02, duration: 0.3 }); });
        item.addEventListener('mouseleave', () => { gsap.to(item, { y: 0, scale: 1, duration: 0.3 }); });
      });
      if (auditsRef.current) {
        gsap.fromTo(auditsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: auditsRef.current, start: "top 85%" } });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6 animate-pulse"><Shield className="w-3 h-3" /> INDUSTRY-LEADING SECURITY</div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent shimmer-text">Security First</h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">Your safety is our top priority. We implement rigorous security measures to protect your data and assets.</p>
        </div>

        <div ref={scoreRef} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-6"><CheckCircle className="w-4 h-4" /> SECURITY RATING</div>
          <div className="score-number text-7xl font-black text-white mb-4">99.98%</div>
          <p className="text-slate-300">Uptime & Security Score • Audited by CertiK & Hacken</p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} ref={el => { featuresItemsRef.current[index] = el; }} className="group bg-slate-900/50 border border-white/5 rounded-2xl p-8 cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"><feature.icon className="w-7 h-7 text-white" /></div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{feature.description}</p>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />{feature.status}</div>
              <div className="mt-4 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>

        <div ref={auditsRef} className="bg-slate-900/30 border border-white/5 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Recent Audits & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">{['CertiK Audit', 'Hacken Security', 'SlowMist Report'].map((audit, index) => (<div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl group hover:scale-105 transition-all"><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Shield className="w-8 h-8 text-white" /></div><div className="font-bold text-white">{audit}</div><div className="text-sm text-slate-400">Passed with 100%</div><div className="text-xs text-green-400 mt-2 cursor-pointer hover:underline">View Report →</div></div>))}</div>
        </div>

        <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 flex items-start gap-4"><AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" /><div><h4 className="font-bold text-yellow-500 mb-1">Important Security Notice</h4><p className="text-slate-400 text-sm">Always verify contract addresses and double-check URLs. Bitmonie will never ask for your private keys or seed phrases. Enable 2FA on your exchange accounts and use hardware wallets for large holdings.</p></div></div>
      </div>
    </div>
  );
}