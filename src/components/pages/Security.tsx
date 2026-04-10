import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faFingerprint, faServer, faKey, faBug, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const securityFeatures = [
  { icon: faShieldAlt, title: 'Smart Contract Audits', description: 'Automated and manual audits of all listed tokens with detailed risk reports.', status: 'Active' },
  { icon: faLock, title: 'End-to-End Encryption', description: 'All data transmitted is encrypted using AES-256 military-grade encryption.', status: 'Active' },
  { icon: faFingerprint, title: 'Multi-Factor Authentication', description: 'Optional 2FA support for API keys and sensitive operations.', status: 'Available' },
  { icon: faServer, title: 'Decentralized Infrastructure', description: 'No single point of failure with distributed node architecture.', status: 'Active' },
  { icon: faKey, title: 'Non-Custodial', description: 'We never hold your private keys or assets. You remain in full control.', status: 'Active' },
  { icon: faBug, title: 'Bug Bounty Program', description: '$1,000,000 bounty pool for responsible vulnerability disclosures.', status: 'Live' },
];

export default function Security({ preview = false }: { preview?: boolean }) {
  const headerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const displayed = preview ? securityFeatures.slice(0, 3) : securityFeatures;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach(card => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-text-color/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-text-color font-semibold">Your safety first</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Bank-grade security
          </h2>
          <p className="text-test-color leading-relaxed">
            Your safety is our top priority. We implement rigorous security measures to protect your data and assets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((feature, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el; }}
              className="opacity-0 bg-secondary/10 border border-primary/50 rounded-2xl p-6 hover:border-primary hover:bg-secondary/20 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="w-5 h-5 text-primary group-hover:text-tertiary transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-color mb-2">{feature.title}</h3>
              <p className="text-sm text-secondary/70 leading-relaxed mb-3">{feature.description}</p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-color">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {feature.status}
              </div>
            </div>
          ))}
        </div>

        {/* Preview CTA */}
        {preview && (
          <div className="text-center mt-10">
            <Link to="/security">
              <button className="px-6 py-3 bg-primary text-tertiary font-semibold rounded-xl hover:bg-secondary hover:text-tertiary transition-all inline-flex items-center gap-2">
                View all security features <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}