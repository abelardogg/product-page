"use client";

import { X, ShoppingCart, Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cartStore";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPanel() {
  const {
    items,
    isOpen,
    closeCart,
    totalPrice,
    totalItems,
    removeItem,
    updateQuantity,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-black"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-sand-dark px-4 py-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-forest" />
                <h2 className="text-lg font-semibold text-charcoal">
                  Carrito ({totalItems})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="rounded-lg p-1 transition-colors hover:bg-sand"
              >
                <X className="h-5 w-5 text-charcoal-light" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {items.length === 0 ? (
                <div className="mt-16 text-center text-charcoal-light">
                  <ShoppingCart className="mx-auto mb-3 h-12 w-12 opacity-30" />
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.variantId}
                      className="flex items-center gap-3 rounded-xl border border-sand-dark p-3"
                    >
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-sand text-xl">
                        🔥
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="truncate text-sm font-medium text-charcoal">
                          {item.variantLabel}
                        </p>
                        <p className="text-sm text-forest-light font-semibold">
                          ${item.price.toLocaleString()}
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.variantId,
                                item.quantity - 1
                              )
                            }
                            className="rounded p-0.5 transition-colors hover:bg-sand"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[2ch] text-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.variantId,
                                item.quantity + 1
                              )
                            }
                            className="rounded p-0.5 transition-colors hover:bg-sand"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="rounded-lg p-1.5 transition-colors hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 text-red-400" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-sand-dark px-4 py-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-charcoal-light">Total</span>
                <span className="text-xl font-bold text-charcoal">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <button
                disabled={items.length === 0}
                className="w-full rounded-lg bg-forest py-3 font-semibold text-white transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                Ir al Carrito
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
