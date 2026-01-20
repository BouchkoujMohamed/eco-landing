// import React, { useState } from 'react';
// import ProductSection from '../components/ProductSection';
// import Features from '../components/Features';
// import SuccessPage from './SuccessPage';
// import { PRODUCT, SITE_SETTINGS } from '../product';

// const Home: React.FC = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const product = PRODUCT;
//   const themeColor = product.themeColor || SITE_SETTINGS.defaultThemeColor;

//   if (isSubmitted) {
//     return (
//       <SuccessPage
//         siteName={SITE_SETTINGS.name}
//         themeColor={themeColor}
//         onBack={() => {
//           setIsSubmitted(false);
//           window.scrollTo(0, 0);
//         }}
//       />
//     );
//   }

//   return (
//     <>
//       <ProductSection
//         product={product}
//         currency={SITE_SETTINGS.currency}
//         themeColor={themeColor}
//         onOrderSuccess={() => {
//           setIsSubmitted(true);
//           window.scrollTo(0, 0);
//         }}
//       />

//       <Features product={product} themeColor={themeColor} />
//     </>
//   );
// };

// export default Home;

import { Link } from 'react-router-dom';
import { PRODUCTS } from '../product';
import { SITE_SETTINGS } from '../product';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {PRODUCTS.map(product => (
        <Link
          key={product.id}
          to={`/product/${product.id}`} // navigate via react-router
          className="border rounded-xl p-4 hover:shadow-lg transition"
        >
          <img
            src={product.images[0]}
            className="rounded-lg mb-3 h-48 w-full object-cover"
          />
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-500">{product.price} {SITE_SETTINGS.currency}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;


