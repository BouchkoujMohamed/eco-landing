import React, { useState } from 'react';

const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

interface OrderFormProps {
  themeColor: string;
  onSuccess?: () => void;
  productName: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ themeColor, onSuccess, productName }) => {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({ fullName: '', phone: '', city: '' });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.city.trim()) newErrors.city = true;
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        city: formData.city,
        quantity: quantity,
        productName: productName,
        timestamp: new Date().toLocaleString('ar-LY'),
        source: window.location.host
      };

      try {
        if (GOOGLE_SHEET_WEBHOOK_URL) {
          // Use 'no-cors' mode as Google Apps Script doesn't handle OPTIONS preflight well
          await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          // Note: with no-cors, we won't know if it actually succeeded, 
          // but usually it fires the request successfully.
        } else {
          console.warn("⚠️ No Google Sheet URL provided in product.js. Data not sent.");
          console.log("Form Payload:", payload);
          // Simulate network delay for demo
          await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        setIsSubmitting(false);
        if (onSuccess) {
          onSuccess();
        }
      } catch (error) {
        console.error("Submission failed:", error);
        setIsSubmitting(false);
        alert("عذراً، حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
      }
    }
  };

  const inputClass = (name: string) => `w-full border-2 rounded-xl px-4 py-4 text-base outline-none transition-all duration-200 ${
    errors[name] ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-opacity-100 focus:ring-2 focus:ring-offset-1'
  }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Quantity Selector */}
      <div className="flex flex-col items-center gap-3">
        <label className="text-sm font-bold text-gray-500">الكمية</label>
        <div className="flex items-center gap-6 bg-gray-50 p-2 rounded-2xl border w-full justify-between">
          <button 
            type="button" 
            disabled={isSubmitting}
            onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} 
            className="w-12 h-12 flex items-center justify-center font-bold text-2xl hover:bg-white rounded-xl transition-all disabled:opacity-50 active:scale-95 shadow-sm"
          >−</button>
          <span className="text-2xl font-black w-12 text-center">{quantity}</span>
          <button 
            type="button" 
            disabled={isSubmitting}
            onClick={() => setQuantity(q => q + 1)} 
            className="w-12 h-12 flex items-center justify-center font-bold text-2xl hover:bg-white rounded-xl transition-all disabled:opacity-50 active:scale-95 shadow-sm"
          >+</button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div className="relative">
          <input 
            type="text" name="fullName" placeholder="الاسم الكامل" 
            className={inputClass('fullName')} value={formData.fullName} onChange={handleInputChange}
            // FIX: Removed invalid focusRingColor property from style object
            style={{ borderColor: !errors.fullName ? `${themeColor}30` : undefined }}
            disabled={isSubmitting}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1 mr-2 font-bold animate-pulse">يرجى إدخال اسمك</p>}
        </div>
        <div>
          <input 
            type="tel" name="phone" placeholder="رقم الهاتف (مثال: 0910000000)" 
            className={inputClass('phone')} value={formData.phone} onChange={handleInputChange}
            style={{ borderColor: !errors.phone ? `${themeColor}30` : undefined }}
            disabled={isSubmitting}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 mr-2 font-bold animate-pulse">رقم الهاتف ضروري للتواصل</p>}
        </div>
        <div>
          <input 
            type="text" name="city" placeholder="المدينة / العنوان بالتفصيل" 
            className={inputClass('city')} value={formData.city} onChange={handleInputChange}
            style={{ borderColor: !errors.city ? `${themeColor}30` : undefined }}
            disabled={isSubmitting}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1 mr-2 font-bold animate-pulse">المدينة مطلوبة</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-5 px-8 rounded-2xl text-xl font-black text-white shadow-xl transition-all active:scale-[0.97] hover:brightness-110 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
        style={{ 
          backgroundColor: themeColor, 
          boxShadow: `0 12px 24px -8px ${themeColor}80` 
        }}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            جاري إرسال الطلب...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            اضغط هنا للطلب - دفع عند الاستلام
          </>
        )}
      </button>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-[11px] md:text-xs text-gray-500 font-bold bg-white p-2 rounded-lg shadow-sm border border-gray-50">
           <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
           توصيل سريع ومجاني
        </div>
        <div className="flex items-center gap-2 text-[11px] md:text-xs text-gray-500 font-bold bg-white p-2 rounded-lg shadow-sm border border-gray-50">
           <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
           ضمان حقيقي للمنتج
        </div>
      </div>
    </form>
  );
};

export default OrderForm;