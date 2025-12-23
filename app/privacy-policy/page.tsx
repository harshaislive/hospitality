import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen bg-off-white">
      <Header />
      
      <div className="pt-[140px] pb-20 px-5 md:px-[60px] max-w-[900px] mx-auto">
        <h1 className="text-[2.5rem] md:text-[3.5rem] italic text-dark-earth mb-10 leading-tight">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg text-dark-earth/90 space-y-8 font-sans">
          
          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Name:</strong> We may collect your name when you voluntarily provide it to us through forms or inquiries on our website.</li>
              <li><strong>Email Address:</strong> Your email address may be collected when you subscribe to our newsletter, make a booking inquiry, or contact us through our website.</li>
              <li><strong>Phone Number:</strong> We may collect your phone number if you provide it to us for communication purposes.</li>
              <li><strong>Are You a Member of Beforest:</strong> We may ask whether you are a member of Beforest to better understand our audience and tailor our services accordingly.</li>
              <li><strong>How Did You Hear About Us:</strong> We may ask how you heard about us to evaluate the effectiveness of our marketing efforts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">2. Use of Information</h2>
            <p className="mb-2">We use the information collected for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To process bookings and reservations.</li>
              <li>To send promotional offers, newsletters, and updates about our services.</li>
              <li>To improve our website and enhance user experience.</li>
              <li>To analyze trends and demographics of our website visitors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">3. Legal Basis for Processing</h2>
            <p>
              We rely on your consent to process personal data when you voluntarily provide it to us. By providing your information, you consent to its collection, use, and processing as described in this privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website or conducting our business, as long as they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">6. User Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also request to restrict the processing of your data or object to its processing. To exercise these rights or if you have any questions regarding your personal data, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">7. Security Measures</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">8. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookies preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">10. Changes to the Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">11. Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding this privacy policy or the handling of your personal data, please contact us at <a href="mailto:hello@beforest.co" className="text-rich-red hover:italic">hello@beforest.co</a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
