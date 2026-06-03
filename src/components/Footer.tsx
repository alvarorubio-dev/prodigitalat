import { MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

type FooterProps = {
  onOpenChat?: () => void;
};

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
          height={9.07}
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

export default function Footer({ onOpenChat }: FooterProps) {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4 max-w-xs text-center md:text-left">
            <a
              href="#"
              className="flex items-center gap-2"
              aria-label="ProDigital.lat - Ir al inicio"
            >
              <div
                className="w-9 h-9 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                aria-hidden="true"
              >
                <BetsyRossFlag />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                ProDigital<span className="text-brand-orange">.lat</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Impulsando el crecimiento de los negocios latinos en Estados
              Unidos.
            </p>
            <button
              onClick={() => onOpenChat && onOpenChat()}
              aria-label="Abrir chat"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Contactar por WhatsApp
            </button>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-16 gap-y-3 text-center md:text-left"
            aria-label="Navegación del pie de página"
          >
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
                Navegación
              </h4>
              {["Cómo Funciona", "Beneficios", "Precios", "FAQs"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("ó", "o").replace("á", "a").replace("é", "e")}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
                Legal
              </h4>
              <Link
                to="/privacidad"
                aria-label="Leer Políticas de Privacidad"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Políticas de Privacidad
              </Link>
              <Link
                to="/terminos"
                aria-label="Leer Términos y Condiciones"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 ProDigital.lat. Todos los derechos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-200 group"
          >
            Volver arriba
            <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-200">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
