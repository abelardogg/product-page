"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { product } from "@/data/product";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-charcoal">
        Preguntas Frecuentes
      </h2>
      <div className="divide-y divide-sand-dark rounded-xl border border-sand-dark">
        {product.faq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-sand"
              >
                <span className="font-medium text-charcoal">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-charcoal-light transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm leading-relaxed text-charcoal-light">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
