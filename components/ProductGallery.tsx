"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex h-full w-full items-center justify-center"
          >
            <div className="text-center text-charcoal-light">
              <div className="mb-2 text-6xl">🔥</div>
              <p className="text-lg font-medium">{productName}</p>
              <p className="text-sm">Imagen {current + 1} de {images.length}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow transition-colors hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5 text-charcoal" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow transition-colors hover:bg-white"
        >
          <ChevronRight className="h-5 w-5 text-charcoal" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === current ? "bg-forest w-4" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-16 w-16 flex-shrink-0 rounded-lg border-2 transition-all ${
              i === current
                ? "border-forest"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <div className="flex h-full w-full items-center justify-center rounded-md bg-sand-dark text-lg">
              🔥
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
