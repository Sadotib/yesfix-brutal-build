
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "PARTHA SHARMA",
      location: "Dibrugarh",
      rating: 5,
      text: "Amazing service! The app made booking so easy and the technician arrived exactly on time. My AC is working perfectly now.",
      service: "AC Repair"
    },
    {
      name: "BITOPAN DAS", 
      location: "Dibrugarh",
      rating: 5,
      text: "Quick and professional plumbing service. The app tracking feature is fantastic - I knew exactly when they would arrive.",
      service: "Plumbing"
    },
    {
      name: "NITISH KUMAR",
      location: "Dibrugarh", 
      rating: 5,
      text: "Excellent electrical work! Fixed my wiring issues promptly. The fixed pricing through the app is very transparent.",
      service: "Electrical"
    },
    {
      name: "PRIYA GOGOI",
      location: "Dibrugarh",
      rating: 5,
      text: "Best cleaning service in town! The team was thorough and professional. Will definitely book again through the app.",
      service: "Home Cleaning"
    },
    {
      name: "RAJESH CHOUDHURY",
      location: "Dibrugarh",
      rating: 5,
      text: "Fast and reliable service. The app is user-friendly and the technician was skilled and courteous.",
      service: "Appliance Repair"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleExternalLink = (platform: string) => {
    const links: { [key: string]: string } = {
      google: 'https://www.google.com/search?q=YesFix+Dibrugarh+reviews',
      playstore: 'https://play.google.com/store/apps/details?id=com.yesfix.app',
      appstore: 'https://apps.apple.com/app/yesfix/id123456789'
    };
    window.open(links[platform], '_blank');
  };

  return (
    <section id="testimonials" className="py-20 bg-brutalist-grey">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">WHAT OUR HAPPY CUSTOMERS SAY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
            REAL PEOPLE
            <br />
            <span className="text-brutalist-yellow text-stroke-black">REAL REVIEWS</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="brutalist-card bg-white">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, idx) => (
                <Star key={idx} size={24} className="fill-brutalist-yellow text-brutalist-yellow stroke-black" />
              ))}
            </div>
            
            {/* Service Badge */}
            <div className="text-center mb-4">
              <div className="brutalist-border bg-brutalist-black text-white px-3 py-1 inline-block">
                <span className="text-sm font-black uppercase">{testimonials[currentIndex].service}</span>
              </div>
            </div>
            
            {/* Quote */}
            <blockquote className="text-xl font-bold text-brutalist-black mb-6 leading-tight text-center">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            {/* Author */}
            <div className="border-t-4 border-brutalist-grey pt-4 text-center">
              <div className="font-black text-brutalist-black">{testimonials[currentIndex].name}</div>
              <div className="font-bold text-brutalist-grey text-sm">{testimonials[currentIndex].location}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 brutalist-border bg-brutalist-yellow p-2 hover:bg-brutalist-black hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 brutalist-border bg-brutalist-yellow p-2 hover:bg-brutalist-black hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Review Platform Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => handleExternalLink('google')}
            className="brutalist-button bg-brutalist-yellow text-brutalist-black"
          >
            VIEW GOOGLE REVIEWS
          </button>
          <button 
            onClick={() => handleExternalLink('playstore')}
            className="brutalist-button bg-white text-brutalist-black"
          >
            PLAY STORE REVIEWS
          </button>
          <button 
            onClick={() => handleExternalLink('appstore')}
            className="brutalist-button bg-brutalist-black text-white"
          >
            APP STORE REVIEWS
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">4.8★</div>
            <div className="text-white font-bold">AVERAGE RATING</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">500+</div>
            <div className="text-white font-bold">HAPPY CUSTOMERS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-brutalist-yellow mb-2">< 30 MIN</div>
            <div className="text-white font-bold">AVG RESPONSE TIME</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
