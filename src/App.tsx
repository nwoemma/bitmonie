import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/core/Navbar';
import Hero from './components/core/Hero';
import Features from './components/pages/Features';
import Markets from './components/pages/Markets';
import Security from './components/pages/Security';
import LaunchApp from './components/pages/LaunchApp';
import Background from './components/core/Background';
import AboutUs from './components/pages/About';
import Careers from './components/pages/Career';
import PressKit from './components/pages/PressKit';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import CTASection from './components/core/CTA';
import Footer from './components/core/Footer';
import BitmonieVentures from './components/pages/BitmonieVentures';
import InstitutionalAPI from './components/pages/InstitutionalAPI';
import MarketMakerLabs from './components/pages/MarketMakerLabs';
import NetworkStatus from './components/pages/NetworkStatus';


function HomePage() {
  return (
    <>
      <Hero />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/security" element={<Security />} />
        <Route path="/app" element={<LaunchApp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/presskit" element={<PressKit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/bitmonieVentures" element={<BitmonieVentures />} />
        <Route path="/institutionalAPI" element={<InstitutionalAPI />} />
        <Route path="/marketMakerLabs" element={<MarketMakerLabs />} />
        <Route path="/networkStatus" element={<NetworkStatus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;