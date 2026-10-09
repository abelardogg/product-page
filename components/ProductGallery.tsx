"use client";

import { useState } from "react";
import Image from "next/image";
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
            className="relative h-full w-full"
          >
            <Image
              src={images[current]}
              alt={`${productName} — imagen ${current + 1} de ${images.length}`}
              fill
              priority={current === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
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
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-16 w-16 flex-shrink-0 rounded-lg border-2 transition-all ${
              i === current
                ? "border-forest"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-md bg-sand-dark">
              <Image
                src={src}
                alt={`${productName} — miniatura ${i + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
