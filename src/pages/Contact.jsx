import React, { useState } from 'react';
import { User, Mail, MessageCircle, CheckCircle, X, MapPinHouse, MailPlus, Github, Linkedin, Globe, Coffee } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import DecorativeBackground from '../components/DecorativeBackground';

const Contact = ({ contact }) => {
  const { teamMember, suggestionForm } = contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(suggestionForm.submitButton.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-hidden" data-aos="fade-in" data-aos-duration="600">
      <DecorativeBackground pattern="dots" theme="dark" />
      <div className="container mx-auto px-4 relative">
        <SectionTitle iconLeft={Coffee} iconRight={MailPlus} color="#e5dbaf" title={contact.title} />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {contact.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#3B2A20]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-[#D9C56E]/20 p-2 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full border-2 border-[#D9C56E] flex items-center justify-center">
                  <img src={teamMember.imgUrl} alt={teamMember.name} className="w-full h-full object-cover rounded-full"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-[#D9C56E] mb-2">{teamMember.name}</h3>
              <p className="text-[#D9C56E]/80 mb-6">{teamMember.role}</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <a href={teamMember.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#D9C56E]/10 hover:bg-[#D9C56E]/20 transition-colors group">
                    <Github className="w-6 h-6 text-[#D9C56E] group-hover:scale-110 transition-transform" />
                  </a>
                  <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#D9C56E]/10 hover:bg-[#D9C56E]/20 transition-colors group">
                    <Linkedin className="w-6 h-6 text-[#D9C56E] group-hover:scale-110 transition-transform" />
                  </a>
                  <a href={teamMember.portfolio} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#D9C56E]/10 hover:bg-[#D9C56E]/20 transition-colors group">
                    <Globe className="w-6 h-6 text-[#D9C56E] group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-[#2C1810]/50">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-[#D9C56E]" />
                    <a href={`mailto:${teamMember.email}`} className="text-[#D9C56E] hover:underline">
                      {teamMember.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPinHouse className="w-5 h-5 text-[#D9C56E]" />
                    <span className="text-[#D9C56E]">{teamMember.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#3B2A20]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-[#D9C56E] mb-6 flex items-center gap-3">
              <MessageCircle className="w-7 h-7" />
              {suggestionForm.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {suggestionForm.fields.map((field) => (
                <div key={field.name} className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D9C56E]">
                    {field.name === 'name' && <User className="w-5 h-5" />}
                    {field.type === 'email' && <Mail className="w-5 h-5" />}
                    {field.type === 'textarea' && <MessageCircle className="w-5 h-5" />}
                  </div>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full bg-[#2C1810] border border-[#D9C56E]/30 rounded-xl py-3 px-12 text-[#D9C56E] placeholder:text-[#D9C56E]/50 focus:outline-none focus:border-[#D9C56E] transition-colors resize-none min-h-[120px]"
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full bg-[#2C1810] border border-[#D9C56E]/30 rounded-xl py-3 px-12 text-[#D9C56E] placeholder:text-[#D9C56E]/50 focus:outline-none focus:border-[#D9C56E] transition-colors"
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="w-full bg-[#D9C56E] text-[#2C1810] font-bold py-4 rounded-xl hover:bg-[#e6d178] transition-colors flex items-center justify-center gap-2 group">
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {suggestionForm.submitButton.text}
              </button>
              {formStatus && (
                <div className="bg-[#D9C56E]/10 border border-[#D9C56E]/30 p-4 rounded-xl flex items-center justify-between animate-fadeIn">
                  <span className="text-[#D9C56E] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> {formStatus}
                  </span>
                  <button onClick={() => setFormStatus(null)} className="text-[#D9C56E] hover:text-[#e6d178] transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D9C56E]/20" />
    </section>
  );
};

export default Contact;