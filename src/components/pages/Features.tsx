import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPaperPlane, faShieldAlt, faCreditCard, faChartLine, faGlobe } from '@fortawesome/free-solid-svg-icons';
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
const features = [
  { icon: faWallet, title: 'Secure Wallet', description: 'Store and manage your cryptocurrency safely in one place.' },
  { icon: faPaperPlane, title: 'Fast Transactions', description: 'Send and receive crypto quickly with a smooth and reliable experience.' },
  { icon: faShieldAlt, title: 'Secure Trading', description: 'Trade with confidence using our protected peer-to-peer (P2P) system.' },
  { icon: faCreditCard, title: 'Easy Withdrawals', description: 'Withdraw your funds directly to your bank account anytime.' },
  { icon: faGlobe, title: 'P2P Trading', description: 'Buy and sell crypto directly with other users using local currency.' },
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
                      <p className="text-sm font-semibold text-[#0A1F44]">Send and receive crypto easily</p>
                      <p className="text-xs text-[#4A5568]">Move assets across borders in one place</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1000">
                  <img src={image} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Fast crypto transfers</p>
                      <p className="text-xs text-[#4A5568]">Send tokens with low delay and high reliability</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image2} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(20deg)_rotateY(35deg)_rotateZ(-20deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Secure asset control</p>
                      <p className="text-xs text-[#4A5568]">You stay in full control of your funds</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-16 rounded-2xl overflow-hidden perspective-1500">
                  <img src={image2} alt="Bitmonie App" className="w-70 h-80 object-contain rounded-2xl [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] origin-bottom" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-sm font-semibold text-[#0A1F44]">Crypto payments</p>
                      <p className="text-xs text-[#4A5568]">Pay and transfer digital assets securely</p>
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