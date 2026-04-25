import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faMugHot, faMoneyBillWave, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight, FaChartLine, FaShieldAlt, FaBolt } from 'react-icons/fa';
import { SiGoogleplay  } from 'react-icons/si';
import { BsWallet2 } from 'react-icons/bs';
import Dashboard from "../../assets/Dashboard.png"

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center opacity-0">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-color leading-tight mb-6">
              Bitmonie:
              <span className="block bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">
                Buy & Sell Crypto Instantly. 
                Pay Bills in seconds
              </span>
            </h1>

            <p className="text-lg text-text-color/60 mb-8 leading-relaxed">
              The simplest way to trade Bitcoin, USDT and other cryptocurrenices - plus pay your utility bills, buy data and recharge airtime - all from one, fast, secure app
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <Link to="/signup">
                <button className="px-6 py-3 bg-primary text-text-color rounded-xl font-semibold flex items-center gap-2 hover:bg-tertiary hover:text-primary transition-all shadow-md hover:shadow-lg">
                  Create Free Account <FaArrowRight className="w-4 h-4" />
                </button>
              </Link> */}
              <button className="px-6 py-3 border-2 border-tertiary rounded-xl font-semibold text-tertiary flex items-center gap-2 hover:bg-tertiary hover:text-primary transition-all">
                <SiGoogleplay  className="w-4 h-4" /> Download App | Start Trading
              </button>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-tertiary" />
                <span className="text-sm text-text-color/60">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="w-4 h-4 text-tertiary" />
                <span className="text-sm text-text-color/60">Instant</span>
              </div>
              <div className="flex items-center gap-2">
                <BsWallet2 className="w-4 h-4 text-tertiary" />
                <span className="text-sm text-text-color/60">Non-custodial</span>
              </div>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="relative">
            <div className='w-full'>
              <img
                src={Dashboard}
                alt="Bitmonie App"
                className="w-full h-140 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}