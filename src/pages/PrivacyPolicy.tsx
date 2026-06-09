import { Section, SectionTitle } from '../components/ui/Section';

export default function PrivacyPolicy() {
  const lastUpdated = "October 2023";

  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-20">
      <Section className="py-12">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 border-brand-gold/20">
          <SectionTitle title="Privacy Policy" subtitle="Legal" align="left" />
          
          <div className="prose prose-invert prose-brand prose-p:text-brand-cream/80 prose-headings:text-white prose-headings:font-serif prose-a:text-brand-gold max-w-none space-y-8 mt-10">
            <p className="text-sm text-brand-gold italic">Last Updated: {lastUpdated}</p>

            <div>
               <h3 className="text-2xl font-serif text-white mb-4">1. Information Collection</h3>
               <p className="text-brand-cream/80 leading-relaxed">
                  We collect information from you when you register on our site, book an appointment, subscribe to our newsletter, respond to a survey, or fill out a form. The types of personal information collected may include your name, email address, mailing address, phone number, and service history.
               </p>
            </div>

            <div>
               <h3 className="text-2xl font-serif text-white mb-4">2. Usage of Information</h3>
               <p className="text-brand-cream/80 leading-relaxed mb-4">Any of the information we collect from you may be used in one of the following ways:</p>
               <ul className="list-disc pl-6 text-brand-cream/80 space-y-2">
                  <li>To personalize your experience and better respond to your individual needs.</li>
                  <li>To improve our salon services and website offerings based on your feedback.</li>
                  <li>To process transactions securely.</li>
                  <li>To send periodic emails regarding appointments, promotions, or salon news.</li>
               </ul>
            </div>

            <div>
               <h3 className="text-2xl font-serif text-white mb-4">3. Data Protection & Security</h3>
               <p className="text-brand-cream/80 leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
               </p>
            </div>

            <div>
               <h3 className="text-2xl font-serif text-white mb-4">4. Cookies Usage</h3>
               <p className="text-brand-cream/80 leading-relaxed">
                  Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. We use cookies to understand and save your preferences for future visits.
               </p>
            </div>

            <div>
               <h3 className="text-2xl font-serif text-white mb-4">5. Your Consent & Rights</h3>
               <p className="text-brand-cream/80 leading-relaxed">
                  By using our site, you consent to our website's privacy policy. You have the right to request access to the personal information we hold about you, to request corrections to any inaccurate data, and to request the deletion of your data when it is no longer necessary for the purposes it was collected.
               </p>
            </div>

            <div className="pt-8 border-t border-brand-gold/20 mt-12">
               <h3 className="text-2xl font-serif text-white mb-4">Contact Information</h3>
               <p className="text-brand-cream/80 leading-relaxed mb-1">The Wave "L'Oréal Professional" Unisex Salon</p>
               <p className="text-brand-cream/80 leading-relaxed mb-1">1st floor, central bus stand, opposite of petrol pump, near mio amore, Jalkhabar, Contai, Banamali Pur, West Bengal 721401</p>
               <p className="text-brand-cream/80 leading-relaxed">Phone: 080163 90833</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
