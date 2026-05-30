import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          aria-label="Volver al inicio de ProDigital"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Volver al Inicio
        </Link>

        <main>
          <article>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-2 leading-tight">
              Privacy Policy / Política de Privacidad
            </h1>
            <p className="text-slate-400 text-sm mb-12 border-b border-slate-200 pb-8">
              Last updated / Última actualización: March / Marzo 2026
            </p>

            <section className="mb-14" aria-labelledby="privacy-en-heading">
              <h2 id="privacy-en-heading" className="text-xl font-black text-slate-800 uppercase tracking-wide mb-8 pb-2 border-b-2 border-slate-200">
                Privacy Policy
              </h2>

              <div className="space-y-7 text-slate-700 leading-relaxed">
                <p>
                  At ProDigital (operating through prodigital.lat), we respect your privacy and are committed to protecting the personal information you share with us.
                </p>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">1. Information we collect</h3>
                  <p>
                    We only collect information when you complete our contact form. This includes: Name, Phone number, Email address, and Type of business (e.g., Roofing, Plumbing).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">2. Use of information</h3>
                  <p>
                    We use your data <strong>EXCLUSIVELY</strong> to contact you regarding your web design request and to send you estimates or invoices. We will <strong>NEVER</strong> sell, rent, or share your information with third parties, lead generation agencies, or external companies like Angi or HomeAdvisor.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">3. Data Security</h3>
                  <p>
                    Your information is protected through our website's SSL encryption. Only direct project administrators have access to contact data.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">4. Contact</h3>
                  <p>
                    If you wish to have your data removed from our database, you can request it at any time by writing to:{' '}
                    <a href="mailto:info@prodigital.lat" className="text-slate-900 font-semibold underline underline-offset-2 hover:text-slate-600 transition-colors">
                      info@prodigital.lat
                    </a>{' '}
                    or by mail to: 801 Brickell Ave, Suite 900, Miami, FL 33131, USA.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="privacidad-es-heading">
              <h2 id="privacidad-es-heading" className="text-xl font-black text-slate-800 uppercase tracking-wide mb-8 pb-2 border-b-2 border-slate-200">
                Política de Privacidad
              </h2>

              <div className="space-y-7 text-slate-700 leading-relaxed">
                <p>
                  En ProDigital (operando a través de prodigital.lat), respetamos tu privacidad y estamos comprometidos a proteger la información personal que compartes con nosotros. Esta política explica cómo recopilamos y usamos tus datos.
                </p>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">1. Información que recopilamos</h3>
                  <p>
                    Recopilamos información únicamente cuando completas nuestro formulario de contacto o te comunicas vía WhatsApp. Esto incluye: Nombre, Número de teléfono, Correo electrónico y el Tipo de servicio que ofreces (ej. Roofing, Plomería).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">2. Uso de la información</h3>
                  <p>Usamos tus datos <strong>EXCLUSIVAMENTE</strong> para:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                    <li>Contactarte respecto a tu solicitud de diseño web.</li>
                    <li>Enviarte la información, estimates o facturas correspondientes a tu proyecto.</li>
                    <li>Mejorar nuestro servicio al cliente.</li>
                  </ul>
                  <p className="mt-3">
                    <strong>NUNCA</strong> venderemos, rentaremos ni compartiremos tu información (ni tu teléfono ni tu correo) con terceros, agencias de leads o empresas externas, como Angi o HomeAdvisor.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">3. Seguridad de los datos</h3>
                  <p>
                    Tu información está protegida mediante el cifrado SSL de nuestro sitio web. Solo los administradores directos del proyecto tienen acceso a los datos de contacto.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">4. Publicidad y Cookies</h3>
                  <p>
                    Utilizamos píxeles de seguimiento (como Meta/Facebook Pixel y Google Analytics) para entender cómo interactúas con nuestra web y poder mostrarte anuncios relevantes. Puedes desactivar las cookies en la configuración de tu navegador.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">5. Contacto</h3>
                  <p>
                    Si deseas que eliminemos tus datos de nuestra base de datos, puedes solicitarlo en cualquier momento escribiendo a:{' '}
                    <a href="mailto:info@prodigital.lat" className="text-slate-900 font-semibold underline underline-offset-2 hover:text-slate-600 transition-colors">
                      info@prodigital.lat
                    </a>{' '}
                    o enviando un correo postal a: 801 Brickell Ave, Suite 900, Miami, FL 33131, USA.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm">&copy; 2026 ProDigital.lat. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
