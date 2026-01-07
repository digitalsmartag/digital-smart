import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Simular um lead de teste
    const testLead = {
      lead: {
        id: crypto.randomUUID(),
        name: 'Lead Teste Webhook ' + new Date().toLocaleTimeString(),
        email: 'teste' + Date.now() + '@sse.com',
        phone: '11999999999',
        service: 'Website',
        status: 'new',
        createdAt: new Date().toISOString()
      },
      timestamp: new Date().toISOString()
    };
    
    console.log('🧪 Enviando lead de teste via webhook simulado...');
    console.log('📋 Lead data:', testLead.lead);
    
    // Notificar clientes SSE diretamente
    try {
      const { notifyClients } = await import('../events/route');
      const eventData = {
        type: 'lead_created',
        data: testLead.lead,
        timestamp: testLead.timestamp
      };
      
      console.log('📡 Enviando evento SSE:', eventData);
      notifyClients(eventData);
      console.log('✅ Clientes SSE notificados com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao notificar clientes SSE:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Erro ao notificar SSE',
          details: error.message
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Teste webhook enviado com sucesso',
      lead: testLead.lead,
      timestamp: testLead.timestamp
    });
  } catch (error) {
    console.error('❌ Erro no teste webhook:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro ao enviar teste webhook',
        details: error.message
      },
      { status: 500 }
    );
  }
}
