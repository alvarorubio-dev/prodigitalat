import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import WebsiteExamples from './components/WebsiteExamples';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import Potenciadores from './components/Potenciadores';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

function LandingPage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <WebsiteExamples />
        <ComparisonTable />
        <Pricing />
        <Potenciadores />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
