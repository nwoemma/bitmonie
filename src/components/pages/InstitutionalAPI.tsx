import { Code, Database, Zap, Shield, BarChart3, Users, Key, Globe, CheckCircle, ArrowRight, Copy } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InstitutionalAPI() {
  const [copied, setCopied] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const endpointsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const featuresItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const endpointItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pricingItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const endpoints = [
    { method: 'GET', path: '/v1/market/data', description: 'Real-time market prices and volume' },
    { method: 'GET', path: '/v1/tokens/audit', description: 'Smart contract audit results' },
    { method: 'GET', path: '/v1/whales/transactions', description: 'Large transaction monitoring' },
    { method: 'POST', path: '/v1/alerts/create', description: 'Create custom price/volume alerts' },
    { method: 'GET', path: '/v1/liquidity/pools', description: 'LP analytics and depth data' },
    { method: 'WS', path: '/v1/stream/market', description: 'WebSocket real-time data stream' }
  ];

  const features = [
    { icon: Zap, title: '99.99% Uptime', desc: 'Enterprise-grade infrastructure with global redundancy' },
    { icon: Shield, title: 'Bank-Level Security', desc: 'API key encryption and IP whitelisting' },
    { icon: BarChart3, title: 'Real-time Data', desc: 'Sub-millisecond latency for market data' },
    { icon: Users, title: 'Dedicated Support', desc: '24/7 technical account management' }
  ];

  const pricingPlans = [
    { name: 'Starter', price: '$299', requests: '10k/month', features: ['Basic market data', 'Email support', 'Standard rate limits'] },
    { name: 'Professional', price: '$999', requests: '100k/month', features: ['Full API access', 'Priority support', 'WebSocket streams', 'Custom alerts'] },
    { name: 'Enterprise', price: 'Custom', requests: 'Unlimited', features: ['Dedicated infrastructure', 'SLA guarantee', 'Account manager', 'Custom endpoints'] }
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

      // Code Block Animation - typewriter effect
      if (codeRef.current) {
        gsap.fromTo(codeRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: codeRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Features Staggered Animation
      featuresItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 30, rotationY: 10 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Hover animation
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Endpoints Staggered Animation
      endpointItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: endpointsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Hover effect for endpoints
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            duration: 0.2,
            ease: "power1.out"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            backgroundColor: "transparent",
            duration: 0.2,
            ease: "power1.out"
          });
        });
      });

      // Pricing Cards Staggered Animation
      pricingItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.15,
            ease: "back.out(0.7)",
            scrollTrigger: {
              trigger: pricingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Enhanced hover animation for pricing cards
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -12,
            scale: 1.02,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            boxShadow: "0 25px 40px -12px rgba(34, 197, 94, 0.25)"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
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
      
    }, [heroRef, featuresRef, endpointsRef, pricingRef, ctaRef]);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6 animate-pulse">
            <Code className="w-3 h-3" />
            INSTITUTIONAL API
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent shimmer-text">
            Enterprise-Grade Data API
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Power your trading infrastructure with real-time blockchain intelligence
          </p>
        </div>

        {/* Code Example */}
        <div ref={codeRef} className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden mb-16 group">
          <div className="bg-slate-800 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-sm text-slate-400">JavaScript</span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText("fetch('https://api.bitmonie.com/v1/market/data', {\n  headers: { 'X-API-Key': 'your_api_key' }\n})");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-all hover:scale-105"
            >
              <Copy className="w-3 h-3" /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="p-4 text-sm text-green-400 overflow-x-auto">
            {`fetch('https://api.bitmonie.com/v1/market/data', {
  headers: { 'X-API-Key': 'your_api_key' }
})
.then(res => res.json())
.then(data => console.log(data));

// Response
{
  "status": "success",
  "data": {
    "eth": { "price": 3845.20, "volume_24h": 24.5e9 },
    "btc": { "price": 62345.80, "volume_24h": 38.2e9 }
  }
}`}
          </pre>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => { featuresItemsRef.current[index] = el; }}
              className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Endpoints */}
        <div ref={endpointsRef} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
          <div className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                ref={el => { endpointItemsRef.current[index] = el; }}
                className="flex items-center gap-4 p-4 border-b border-white/5 last:border-0 cursor-pointer"
              >
                <span className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                  endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                  endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-sm text-white font-mono">{endpoint.path}</code>
                <span className="text-slate-400 text-sm flex-1">{endpoint.description}</span>
                <button className="text-slate-400 hover:text-green-400 text-sm transition-all hover:translate-x-1">
                  Try it →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div ref={pricingRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={el => { pricingItemsRef.current[index] = el; }}
              className={`bg-slate-900/50 border rounded-2xl p-6 cursor-pointer ${
                plan.name === 'Professional' ? 'border-green-500/50 shadow-lg shadow-green-500/10' : 'border-white/5'
              }`}
            >
              {plan.name === 'Professional' && (
                <div className="text-center text-xs font-bold text-green-400 mb-2 animate-pulse">MOST POPULAR</div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-black text-white mb-4">
                {plan.price}<span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">{plan.requests} requests</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${
                plan.name === 'Enterprise' 
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Documentation CTA */}
        <div ref={ctaRef}>
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to integrate?</h3>
              <p className="text-slate-400 mb-6">Check out our comprehensive API documentation</p>
              <button className="cta-button px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg shadow-green-500/25 transition-all hover:scale-105">
                Read Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}