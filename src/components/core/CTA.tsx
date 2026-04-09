// CTA.tsx - With magnetic button and particle burst effect
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Continuous pulse for button
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
      
      // Rotating glow effect
      gsap.to(glowRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    gsap.to(buttonRef.current, {
      x: x,
      y: y,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)"
    });
  };
  
  const handleClick = (e: React.MouseEvent) => {
    // Create particle burst effect
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      document.body.appendChild(particle);
      
      const angle = (Math.PI * 2 * i) / 20;
      const velocity = 100 + Math.random() * 100;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      gsap.to(particle, {
        x: vx,
        y: vy,
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => particle.remove()
      });
    }
    
    // Button click animation
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 text-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div
          ref={glowRef}
          className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        <div className="relative bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl shadow-blue-500/30">
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
              Stop trading blind. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Start scanning smarter.
              </span>
            </h2>
            
            <button
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              className="relative bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Bitmonie Now
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
          
          {/* Animated floating orbs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 blur-[80px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-purple-400/20 blur-[80px] rounded-full animate-pulse-slow delay-1000" />
        </div>
      </div>
    </section>
  );
}