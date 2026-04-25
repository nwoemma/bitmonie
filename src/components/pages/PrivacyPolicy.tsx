import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt, faLock, faDatabase, faShareNodes,
  faEye, faBell, faTrashCan, faChildReaching, faRotate, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: faShieldAlt,
    title: '1. Overview',
    content: 'We respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our App and Services.',
  },
  {
    icon: faEye,
    title: '2. Information We Collect',
    bullets: [
      'Registration Information: Name, phone number, email address, date of birth.',
      'KYC Information: Government-issued ID (NIN, passport, driver\'s licence), BVN (optional but recommended), proof of address.',
      'Transaction Information: Details of trades, P2P orders, bill payments, deposits, withdrawals, and wallet balances.',
      'Device & Usage Data: IP address, device ID, operating system, app version, crash logs.',
    ],
    footer: 'We never collect unnecessary data.',
  },
  {
    icon: faLock,
    title: '3. How We Use Your Information',
    bullets: [
      'To create and manage your account.',
      'To process trades, P2P escrow, and bill payments.',
      'To comply with AML/CTF laws and prevent fraud.',
      'To improve our App and customer support.',
      'To send you important service notifications (not marketing unless you opt in).',
    ],
  },
  {
    icon: faShareNodes,
    title: '4. Sharing Your Information',
    content: 'We do not sell your personal data. We may share it with:',
    bullets: [
      'Regulatory authorities when required by law.',
      'Third-party service providers (e.g., payment gateways, identity verification services, bill payment aggregators) solely to provide our Services.',
      'Other users in P2P trades – only your username, trade amount, and payment instructions (no full name or contact details unless you choose to share them).',
    ],
  },
  {
    icon: faDatabase,
    title: '5. Data Security',
    content: 'We use encryption, secure servers, and access controls to protect your data. However, no internet transmission is 100% secure. You are responsible for keeping your PIN and device safe.',
  },
  {
    icon: faRotate,
    title: '6. Data Retention',
    content: 'We keep your personal data for as long as your account is active, and for up to 7 years after closure to comply with financial regulations.',
  },
  {
    icon: faBell,
    title: '7. Your Rights',
    content: 'You may request access, correction, or deletion of your personal data by contacting support. KYC data may be retained even after deletion to meet legal obligations.',
  },
  {
    icon: faChildReaching,
    title: '8. Children\'s Privacy',
    content: 'Bitmonie is not intended for anyone under 18. We do not knowingly collect data from minors.',
  },
  {
    icon: faTrashCan,
    title: '9. Changes to This Policy',
    content: 'We will notify you of material changes via email or in-app notification.',
  },
  {
    icon: faEnvelope,
    title: '10. Contact Us',
    content: 'For privacy-related questions, reach Bitmonie Support at privacy@bitmonie.com or via in-app chat, available 24/7.',
  },
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

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Privacy Policy
          </h1>
          <p className="text-text-color/70 leading-relaxed max-w-xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-text-color/40 text-sm mt-3">Last Updated: April 25, 2026</p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => { sectionsRef.current[index] = el; }}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="opacity-0 bg-secondary/50 border border-primary/20 rounded-2xl p-6 hover:border-tertiary hover:bg-primary/10 transition-all group"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-tertiary transition-all flex-shrink-0">
                  <FontAwesomeIcon icon={section.icon} className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text-color mb-2">{section.title}</h3>
                  {section.content && (
                    <p className="text-sm text-text-color/70 leading-relaxed mb-2">{section.content}</p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-1.5 mb-2">
                      {section.bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-color/70 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="text-sm text-primary/80 font-medium">{section.footer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
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