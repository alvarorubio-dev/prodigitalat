import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative pulse-ring">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 transition-colors duration-200 cursor-pointer"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 fill-white"
          >
            <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9C24.4 31.1 31.2 24.4 31.2 16S24.4.8 16 .8zm0 27.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.1 1.3 1.4-4.9-.3-.5A12 12 0 0 1 4 16C4 9.4 9.4 4 16 4s12 5.4 12 12-5.4 12.6-12 12.6zm6.6-9.4c-.4-.2-2.1-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8l.6-.6c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.6-.1-.2-1-2.3-1.3-3.1-.3-.7-.7-.6-1-.6h-.7c-.3 0-.7.1-1 .5C9.4 11.5 8.6 12.5 8.6 14.5c0 2 1.4 3.9 1.6 4.2.2.3 2.8 4.3 6.9 6 4 1.7 4 1.1 4.7 1.1.7 0 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z" />
          </svg>
        </motion.div>
      </div>
    </a>
  );
}
