"use client";

import { useState } from "react";
import { Check, CreditCard, Truck, Shield, Star } from "lucide-react";
import { product, type Variant } from "@/data/product";
import { useCart } from "@/lib/cartStore";
import { motion } from "framer-motion";

export default function ProductInfo() {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[1]
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      variantLabel: selectedVariant.label,
      quantity,
      price: selectedVariant.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  const avgRating =
    product.reviews.reduce((sum, r) => sum + r.rating, 0) /
    product.reviews.length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-1 text-sm font-medium text-forest-light">
          {product.brand}
        </p>
        <h1 className="text-3xl font-bold text-charcoal md:text-4xl">
          {product.name}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(avgRating)
                  ? "fill-warm text-warm"
                  : "text-sand-dark"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal-light">
          {avgRating.toFixed(1)} ({product.reviews.length} reseñas)
        </span>
      </div>

      <p className="text-charcoal-light leading-relaxed">
        {product.description}
      </p>

      <div>
        <p className="mb-2 text-sm font-medium text-charcoal-light">
          Tamaño
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVariant(v);
                setQuantity(1);
              }}
              className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all ${
                selectedVariant.id === v.id
                  ? "border-forest bg-forest text-white"
                  : "border-sand-dark text-charcoal hover:border-forest-light"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-charcoal">
          ${selectedVariant.price.toLocaleString()}
        </span>
        <span className="text-sm text-charcoal-light line-through">
          ${(selectedVariant.price * 1.25).toLocaleString()}
        </span>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
          25% OFF
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-lg border-2 border-sand-dark">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-lg transition-colors hover:bg-sand"
          >
            -
          </button>
          <span className="min-w-[3ch] text-center font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-lg transition-colors hover:bg-sand"
          >
            +
          </button>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleAddToCart}
          className={`flex-1 rounded-lg py-3 font-semibold text-white transition-all ${
            added
              ? "bg-green-600"
              : "bg-forest hover:bg-forest-light"
          }`}
        >
          {added ? (
            <span className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5" /> Agregado
            </span>
          ) : (
            "Agregar al Carrito"
          )}
        </motion.button>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-charcoal-light">
        <span className="flex items-center gap-1">
          <Truck className="h-4 w-4" /> Envío gratis
        </span>
        <span className="flex items-center gap-1">
          <Shield className="h-4 w-4" /> 2 años de garantía
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="h-4 w-4" /> 12 meses sin intereses
        </span>
      </div>

      <div className="rounded-xl bg-sand p-4">
        <p className="mb-2 text-sm font-semibold text-charcoal">
          Métodos de pago
        </p>
        <div className="flex flex-wrap gap-2">
          {product.paymentMethods.map((m) => (
            <span
              key={m}
              className="rounded-md bg-white px-3 py-1 text-xs text-charcoal-light shadow-sm"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="group relative mt-3 inline-block">
          <span
            tabIndex={0}
            aria-describedby="msi-tooltip"
            className="cursor-help text-xs font-medium text-forest underline decoration-dotted underline-offset-2 transition-colors hover:text-forest-light focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-light"
          >
            Hasta 12 meses sin intereses
          </span>
          <span
            id="msi-tooltip"
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 w-56 rounded-lg bg-charcoal px-3 py-2 text-xs leading-snug text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
          >
            En el checkout verás las tarjetas que aplican a meses sin intereses.
            <span className="absolute left-4 top-full -mt-1 h-2 w-2 rotate-45 bg-charcoal" />
          </span>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-charcoal">
          Características
        </h2>
        <ul className="space-y-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-charcoal-light">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-charcoal">
          Especificaciones
        </h2>
        <div className="divide-y divide-sand-dark rounded-xl border border-sand-dark">
          {product.specs.map((s) => (
            <div
              key={s.label}
              className="flex justify-between px-4 py-3 text-sm"
            >
              <span className="text-charcoal-light">{s.label}</span>
              <span className="font-medium text-charcoal">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
