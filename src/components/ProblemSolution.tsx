import { motion } from 'framer-motion';
import { PhoneMissed, DollarSign, Search } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const cards = [
  {
    icon: Search,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    borderAccent: 'border-t-red-400',
    title: 'Pierdes Trabajos Cada Día por No Estar en Google',
    description:
      'Ahora mismo, alguien en tu ciudad está buscando desde su celular "roofer near me" o "plomero urgente". Si no apareces, le llaman a tu competencia. No es falta de talento — es falta de presencia digital.',
    tag: 'El Problema: Pierdes Trabajos de Roofing y Plomería por No Estar en Google',
    tagShort: 'El Problema',
    tagColor: 'bg-red-50 text-red-600',
  },
  {
    icon: PhoneMissed,
    iconBg: 'bg-orange-50',
    iconColor: 'text-brand-orange',
    borderAccent: 'border-t-brand-orange',
    title: 'Cada Llamada Perdida Vale Entre $300 y $5,000 USD',
    description:
      'Un trabajo de roofing vale entre $3,000 y $15,000. Una remodelación, $5,000 o más. Si pierdes solo 2-3 llamadas al mes por no tener web, estás dejando miles de dólares en la calle.',
    tag: 'El Impacto',
    tagShort: 'El Impacto',
    tagColor: 'bg-orange-50 text-brand-orange',
  },
  {
    icon: DollarSign,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderAccent: 'border-t-emerald-500',
    title: 'HomeAdvisor y el Boca a Boca Ya No Son Suficientes',
    description:
      'Pagar $50-$100 por cada lead compartido en HomeAdvisor o Angi ya no tiene sentido. Con tu propia página web, los clientes te llaman a ti directo — sin intermediarios y sin pagar comisiones.',
    tag: 'La Solución: Diseño de Páginas Web para Contratistas Hispanos en USA',
    tagShort: 'La Solución',
    tagColor: 'bg-emerald-50 text-emerald-700',
  },
];

export default function ProblemSolution() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="beneficios" className="py-24 bg-slate-50" aria-labelledby="problem-solution-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
            El error más costoso de los contratistas en USA
          </motion.p>
          <motion.h2
            id="problem-solution-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            Hoy alguien en tu ciudad buscó contratistas en Google{' '}
            <span className="text-brand-orange">— y llamó a tu competencia.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Mientras tú estás subido en un techo o en medio de una instalación, alguien en tu área está buscando desde su celular "plomero urgente" o "roofing contractor". Si al buscar en Google no encuentran tu página web profesional, esa llamada (y ese contrato) se va directo a tu competencia. No los pierdes por falta de talento, los pierdes por falta de presencia digital.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map(({ icon: Icon, iconBg, iconColor, borderAccent, title, description, tag, tagShort, tagColor }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-t-4 ${borderAccent} overflow-hidden`}
            >
              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden="true" />
                  </div>
                  <h2 className={`text-xs font-bold px-3 py-1 rounded-full ${tagColor}`} aria-label={tag}>
                    {tagShort}
                  </h2>
                </div>
                <h3 className="text-xl font-black text-navy mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="mt-14 bg-navy rounded-3xl p-8 sm:p-10 text-center"
        >
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-bold">La buena noticia:</span> No necesitas saber de tecnología, ni inglés perfecto, ni gastar miles en una agencia. Nosotros creamos tu página web profesional optimizada para Google{' '}
            <span className="text-brand-orange font-bold">por $399 USD, todo por WhatsApp, en 72 horas.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
