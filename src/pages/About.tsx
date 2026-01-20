
import { ShoppingCart, ShieldCheck, Truck, CreditCard } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src="/logo.webp"
              alt="عن المتجر"
              className="rounded-2xl shadow-md object-cover [360px] max-h-[360px]"
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عن المتجر
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              هذا المتجر بوابتك الجديدة للتسوق إلكترونيا بشكل سهل وبسيط.
              نوفر لك منتجات متعددة ذات جودة عالية لتختار منها الأفضل
              وبسعر تنافسي لن تجده في أي مكان آخر.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              التسوق معنا عملية ممتعة وآمنة، ونوفر لك كل ما تحتاجه من التسهيلات
              سواء في اختيار المنتج أو في عملية الدفع أو في عملية الشحن.
            </p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition">
            <ShoppingCart className="w-10 h-10 text-black mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">تسوق سهل</h3>
            <p className="text-sm text-gray-600">واجهة بسيطة وتجربة استخدام مريحة</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition">
            <ShieldCheck className="w-10 h-10 text-black mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">دفع آمن</h3>
            <p className="text-sm text-gray-600">حماية كاملة لمعلوماتك الشخصية</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition">
            <CreditCard className="w-10 h-10 text-black mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">خيارات متعددة</h3>
            <p className="text-sm text-gray-600">طرق دفع تناسب الجميع</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition">
            <Truck className="w-10 h-10 text-black mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">شحن سريع</h3>
            <p className="text-sm text-gray-600">توصيل سريع وآمن لباب منزلك</p>
          </div>
        </div>
      </div>
    </div>
  );
}
