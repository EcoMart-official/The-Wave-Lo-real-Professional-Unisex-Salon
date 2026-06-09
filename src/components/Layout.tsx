import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/918016390833?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Wave%20Unisex%20Salon."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 p-4 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 z-50 hover:bg-[#20ba5a] hover:scale-110 flex items-center justify-center group"
      >
        <FaWhatsapp size={28} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-semibold tracking-wider uppercase font-sans">
          Chat With Us
        </span>
      </a>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-24 right-8 p-3 rounded-full bg-brand-gold hover:bg-white text-brand-black hover:text-brand-gold shadow-lg shadow-brand-gold/20 transition-all duration-300 z-40 border border-transparent hover:border-brand-gold hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
