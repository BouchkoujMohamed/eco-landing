import React, { useEffect } from "react";

const ShippingPage: React.FC = () => {
  // Scroll to top automatically when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ color: "#1a73e8", marginBottom: "20px" }}>الشحن والتسليم</h1>

      <section style={{ marginBottom: "25px" }}>
        <p>
          بعد تأكيد عملية الشراء، نقوم بشحن وإرسال المنتج عبر الطريقة التي قمتم بإختيارها، إما عبر مسؤول الشحن الخاص بنا أو عبر خدمة أمانة إكسبريس.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#1a73e8" }}>طرق الشحن:</h2>
        <p>
          <strong>أمانة إكسبريس:</strong> خدمة تضمن لكم تسليم الإرساليات إلى العنوان المطلوب في مدة تتراوح بين 3 أيام و 7 أيام نحو الإتجاهات الرئيسية.
        </p>
        <p>
          <strong>مسؤول الشحن:</strong> متجرنا يتعاقد مع مجموعة من مسؤولي الشحن بمجموعة من المدن يقومون بإيصال المنتجات في مدة تتراوح بين يوم و3 أيام.
        </p>
      </section>
    </div>
  );
};

export default ShippingPage;
