import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Section, SectionTitle } from '../ui/Section';

interface ServiceItem {
  name: string;
  price?: string;
  desc?: string;
}

interface ServiceCategoryProps {
  id?: string;
  title: string;
  subtitle?: string;
  image: string;
  services: ServiceItem[];
  reverse?: boolean;
}

export function ServiceCategory({ id, title, subtitle, image, services, reverse = false }: ServiceCategoryProps) {
  return (
    <Section className="border-b border-brand-gold/5 pt-0 pb-24 md:pb-32" hasPattern={reverse}>
      {id && <div id={id} className="absolute -top-24" />}
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img referrerPolicy="no-referrer" 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
          </motion.div>
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-3xl font-serif text-white mb-2">{title}</h3>
            <div className="h-[1px] w-12 bg-brand-gold" />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          {subtitle && (
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">
             Signature <span className="text-brand-gold italic">Services</span>
          </h2>

          <div className="flex flex-col gap-8">
            {services.map((svc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: reverse ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-brand-gold transition-colors font-serif">{svc.name}</h4>
                  {svc.price && (
                    <div className="flex items-center gap-4 flex-grow ml-4">
                      <div className="flex-grow border-b border-dashed border-brand-gold/20" />
                      <span className="text-brand-gold font-semibold whitespace-nowrap">{svc.price}</span>
                    </div>
                  )}
                </div>
                {svc.desc && <p className="text-brand-cream/60 text-sm">{svc.desc}</p>}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link 
              to="/pricing"
              className="inline-block border-b border-brand-gold text-brand-gold uppercase tracking-widest text-xs font-semibold pb-1 hover:text-white hover:border-white transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
