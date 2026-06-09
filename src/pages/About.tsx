import { Section, SectionTitle } from '../components/ui/Section';
import GallerySection from '../components/home/GallerySection';
import Statistics from '../components/home/Statistics';
import BookingCTA from '../components/home/BookingCTA';
import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-black min-h-screen pt-32">
      {/* Brand Story Header */}
      <Section className="pb-12 text-center" hasPattern>
         <div className="max-w-4xl mx-auto">
            <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block"
            >
               Our Heritage
            </motion.span>
            <motion.h1 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
            >
               The Art Of <span className="text-brand-gold italic">Perfection</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-lg text-brand-cream/80 leading-relaxed max-w-2xl mx-auto"
            >
               The Wave "L'Oréal Professional" Unisex Salon was born from a singular vision: to bring world-class luxury styling, professional grooming, and premium aesthetic treatments to Contai, West Bengal. 
            </motion.p>
         </div>
      </Section>

      {/* Image Banner */}
      <Section className="py-0">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] border border-brand-gold/20"
         >
            <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000" alt="Salon Interior" className="w-full h-full object-cover" />
         </motion.div>
      </Section>

      {/* Values & Philosophy */}
      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
               <SectionTitle title="Our Philosophy" align="left" />
               <div className="flex flex-col gap-6 text-brand-cream/80 leading-relaxed">
                  <p>
                     We believe that hair and beauty services are not just routine maintenance—they are an art form. Our salon is a sanctuary where self-care meets rigorous professional standards.
                  </p>
                  <p>
                     At The Wave "L'Oréal Professional" Unisex Salon, precision is our baseline and luxury is our standard. Every client receives a personalized consultation to ensure the results perfectly complement their lifestyle, face shape, and aesthetic goals.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="glass p-6 text-center">
                  <Heart className="w-8 h-8 mx-auto text-brand-gold mb-4" />
                  <h4 className="text-white font-serif mb-2 text-lg">Our Mission</h4>
                  <p className="text-brand-cream/60 text-sm">To elevate confidence through meticulous styling and care.</p>
               </div>
               <div className="glass p-6 text-center">
                  <Star className="w-8 h-8 mx-auto text-brand-gold mb-4" />
                  <h4 className="text-white font-serif mb-2 text-lg">Our Vision</h4>
                  <p className="text-brand-cream/60 text-sm">To be the undisputed standard for luxury beauty in the region.</p>
               </div>
               <div className="glass p-6 text-center sm:col-span-2">
                  <ShieldCheck className="w-8 h-8 mx-auto text-brand-gold mb-4" />
                  <h4 className="text-white font-serif mb-2 text-lg">Our Commitment</h4>
                  <p className="text-brand-cream/60 text-sm">Uncompromising hygiene, authentic premium products, and absolute client satisfaction at every visit.</p>
               </div>
            </div>
         </div>
      </Section>

      <Statistics />

      {/* Team / Leadership */}
      <Section className="bg-brand-dark-grey" hasPattern>
         <SectionTitle title="Meet The Experts" subtitle="The Visionaries" />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Standard Team Cards */}
            {[1, 2, 3].map((_, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass group overflow-hidden"
               >
                  <div className="aspect-square overflow-hidden border-b border-brand-gold/20">
                     <img referrerPolicy="no-referrer" src={`https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=1000`} alt="Stylist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-6 text-center">
                     <h4 className="text-white font-serif text-xl mb-1">Senior Stylist</h4>
                     <p className="text-brand-gold text-xs uppercase tracking-widest">Master Colorist</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </Section>

      {/* Gallery */}
      <GallerySection 
        title="The Wave Experience"
        subtitle="Our Sanctuary"
        images={[
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1000"
        ]}
      />

      <BookingCTA />
    </div>
  );
}
