import React from 'react';
import { 
  Coffee, Cookie, CakeSlice, Bean, Grape,
  Factory, Package, Scale, Thermometer,
  Timer, Filter, PackageCheck, Wheat
} from 'lucide-react';

const DecorativeBackground = ({ pattern = 'icons', theme = 'light', customColors }) => {
  const themes = {
    light: {
      primary: '#4A3C31',
      secondary: '#D9C56E',
      background: 'from-[#FAF5E4] to-[#F5E6D3]'
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#D9C56E',
      background: 'from-[#2C1810] to-[#4A2C1D]'
    },
    custom: customColors
  };

  const currentTheme = themes[customColors ? 'custom' : theme];

  const productionIcons = [
    Factory, Scale, Filter, Timer, 
    Thermometer, PackageCheck, Bean, Package
  ];

  const patterns = {
    icons: (
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-6 gap-16 transform -rotate-12 scale-150">
            {Array.from({ length: 48 }).map((_, i) => {
              const Icon = i % 3 === 0 ? Coffee : i % 3 === 1 ? Cookie : CakeSlice;
              return (
                <div key={i} className="flex items-center justify-center">
                  <Icon className={`w-8 h-8 text-${theme === 'light' ? 'stone-700' : 'white'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
    dots: (
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(${currentTheme.secondary} 2px, transparent 2px)`,
            backgroundSize: '30px 30px'
          }} 
        />
      </div>
    ),
    beans: (
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-8 gap-12 transform rotate-12 scale-125">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Bean 
                  className={`w-6 h-6 text-${theme === 'light' ? 'stone-700' : 'white'}`}
                  style={{ transform: `rotate(${i % 2 ? 45 : -45}deg)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    Wheats: (
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-7 gap-14">
            {Array.from({ length: 56 }).map((_, i) => {
              const Icon = i % 2 === 0 ? Wheat : Grape;
              return (
                <div key={i} className="flex items-center justify-center">
                  <Icon 
                    className={`w-7 h-7 text-${theme === 'light' ? 'stone-700' : 'white'}`}
                    style={{ transform: `rotate(${(i * 45) % 360}deg)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
    production: (
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-4 gap-20 transform -rotate-6">
            {Array.from({ length: 24 }).map((_, i) => {
              const Icon = productionIcons[i % productionIcons.length];
              return (
                <div key={`main-${i}`} className="flex items-center justify-center">
                  <Icon 
                    className={`w-12 h-12 text-${theme === 'light' ? 'stone-700' : 'white'}`}
                    style={{ 
                      transform: `rotate(${(i * 45) % 360}deg)`,
                      filter: 'drop-shadow(0 0 1px currentColor)'
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute inset-0 grid grid-cols-8 gap-8 transform translate-x-12 translate-y-12">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={`connector-${i}`} className="flex items-center justify-center">
                {i % 4 === 0 && (
                  <div 
                    className={`w-16 h-0.5 text-${theme === 'light' ? 'stone-700' : 'white'}`}
                    style={{ 
                      background: 'currentColor',
                      transform: `rotate(${(i * 45) % 360}deg)`,
                      opacity: 0.3
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={`detail-${i}`} className="flex items-center justify-center">
                {i % 7 === 0 && (
                  <div 
                    className={`w-1 h-1 rounded-full bg-${theme === 'light' ? 'stone-700' : 'white'}`}
                    style={{ opacity: 0.2 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    geometricLight: (
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {/* Círculos grandes superpuestos */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-6 gap-8 transform -rotate-6 scale-150">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={`circle-${i}`} className="relative">
                  <div 
                    className="absolute w-16 h-16 rounded-full border-2 border-stone-700"
                    style={{ 
                      transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
                      opacity: 0.2
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Líneas diagonales */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              #4A3C31 20px,
              #4A3C31 21px
            )`
          }} />

          {/* Puntos pequeños */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(#4A3C31 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '10px 10px'
          }} />
        </div>
      </div>
    ),
    geometricDark: (
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="grid grid-cols-4 gap-12 transform rotate-12 scale-150">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={`hex-${i}`} className="relative flex items-center justify-center">
                  <div 
                    className="absolute w-12 h-12 border-2 border-white"
                    style={{ 
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      transform: `rotate(${i * 30}deg)`,
                      opacity: 0.3
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              rgba(255,255,255,0.1) 30px,
              rgba(255,255,255,0.1) 31px
            )`
          }} />
          <div className="absolute inset-0">
            <div className="grid grid-cols-8 gap-4">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={`square-${i}`} className="relative">
                  {i % 3 === 0 && (
                    <div 
                      className="absolute w-4 h-4 border border-white"
                      style={{ 
                        transform: `translate(-50%, -50%) rotate(45deg)`,
                        opacity: 0.2
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };

  return patterns[pattern] || null;
};

export default DecorativeBackground;