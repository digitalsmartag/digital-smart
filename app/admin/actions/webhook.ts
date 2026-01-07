"use server"

export async function handleWebhook(body: any) {
  try {
    console.log('🔔 Webhook recebido na Server Action:', body);
    
    // Notificar clientes SSE (se disponível)
    try {
      const { notifyClients } = await import('../api/events/route');
      notifyClients({
        type: 'lead_created',
        data: body.lead,
        timestamp: new Date().toISOString()
      });
      console.log('📡 Clientes SSE notificados');
    } catch (error) {
      console.log('⚠️ SSE não disponível (normal em desenvolvimento)');
    }
    
    // Log estruturado
    console.log('📋 Novo lead recebido:', {
      id: body.lead?.id,
      name: body.lead?.name,
      email: body.lead?.email,
      service: body.lead?.service,
      timestamp: body.timestamp
    });
    
    return {
      success: true,
      message: 'Webhook processado com sucesso - SSE notificado'
    };
  } catch (error) {
    console.error('❌ Erro ao processar webhook:', error);
    return {
      success: false,
      error: 'Erro ao processar webhook'
    };
  }
}
