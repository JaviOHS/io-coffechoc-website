import React from 'react';
import { Users, Mail, Coffee } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import DecorativeBackground from '../components/DecorativeBackground';

const CreatorCard = ({ name, email }) => (
  <div className="bg-[#3B2A20]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
    <div className="flex flex-col items-center gap-4">
      <div className="w-20 h-20 rounded-full bg-[#D9C56E]/20 flex items-center justify-center">
        <Users className="w-10 h-10 text-[#D9C56E]" />
      </div>
      <h3 className="text-xl font-bold text-[#D9C56E] text-center">{name}</h3>
      <div className="flex items-center gap-2 text-[#D9C56E]/80">
        <Mail className="w-5 h-5" />
        <a href={`mailto:${email}`} className="hover:text-[#D9C56E] transition-colors">
          {email}
        </a>
      </div>
    </div>
  </div>
);

const Creators = ({ creators }) => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-hidden">
      <DecorativeBackground pattern="Wheats" theme="dark" />
      <div className="container mx-auto px-4" data-aos="fade-up">
        <SectionTitle iconLeft={Users} iconRight={Coffee} color="#e5dbaf" title={creators.title} />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {creators.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {creators.members.map((member, index) => (
            <CreatorCard 
              key={member.email}
              {...member}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D9C56E]/20" />
    </section>
  );
};

export default Creators;