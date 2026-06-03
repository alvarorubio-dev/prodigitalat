/**
 * Middleware de seguridad para configurar headers de iframe y CSP
 * Úsalo en tu servidor de producción (Express, Node.js, etc.)
 *
 * Ejemplo con Express:
 * app.use(require('./server.middleware.js'));
 */

module.exports = (req, res, next) => {
  // Permitir iframes solo desde localhost:5173 (desarrollo) y prodigital.lat (producción)
  res.setHeader(
    "X-Frame-Options",
    "ALLOW-FROM http://localhost:5173 https://prodigital.lat",
  );

  // Content-Security-Policy con frame-ancestors para mayor compatibilidad moderna
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "frame-ancestors 'self' http://localhost:5173 https://prodigital.lat; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://prodigital-chat-ia.vercel.app; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https: http://localhost:5173; " +
      "frame-src 'self' http://localhost:5173 https://prodigital-chat-ia.vercel.app;",
  );

  // Permitir cross-origin requests desde dominios específicos
  const origin = req.headers.origin;
  if (
    origin === "http://localhost:5173" ||
    origin === "https://prodigital.lat"
  ) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
  }

  next();
};
