// /api/send.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, phone, business } = JSON.parse(req.body);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // puedes usar este por defecto
      to: "packscreativos@gmail.com", // tu correo
      subject: "Nuevo contacto desde tu formulario",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#ff6600;">Nuevo lead recibido</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Negocio:</strong> ${business}</p>
        </div>
      `,
    });

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
}
