import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Security', path: '/security' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary border-b-2 border-primary">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-black text-tertiary tracking-tight">
          Bit<span className="text-primary">monie</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all px-3 py-1.5 rounded-lg ${
                location.pathname === item.path
                  ? 'bg-primary text-tertiary font-semibold'
                  : 'text-tertiary/70 hover:text-tertiary hover:bg-primary/30'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <button className="px-5 py-2 text-sm font-semibold text-tertiary border-2 border-tertiary rounded-xl hover:bg-tertiary hover:text-secondary transition-all">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 text-sm font-semibold text-tertiary bg-primary rounded-xl hover:bg-tertiary hover:text-primary transition-all flex items-center gap-2 shadow-md">
              Get Started <FiArrowRight className="w-3 h-3" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-tertiary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t-2 border-primary px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm py-2 px-3 rounded-lg transition-all ${
                location.pathname === item.path
                  ? 'bg-primary text-tertiary font-semibold'
                  : 'text-tertiary/70 hover:text-tertiary hover:bg-primary/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full py-2.5 border-2 border-tertiary rounded-xl text-sm font-semibold text-tertiary hover:bg-tertiary hover:text-secondary transition-all">
              Sign in
            </button>
          </Link>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full py-2.5 bg-primary text-tertiary rounded-xl text-sm font-semibold hover:bg-tertiary hover:text-primary transition-all">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}