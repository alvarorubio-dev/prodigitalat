import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../hooks/useScrollAnimation";
import { WHATSAPP_URL } from "../constants";

function GoogleLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

const testimonials = [
  {
    name: "Carlos M.",
    trade: "Roofing · Dallas, TX",
    quote:
      "La primera semana recibí 6 llamadas nuevas. Con los primeros dos trabajos ya recuperé lo que pagué por la web. Ahora me llaman directo de Google, sin depender de nadie.",
    result: "+6 llamadas la primera semana",
    resultDetail: "2 trabajos cerrados = $3,800 USD",
    rating: 5,
    initials: "CM",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Roberto V.",
    trade: "Plumber · Houston, TX",
    quote:
      'Todo el proceso fue por WhatsApp, en español. En 3 días tenía mi página lista. Ahora aparezco en Google cuando buscan "plomero Houston" y me llaman solos.',
    result: "Página lista en 72 horas",
    resultDetail: "Invirtió $399, recuperó $2,200",
    rating: 5,
    initials: "RV",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Miguel A.",
    trade: "Landscaping · Miami, FL",
    quote:
      "Mis clientes piensan que soy una empresa grande. La página se ve muy profesional y me diferencia de la competencia. Cerré 4 contratos nuevos en el primer mes.",
    result: "4 contratos nuevos",
    resultDetail: "En el primer mes post-lanzamiento",
    rating: 5,
    initials: "MA",
    color: "from-orange-500 to-orange-600",
  },
];

export default function SocialProof() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section
      className="py-24 bg-navy relative overflow-hidden"
      aria-labelledby="social-proof-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(234,88,12,0.07)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4"
          >
            Resultados de Contratistas que ya Dieron el Paso
          </motion.h3>

          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <GoogleLogo />
              <div
                className="flex items-center gap-1"
                aria-label="4.9 de 5 estrellas en Google"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.9/5</span>
              <span className="text-slate-400 text-xs">en Google</span>
            </div>
          </motion.div>

          <motion.h2
            id="social-proof-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Contratistas que ya no dependen de{" "}
            <span className="text-gradient">
              intermediarios para conseguir clientes.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Negocios reales, crecimiento constante. Estos contratistas latinos
            dejaron de pagar comisiones a terceros y ahora reciben contactos
            directos de Google.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-6 mb-14"
        >
          {testimonials.map(
            ({
              name,
              trade,
              quote,
              result,
              resultDetail,
              rating,
              initials,
              color,
            }) => (
              <motion.article
                key={name}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-300"
                aria-label={`Testimonio de ${name}, ${trade}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="flex gap-1"
                    aria-label={`Calificación: ${rating} de 5 estrellas`}
                  >
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <GoogleLogo />
                </div>

                <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl px-4 py-3 flex items-center gap-3">
                  <TrendingUp
                    className="w-4 h-4 text-brand-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-white font-black text-sm">
                      {result}
                    </div>
                    <div className="text-slate-400 text-xs">{resultDetail}</div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm flex-1">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{name}</div>
                    <div className="text-slate-400 text-xs">{trade}</div>
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="relative bg-gradient-to-r from-brand-orange to-orange-400 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Empieza a construir tu presencia digital hoy.
            </h3>
            <p className="text-orange-100 text-lg mb-7 max-w-xl mx-auto">
              Cada día que pasas sin una página web profesional, es una ventaja
              directa que le regalas a tu competencia.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quiero más clientes — contactar por WhatsApp ahora"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a850] text-white font-black text-lg px-9 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-green-900/30 hover:-translate-y-1 active:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              QUIERO MÁS CLIENTES
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
