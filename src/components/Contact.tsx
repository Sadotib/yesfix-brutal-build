
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918486397809', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918486397809', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:support@yesfix.in', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-brutalist-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">CONTACT US</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-none mb-6">
            GET IN
            <br />
            <span className="text-brutalist-yellow">TOUCH</span>
          </h2>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div 
            className="brutalist-card bg-white text-brutalist-black text-center cursor-pointer hover:bg-brutalist-yellow transition-colors"
            onClick={handlePhoneClick}
          >
            <Phone size={48} className="mx-auto mb-4 text-brutalist-grey" />
            <h3 className="text-xl font-black mb-2">CALL US</h3>
            <p className="text-lg font-bold">+91 84863 97809</p>
          </div>

          <div 
            className="brutalist-card bg-white text-brutalist-black text-center cursor-pointer hover:bg-brutalist-yellow transition-colors"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle size={48} className="mx-auto mb-4 text-brutalist-grey" />
            <h3 className="text-xl font-black mb-2">WHATSAPP CHAT</h3>
            <p className="text-lg font-bold">INSTANT SUPPORT</p>
          </div>

          <div 
            className="brutalist-card bg-white text-brutalist-black text-center cursor-pointer hover:bg-brutalist-yellow transition-colors"
            onClick={handleEmailClick}
          >
            <Mail size={48} className="mx-auto mb-4 text-brutalist-grey" />
            <h3 className="text-xl font-black mb-2">EMAIL US</h3>
            <p className="text-lg font-bold">support@yesfix.in</p>
          </div>
        </div>

        {/* Service Area */}
        <div className="text-center">
          <div className="brutalist-card bg-brutalist-grey text-white inline-block">
            <MapPin size={32} className="inline mr-3" />
            <span className="text-xl font-black">SERVICE AREAS: DIBRUGARH & NEARBY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
