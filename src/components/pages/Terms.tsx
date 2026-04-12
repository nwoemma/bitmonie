import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faGavel, faHandshake, faUserCheck, faBan, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const termsSections = [
  {
    icon: faFileContract,
    title: 'Acceptance of Terms',
    content: 'By accessing or using Bitmonie, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.'
  },
  // {
  //   icon: faUserCheck,
  //   title: 'Eligibility',
  //   content: 'You must be at least 18 years old to use Bitmonie. By using our services, you represent and warrant that you meet this eligibility requirement.'
  // },
  {
    icon: faHandshake,
    title: 'Account Responsibilities',
    content: 'You are responsible for maintaining the security of your account and for all activities that occur under your account. Notify us immediately of any unauthorized use.'
  },
  {
    icon: faBan,
    title: 'Prohibited Activities',
    content: 'You may not use Bitmonie for illegal activities, money laundering, fraud, or any transaction prohibited by applicable laws and regulations.'
  },
  {
    icon: faGavel,
    title: 'Fees & Payments',
    content: 'Some services may incur fees. We will always disclose fees before you complete a transaction. All fees are non-refundable unless otherwise stated.'
  },
  {
    icon: faClipboardList,
    title: 'Termination',
    content: 'We may terminate or suspend your account immediately, without prior notice, for conduct that violates these terms or is harmful to other users.'
  }
];

export default function TermsOfService() {
  const headerRef = useRef(null);
  const termsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    termsRef.current.forEach(term => {
      if (term) observer.observe(term);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Terms of Service
          </h1>
          <p className="text-text-color/70 leading-relaxed">
            Please read these terms carefully before using Bitmonie's services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {termsSections.map((section, index) => (
            <div
              key={index}
              ref={el => { termsRef.current[index] = el; }}
              className="opacity-0 bg-secondary/50 border border-primary/20 rounded-2xl p-6 hover:border-tertiary hover:bg-primary/10 transition-all group"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-tertiary transition-all flex-shrink-0">
                  <FontAwesomeIcon icon={section.icon} className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-color mb-2">{section.title}</h3>
                  <p className="text-sm text-text-color/70 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
          <p className="text-sm text-text-color/70 text-center">
            By using Bitmonie, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center mt-8">
          <p className="text-text-color/70 mb-4">Have questions about our Terms?</p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-primary text-text-color font-semibold rounded-xl hover:bg-tertiary hover:text-primary transition-all">
              Contact Legal Team
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}