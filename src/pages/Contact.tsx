import { Section, SectionTitle } from '../components/ui/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-brand-black min-h-screen pt-32">
      <Section className="pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle title="Get in Touch" subtitle="Contact Us" />
          <p className="text-brand-cream/80 text-lg">
            Whether you have a question about our services or need help booking an appointment, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="glass p-8 hover:-translate-y-1 transition-transform border-t-2 border-brand-gold">
              <h3 className="text-2xl font-serif text-white mb-6">Salon Information</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4">
                  <MapPin className="text-brand-gold shrink-0 w-6 h-6" />
                  <div>
                    <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Address</strong>
                    <span className="text-brand-cream/70">1st floor, central bus stand, opposite of petrol pump, near mio amore, Jalkhabar, Contai, Banamali Pur, West Bengal 721401</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-brand-gold shrink-0 w-6 h-6" />
                  <div>
                    <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Phone</strong>
                    <a href="tel:08016390833" className="text-brand-cream/70 hover:text-brand-gold transition-colors">080163 90833</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="text-brand-gold shrink-0 w-6 h-6" />
                  <div>
                    <strong className="text-white block mb-1 uppercase tracking-widest text-xs">Business Hours</strong>
                    <span className="text-brand-cream/70">Mon - Sun: 10:00 AM - 9:00 PM</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-brand-gold/20 flex gap-4">
                 <a href="https://wa.me/918016390833" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-sm hover:-translate-y-1 transition-all uppercase text-xs tracking-widest font-semibold">
                    <FaWhatsapp size={18} /> WhatsApp
                 </a>
                 <a href="tel:08016390833" className="flex items-center gap-2 px-6 py-3 border border-brand-gold text-brand-gold rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all uppercase text-xs tracking-widest font-semibold cursor-pointer">
                    <Phone size={18} /> Call Us
                 </a>
              </div>
            </div>
            
            <div className="h-[300px] w-full rounded-sm overflow-hidden border border-brand-gold/20 glass p-2 relative">
               <iframe 
                  src="https://maps.google.com/maps?q=1st%20floor,%20central%20bus%20stand,%20opposite%20of%20petrol%20pump,%20near%20mio%20amore,%20Jalkhabar,%20Contai,%20Banamali%20Pur,%20West%20Bengal%20721401&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
             <h3 className="text-2xl font-serif text-white mb-2 relative z-10">Send Us A Message</h3>
             <p className="text-brand-cream/60 mb-8 relative z-10 text-sm">We'd love to hear from you. Fill out the form and we'll get back to you promptly.</p>
             
             <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Your Name</label>
                  <input type="text" className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Your Email</label>
                  <input type="email" className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Message</label>
                  <textarea rows={5} className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                </div>
                <button type="submit" className="mt-4 px-8 py-4 bg-brand-white text-brand-black font-semibold uppercase tracking-widest hover:bg-brand-gold transition-colors rounded-sm">
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
