import { motion } from 'motion/react';
import { Section, SectionTitle } from '../ui/Section';
import { Award, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

const REASONS = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Master Specialists",
    desc: "Our team consists of highly trained, internationally certified styling masters.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Premium Products",
    desc: "We exclusively use high-end, professional-grade brands like L'Oréal and Schwarzkopf.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Personalized Care",
    desc: "Every service is tailored strictly to your individual profile and aesthetic goals.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Hygiene Standard",
    desc: "We maintain hospital-grade sanitation protocols for your utmost safety.",
  }
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-brand-dark-grey relative border-y border-brand-gold/10" hasPattern>
      <SectionTitle title="Excellence In Every Detail" subtitle="Why Choose Us" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REASONS.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-8 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300">
              {reason.icon}
            </div>
            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors">{reason.title}</h3>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
