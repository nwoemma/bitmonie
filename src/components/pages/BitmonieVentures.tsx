import { Rocket, TrendingUp, Users, Shield, Globe, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BitmonieVentures() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const statsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const focusItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const portfolioItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const portfolio = [
    { name: 'Aether Protocol', category: 'DeFi', investment: '$2.5M', stage: 'Seed' },
    { name: 'Nexus Chain', category: 'L1 Blockchain', investment: '$5M', stage: 'Series A' },
    { name: 'Quantum Swap', category: 'DEX', investment: '$1.8M', stage: 'Seed' },
    { name: 'Cypher Wallet', category: 'Infrastructure', investment: '$3M', stage: 'Series A' },
    { name: 'Oracle AI', category: 'Data', investment: '$2.2M', stage: 'Seed' },
    { name: 'Stake Matrix', category: 'Liquid Staking', investment: '$4M', stage: 'Series B' }
  ];

  const focusAreas = [
    { icon: Shield, title: 'Security & Auditing', desc: 'Next-gen smart contract security solutions' },
    { icon: TrendingUp, title: 'DeFi Protocols', desc: 'Innovative lending, trading, and yield products' },
    { icon: Globe, title: 'Infrastructure', desc: 'Scalable L1/L2 solutions and RPC providers' },
    { icon: Users, title: 'Consumer Apps', desc: 'User-friendly onramps and trading interfaces' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      // Stats Counter Animation
      statsItemsRef.current.forEach((stat, index) => {
        if (!stat) return;
        
        const valueElement = stat.querySelector('.stat-value') as HTMLElement;
        const targetValue = valueElement?.getAttribute('data-target') || '';
        const numericValue = parseInt(targetValue.replace(/[^0-9]/g, ''));
        
        gsap.fromTo(stat,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Number counter animation
        if (valueElement && numericValue) {
          let currentValue = 0;
          gsap.to({}, {
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              currentValue = Math.ceil((this.progress() || 0) * numericValue);
              const displayValue = targetValue.includes('M') ? `$${currentValue}M+` : 
                                   targetValue.includes('+') ? `${currentValue}+` : 
                                   `$${currentValue}M+`;
              valueElement.innerText = displayValue;
            },
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });

      // Focus Areas Staggered Animation
      focusItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 40, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "back.out(0.7)",
            scrollTrigger: {
              trigger: focusRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Hover animation
        const hoverElement = item;
        hoverElement.addEventListener('mouseenter', () => {
          gsap.to(hoverElement, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        hoverElement.addEventListener('mouseleave', () => {
          gsap.to(hoverElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Portfolio Items Staggered Animation
      portfolioItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, x: -30, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: portfolioRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Enhanced hover animation
        const hoverItem = item;
        hoverItem.addEventListener('mouseenter', () => {
          gsap.to(hoverItem, {
            y: -10,
            scale: 1.03,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            boxShadow: "0 25px 40px -12px rgba(168, 85, 247, 0.3)"
          });
        });
        
        hoverItem.addEventListener('mouseleave', () => {
          gsap.to(hoverItem, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "none"
          });
        });
      });

      // CTA Section Animation
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Floating animation for CTA button
        const ctaButton = ctaRef.current.querySelector('.cta-button');
        if (ctaButton) {
          gsap.to(ctaButton, {
            y: -5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      }
      
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6 animate-pulse">
            <Rocket className="w-3 h-3" />
            BITMONIE VENTURES
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
            Investing in the Future of Crypto
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Backing the brightest founders building the next generation of blockchain technology
          </p>
        </div>

        {/* Stats with animations */}
        <div ref={statsRef} className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '$50M+', label: 'Assets Under Management', target: '50' },
            { value: '25+', label: 'Portfolio Companies', target: '25' },
            { value: '$200M+', label: 'Combined Portfolio Value', target: '200' },
            { value: '15+', label: 'Successful Exits', target: '15' }
          ].map((stat, index) => (
            <div
              key={index}
              ref={el => {statsItemsRef.current[index] = el}}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
            >
              <div 
                className="stat-value text-3xl font-black text-purple-400"
                data-target={stat.target}
              >
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div ref={focusRef} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Investment Focus</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                ref={el => {focusItemsRef.current[index] = el}}
                className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section - Logos Removed */}
        <div ref={portfolioRef} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Portfolio Companies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((company, index) => (
              <div
                key={index}
                ref={el => {portfolioItemsRef.current[index] = el}}
                className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 group cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {company.name}
                </h3>
                <p className="text-purple-400 text-sm mb-3">{company.category}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Investment: {company.investment}</span>
                  <span className="text-slate-400">Stage: {company.stage}</span>
                </div>
                {/* Animated underline on hover */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef}>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12 text-center relative overflow-hidden group">
            {/* Animated background orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Building Something Revolutionary?</h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                We're always looking for ambitious founders to partner with
              </p>
              <button className="cta-button px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/25 group-hover:shadow-xl group-hover:shadow-purple-500/40">
                Apply for Funding 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}