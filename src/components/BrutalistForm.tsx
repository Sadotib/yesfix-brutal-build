
import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

const BrutalistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('FORM SUBMITTED!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="brutalist-border bg-brutalist-yellow text-brutalist-black px-6 py-3 inline-block mb-6">
            <span className="text-lg font-black uppercase tracking-wider">Contact Form</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black leading-none mb-4 text-brutalist-black">
            GET IN TOUCH
          </h2>
          
          <p className="text-xl font-bold text-brutalist-grey">
            FILL OUT THE FORM BELOW
          </p>
        </div>

        {/* Form */}
        <div className="brutalist-card bg-white text-brutalist-black">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <label className="block font-black text-lg mb-3 uppercase tracking-wide flex items-center gap-2">
                <User size={20} className="text-brutalist-grey" />
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full brutalist-border p-4 text-lg font-bold bg-white focus:bg-brutalist-yellow focus:outline-none transition-colors duration-200"
                placeholder="ENTER YOUR FULL NAME"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-black text-lg mb-3 uppercase tracking-wide flex items-center gap-2">
                <Mail size={20} className="text-brutalist-grey" />
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full brutalist-border p-4 text-lg font-bold bg-white focus:bg-brutalist-yellow focus:outline-none transition-colors duration-200"
                placeholder="YOUR.EMAIL@EXAMPLE.COM"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block font-black text-lg mb-3 uppercase tracking-wide flex items-center gap-2">
                <Phone size={20} className="text-brutalist-grey" />
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full brutalist-border p-4 text-lg font-bold bg-white focus:bg-brutalist-yellow focus:outline-none transition-colors duration-200"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-black text-lg mb-3 uppercase tracking-wide flex items-center gap-2">
                <MessageSquare size={20} className="text-brutalist-grey" />
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full brutalist-border p-4 text-lg font-bold bg-white focus:bg-brutalist-yellow focus:outline-none transition-colors duration-200 resize-none"
                placeholder="TELL US WHAT YOU NEED..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full brutalist-button text-center"
              >
                SEND MESSAGE NOW
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="mt-8 p-4 bg-brutalist-black text-white text-center">
            <p className="font-black text-sm uppercase tracking-wider">
              🚨 WE RESPOND WITHIN 24 HOURS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrutalistForm;
