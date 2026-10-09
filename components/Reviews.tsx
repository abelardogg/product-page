"use client";

import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { product } from "@/data/product";

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(2);
  const visibleReviews = product.reviews.slice(0, visibleCount);
  const allShown = visibleCount >= product.reviews.length;

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-charcoal">
        Reseñas de Clientes
      </h2>
      <div className="space-y-4">
        {visibleReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-sand-dark p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-charcoal">{review.author}</span>
              <span className="text-xs text-charcoal-light">{review.date}</span>
            </div>
            <div className="mb-2 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "fill-warm text-warm"
                      : "text-sand-dark"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-charcoal-light">
              {review.content}
            </p>
            <button className="mt-2 flex items-center gap-1 text-xs text-charcoal-light transition-colors hover:text-forest">
              <ThumbsUp className="h-3 w-3" /> Útil
            </button>
          </motion.div>
        ))}
      </div>
      {!allShown && (
        <button
          onClick={() => setVisibleCount(product.reviews.length)}
          className="mt-4 rounded-lg border-2 border-forest px-6 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white"
        >
          Ver todas las reseñas
        </button>
      )}
    </section>
  );
}
