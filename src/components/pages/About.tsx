import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt, faGlobe, faBolt, faHandshake, faCoins, faEye, faRocket,
} from '@fortawesome/free-solid-svg-icons';

const values = [
  { icon: faShieldAlt, title: 'Security First',     description: 'Escrow protection, KYC verification, and encrypted wallets on every account.' },
  { icon: faGlobe,     title: 'Built for Africa',   description: 'Local payment methods, NGN wallet, and 24/7 support designed for African users.' },
  { icon: faBolt,      title: 'Instant Everything', description: 'Trades, bill payments, and transfers that complete in seconds — not hours.' },
  { icon: faHandshake, title: 'Fair & Transparent', description: 'No hidden fees. What you see before you confirm is exactly what you pay.' },
  { icon: faCoins,     title: 'Earn & Grow',        description: 'Access crypto-backed loans or earn by lending your assets within our ecosystem.' },
];

export default function About() {
  const headerRef = useRef(null);
  const summaryRef = useRef(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

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
    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    valuesRef.current.forEach(value => { if (value) observer.observe(value); });

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
            A crypto-powered neobank bridging the gap between traditional finance and digital assets —
            built for Africa, designed for everyone.
          </p>
        </div>

        {/* Summary */}
        <div ref={summaryRef} className="mb-16 opacity-0">
          <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-text-color/80 leading-relaxed text-lg">
              Bitmonie is an African fintech platform built to simplify how people access and use money. We offer
              a seamless, all-in-one experience where users can trade crypto, access peer-to-peer (P2P) exchange,
              secure crypto-backed loans, pay bills instantly, and manage both NGN and digital assets in one powerful
              app. Our secure P2P escrow system protects every transaction — crypto is locked until both parties
              confirm, eliminating fraud and building trust. Whether you are new to crypto or an experienced user,
              Bitmonie gives you the tools to send, receive, trade, save, and grow your money without friction.
              We are building the financial infrastructure Africans deserve — simple, secure, and truly borderless.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Vision */}
          <div ref={visionRef} className="opacity-0 bg-secondary/50 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faEye} className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-black text-text-color" style={{ letterSpacing: '-0.3px' }}>Our Vision</h3>
            </div>
            <p className="text-text-color/80 leading-relaxed">
              We envision a world where blockchain solutions transcend borders, making life easier for individuals
              across Africa and beyond — driving financial inclusion and accessibility for everyone, empowering users
              to seamlessly trade, store, and convert digital assets to cash.
            </p>
          </div>

          {/* Mission */}
          <div ref={missionRef} className="opacity-0 bg-secondary/50 border border-primary/20 rounded-2xl p-8" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faRocket} className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-black text-text-color" style={{ letterSpacing: '-0.3px' }}>Our Mission</h3>
            </div>
            <p className="text-text-color/80 leading-relaxed">
              At Bitmonie, our mission is clear: to revolutionize Africa's digital economy by fostering financial
              inclusion, blockchain solutions, innovation, and trust. We are committed to creating a future where
              the freedom of money is a reality for all — making crypto accessible to everyone.
            </p>
          </div>

        </div>

        {/* Values */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
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

      </div>
    </section>
  );
}