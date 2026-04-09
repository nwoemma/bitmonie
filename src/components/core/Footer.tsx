const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Subtle "Data Stream" Background Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* COLUMN 1: BRAND & GLOBAL MISSION (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="font-black text-xl text-white">B</span>
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">BIT<span className="text-blue-500">MONIE</span></span>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg italic">
                "Defining the standard for on-chain transparency."
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Institutional Partners</h4>
              <div className="flex flex-wrap gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Replace with actual partner SVG logos */}
                <div className="h-6 w-24 bg-slate-700 rounded-md" title="Partner 1" />
                <div className="h-6 w-20 bg-slate-700 rounded-md" title="Partner 2" />
                <div className="h-6 w-28 bg-slate-700 rounded-md" title="Partner 3" />
              </div>
            </div>
          </div>

          {/* COLUMN 2: THE ECOSYSTEM (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-lg">Ecosystem</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/bitmonieVentures" className="hover:text-blue-400 transition-colors">Bitmonie Ventures</a></li>
              <li><a href="/institutionalAPI" className="hover:text-blue-400 transition-colors">Institutional API</a></li>
              <li><a href="/marketMakerLabs" className="hover:text-blue-400 transition-colors">Market Maker Labs</a></li>
              <li><a href="/networkStatus" className="hover:text-blue-400 transition-colors">Network Status</a></li>
            </ul>
          </div>

          {/* COLUMN 3: CORPORATE (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-lg">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers <span className="ml-2 text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full uppercase">Hiring</span></a></li>
              <li><a href="/presskit" className="hover:text-blue-400 transition-colors">Press Kit</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 4: THE BRIEFING (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/40 border border-white/5 rounded-[2rem] p-8">
            <h4 className="text-white font-bold mb-2 text-lg">The Weekly Briefing</h4>
            <p className="text-slate-500 text-sm mb-6">Join 40,000+ investors receiving our proprietary on-chain alpha.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@company.com" 
                className="bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl transition-all font-bold text-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* FINAL LEGAL FOOTNOTE */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] text-slate-600 leading-relaxed uppercase tracking-wider">
              Disclaimer: Cryptocurrency investments carry significant risk. Bitmonie Protocol provides analytical tools and does not constitute financial advice. All data is provided "as is" for informational purposes. © 2026 Bitmonie Ltd. Registered in the British Virgin Islands.
            </p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/security" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;