import { Mail, MessageCircle, X, Send, MapPin, Clock, Headphones, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  
  const channelItemsRef = useRef<(HTMLAnchorElement  | null)[]>([]);
  const faqItemsRef = useRef<(HTMLDetailsElement | null)[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const supportChannels = [
    { icon: Mail, title: 'Email Support', value: 'support@bitmonie.com', desc: '24-48 hour response time', link: 'mailto:support@bitmonie.com' },
    { icon: MessageCircle, title: 'Live Chat', value: 'Available 24/7', desc: 'Average 2 min response', link: '#' },
    { icon: X, title: 'X', value: '@Bitmonie', desc: 'Follow for updates', link: 'https://twitter.com/bitmonie' },
    { icon: FaGithub, title: 'GitHub', value: '/bitmonie', desc: 'Open source contributions', link: 'https://github.com/bitmonie' }
  ];

  const faqs = [
    { q: 'How do I report a scam or suspicious token?', a: 'Use our "Report Token" feature in the dashboard or email security@bitmonie.com' },
    { q: 'What chains do you support?', a: 'Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche, and Solana' },
    { q: 'Is there a paid plan?', a: 'Basic features are free. Premium plans start at $29/month for advanced analytics' },
    { q: 'How accurate is the honeypot scanner?', a: '99.7% accuracy rate with real-time updates from our AI models' }
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

      // Support Channels Staggered Animation
      channelItemsRef.current.forEach((item, index) => {
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
              trigger: channelsRef.current,
              start: "top 85%",
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
            ease: "power2.out",
            boxShadow: "0 20px 30px -15px rgba(59, 130, 246, 0.2)"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "none"
          });
        });
      });

      // Form Section Animation
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Info Section Animation
      if (infoRef.current) {
        gsap.fromTo(infoRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // FAQ Items Animation
      faqItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Emergency Section Animation
      if (emergencyRef.current) {
        gsap.fromTo(emergencyRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: emergencyRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Pulsing animation for emergency button
        const emergencyButton = emergencyRef.current.querySelector('.emergency-button');
        if (emergencyButton) {
          gsap.to(emergencyButton, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      }
      
      // Input field animations
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            scale: 1.01,
            borderColor: "#3b82f6",
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
            duration: 0.2,
            ease: "power2.out"
          });
        });
        
        input.addEventListener('blur', () => {
          gsap.to(input, {
            scale: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "none",
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });
      
    }, [heroRef, channelsRef, formRef, infoRef, emergencyRef]);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 animate-pulse">
            <Headphones className="w-3 h-3" />
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent shimmer-text">
            Contact Us
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Have questions? We're here to help 24/7
          </p>
        </div>

        {/* Support Channels */}
        <div ref={channelsRef} className="grid md:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target={channel.link.startsWith('http') ? '_blank' : undefined}
              rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              ref={el => { channelItemsRef.current[index] = el; }}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-center group cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <channel.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{channel.title}</h3>
              <p className="text-sm text-blue-400 mb-2">{channel.value}</p>
              <p className="text-xs text-slate-500">{channel.desc}</p>
            </a>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <div ref={formRef}>
            <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8 group hover:border-blue-500/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info & FAQ */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8 group hover:border-blue-500/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Office & Hours</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group/item">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Global Headquarters</div>
                    <div className="text-slate-400 text-sm">Road Town, Tortola<br />British Virgin Islands</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Support Hours</div>
                    <div className="text-slate-400 text-sm">24/7 Live Chat Support<br />Email: Mon-Fri, 9am-6pm EST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8 group hover:border-blue-500/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    ref={el => { faqItemsRef.current[index] = el; }}
                    className="group/details"
                  >
                    <summary className="cursor-pointer font-semibold text-white py-2 flex justify-between items-center hover:text-blue-400 transition-colors">
                      {faq.q}
                      <span className="text-blue-400 group-open/details:rotate-180 transition-transform duration-300">▼</span>
                    </summary>
                    <p className="text-slate-400 text-sm pt-2 pb-3 pl-4 border-l-2 border-blue-500/30 animate-in fade-in slide-down">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Security Contact */}
        <div ref={emergencyRef}>
          <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/30 rounded-3xl p-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/20">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Emergency Security Issue?</h3>
              <p className="text-slate-400 mb-6">For critical security vulnerabilities or active threats, contact us immediately</p>
              <button className="emergency-button px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-500/25">
                security@bitmonie.com
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}