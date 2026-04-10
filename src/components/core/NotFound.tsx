import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  const location = useLocation();

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">

        {/* Animated icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-[#0066CC]/10 to-[#00C2FF]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🚧</span>
        </div>

        {/* 404 badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full mb-4">
          <span className="w-2 h-2 bg-[#00C2FF] rounded-full animate-pulse" />
          <span className="text-sm text-[#0066CC] font-medium">404 — Page not found</span>
        </div>

        <h1 className="text-4xl font-black text-[#0A1F44] mb-3" style={{ letterSpacing: '-0.5px' }}>
          Coming Soon
        </h1>

        <p className="text-gray-500 mb-2 leading-relaxed">
          <span className="font-semibold text-[#0066CC]">{location.pathname}</span> is not available yet.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          We're working hard to bring this page to life. Check back soon!
        </p>

        <Link to="/">
          <button className="px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#00C2FF] text-white rounded-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-blue-200 transition-all">
            <FiArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}