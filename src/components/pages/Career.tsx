import { Briefcase, MapPin, Clock, Globe, DollarSign, Users, Rocket, Sparkles, Mail, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const benefitsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const positionItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const openPositions = [
    { title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote (Global)', type: 'Full-time', salary: '$120k - $180k', description: 'Build beautiful, performant trading interfaces with React and Web3 technologies.', requirements: ['5+ years React experience', 'Web3/Ethers.js knowledge', 'Passion for UI/UX'] },
    { title: 'Blockchain Security Analyst', department: 'Security', location: 'Remote (US/EU)', type: 'Full-time', salary: '$140k - $200k', description: 'Audit smart contracts and develop security tools for threat detection.', requirements: ['Solidity expertise', 'Security auditing experience', 'Understanding of DeFi protocols'] },
    { title: 'Product Manager - DeFi', department: 'Product', location: 'New York / Remote', type: 'Full-time', salary: '$130k - $190k', description: 'Lead product strategy for our analytics dashboard and trading tools.', requirements: ['3+ years PM experience', 'DeFi/Crypto background', 'Data-driven mindset'] },
    { title: 'DevOps Engineer', department: 'Infrastructure', location: 'Remote (Global)', type: 'Full-time', salary: '$110k - $170k', description: 'Scale our infrastructure to handle millions of requests per second.', requirements: ['AWS/GCP expertise', 'Kubernetes experience', 'Blockchain node management'] },
    { title: 'Community Manager', department: 'Marketing', location: 'Remote', type: 'Full-time', salary: '$70k - $100k', description: 'Grow and engage our global community of traders and developers.', requirements: ['Social media expertise', 'Crypto community experience', 'Excellent communication'] },
    { title: 'Data Scientist', department: 'Data', location: 'Remote (EU/UK)', type: 'Full-time', salary: '$130k - $180k', description: 'Build predictive models for market movements and anomaly detection.', requirements: ['Python/Pandas', 'Machine Learning experience', 'Financial data background'] }
  ];

  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', desc: 'Top-tier compensation + equity packages' },
    { icon: Globe, title: 'Work From Anywhere', desc: 'Fully remote with co-working stipends' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Async-first culture, focus on output' },
    { icon: Users, title: 'Health & Wellness', desc: 'Comprehensive health, dental, vision' },
    { icon: Rocket, title: 'Growth Budget', desc: '$5k annual learning & development' },
    { icon: Sparkles, title: 'Crypto Perks', desc: 'Monthly crypto stipend + trading bonuses' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }

      benefitsItemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, y: 30, scale: 0.9 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.6, delay: index * 0.1, ease: "back.out(0.6)",
          scrollTrigger: { trigger: benefitsRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        });
        item.addEventListener('mouseenter', () => { gsap.to(item, { y: -8, scale: 1.02, duration: 0.3 }); });
        item.addEventListener('mouseleave', () => { gsap.to(item, { y: 0, scale: 1, duration: 0.3 }); });
      });

      positionItemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 0.5, delay: index * 0.08, ease: "power2.out",
          scrollTrigger: { trigger: positionsRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });

      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, { opacity: 0, scale: 0.95 }, {
          opacity: 1, scale: 1, duration: 0.8, ease: "back.out(0.5)",
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6 animate-pulse">
            <Sparkles className="w-3 h-3" /> WE'RE HIRING
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent shimmer-text">Join Our Mission</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Help us build the future of transparent, accessible crypto trading</p>
        </div>

        <div ref={benefitsRef} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Join Bitmonie?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} ref={el => { benefitsItemsRef.current[index] = el; }} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 group cursor-pointer">
                <benefit.icon className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={positionsRef}>
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((role, index) => (
              <div key={index} ref={el => { positionItemsRef.current[index] = el; }} className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 cursor-pointer hover:bg-white/5 transition-colors" onClick={() => setSelectedRole(selectedRole === role.title ? null : role.title)}>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {role.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {role.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {role.type}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {role.salary}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition-all hover:scale-105">Apply Now →</button>
                  </div>
                </div>
                {selectedRole === role.title && (
                  <div className="border-t border-white/10 p-6 bg-slate-900/50 animate-in fade-in slide-down">
                    <p className="text-slate-300 mb-4">{role.description}</p>
                    <h4 className="font-bold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-green-500" />{req}</li>
                      ))}
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold w-full md:w-auto hover:scale-105 transition-transform">Submit Application</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="mt-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8 text-center">
          <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Don't see your dream role?</h3>
          <p className="text-slate-400 mb-6">Send us your resume anyway — we're always looking for talented people</p>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all hover:scale-105">careers@bitmonie.com</button>
        </div>
      </div>
    </div>
  );
}