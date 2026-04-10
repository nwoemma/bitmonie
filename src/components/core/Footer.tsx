import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-primary text-color pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          {/* Brand Column */}
          <div>
            <Link to="/" className="text-xl font-black text-color mb-4 block" style={{ letterSpacing: '-0.5px' }}>
              Bit<span className="text-color">monie</span>
            </Link>
            <p className="text-color text-sm mb-4 leading-relaxed">
              The smarter way to manage money globally. Built for individuals and businesses who need fast, secure, and borderless financial tools.
            </p>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-color hover:text-[#00C2FF] cursor-pointer transition-colors" />
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 text-color hover:text-[#00C2FF] cursor-pointer transition-colors" />
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-color hover:text-[#00C2FF] cursor-pointer transition-colors" />
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-color hover:text-[#00C2FF] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4 text-color">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-color hover:text-white text-sm transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-color hover:text-white text-sm transition-colors">How it works</Link></li>
              <li><Link to="/security" className="text-color hover:text-white text-sm transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-color">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-color hover:text-white text-sm transition-colors">About us</Link></li>
              <li><a href="/contact" className="text-color hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4 text-color">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/help-center" className="text-color hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="/privacy-policy" className="text-color hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-color hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-color">
          <p>© 2026 Bitmonie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}