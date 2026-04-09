import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLaunchApp = () => {
    navigate('/app');
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <span className="font-black text-xl">B</span>
          </div>
          <span className="text-2xl font-black tracking-tighter">BIT<span className="text-blue-500">MONIE</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <Link to='/' className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/markets" className="hover:text-white transition-colors">
            Markets
          </Link>
          <Link to="/security" className="hover:text-white transition-colors">
            Security
          </Link>
          <button 
            onClick={handleLaunchApp}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl transition-all font-bold"
          >
            Launch App
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#020617] border-t border-white/5 px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-slate-400">
          <Link to="/features" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/markets" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">
            Markets
          </Link>
          <Link to="/security" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">
            Security
          </Link>
          <button 
            onClick={handleLaunchApp}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold w-full transition-all"
          >
            Launch App
          </button>
        </div>
      )}
    </nav>
  );
}