import { Users, Globe, Trophy, Heart, Target, Sparkles, Shield, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const valuesItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const teamItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const milestoneItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const values = [
    { icon: Shield, title: 'Transparency First', desc: 'Complete visibility into all operations and data' },
    { icon: Users, title: 'Community Driven', desc: 'Built by traders, for the trading community' },
    { icon: Zap, title: 'Innovation Focus', desc: 'Constantly pushing the boundaries of DeFi analytics' },
    { icon: Heart, title: 'User Centric', desc: 'Your success is our mission' }
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', bio: 'Former Goldman Sachs quant with 10+ years in DeFi', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
    { name: 'Sarah Williams', role: 'CTO', bio: 'Ex-Google engineer, blockchain scalability expert', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    { name: 'Marcus Rodriguez', role: 'Head of Security', bio: 'Cybersecurity specialist, former NSA analyst', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { name: 'Emily Park', role: 'Product Lead', bio: 'Product veteran from leading crypto exchanges', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' }
  ];

  const milestones = [
    { year: '2021', title: 'Founded', desc: 'Bitmonie started with a mission to bring transparency to DeFi' },
    { year: '2022', title: 'V1 Launch', desc: 'First version of our honeypot scanner goes live' },
    { year: '2023', title: '1M Users', desc: 'Reached over 1 million active traders worldwide' },
    { year: '2024', title: 'V2 Mainnet', desc: 'Launched institutional-grade analytics platform' }
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

      // Mission Statement Animation
      if (missionRef.current) {
        gsap.fromTo(missionRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: "back.out(0.5)" }
        );
      }

      // Values Items Staggered Animation
      valuesItemsRef.current.forEach((item, index) => {
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
              trigger: valuesRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Hover animation
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { y: -8, duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      // Team Items Staggered Animation
      teamItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Milestones Staggered Animation
      milestoneItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: milestonesRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
    }, [heroRef, missionRef, valuesRef, teamRef, milestonesRef]);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 animate-pulse">
            <Sparkles className="w-3 h-3" />
            OUR STORY
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent shimmer-text">
            Redefining On-Chain
            <br />
            Transparency
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            We're on a mission to democratize access to institutional-grade trading intelligence
          </p>
        </div>

        {/* Mission Statement */}
        <div ref={missionRef} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 mb-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <Target className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            To empower every trader with the same data and insights that institutional investors use, 
            creating a level playing field in the world of decentralized finance.
          </p>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                ref={el => { valuesItemsRef.current[index] = el; }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                ref={el => { teamItemsRef.current[index] = el; }}
                className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div ref={milestonesRef}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={el => { milestoneItemsRef.current[index] = el; }}
                className="relative group"
              >
                <div className="text-4xl font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {milestone.year}
                </div>
                <div className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {milestone.title}
                </div>
                <p className="text-slate-400 text-sm">{milestone.desc}</p>
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-blue-500 to-transparent animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}