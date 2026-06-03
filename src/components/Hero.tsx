import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Phone,
  CheckCircle,
} from "lucide-react";

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
import { fadeInUp, staggerContainer } from "../hooks/useScrollAnimation";

function PhoneMockup() {
  return (
    <div
      className="relative flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-blue-500/10 rounded-full blur-3xl scale-110" />
      <div className="relative w-64 h-[520px] lg:w-72 lg:h-[580px]">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-navy rounded-[3rem] shadow-2xl border border-white/10" />
        <div className="absolute inset-[3px] bg-gradient-to-b from-slate-900 to-navy-800 rounded-[2.8rem] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10" />
          <div className="pt-8 px-3 h-full flex flex-col gap-2">
            <div className="bg-gradient-to-r from-brand-orange to-orange-400 rounded-xl p-3 text-white">
              <div className="text-[9px] font-black uppercase tracking-wide opacity-80">
                MARTINEZ ROOFING CO.
              </div>
              <div className="text-[13px] font-black leading-tight mt-1">
                Roofing Experts
                <br />
                You Can Trust
              </div>
              <div className="flex items-center gap-1 mt-2">
                <div className="bg-white/20 rounded-md px-2 py-1 text-[8px] font-semibold">
                  Free Estimate
                </div>
                <div className="bg-white rounded-md px-2 py-1 text-[8px] font-bold text-brand-orange">
                  Call Now
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex gap-2 items-start">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-white">
                    5.0 Google Reviews
                  </div>
                  <div className="text-[8px] text-slate-400 mt-0.5">
                    "Best roofer in Dallas!"
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Licensed", icon: ShieldCheck },
                { label: "Insured", icon: ShieldCheck },
                { label: "15+ Years", icon: TrendingUp },
                { label: "Same Day", icon: Zap },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col items-center gap-1"
                >
                  <Icon className="w-3 h-3 text-brand-orange" />
                  <span className="text-[8px] text-slate-300 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-[9px] text-slate-400 font-medium mb-2">
                Our Work
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[
                  "from-orange-400 to-red-400",
                  "from-blue-400 to-cyan-400",
                  "from-emerald-400 to-green-400",
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`h-12 bg-gradient-to-br ${gradient} rounded-lg opacity-70`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-xl p-2.5 mb-1">
              <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
              <div>
                <div className="text-[9px] font-bold text-green-300">
                  WhatsApp Direct
                </div>
                <div className="text-[8px] text-slate-400">
                  Contacta al instante
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
      </div>

      <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-2xl px-4 py-2.5 border border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-slate-800">
            +14 llamadas esta semana
          </span>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-6 bg-navy rounded-2xl shadow-2xl px-4 py-2.5 border border-white/10">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-brand-orange" />
          <span className="text-xs font-bold text-white">
            Listo en <span className="text-brand-orange">72 horas</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <section
      className="relative min-h-screen bg-navy overflow-hidden flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <p className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                <Zap
                  className="w-3 h-3"
                  fill="currentColor"
                  aria-hidden="true"
                />
                Diseño web para contratistas en USA — Entrega en 72h
              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"
            >
              Páginas Web para Contratistas en Estados Unidos —{" "}
              <span className="text-gradient">Listas en 72 Horas</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Diseño web profesional para roofers, plomeros y landscapers.{" "}
              <span className="text-brand-orange font-semibold">
                Cotiza e inicia al instante por chat, en español y sin reuniones
                molestas..
              </span>
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="flex flex-col gap-3"
              aria-label="Beneficios principales"
            >
              {[
                "Sin reuniones — Todo interactivo por chat, en tu idioma y a tu ritmo.",
                "Nosotros hacemos todo — tú solo nos mandas tus datos",
                "Tu página queda lista para captar llamadas y mensajes desde Google.",
              ].map((text) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-slate-300 text-base"
                >
                  <CheckCircle
                    className="w-5 h-5 text-brand-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={onOpenChat}
                aria-label="COTIZAR POR CHAT MI PÁGINA WEB AHORA"
                className="group flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a850] text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-green-900/40 hover:shadow-green-900/60 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                COTIZAR MI WEB AHORA
              </button>
              <a
                href="#ejemplos"
                aria-label="Ver ejemplos de páginas web para contratistas"
                className="flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white/50 text-white hover:text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5"
              >
                VER EJEMPLOS
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-2 pt-1"
            >
              <p className="text-amber-400 text-sm font-bold">
                Cupos limitados — solo aceptamos 5 proyectos nuevos por semana
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  "Hablamos Español",
                  "Dominio + Hosting incluido",
                  "Sin contratos mensuales",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 text-slate-400 text-sm font-medium"
                  >
                    <CheckCircle
                      className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
