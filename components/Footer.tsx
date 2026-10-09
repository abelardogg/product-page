import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  "Producto": ["Asadores", "Accesorios", "Ofertas", "Nuevos"],
  "Soporte": ["FAQ", "Garantía", "Envíos", "Devoluciones"],
  "Compañía": ["About", "Blog", "Contacto", "Trabaja con nosotros"],
};

export default function Footer() {
  return (
    <footer className="mt-20 bg-forest-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Mountain className="h-6 w-6 text-glacier" />
              <span className="text-lg font-bold">ABX Camping</span>
            </div>
            <p className="text-sm leading-relaxed text-sand-dark">
              Tu equipo de confianza para acampar y parrillar al aire libre.
            </p>
            <div className="mt-4 flex gap-3">
              <Facebook className="h-5 w-5 text-sand-dark hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-sand-dark hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-sand-dark hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 font-semibold text-glacier">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-sand-dark transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-forest pt-6 text-sm text-sand-dark sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" /> hola@abxcamping.mx
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> 800-123-4567
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> CDMX, México
            </span>
          </div>
          <p>© 2026 ABX Camping. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
