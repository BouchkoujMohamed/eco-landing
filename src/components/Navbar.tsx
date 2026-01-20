
import React from 'react';
import { Link } from 'react-router-dom';
interface NavbarProps {
  siteName: string;
  themeColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ themeColor }) => {
  return (
    <nav className="bg-white border-b sticky top-[32px] md:top-[40px] z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            
            <img 
              className="w-12 h-12 md:w-16 md:h-16" 
              src="/logo.webp" alt="logo"
            />
          </div>
          
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 mr-8">
            <Link to="/" className="hover:opacity-70 cursor-pointer transition-colors border-b-2 border-transparent hover:border-current pb-1">الرئيسية</Link>
            <Link to="/about" className="hover:opacity-70 cursor-pointer transition-colors border-b-2 border-transparent hover:border-current pb-1">من نحن</Link>
            <Link to="/contact" className="hover:opacity-70 cursor-pointer transition-colors border-b-2 border-transparent hover:border-current pb-1">اتصل بنا</Link>
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 border px-3 py-1.5 rounded-full hover:bg-gray-50 cursor-pointer transition-all shadow-sm bg-white">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs md:text-sm font-bold">السلة (0)</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
