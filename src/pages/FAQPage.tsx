import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "متى يصل لي الطلب؟",
    answer:
      "تعتمد على شركة الشحن التي تم إختيارها والمسؤول عن التوصيل، نحن نوفر مجموعة من المسؤولين عن الشحن بمجموعة من المدن الكبرى، وعادة تأخد من يوم إلى 3 أيام من الطلب وتأكيده.",
  },
  {
    question: "هل يوجد توصيل خارج البلد؟",
    answer:
      "حالياً شركات الشحن المتعاقد معها تقوم بالتوصيل داخل البلد ومجموعة من المدن المحددة في صفحة التوصيل يتم عرض كافة المدن التي يصل لها مندوب شركة الشحن. يمكنك طلب التوصيل خارج البلد من فريق المتجر عبر الواتساب للقيام بمعلومات وزن المنتج وتسعير وكلاء الشحن الدوليين الغير مسجلين حالياً في المتجر.",
  },
  {
    question: "في حالة وجود عيب مصنعي في المنتج؟",
    answer:
      "يجب الرجوع وقراءة سياسة الإسترجاع لمعرفة شروط الإسترجاع والإستبدال، وفي حالة وجود عيب مصنعي تم الإتفاق على إرجاعه يتم إحتساب قيمة الشحن للشركة وكذلك إعادة الشحن على العميل أما قيمة المنتج فلا يتم إحتسابها على العميل حسب سياسة الإسترجاع.",
  },
  {
    question: "أريد طلب كميات كبيرة هل يوجد خصم؟",
    answer:
      "يوفر المتجر خدمة توصيل الكميات الكبيرة في حالة الطلب وهنالك خصم يصل من 10-20٪ على بعض المنتجات. يمكن التواصل المباشر معنا عبر صفحة اتصل بنا والاستفسار عن الكميات والخصم.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", color: "#333", lineHeight: 1.6 }}>
      <h1 style={{ color: "#1a73e8", marginBottom: "20px" }}>الأسئلة المتكررة</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
          <h2
            onClick={() => toggleIndex(index)}
            style={{ cursor: "pointer", color: "#1a73e8", fontSize: "18px" }}
          >
            {faq.question}
          </h2>
          {openIndex === index && <p style={{ marginTop: "8px" }}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
