import { motion } from "framer-motion";
import { Phone, Star, ExternalLink, MessageCircle } from "lucide-react";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../hooks/useScrollAnimation";

const examples = [
  {
    trade: "Roofing",
    title: "Torres Roofing Co.",
    location: "Houston, TX",
    description:
      "Diseño oscuro y profesional con llamados de acción directos para generar estimados.",
    primaryColor: "from-slate-800 to-slate-900",
    accentColor: "bg-red-500",
    textAccent: "text-red-400",
    heroText: "Dallas Roof Repair & Replacement",
    subText: "Licensed & Insured · Free Estimates",
    badge: "Se Habla Español",
    stars: 5,
    reviews: "87 reviews",
    imgAlt: "Ejemplo de website profesional para empresa de roofing",
    image: "/roofing.png",
    liveUrl: "https://torres-roofing.vercel.app/",
    stats: [
      { label: "Llamadas/semana", value: "+8" },
      { label: "Google rank", value: "#1" },
    ],
  },
  {
    trade: "Plumbing",
    title: "Houston Elite Plumbers",
    location: "Houston, TX",
    description:
      "Diseño limpio y confiable con servicio 24/7 destacado para emergencias.",
    primaryColor: "from-blue-900 to-slate-900",
    accentColor: "bg-blue-500",
    textAccent: "text-blue-400",
    heroText: "Houston Plumber — Available 24/7",
    subText: "Emergency Service · Same Day",
    badge: "Se Habla Español",
    stars: 5,
    reviews: "64 reviews",
    image: "/plumbers_houston.png",
    liveUrl: "https://houstonflowplumbing.vercel.app/",
    stats: [
      { label: "Llamadas/semana", value: "+11" },
      { label: "Google rank", value: "#2" },
    ],
    featured: true,
  },
  {
    trade: "Landscaping",
    title: "Gutierrez Lawn & Garden",
    location: "Miami, FL",
    description:
      "Diseño vibrante con galería de proyectos para mostrar el trabajo.",
    primaryColor: "from-emerald-900 to-slate-900",
    accentColor: "bg-emerald-500",
    textAccent: "text-emerald-400",
    heroText: "Miami Landscaping & Lawn Care",
    subText: "Residential & Commercial · Free Quote",
    badge: "Se Habla Español",
    stars: 5,
    reviews: "52 reviews",
    stats: [
      { label: "Llamadas/semana", value: "+6" },
      { label: "Google rank", value: "#1" },
    ],
  },
];

function MockupCard({ example }: { example: (typeof examples)[0] }) {
  const {
    primaryColor,
    accentColor,
    textAccent,
    heroText,
    subText,
    badge,
    stars,
    reviews,
    stats,
  } = example;
  return (
    <div
      className={`w-full bg-gradient-to-b ${primaryColor} rounded-xl overflow-hidden border border-white/5 shadow-xl`}
    >
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div
            className={`text-[8px] font-black uppercase tracking-widest ${textAccent}`}
          >
            {example.title.toUpperCase()}
          </div>
          <div
            className={`${accentColor} text-white text-[7px] font-bold px-2 py-0.5 rounded-full`}
          >
            {badge}
          </div>
        </div>
        <div>
          <div className="text-white font-black text-xs leading-tight">
            {heroText}
          </div>
          <div className="text-slate-400 text-[8px] mt-0.5">{subText}</div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: stars }).map((_, i) => (
            <Star
              key={i}
              className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400"
            />
          ))}
          <span className="text-slate-400 text-[8px] ml-1">{reviews}</span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div
            className={`${accentColor} bg-opacity-20 border border-white/10 rounded-lg p-2 flex items-center gap-1`}
          >
            <Phone className="w-3 h-3 text-white flex-shrink-0" />
            <span className="text-white text-[8px] font-bold">Call Now</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 rounded-lg p-2 text-center"
            >
              <div className={`${textAccent} font-black text-sm`}>
                {s.value}
              </div>
              <div className="text-slate-500 text-[7px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WebsiteExamples({
  onOpenChat,
}: {
  onOpenChat?: () => void;
}) {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="ejemplos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3"
          >
            Ejemplos de páginas web para contratistas
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            Tu Negocio Puede Verse{" "}
            <span className="text-gradient">Así de Profesional</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8"
        >
          {examples.map((ex) => (
            <motion.div
              key={ex.trade}
              variants={fadeInUp}
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-5 pb-0">
                {ex.image ? (
                  <a
                    href={ex.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className="w-full rounded-xl overflow-hidden border border-slate-100 shadow-md"
                      style={{ height: "220px" }}
                    >
                      <img
                        src={ex.image}
                        alt={ex.imgAlt}
                        className="w-full object-cover object-top"
                        style={{ height: "220px" }}
                      />
                    </div>
                  </a>
                ) : (
                  <MockupCard example={ex} />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-navy font-black text-lg mb-1">
                  {ex.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {ex.description}
                </p>
                <a
                  href={ex.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2 border-slate-200 text-slate-700 hover:border-navy hover:text-navy"
                >
                  <ExternalLink className="w-4 h-4" /> Ver sitio en vivo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenChat && onOpenChat()}
            aria-label="Abrir chat"
            className="inline-flex items-center gap-2 bg-brand-orange hover:brightness-95 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Chatear con nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
