
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "HOW DO I BOOK A SERVICE?",
      answer: "Simply download the YesFix app from Google Play Store or Apple App Store, create an account, select your service, and book instantly. You can track your service provider in real-time through the app."
    },
    {
      question: "IS WHATSAPP BOOKING AVAILABLE?",
      answer: "Yes! While we recommend using our app for the best experience, you can also reach out to us via WhatsApp at +91 84863 97809 for booking assistance and support."
    },
    {
      question: "WHAT SERVICES ARE AVAILABLE?",
      answer: "We provide electrical repairs, plumbing, home cleaning, AC service, appliance repairs, and general maintenance. All services are bookable through our mobile app."
    },
    {
      question: "WHAT ARE YOUR SERVICE AREAS?",
      answer: "We currently serve Dibrugarh and nearby areas. You can check service availability in your location through the YesFix app."
    },
    {
      question: "HOW DO I TRACK MY SERVICE PROVIDER?",
      answer: "Once you book through the app, you'll receive real-time updates about your service provider's location and estimated arrival time directly in the app."
    },
    {
      question: "WHAT IS YOUR GUARANTEE POLICY?",
      answer: "We offer a 30-day service guarantee on all our work. If you're not satisfied, contact us through the app or WhatsApp for resolution."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-black text-white px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-brutalist-black leading-none mb-6">
            GOT
            <br />
            <span className="text-brutalist-yellow text-stroke-black">QUESTIONS?</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="brutalist-card bg-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-black text-brutalist-black pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-brutalist-black flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-brutalist-black flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t-4 border-brutalist-grey">
                  <p className="text-lg font-bold text-brutalist-grey leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
