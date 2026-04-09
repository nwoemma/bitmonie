import { Download, Image, FileText, Link2, Sparkles, Shield, Zap, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PressKit() {
  const heroRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const assetsRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<HTMLDivElement>(null);
  const guidelinesRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const assetsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mediaItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const assets = [
    { icon: Image, title: 'Logo Package', desc: 'Primary, secondary, and monochrome logos in SVG/PNG', size: '4.2 MB', formats: 'SVG, PNG, EPS' },
    { icon: Image, title: 'Screenshots', desc: 'Dashboard previews and product screenshots', size: '12.5 MB', formats: 'PNG, JPG' },
    { icon: FileText, title: 'Brand Guidelines', desc: 'Our brand colors, typography, and usage rules', size: '2.1 MB', formats: 'PDF' },
    { icon: FileText, title: 'Fact Sheet', desc: 'Company statistics and key information', size: '0.8 MB', formats: 'PDF, DOCX' },
    { icon: Image, title: 'Team Photos', desc: 'Professional headshots of leadership team', size: '8.3 MB', formats: 'JPG, PNG' },
    { icon: FileText, title: 'Press Release', desc: 'Official announcements and product launches', size: '1.5 MB', formats: 'PDF, DOCX' }
  ];

  const mediaMentions = [
    { outlet: 'CoinDesk', title: 'Bitmonie Launches Next-Gen Honeypot Scanner', date: 'Jan 15, 2024', link: '#' },
    { outlet: 'The Block', title: 'Institutional Interest Drives Bitmonie Growth', date: 'Feb 3, 2024', link: '#' },
    { outlet: 'Decrypt', title: 'How Bitmonie Is Fighting Rug Pulls', date: 'Mar 10, 2024', link: '#' },
    { outlet: 'Cointelegraph', title: 'Bitmonie V2: A New Standard for Transparency', date: 'Apr 5, 2024', link: '#' }
  ];

  const brandColors = [
    { name: 'Primary Blue', code: '#3B82F6', bg: 'bg-blue-500' },
    { name: 'Dark Navy', code: '#020617', bg: 'bg-[#020617]' },
    { name: 'Indigo', code: '#6366F1', bg: 'bg-indigo-500' },
    { name: 'Purple', code: '#A855F7', bg: 'bg-purple-500' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      }
      if (downloadRef.current) {
        gsap.fromTo(downloadRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: "back.out(0.5)" });
      }
      assetsItemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, delay: index * 0.08, ease: "power2.out", scrollTrigger: { trigger: assetsRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
        item.addEventListener('mouseenter', () => { gsap.to(item, { y: -8, scale: 1.02, duration: 0.3 }); });
        item.addEventListener('mouseleave', () => { gsap.to(item, { y: 0, scale: 1, duration: 0.3 }); });
      });
      if (colorsRef.current) {
        gsap.fromTo(colorsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: colorsRef.current, start: "top 85%" } });
      }
      if (guidelinesRef.current) {
        gsap.fromTo(guidelinesRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: guidelinesRef.current, start: "top 85%" } });
      }
      mediaItemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, delay: index * 0.08, ease: "power2.out", scrollTrigger: { trigger: mediaRef.current, start: "top 85%" } });
      });
      if (contactRef.current) {
        gsap.fromTo(contactRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(0.5)", scrollTrigger: { trigger: contactRef.current, start: "top 85%" } });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6 animate-pulse"><Sparkles className="w-3 h-3" /> MEDIA RESOURCES</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent shimmer-text">Press Kit</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Everything you need to write about Bitmonie — logos, screenshots, and brand guidelines</p>
        </div>

        <div ref={downloadRef} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8 mb-16 text-center">
          <div className="flex flex-wrap justify-center gap-4"><button className="px-8 py-4 bg-white text-[#020617] rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 hover:scale-105"><Download className="w-5 h-5" /> Download All Assets (ZIP)</button><button className="px-8 py-4 bg-slate-900 border border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2 hover:scale-105"><Link2 className="w-5 h-5" /> Request Media Access</button></div>
        </div>

        <div ref={assetsRef} className="mb-16"><h2 className="text-3xl font-bold text-white mb-8">Downloadable Assets</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{assets.map((asset, index) => (<div key={index} ref={el => { assetsItemsRef.current[index] = el; }} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 group cursor-pointer"><asset.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" /><h3 className="text-lg font-bold text-white mb-2">{asset.title}</h3><p className="text-slate-400 text-sm mb-4">{asset.desc}</p><div className="flex justify-between items-center text-xs"><span className="text-slate-500">{asset.size} • {asset.formats}</span><button className="text-purple-400 hover:text-purple-300 flex items-center gap-1 hover:translate-x-1 transition-transform">Download <Download className="w-3 h-3" /></button></div></div>))}</div></div>

        <div ref={colorsRef} className="mb-16"><h2 className="text-3xl font-bold text-white mb-8">Brand Colors</h2><div className="grid md:grid-cols-4 gap-4">{brandColors.map((color, index) => (<div key={index} className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden group hover:scale-105 transition-all"><div className={`h-24 ${color.bg}`} /><div className="p-4"><div className="font-bold text-white">{color.name}</div><div className="text-sm text-slate-400 font-mono">{color.code}</div></div></div>))}</div></div>

        <div ref={guidelinesRef} className="mb-16 bg-slate-900/30 border border-white/5 rounded-3xl p-8"><h2 className="text-2xl font-bold text-white mb-6">Logo Usage Guidelines</h2><div className="grid md:grid-cols-2 gap-8"><div><h3 className="font-bold text-green-400 mb-3">✓ DO</h3><ul className="space-y-2 text-slate-400 text-sm"><li>• Use the logo on dark or light backgrounds with proper contrast</li><li>• Maintain clear space around the logo (minimum 100% of logo height)</li><li>• Use provided SVG files for digital applications</li><li>• Keep the logo proportional — never stretch or distort</li></ul></div><div><h3 className="font-bold text-red-400 mb-3">✗ DON'T</h3><ul className="space-y-2 text-slate-400 text-sm"><li>• Change the logo colors or add effects</li><li>• Rotate or tilt the logo</li><li>• Add your own text to the logo</li><li>• Use outdated versions of the logo</li></ul></div></div></div>

        <div ref={mediaRef} className="mb-16"><h2 className="text-3xl font-bold text-white mb-8">In the News</h2><div className="space-y-4">{mediaMentions.map((mention, index) => (<div key={index} ref={el => { mediaItemsRef.current[index] = el; }} className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 flex flex-wrap justify-between items-center gap-4 group hover:border-purple-500/50 transition-all"><div><div className="text-sm text-purple-400 font-bold">{mention.outlet}</div><div className="text-white font-semibold">{mention.title}</div><div className="text-sm text-slate-500">{mention.date}</div></div><a href={mention.link} className="text-purple-400 hover:text-purple-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read Article <ChevronRight className="w-4 h-4" /></a></div>))}</div></div>

        <div ref={contactRef} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-8 text-center"><h3 className="text-2xl font-bold text-white mb-2">Press Inquiries</h3><p className="text-slate-400 mb-6">For media interviews, speaking opportunities, or additional information</p><button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all hover:scale-105">press@bitmonie.com</button></div>
      </div>
    </div>
  );
}