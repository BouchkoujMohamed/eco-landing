
import React from 'react';

interface SuccessPageProps {
  siteName: string;
  themeColor: string;
  onBack: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ themeColor, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12" dir="rtl">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
            style={{ backgroundColor: themeColor }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-black text-gray-900">تم استلام طلبك!</h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            شكراً لثقتك بنا. سيقوم أحد موظفي خدمة العملاء بالتواصل معك قريباً لتأكيد الطلب وترتيب عملية الشحن.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-200">
          <p className="text-sm text-gray-500 mb-1">حالة الطلب</p>
          <p className="text-lg font-bold" style={{ color: themeColor }}>قيد المعالجة (تأكيد هاتفي)</p>
        </div>

        <div className="space-y-4 pt-4">
          <button 
            onClick={onBack}
            className="w-full py-4 px-8 rounded-xl text-xl font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:brightness-110"
            style={{ backgroundColor: themeColor }}
          >
            العودة للمتجر
          </button>
          
          <p className="text-xs text-gray-400">
            إذا كان لديك أي استفسار، يرجى التواصل معنا عبر الواتساب.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
