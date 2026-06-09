import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=2600"
];

export default function HomeHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center pt-24 pb-32 md:pb-24">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-brand-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40 z-10" />
          <img
            referrerPolicy="no-referrer"
            src={HERO_IMAGES[currentImageIndex]}
            alt="Luxury Salon Aesthetics"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 block">
            Welcome To Premium Luxury
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
            Unveil Your <br/>
            <span className="italic text-brand-gold/90">True Beauty</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 mb-10 max-w-2xl font-light tracking-wide">
            World-class styling, exceptional service, and a transformative salon experience in Contai, West Bengal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link 
              to="/booking"
              className="flex items-center justify-center gap-3 px-10 py-4 bg-brand-gold text-brand-black font-semibold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-300 rounded-sm hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <Calendar size={18} />
              Book Now
            </Link>
            <a 
              href="tel:08016390833"
              className="flex items-center justify-center gap-3 px-10 py-4 border border-brand-gold text-brand-gold font-semibold uppercase tracking-[0.2em] text-sm hover:bg-brand-gold/10 transition-all duration-300 rounded-sm hover:-translate-y-1 glass"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-brand-gold/70">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
