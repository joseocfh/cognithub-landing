import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation (Brazilian format)
const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, message } = req.body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return res.status(400).json({ error: 'Nome inválido' });
    }

    if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 255) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 2000) {
      return res.status(400).json({ error: 'Mensagem deve ter entre 10 e 2000 caracteres' });
    }

    if (company && (typeof company !== 'string' || company.length > 100)) {
      return res.status(400).json({ error: 'Nome da empresa inválido' });
    }

    if (phone && (typeof phone !== 'string' || !phoneRegex.test(phone))) {
      return res.status(400).json({ error: 'Telefone inválido' });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || 'Não informado',
      phone: phone?.trim() || 'Não informado',
      message: message.trim(),
    };

    // Send notification email to CognitHub
    const notificationEmail = await resend.emails.send({
      from: 'CognitHub Website <contato@cognithub.com.br>',
      to: ['maricesa.sousa@cognithub.com.br'],
      subject: `Novo contato via site - ${sanitizedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #667eea; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🚀 Novo Lead - CognitHub</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Recebido em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' })}</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nome:</span>
                  <div class="value">${sanitizedData.name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
                </div>
                <div class="field">
                  <span class="label">Empresa:</span>
                  <div class="value">${sanitizedData.company}</div>
                </div>
                <div class="field">
                  <span class="label">Telefone:</span>
                  <div class="value">${sanitizedData.phone !== 'Não informado' ? `<a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a>` : sanitizedData.phone}</div>
                </div>
                <div class="field">
                  <span class="label">Mensagem:</span>
                  <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  <p>Este email foi enviado automaticamente pelo formulário de contato do site CognitHub.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send confirmation email to the client
    const confirmationEmail = await resend.emails.send({
      from: 'CognitHub <contato@cognithub.com.br>',
      to: [sanitizedData.email],
      subject: 'Recebemos sua mensagem - CognitHub',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .highlight { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0; }
              .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; margin-top: 20px; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">✉️ Mensagem Recebida!</h1>
              </div>
              <div class="content">
                <p>Olá <strong>${sanitizedData.name}</strong>,</p>
                
                <p>Agradecemos pelo seu contato! Recebemos sua mensagem e nossa equipe entrará em contato em breve.</p>
                
                <div class="highlight">
                  <p style="margin: 0;"><strong>⏱️ Tempo de Resposta:</strong> 24 horas úteis</p>
                </div>
                
                <p>Enquanto isso, fique à vontade para conhecer mais sobre nossos serviços de automação inteligente com IA.</p>
                
                <p style="text-align: center;">
                  <a href="https://cognithub.com.br" class="button">Visitar Website</a>
                </p>
                
                <div class="footer">
                  <p><strong>CognitHub - Automação Inteligente</strong></p>
                  <p>📧 maricesa.sousa@cognithub.com.br | 📱 +55 (86) 9 8839 2791</p>
                  <p>Teresina, PI - Brasil</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Emails sent successfully:', { notificationEmail, confirmationEmail });

    return res.status(200).json({ 
      success: true, 
      message: 'Emails enviados com sucesso' 
    });

  } catch (error: any) {
    console.error('Error sending emails:', error);
    
    // Don't expose internal errors to the client
    return res.status(500).json({ 
      error: 'Erro ao enviar email. Por favor, tente novamente.' 
    });
  }
}
