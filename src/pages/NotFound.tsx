import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, MapPin, Compass } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

function FloatingCompass() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 mx-auto mb-8" aria-hidden="true">
      <motion.div
        className="absolute inset-0 rounded-full bg-brand-orange/10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-4 rounded-full bg-brand-orange/8 border border-brand-orange/20"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <motion.div
        className="relative w-28 h-28 rounded-full bg-white shadow-2xl border border-slate-100 flex items-center justify-center"
        animate={{ rotate: [0, 15, -10, 20, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
      >
        <Compass className="w-14 h-14 text-brand-orange" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shadow-lg"
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MapPin className="w-4 h-4 text-white" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -left-4 bg-white rounded-2xl shadow-xl px-3 py-2 border border-slate-100"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-slate-700">Página no encontrada</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-2 -left-6 bg-navy rounded-xl shadow-xl px-3 py-2 border border-white/10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <div className="flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-brand-orange" />
          <span className="text-xs font-bold text-white">404</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function NotFound() {
  return (
    <main
      className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16"
      aria-labelledby="notfound-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-lg w-full text-center"
      >
        <motion.div variants={fadeInUp}>
          <FloatingCompass />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-[7rem] font-black leading-none select-none tracking-tighter"
          style={{ color: '#EA580C', opacity: 0.15 }}
          aria-hidden="true"
        >
          404
        </motion.p>

        <motion.h1
          id="notfound-heading"
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-black text-slate-800 -mt-6 mb-4 tracking-tight"
        >
          ¡Oops! Parece que te saliste del mapa 🗺️
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-slate-500 text-lg leading-relaxed mb-10"
        >
          La página que buscas no existe o fue movida. Pero no te preocupes,
          perderse aquí no cuesta dinero…{' '}
          <em className="text-slate-700 not-italic font-semibold">
            perder clientes por no tener tu propia página web
          </em>
          , sí.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            aria-label="Volver a la página de inicio"
            className="group inline-flex items-center justify-center gap-2 text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-2xl hover:-translate-y-1 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            style={{
              backgroundColor: '#EA580C',
              boxShadow: '0 8px 32px rgba(234,88,12,0.35)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C2410C';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(234,88,12,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#EA580C';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(234,88,12,0.35)';
            }}
          >
            <span className="group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span>
            Volver al Inicio
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar mi sitio web por WhatsApp"
            className="inline-flex items-center justify-center gap-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Solicitar mi página web hoy
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
