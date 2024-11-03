import React from 'react';
import { Coffee, Leaf } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ContainerCard from './ContainerCard';
import DecorativeBackground from './DecorativeBackground';

export default function About({ about }) {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-hidden" data-aos="fade-in">
      <DecorativeBackground pattern="geometricDark" theme="dark" />
      <div className="container mx-auto px-4" data-aos="fade-right" data-aos-duration="800">
        <SectionTitle iconLeft={Coffee} iconRight={Leaf} color="#e5dbaf" title={about.title} />
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-in">
          {about.content.map((item, index) => (
            <ContainerCard key={index} decoratorPosition="top-right">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={item.imgUrl} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-[#D9C56E] font-serif">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              </div>
          </ContainerCard>
          ))}
        </div>
      </div>
    </section>
  );
}