import { motion } from 'motion/react';
import HomeHero from '../components/home/HomeHero';
import Statistics from '../components/home/Statistics';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { ServiceCategory } from '../components/home/ServiceCategory';
import GallerySection from '../components/home/GallerySection';
import Testimonials from '../components/home/Testimonials';
import BookingCTA from '../components/home/BookingCTA';
import { Section, SectionTitle } from '../components/ui/Section';
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES_MENS = [
  { name: "Executive Haircut & Style", price: "₹250+" },
  { name: "Hair Color / Highlights", price: "₹800+" },
  { name: "Keratin Treatment", price: "₹2,500+" },
  { name: "Scalp Therapy", price: "₹600+" },
];

const SERVICES_WOMENS = [
  { name: "Advanced Layer Styling", price: "₹450+" },
  { name: "Creative Blow Dry", price: "₹350+" },
  { name: "Split-end Treatment", price: "₹500+" },
];

const SERVICES_STRAIGHTENING = [
  { name: "L'OREAL Hair Straightening / Smoothening", price: "₹2,999", desc: "For any length" },
  { name: "Schwarzkopf Hair Straightening", price: "₹3,500", desc: "For any length" },
  { name: "Anti Breakage Treatment", price: "₹1,500" },
];

const SERVICES_KERATIN = [
  { name: "Premium Keratin Treatment", price: "₹3,999", desc: "Any Length" },
  { name: "Zap Keratin Treatment", price: "₹4,999", desc: "Any Length" },
  { name: "GK Keratin Treatment", price: "₹4,999", desc: "Any Length" },
  { name: "Nanoplastia / Botox", price: "₹5,000", desc: "Any Length, Same Day Wash" },
];

const SERVICES_COLORING = [
  { name: "L'Oréal Global Color", price: "₹3,500" },
  { name: "Highlights", price: "₹3,500" },
  { name: "Balayage", price: "₹3,999" },
  { name: "Root Touch-up", price: "₹1,200+" },
];

const SERVICES_SPA = [
  { name: "Schwarzkopf Hair Spa", price: "₹999" },
  { name: "L'Oréal Hair Spa", price: "₹1,500" },
  { name: "Keratin Spa", price: "₹2,000" },
  { name: "Moroccan Spa", price: "₹2,500" },
  { name: "3TENX Hair Spa", price: "₹3,000" },
];

const SERVICES_BEARD = [
  { name: "Royal Beard Trim & Shape", price: "₹200+" },
  { name: "Luxury Hot Towel Shave", price: "₹300+" },
  { name: "Beard Spa & Coloring", price: "₹500+" },
];

const SERVICES_BRIDAL = [
  { name: "Premium Bridal Makeup", price: "Custom" },
  { name: "Pre-Bridal Packages", price: "Custom" },
  { name: "Airbrush Makeup", price: "Custom" },
];

const SERVICES_SKINCARE = [
  { name: "Lotus De-Tan Facial", price: "₹1,500" },
  { name: "O3+ Professional De-Tan", price: "₹2,000" },
  { name: "Diamond / Gold Facial", price: "₹2,500+" },
  { name: "Bombini Pedi-Mani Combo", price: "₹1,500" },
];

const SERVICES_MAKEUP = [
  { name: "Party Makeup", price: "₹1,500+" },
  { name: "Reception Makeup HD", price: "₹3,500+" },
  { name: "Engagement Makeup", price: "₹2,500+" },
];

export default function Home() {
  return (
    <div className="bg-brand-black text-brand-cream overflow-x-hidden">
      {/* 1. Premium Hero */}
      <HomeHero />
      
      {/* 2. Statistics Counter */}
      <Statistics />
      
      {/* Marquee Banner */}
      <div className="bg-brand-gold text-brand-black py-4 overflow-hidden border-y border-brand-gold/50">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap whitespace-pre text-sm md:text-base font-semibold uppercase tracking-[0.2em]"
        >
          PREMIUM LUXURY . WORLD CLASS STYLING . EXPERT PROFESSIONALS . EXCLUSIVE OFFERS . UNISEX SALON . CONTAI, WEST BENGAL . 
          PREMIUM LUXURY . WORLD CLASS STYLING . EXPERT PROFESSIONALS . EXCLUSIVE OFFERS . UNISEX SALON . CONTAI, WEST BENGAL . 
          PREMIUM LUXURY . WORLD CLASS STYLING . EXPERT PROFESSIONALS . EXCLUSIVE OFFERS . UNISEX SALON . CONTAI, WEST BENGAL . 
        </motion.div>
      </div>

      {/* 3. About Preview */}
      <AboutPreview />
      
      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* Sections 5 - 15: Deep Service Breakdown */}
      <div className="py-12">
        <SectionTitle title="Our Expertise" subtitle="Comprehensive Services" />
      </div>

      <ServiceCategory 
        title="Men's Hair Services" 
        subtitle="Precision & Style"
        image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_MENS}
        reverse={false}
      />
      
      <ServiceCategory 
        title="Women's Hair Services" 
        subtitle="Elegance & Flow"
        image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_WOMENS}
        reverse={true}
      />
      
      <ServiceCategory 
        title="Hair Straightening" 
        subtitle="Smooth & Silky"
        image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_STRAIGHTENING}
        reverse={false}
      />

      <ServiceCategory 
        title="Keratin & Botox" 
        subtitle="Advanced Treatments"
        image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_KERATIN}
        reverse={true}
      />
      
      <div className="py-24 bg-brand-dark-grey relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">L'Oréal Professionnel</h2>
            <p className="text-brand-gold uppercase tracking-widest text-sm mb-10">Authorized Premium Salon Partner</p>
            <div className="max-w-2xl mx-auto glass p-10 border-brand-gold/30">
               <h3 className="text-2xl font-serif text-white mb-2">Our Quality Guarantee</h3>
               <p className="text-lg text-brand-gold/90 font-medium mb-8">100% Authentic Products & Treatment</p>
               <div className="flex flex-col gap-4 text-brand-cream/80 text-base mb-8">
                  <span>✨ Certified L'Oréal Professional Hair Stylists</span>
                  <span>✨ Advanced Absolut Repair Molecular Treatments</span>
                  <span>✨ Premium Dia Richesse & Majirel Hair Coloring</span>
                  <span>✨ Deep Nourishing Hair Spa & Expert Inoa Series</span>
               </div>
               <p className="text-sm text-brand-gold/70 italic">*Ask our professionals for a personalized hair diagnosis</p>
            </div>
        </div>
      </div>

      <ServiceCategory 
        title="Hair Coloring" 
        subtitle="Vibrant Vibrance"
        image="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_COLORING}
        reverse={false}
      />
      
      <ServiceCategory 
        title="Luxury Hair Spa" 
        subtitle="Rejuvenation & Repair"
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_SPA}
        reverse={true}
      />
      
      <ServiceCategory 
        title="Beard Grooming" 
        subtitle="The Gentlemen's Club"
        image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_BEARD}
        reverse={false}
      />
      
      <ServiceCategory 
        title="Bridal Beauty" 
        subtitle="Your Special Day"
        image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_BRIDAL}
        reverse={true}
      />
      
      <ServiceCategory 
        title="Skincare & Nails" 
        subtitle="Flawless Glow"
        image="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_SKINCARE}
        reverse={false}
      />

      <ServiceCategory 
        title="Pro Makeup" 
        subtitle="Event Ready"
        image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000"
        services={SERVICES_MAKEUP}
        reverse={true}
      />

      {/* 16, 17, 20. Galleries combined */}
      <GallerySection 
        title="Transformation Showcase"
        subtitle="Before & After"
        images={[
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000"
        ]}
      />

      {/* 22. Testimonials Carousel / Grid */}
      <Testimonials />

      {/* 33. Location Preview & Map section */}
      <Section className="bg-brand-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle title="Find Our Sanctuary" subtitle="Visit Us" align="left" />
            <div className="flex flex-col gap-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">Location</h4>
                  <p className="text-brand-cream/70 text-sm leading-relaxed">
                     1st floor, central bus stand,<br/>
                     opposite of petrol pump, near mio amore,<br/>
                     Jalkhabar, Contai, Banamali Pur,<br/>
                     West Bengal 721401
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">Contact</h4>
                  <p className="text-brand-cream/70 text-sm">
                    Phone: <a href="tel:08016390833" className="hover:text-brand-gold">080163 90833</a>
                  </p>
                  <p className="text-brand-cream/70 text-sm">
                    Open Mon-Sun: 10:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 text-brand-black bg-brand-gold px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-all duration-300 mt-10"
            >
              Get Directions
            </Link>
          </div>
          
          <div className="h-[400px] bg-brand-dark-grey rounded-sm overflow-hidden border border-brand-gold/20 p-2 relative">
             {/* Map placeholder for premium look without API Key issues, normally iframe */}
             <iframe 
                src="https://maps.google.com/maps?q=1st%20floor,%20central%20bus%20stand,%20opposite%20of%20petrol%20pump,%20near%20mio%20amore,%20Jalkhabar,%20Contai,%20Banamali%20Pur,%20West%20Bengal%20721401&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             <div className="absolute inset-0 bg-brand-gold/10 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </Section>

      {/* 35. Final CTA */}
      <BookingCTA />
    </div>
  );
}

