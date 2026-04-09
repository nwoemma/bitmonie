// Hero.tsx - Enhanced with powerful animations
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      gsap.fromTo(badgeRef.current,
        { opacity: 0, y: -30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)", delay: 0.2 }
      );
      
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.4 }
      );
      
      gsap.fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.7 }
      );
      
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(0.8)", delay: 0.9 }
      );
      
      // Image reveal with 3D tilt
      gsap.fromTo(imageRef.current,
        { opacity: 0, rotationY: 15, rotationX: 10, scale: 0.9 },
        { opacity: 1, rotationY: 0, rotationX: 0, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
      );
      
      // Continuous floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
      });
      
      // Scroll-triggered parallax for image
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.set(imageRef.current, { y: self.progress * 80 });
          }
        }
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <header ref={heroRef} className="relative pt-16 pb-24 px-6 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 backdrop-blur-sm">
            <Zap className="w-3 h-3 fill-current animate-pulse" />
            LIVE ON MAINNET V2.0
          </div>
          
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Trade with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 shimmer-text">
              Absolute Clarity.
            </span>
          </h1>
          
          <p ref={descRef} className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            The premier dashboard for token discovery, whale tracking, and automated contract auditing. Don't just trade—know exactly what you're buying.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group px-8 py-4 bg-white text-[#020617] rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 active:scale-95 duration-300">
              Start Scanning 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-slate-900 border border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-800 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>

        <div ref={imageRef} className="relative group perspective-1000" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110" />
          <div className="relative bg-slate-900 border border-white/10 rounded-[2rem] overflow-hidden p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
              alt="Bitmonie Dashboard"
              className="w-full h-auto rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </header>
  );
}