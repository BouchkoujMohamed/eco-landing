import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import TermsOfUse from './pages/TermsOfUse';
import FAQPage from './pages/FAQPage';
import PaymentPage from './pages/PaymentPage';
import ShippingPage from './pages/ShippingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';


const App = () => {
  return (
    <BrowserRouter>
        <ScrollToTopOnRouteChange />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/ShippingPage" element={<ShippingPage />} />
          <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage />} />
          <Route path="/ReturnPolicyPage" element={<ReturnPolicyPage />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/FAQPage" element={<FAQPage />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
