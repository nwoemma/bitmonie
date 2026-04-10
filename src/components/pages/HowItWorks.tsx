import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCreditCard, faRocket } from '@fortawesome/free-solid-svg-icons';

const steps = [
  { icon: faUserPlus, title: 'Create Account', description: 'Sign up in seconds with email or social login', number: '01' },
  { icon: faCreditCard, title: 'Add Funds', description: 'Deposit via bank transfer, card, or crypto', number: '02' },
  { icon: faRocket, title: 'Start Trading', description: 'Buy, sell, and trade with zero fees', number: '03' },
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
        
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-black text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            How it works
          </h2>
          <p className="leading-relaxed">
            Get started in 3 easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative bg-secondary">
          <div className="hidden md:block absolute top-20  h-0.5 bg-gradient-to-r from-[#0066CC] to-[#00C2FF]" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => { stepsRef.current[index] = el; }}
              className="text-center relative opacity-0"
            >
              <div className="group cursor-pointer">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center transition-all duration-500 group-hover:-translate-y-10 justify-center mx-auto mb-4 shadow-lg relative z-10">
                  <FontAwesomeIcon icon={step.icon} className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#0066CC]/20 mb-2">{step.number}</div>
              <h3 className="text-lg font-bold text-[#0A1F44] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4A5568]">{step.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}