import { Rocket, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LaunchApp() {
  const heroRef = useRef<HTMLDivElement>(null);
  const newUserRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const walletItemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const featuresItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      // New User Card Animation
      if (newUserRef.current) {
        gsap.fromTo(newUserRef.current,
          { opacity: 0, x: -30, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            delay: 0.2,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: newUserRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Floating animation for rocket icon
        const rocketIcon = newUserRef.current.querySelector('.rocket-icon');
        if (rocketIcon) {
          gsap.to(rocketIcon, {
            y: -8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      }

      // Wallet Connect Card Animation
      if (walletRef.current) {
        gsap.fromTo(walletRef.current,
          { opacity: 0, x: 30, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            delay: 0.3,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: walletRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Wallet Items Staggered Animation
      walletItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 20, x: -20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            delay: 0.5 + index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: walletRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Hover animation for wallet buttons
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.02,
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            duration: 0.2,
            ease: "power2.out"
          });
          const arrowDiv = item.querySelector('.wallet-arrow');
          if (arrowDiv) {
            gsap.to(arrowDiv, {
              backgroundColor: "#3b82f6",
              scale: 1.1,
              duration: 0.2
            });
          }
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            duration: 0.2,
            ease: "power2.out"
          });
          const arrowDiv = item.querySelector('.wallet-arrow');
          if (arrowDiv) {
            gsap.to(arrowDiv, {
              backgroundColor: "rgb(51, 65, 85)",
              scale: 1,
              duration: 0.2
            });
          }
        });
      });

      // Features Items Staggered Animation
      featuresItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Hover animation for feature cards
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -8,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
            borderColor: "rgba(59, 130, 246, 0.5)"
          });
          const icon = item.querySelector('.feature-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              duration: 0.3,
              ease: "back.out(0.5)"
            });
          }
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            borderColor: "rgba(255, 255, 255, 0.05)"
          });
          const icon = item.querySelector('.feature-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });
      
    }, [heroRef, newUserRef, walletRef, featuresRef]);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div ref={heroRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 animate-pulse">
            <Zap className="w-3 h-3 fill-current" />
            READY FOR LAUNCH
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent shimmer-text">
            Launch Bitmonie
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Connect your wallet and start trading with absolute clarity
          </p>
        </div>

        {/* Wallet Connection Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* New User Card */}
          <div ref={newUserRef} className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-3xl p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="rocket-icon w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">New to Bitmonie?</h2>
            <p className="text-slate-400 mb-6">Start your journey with our guided onboarding</p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95">
              Create Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Wallet Connect Card */}
          <div ref={walletRef} className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 group hover:border-blue-500/30 transition-all duration-500">
            <h2 className="text-2xl font-bold text-white mb-6">Connect Wallet</h2>
            <div className="space-y-4">
              {['MetaMask', 'WalletConnect', 'Coinbase Wallet', 'Phantom'].map((wallet, index) => (
                <button
                  key={wallet}
                  ref={el => { walletItemsRef.current[index] = el; }}
                  className="w-full bg-slate-800/50 hover:bg-slate-800 border border-white/10 rounded-xl p-4 flex items-center justify-between group transition-all cursor-pointer"
                >
                  <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">{wallet}</span>
                  <div className="wallet-arrow w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'Honeypot Scanner', desc: 'AI-powered scam detection' },
            { icon: Zap, title: 'Real-time Alerts', desc: 'Instant whale notifications' },
            { icon: CheckCircle, title: 'Audit Reports', desc: 'Automated contract analysis' }
          ].map((feature, index) => (
            <div
              key={index}
              ref={el => { featuresItemsRef.current[index] = el; }}
              className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="feature-icon w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/20">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
              <div className="mt-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}