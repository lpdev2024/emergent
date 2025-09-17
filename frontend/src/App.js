import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import BonusSection from "./components/BonusSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import PromoPopup from "./components/PromoPopup";
import ExitIntentPopup from "./components/ExitIntentPopup";
import LeadCapturePage from "./pages/LeadCapturePage";
import PricingPage from "./pages/PricingPage";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();

    // Show promo popup after 10 seconds
    const promoTimer = setTimeout(() => {
      setShowPromoPopup(true);
    }, 10000);

    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(promoTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContentSection />
        <BonusSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      
      {/* Popups */}
      <PromoPopup 
        isOpen={showPromoPopup} 
        onClose={() => setShowPromoPopup(false)} 
      />
      <ExitIntentPopup 
        isOpen={showExitPopup} 
        onClose={() => setShowExitPopup(false)} 
      />
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lead-capture" element={<LeadCapturePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
