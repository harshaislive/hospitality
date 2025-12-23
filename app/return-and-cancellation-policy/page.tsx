import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CancellationPolicy() {
  return (
    <main className="w-full min-h-screen bg-off-white">
      <Header />
      
      <div className="pt-[140px] pb-20 px-5 md:px-[60px] max-w-[900px] mx-auto">
        <h1 className="text-[2.5rem] md:text-[3.5rem] italic text-dark-earth mb-10 leading-tight">
          Return and Cancellation Policy
        </h1>
        
        <div className="prose prose-lg text-dark-earth/90 space-y-8 font-sans">
          <p className="text-[1.1rem] leading-relaxed">
            We understand that plans may change, requiring the cancellation or modification of your reservation. Below is our detailed cancellation policy to assist you in managing your booking effectively:
          </p>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Cancellation Notice and Fees</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Free Cancellation:</strong> Reservations canceled up to 15 days before the scheduled arrival date will not incur any fees.</li>
              <li><strong>Partial Charge:</strong> Cancellations made more than 5 days in advance but less than 15 days will incur a charge of 50% of the total booking amount.</li>
              <li><strong>Full Charge:</strong> Cancellations made within 5 days of the scheduled arrival, including no-shows, will incur a 100% charge of the booking amount.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Cancellation and Modification Process</h2>
            <p>
              To cancel or modify your reservation, please contact us directly using the contact information provided on our website or in your booking confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Refunds</h2>
            <p>
              The full booking amount must be paid in advance and is non-refundable, except under the terms of our cancellation notice period. Upon cancellation, eligible refunds (based on the notice period) will be processed as per our policy.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">No-Shows</h2>
            <p>
              Failure to arrive at our property on the scheduled arrival date without prior notice will be treated as a no-show, incurring a 100% charge of the booking amount.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Early Departures</h2>
            <p>
              No refunds will be issued for early departures or unused nights.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Special Circumstances</h2>
            <p>
              We understand that certain situations may warrant exceptions to our standard cancellation policy. If you have extenuating circumstances, please contact us directly to discuss your situation.
            </p>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Policy Updates</h2>
            <p>
              We reserve the right to cancel or modify reservations where it appears that a customer has engaged in fraudulent or inappropriate activity, or under other circumstances where it appears that the reservations contain or resulted from a mistake or error. We also reserve the right to update our cancellation policy as necessary. Any changes will be communicated to you in advance.
            </p>
          </section>

          <section className="bg-dark-earth/5 p-6 rounded-sm border-l-4 border-rich-red">
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Important Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Please ensure you carry a valid government-issued photo identity and address proof for the Check-In procedure.</li>
              <li><strong>Note:</strong> PAN Card is not accepted as a valid identity card.</li>
              <li><strong>Check-In & Check-Out:</strong> Check-In time is 12 noon, and Check-Out time is 11 a.m.</li>
              <li><strong>Breakfast:</strong> Breakfast is served from 8:30 to 9:30 am. Requests outside these hours will be chargeable.</li>
              <li><strong>Modifications:</strong> Prior information is required at least a week before your Check-In date for any alterations in booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.5rem] font-serif italic mb-4 text-dark-earth">Contact Information</h2>
            <p>
              For any questions or concerns regarding our cancellation policy, please don't hesitate to contact us at: <a href="mailto:hello@beforest.co" className="text-rich-red hover:italic">hello@beforest.co</a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
