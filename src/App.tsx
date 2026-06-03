import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import WebsiteExamples from "./components/WebsiteExamples";
import ComparisonTable from "./components/ComparisonTable";
import Pricing from "./components/Pricing";
import Potenciadores from "./components/Potenciadores";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatModal from "./components/ChatModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

function LandingPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="min-h-screen font-sans">
      <Header onOpenChat={onOpenModal} />
      <main>
        <Hero onOpenChat={onOpenModal} />
        <ProblemSolution />
        <HowItWorks />
        <WebsiteExamples onOpenChat={onOpenModal} />
        <ComparisonTable />
        <Pricing onOpenChat={onOpenModal} />
        <Potenciadores onOpenChat={onOpenModal} />
        <FAQ />
        <FinalCTA onOpenChat={onOpenModal} />
        <ContactForm />
      </main>
      <Footer onOpenChat={onOpenModal} />
      <WhatsAppButton onOpenChat={onOpenModal} />
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <ChatModal isOpen={isModalOpen} onClose={closeModal} />
      <Routes>
        <Route path="/" element={<LandingPage onOpenModal={openModal} />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
