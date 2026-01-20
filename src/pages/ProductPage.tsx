import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductSection from '../components/ProductSection';
import Features from '../components/Features';
import SuccessPage from './SuccessPage';
import { PRODUCTS, SITE_SETTINGS } from '../product';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // ناخدو id من URL
  const [isSubmitted, setIsSubmitted] = useState(false);

  // نلقاو المنتج حسب id
  const product = PRODUCTS.find(p => p.id === id);

  // إلى ما كاينش product نعرض رسالة
  if (!product) return <p className="text-center mt-10">المنتج غير موجود</p>;

  const themeColor = product.themeColor || SITE_SETTINGS.defaultThemeColor;

  if (isSubmitted) {
    return (
      <SuccessPage
        siteName={SITE_SETTINGS.name}
        themeColor={themeColor}
        onBack={() => {
          setIsSubmitted(false);
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  return (
    <>
    <div className='flex '>
    <ProductSection
        product={product}
        currency={SITE_SETTINGS.currency}
        themeColor={themeColor}
        onOrderSuccess={() => {
          setIsSubmitted(true);
          window.scrollTo(0, 0);
        }}
      />
      
    </div>
      <Features product={product} themeColor={product.themeColor} />
    </>
  );
};

export default ProductPage;
