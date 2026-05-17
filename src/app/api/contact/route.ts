import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializamos el servicio de correo con tu clave de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Envío de Correo Electrónico hacia adrian.jimdev@gmail.com
    const emailResult = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Cambiar por tu dominio verificado en el futuro
      to: "adrian.jimdev@gmail.com",
      subject: `🚀 Nueva Misión de: ${name}`,
      html: `
        <h2>Transmisión recibida desde la Terminal Web</h2>
        <p><strong>Nombre del remitente:</strong> ${name}</p>
        <p><strong>Email de conexión:</strong> ${email}</p>
        <p><strong>Carga útil (Mensaje):</strong></p>
        <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
      `,
    });

    if (emailResult.error) {
      console.error("Error en módulo de correo:", emailResult.error);
    }

    // 2. Envío de Alerta de WhatsApp hacia tu teléfono (+34601243028)
    // El texto se codifica para cumplir con los estándares de URL (encodeURIComponent)
    const textForWhatsApp = `🚀 *Nueva Misión Recibida*\n\n*Nombre:* ${name}\n*Mensaje:* ${message}`;
    const whatsappApiKey = process.env.WHATSAPP_API_KEY; 
    const phoneNumber = "+34601243028";

    if (whatsappApiKey) {
      const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodeURIComponent(textForWhatsApp)}&apikey=${whatsappApiKey}`;
      
      // Lanzamos la petición de forma asíncrona al bot
      await fetch(whatsappUrl).catch(err => console.error("Fallo de envío a WhatsApp Gateway:", err));
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Fallo general en procesamiento central." }, { status: 500 });
  }
}