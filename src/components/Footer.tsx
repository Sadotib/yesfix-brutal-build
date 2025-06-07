
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-brutalist-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="brutalist-border brutalist-shadow bg-brutalist-yellow px-4 py-2 inline-block mb-4">
              <h3 className="text-2xl font-black text-brutalist-black">
                YES<span className="text-white bg-brutalist-black px-1">FIX</span>
              </h3>
            </div>
            <p className="text-lg font-bold text-brutalist-grey mb-6">
              ORGANIZING INDIA'S SKILLED WORKFORCE. 
              CONNECTING CUSTOMERS WITH VERIFIED LOCAL PROFESSIONALS.
            </p>
            <div className="flex space-x-4">
              <div className="brutalist-border bg-brutalist-black p-2 hover:bg-brutalist-yellow transition-colors cursor-pointer">
                <Facebook size={20} className="text-white hover:text-brutalist-black" />
              </div>
              <div className="brutalist-border bg-brutalist-black p-2 hover:bg-brutalist-yellow transition-colors cursor-pointer">
                <Twitter size={20} className="text-white hover:text-brutalist-black" />
              </div>
              <div className="brutalist-border bg-brutalist-black p-2 hover:bg-brutalist-yellow transition-colors cursor-pointer">
                <Instagram size={20} className="text-white hover:text-brutalist-black" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black text-brutalist-black mb-4">SERVICES</h4>
            <ul className="space-y-2 font-bold text-brutalist-grey">
              <li className="hover:text-brutalist-yellow cursor-pointer">ELECTRICAL WORK</li>
              <li className="hover:text-brutalist-yellow cursor-pointer">PLUMBING SERVICES</li>
              <li className="hover:text-brutalist-yellow cursor-pointer">AC REPAIR</li>
              <li className="hover:text-brutalist-yellow cursor-pointer">APPLIANCE REPAIR</li>
              <li className="hover:text-brutalist-yellow cursor-pointer">EMERGENCY SERVICE</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black text-brutalist-black mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-brutalist-yellow" />
                <span className="font-bold text-brutalist-grey">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-brutalist-yellow" />
                <span className="font-bold text-brutalist-grey">hello@yesfix.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-brutalist-yellow" />
                <span className="font-bold text-brutalist-grey">Bangalore, Mumbai, Pune</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-brutalist-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-black text-brutalist-black mb-4 md:mb-0">
            © 2024 YESFIX. ALL RIGHTS RESERVED.
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
