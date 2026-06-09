import { motion } from 'motion/react';
import { Section, SectionTitle } from '../ui/Section';

interface GalleryProps {
  title: string;
  subtitle: string;
  images: string[];
}

export default function GallerySection({ title, subtitle, images }: GalleryProps) {
  return (
    <Section className="border-t border-brand-gold/10 pt-24 pb-24">
      <SectionTitle title={title} subtitle={subtitle} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`overflow-hidden relative group aspect-[4/5] ${idx === 1 ? 'md:-translate-y-8' : ''}`}
          >
            <img referrerPolicy="no-referrer" 
              src={src} 
              alt={`Gallery Image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs font-semibold backdrop-blur-sm">View</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
