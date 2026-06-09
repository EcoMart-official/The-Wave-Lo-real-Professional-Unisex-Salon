import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-grey border-t border-brand-gold/10 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img referrerPolicy="no-referrer" 
                src="https://i.ibb.co/CKNgv7mg/images-5.jpg" 
                alt="The Wave Salon Logo" 
                className="h-16 w-16 object-cover rounded-full border border-brand-gold/30 p-1"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white tracking-wider uppercase">
                  The Wave
                </span>
                <span className="text-[10px] tracking-widest text-brand-gold uppercase">
                  L'Oréal Professional
                </span>
              </div>
            </Link>
            <p className="text-brand-cream/70 text-sm leading-relaxed mb-8 max-w-sm">
              Experience world-class luxury and styling at The Wave "L'Oréal Professional" Unisex Salon. Elevating your personal style with premium treatments, expert styling, and an unforgettable salon atmosphere.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://wa.me/918016390833" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold"></span>
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Pricing', 'Booking', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-brand-cream/70 hover:text-brand-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold"></span>
              Contact
            </h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-4 text-brand-cream/70">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-0.5" />
                <span>1st floor, central bus stand, opposite of petrol pump, near mio amore, Jalkhabar, Contai, Banamali Pur, West Bengal 721401</span>
              </li>
              <li className="flex items-center gap-4 text-brand-cream/70">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <a href="tel:08016390833" className="hover:text-brand-gold transition-colors">080163 90833</a>
              </li>
              <li className="flex items-center gap-4 text-brand-cream/70">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <a href="mailto:info@thewavesaloncontai.com" className="hover:text-brand-gold transition-colors">info@thewavesaloncontai.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold"></span>
              Hours
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-brand-cream/70">
              <li className="flex justify-between items-center border-b border-brand-gold/10 pb-2">
                <span>Mon - Sun</span>
                <span className="text-brand-gold font-medium">10:00 AM - 9:00 PM</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link 
                to="/booking"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest hover:bg-white transition-colors rounded-sm text-sm"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-cream/50 uppercase tracking-wider">
          <p>&copy; {currentYear} The Wave "L'Oréal Professional" Unisex Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
