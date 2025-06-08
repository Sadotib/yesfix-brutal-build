
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brutalist-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-6 py-3 inline-block mb-6">
              <span className="text-lg font-black uppercase tracking-wider">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-none mb-6">
              NEED A FIX?
              <br />
              <span className="text-brutalist-yellow">CALL NOW!</span>
            </h2>

            <p className="text-xl font-bold text-brutalist-light-grey mb-8">
              SAME-DAY SERVICE FOR REGULAR BOOKINGS.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="brutalist-border bg-brutalist-yellow p-3">
                  <Phone size={24} className="text-brutalist-grey" />
                </div>
                <div>
                  <div className="font-black text-lg">CALL US NOW</div>
                  <div className="text-brutalist-yellow text-xl font-bold">[INSERT]</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="brutalist-border bg-brutalist-yellow p-3">
                  <Mail size={24} className="text-brutalist-grey" />
                </div>
                <div>
                  <div className="font-black text-lg">EMAIL US</div>
                  <div className="text-brutalist-yellow text-xl font-bold">[INSERT]</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="brutalist-border bg-brutalist-yellow p-3">
                  <MapPin size={24} className="text-brutalist-grey" />
                </div>
                <div>
                  <div className="font-black text-lg">SERVICE AREAS</div>
                  <div className="text-brutalist-yellow text-xl font-bold">DIBRUGARH</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="brutalist-border bg-brutalist-yellow p-3">
                  <Clock size={24} className="text-brutalist-grey" />
                </div>
                <div>
                  <div className="font-black text-lg">WORKING HOURS</div>
                  <div className="text-brutalist-yellow text-xl font-bold">[INSERT]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Form
          <div className="brutalist-card bg-white text-brutalist-black">
            <h3 className="text-2xl font-black mb-6">BOOK A SERVICE</h3>

            <form className="space-y-6">
              <div>
                <label className="block font-black mb-2">YOUR NAME</label>
                <input
                  type="text"
                  className="w-full brutalist-border p-3 text-lg font-bold"
                  placeholder="ENTER YOUR NAME"
                />
              </div>

              <div>
                <label className="block font-black mb-2">PHONE NUMBER</label>
                <input
                  type="tel"
                  className="w-full brutalist-border p-3 text-lg font-bold"
                  placeholder="YOUR PHONE NUMBER"
                />
              </div>

              <div>
                <label className="block font-black mb-2">SERVICE NEEDED</label>
                <select className="w-full brutalist-border p-3 text-lg font-bold">
                  <option>SELECT SERVICE</option>
                  <option>ELECTRICAL</option>
                  <option>PLUMBING</option>
                  <option>AC REPAIR</option>
                  <option>GENERAL REPAIR</option>
                  <option>CLEANING</option>
                  <option>EMERGENCY</option>
                </select>
              </div>

              <div>
                <label className="block font-black mb-2">DESCRIBE THE PROBLEM</label>
                <textarea
                  className="w-full brutalist-border p-3 text-lg font-bold h-24"
                  placeholder="TELL US WHAT NEEDS FIXING..."
                ></textarea>
              </div>

              <button type="submit" className="w-full brutalist-button">
                BOOK NOW - GET INSTANT QUOTE
              </button>
            </form>

             <div className="mt-6 p-4 bg-brutalist-yellow">
              <p className="font-black text-center">
                🚨 EMERGENCY? CALL DIRECTLY: +91 98765 43210
              </p>
            </div> 
          </div> */}


          <div className="brutalist-card bg-white text-brutalist-black">

            <form className="space-y-6">
              <div>
                <label className="block font-black mb-2">YOUR NAME</label>
                <input
                  type="text"
                  className="w-full brutalist-border p-3 text-lg font-bold"
                  placeholder="ENTER YOUR NAME"
                />
              </div>

              <div>
                <label className="block font-black mb-2">PHONE NUMBER</label>
                <input
                  type="tel"
                  className="w-full brutalist-border p-3 text-lg font-bold"
                  placeholder="YOUR PHONE NUMBER"
                />
              </div>

              <div>
                <label className="block font-black mb-2">SUBJECT</label>
                <textarea
                  className="w-full brutalist-border p-3 text-lg font-bold h-24"
                  placeholder="TELL US ABOUT YOUR ISSUE"
                ></textarea>
              </div>

              <button type="submit" className="w-full brutalist-button">
                SEND MESSAGE
              </button>
            </form>

             {/* <div className="mt-6 p-4 bg-brutalist-yellow">
              <p className="font-black text-center">
                🚨 EMERGENCY? CALL DIRECTLY: +91 98765 43210
              </p>
            </div>  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
