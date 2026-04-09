import { LineChart, BarChart3, Activity, Users, Zap, Shield, DollarSign, Clock, CheckCircle, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarketMakerLabs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const metricsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    { icon: LineChart, title: 'Liquidity Provision', desc: 'Deep liquidity across 50+ trading pairs' },
    { icon: BarChart3, title: 'Algorithmic Trading', desc: 'Smart order routing and execution' },
    { icon: Activity, title: 'Risk Management', desc: 'Real-time position monitoring and hedging' },
    { icon: Users, title: 'OTC Desks', desc: 'Large block trades with minimal slippage' }
  ];

  const metrics = [
    { label: 'Daily Volume', value: '$500M+', change: '+32%' },
    { label: 'Markets Covered', value: '50+', change: '+12' },
    { label: 'Partner Exchanges', value: '25+', change: '+5' },
    { label: 'Avg. Spread', value: '0.05%', change: '-40%' }
  ];

  const supportedExchanges = [
    'Binance', 'Coinbase', 'Kraken', 'Bybit', 'OKX', 'Uniswap', 'Curve', 'Balancer'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      // Metrics Counter Animation
      metricsItemsRef.current.forEach((metric, index) => {
        if (!metric) return;
        
        gsap.fromTo(metric,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: metricsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Services Staggered Animation
      servicesItemsRef.current.forEach((service, index) => {
        if (!service) return;
        
        gsap.fromTo(service,
          { opacity: 0, y: 40, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "back.out(0.7)",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        service.addEventListener('mouseenter', () => {
          gsap.to(service, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" });
        });
        service.addEventListener('mouseleave', () => {
          gsap.to(service, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

      // Steps Animation
      stepItemsRef.current.forEach((step, index) => {
        if (!step) return;
        
        gsap.fromTo(step,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // CTA Animation
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
        
        const ctaButton = ctaRef.current.querySelector('.cta-button');
        if (ctaButton) {
          gsap.to(ctaButton, { y: -5, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }
      }
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-6 animate-pulse">
            <Zap className="w-3 h-3" />
            MARKET MAKER LABS
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent shimmer-text">
            Institutional Liquidity Solutions
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Providing deep liquidity and smart execution for tokens and exchanges worldwide
          </p>
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={el => { metricsItemsRef.current[index] = el; }}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-center group hover:border-orange-500/50 transition-all"
            >
              <div className="text-3xl font-black text-white mb-1">{metric.value}</div>
              <div className="text-slate-400 text-sm mb-2">{metric.label}</div>
              <div className={`text-xs font-bold ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change}
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div ref={servicesRef} className="grid md:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => { servicesItemsRef.current[index] = el; }}
              className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div ref={stepsRef} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect', desc: 'Integrate our API or smart contracts' },
              { step: '02', title: 'Deploy', desc: 'Set your parameters and risk limits' },
              { step: '03', title: 'Earn', desc: 'Generate yield while providing liquidity' }
            ].map((step, index) => (
              <div
                key={index}
                ref={el => { stepItemsRef.current[index] = el; }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Exchanges */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Supported Exchanges</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {supportedExchanges.map((exchange, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 rounded-xl text-sm text-slate-300 hover:bg-orange-600/20 hover:text-orange-400 transition-all hover:scale-105 cursor-pointer"
              >
                {exchange}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef}>
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-3xl p-12 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Partner With Us</h2>
              <p className="text-slate-400 mb-6">Looking for liquidity solutions for your token or exchange?</p>
              <button className="cta-button px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-xl font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-orange-500/25">
                Contact Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}