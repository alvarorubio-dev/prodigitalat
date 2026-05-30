import { motion } from 'framer-motion';
import { Check, MessageCircle, ShieldCheck, Zap, Smartphone, Mail, FileText, Globe, Star } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { WHATSAPP_URL } from '../constants';

const features = [
  { icon: Zap, text: 'Diseño de Alta Conversión enfocado en generar llamadas' },
  { icon: Smartphone, text: '100% Optimizado para celulares (mobile-first)' },
  { icon: MessageCircle, text: 'Botón de WhatsApp integrado para contacto directo' },
  { icon: Mail, text: 'Formulario de contacto directo a tu correo' },
  { icon: FileText, text: 'Copywriting persuasivo en inglés + sello "Se Habla Español"' },
  { icon: Globe, text: 'Dominio + Hosting incluidos el 1er año (renovación: $99/año después).' },
  { icon: Mail, text: '1 Correo corporativo (ej: info@tunegocio.com)' },
  { icon: ShieldCheck, text: 'Certificado de seguridad SSL incluido' },
];

export default function Pricing() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="precios" className="py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
            Precio Único — Sin Contratos Mensuales
          </motion.p>
          <motion.h2
            id="pricing-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            Pago Único.{' '}
            <span className="text-gradient">Tu Página Genera Llamadas Todo el Año.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Cero costos ocultos. Pagas una sola vez y la web, el dominio y el hosting son tuyos al 100%. Tu negocio, tu propiedad.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="max-w-lg mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-orange via-orange-400 to-yellow-400 rounded-3xl blur-sm opacity-70" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-brand-orange to-orange-400 px-8 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-orange-100 text-sm font-semibold uppercase tracking-wide mb-2">
                      Paquete Contratista Premium
                    </div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-white/50 text-xl font-bold line-through" aria-label="Precio original $897">$897</span>
                      <span className="text-white text-xs font-black px-2 py-1 rounded-full uppercase tracking-wide" style={{backgroundColor:'#0F172A'}}>55% OFF</span>
                    </div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-white text-5xl font-black" aria-label="Precio especial $399">$399</span>
                      <span className="text-orange-100 text-lg font-semibold">USD</span>
                    </div>
                    <div className="text-orange-100 text-sm mt-1">Pago único · Sin contratos mensuales</div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col gap-2 items-end">
                    <div className="bg-white text-brand-orange text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                      Más Popular
                    </div>
                    <div className="flex gap-0.5" aria-label="5 estrellas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-white fill-white" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-7">
                <div className="space-y-3.5 mb-8">
                  {features.map(({ text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} aria-hidden="true" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Empezar mi proyecto de página web - Contactar por WhatsApp"
                  className="group flex items-center justify-center gap-2.5 w-full bg-navy hover:bg-slate-800 active:bg-slate-900 text-white font-black text-lg py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-navy/30 hover:shadow-navy/50 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  EMPEZAR MI PROYECTO
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>

                <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                  <p className="text-amber-800 text-sm font-bold">
                    Cero Riesgo: Pagas el 50% para arrancar, y el 50% restante SOLO cuando veas tu página terminada y te encante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: '72h', label: 'Tiempo de entrega' },
              { value: '$399', label: 'Pago único total' },
              { value: 'WhatsApp', label: 'Soporte en Español' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 bg-slate-50 rounded-2xl">
                <div className="text-2xl font-black text-navy">{value}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
