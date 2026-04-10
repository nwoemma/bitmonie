import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faMugHot, faMoneyBillWave, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight, FaChartLine, FaShieldAlt, FaBolt } from 'react-icons/fa';
import { SiGoogleplay  } from 'react-icons/si';
import { BsWallet2 } from 'react-icons/bs';

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary rounded-full mb-6">
              <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
              <span className="text-sm text-text-color font-medium">Trusted by 500K+ users</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-color leading-tight mb-6">
              The smarter way to
              <span className="block bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">
                manage money globally
              </span>
            </h1>

            <p className="text-lg text-text-color/60 mb-8 leading-relaxed">
              Send, receive and manage your money across borders with zero stress.
              Multi-currency wallets, instant transfers, and virtual cards — all in one app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <Link to="/signup">
                <button className="px-6 py-3 bg-primary text-text-color rounded-xl font-semibold flex items-center gap-2 hover:bg-tertiary hover:text-primary transition-all shadow-md hover:shadow-lg">
                  Create Free Account <FaArrowRight className="w-4 h-4" />
                </button>
              </Link> */}
              <button className="px-6 py-3 border-2 border-tertiary rounded-xl font-semibold text-tertiary flex items-center gap-2 hover:bg-tertiary hover:text-primary transition-all">
                <SiGoogleplay  className="w-4 h-4" /> Download App
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
            <div className="absolute -inset-4 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-full blur-3xl" />
            <div className="relative bg-secondary rounded-2xl shadow-2xl overflow-hidden border border-primary/20">
              <div className="bg-primary px-5 py-3">
                <span className="text-text-color text-sm font-semibold">Bitmonie Dashboard</span>
              </div>
              <div className="p-5">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-text-color/60">BTC/USD</span>
                    <span className="text-xs text-green-500 flex items-center gap-1">
                      <FaChartLine className="w-3 h-3" /> +2.4%
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-text-color">$67,420</div>
                </div>
                <div className="mb-4 p-4 bg-primary/10 rounded-xl">
                  <div className="text-sm text-text-color/60 mb-1">Total Balance</div>
                  <div className="text-2xl font-bold text-text-color">$12,480.50</div>
                  <div className="text-xs text-green-500 mt-1">+$340.20 this month</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-color mb-3">Recent Transactions</div>
                  <div className="space-y-3">
                    {[
                      { name: 'NETFLIX', amount: '-$15.99', icon: faFilm, iconColor: '#E50914' },
                      { name: 'COFFEE', amount: '-$41.00', icon: faMugHot, iconColor: '#6F4E37' },
                      { name: 'SALARY', amount: '+$3,200', icon: faMoneyBillWave, iconColor: '#10B981', positive: true },
                      { name: 'VISA', amount: '-$89.00', icon: faCreditCard, iconColor: '#1A1F71' },
                    ].map((tx, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <FontAwesomeIcon 
                              icon={tx.icon} 
                              className="w-4 h-4" 
                              style={{ color: tx.iconColor }}
                            />
                          </div>
                          <span className="text-sm font-medium text-text-color/80">{tx.name}</span>
                        </div>
                        <span className={`text-sm font-semibold ${tx.positive ? 'text-green-600' : 'text-red-500'}`}>
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}