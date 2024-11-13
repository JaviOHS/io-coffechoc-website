import React from 'react';
import { Users, Coffee, User } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import DecorativeBackground from '../components/DecorativeBackground';
import Card from '../components/Card';

const Creators = ({ creators }) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-hidden">
      <DecorativeBackground pattern="wheats" theme="dark" />
      <div className="container mx-auto px-4" data-aos="fade-up">
        <SectionTitle iconLeft={Users} iconRight={Coffee} color="#e5dbaf" title={creators.title} />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {creators.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {creators.members.map((member, index) => (
            <Card
              key={member.email}
              title={member.name}
              icon={User}
              color={{
                background: '#3B2A20',
                overlay: '#D9C56E',
                iconBg: '#D9C56E',
                icon: '#3B2A20',
                text: '#D9C56E'
              }}
              description={member.email}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creators;