import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileContract, faUserCheck, faIdCard, faArrowRightArrowLeft,
  faFileInvoiceDollar, faWallet, faCoins, faBan,
  faCircleXmark, faScaleBalanced, faRotate, faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const termsSections = [
  {
    icon: faFileContract,
    title: '1. Acceptance of Terms',
    content: 'By downloading, accessing, or using the Bitmonie mobile application ("App") and related services ("Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree, do not use the App.',
  },
  {
    icon: faUserCheck,
    title: '2. Eligibility',
    content: 'You must be at least 18 years old and a legal resident of Nigeria (or another jurisdiction where we operate) to use Bitmonie. By using the App, you confirm that all information you provide during registration and KYC is accurate and complete.',
  },
  {
    icon: faIdCard,
    title: '3. Account Registration & KYC',
    bullets: [
      'You must create an account using a valid phone number and email address.',
      'Bitmonie requires identity verification ("KYC") to comply with anti-money laundering (AML) and counter-terrorism financing (CTF) regulations. We may request government-issued ID, proof of address, and other documents.',
      'You are solely responsible for maintaining the confidentiality of your login credentials and PIN.',
      'You must notify us immediately of any unauthorised access.',
    ],
  },
  {
    icon: faArrowRightArrowLeft,
    title: '4. Crypto Trading & P2P',
    bullets: [
      'Buy/Sell Crypto: Prices are determined by market rates displayed in the App. All trades are final unless a technical error occurs.',
      'P2P Marketplace: Bitmonie acts only as an intermediary; we do not guarantee the completion of any P2P transaction. Escrow protection locks the seller\'s crypto until the buyer confirms payment. Disputes will be reviewed by our support team.',
      'Risks: Cryptocurrency values are volatile. You assume full risk of any losses from trading or holding crypto.',
    ],
  },
  {
    icon: faFileInvoiceDollar,
    title: '5. Bill Payments',
    content: 'Bitmonie processes payments for utility bills, data, airtime, and other services through third-party providers. We are not responsible for delays or errors caused by those providers, but we will assist in resolving any issues.',
  },
  {
    icon: faWallet,
    title: '6. Wallet & Funds',
    bullets: [
      'Your Bitmonie wallet holds both NGN and crypto balances.',
      'You may deposit funds via bank transfer, card, or crypto transfer.',
      'Withdrawals to Nigerian bank accounts are typically processed within 24 hours. Crypto withdrawals are processed after network confirmations.',
      'We may impose minimum/maximum limits on deposits and withdrawals.',
    ],
  },
  {
    icon: faCoins,
    title: '7. Fees',
    content: 'Bitmonie charges transparent fees for trades, P2P, and bill payments. Fees are clearly displayed before you confirm any transaction. We may change fees with 15 days\' notice.',
  },
  {
    icon: faBan,
    title: '8. Prohibited Activities',
    content: 'You may not use Bitmonie for:',
    bullets: [
      'Money laundering, fraud, or any illegal activity.',
      'Manipulating prices or engaging in market abuse.',
      'Violating any applicable laws or third-party rights.',
    ],
  },
  {
    icon: faCircleXmark,
    title: '9. Termination',
    content: 'We may suspend or terminate your account if you violate these Terms or applicable laws. You may close your account at any time by contacting support.',
  },
  {
    icon: faScaleBalanced,
    title: '10. Limitation of Liability',
    content: 'To the fullest extent permitted by law, Bitmonie and its owners, employees, and partners are not liable for any indirect, incidental, or consequential damages arising from your use of the App, including loss of profits or cryptocurrency value.',
  },
  {
    icon: faScaleBalanced,
    title: '11. Governing Law',
    content: 'These Terms are governed by the laws of the Federal Republic of Nigeria.',
  },
  {
    icon: faRotate,
    title: '12. Changes to Terms',
    content: 'We may update these Terms from time to time. Continued use of the App after changes means you accept the new Terms.',
  },
  {
    icon: faEnvelope,
    title: '13. Contact Us',
    content: 'For questions or support: support@bitmonie.com or via in-app chat.',
  },
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

        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Terms of Use
          </h1>
          <p className="text-text-color/70 leading-relaxed">
            Please read these terms carefully before using Bitmonie's services.
          </p>
          <p className="text-text-color/40 text-sm mt-3">Last Updated: April 25, 2026</p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-2">
          {termsSections.map((section, index) => (
            <div
              key={index}
              ref={el => { termsRef.current[index] = el; }}
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
                    <ul className="space-y-1.5">
                      {section.bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-color/70 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
          <p className="text-sm text-text-color/70 text-center">
            By using Bitmonie, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
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