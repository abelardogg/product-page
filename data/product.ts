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
    "/images/asador1.webp",
    "/images/asador2.webp",
    "/images/asador3.webp",
  ],
  description:
    "Asador portátil de acero inoxidable, ideal para camping y parrilladas al aire libre. Diseño plegable, fácil de transportar y montar.",
  longDescription:
    "Este asador profesional se pliega sobre sí mismo hasta quedar del tamaño de un maletín de 43 x 26 cm, con broches de seguridad y asa para llevarlo donde quieras. Armado mide 43 cm de ancho, 26 de fondo y 46 de alto. La parrilla de acero inoxidable se ajusta en altura para controlar la cocción, y la tapa abatible protege las brasas del viento. Incluye espátula, pinzas y dos brochetas con mango de madera.",
  price: 1899,
  variants: [
    { id: "med", label: "Mediano (60cm)", price: 1599 },
    { id: "lg", label: "Grande (80cm)", price: 1899 },
    { id: "xl", label: "Extra Grande (100cm)", price: 2299 },
  ],
  specs: [
    { label: "Material", value: "Acero inoxidable" },
    { label: "Ancho", value: "43 cm" },
    { label: "Fondo", value: "26 cm" },
    { label: "Alto", value: "46 cm" },
    { label: "Plegado", value: "43 x 26 cm — tipo maletín" },
    { label: "Incluye", value: "Espátula, pinzas y 2 brochetas" },
  ],
  features: [
    "Parrilla de acero inoxidable ajustable en altura",
    "Se pliega tipo maletín y cierra con broches de seguridad",
    "Patas plegables — se arma sin herramientas",
    "Asa de transporte integrada",
    "Incluye espátula, pinzas y 2 brochetas con mango de madera",
    "Tapa abatible que protege del viento",
  ],
  paymentMethods: [
    "Tarjetas de crédito/débito",
    "PayPal",
    "Transferencia bancaria",
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
        "Sí, las cuatro patas son anchas en la base y reparten el peso, así que se sostiene bien en pasto o arena compacta. En terreno muy desnivelado conviene buscar una superficie plana.",
    },
    {
      id: "f3",
      question: "¿Incluye garantía?",
      answer:
        "Sí, tiene 2 años de garantía contra defectos de fabricación. Cubrimos cualquier problema de materiales o mano de obra.",
    },
    {
      id: "f4",
      question: "¿Cómo se transporta?",
      answer:
        "Se pliega sobre sí mismo hasta quedar como un maletín de 43 x 26 cm. Los broches laterales lo mantienen cerrado y el asa integrada te permite cargarlo con una mano. Los utensilios viajan dentro.",
    },
  ],
};
