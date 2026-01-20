
// import React, { useState, useEffect } from 'react';
// import ImageGallery from './ImageGallery';
// import OrderForm from './OrderForm';
// import type { Product } from '../types';

// interface ProductSectionProps {
//   product: Product;
//   currency: string;
//   themeColor: string;
//   onOrderSuccess: () => void;
// }

// const ProductSection: React.FC<ProductSectionProps> = ({ product, currency, themeColor, onOrderSuccess }) => {
//   const [viewers, setViewers] = useState(12);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setViewers(prev => {
//         const delta = Math.floor(Math.random() * 3) - 1;
//         const newVal = prev + delta;
//         return newVal < 5 ? 5 : newVal > 35 ? 35 : newVal;
//       });
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const discount = Math.round((1 - product.price/product.oldPrice) * 100);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
//       {/* Gallery Section */}
//       <div className="lg:order-2 w-full max-w-xl mx-auto lg:max-w-none">
//         <ImageGallery images={product.images} themeColor={themeColor} />
//       </div>

//       {/* Product Details Section */}
//       <div className="lg:order-1 flex flex-col gap-5 md:gap-6">
//         <div className="space-y-3">
//           <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
//             {product.name}
//           </h1>
          
//           <div className="flex flex-wrap items-center gap-3 md:gap-4">
//             <span className="text-3xl md:text-4xl font-black" style={{ color: themeColor }}>
//               {product.price} {currency}
//             </span>
//             <span className="text-xl md:text-2xl text-gray-400 line-through">
//               {product.oldPrice} {currency}
//             </span>
//             <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
//               تخفيض {discount}%-
//             </span>
//           </div>
//         </div>

//         <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 bg-white p-2 rounded-lg border border-gray-100 shadow-sm w-fit">
//           <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
//           <span>يشاهده <span className="font-bold text-red-600">{viewers}</span> شخصاً في الوقت الحالي.</span>
//         </div>

//         {product.shortInfo && (
//           <div className="p-4 rounded-xl border shadow-sm" style={{ backgroundColor: `${themeColor}10`, borderColor: `${themeColor}30` }}>
//             <p className="text-sm md:text-base font-bold text-center" style={{ color: themeColor }}>
//               {product.shortInfo}
//             </p>
//           </div>
//         )}

//         <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-50 ring-1 ring-black/5">
//           <h3 className="text-lg font-bold text-gray-800 mb-5 text-center">للطلب يرجى إدخال معلوماتك</h3>
//           <OrderForm 
//             themeColor={themeColor} 
//             onSuccess={onOrderSuccess} 
//             productName={product.name}
//           />
//         </div>

//         <div className="mt-4 border-t pt-8">
//            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
//              <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: themeColor }}>✨</span>
//              وصف المنتج
//            </h3>
//            <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
//              {product.mainDescription}
//            </p>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default ProductSection;


import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import OrderForm from './OrderForm';
import type { Product } from '../types';

interface ProductSectionProps {
  product: Product;
  currency: string;
  themeColor: string;
  onOrderSuccess: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ product, currency, themeColor, onOrderSuccess }) => {
  
  const [viewers, setViewers] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const newVal = prev + delta;
        return newVal < 5 ? 5 : newVal > 35 ? 35 : newVal;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const discount = Math.round((1 - product.price / product.oldPrice) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Gallery Section */}
      <div className="lg:order-2 w-full max-w-xl mx-auto lg:max-w-none">
        <ImageGallery images={product.images} themeColor={themeColor} />
      </div>

      {/* Product Details Section */}
      <div className="lg:order-1 flex flex-col gap-5 md:gap-6">
        {/* Product Title & Price */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {product.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-3xl md:text-4xl font-black" style={{ color: themeColor }}>
              {product.price} {currency}
            </span>
            <span className="text-xl md:text-2xl text-gray-400 line-through">
              {product.oldPrice} {currency}
            </span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
              تخفيض {discount}%- 
            </span>
          </div>
        </div>

        {/* Viewers */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 bg-white p-2 rounded-lg border border-gray-100 shadow-sm w-fit">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span>يشاهده <span className="font-bold text-red-600">{viewers}</span> شخصاً في الوقت الحالي.</span>
        </div>

        {/* Short Info */}
        {product.shortInfo && (
          <div className="p-4 rounded-xl border shadow-sm" style={{ backgroundColor: `${themeColor}10`, borderColor: `${themeColor}30` }}>
            <p className="text-sm md:text-base font-bold text-center" style={{ color: themeColor }}>
              {product.shortInfo}
            </p>
          </div>
        )}

        {/* Order Form */}
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-50 ring-1 ring-black/5">
          <h3 className="text-lg font-bold text-gray-800 mb-5 text-center">للطلب يرجى إدخال معلوماتك</h3>
          <OrderForm 
            themeColor={themeColor} 
            onSuccess={onOrderSuccess} 
            productName={product.name}
          />
        </div>

        {/* Product Description */}
        <div className="mt-4 border-t pt-8 w-full">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: themeColor }}>✨</span>
            وصف المنتج
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
            {product.mainDescription}
          </p>
          <img src="/public/5.webp" className='mt-6 w-[340px] text-center ' alt="" />
        </div>

        {/* FAQ Section */}

        {product.faq && product.faq.length > 0 && (
          <div className="mt-4 border-t pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
            style={{ backgroundColor: themeColor }}
            >
            ✨
          </span>
      الاسئلة الشائعة عن {product.name}:
          </h3>

    <div className="space-y-3">
      {product.faq.map((item, index) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-gray-800">{item.question}</span>
              <span className="text-gray-600 text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div className="p-4 bg-white text-gray-600 leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
    <img src="/public/4.webp" alt="" />
  </div>
  
)}
      </div>
    </div>
  );
};

export default ProductSection;
