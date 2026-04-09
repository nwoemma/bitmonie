import { Shield, TrendingUp, Search, Zap, Eye, Lock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featuresItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const featuresList = [
    { icon: Shield, title: 'Honeypot Scanner', description: 'Our proprietary AI detects malicious code patterns before you swap, protecting you from rug pulls and scams.', gradient: 'from-red-500 to-orange-500' },
    { icon: TrendingUp, title: 'Whale Radar', description: 'Watch large movements in real-time. Follow the smart money and stay ahead of market moves.', gradient: 'from-green-500 to-emerald-500' },
    { icon: Search, title: 'LP Analytics', description: 'Deep dives into liquidity locks and developer wallet behavior for complete transparency.', gradient: 'from-blue-500 to-indigo-500' },
    { icon: Eye, title: 'Contract Auditor', description: 'Automated smart contract analysis with detailed risk scoring and vulnerability detection.', gradient: 'from-purple-500 to-pink-500' },
    { icon: Lock, title: 'Security First', description: 'Enterprise-grade security measures protecting your data and connections.', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Zap, title: 'Real-time Alerts', description: 'Instant notifications for suspicious activities, large transactions, and market movements.', gradient: 'from-yellow-500 to-orange-500' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      featuresItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 50, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { y: -12, scale: 1.02, duration: 0.4, ease: "elastic.out(1, 0.5)", boxShadow: "0 25px 40px -12px rgba(59,130,246,0.3)" });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { y: 0, scale: 1, duration: 0.4, ease: "power2.out", boxShadow: "none" });
        });
      });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent shimmer-text">
            Powerful Features
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Everything you need to trade with confidence and absolute clarity
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              ref={el => { featuresItemsRef.current[index] = el; }}
              className="group bg-slate-900/50 border border-white/5 rounded-2xl p-8 cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              <div className="mt-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}