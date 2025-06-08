
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "PARTHA",
      location: "Bangalore",
      rating: 5,
      text: "[INSERT]",
      service: "AC Repair"
    },
    {
      name: "BITOPAN", 
      location: "Mumbai",
      rating: 5,
      text: "[INSERT]",
      service: "Plumbing"
    },
    {
      name: "NITISH",
      location: "Pune", 
      rating: 5,
      text: "[INSERT]",
      service: "Electrical"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brutalist-grey">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">WHY PEOPLE LOVE YESFIX</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
            REAL PEOPLE
            <br />
            <span className="text-brutalist-yellow">REAL FIXES</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="brutalist-card bg-white">
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} size={24} className="fill-brutalist-yellow text-brutalist-yellow" />
                ))}
              </div>
              
              {/* Service Badge */}
              <div className="brutalist-border bg-brutalist-black text-white px-3 py-1 inline-block mb-4">
                <span className="text-sm font-black uppercase">{testimonial.service}</span>
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg font-bold text-brutalist-black mb-6 leading-tight">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="border-t-4 border-brutalist-yellow pt-4">
                <div className="font-black text-brutalist-black">{testimonial.name}</div>
                <div className="font-bold text-brutalist-grey text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">[INSERT]</div>
            <div className="text-white font-bold">AVERAGE RATING</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">[INSERT]</div>
            <div className="text-white font-bold">HAPPY CUSTOMERS</div>
          </div>
          {/* <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">[INSERT]</div>
            <div className="text-white font-bold">SATISFACTION RATE</div>
          </div> */}
          <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">[INSERT]</div>
            <div className="text-white font-bold">AVG RESPONSE TIME</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
