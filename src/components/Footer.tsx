
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Download, Smartphone } from 'lucide-react';

const Footer = () => {
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com', '_blank');
  };

  return (
    <footer className="bg-white border-t-4 border-brutalist-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="brutalist-border brutalist-shadow bg-brutalist-yellow px-4 py-2 inline-block mb-4">
              <h3 className="text-2xl font-black text-brutalist-black">
                YES<span className="text-white bg-brutalist-black px-1">FIX</span>
              </h3>
            </div>
            <p className="text-lg font-bold text-brutalist-grey mb-6">
              DIBRUGARH'S MOST RELIABLE CLEANING & FIXING SERVICES. 
              CONNECTING CUSTOMERS WITH VERIFIED LOCAL PROFESSIONALS.
            </p>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={handlePlayStoreClick}
                className="brutalist-border bg-brutalist-black text-white px-4 py-2 hover:bg-brutalist-yellow hover:text-brutalist-black transition-colors font-black text-sm uppercase"
              >
                <Download className="inline w-4 h-4 mr-2" />
                PLAY STORE
              </button>
              <button 
                onClick={handleAppStoreClick}
                className="brutalist-border bg-brutalist-black text-white px-4 py-2 hover:bg-brutalist-yellow hover:text-brutalist-black transition-colors font-black text-sm uppercase"
              >
                <Smartphone className="inline w-4 h-4 mr-2" />
                APP STORE
              </button>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="brutalist-border bg-brutalist-black p-2 hover:bg-brutalist-yellow transition-colors cursor-pointer">
                  <Facebook size={20} className="text-white hover:text-brutalist-black"/>  
                </div>
              </a>
              <div className="brutalist-border bg-brutalist-black p-2 hover:bg-brutalist-yellow transition-colors cursor-pointer">
                <Twitter size={20} className="text-white hover:text-brutalist-black" />
              </div>
              <div className="brutalist-border bg-brutalist-black p-2 hover:bg-brutalist-yellow transition-colors cursor-pointer">
                <Instagram size={20} className="text-white hover:text-brutalist-black" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black text-brutalist-black mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="fill-brutalist-yellow text-brutalist-yellow stroke-black" />
                <span className="font-bold text-brutalist-grey">+91 84863 97809</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="fill-brutalist-yellow text-brutalist-yellow stroke-black" />
                <span className="font-bold text-brutalist-grey">support@yesfix.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="fill-brutalist-yellow text-brutalist-yellow stroke-black" />
                <span className="font-bold text-brutalist-grey">DIBRUGARH & NEARBY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-brutalist-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-black text-brutalist-black mb-4 md:mb-0">
            © 2024 YESFIX. ALL RIGHTS RESERVED. PROUDLY SERVING DIBRUGARH.
          </div>
          <div className="flex space-x-6 font-bold text-brutalist-grey">
            <a href="#" className="hover:text-brutalist-yellow">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brutalist-yellow">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-brutalist-yellow">JOIN AS WORKER</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
