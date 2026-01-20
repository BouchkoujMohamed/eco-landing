
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  themeColor: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, themeColor }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image */}
      <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white group">
        <img 
          src={images[activeImage]} 
          alt="Product Display" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Simple navigation arrows for mobile */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
             <button 
               onClick={(e) => { e.stopPropagation(); setActiveImage(prev => (prev > 0 ? prev - 1 : images.length - 1)) }}
               className="w-10 h-10 bg-white/80 rounded-full shadow-lg flex items-center justify-center pointer-events-auto hover:bg-white"
             >
               <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
             </button>
             <button 
               onClick={(e) => { e.stopPropagation(); setActiveImage(prev => (prev < images.length - 1 ? prev + 1 : 0)) }}
               className="w-10 h-10 bg-white/80 rounded-full shadow-lg flex items-center justify-center pointer-events-auto hover:bg-white"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
             </button>
          </div>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 px-1 mt-4 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl border-2 overflow-hidden transition-all shadow-sm ${
                activeImage === idx ? 'scale-105' : 'border-transparent opacity-60'
              }`}
              style={{ borderColor: activeImage === idx ? themeColor : 'transparent' }}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
