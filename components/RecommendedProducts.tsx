import { ShoppingCart } from "lucide-react";

const recommendations = [
  {
    id: "pizza-stone",
    name: "Piedra para Pizza",
    price: 349,
    emoji: "🍕",
    desc: "Perfecta para pizzas crujientes en tu asador",
  },
  {
    id: "cover",
    name: "Funda Protectora",
    price: 199,
    emoji: "🛡️",
    desc: "Funda impermeable para proteger tu asador",
  },
  {
    id: "tool-set",
    name: "Set de Utensilios",
    price: 449,
    emoji: "🔪",
    desc: "Espátula, pinzas y cepillo, todo en uno",
  },
];

export default function RecommendedProducts() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-charcoal">
        Productos Recomendados
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="group rounded-xl border border-sand-dark bg-white p-4 transition-all hover:border-forest-light hover:shadow-lg"
          >
            <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-sand text-5xl">
              {rec.emoji}
            </div>
            <h3 className="font-semibold text-charcoal">{rec.name}</h3>
            <p className="mb-3 text-sm text-charcoal-light">{rec.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-forest">
                ${rec.price}
              </span>
              <button className="flex items-center gap-1 rounded-lg bg-forest px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-forest-light">
                <ShoppingCart className="h-4 w-4" /> Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
