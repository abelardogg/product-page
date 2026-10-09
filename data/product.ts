export interface Variant {
  id: string;
  label: string;
  price: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  images: string[];
  description: string;
  longDescription: string;
  price: number;
  variants: Variant[];
  specs: { label: string; value: string }[];
  features: string[];
  paymentMethods: string[];
  reviews: Review[];
  faq: FAQItem[];
}

export const product: Product = {
  id: "grill-001",
  name: "Asador Profesional Camping",
  brand: "ABX Camping",
  images: [
    "/images/asador-1.jpg",
    "/images/asador-2.jpg",
    "/images/asador-3.jpg",
  ],
  description:
    "Asador portátil de acero inoxidable, ideal para camping y parrilladas al aire libre. Diseño plegable, fácil de transportar y montar.",
  longDescription:
    "Fabricado con acero inoxidable de alta resistencia, este asador profesional te permite disfrutar de parrilladas donde quieras. Su sistema de patas plegables y maletín incluido lo hacen perfecto para llevarlo de camping. La parrilla ajustable en altura te da control total sobre la cocción de tus alimentos. Incluye gancho para herramientas y bolsa de transporte.",
  price: 1899,
  variants: [
    { id: "med", label: "Mediano (60cm)", price: 1599 },
    { id: "lg", label: "Grande (80cm)", price: 1899 },
    { id: "xl", label: "Extra Grande (100cm)", price: 2299 },
  ],
  specs: [
    { label: "Material", value: "Acero inoxidable" },
    { label: "Peso", value: "8.5 kg" },
    { label: "Dimensiones armado", value: "80x40x90 cm" },
    { label: "Dimensiones plegado", value: "85x40x12 cm" },
    { label: "Capacidad", value: "8-10 personas" },
  ],
  features: [
    "Acero inoxidable resistente a la intemperie",
    "Plegable en segundos — sin herramientas",
    "Incluye bolsa de transporte",
    "Parrilla ajustable en 3 alturas",
    "Gancho lateral para utensilios",
    "Fácil limpieza — bandeja extraíble",
  ],
  paymentMethods: [
    "Tarjetas de crédito/débito",
    "PayPal",
    "Transferencia bancaria",
    "Pago en OXXO",
    "Hasta 12 meses sin intereses",
  ],
  reviews: [
    {
      id: "r1",
      author: "Carlos M.",
      rating: 5,
      date: "2025-12-10",
      content:
        "Excelente asador, lo usé en mi viaje a la playa y funcionó de maravilla. Muy fácil de armar y limpiar.",
    },
    {
      id: "r2",
      author: "Ana G.",
      rating: 4,
      date: "2025-11-22",
      content:
        "Muy buen producto, solo que me hubiera gustado que la bolsa fuera un poco más resistente. Por lo demás, perfecto.",
    },
    {
      id: "r3",
      author: "Pedro R.",
      rating: 5,
      date: "2025-10-15",
      content:
        "Lo compré para el día del padre y mi papá está encantado. La parrilla ajustable es un gran plus.",
    },
  ],
  faq: [
    {
      id: "f1",
      question: "¿Es fácil de armar?",
      answer:
        "Sí, se arma en menos de 2 minutos sin necesidad de herramientas. Solo despliega las patas y coloca la parrilla.",
    },
    {
      id: "f2",
      question: "¿Se puede usar en superficies irregulares?",
      answer:
        "Sí, las patas tienen niveladores individuales que se adaptan a terrenos irregulares como pasto o arena.",
    },
    {
      id: "f3",
      question: "¿Incluye garantía?",
      answer:
        "Sí, tiene 2 años de garantía contra defectos de fabricación. Cubrimos cualquier problema de materiales o mano de obra.",
    },
    {
      id: "f4",
      question: "¿La bolsa de transporte es impermeable?",
      answer:
        "Sí, la bolsa incluye un recubrimiento impermeable para proteger el asador durante el transporte y almacenamiento.",
    },
  ],
};
