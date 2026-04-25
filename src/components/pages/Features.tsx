import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPaperPlane, faShieldAlt, faCreditCard, faChartLine, faGlobe } from '@fortawesome/free-solid-svg-icons';
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
const features = [
  { icon: faWallet, title: 'Digital Wallet', description: 'Keep your NGN and crypto balances in one secure wallet. Deposit, withdraw and transfer funds anytime. Your money is always accessible and protected' },
  { icon: faPaperPlane, title: 'Bill Payments Made Simple', description: 'Pay electricity bills, buy data bundles, recharge airtime for all major Nigerian networks (MTN, Glo, Airtel, 9mobile), and settle other utility bills. No hidden charges, instant confirmation.' },
  { icon: faShieldAlt, title: 'Peer‑to‑Peer (P2P) Marketplace', description: 'Buy and sell crypto directly with other users. Set your own rate, choose your preferred payment method (bank transfer, USSD, etc.), and complete trades with escrow protection. Our P2P system holds the crypto until both parties confirm the transaction – safe, fast, and fair.' },
  { icon: faCreditCard, title: 'Crypto Trading (Buy & Sell)', description: 'Keep your NGN and crypto balances in one secure wallet. Deposit, withdraw, and transfer funds anytime. Your money is always accessible and protected.' },
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
        <div className="overflow-hidden w-full mt-8">
          <div className="flex flex-row gap-6 w-max animate-[slide-left_15s_linear_infinite] hover:[animation-play-state:paused]">
            
            {/* Original + Duplicate for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-row gap-6">
                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(20deg)_rotateY(35deg)_rotateZ(-20deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Crypto Trading (Buy & Sell)</p>
                      <p className="text-xs text-[#4A5568]">Keep your NGN and crypto balances in one secure wallet. Deposit, withdraw, and transfer funds anytime. Your money is always accessible and protected.</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1000">
                  <img src={image} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Bill Payments Made Simple</p>
                      <p className="text-xs text-[#4A5568]">Pay electricity bills, buy data bundles, recharge airtime for all major Nigerian networks (MTN, Glo, Airtel, 9mobile), and settle other utility bills. No hidden charges, instant confirmation.</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image2} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(20deg)_rotateY(35deg)_rotateZ(-20deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Peer‑to‑Peer (P2P) Marketplace</p>
                      <p className="text-xs text-[#4A5568]">Pay electricity bills, buy data bundles, recharge airtime for all major Nigerian networks (MTN, Glo, Airtel, 9mobile), and settle other utility bills. No hidden charges, instant confirmation.</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image2} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Digital Wallet</p>
                      <p className="text-xs text-[#4A5568]">Keep your NGN and crypto balances in one secure wallet. Deposit, withdraw and transfer funds anytime. Your money is always accessible and protected</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

    </section>
  );
}