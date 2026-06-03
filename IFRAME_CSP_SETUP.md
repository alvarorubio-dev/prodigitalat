// CONFIGURACIÓN DE IFRAME Y CSP - INSTRUCCIONES

/**
 * ============================================
 * DESARROLLO (Vite)
 * ============================================
 * 
 * La configuración ya está en vite.config.ts con server.headers
 * Esto configura automáticamente:
 * 
 * - X-Frame-Options: ALLOW-FROM http://localhost:5173 https://prodigital.lat
 * - Content-Security-Policy: frame-ancestors 'self' http://localhost:5173 https://prodigital.lat
 * 
 * Cuando ejecutes: npm run dev
 * Los headers se aplicarán automáticamente en http://localhost:5173
 */

/**
 * ============================================
 * PRODUCCIÓN CON EXPRESS
 * ============================================
 * 
 * 1. Instala Express:
 *    npm install express
 * 
 * 2. Crea un archivo server.js en la raíz:
 * 
 *    const express = require('express');
 *    const path = require('path');
 *    const securityMiddleware = require('./server.middleware.js');
 *    
 *    const app = express();
 *    
 *    // Aplica el middleware de seguridad
 *    app.use(securityMiddleware);
 *    
 *    // Sirve archivos estáticos desde dist/
 *    app.use(express.static(path.join(__dirname, 'dist')));
 *    
 *    // Fallback a index.html para SPA
 *    app.get('*', (req, res) => {
 *      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
 *    });
 *    
 *    const PORT = process.env.PORT || 3000;
 *    app.listen(PORT, () => {
 *      console.log(`Servidor ejecutándose en puerto ${PORT}`);
 *    });
 * 
 * 3. En package.json, agrega:
 *    "scripts": {
 *      "build": "vite build",
 *      "start": "node server.js"
 *    }
 * 
 * 4. Ejecuta en producción:
 *    npm run build
 *    npm start
 */

/**
 * ============================================
 * PRODUCCIÓN CON VERCEL
 * ============================================
 * 
 * 1. Crea un archivo vercel.json en la raíz:
 * 
 *    {
 *      "headers": [
 *        {
 *          "source": "/(.*)",
 *          "headers": [
 *            {
 *              "key": "X-Frame-Options",
 *              "value": "ALLOW-FROM http://localhost:5173 https://prodigital.lat"
 *            },
 *            {
 *              "key": "Content-Security-Policy",
 *              "value": "default-src 'self'; frame-ancestors 'self' http://localhost:5173 https://prodigital.lat; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
 *            }
 *          ]
 *        }
 *      ]
 *    }
 * 
 * 2. Haz push a GitHub y Vercel se desplegará automáticamente
 */

/**
 * ============================================
 * PRODUCCIÓN CON NETLIFY
 * ============================================
 * 
 * 1. Crea un archivo _headers en la carpeta public/:
 * 
 *    /*
 *      X-Frame-Options: ALLOW-FROM http://localhost:5173 https://prodigital.lat
 *      Content-Security-Policy: default-src 'self'; frame-ancestors 'self' http://localhost:5173 https://prodigital.lat; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;
 * 
 * 2. Haz push a GitHub y Netlify se desplegará automáticamente
 */

/**
 * ============================================
 * PRODUCCIÓN CON NGINX (VPS/Servidor dedicado)
 * ============================================
 * 
 * En tu configuración de nginx (ej: /etc/nginx/sites-available/default):
 * 
 *    server {
 *      listen 443 ssl http2;
 *      server_name prodigital.lat;
 *      
 *      ssl_certificate /path/to/cert.pem;
 *      ssl_certificate_key /path/to/key.pem;
 *      
 *      add_header X-Frame-Options "ALLOW-FROM http://localhost:5173 https://prodigital.lat" always;
 *      add_header Content-Security-Policy "default-src 'self'; frame-ancestors 'self' http://localhost:5173 https://prodigital.lat; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;" always;
 *      
 *      location / {
 *        proxy_pass http://localhost:3000;
 *        proxy_http_version 1.1;
 *        proxy_set_header Upgrade $http_upgrade;
 *        proxy_set_header Connection 'upgrade';
 *        proxy_set_header Host $host;
 *        proxy_cache_bypass $http_upgrade;
 *      }
 *    }
 * 
 * Luego ejecuta:
 *    sudo systemctl restart nginx
 */

/**
 * ============================================
 * VERIFICACIÓN
 * ============================================
 * 
 * 1. Abre tu navegador en las DevTools (F12)
 * 2. Ve a la pestaña "Network"
 * 3. Recarga la página
 * 4. Busca la solicitud principal (index.html)
 * 5. En la pestaña "Response Headers", verifica que veas:
 * 
 *    X-Frame-Options: ALLOW-FROM http://localhost:5173 https://prodigital.lat
 *    Content-Security-Policy: frame-ancestors 'self' http://localhost:5173 https://prodigital.lat; ...
 * 
 * Si ves estos headers, ¡la configuración está correcta!
 */
