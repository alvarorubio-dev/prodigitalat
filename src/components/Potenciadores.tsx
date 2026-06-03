import { motion } from "framer-motion";
import {
  Languages,
  MapPin,
  CreditCard,
  Brush,
  MailPlus,
  PenLine,
  MessageCircle,
  Star,
} from "lucide-react";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../hooks/useScrollAnimation";

interface Addon {
  icon: React.ElementType;
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}

const addons: Addon[] = [
  {
    icon: Languages,
    title: "Website 100% Bilingüe (English/Español)",
    price: "$99 USD",
    description:
      "Atrapa a la comunidad latina y al mercado americano. Traducción profesional con botón para cambiar idioma.",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Aparecer en Google Maps (Perfil de Negocio)",
    price: "$149 USD",
    description:
      "Aparece en el mapa para búsquedas de urgencia. Optimizamos tu ficha de negocio en Google para que te encuentren primero.",
    featured: true,
  },
  {
    icon: CreditCard,
    title: "Botón de Pagos Online",
    price: "$79 USD",
    description:
      "Cobra deposits o el costo del estimate directo en tu página web con tarjeta de crédito de forma segura.",
  },
  {
    icon: Brush,
    title: "Diseño de Logo Comercial",
    price: "$49 USD",
    description:
      "Identidad visual lista para tus uniformes. Te diseñamos un logo moderno para que te veas como una empresa seria.",
  },
  {
    icon: MailPlus,
    title: "Correos Corporativos Extra",
    price: "$25 USD c/u",
    description:
      "Tu paquete base ya incluye 1 correo. Si necesitas cuentas separadas para tu secretaria o estimadores, las creamos por ti.",
  },
  {
    icon: PenLine,
    title: "Modificaciones Adicionales",
    price: "$49 USD",
    description:
      "Si semanas después decides que quieres cambiar fotos o agregar un nuevo servicio, nosotros lo hacemos rápido.",
  },
];

export default function Potenciadores({
  onOpenChat,
}: {
  onOpenChat: () => void;
}) {
  const { ref, controls } = useScrollAnimation();

  return (
    <section
      id="potenciadores"
      aria-label="Potenciadores opcionales para tu paquete web"
      className="py-20 bg-[#F8FAFC] border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3"
          >
            Servicios de Crecimiento Digital para tu Negocio 🇺🇸
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            Servicios adicionales para crecer{" "}
            <span className="text-gradient">más rápido en tu ciudad</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Estos complementos{" "}
            <strong className="text-slate-700">NO son obligatorios</strong>.
            Escala tu presencia online en Estados Unidos. Tu Página Web para
            contractors ya incluye el diseño de alta conversión para generar
            llamadas, pero puedes sumar estas herramientas de posicionamiento en
            Google e idiomas para dominar tu ciudad.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {addons.map(({ icon: Icon, title, price, description, featured }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              className={`relative bg-white rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                featured
                  ? "border-brand-orange/40 shadow-md shadow-orange-900/8"
                  : "border-slate-200 shadow-sm"
              }`}
              aria-label={`Potenciador: ${title}`}
            >
              {featured && (
                <div className="absolute -top-3 left-5">
                  <span className="inline-flex items-center gap-1 bg-brand-orange text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                    <Star
                      className="w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                    />
                    Recomendado
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    featured ? "bg-orange-50" : "bg-slate-50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${featured ? "text-brand-orange" : "text-navy-700"}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-navy font-bold text-sm leading-snug">
                    {title}
                  </h3>
                  <p className="text-brand-orange font-black text-lg mt-0.5">
                    {price}
                  </p>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {description}
              </p>

              <button
                onClick={onOpenChat}
                aria-label={`Agregar "${title}" al paquete por WhatsApp`}
                className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border cursor-pointer ${
                  featured
                    ? "border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                    : "border-slate-200 text-slate-600 hover:border-navy hover:text-navy"
                }`}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Agregar al paquete
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
