import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Precios", href: "#precios" },
  { label: "FAQs", href: "#faqs" },
];

function BetsyRossFlag() {
  const stars = Array.from({ length: 13 }, (_, i) => {
    const angle = (i * 360) / 13 - 90;
    const rad = (angle * Math.PI) / 180;
    const cx = 50 + 18 * Math.cos(rad);
    const cy = 56 + 18 * Math.sin(rad);
    return { cx, cy };
  });
  return (
    <svg
      viewBox="0 0 100 67"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <rect width="100" height="67" fill="#B22234" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x="0"
          y={i * 9.57 + (i > 0 ? 0.5 : 0)}
          width="100"
          height={i === 6 ? 9.07 : 9.07}
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
        />
      ))}
      <rect x="0" y="0" width="40" height="38" fill="#3C3B6E" />
      {stars.map((s, i) => (
        <polygon
          key={i}
          points={[0, 1, 2, 3, 4]
            .map((j) => {
              const a = ((j * 144 - 90) * Math.PI) / 180;
              return `${s.cx + 3 * Math.cos(a)},${s.cy + 3 * Math.sin(a)}`;
            })
            .join(" ")}
          fill="#FFFFFF"
        />
      ))}
    </svg>
  );
}

export default function Header({ onOpenChat }: { onOpenChat: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="ProDigital.lat - Ir al inicio"
          >
            <div
              className="w-8 h-8 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
              aria-hidden="true"
            >
              <BetsyRossFlag />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              ProDigital<span className="text-brand-orange">.lat</span>
            </span>
          </a>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full rounded-full"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenChat}
              aria-label="Hablar por WhatsApp para cotización"
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Hablar por WhatsApp
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={
              menuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-navy-800/95 backdrop-blur-xl"
          >
            <nav
              className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Navegación móvil"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-white font-medium py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onOpenChat();
                  setMenuOpen(false);
                }}
                aria-label="Hablar por WhatsApp para cotización"
                className="mt-2 flex items-center justify-center gap-2 bg-brand-orange text-white font-semibold py-3 px-5 rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Hablar por WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
