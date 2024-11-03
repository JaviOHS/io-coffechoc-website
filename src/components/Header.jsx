import React from 'react';
import { Coffee, Cookie, Star, Heart, ChevronRight, Leaf, ShoppingBag, Award } from 'lucide-react';
import Badge from './Badge';
import FeatureCard from './FeatureCard';
import CustomButton from './CustomButton';
import FloatingIcon from './FloatingIcon';

function Header({ header }) {
  const { title, description, imgUrl } = header[0];

  return (
    <header id="header" className="relative overflow-hidden bg-gradient-to-br from-brown-900 via-amber-900 to-brown-800 pt-14">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <Badge icon={Coffee} text="100% Café Premium" />
              <Badge icon={Leaf} text="Orgánico" />
              <Badge icon={Award} text="Premiado" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <div className="space-y-4">
              {description.map((line, index) => (
                <p key={index} className="text-lg text-amber-100/90 leading-relaxed flex items-start">
                  <Star className="w-5 h-5 mr-2 mt-1 text-amber-400 flex-shrink-0" />
                  {line}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <CustomButton text="Comprar Ahora" icon={ShoppingBag} type="primary" />
              <CustomButton text="Descubre más" icon={ChevronRight} type="secondary" />
            </div>
            <div className="flex gap-6 md:gap-8" data-aos="fade-up" data-aos-duration="800">
              <FeatureCard icon={Cookie} title="Rico en Proteínas" subtitle="Nutrición Premium" />
              <FeatureCard icon={Heart} title="100% Natural" subtitle="Sin aditivos" />
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 flex flex-col justify-center items-center" data-aos="fade-left" data-aos-duration="1000" >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full opacity-20 blur-3xl animate-pulse" />
              <img src={imgUrl} alt="Coffechoc" className="relative w-84" />
            </div>
            <FloatingIcon
              icon={Coffee}
              positionClasses="top-10 -right-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            />
            <FloatingIcon
              icon={Cookie}
              positionClasses="bottom-10 -left-6"
              animationClasses="-rotate-12 animate-float-delay"
            />
          </div>
        </div>
      </div>

      {/* Mueve los estilos CSS a un archivo CSS separado o mantenlos aquí si usas CSS-in-JS */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(12deg); }
            50% { transform: translateY(-10px) rotate(12deg); }
          }
          @keyframes floatDelay {
            0%, 100% { transform: translateY(0px) rotate(-12deg); }
            50% { transform: translateY(-10px) rotate(-12deg); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: floatDelay 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }
        `}
      </style>
    </header>
  );
}

export default Header;
