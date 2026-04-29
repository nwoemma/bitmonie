import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet, faPaperPlane, faShieldAlt, faCreditCard,
  faBolt, faChartLine, faLock, faEyeSlash, faGlobe,
  faArrowRightArrowLeft, faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";

const features = [
  {
    icon: faWallet,
    title: 'Digital Wallet',
    description: 'Manage your money without limits. Store both NGN and cryptocurrencies in one secure wallet, designed for speed and reliability. Deposit, withdraw, send, and receive funds anytime — your assets are always accessible, protected, and under your control.',
  },
  {
    icon: faPaperPlane,
    title: 'Send & Receive Crypto',
    description: 'Easily send and receive USDT and other supported cryptocurrencies across borders in seconds. Whether you\'re paying someone or receiving funds, BITMONIE ensures fast, secure, and low-friction transactions globally.',
  },
  {
    icon: faCreditCard,
    title: 'Bill Payments Made Simple',
    description: 'Handle everyday payments effortlessly. Pay electricity bills, buy data bundles, and recharge airtime for all major Nigerian networks (MTN, Glo, Airtel, 9mobile). Enjoy instant confirmations, smooth processing, and zero hidden charges — every time.',
  },
  {
    icon: faShieldAlt,
    title: 'Peer‑to‑Peer (P2P) Marketplace',
    description: 'Trade crypto directly with other users on your terms. Choose your preferred payment method, set your rates, and complete transactions securely. Our escrow system locks crypto until both parties confirm, ensuring every trade is safe, transparent, and fair.',
  },
  {
    icon: faChartLine,
    title: 'Crypto Trading (Buy & Sell)',
    description: 'Buy and sell USDT or USDC instantly with BITMONIE. Fund your wallet with naira and receive crypto within minutes — or sell your crypto and get paid directly into your bank account. No delays, no complexity — just fast and reliable transactions.',
  },
  {
    icon: faArrowRightArrowLeft,
    title: 'Crypto Swap',
    description: 'Seamlessly swap between popular cryptocurrencies in just a few taps. Convert your assets quickly and take advantage of market opportunities without leaving the app.',
  },
  {
    icon: faHandshake,
    title: 'Crypto Loans (P2P Lending)',
    description: 'Unlock the value of your assets with our peer-to-peer lending system. Borrow funds using your crypto as collateral or earn by lending to other users. Transparent terms, secure transactions, and flexible opportunities — all powered by BITMONIE.',
  },
];

const whyBitmonie = [
  { icon: faBolt,      title: 'Instant Execution',   description: 'Trades and bill payments complete in seconds.' },
  { icon: faChartLine, title: 'Competitive Rates',    description: 'Get the best prices for crypto and lowest fees for bills.' },
  { icon: faLock,      title: 'Escrow Protection',    description: 'Every P2P trade is secured – funds released only when both parties confirm.' },
  { icon: faEyeSlash,  title: 'No Hidden Charges',    description: 'What you see is what you pay.' },
  { icon: faGlobe,     title: 'Built for Africa',     description: 'Local payment methods, 24/7 support, and a simple interface for everyone.' },
];

export default function Features() {
  const headerRef = useRef(null);
  const whyRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const whyCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (whyRef.current) observer.observe(whyRef.current);
    cardsRef.current.forEach(card => { if (card) observer.observe(card); });
    whyCardsRef.current.forEach(card => { if (card) observer.observe(card); });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
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

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el; }}
              style={{ animationDelay: `${index * 0.08}s` }}
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

        {/* Scrolling Images */}
        <div className="overflow-hidden w-full mt-8">
          <div className="flex flex-row gap-6 w-max animate-[slide-left_15s_linear_infinite] hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-row gap-6">
                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(20deg)_rotateY(35deg)_rotateZ(-20deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Crypto Trading (Buy & Sell)</p>
                      <p className="text-xs text-[#4A5568]">Buy and sell USDT or USDC instantly. Fund your wallet with naira and receive crypto within minutes.</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1000">
                  <img src={image} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Bill Payments Made Simple</p>
                      <p className="text-xs text-[#4A5568]">Pay electricity bills, buy data bundles, recharge airtime. Zero hidden charges, instant confirmation.</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image2} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(20deg)_rotateY(35deg)_rotateZ(-20deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Peer‑to‑Peer (P2P) Marketplace</p>
                      <p className="text-xs text-[#4A5568]">Trade crypto directly with other users. Escrow protection on every transaction — safe, transparent, and fair.</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image2} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Digital Wallet</p>
                      <p className="text-xs text-[#4A5568]">Store NGN and crypto in one secure wallet. Your assets are always accessible and under your control.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Bitmonie */}
        <div ref={whyRef} className="mt-20 opacity-0">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-tertiary font-semibold">Why choose us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4" style={{ letterSpacing: '-0.5px' }}>
              Why Bitmonie?
            </h2>
            <p className="text-[#4A5568] leading-relaxed">
              We built Bitmonie with one goal — to give people across Africa and beyond the fastest, fairest, and most secure way to manage money and crypto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyBitmonie.map((item, index) => (
              <div
                key={index}
                ref={el => { whyCardsRef.current[index] = el; }}
                style={{ animationDelay: `${index * 0.08}s` }}
                className="opacity-0 flex items-start gap-4 p-5 rounded-2xl border border-primary/20 bg-secondary/50 hover:border-primary hover:bg-primary/10 transition-all group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all">
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-tertiary group-hover:text-[#0A1F44] transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1F44] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}