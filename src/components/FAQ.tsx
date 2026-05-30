import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: '¿Tengo que pagar mensualidades caras?',
    answer:
      'No. A diferencia de otras agencias, nuestro diseño de páginas web para contratistas funciona con un pago único, sin contratos mensuales que te aten. Tu dominio y hosting están incluidos GRATIS el primer año. Después, si decides seguir con nosotros, la renovación cuesta solo $99 USD anuales (eso es menos de $9 dólares al mes) para mantener tu página online, segura y funcionando rápido en Google. Y lo más importante: tu website siempre será 100% tuyo. Si en algún momento prefieres moverlo a otro proveedor, te ayudamos con el traspaso completo GRATIS y sin complicaciones. Nosotros no secuestramos tu página.',
  },
  {
    question: '¿Qué pasa si no tengo buenas fotos o logo?',
    answer:
      'No hay problema. Utilizamos imágenes profesionales de alta calidad específicas para tu industria (roofing, plomería, landscaping). Si necesitas un logo comercial, lo diseñamos por $49 USD para que tu negocio transmita total confianza a los dueños de casa.',
  },
  {
    question: '¿Cómo funciona el proceso de pago?',
    answer:
      'Es 100% seguro y sin riesgo. Pagas solo el 50% para iniciar tu proyecto a través de tarjeta o transferencia por Wise. El 50% restante lo pagas únicamente cuando veas tu página web terminada en 72 horas y te encante el resultado final.',
  },
  {
    question: '¿En qué tipo de negocios trabajan?',
    answer:
      'Somos especialistas en diseño web para negocios de servicios en USA. Trabajamos con roofers, plomeros, landscapers, electricistas, HVAC y remodelación. Conocemos exactamente qué buscan los clientes locales en tu ciudad para que tu teléfono suene.',
  },
  {
    question: '¿Aparecerá mi página en Google?',
    answer:
      'Sí. Entregamos tu página web optimizada con la estructura SEO necesaria para que Google entienda tus servicios. Además, recomendamos agregar nuestro servicio de perfil en Google Maps para aparecer de inmediato en las búsquedas de urgencia de tu área.',
  },
  {
    question: '¿Cuánto tiempo tardan en entregar mi página?',
    answer:
      'Entregamos tu página web profesional lista para recibir llamadas en solo 72 horas (3 días hábiles) desde que nos apruebas el diseño inicial y nos mandas tu información básica por WhatsApp. Todo es rápido, directo y sin reuniones.',
  },
  {
    question: '¿La página estará en inglés o en español?',
    answer:
      'Los textos de tu web estarán redactados en inglés persuasivo para el cliente americano, pero incluimos un sello de "Se Habla Español" para atraer a la comunidad latina. También ofrecemos una opción 100% bilingüe (inglés/español) por un único pago de $99 USD.',
  },
  {
    question: '¿Quién es el dueño del dominio y la página?',
    answer:
      'Tú eres el dueño al 100%. Nosotros creamos la página web para tu negocio, pero los derechos, el dominio y todos los accesos te pertenecen. No secuestramos tu página web ni tus leads como hacen otras plataformas de contratistas.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <motion.div
      variants={fadeInUp}
      className="border border-slate-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <span className="text-brand-orange font-black text-sm min-w-[1.5rem]" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-bold text-navy text-base sm:text-lg">{question}</span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500'}`} aria-hidden="true">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 pt-1 bg-white border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed pl-10">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="faqs" className="py-24 bg-slate-50" aria-labelledby="faqs-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
            Cero Letras Chiquitas
          </motion.p>
          <motion.h2
            id="faqs-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight"
          >
            Preguntas Frecuentes (FAQ) Antes de Lanzar tu Página Web Profesional
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-500 text-lg">
            Resuelve todas tus dudas sobre nuestro proceso de diseño web para contratistas, la propiedad de tu dominio, y cómo optimizaremos tu presencia en Google sin cobrarte mensualidades en USA.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} {...faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
