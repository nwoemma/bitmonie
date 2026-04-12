import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faDatabase, faCookie, faEye, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const sections = [
  {
    icon: faShieldAlt,
    title: 'Information We Collect',
    content: 'We collect information you provide directly to us, such as when you create an account, verify your identity, or contact support. This may include your name, email address, phone number and transaction data.'
  },
  {
    icon: faLock,
    title: 'How We Use Your Information',
    content: 'We use your information to provide, maintain, and improve our services, process transactions, verify your identity, prevent fraud, communicate with you, and comply with legal obligations.'
  },
  {
    icon: faDatabase,
    title: 'Data Storage & Security',
    content: 'Your data is encrypted using a powerful grade encryption. We store your information on secure servers with strict access controls and regular security audits.'
  },
  {
    icon: faCookie,
    title: 'Cookies & Tracking',
    content: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage, and personalize content. You can control cookie preferences through your browser settings.'
  },
  {
    icon: faEye,
    title: 'Third-Party Sharing',
    content: 'We never sell your personal data. We only share information with trusted partners who help us provide our services (payment processors, compliance tools) and only when legally required.'
  },
  {
    icon: faBell,
    title: 'Your Rights',
    content: 'You have the right to access, correct, delete your data, and object to processing. Contact our Officers to exercise these rights.'
  }
];

export default function PrivacyPolicy() {
  const headerRef = useRef(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Privacy Policy
          </h1>
          <p className="text-text-color/70 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => { sectionsRef.current[index] = el; }}
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

        {/* Contact for Questions */}
        <div className="text-center mt-12 pt-8 border-t border-primary/20">
          <p className="text-text-color/70 mb-4">Have questions about our Privacy Policy?</p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-primary text-text-color font-semibold rounded-xl hover:bg-tertiary hover:text-primary transition-all">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}