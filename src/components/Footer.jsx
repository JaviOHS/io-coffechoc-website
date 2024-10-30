import React from 'react';
import { Mail, Phone, Github, Linkedin, Globe, MessageCircle, Coffee, Heart } from 'lucide-react';

const Footer = ({ footer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#2C1810] to-[#1A0F09] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#D9C56E]/20" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Coffee className="w-8 h-8 text-[#D9C56E]" />
              <h3 className="text-2xl font-bold text-[#D9C56E]">Coffechoc</h3>
            </div>
            <p className="text-[#D9C56E]/80 leading-relaxed">
              {footer.brandDescription}
            </p>
            <div className="flex items-center gap-4">
              {footer.socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#D9C56E]/10 hover:bg-[#D9C56E]/20 transition-colors group">
                  {link.icon === 'github' && <Github className="w-5 h-5 text-[#D9C56E] group-hover:scale-110 transition-transform" />}
                  {link.icon === 'linkedin' && <Linkedin className="w-5 h-5 text-[#D9C56E] group-hover:scale-110 transition-transform" />}
                  {link.icon === 'web' && <Globe className="w-5 h-5 text-[#D9C56E] group-hover:scale-110 transition-transform" />}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#D9C56E]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" className="text-[#D9C56E]/80 hover:text-[#D9C56E] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9C56E]/50 group-hover:bg-[#D9C56E] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#D9C56E]">Contacto</h4>
            <div className="space-y-4">
              <a href={`mailto:${footer.contactInfo.email}`} className="flex items-center gap-3 text-[#D9C56E]/80 hover:text-[#D9C56E] transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {footer.contactInfo.email}
              </a>
              <a href={`tel:${footer.contactInfo.phone}`} className="flex items-center gap-3 text-[#D9C56E]/80 hover:text-[#D9C56E] transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {footer.contactInfo.phone}
              </a>
              <p className="flex items-center gap-3 text-[#D9C56E]/80">
                <MessageCircle className="w-5 h-5" />
                {footer.contactInfo.address}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#D9C56E]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#D9C56E]/70 text-sm">
            <p>© {currentYear} Coffechoc. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D9C56E]/20" />
    </footer>
  );
};

export default Footer;
