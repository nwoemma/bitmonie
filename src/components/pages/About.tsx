import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt, faUsers, faBolt, faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const values = [
  { icon: faShieldAlt, title: 'Security First',     description: 'Escrow protection, KYC verification, and encrypted wallets on every account.' },
  { icon: faUsers,     title: 'Built for Nigerians', description: 'Local payment methods, NGN wallet, and 24/7 support designed for the Nigerian market.' },
  { icon: faBolt,      title: 'Instant Everything',  description: 'Trades, bill payments, and transfers that complete in seconds — not hours.' },
  { icon: faHandshake, title: 'Fair & Transparent',  description: 'No hidden fees. What you see before you confirm is exactly what you pay.' },
];

const milestones = [
  { title: 'Founded',       description: 'Bitmonie is founded in Nigeria with a mission to simplify crypto and money management for Nigerians.' },
  { title: 'Beta Launch',   description: 'Beta version tested by early users across Abuja and Port Harcourt — refining P2P, wallet, and bill payments.' },
  { title: 'Public Launch', description: 'Full nationwide launch bringing crypto trading, P2P marketplace, and instant bill payments to all Nigerians.' },
  { title: 'The Future',    description: 'Expanding to support all 36 states with NGN and USD wallets, and broader crypto asset support.' },
];

export default function About() {
  const headerRef = useRef(null);
  const summaryRef = useRef(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (summaryRef.current) observer.observe(summaryRef.current);
    valuesRef.current.forEach(value => { if (value) observer.observe(value); });
    milestonesRef.current.forEach(milestone => { if (milestone) observer.observe(milestone); });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            About Bitmonie
          </h2>
          <p className="text-text-color/70 leading-relaxed">
            We are on a mission to make it simple, safe, and fast for Nigerians to buy, sell, and manage cryptocurrency — all with Naira.
          </p>
        </div>

        {/* Summary */}
        <div ref={summaryRef} className="mb-16 opacity-0">
          <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-text-color/80 leading-relaxed text-lg">
              Bitmonie is a Nigerian fintech platform built to give everyone access to crypto trading, peer-to-peer (P2P) exchange,
              instant bill payments, and a secure NGN/crypto wallet — all in one app. Our P2P escrow system protects every trade:
              crypto is locked until both parties confirm, so no one gets cheated. Whether you are paying electricity bills, buying
              airtime, trading Bitcoin, or withdrawing NGN to your bank account, Bitmonie makes it instant, transparent, and safe.
              We are building the financial infrastructure Nigerians deserve.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              ref={el => { valuesRef.current[index] = el; }}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="text-center opacity-0"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={value.icon} className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-text-color mb-1">{value.title}</h3>
              <p className="text-sm text-text-color/70">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="grid md:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={el => { milestonesRef.current[index] = el; }}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="relative opacity-0"
            >
              <div className="font-bold text-text-color mb-1">{milestone.title}</div>
              <p className="text-sm text-text-color/70">{milestone.description}</p>
              {index < milestones.length - 1 && (
                <div className="hidden md:block absolute top-4 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}