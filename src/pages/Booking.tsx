import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionTitle } from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: import('react').FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-brand-black min-h-screen pt-32">
      <Section className="pb-24">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Reserve Your Time" subtitle="Booking" />
          
          <div className="glass p-8 md:p-12 relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold/20">
              <motion.div 
                className="h-full bg-brand-gold"
                initial={{ width: "0%" }}
                animate={{ width: isSuccess ? "100%" : "30%" }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Full Name *</label>
                      <input required type="text" className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="E.g. Ananya Das" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Phone Number *</label>
                      <input required type="tel" className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Email (Optional)</label>
                    <input type="email" className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="your@email.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Select Service *</label>
                    <select required className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none" defaultValue="">
                      <option value="" disabled>Choose a service category</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="straightening">Hair Straightening</option>
                      <option value="keratin">Keratin / Botox</option>
                      <option value="coloring">Hair Coloring</option>
                      <option value="spa">Hair Spa</option>
                      <option value="facial">Facial / Skin Care</option>
                      <option value="bridal">Bridal Makeup</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Preferred Date *</label>
                      <input required type="date" className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Preferred Time *</label>
                      <select required className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none" defaultValue="">
                        <option value="" disabled>Select Time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                        <option value="20:00">08:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm uppercase tracking-widest text-brand-gold font-semibold">Additional Notes</label>
                    <textarea rows={4} className="bg-brand-black/50 border border-brand-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Any specific requests or requirements..." />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-4 px-8 py-4 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest hover:bg-white transition-colors rounded-sm flex items-center justify-center min-h-[56px]"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-6 h-6 border-2 border-brand-black border-t-transparent rounded-full"
                      />
                    ) : (
                      "Confirm Booking"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-24 h-24 text-brand-gold mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
                  <p className="text-brand-cream/80 max-w-md mx-auto mb-8">
                    Thank you for choosing The Wave "L'Oréal Professional" Unisex Salon. We have received your booking request and our team will contact you shortly to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => { setIsSuccess(false); setStep(1); }}
                    className="px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-semibold uppercase tracking-widest transition-colors rounded-sm"
                  >
                    Book Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
}
