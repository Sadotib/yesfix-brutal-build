
import { Zap, Wrench, Hammer, Shield, Clock, Users, IndianRupeeIcon, Check, Verified, VerifiedIcon, Timer, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "ELECTRICAL",
      description: "FROM SIMPLE REPAIRS TO COMPLETE REWIRING",
      // features: ["Socket Installation", "Circuit Repairs", "Electrical Safety", "Emergency Fixes"],

    },
    {
      icon: Wrench,
      title: "PLUMBING",
      description: "PIPES, LEAKS, AND EVERYTHING WATER",
      // features: ["Leak Repairs", "Pipe Installation", "Bathroom Fitting", "Emergency Plumbing"],

    },
    {
      icon: Hammer,
      title: "REPAIRS",
      description: "AC, APPLIANCES, AND GENERAL MAINTENANCE",
      // features: ["AC Service", "Appliance Repair", "Home Maintenance", "Emergency Service"],

    },
    {
      icon: ShieldCheck,
      title: "CLEANING",
      description: "GENERAL CLEANING AND DEEP SANITIZATION",
      // features: ["AC Service", "Appliance Repair", "Home Maintenance", "Emergency Service"],

    },
    // {
    //   icon: ShieldCheck,
    //   title: "",
    //   description: "GENERAL CLEANING AND DEEP SANITIZATION",
    //   // features: ["AC Service", "Appliance Repair", "Home Maintenance", "Emergency Service"],

    // }

  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-black text-white px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">SEVICES WE OFFER</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-brutalist-black leading-none mb-6">
            WE FIX
            <br />
            <span className="text-brutalist-yellow text-stroke-black">EVERYTHING</span>
          </h2>

          {/* <p className="text-xl font-bold text-brutalist-grey max-w-2xl mx-auto">
            PROFESSIONAL SERVICES FOR YOUR HOME AND OFFICE. 
            SKILLED WORKERS. FAIR PRICES. GUARANTEED RESULTS.
          </p> */}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="brutalist-card group hover:bg-brutalist-yellow transition-colors text-brutalist-black">
              <div className="mb-6" >
                <service.icon size={64} className="text-brutalist-grey" />
              </div>

              <h3 className="text-2xl font-black text-brutalist-black mb-2">
                {service.title}
              </h3>

              <p className="text-lg font-bold text-brutalist-grey mb-6">
                {service.description}
              </p>

              {/* <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center font-bold">
                    <div className="w-2 h-2 bg-brutalist-yellow mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul> */}

              <div className="flex items-center justify-between">
                {/* <span className="text-2xl font-black text-brutalist-yellow">
                  {service.price}
                </span> */}
                {/* <button className="brutalist-border bg-brutalist-black text-white px-6 py-2 font-black hover:bg-brutalist-yellow hover:text-brutalist-black transition-colors">
                  BOOK NOW
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <Timer size={48} className="text-brutalist-grey" />
            </div>
            <h4 className="text-xl font-black mb-2">QUICK SERVICE</h4>
            <p className="font-bold text-brutalist-grey">Get a handyman within 30 minutes or get ₹200.</p>
          </div>

          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <IndianRupeeIcon size={48} className="text-brutalist-grey" />
            </div>
            <h4 className="text-xl font-black mb-2">FIXED PLATFORM FEE</h4>
            <p className="font-bold text-brutalist-grey">₹29 per order, ensuring transparency.</p>
          </div>

          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <Clock size={48} className="text-brutalist-grey" />
            </div>
            <h4 className="text-xl font-black mb-2">SUBSCRIPTION PLANS</h4>
            <p className="font-bold text-brutalist-grey">Affordable maintenance packages for homes & corporate offices</p>
          </div>

          <div className="text-center">
            <div className="brutalist-border bg-brutalist-yellow p-6 inline-block mb-4">
              <VerifiedIcon size={48} className="text-brutalist-grey" />
            </div>
            <h4 className="text-xl font-black mb-2">VERIFIED PROFESSIONALS</h4>
            <p className="font-bold text-brutalist-grey">Only 4-star+ rated service providers are onboarded.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
