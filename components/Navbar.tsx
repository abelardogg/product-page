"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown, Mountain, Flame } from "lucide-react";
import { useCart } from "@/lib/cartStore";
import { motion, AnimatePresence } from "framer-motion";

const campingItems = [
  "Sleeping Bags",
  "Casa de Campaña",
  "Mochilas",
  "Linternas",
  "Baterías Portátiles",
];

const grillItems = [
  "Asadores",
  "Utensilios de Cocina",
  "Carbón e Iniciadores",
  "Mandiles y Guantes",
  "Salsas y Aderezos",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { openCart, totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-forest text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-glacier" />
          <span className="text-xl font-bold tracking-wide">ABX Camping</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <DropdownMenu
            label="Equipo de Camping"
            icon={<Mountain className="h-4 w-4" />}
            items={campingItems}
            isOpen={openDropdown === "camping"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "camping" ? null : "camping")
            }
          />
          <DropdownMenu
            label="Parrilladas"
            icon={<Flame className="h-4 w-4" />}
            items={grillItems}
            isOpen={openDropdown === "grill"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "grill" ? null : "grill")
            }
          />
          <a href="#" className="text-sand-dark hover:text-white transition-colors">
            Contacto
          </a>
          <a href="#" className="text-sand-dark hover:text-white transition-colors">
            About
          </a>
        </div>

        <button
          onClick={openCart}
          className="relative flex items-center gap-1 rounded-lg bg-forest-light px-3 py-2 transition-colors hover:bg-forest-dark"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-warm text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </button>

        <button
          className="ml-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-forest-dark md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
              <MobileSection title="Equipo de Camping" items={campingItems} />
              <MobileSection title="Parrilladas" items={grillItems} />
              <a href="#" className="py-1 text-sand-dark hover:text-white">
                Contacto
              </a>
              <a href="#" className="py-1 text-sand-dark hover:text-white">
                About
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function DropdownMenu({
  label,
  icon,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  icon: React.ReactNode;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <button className="flex items-center gap-1 text-sand-dark hover:text-white transition-colors">
        {icon}
        {label}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute left-0 top-full mt-1 w-56 rounded-lg bg-white p-2 shadow-xl"
          >
            {items.map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-md px-3 py-2 text-sm text-charcoal transition-colors hover:bg-sand"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="mb-1 text-sm font-semibold text-glacier">{title}</p>
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className="block py-1 pl-3 text-sm text-sand-dark hover:text-white"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
