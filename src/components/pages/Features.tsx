import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPaperPlane, faShieldAlt, faCreditCard, faChartLine, faGlobe } from '@fortawesome/free-solid-svg-icons';

const features = [
  { icon: faWallet, title: 'Secure Wallet', description: 'Store and manage your cryptocurrency safely in one place.' },
  { icon: faPaperPlane, title: 'Fast Transactions', description: 'Send and receive crypto quickly with a smooth and reliable experience.' },
  { icon: faShieldAlt, title: 'Secure Trading', description: 'Trade with confidence using our protected peer-to-peer (P2P) system.' },
  { icon: faCreditCard, title: 'Easy Withdrawals', description: 'Withdraw your funds directly to your bank account anytime.' },
  { icon: faGlobe, title: 'P2P Trading', description: 'Buy and sell crypto directly with other users using local currency.' },
];

export default function Features() {
  const headerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-tertiary font-semibold">What we offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4" style={{ letterSpacing: '-0.5px' }}>
            Everything you need in one app
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            Built for individuals and businesses who need fast, secure, and borderless financial tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el; }}
              className="card opacity-0 group hover:border-primary"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="w-5 h-5 text-tertiary group-hover:text-[#0A1F44] transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0A1F44] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}