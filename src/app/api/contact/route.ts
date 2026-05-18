import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Preparar carga útil para WhatsApp (CallMeBot)
    // Usamos %0A para los saltos de línea en la URL
    const waMessage = `*NUEVA MISION (jimdev)*%0A*Identificador:* ${name}%0A*Frecuencia:* ${email}%0A*Datos:* ${message}`;
    const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${process.env.WHATSAPP_NUMBER}&text=${waMessage}&apikey=${process.env.CALLMEBOT_APIKEY}`;

    // 2. Preparar carga útil para Email (Resend)
    // Nota: Hasta que no verifiques un dominio en Resend, el remitente debe ser "onboarding@resend.dev"
    const resendBody = {
      from: "jimdev Terminal <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "adrian.jimdev@gmail.com"],
      subject: `Nueva Transmisión de: ${name}`,
      html: `
        <div style="font-family: monospace; background-color: #0A0A16; color: #00E5FF; padding: 20px;">
          <h2>// ALERTA DE SISTEMA: NUEVA TRANSMISIÓN</h2>
          <p><strong>IDENTIFICADOR:</strong> ${name}</p>
          <p><strong>FRECUENCIA (EMAIL):</strong> ${email}</p>
          <hr style="border-color: #00E5FF;" />
          <p><strong>PAQUETE DE DATOS:</strong></p>
          <p style="color: #A0ABC0;">${message}</p>
        </div>
      `
    };

    // 3. Ejecutar ambas transmisiones de forma paralela
    const [resendRes, waRes] = await Promise.all([
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify(resendBody)
      }),
      fetch(waUrl) // CallMeBot usa una simple petición GET
    ]);

    // Verificación de errores en los logs del servidor
    if (!resendRes.ok) console.error("Error en Resend:", await resendRes.text());
    if (!waRes.ok) console.error("Error en CallMeBot:", await waRes.text());

    return NextResponse.json({ success: true, message: "Transmisión completada." });

  } catch (error) {
    console.error("Fallo crítico en API de contacto:", error);
    return NextResponse.json(
      { success: false, message: "Fallo en los sistemas de comunicación." }, 
      { status: 500 }
    );
  }
}