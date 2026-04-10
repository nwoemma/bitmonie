import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faRocket, faHeart } from '@fortawesome/free-solid-svg-icons';

const values = [
  { icon: faUsers, title: 'Community Driven', description: 'Built for the trading community' },
  { icon: faGlobe, title: 'Global Access', description: 'Borderless banking that works everywhere you are' },
  { icon: faRocket, title: 'Innovation Focus', description: 'Constantly pushing the boundaries of DeFi analytics' },
  { icon: faHeart, title: 'User Centric', description: 'Your success is our mission' },
];

const milestones = [
  { title: 'Founded', description: 'Bitmonie is founded in Nigeria with a mission to simplify money management for Nigerians' },
  { title: 'Beta Launch', description: 'Beta version will soon be tested by early users across Abuja and Port Harcourt' },
  { title: 'Public Launch', description: 'Full public launch rolling out soon nationwide for all Nigerians' },
  { title: 'The Future', description: 'Plans to support all 36 states with NGN and USD wallet support' },
];

export default function About() {
  const headerRef = useRef(null);
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
    valuesRef.current.forEach(value => {
      if (value) observer.observe(value);
    });
    milestonesRef.current.forEach(milestone => {
      if (milestone) observer.observe(milestone);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            About Bitmonie
          </h2>
          <p className="text-text-color/70 leading-relaxed">
            We're on a mission to democratize access to financial tools for everyone, everywhere.
          </p>
        </div>
        {/* Brief Summary of the App */}
        <div className="mb-16 opacity-0 animate-fade-up">
          <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-text-color/80 leading-relaxed text-lg">
              Bitmonie is a new revolutionary financial platform that combines the best of traditional banking with the innovation of decentralized finance.
              Our multi-currency wallet, virtual cards, and spending analytics give you complete control over your finances.
            </p>
          </div>
        </div>
        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              ref={el => { valuesRef.current[index] = el; }}
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