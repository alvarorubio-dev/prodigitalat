import { useState } from "react";
import { X, Loader } from "lucide-react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    console.log("iframe loaded successfully");
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      {/* Modal container */}
      <div className="relative bg-white rounded-2xl w-full max-w-lg h-[80vh] max-h-[600px] shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300 z-50">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>

        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader className="w-8 h-8 text-brand-orange animate-spin" />
              <p className="text-slate-600 font-medium">Cargando chat...</p>
            </div>
          </div>
        )}

        {/* iframe container with explicit dimensions */}
        <div className="flex-1 w-full bg-white rounded-2xl overflow-hidden">
          <iframe
            src="https://prodigital-chat-ia.vercel.app/"
            className="w-full h-full border-none"
            title="ProDigital Chat"
            onLoad={handleIframeLoad}
            allow="clipboard-write"
          />
        </div>
      </div>

      {/* Click overlay to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
}
