
import React from 'react';
// Corrected import path from config to types
import type { Product } from '../types';

interface FeaturesProps {
  product: Product;
  // Added themeColor to resolve type error in App.tsx
  themeColor: string;
}

const Features: React.FC<FeaturesProps> = ({ product, themeColor }) => {
  if (!product.features || product.features.length === 0) return null;

  return (
    <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
      {/* Product Features Blocks */}
      {product.features.map((feature, idx) => (
        <div 
          key={feature.id} 
          className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
        >
          <div className="w-full md:w-1/2">
            <div className="relative group">
              {/* Dynamic shadow/glow based on themeColor */}
              <div 
                className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" 
                style={{ backgroundColor: themeColor }}
              ></div>
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-video" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 px-2">
            <h2 
              className="text-xl md:text-2xl font-bold text-gray-900 border-r-4 pr-4 leading-tight" 
              style={{ borderColor: themeColor }}
            >
               {feature.icon} {feature.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}

      {/* Why Choose Us Grid */}
      {product.whyChooseUs && product.whyChooseUs.items.length > 0 && (
        <div 
          className="text-white rounded-2xl md:rounded-3xl p-6 md:p-12 text-center space-y-8 shadow-2xl" 
          style={{ backgroundColor: themeColor }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold px-2">{product.whyChooseUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {product.whyChooseUs.items.map((item, idx) => (
              <div key={idx} className="space-y-3 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-2xl md:text-3xl shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
