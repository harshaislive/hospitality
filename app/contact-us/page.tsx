"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useActionState } from 'react';
import { submitContactForm } from '../actions/contact';

export default function ContactUs() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <main className="w-full min-h-screen bg-off-white">
      <Header />
      
      <section className="pt-[140px] pb-20 px-5 md:px-[60px] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-[2.5rem] md:text-[3.5rem] italic text-dark-earth mb-6 leading-[1.1]">
              Blyton Bungalow: Where Your Coorg Adventure Begins
            </h1>
            <p className="text-[1.1rem] text-dark-earth/80 leading-relaxed mb-10 font-sans font-light">
              Discover the serenity and beauty of Coorg from Blyton Bungalow, your gateway to exploring the enchanting landscapes and rich cultural heritage of the Western Ghats.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[0.9rem] uppercase tracking-[2px] font-normal text-rich-red mb-2">Write to us</h3>
                <a href="mailto:hello@beforest.co" className="text-[1.2rem] text-dark-earth hover:italic transition-all block mb-2">
                  hello@beforest.co
                </a>
                <a href="tel:+919611435425" className="text-[1.2rem] text-dark-earth hover:italic transition-all block">
                  +91 96114 35425
                </a>
                <p className="text-[0.9rem] text-dark-earth/60 mt-1">for any queries</p>
              </div>

              <div>
                <h3 className="text-[0.9rem] uppercase tracking-[2px] font-normal text-rich-red mb-2">Address</h3>
                <p className="text-[1.1rem] text-dark-earth leading-relaxed">
                  Blyton Bungalow, Poomaale Estate,<br />
                  Naladi, Kakkabe, Coorg,<br />
                  Karnataka 571212
                </p>
              </div>

              <div>
                 <p className="text-[1rem] text-dark-earth/80 italic">Poomaale Estate LLP</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-10 shadow-lg rounded-sm">
            <form action={formAction} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-[0.9rem] text-dark-earth mb-2">First name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName" 
                    placeholder="ex. Mike"
                    required
                    className="w-full border border-gray-300 p-3 text-dark-earth focus:outline-none focus:border-rich-red transition-colors rounded-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-[0.9rem] text-dark-earth mb-2">Last name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName" 
                    placeholder="ex. Scott"
                    required
                    className="w-full border border-gray-300 p-3 text-dark-earth focus:outline-none focus:border-rich-red transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[0.9rem] text-dark-earth mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="ex. Email"
                  required
                  className="w-full border border-gray-300 p-3 text-dark-earth focus:outline-none focus:border-rich-red transition-colors rounded-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[0.9rem] text-dark-earth mb-2">Phone number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  placeholder="ex. Phone"
                  className="w-full border border-gray-300 p-3 text-dark-earth focus:outline-none focus:border-rich-red transition-colors rounded-sm"
                />
              </div>

              <div className="flex items-center gap-3 mt-2">
                <input 
                  type="checkbox" 
                  id="terms"
                  name="terms" 
                  required
                  className="w-5 h-5 accent-rich-red cursor-pointer"
                />
                <label htmlFor="terms" className="text-[0.9rem] text-dark-earth cursor-pointer select-none">
                  I accept the <Link href="/terms-and-conditions" className="text-soft-green hover:underline">Terms & Conditions</Link>
                </label>
              </div>

              {state?.message && (
                <div className={`p-4 text-sm rounded-sm ${state.success ? 'bg-soft-green/20 text-forest-green' : 'bg-red-50 text-rich-red'}`}>
                  {state.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isPending}
                className="mt-4 bg-forest-green text-white py-4 px-8 uppercase tracking-[2px] text-[0.8rem] hover:bg-dark-earth transition-colors duration-300 shadow-md w-full md:w-auto self-start disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Immersive Map Section */}
      <section className="w-full h-[500px] md:h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.052013867934!2d75.6106229!3d12.244757499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4516819164faf%3A0xc1ed3d0f2f2eb84!2sBlyton%20Bungalow!5e0!3m2!1sen!2sin!4v1766492216345!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_10px_50px_rgba(0,0,0,0.1)]"></div>
      </section>

      <Footer />
    </main>
  );
}