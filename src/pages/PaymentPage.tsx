import React, { useEffect } from "react";

const PaymentPage: React.FC = () => {
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
      <h1 style={{ color: "#1a73e8", marginBottom: "20px" }}>طرق الدفع</h1>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#1a73e8" }}>الدفع نقداً عند الاستلام (COD)</h2>
        <p>
          الدفع عند الاستلام (Cash On Delivery) هي إحدى طرق الدفع المتاحة على متجرنا، والدفع عند الاستلام يعني أن المتسوق يمكنه التسوق عبر متجرنا إلكتروني واختيار المنتج الذي يرغب فيه ومن ثم يقوم بإجراء الطلب واختيار طريقة الدفع عند الاستلام وهو ما يعني أن عملية الدفع تؤجل حتى استلام العميل للمنتج الذي قام بطلبه إلكترونيًا.
        </p>
        <p>
          وسنقوم بإرسال المنتج إلى المكان المتفق عليه (المدينة أو الحي أو المنزل أو مكان آخر)، وبعدها يتم الدفع.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#1a73e8" }}>الدفع عبر تحويل بنكي</h2>
        <p>
          الدفع عبر تحويل بنكي هو أحد طرق الدفع المتاحة على متجرنا، والدفع يتم عبر تحويل المبلغ المتفق عليه إلى حسابنا البنكي، أو عبر حوالة بنكية، أو عبر إحدى وكالات تحويل الأموال بالإسم المتفق عليه، وبعدها يتم إرسال المنتج إلى المكان المتفق عليه.
        </p>
      </section>

      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#1a73e8" }}>الدفع عبر PayPal</h2>
        <p>
          الدفع عبر موقع PayPal هو أحد الطرق المتاحة على متجرنا، والدفع يتم عبر تحويل المبلغ المتفق عليه إلى حسابنا على موقع PayPal، وبعدها يتم إرسال المنتج إلى المكان المتفق عليه.
        </p>
      </section>
    </div>
  );
};


export default PaymentPage;
