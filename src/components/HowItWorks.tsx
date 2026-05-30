import { motion } from 'framer-motion';
import { Palette, MessageCircle, Zap } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: Palette,
    title: 'Eliges tu estilo por WhatsApp',
    description:
      'Te mostramos ejemplos de páginas web que ya generan llamadas para roofers, plomeros, landscapers y más en USA. Eliges la que más te gusta. Sin reuniones. Sin complicaciones.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Nos mandas tu info básica',
    description:
      'Solo necesitamos tu nombre, teléfono, servicios y ciudad. Nosotros nos encargamos de escribir los textos en inglés, diseñar todo y optimizarlo para Google. Cero estrés técnico.',
    color: 'from-green-500 to-emerald-400',
    glow: 'shadow-green-500/20',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Tu web lista en 72 horas',
    description:
      'En 3 días hábiles tienes tu página web profesional activa, con dominio, hosting y botón de WhatsApp incluidos. Lista para recibir llamadas de clientes en tu área desde el primer día.',
    color: 'from-brand-orange to-orange-400',
    glow: 'shadow-orange-500/20',
  },
];

export default function HowItWorks() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-24 bg-navy overflow-hidden relative" aria-labelledby="how-it-works-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
            Sin Reuniones. Sin Tecnología. Solo WhatsApp.
          </motion.p>
          <motion.h2
            id="how-it-works-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Cómo funciona nuestro servicio de{' '}
            <span className="text-gradient">diseño web</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            No necesitas saber de computadoras ni hablar inglés perfecto. Solo mándanos un mensaje y nosotros hacemos todo.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-blue-500/30 via-green-500/30 to-brand-orange/30" />

          {steps.map(({ number, icon: Icon, title, description, color, glow }, index) => (
            <motion.div
              key={number}
              variants={fadeInUp}
              className="relative flex flex-col items-center text-center"
            >
              <div className={`relative w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-2xl ${glow} mb-6 z-10`}>
                <Icon className="w-9 h-9 text-white" strokeWidth={2} aria-hidden="true" />
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-navy border-2 border-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-black text-white">{index + 1}</span>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 w-full">
                <div className="text-brand-orange/40 font-black text-4xl mb-3 leading-none">{number}</div>
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-slate-200 leading-relaxed text-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-base">
            Sin conocimientos técnicos.{' '}
            <span className="text-white font-semibold">Hablamos Español.</span>{' '}
            Proceso 100% por WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
