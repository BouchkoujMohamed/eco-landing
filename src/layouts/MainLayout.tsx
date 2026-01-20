import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SITE_SETTINGS } from '../product';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  // Theme عام لكل الصفحات
  const themeColor = SITE_SETTINGS.defaultThemeColor;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      
      {/* Top Banner */}
      <div
        className="text-white text-center py-2 px-4 text-xs md:text-lg font-bold sticky top-0 z-[60]"
        style={{ backgroundColor: themeColor }}
      >
        {SITE_SETTINGS.bannerText}
      </div>

      {/* Navbar */}
      <Navbar
        siteName={SITE_SETTINGS.name}
        themeColor={themeColor}
      />

      {/* Pages Content */}
      <main className="flex-grow container mx-auto px-4 py-6 md:py-12 max-w-6xl">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer
        siteName={SITE_SETTINGS.name}
        themeColor={themeColor}
      />
    </div>
  );
};

export default MainLayout;
