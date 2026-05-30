import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { WHATSAPP_URL } from '../constants';

export default function FinalCTA() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-24 bg-navy relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.15)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm font-bold px-5 py-2 rounded-full">
            <Clock className="w-4 h-4" aria-hidden="true" />
            Solo quedan 3 cupos disponibles esta semana
          </motion.div>

          <motion.h2
            id="final-cta-heading"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"
          >
            Empieza a Recibir Más{' '}
            <span className="text-gradient">Llamadas Esta Semana</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-xl leading-relaxed max-w-2xl"
          >
            Tu competencia ya tiene web y ya está recibiendo tus clientes. Cada día que esperas es dinero que pierdes.
          </motion.p>

          <motion.ul variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-left" aria-label="Resumen de beneficios">
            {[
              'Página web lista en 72 horas',
              'Todo por WhatsApp en español',
              'Paga el 50% al ver resultados',
            ].map((text) => (
              <li key={text} className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">{text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Empezar ahora por WhatsApp para recibir más clientes"
              className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a850] text-white font-black text-xl px-10 py-5 rounded-2xl transition-all duration-200 shadow-2xl shadow-green-900/40 hover:shadow-green-900/60 hover:-translate-y-1 active:translate-y-0"
            >
              <WhatsAppIcon className="w-6 h-6" />
              EMPEZAR AHORA
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-slate-500 text-sm">
            Sin compromisos · Respuesta en minutos · Hablamos Español
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
