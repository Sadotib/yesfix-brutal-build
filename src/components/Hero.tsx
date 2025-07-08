
import { ArrowRight, Download, MessageCircle, Smartphone, Play, Zap, Shield, MapPin } from 'lucide-react';

const Hero = () => {
  const handlePlayStoreClick = () => {
    // Replace with actual Play Store link
    window.open('https://play.google.com/store/apps/details?id=com.yesfix.app', '_blank');
  };

  const handleAppStoreClick = () => {
    // Replace with actual App Store link
    window.open('https://apps.apple.com/app/yesfix/id123456789', '_blank');
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp Business number
    window.open('https://wa.me/918486397809', '_blank');
  };

  const services = ['Home Cleaning', 'Electrical Repairs', 'Plumbing', 'AC Service', 'Appliance Fixes'];

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
              <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-4 py-2 inline-block animate-bounce">
                <span className="text-sm font-black uppercase tracking-wider">🎉 NOW AVAILABLE ON ANDROID & iOS!</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-none">
                YESFIX
                <br />
                <span className="text-brutalist-yellow">DIBRUGARH'S</span>
                <br />
                MOST RELIABLE
                <br />
                <span className="text-brutalist-yellow relative">
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

            {/* Services Slider */}
            <div className="brutalist-border bg-brutalist-grey p-4">
              <div className="flex space-x-4 overflow-x-auto">
                {services.map((service, index) => (
                  <div key={index} className="brutalist-border bg-brutalist-yellow text-brutalist-black px-4 py-2 whitespace-nowrap">
                    <span className="font-black text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handlePlayStoreClick}
                className="brutalist-button bg-brutalist-yellow text-brutalist-black group flex items-center justify-center"
              >
                <Play className="inline w-6 h-6 mr-2 fill-current" />
                GOOGLE PLAY
                <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleAppStoreClick}
                className="brutalist-button bg-white text-brutalist-black group flex items-center justify-center"
              >
                <Smartphone className="inline w-6 h-6 mr-2" />
                APP STORE
                <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="brutalist-border bg-transparent text-white brutalist-shadow hover:bg-brutalist-yellow hover:text-brutalist-black transition-colors px-8 py-4 font-black text-lg uppercase tracking-wider group w-full sm:w-auto flex items-center justify-center"
            >
              <MessageCircle className="inline w-6 h-6 mr-2" />
              CHAT WITH US ON WHATSAPP
            </button>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            <div className="brutalist-card bg-brutalist-yellow text-brutalist-black p-8 text-center">
              <div className="relative">
                <Smartphone size={120} className="mx-auto mb-4" />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-20 bg-brutalist-black rounded-sm opacity-80"></div>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4">YESFIX APP IS LIVE!</h3>
              <p className="font-bold mb-4">DOWNLOAD NOW FOR INSTANT SERVICE BOOKING</p>
              <div className="brutalist-border bg-brutalist-black text-white px-4 py-2 inline-block">
                <span className="font-black text-sm">AVAILABLE ON BOTH PLATFORMS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights - Fast | Reliable | Local */}
        <div className="grid grid-cols-3 gap-6 pt-16">
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-4 inline-block mb-4">
              <Zap size={32} className="text-brutalist-black" />
            </div>
            <div className="text-xl font-black text-brutalist-yellow">FAST</div>
            <div className="text-sm font-bold uppercase">INSTANT APP BOOKING</div>
          </div>
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-4 inline-block mb-4">
              <Shield size={32} className="text-brutalist-black" />
            </div>
            <div className="text-xl font-black text-brutalist-yellow">RELIABLE</div>
            <div className="text-sm font-bold uppercase">VERIFIED PROFESSIONALS</div>
          </div>
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-4 inline-block mb-4">
              <MapPin size={32} className="text-brutalist-black" />
            </div>
            <div className="text-xl font-black text-brutalist-yellow">LOCAL</div>
            <div className="text-sm font-bold uppercase">PROUDLY SERVING DIBRUGARH</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
