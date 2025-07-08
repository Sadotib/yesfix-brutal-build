
import { Download, Calendar, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "DOWNLOAD THE YESFIX APP",
      description: "ANDROID & iOS - QUICK SIGNUP",
      step: "01"
    },
    {
      icon: Calendar,
      title: "BOOK YOUR SERVICE INSTANTLY",
      description: "TRACK TEAM ARRIVAL IN-APP",
      step: "02"
    },
    {
      icon: Shield,
      title: "RELAX WITH HASSLE-FREE SERVICE",
      description: "30-DAY GUARANTEE",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-brutalist-grey">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">HOW IT WORKS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
            3 SIMPLE
            <br />
            <span className="text-brutalist-yellow text-stroke-black">STEPS</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="brutalist-card bg-white text-center">
              <div className="brutalist-border bg-brutalist-black text-white px-4 py-2 inline-block mb-6">
                <span className="text-2xl font-black">{step.step}</span>
              </div>
              
              <div className="mb-6">
                <step.icon size={64} className="text-brutalist-grey mx-auto" />
              </div>

              <h3 className="text-xl font-black text-brutalist-black mb-4">
                {step.title}
              </h3>

              <p className="text-lg font-bold text-brutalist-grey">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
