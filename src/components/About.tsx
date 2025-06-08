
import { Target, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="brutalist-border bg-brutalist-black text-white px-6 py-3 inline-block mb-6">
              <span className="text-lg font-black uppercase tracking-wider">About YesFix</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-brutalist-black leading-none mb-6">
              <span className="text-brutalist-yellow">YES</span>
              FIX! THE GAMUSA OF SERVICES
              <br />

            </h2>

            <div className="space-y-6 text-lg font-bold text-brutalist-grey">
              <p>
                YesFix! is an on-demand service provider startup focused on tier-2 and tier-3 cities, where quality home services are still untapped. We offer electricians, plumbers, cleaning, appliance repair, and more, ensuring fast, reliable, and affordable services. We are not India’s first, but we are building India’s best option!
              </p>
              <p>
                What YesFix! Solves
                <br />
                1.Unreliable & Delayed Local Services
                <br />
                2.Lack of Trust & Standard Pricing
                <br />
                3.No Quick Commerce in Services
                <br />
                4.Corporate Maintenance Gaps
              </p>
            </div>

            <div className="mt-8">
              <button className="brutalist-button">
                JOIN OUR NETWORK
              </button>
            </div>
          </div>

          {/* Right Content - Values */}

          <div className="space-y-8">
            
            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              {/* <Target size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" /> */}
              <h3 className="text-2xl font-black text-brutalist-black mb-3">1.</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                We bring fast & professional service.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              {/* <Heart size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" /> */}
              <h3 className="text-2xl font-black text-brutalist-black mb-3">2.</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                Fixed pricing, no overcharging.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              {/* <Zap size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" /> */}
              <h3 className="text-2xl font-black text-brutalist-black mb-3">3.
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                Instant availability in tier-2 & tier-3 cities.
              </p></h3>
            </div>
            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              {/* <Target size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" /> */}
              <h3 className="text-2xl font-black text-brutalist-black mb-3">4.</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                Dedicated service plans for offices & businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
