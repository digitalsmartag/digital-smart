import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuração do transporter SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, telefone, email, servico, segmento } = body;

    // Validação básica
    if (!nome || !telefone || !email || !servico || !segmento) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Enviar email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `Nova solicitação de orçamento - ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #543295, #7c3aed); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nova Solicitação de Orçamento</h1>
          </div>
          <div style="background: white; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 120px;"><strong>Nome:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Telefone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${telefone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #543295;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Serviço:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${servico}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Segmento:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${segmento}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;"><strong>Data:</strong></td>
                <td style="padding: 10px 0;">${new Date().toLocaleString('pt-BR')}</td>
              </tr>
            </table>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            Enviado via formulário de contato - Digital Smart
          </div>
        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    // Enviar para webhook (opcional)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          telefone,
          email,
          servico,
          segmento,
          tipo: 'orcamento',
          data: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    );
  }
}
