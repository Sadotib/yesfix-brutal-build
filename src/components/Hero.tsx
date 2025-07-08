
import { ArrowRight, Download, MessageCircle, Smartphone } from 'lucide-react';

const Hero = () => {
  const handlePlayStoreClick = () => {
    // Replace with actual Play Store link
    window.open('https://play.google.com/store', '_blank');
  };

  const handleAppStoreClick = () => {
    // Replace with actual App Store link
    window.open('https://apps.apple.com', '_blank');
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp Business number
    window.open('https://wa.me/918486397809', '_blank');
  };

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
                <span className="text-sm font-black uppercase tracking-wider">Now Available on Android & iOS!</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-none">
                YESFIX
                <br />
                <span className="text-brutalist-yellow">DIBRUGARH'S</span>
                <br />
                MOST RELIABLE
                <br />
                <span className="text-brutalist-yellow">
                  CLEANING & FIXING
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-brutalist-yellow"></div>
                </span>
                <br />
                SERVICES
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-bold text-brutalist-light-grey max-w-lg">
              BOOK SERVICES, TRACK BOOKINGS, AND ENJOY HASSLE-FREE HOME SERVICES THROUGH OUR APP
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handlePlayStoreClick}
                className="brutalist-button bg-brutalist-yellow text-brutalist-black group"
              >
                <Download className="inline w-6 h-6 mr-2" />
                GOOGLE PLAY
                <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleAppStoreClick}
                className="brutalist-button bg-white text-brutalist-black group"
              >
                <Smartphone className="inline w-6 h-6 mr-2" />
                APP STORE
                <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="brutalist-border bg-transparent text-white brutalist-shadow hover:bg-white hover:text-brutalist-black transition-colors px-8 py-4 font-black text-lg uppercase tracking-wider group w-full sm:w-auto"
            >
              <MessageCircle className="inline w-6 h-6 mr-2" />
              CHAT WITH US ON WHATSAPP
            </button>
          </div>

          {/* Right Content - App Mockup Placeholder */}
          <div className="relative">
            <div className="brutalist-card bg-brutalist-yellow text-brutalist-black p-8 text-center">
              <Smartphone size={120} className="mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-4">YESFIX APP</h3>
              <p className="font-bold">DOWNLOAD NOW FOR INSTANT SERVICE BOOKING</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8">
          <div className="text-center">
            <div className="text-xl font-black text-brutalist-yellow">FAST</div>
            <div className="text-sm font-bold uppercase">30 MIN RESPONSE</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black text-brutalist-yellow">RELIABLE</div>
            <div className="text-sm font-bold uppercase">VERIFIED PROFESSIONALS</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black text-brutalist-yellow">LOCAL</div>
            <div className="text-sm font-bold uppercase">PROUDLY SERVING DIBRUGARH</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
