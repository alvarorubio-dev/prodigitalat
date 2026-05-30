import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

const rows = [
  {
    feature: 'Precio',
    prodigital: '$399 pago único',
    homeadvisor: '$50–$100 por lead',
    agency: '$3,000–$5,000',
    prodigitalHighlight: true,
    homeadvisorBad: true,
    agencyBad: true,
  },
  {
    feature: 'Idioma',
    prodigital: 'Español 100%',
    homeadvisor: 'Inglés',
    agency: 'Inglés',
    prodigitalHighlight: true,
    homeadvisorBad: false,
    agencyBad: false,
  },
  {
    feature: 'Tiempo de entrega',
    prodigital: '72 horas',
    homeadvisor: 'Inmediato',
    agency: '2 a 3 meses',
    prodigitalHighlight: true,
    homeadvisorBad: false,
    agencyBad: true,
  },
  {
    feature: 'Tus clientes',
    prodigital: 'Te llaman directo a ti',
    homeadvisor: 'Compartidos con tu competencia',
    agency: 'Te llaman directo a ti',
    prodigitalHighlight: true,
    homeadvisorBad: true,
    agencyBad: false,
  },
  {
    feature: 'Comisiones',
    prodigital: 'Cero',
    homeadvisor: 'Pagas por cada lead',
    agency: 'Cero',
    prodigitalHighlight: true,
    homeadvisorBad: true,
    agencyBad: false,
  },
];

function StatusIcon({ good, bad }: { good?: boolean; bad?: boolean }) {
  if (good) return <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mx-auto" strokeWidth={3} aria-hidden="true" />;
  if (bad) return <X className="w-4 h-4 text-red-400 flex-shrink-0 mx-auto" strokeWidth={3} aria-hidden="true" />;
  return <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mx-auto" strokeWidth={2.5} aria-hidden="true" />;
}

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="comparison-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
            Comparativa Honesta
          </p>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            La Diferencia: Por qué los contratistas{' '}
            <span className="text-gradient">nos prefieren</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Deja de pagar comisiones abusivas por leads compartidos o miles de dólares por agencias lentas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100"
        >
          <table className="w-full min-w-[600px] border-collapse" role="table">
            <thead>
              <tr className="border-b border-slate-100">
                {/* Feature column header */}
                <th
                  scope="col"
                  className="text-left text-sm font-bold text-slate-400 uppercase tracking-wider py-5 px-6 bg-slate-50 w-[22%]"
                >
                  Característica
                </th>

                {/* ProDigital column header — highlighted */}
                <th
                  scope="col"
                  className="text-center py-5 px-4 bg-orange-50 w-[26%] relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-orange-400 rounded-t-3xl" />
                  <span className="inline-flex flex-col items-center gap-1">
                    <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Mejor opción</span>
                    <span className="text-base font-black text-navy">ProDigital.lat</span>
                  </span>
                </th>

                {/* HomeAdvisor column header — muted */}
                <th
                  scope="col"
                  className="text-center text-sm font-semibold text-slate-400 py-5 px-4 bg-slate-50 w-[26%]"
                >
                  HomeAdvisor / Angi
                </th>

                {/* Agency column header — muted */}
                <th
                  scope="col"
                  className="text-center text-sm font-semibold text-slate-400 py-5 px-4 bg-slate-50 w-[26%]"
                >
                  Agencia Tradicional
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-slate-100 last:border-0 transition-colors duration-150 ${i % 2 === 0 ? '' : 'bg-slate-50/40'}`}
                >
                  {/* Feature label */}
                  <td className="py-4 px-6 text-sm font-bold text-slate-600 bg-slate-50/60">
                    {row.feature}
                  </td>

                  {/* ProDigital cell — highlighted */}
                  <td className="py-4 px-4 bg-orange-50/70 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <StatusIcon good />
                      <span className="text-sm font-black text-navy leading-snug">{row.prodigital}</span>
                    </div>
                  </td>

                  {/* HomeAdvisor cell — muted */}
                  <td className="py-4 px-4 text-center opacity-70">
                    <div className="flex flex-col items-center gap-1.5">
                      <StatusIcon bad={row.homeadvisorBad} />
                      <span className="text-sm font-medium text-slate-500 leading-snug">{row.homeadvisor}</span>
                    </div>
                  </td>

                  {/* Agency cell — muted */}
                  <td className="py-4 px-4 text-center opacity-70">
                    <div className="flex flex-col items-center gap-1.5">
                      <StatusIcon bad={row.agencyBad} />
                      <span className="text-sm font-medium text-slate-500 leading-snug">{row.agency}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center text-slate-400 text-sm"
        >
          Misma inversión que <strong className="text-slate-500">2 leads de HomeAdvisor</strong> — pero con una página web que trabaja para ti los 365 días del año.
        </motion.p>
      </div>
    </section>
  );
}
