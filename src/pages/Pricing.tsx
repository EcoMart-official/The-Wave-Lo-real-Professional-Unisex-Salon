import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionTitle } from '../components/ui/Section';
import { Link } from 'react-router-dom';
import BookingCTA from '../components/home/BookingCTA';

const CATEGORIES = [
  "Straightening",
  "Keratin / Botox",
  "Coloring",
  "Hair Spa",
  "Facial & Nails"
];

const PRICING_DATA = {
  "Straightening": [
    { name: "L'OREAL Hair Straightening / Smoothening", price: "₹2,999", desc: "Any Length" },
    { name: "Schwarzkopf Hair Straightening / Smoothening", price: "₹3,500", desc: "Any Length" },
    { name: "Anti Breakage Treatment", price: "₹1,500", desc: "Add-on treatment" }
  ],
  "Keratin / Botox": [
    { name: "Premium Keratin Treatment", price: "₹3,999", desc: "Any Length" },
    { name: "Zap Keratin Treatment", price: "₹4,999", desc: "Any Length" },
    { name: "GK Keratin Treatment", price: "₹4,999", desc: "Any Length" },
    { name: "Nanoplastia Treatment", price: "₹5,000", desc: "Any Length. Same Day Wash Available." },
    { name: "Botox Treatment", price: "₹5,000", desc: "Any Length. Same Day Wash Available." }
  ],
  "Coloring": [
    { name: "L'Oréal Global Color", price: "₹3,500", desc: "Full coverage" },
    { name: "Highlights", price: "₹3,500", desc: "Partial to full" },
    { name: "Balayage", price: "₹3,999 Onwards", desc: "Custom blended" }
  ],
  "Hair Spa": [
    { name: "Schwarzkopf Hair Spa", price: "₹999", desc: "Any Length" },
    { name: "L'Oréal Hair Spa", price: "₹1,500", desc: "Any Length" },
    { name: "Keratin Spa", price: "₹2,000", desc: "Any Length" },
    { name: "Moroccan Spa", price: "₹2,500", desc: "Any Length" },
    { name: "3TENX Hair Spa", price: "₹3,000", desc: "Any Length" }
  ],
  "Facial & Nails": [
    { name: "Nail Extensions with Gel Polish", price: "₹1,299", desc: "Premium quality" },
    { name: "Lotus De-Tan Facial", price: "₹1,500", desc: "Brightening glow" },
    { name: "O3+ Professional De-Tan Facial", price: "₹2,000", desc: "Advanced formula" },
    { name: "Ice Cream Bombini Pedicure + Manicure Combo", price: "₹1,500", desc: "Luxury treatment" }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  return (
    <div className="bg-brand-black min-h-screen pt-32">
      <Section className="pb-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle title="Menu of Services" subtitle="Pricing" />
          <p className="text-brand-cream/80 text-lg">
            Experience transparency and premium value. Explore our carefully curated service packages.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-brand-gold text-brand-black scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-brand-black text-white border border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing Items */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {PRICING_DATA[activeTab as keyof typeof PRICING_DATA].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.name}
                  className="glass p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-brand-gold/50 transition-colors"
                >
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-brand-gold transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-brand-cream/60 text-sm">{item.desc}</p>
                  </div>
                  <div className="text-2xl font-bold text-brand-gold whitespace-nowrap">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      <BookingCTA />
    </div>
  );
}
