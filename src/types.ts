
// Types for product features and choice blocks
export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface WhyChooseUs {
  title: string;
  items: { icon: string; title: string; text: string; }[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  themeColor?: string;
  images: string[];
  shortInfo?: string;
  mainDescription?: string;
  features?: Feature[];
  whyChooseUs?: WhyChooseUs;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  city: string;
  quantity: number;
}
