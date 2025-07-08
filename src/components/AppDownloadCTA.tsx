
import { Download, MessageCircle, Smartphone } from 'lucide-react';

const AppDownloadCTA = () => {
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918486397809', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="brutalist-border bg-brutalist-black text-white px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">GET STARTED</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-brutalist-black leading-none mb-6">
            GET STARTED IN
            <br />
            <span className="text-brutalist-yellow text-stroke-black">2 MINUTES</span>
          </h2>

          <p className="text-xl font-bold text-brutalist-grey max-w-2xl mx-auto mb-8">
            DOWNLOAD THE YESFIX APP
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button 
            onClick={handlePlayStoreClick}
            className="brutalist-button bg-brutalist-yellow text-brutalist-black group"
          >
            <Download className="inline w-6 h-6 mr-2" />
            PLAY STORE
          </button>
          
          <button 
            onClick={handleAppStoreClick}
            className="brutalist-button bg-brutalist-black text-white group"
          >
            <Smartphone className="inline w-6 h-6 mr-2" />
            APP STORE
          </button>
        </div>

        {/* WhatsApp Alternative */}
        <div className="brutalist-card bg-brutalist-grey text-white max-w-md mx-auto">
          <h3 className="text-xl font-black mb-4">PREFER WHATSAPP?</h3>
          <button 
            onClick={handleWhatsAppClick}
            className="brutalist-button bg-brutalist-yellow text-brutalist-black group w-full"
          >
            <MessageCircle className="inline w-6 h-6 mr-2" />
            CHAT WITH US INSTANTLY
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
