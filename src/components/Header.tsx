
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="brutalist-border border-t-0 border-l-0 border-r-0 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="brutalist-border brutalist-shadow bg-brutalist-yellow px-4 py-2">
              <h1 className="text-2xl md:text-3xl font-black text-brutalist-black">
                YES<span className="text-white bg-brutalist-black px-1">FIX</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-lg font-black uppercase hover:text-brutalist-yellow transition-colors">
              Services
            </a>
            <a href="#about" className="text-lg font-black uppercase hover:text-brutalist-yellow transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-lg font-black uppercase hover:text-brutalist-yellow transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-lg font-black uppercase hover:text-brutalist-yellow transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden md:block brutalist-button">
              <Phone className="inline w-5 h-5 mr-2" />
              CALL NOW
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden brutalist-border bg-brutalist-yellow p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 brutalist-border brutalist-shadow bg-white p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-lg font-black uppercase hover:text-brutalist-yellow">
                Services
              </a>
              <a href="#about" className="text-lg font-black uppercase hover:text-brutalist-yellow">
                About
              </a>
              <a href="#testimonials" className="text-lg font-black uppercase hover:text-brutalist-yellow">
                Reviews
              </a>
              <a href="#contact" className="text-lg font-black uppercase hover:text-brutalist-yellow">
                Contact
              </a>
              <a href="#contact" className="brutalist-button inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                CALL NOW
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
