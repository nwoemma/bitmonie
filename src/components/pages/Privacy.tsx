import { Shield, Lock, Eye, Server, Database, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Privacy() {
  const lastUpdated = "January 15, 2026";
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cookieRef = useRef<HTMLDivElement>(null);
  const thirdPartyRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Wallet addresses and public blockchain interactions",
        "Usage data including page views, clicks, and feature usage",
        "Device information (browser type, IP address, operating system)",
        "Optional account information if you create a profile (email, notification preferences)",
        "Transaction data for analytics and market insights"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our token scanning and analytics services",
        "Detect and prevent fraudulent activity and honeypot scams",
        "Personalize your dashboard and trading recommendations",
        "Send important security alerts and product updates",
        "Analyze market trends and improve our AI models"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "End-to-end encryption for all sensitive data",
        "Regular third-party security audits",
        "No storage of private keys or seed phrases",
        "Enterprise-grade firewalls and intrusion detection",
        "24/7 security monitoring by our dedicated team"
      ]
    },
    {
      icon: Eye,
      title: "Data Sharing & Disclosure",
      content: [
        "We never sell your personal data to third parties",
        "Aggregated, anonymized data may be shared for research",
        "Compliance with legal requirements and law enforcement",
        "Service providers who assist our operations (hosting, analytics)",
        "Blockchain data is inherently public by design"
      ]
    },
    {
      icon: Server,
      title: "Your Rights & Choices",
      content: [
        "Access and download your personal data",
        "Request deletion of your account and associated data",
        "Opt-out of marketing communications",
        "Disable non-essential cookies in your browser",
        "Review and correct any inaccurate information"
      ]
    }
  ];

  const cookies = [
    { name: "Essential", desc: "Required for core functionality like wallet connection", duration: "Session" },
    { name: "Analytics", desc: "Help us understand how users interact with our platform", duration: "1 year" },
    { name: "Preferences", desc: "Remember your settings and dashboard layout", duration: "6 months" },
    { name: "Security", desc: "CSRF tokens and rate limiting protection", duration: "Session" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (introRef.current) {
        gsap.fromTo(introRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: "back.out(0.5)" });
      }
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        gsap.fromTo(section, { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });
      if (cookieRef.current) {
        gsap.fromTo(cookieRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: cookieRef.current, start: "top 85%" } });
      }
      if (thirdPartyRef.current) {
        gsap.fromTo(thirdPartyRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: thirdPartyRef.current, start: "top 85%" } });
      }
      if (contactRef.current) {
        gsap.fromTo(contactRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(0.5)", scrollTrigger: { trigger: contactRef.current, start: "top 85%" } });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div ref={heroRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 animate-pulse">
            <FileText className="w-3 h-3" /> LEGAL
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent shimmer-text">Privacy Policy</h1>
          <p className="text-slate-400 text-lg">Last Updated: {lastUpdated}</p>
        </div>

        <div ref={introRef} className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 mb-8">
          <p className="text-slate-300 leading-relaxed">At Bitmonie, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully. By using Bitmonie, you consent to the practices described herein.</p>
        </div>

        {sections.map((section, index) => (
          <div key={index} ref={el => { sectionsRef.current[index] = el; }} className="mb-8 bg-slate-900/20 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"><section.icon className="w-5 h-5 text-white" /></div>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>
            <ul className="space-y-2 pl-4">{section.content.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-300"><CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" /><span>{item}</span></li>))}</ul>
          </div>
        ))}

        <div ref={cookieRef} className="mb-8 bg-slate-900/20 border border-white/5 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">🍪 Cookie Policy</h2>
          <p className="text-slate-300 mb-4">We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser.</p>
          <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-slate-800/50"><tr className="text-left text-slate-400"><th className="p-3">Cookie Type</th><th className="p-3">Purpose</th><th className="p-3">Duration</th></tr></thead>
          <tbody>{cookies.map((cookie, i) => (<tr key={i} className="border-b border-white/5"><td className="p-3 font-medium text-white">{cookie.name}</td><td className="p-3 text-slate-400">{cookie.desc}</td><td className="p-3 text-slate-400">{cookie.duration}</td></tr>))}</tbody></table></div>
        </div>

        <div ref={thirdPartyRef} className="mb-8 bg-slate-900/20 border border-white/5 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
          <p className="text-slate-300 mb-4">We integrate with the following third-party services that may process your data:</p>
          <div className="flex flex-wrap gap-3">{['Infura', 'Alchemy', 'The Graph', 'QuickNode', 'Moralis', 'Helius'].map(service => (<span key={service} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-all">{service}</span>))}</div>
        </div>

        <div className="mb-8 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 animate-pulse"><div className="flex items-start gap-3"><AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" /><div><h3 className="font-bold text-amber-400 mb-1">Data Retention</h3><p className="text-slate-300 text-sm">We retain blockchain transaction data indefinitely as it exists on public ledgers. Personal account data is retained for as long as your account is active, plus 30 days after deletion request.</p></div></div></div>

        <div ref={contactRef} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Privacy Questions?</h3>
          <p className="text-slate-400 mb-4">Contact our Data Protection Officer</p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all hover:scale-105">privacy@bitmonie.com</button>
        </div>
      </div>
    </div>
  );
}