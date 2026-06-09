import { motion } from 'motion/react';
import { Section, SectionTitle } from '../ui/Section';

const TESTIMONIALS = [
  {
    name: "Ananya",
    service: "Bridal Makeup",
    review: "Absolutely phenomenal experience! The bridal makeup was flawless, and they truly made me feel like royalty. The staff is professional and the ambience is purely luxurious.",
    rating: 5
  },
  {
    name: "Sneha",
    service: "Keratin Treatment",
    review: "I got the Zap Keratin treatment done. The transformation of my hair is unbelievable. Best salon in Contai without a doubt.",
    rating: 5
  },
  {
    name: "Rahul",
    service: "Men's Styling",
    review: "Clean, hygienic, and highly professional. The stylist knew exactly what look would suit my face structure. Highly recommend The Wave Salon.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <Section className="bg-brand-dark-grey" hasPattern>
      <SectionTitle title="Client Reverence" subtitle="Real Experiences" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((col, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass p-8 relative border-t-2 border-t-brand-gold"
          >
            <div className="flex gap-1 mb-6 text-brand-gold">
              {[...Array(col.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-brand-cream/80 italic leading-relaxed mb-8">
              "{col.review}"
            </p>
            <div>
              <h4 className="font-serif text-lg text-white">{col.name}</h4>
              <p className="text-brand-gold text-xs uppercase tracking-widest mt-1">{col.service}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
