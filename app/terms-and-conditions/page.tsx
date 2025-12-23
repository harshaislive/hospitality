import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <main className="w-full min-h-screen bg-off-white">
      <Header />
      
      <div className="pt-[140px] pb-20 px-5 md:px-[60px] max-w-[900px] mx-auto">
        <h1 className="text-[2.5rem] md:text-[3.5rem] italic text-dark-earth mb-10 leading-tight">
          Terms and Conditions
        </h1>
        
        <div className="prose prose-lg text-dark-earth/90 space-y-8 font-sans">
          <p className="text-[1.1rem] leading-relaxed">
            Welcome to the Blyton Bungalow website. These terms and conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our website.
          </p>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">1. Booking and Reservations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Booking Confirmation:</strong> All bookings and reservations are subject to availability and confirmation by Blyton Bungalow.</li>
              <li><strong>Payment:</strong> Full payment is required at the time of booking to confirm your reservation. We accept payment via major credit/debit cards and online banking.</li>
              <li><strong>Minimum Stay:</strong> Some reservations may require a minimum stay. Please check the booking details for any minimum stay requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">2. Check-In and Check-Out</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Check-In Time:</strong> Check-in time is 12:00 PM. Early check-in may be available upon request, subject to availability.</li>
              <li><strong>Check-Out Time:</strong> Check-out time is 11:00 AM. Late check-out may be available upon request, subject to availability and additional charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">3. Guest Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identification:</strong> All guests are required to present valid government-issued identification upon check-in.</li>
              <li><strong>Behavior:</strong> Guests are expected to conduct themselves in a respectful manner and adhere to the property rules and regulations.</li>
              <li><strong>Damages:</strong> Guests are responsible for any damages caused to the property during their stay and may be charged for repair or replacement costs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">4. Liability and Indemnity</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Limitation of Liability:</strong> Blyton Bungalow shall not be liable for any loss, injury, or damage to guests or their belongings, including but not limited to personal injury, theft, or property damage, unless caused by our negligence.</li>
              <li><strong>Indemnity:</strong> Guests agree to indemnify and hold Blyton Bungalow harmless from any claims, losses, damages, liabilities, and expenses arising out of or in connection with their use of our website or services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">5. Amendments and Cancellations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Amendments:</strong> Blyton Bungalow reserves the right to amend these terms and conditions at any time without prior notice. Any amendments will be effective immediately upon posting on our website.</li>
              <li><strong>Cancellation:</strong> Please refer to our <a href="/return-and-cancellation-policy" className="text-rich-red hover:italic">Return and Cancellation Policy</a> for information regarding cancellations and refunds.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">6. Governing Law</h2>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the laws of Karnataka Jurisdiction. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Karnataka Jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about these terms and conditions, please contact us at: <a href="mailto:hello@beforest.co" className="text-rich-red hover:italic">hello@beforest.co</a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
