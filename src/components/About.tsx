
import { Target, Heart, Zap, Smartphone } from 'lucide-react';

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
              <span className="text-brutalist-yellow text-stroke-black">YESFIX APP</span>
              <br />
              IS NOW LIVE!
              <br />
              THE GAMUSA OF SERVICES
            </h2>

            <div className="space-y-6 text-lg font-bold text-brutalist-grey">
              <div className="brutalist-border bg-brutalist-yellow text-brutalist-black p-4">
                <p className="font-black">
                  🎉 OUR APP IS NOW AVAILABLE ON ANDROID & iOS! 
                  Download today and experience seamless service booking.
                </p>
              </div>
              
              <p>
                YesFix! is an on-demand service provider startup focused on tier-2 and tier-3 cities, where quality home services are still untapped. We offer electricians, plumbers, cleaning, appliance repair, and more, ensuring fast, reliable, and affordable services through our mobile app.
              </p>
              
              <p>
                What YesFix! App Solves:
                <br />
                1. Unreliable & Delayed Local Services
                <br />
                2. Lack of Trust & Standard Pricing
                <br />
                3. No Quick Commerce in Services
                <br />
                4. Corporate Maintenance Gaps
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="brutalist-button flex items-center justify-center">
                <Smartphone className="w-5 h-5 mr-2" />
                DOWNLOAD APP NOW
              </button>
              <button className="brutalist-border bg-transparent text-brutalist-black brutalist-shadow hover:bg-brutalist-yellow transition-colors px-8 py-4 font-black text-lg uppercase tracking-wider">
                JOIN OUR NETWORK
              </button>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-8">
            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              <h3 className="text-2xl font-black text-brutalist-black mb-3">1. APP-POWERED SPEED</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                We bring fast & professional service through our mobile app.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              <h3 className="text-2xl font-black text-brutalist-black mb-3">2. TRANSPARENT PRICING</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                Fixed pricing through the app, no overcharging.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              <h3 className="text-2xl font-black text-brutalist-black mb-3">3. INSTANT AVAILABILITY</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                Book instantly through the app in tier-2 & tier-3 cities.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              <h3 className="text-2xl font-black text-brutalist-black mb-3">4. BUSINESS SOLUTIONS</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                Dedicated service plans for offices & businesses via app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
