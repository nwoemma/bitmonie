import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus, faIdCard, faWallet,
  faExchangeAlt, faBuildingColumns, faChevronRight, faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faUserPlus,
    title: 'Sign Up',
    description: 'Create your Bitmonie account for free. Takes just 2 minutes.',
    number: '01',
  },
  {
    icon: faIdCard,
    title: 'Complete KYC',
    description: 'Verify your identity to unlock all features and full account access.',
    number: '02',
  },
  {
    icon: faWallet,
    title: 'Fund Your Wallet',
    description: 'Deposit NGN instantly via bank transfer or card.',
    number: '03',
  },
  {
    icon: faExchangeAlt,
    title: 'Trade or Pay',
    description: 'Buy/sell crypto, use P2P trading, or pay bills instantly.',
    number: '04',
  },
  {
    icon: faBuildingColumns,
    title: 'Withdraw Anytime',
    description: 'Send NGN to any bank account or keep crypto in your wallet.',
    number: '05',
  },
];

export default function HowItWorks() {
  const headerRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.2 });

    if (headerRef.current) observer.observe(headerRef.current);
    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-black text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            How it works
          </h2>
          <p className="leading-relaxed">
            Get started in 5 simple steps
          </p>
        </div>

        {/* Desktop — horizontal row with right arrows */}
        <div className="hidden lg:flex items-start justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">

              {/* Step */}
              <div
                ref={el => { stepsRef.current[index] = el; }}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="flex flex-col items-center text-center w-40 opacity-0"
              >
                <div className="group cursor-pointer">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 group-hover:-translate-y-2">
                    <FontAwesomeIcon icon={step.icon} className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#0066CC]/20 mb-2">{step.number}</div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4A5568]">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center w-10 pt-5 shrink-0">
                  <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 text-[#0066CC]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile — vertical stack with down arrows */}
        <div className="flex flex-col items-center lg:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                ref={el => { if (!stepsRef.current[index]) stepsRef.current[index] = el; }}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="flex flex-col items-center text-center opacity-0"
              >
                <div className="group cursor-pointer">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 group-hover:-translate-y-2">
                    <FontAwesomeIcon icon={step.icon} className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#0066CC]/20 mb-2">{step.number}</div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4A5568] max-w-xs mb-4">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-[#0066CC]/40 mb-4" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}