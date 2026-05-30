import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
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
              Terms and Conditions / Términos y Condiciones
            </h1>
            <p className="text-slate-400 text-sm mb-12 border-b border-slate-200 pb-8">
              Last updated / Última actualización: March / Marzo 2026
            </p>

            <section className="mb-14" aria-labelledby="terms-en-heading">
              <h2 id="terms-en-heading" className="text-xl font-black text-slate-800 uppercase tracking-wide mb-8 pb-2 border-b-2 border-slate-200">
                Terms and Conditions of Service
              </h2>

              <div className="space-y-7 text-slate-700 leading-relaxed">
                <p>
                  By hiring the web design services of ProDigital (prodigital.lat), you agree to the following terms of service:
                </p>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">1. Service Description and Delivery Times</h3>
                  <p>
                    ProDigital commits to designing and developing a professional Landing Page within 72 business hours. This timeframe begins <strong>ONLY</strong> when the client has provided all requested information (photos, base texts, logo, and upfront payment).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">2. Payment Structure (50/50)</h3>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>The service has a one-time fee of <strong>$399 USD</strong> (or the value of the selected package).</li>
                    <li>A non-refundable 50% upfront payment is required to start the project.</li>
                    <li>The remaining 50% will be paid <strong>ONLY</strong> when the website is finished and approved by the client, before connecting the final domain and publishing it live.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">3. Ownership and Rights</h3>
                  <p>
                    Once 100% of the payment is cleared, the client is the absolute owner of the website, the generated source code, the design, and the acquired domain. ProDigital does not retain ownership rights or "hostage" websites.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">4. Domain, Hosting, and Renewals</h3>
                  <p>
                    The "Premium Contractor Package" includes domain registration and web hosting for free during the first year (12 months). From the second year onwards, the client is responsible for covering the annual renewal cost of these third-party services. We do not charge monthly agency fees.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">5. Legal Contact</h3>
                  <address className="not-italic">
                    <p className="font-semibold text-slate-800">ProDigital</p>
                    <p>801 Brickell Ave, Suite 900</p>
                    <p>Miami, FL 33131, USA</p>
                    <p className="mt-1">
                      Email:{' '}
                      <a href="mailto:info@prodigital.lat" className="text-slate-900 font-semibold underline underline-offset-2 hover:text-slate-600 transition-colors">
                        info@prodigital.lat
                      </a>
                    </p>
                  </address>
                </div>
              </div>
            </section>

            <section aria-labelledby="terminos-es-heading">
              <h2 id="terminos-es-heading" className="text-xl font-black text-slate-800 uppercase tracking-wide mb-8 pb-2 border-b-2 border-slate-200">
                Términos y Condiciones de Servicio
              </h2>

              <div className="space-y-7 text-slate-700 leading-relaxed">
                <p>
                  Al contratar los servicios de diseño web de ProDigital (prodigital.lat), aceptas los siguientes términos de servicio:
                </p>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">1. Descripción del Servicio y Tiempos de Entrega</h3>
                  <p>
                    ProDigital se compromete a diseñar y desarrollar una Landing Page profesional en un plazo de 72 horas hábiles. Este tiempo comienza a correr <strong>ÚNICAMENTE</strong> cuando el cliente ha entregado toda la información solicitada (fotos, textos base, logo y anticipo).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">2. Estructura de Pagos (50/50)</h3>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>El servicio tiene un costo de pago único de <strong>$399 USD</strong> (o el valor del paquete seleccionado).</li>
                    <li>Se requiere un pago inicial no reembolsable del 50% para comenzar el proyecto.</li>
                    <li>El 50% restante se pagará <strong>ÚNICAMENTE</strong> cuando la página web esté terminada y aprobada por el cliente, antes de conectar el dominio final y publicarla en vivo.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">3. Propiedad y Derechos</h3>
                  <p>
                    Una vez liquidado el 100% del pago, el cliente es el dueño absoluto del sitio web, el código fuente generado, el diseño y el dominio adquirido. ProDigital no retiene derechos de propiedad ni "secuestra" sitios web.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">4. Dominio, Hosting y Renovaciones</h3>
                  <p>
                    El "Paquete Contratista Premium" incluye el registro del dominio y el alojamiento web (hosting) gratis durante el primer año (12 meses). A partir del segundo año, el cliente es responsable de cubrir el costo de renovación anual de estos servicios de terceros para mantener su página en línea. No cobramos mensualidades de agencia.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">5. Modificaciones y Revisiones</h3>
                  <p>
                    El cliente tiene derecho a solicitar ajustes razonables sobre el diseño entregado antes de la aprobación final. Modificaciones mayores o estructurales solicitadas semanas después de la entrega final pueden incurrir en costos adicionales por hora de trabajo.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">6. Contacto Legal</h3>
                  <address className="not-italic">
                    <p className="font-semibold text-slate-800">ProDigital</p>
                    <p>801 Brickell Ave, Suite 900</p>
                    <p>Miami, FL 33131, USA</p>
                    <p className="mt-1">
                      Correo:{' '}
                      <a href="mailto:info@prodigital.lat" className="text-slate-900 font-semibold underline underline-offset-2 hover:text-slate-600 transition-colors">
                        info@prodigital.lat
                      </a>
                    </p>
                  </address>
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
