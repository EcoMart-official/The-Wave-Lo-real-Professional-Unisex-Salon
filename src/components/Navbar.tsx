import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed w-full top-0 z-40 transition-all duration-300',
          isScrolled 
            ? 'glass py-3 border-b border-brand-gold/10' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50">
              <img referrerPolicy="no-referrer" 
                src="https://i.ibb.co/CKNgv7mg/images-5.jpg" 
                alt="The Wave Salon Logo" 
                className="h-12 w-12 object-cover rounded-full border border-brand-gold/50 group-hover:border-brand-gold transition-colors"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-wider group-hover:text-brand-gold transition-colors uppercase">
                  The Wave
                </span>
                <span className="text-[9px] tracking-wider text-brand-gold uppercase font-semibold">
                  L'Oréal Professional
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => cn(
                    'text-sm uppercase tracking-widest font-medium transition-all duration-300 relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full hover:text-brand-gold',
                    isActive ? 'text-brand-gold after:w-full' : 'text-white'
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/booking"
                className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 text-sm uppercase tracking-widest font-medium rounded-sm ml-4"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white hover:text-brand-gold transition-colors z-50 relative p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, type: 'tween' }}
            className="fixed inset-0 z-30 bg-brand-black/95 backdrop-blur-xl flex flex-col md:hidden pt-24 pb-8 px-6"
          >
            <nav className="flex flex-col gap-6 mt-8 flex-grow">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => cn(
                      'text-2xl font-serif tracking-wider transition-colors block',
                      isActive ? 'text-brand-gold' : 'text-white hover:text-brand-rosegold'
                    )}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link 
                  to="/booking"
                  className="w-full block text-center px-6 py-3 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-white/10 pt-8 flex flex-col gap-4 text-sm text-brand-cream/70"
            >
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold" />
                <a href="tel:08016390833" className="hover:text-brand-gold">080163 90833</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold mt-1 shrink-0" />
                <span className="text-xs leading-normal">1st floor, central bus stand, opposite of petrol pump, near mio amore, Jalkhabar, Contai, Banamali Pur, West Bengal 721401</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
