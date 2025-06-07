
import { ArrowRight, Zap, Wrench, Hammer, Calendar, Info } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-brutalist-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-brutalist-yellow"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-4 py-2 inline-block">
                <span className="text-sm font-black uppercase tracking-wider">Local • Reliable • Fast</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-none">
                FIX IT
                <br />
                <span className="text-brutalist-yellow">RIGHT</span>
                <br />
                <span className="relative">
                  NOW
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-brutalist-yellow"></div>
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-bold text-brutalist-light-grey max-w-lg">
              YOUR LOCAL NETWORK OF SKILLED ELECTRICIANS, PLUMBERS & REPAIR EXPERTS. 
              ORGANIZED. PROFESSIONAL. READY.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="brutalist-button bg-brutalist-yellow text-brutalist-black group">
                <Calendar className="inline w-6 h-6 mr-2" />
                PRE BOOK NOW
                <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="brutalist-border bg-transparent text-white brutalist-shadow hover:bg-white hover:text-brutalist-black transition-colors px-8 py-4 font-black text-lg uppercase tracking-wider group">
                <Info className="inline w-6 h-6 mr-2" />
                LEARN MORE
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-brutalist-yellow">500+</div>
                <div className="text-sm font-bold uppercase">Jobs Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brutalist-yellow">50+</div>
                <div className="text-sm font-bold uppercase">Local Pros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brutalist-yellow">24/7</div>
                <div className="text-sm font-bold uppercase">Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="brutalist-card bg-brutalist-yellow text-brutalist-black animate-bounce-in">
                <Zap size={48} className="mb-4" />
                <h3 className="text-xl font-black">ELECTRICAL</h3>
                <p className="font-bold">Wiring • Repairs • Installation</p>
              </div>
              
              <div className="brutalist-card bg-white text-brutalist-black animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                <Wrench size={48} className="mb-4" />
                <h3 className="text-xl font-black">PLUMBING</h3>
                <p className="font-bold">Pipes • Leaks • Fixtures</p>
              </div>
              
              <div className="brutalist-card bg-brutalist-grey text-white animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <Hammer size={48} className="mb-4" />
                <h3 className="text-xl font-black">REPAIRS</h3>
                <p className="font-bold">AC • Appliances • General</p>
              </div>
              
              <div className="brutalist-card bg-brutalist-yellow text-brutalist-black animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl font-black mb-4">24/7</div>
                <h3 className="text-xl font-black">EMERGENCY</h3>
                <p className="font-bold">Always Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
