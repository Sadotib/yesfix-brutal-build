
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
              ORGANIZING THE
              <br />
              <span className="text-brutalist-yellow">UNORGANIZED</span>
            </h2>
            
            <div className="space-y-6 text-lg font-bold text-brutalist-grey">
              <p>
                WE SAW A PROBLEM: SKILLED WORKERS STRUGGLING TO FIND WORK, 
                CUSTOMERS STRUGGLING TO FIND RELIABLE SERVICE.
              </p>
              
              <p>
                YESFIX BRIDGES THIS GAP. WE CONNECT LOCAL ELECTRICIANS, 
                PLUMBERS, AND REPAIR EXPERTS WITH PEOPLE WHO NEED THEIR SERVICES.
              </p>
              
              <p>
                NO MORE GUESSWORK. NO MORE DELAYS. JUST PROFESSIONAL, 
                VERIFIED WORKERS READY TO FIX YOUR PROBLEMS.
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
              <Target size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-brutalist-black mb-3">OUR MISSION</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                TO ORGANIZE INDIA'S SKILLED WORKFORCE AND PROVIDE RELIABLE HOME SERVICES TO EVERY FAMILY.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              <Heart size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-brutalist-black mb-3">OUR VALUES</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                FAIRNESS FOR WORKERS. QUALITY FOR CUSTOMERS. TRANSPARENCY IN EVERY TRANSACTION.
              </p>
            </div>

            <div className="brutalist-card group hover:bg-brutalist-yellow transition-colors">
              <Zap size={48} className="text-brutalist-black mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-brutalist-black mb-3">OUR PROMISE</h3>
              <p className="text-lg font-bold text-brutalist-grey group-hover:text-brutalist-black">
                VERIFIED PROFESSIONALS. QUICK RESPONSE. GUARANTEED SATISFACTION OR YOUR MONEY BACK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
