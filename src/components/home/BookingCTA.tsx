import { motion } from 'motion/react';
import { Section, SectionTitle } from '../ui/Section';

export default function BookingCTA() {
  return (
    <Section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img referrerPolicy="no-referrer" 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2600" 
          alt="Luxury Booking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass p-10 md:p-16 border-brand-gold/30"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
            Reserve Your Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Ready For Your <br/><span className="text-brand-gold italic">Transformation?</span>
          </h2>
          <p className="text-brand-cream/80 mb-10 max-w-xl mx-auto">
            Book an appointment today and discover a new echelon of beauty and luxury styling.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/booking" 
              className="px-10 py-4 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
            >
              Book Online
            </a>
            <a 
              href="tel:08016390833" 
              className="px-10 py-4 border border-brand-gold text-brand-gold font-semibold uppercase tracking-widest hover:bg-brand-gold/10 transition-colors rounded-sm"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
