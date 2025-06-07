
import { Zap, Wrench, Hammer, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "ELECTRICAL",
      description: "FROM SIMPLE REPAIRS TO COMPLETE REWIRING",
      features: ["Socket Installation", "Circuit Repairs", "Electrical Safety", "Emergency Fixes"],
      price: "₹500+"
    },
    {
      icon: Wrench,
      title: "PLUMBING", 
      description: "PIPES, LEAKS, AND EVERYTHING WATER",
      features: ["Leak Repairs", "Pipe Installation", "Bathroom Fitting", "Emergency Plumbing"],
      price: "₹800+"
    },
    {
      icon: Hammer,
      title: "REPAIRS",
      description: "AC, APPLIANCES, AND GENERAL MAINTENANCE",
      features: ["AC Service", "Appliance Repair", "Home Maintenance", "Emergency Service"],
      price: "₹600+"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-black text-white px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-brutalist-black leading-none mb-6">
            WE FIX
            <br />
            <span className="text-brutalist-yellow">EVERYTHING</span>
          </h2>
          
          <p className="text-xl font-bold text-brutalist-grey max-w-2xl mx-auto">
            PROFESSIONAL SERVICES FOR YOUR HOME AND OFFICE. 
            SKILLED WORKERS. FAIR PRICES. GUARANTEED RESULTS.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="brutalist-card group cursor-pointer">
              <div className="mb-6">
                <service.icon size={64} className="text-brutalist-yellow" />
              </div>
              
              <h3 className="text-2xl font-black text-brutalist-black mb-2">
                {service.title}
              </h3>
              
              <p className="text-lg font-bold text-brutalist-grey mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center font-bold">
                    <div className="w-2 h-2 bg-brutalist-yellow mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-brutalist-yellow">
                  {service.price}
                </span>
                <button className="brutalist-border bg-brutalist-black text-white px-6 py-2 font-black hover:bg-brutalist-yellow hover:text-brutalist-black transition-colors">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <Shield size={48} className="text-brutalist-black" />
            </div>
            <h4 className="text-xl font-black mb-2">VERIFIED WORKERS</h4>
            <p className="font-bold text-brutalist-grey">All our professionals are background-checked and certified</p>
          </div>
          
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <Clock size={48} className="text-brutalist-black" />
            </div>
            <h4 className="text-xl font-black mb-2">QUICK RESPONSE</h4>
            <p className="font-bold text-brutalist-grey">Same-day service available. Emergency calls within 2 hours</p>
          </div>
          
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <Users size={48} className="text-brutalist-black" />
            </div>
            <h4 className="text-xl font-black mb-2">LOCAL NETWORK</h4>
            <p className="font-bold text-brutalist-grey">Supporting local skilled workers in your neighborhood</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
