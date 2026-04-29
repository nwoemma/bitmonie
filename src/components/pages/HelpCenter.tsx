import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faComments, faTicket, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { openTawkChat } from './TawkTo';

const popularArticles = [
  { title: 'How to create a Bitmonie account', link: '/help/create-account' },
  { title: 'How to add funds to your wallet', link: '/help/add-funds' },
  { title: 'How to withdraw Naira to your bank account', link: '/help/withdraw-naira' },
  { title: 'How do I earn money from referrals?', link: '/help/referrals' },
  { title: 'How does P2P escrow protection work?', link: '/help/escrow' },
  { title: 'How to buy and sell USDT on Bitmonie', link: '/help/buy-sell-usdt' },
  { title: 'Why did I get credited a different USD amount?', link: '/help/usd-discrepancy' },
  { title: 'How to pay electricity bills and buy airtime', link: '/help/bill-payments' },
];

export default function HelpCenter() {
  const headerRef = useRef(null);
  const chatRef = useRef(null);
  const searchRef = useRef(null);
  const ticketRef = useRef(null);

  const [query, setQuery] = useState('');

  const filtered = popularArticles.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
      });
    }, { threshold: 0.1 });

    [headerRef, chatRef, searchRef, ticketRef].forEach(r => {
      if (r.current) observer.observe(r.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-3" style={{ letterSpacing: '-0.5px' }}>
            You need any support?
          </h1>
          <p className="text-text-color/60 leading-relaxed">
            We're here to help. Search for answers or reach out to our team.
          </p>
        </div>

        {/* Chat with us — opens Tawk.to */}
        <div ref={chatRef} className="opacity-0 mb-4">
          <button onClick={openTawkChat} className="w-full text-left">
            <div className="flex items-center justify-between bg-secondary/60 border border-primary/20 rounded-2xl px-6 py-5 hover:border-primary hover:bg-primary/10 transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                  <FontAwesomeIcon icon={faComments} className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-text-color">Chat with us</p>
                  <p className="text-sm text-text-color/60">We typically reply in under 3 minutes</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Search + Articles */}
        <div ref={searchRef} className="opacity-0 mb-4 bg-secondary/60 border border-primary/20 rounded-2xl p-6">
          <div className="relative mb-5">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4"
            />
            <input
              type="text"
              placeholder="Search for help..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-secondary border border-primary/20 rounded-xl focus:outline-none focus:border-primary text-text-color placeholder:text-text-color/40 text-sm"
            />
          </div>

          <div className="space-y-1">
            {filtered.length > 0 ? filtered.map((article, index) => (
              <Link key={index} to={article.link}>
                <div className="flex justify-between items-center py-3.5 border-b border-primary/10 last:border-none hover:pl-2 transition-all group">
                  <span className="text-text-color/80 text-sm group-hover:text-text-color transition-colors">
                    {article.title}
                  </span>
                  <FontAwesomeIcon icon={faChevronRight} className="text-primary w-3.5 h-3.5 flex-shrink-0 ml-3" />
                </div>
              </Link>
            )) : (
              <p className="text-text-color/50 text-sm text-center py-4">No results found for "{query}"</p>
            )}
          </div>
        </div>

        {/* Create a ticket */}
        <div ref={ticketRef} className="opacity-0">
          <Link to="/contact">
            <div className="flex items-center justify-between bg-secondary/60 border border-primary/20 rounded-2xl px-6 py-5 hover:border-primary hover:bg-primary/10 transition-all group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                  <FontAwesomeIcon icon={faTicket} className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-text-color">Create a ticket</p>
                  <p className="text-sm text-text-color/60">Submit a request and we'll get back to you</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}