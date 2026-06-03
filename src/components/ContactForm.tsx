import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
} from "../hooks/useScrollAnimation";

interface FormState {
  name: string;
  phone: string;
  business: string;
}

interface SubmitState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const { ref, controls } = useScrollAnimation();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    business: "",
  });
  const [submit, setSubmit] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmit({ status: "loading", message: "" });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmit({
          status: "success",
          message: "¡Listo! Te contactaremos en menos de 24 horas.",
        });
        setForm({ name: "", phone: "", business: "" });
      } else {
        throw new Error("Error en el envío");
      }
    } catch {
      setSubmit({
        status: "error",
        message: "Algo salió mal. Intenta de nuevo.",
      });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-800 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200";

  return (
    <section
      id="contacto"
      className="py-24 bg-[#0F172A]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="text-white">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/20 mb-6">
              <Phone className="w-7 h-7 text-orange-400" aria-hidden="true" />
            </div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6"
            >
              ¿Prefieres que te{" "}
              <span className="text-orange-400">
                llamemos para planear tu nueva Página Web?
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Déjanos tus datos y un especialista en marketing para contractors
              te contactará en menos de 24 horas. Hablemos de cómo conseguir más
              leads locales con tu página web profesional. Free estimate y cero
              compromisos.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/40">
              {submit.status === "success" ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-slate-500">{submit.message}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulario de contacto"
                >
                  <div className="flex flex-col gap-5">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu Nombre"
                      className={inputClass}
                    />

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Email oTeléfono"
                      className={inputClass}
                    />

                    <input
                      id="contact-business"
                      name="business"
                      type="text"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="¿De qué es tu negocio? (Ej. Plomería, Roofing)"
                      className={inputClass}
                    />

                    {submit.status === "error" && (
                      <p role="alert" className="text-red-500 text-sm">
                        {submit.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submit.status === "loading"}
                      className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-base sm:text-lg py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5"
                    >
                      {submit.status === "loading"
                        ? "Enviando..."
                        : "Quiero mi web y empezar a recibir llamadas"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
