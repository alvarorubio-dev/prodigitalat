import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star, ExternalLink } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { WHATSAPP_URL } from '../constants';

const examples = [
  {
    trade: 'Roofing',
    title: 'Torres Roofing Co.',
    location: 'Houston, TX',
    description: 'Diseño oscuro y profesional con llamados de acción directos para generar estimados.',
    primaryColor: 'from-slate-800 to-slate-900',
    accentColor: 'bg-red-500',
    textAccent: 'text-red-400',
    borderColor: 'border-red-500/30',
    heroText: 'Dallas Roof Repair & Replacement',
    subText: 'Licensed & Insured · Free Estimates',
    badge: 'Se Habla Español',
    stars: 5,
    reviews: '87 reviews',
    imgAlt: 'Ejemplo de website profesional para empresa de roofing en Houston, Texas, con diseño oscuro y botones de llamada a la acción',
    image: '/roofing.png',
    liveUrl: 'https://torres-roofing.vercel.app/',
    stats: [
      { label: 'Llamadas/semana', value: '+8' },
      { label: 'Google rank', value: '#1' },
    ],
  },
  {
    trade: 'Plumbing',
    title: 'Houston Elite Plumbers',
    location: 'Houston, TX',
    description: 'Diseño limpio y confiable con servicio 24/7 destacado para emergencias.',
    primaryColor: 'from-blue-900 to-slate-900',
    accentColor: 'bg-blue-500',
    textAccent: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    heroText: 'Houston Plumber — Available 24/7',
    subText: 'Emergency Service · Same Day',
    badge: 'Se Habla Español',
    stars: 5,
    reviews: '64 reviews',
    imgAlt: 'Ejemplo de website profesional para plomero en Houston, Texas, con diseño azul y resaltando servicio de emergencias 24 horas',
    image: '/plumbing-houston.png',
    liveUrl: 'https://houstonflowplumbing.vercel.app/',
    stats: [
      { label: 'Llamadas/semana', value: '+11' },
      { label: 'Google rank', value: '#2' },
    ],
    featured: true,
  },
  {
    trade: 'Landscaping',
    title: 'Gutierrez Lawn & Garden',
    location: 'Miami, FL',
    description: 'Diseño vibrante con galería de proyectos para mostrar el trabajo y atraer clientes.',
    primaryColor: 'from-emerald-900 to-slate-900',
    accentColor: 'bg-emerald-500',
    textAccent: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    heroText: 'Miami Landscaping & Lawn Care',
    subText: 'Residential & Commercial · Free Quote',
    badge: 'Se Habla Español',
    stars: 5,
    reviews: '52 reviews',
    imgAlt: 'Ejemplo de website profesional para empresa de landscaping en Miami, Florida, con diseño verde y galería de proyectos',
    stats: [
      { label: 'Llamadas/semana', value: '+6' },
      { label: 'Google rank', value: '#1' },
    ],
  },
];

function MockupCard({ example }: { example: typeof examples[0] }) {
  const { primaryColor, accentColor, textAccent, heroText, subText, badge, stars, reviews, stats } = example;
  return (
    <div className={`w-full bg-gradient-to-b ${primaryColor} rounded-xl overflow-hidden border border-white/5 shadow-xl`} aria-hidden="true">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-[9px] text-slate-400 text-center font-mono truncate">
          {example.title.toLowerCase().replace(/\s/g, '')}.com
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className={`text-[8px] font-black uppercase tracking-widest ${textAccent}`}>{example.title.toUpperCase()}</div>
          <div className={`${accentColor} text-white text-[7px] font-bold px-2 py-0.5 rounded-full`}>{badge}</div>
        </div>
        <div>
          <div className="text-white font-black text-xs leading-tight">{heroText}</div>
          <div className="text-slate-400 text-[8px] mt-0.5">{subText}</div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-slate-400 text-[8px] ml-1">{reviews}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className={`${accentColor} bg-opacity-20 border border-white/10 rounded-lg p-2 flex items-center gap-1`}>
            <Phone className="w-3 h-3 text-white flex-shrink-0" />
            <span className="text-white text-[8px] font-bold">Call Now</span>
          </div>
          <div className="bg-green-500 rounded-lg p-2 flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-white flex-shrink-0" />
            <span className="text-white text-[8px] font-bold">WhatsApp</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 rounded-lg p-2 text-center">
              <div className={`${textAccent} font-black text-sm`}>{s.value}</div>
              <div className="text-slate-500 text-[7px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WebsiteExamples() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="ejemplos" className="py-24 bg-slate-50" aria-labelledby="examples-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
            Ejemplos de páginas web para contratistas
          </motion.p>
          <motion.h2
            id="examples-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            Tu Negocio Puede Verse{' '}
            <span className="text-gradient">Así de Profesional</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Cada diseño está optimizado para que los dueños de casa en tu ciudad te encuentren, confíen en ti y te llamen directo.
          </motion.p>
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
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${ex.featured ? 'border-brand-orange/40 shadow-orange-900/10' : 'border-slate-100'}`}
            >
              {ex.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-brand-orange text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
                    Más Solicitado
                  </span>
                </div>
              )}

              <div className="p-5 pb-0">
                {'image' in ex && ex.image ? (
                  <a href={'liveUrl' in ex ? String(ex.liveUrl) : '#'} target="_blank" rel="noopener noreferrer" aria-label={`Ver sitio en vivo de ${ex.title}`} className="block">
                    <div
                      className="w-full rounded-xl overflow-hidden border border-slate-100 shadow-md"
                      style={{ height: '220px' }}
                    >
                      <img
                        src={ex.image}
                        alt={ex.imgAlt}
                        className="w-full object-cover object-top"
                        style={{ display: 'block', height: '220px' }}
                      />
                    </div>
                  </a>
                ) : (
                  <MockupCard example={ex} />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${ex.featured ? 'bg-orange-100 text-brand-orange' : 'bg-slate-100 text-slate-600'}`}>
                    {ex.trade}
                  </span>
                  <span className="text-slate-400 text-xs">{ex.location}</span>
                </div>
                <h3 className="text-navy font-black text-lg mb-1">{ex.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{ex.description}</p>

                <div className="bg-slate-50 rounded-xl px-4 py-2 mb-4 text-center">
                  <span className="text-slate-500 text-xs font-medium">Se ve como una web de </span>
                  <span className="text-navy font-black text-sm">$5,000</span>
                  <span className="text-brand-orange font-black text-sm"> — por $399</span>
                </div>

                {'liveUrl' in ex && ex.liveUrl ? (
                  <div className="flex flex-col gap-2">
                    <a
                      href={'liveUrl' in ex ? String(ex.liveUrl) : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver sitio en vivo de ${ex.title}`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2 border-slate-200 text-slate-700 hover:border-navy hover:text-navy"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      Ver sitio en vivo
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Quiero una página web similar para mi negocio de ${ex.trade} — contactar por WhatsApp`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm transition-all duration-200 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a850] text-white"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      QUIERO ALGO ASÍ
                    </a>
                  </div>
                ) : (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Quiero una página web similar para mi negocio de ${ex.trade} — contactar por WhatsApp`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm transition-all duration-200 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a850] text-white"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    QUIERO ALGO ASÍ
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
