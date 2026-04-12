import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/core/Navbar';
import Footer from './components/core/Footer';
import Hero from './components/core/Hero';
import Features from './components/pages/Features';
import HowItWorks from './components/pages/HowItWorks';
import Security from './components/pages/Security';
import About from './components/pages/About';
import HelpCenter from './components/pages/HelpCenter';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Terms from './components/pages/Terms'
import CreateAccountHelp from './components/pages/HelpCenter/CreateAccountsHelp';
import AddFundsHelp from './components/pages/HelpCenter/AddFundsHelp';
import TransferHelp from './components/pages/HelpCenter/TransferHelp';
import SecurityHelp from './components/pages/HelpCenter/Security';

import NotFound from './components/core/NotFound';
import Contact from "./components/pages/Contact"

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<NotFound />} />
        <Route path="/signup" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/help-center" element={<HelpCenter />}/>
        <Route path='/help/create-account'element={<CreateAccountHelp />} />
        <Route path='/help/add-funds' element={<AddFundsHelp />} />
        <Route path='/help/transfers' element={<TransferHelp />} />
        <Route path='/help/security' element={<SecurityHelp />} />
        <Route path="/terms" element={<Terms />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;