import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faChevronDown, faWallet, faShieldAlt,
  faUserCircle, faCreditCard, faHandshake, faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const categories = [
  { id: 'all',      label: 'All',          icon: faQuestionCircle },
  { id: 'account',  label: 'Account',      icon: faUserCircle },
  { id: 'wallet',   label: 'Wallet',       icon: faWallet },
  { id: 'trading',  label: 'Trading',      icon: faCreditCard },
  { id: 'p2p',      label: 'P2P',          icon: faHandshake },
  { id: 'security', label: 'Security',     icon: faShieldAlt },
];

const faqs = [
  {
    category: 'account',
    question: 'What is Bitmonie?',
    answer: 'Bitmonie is a crypto-powered neobank and African fintech platform that lets you trade crypto, access P2P exchange, pay bills, manage NGN and digital assets, and access crypto-backed loans — all in one app.',
  },
  {
    category: 'account',
    question: 'How do I create a Bitmonie account?',
    answer: 'Download the Bitmonie app, tap "Sign Up", enter your email address and phone number, verify your identity with a valid ID (KYC), and set up your wallet. The process takes less than 5 minutes.',
  },
  {
    category: 'account',
    question: 'Is Bitmonie available outside Nigeria?',
    answer: 'Yes. While Bitmonie is built with Nigerians in mind, our platform is expanding across Africa. Users can send and receive crypto across borders with no restrictions.',
  },
  {
    category: 'account',
    question: 'How do I earn from referrals?',
    answer: 'Share your unique referral link with friends. When they sign up and complete their first transaction, you earn a reward. You can track your referral earnings directly in the app.',
  },
  {
    category: 'wallet',
    question: 'What currencies does the Bitmonie wallet support?',
    answer: 'Bitmonie supports NGN (Nigerian Naira) and major cryptocurrencies including USDT, USDC, and Bitcoin. More assets will be added as the platform grows.',
  },
  {
    category: 'wallet',
    question: 'How do I deposit funds into my wallet?',
    answer: 'You can fund your NGN wallet via bank transfer using your unique account number, or receive crypto by sharing your wallet address. Deposits are reflected instantly.',
  },
  {
    category: 'wallet',
    question: 'How do I withdraw Naira to my bank account?',
    answer: 'Go to your NGN wallet, tap "Withdraw", enter your bank details and amount, then confirm. Withdrawals are processed instantly and land in your bank account within seconds.',
  },
  {
    category: 'wallet',
    question: 'Why did I receive a different USD amount than expected?',
    answer: 'Crypto transactions are subject to real-time exchange rates. The rate at the time your transaction is confirmed may differ slightly from when you initiated it, due to market fluctuations.',
  },
  {
    category: 'trading',
    question: 'How do I buy USDT on Bitmonie?',
    answer: 'Go to the "Trade" section, select Buy, choose USDT, enter the NGN amount you want to spend, and confirm. Your crypto will be credited to your wallet within minutes.',
  },
  {
    category: 'trading',
    question: 'How do I sell crypto and receive Naira?',
    answer: 'Tap "Sell" in the Trade section, select your crypto, enter the amount, and confirm. The equivalent Naira will be credited to your NGN wallet instantly, ready to withdraw.',
  },
  {
    category: 'trading',
    question: 'What is Crypto Swap?',
    answer: 'Crypto Swap lets you convert one cryptocurrency to another directly within the app — for example, swapping USDT to BTC — in just a few taps, with no need to sell and rebuy manually.',
  },
  {
    category: 'p2p',
    question: 'How does the P2P marketplace work?',
    answer: 'The P2P marketplace lets you trade crypto directly with other users. You set your rate and preferred payment method. Our escrow system holds the crypto until both parties confirm the transaction is complete.',
  },
  {
    category: 'p2p',
    question: 'What is escrow protection?',
    answer: 'When you initiate a P2P trade, the seller\'s crypto is locked in our escrow system. It is only released to the buyer after the seller confirms they have received payment. This ensures no one gets cheated.',
  },
  {
    category: 'p2p',
    question: 'What is P2P Lending (Crypto Loans)?',
    answer: 'P2P Lending allows you to borrow funds by using your crypto as collateral, or earn by lending your assets to other users. All terms are transparent, and transactions are secured by Bitmonie\'s platform.',
  },
  {
    category: 'security',
    question: 'Is my money safe on Bitmonie?',
    answer: 'Yes. Bitmonie uses encrypted wallets, KYC verification, and escrow protection on all P2P trades. We employ industry-standard security practices to keep your funds and personal data safe at all times.',
  },
  {
    category: 'security',
    question: 'What is KYC and why is it required?',
    answer: 'KYC (Know Your Customer) is an identity verification process required by financial regulations. It helps us protect users from fraud and ensures the platform remains safe and compliant.',
  },
  {
    category: 'security',
    question: 'What should I do if I notice suspicious activity on my account?',
    answer: 'Immediately change your password and PIN, then contact our support team via the Help Center or live chat. We\'ll lock your account and investigate right away.',
  },
];

export default function FAQ() {
  const headerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery = faq.question.toLowerCase().includes(query.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory, query]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
      });
    }, { threshold: 0.1 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-tertiary font-semibold">Got questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-text-color/70 leading-relaxed">
            Everything you need to know about Bitmonie. Can't find an answer?{' '}
            <a href="/contact" className="text-primary underline underline-offset-2 hover:text-tertiary transition-colors">
              Chat with us.
            </a>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
          <input
            type="text"
            placeholder="Search questions..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-secondary/60 border border-primary/20 rounded-xl focus:outline-none focus:border-primary text-text-color placeholder:text-text-color/40 text-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all
                ${activeCategory === cat.id
                  ? 'bg-primary text-secondary border-primary'
                  : 'bg-secondary/60 text-text-color/70 border-primary/20 hover:border-primary hover:text-text-color'
                }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length > 0 ? filtered.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300
                ${openIndex === index
                  ? 'border-primary bg-primary/10'
                  : 'border-primary/20 bg-secondary/50 hover:border-primary/50'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-semibold text-text-color text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-text-color/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-12 text-text-color/50">
              <FontAwesomeIcon icon={faQuestionCircle} className="w-8 h-8 mb-3 opacity-40" />
              <p className="font-semibold">No results found</p>
              <p className="text-sm mt-1">Try a different search term or category.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-secondary/50 border border-primary/20 rounded-2xl p-8">
          <p className="font-bold text-text-color mb-1">Still have questions?</p>
          <p className="text-sm text-text-color/60 mb-5">Our support team is available 24/7 to help you.</p>
          <a href="/contact">
            <button className="px-6 py-3 bg-primary text-secondary font-semibold rounded-xl hover:bg-tertiary hover:text-primary transition-all text-sm">
              Contact Support
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}