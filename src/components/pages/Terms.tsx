import { FileText, Scale, AlertTriangle, Shield, AlertCircle, Gavel, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Terms() {
  const lastUpdated = "January 15, 2026";
  const heroRef = useRef<HTMLDivElement>(null);
  const warningRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prohibitedRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [
    { icon: Scale, title: "Acceptance of Terms", content: "By accessing or using Bitmonie's platform, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services. These terms constitute a legally binding agreement between you and Bitmonie." },
    { icon: AlertTriangle, title: "Risk Disclosure", content: "Cryptocurrency trading involves substantial risk of loss. Bitmonie provides analytical tools and information but does not offer financial advice. You are solely responsible for your trading decisions. Past performance does not guarantee future results." },
    { icon: Shield, title: "Eligibility & Account Registration", content: "You must be at least 18 years old and have the legal capacity to enter into agreements. By using our services, you represent that you are not located in a sanctioned jurisdiction or on any prohibited persons list." },
    { icon: Gavel, title: "Prohibited Activities", content: "You may not: use our platform for illegal activities, manipulate markets, reverse engineer our software, bypass security measures, or interfere with other users' experience." }
  ];

  const prohibitedList = ["Money laundering or terrorist financing", "Market manipulation or wash trading", "Distributing malware or malicious code", "Violating intellectual property rights", "Harassing or threatening other users", "Using automated bots without permission", "Attempting to bypass rate limits", "Sharing account access with unauthorized parties"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) { gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }); }
      if (warningRef.current) { gsap.fromTo(warningRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: "back.out(0.5)" }); }
      sectionsRef.current.forEach((section, index) => { if (section) { gsap.fromTo(section, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 85%" } }); } });
      if (prohibitedRef.current) { gsap.fromTo(prohibitedRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: prohibitedRef.current, start: "top 85%" } }); }
      if (contactRef.current) { gsap.fromTo(contactRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(0.5)", scrollTrigger: { trigger: contactRef.current, start: "top 85%" } }); }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div ref={heroRef} className="text-center mb-12"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 animate-pulse"><FileText className="w-3 h-3" /> LEGAL</div><h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent shimmer-text">Terms of Service</h1><p className="text-slate-400 text-lg">Last Updated: {lastUpdated}</p></div>

        <div ref={warningRef} className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-8"><div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" /><div><p className="text-slate-300 leading-relaxed"><span className="font-bold text-amber-400">IMPORTANT:</span> These terms contain important disclaimers, risk warnings, and limitations of liability. By using Bitmonie, you acknowledge that you have read, understood, and agree to be bound by these terms.</p></div></div></div>

        {sections.map((section, index) => (<div key={index} ref={el => { sectionsRef.current[index] = el; }} className="mb-8 bg-slate-900/20 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all group"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"><section.icon className="w-5 h-5 text-white" /></div><h2 className="text-2xl font-bold text-white">{section.title}</h2></div><p className="text-slate-300 leading-relaxed pl-4 border-l-2 border-blue-500/30">{section.content}</p></div>))}

        <div ref={prohibitedRef} className="mb-8 bg-red-500/5 border border-red-500/20 rounded-2xl p-6"><h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-400" /> Prohibited Activities</h2><div className="grid md:grid-cols-2 gap-3">{prohibitedList.map((item, i) => (<div key={i} className="flex items-center gap-2 text-slate-300 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-red-400" />{item}</div>))}</div></div>

        <div ref={contactRef} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center"><h3 className="text-xl font-bold text-white mb-2">Questions About These Terms?</h3><p className="text-slate-400 mb-4">Contact our legal team</p><button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all hover:scale-105">legal@bitmonie.com</button></div>
      </div>
    </div>
  );
}