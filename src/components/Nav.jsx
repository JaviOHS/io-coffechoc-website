import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import MenuItem from './MenuItem';

function Nav({ nav }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brown-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="relative flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Coffee className="w-8 h-8 text-amber-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text">
              {nav.brand}
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            {nav.links.map((item) => (
              <MenuItem
                key={item.name}
                name={item.name}
                icon={item.icon}
                href={`#${item.id}`}
                onClick={() => handleSmoothScroll(item.id)}
              />
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-amber-400 hover:bg-amber-400/10 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className={`lg:hidden absolute top-full left-0 right-0 bg-brown-900/95 backdrop-blur-md transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="container mx-auto px-4 py-4">
              {nav.links.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  href={`#${item.id}`}
                  onClick={() => {
                    handleSmoothScroll(item.id);
                    setIsOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden fixed inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
}

export default Nav;
