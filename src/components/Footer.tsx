
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  siteName: string;
  themeColor: string;
}

const Footer: React.FC<FooterProps> = ({ siteName, themeColor }) => {
  return (
    <footer className="bg-white border-t mt-20 pt-16 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <img 
              className="w-20 h-20 md:w-24 md:h-24"
              src="/logo.webp" alt="logo"
            />
          </div>
        </div>
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
          {/* Column 1: Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-gray-900 flex flex-col items-center md:items-start gap-2">
              اتصل بنا
              <span className="w-10 h-1 rounded-full" style={{ backgroundColor: themeColor }}></span>
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li>
                <Link to="/contact"  className="hover:text-gray-900 transition-colors">اتصل بنا</Link>
              </li>
              <li>
                <Link to="/FAQPage"  className="hover:text-gray-900 transition-colors">الأسئلة المتكررة</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: About Store */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-gray-900 flex flex-col items-center md:items-start gap-2">
              عن المتجر
              <span className="w-10 h-1 rounded-full" style={{ backgroundColor: themeColor }}></span>
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li>
                <Link to="/about"  className="hover:text-gray-900 transition-colors">عن المتجر</Link>
              </li>
              <li>
                <Link to="/PaymentPage"  className="hover:text-gray-900 transition-colors">طرق الدفع</Link>
              </li>
              <li>
                <Link to="/ShippingPage"  className="hover:text-gray-900 transition-colors">الشحن والتسليم</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-gray-900 flex flex-col items-center md:items-start gap-2">
              الشروط والسياسات
              <span className="w-10 h-1 rounded-full" style={{ backgroundColor: themeColor }}></span>
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li>
                <Link to="/TermsOfUse"  className="hover:text-gray-900 transition-colors">شروط الاستخدام</Link>
              </li>
              <li>
                <Link to="/ReturnPolicyPage"  className="hover:text-gray-900 transition-colors">سياسة الاستبدال والاسترجاع</Link>
              </li>
              <li>
                <Link to="/PrivacyPolicyPage"  className="hover:text-gray-900 transition-colors">سياسة الخصوصية</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} - {siteName}</p>
          <div className="flex gap-6">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            <img src="https://img.icons8.com/color/48/cash-on-delivery.png" alt="COD" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
