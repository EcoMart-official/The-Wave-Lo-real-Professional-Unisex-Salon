import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';

export default function AboutPreview() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000" 
              alt="Salon Interior" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-10 -right-10 w-2/3 glass p-6 hidden md:block"
          >
            <p className="font-serif text-2xl text-brand-gold italic mb-2">"True beauty is an expression of inner harmony."</p>
            <p className="text-brand-cream/60 text-sm uppercase tracking-widest">- The Wave "L'Oréal Professional" Unisex Salon</p>
          </motion.div>
        </div>
        
        <div>
          <SectionTitle 
            title={<span>The Art Of <span className="text-brand-gold italic">Refinement</span></span>} 
            subtitle="About Our Salon" 
            align="left" 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-brand-cream/80 text-lg leading-relaxed mb-6">
              An establishment of excellence, The Wave "L'Oréal Professional" Unisex Salon brings world-class luxury to Contai, West Bengal. We believe that a salon visit should be more than a simple service; it should be a transformative journey for your personal style and confidence.
            </p>
            <p className="text-brand-cream/70 leading-relaxed mb-10">
              Our team of master stylists and beauty experts combine international techniques with premium products to deliver unparalleled results. From precision haircuts to transformative color services and rejuvenating spas, every detail is engineered for perfection.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-3 text-brand-gold uppercase tracking-widest text-sm font-semibold hover:gap-5 transition-all duration-300 group"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
