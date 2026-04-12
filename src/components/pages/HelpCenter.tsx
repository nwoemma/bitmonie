import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faQuestionCircle, faFileAlt, faVideo, faHeadset, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const faqCategories = [
  { icon: faQuestionCircle, title: 'Getting Started', count: '12 articles' },
  { icon: faFileAlt, title: 'Account & Settings', count: '8 articles' },
  { icon: faVideo, title: 'Tutorials', count: '6 videos' },
  { icon: faHeadset, title: 'Support', count: '24/7' },
];

const popularArticles = [
  { title: 'How to create an account', link: '/help/create-account' },
  { title: 'How to add funds to your wallet', link: '/help/add-funds' },
  { title: 'How to make transfers to another Bitmonie Account', link: '/help/transfers' },
  { title: 'Security best practices', link: '/help/security' },
];

export default function HelpCenter() {
  const headerRef = useRef(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    categoriesRef.current.forEach(category => {
      if (category) observer.observe(category);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Help Center
          </h1>
          <p className="text-text-color/70 leading-relaxed mb-8">
            Find answers, get help, and learn how to make the most of Bitmonie
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-color/40" />
            <input 
              type="text" 
              placeholder="Search for help..." 
              className="w-full pl-12 pr-4 py-3 bg-secondary border border-primary/20 rounded-xl focus:outline-none focus:border-tertiary text-text-color"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {faqCategories.map((category, index) => (
            <div
              key={index}
              ref={el => { categoriesRef.current[index] = el; }}
              className="text-center opacity-0 bg-secondary/50 border border-primary/20 rounded-2xl p-6 hover:border-tertiary hover:bg-primary/10 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-tertiary transition-all">
                <FontAwesomeIcon icon={category.icon} className="w-6 h-6 text-primary group-hover:text-primary" />
              </div>
              <h3 className="font-bold text-text-color mb-1">{category.title}</h3>
              <p className="text-sm text-text-color/70">{category.count}</p>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-text-color mb-6">Popular Articles</h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Link key={index} to={article.link}>
                <div className="flex justify-between items-center py-3 border-b border-primary/20 hover:pl-4 transition-all">
                  <span className="text-text-color/80">{article.title}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-primary w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-text-color/70 mb-4">Still need help?</p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-primary text-text-color font-semibold rounded-xl hover:bg-tertiary hover:text-primary transition-all">
              Contact Support
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}