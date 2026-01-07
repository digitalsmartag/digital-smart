import { NextRequest } from 'next/server'

// Armazenamento simples para clientes SSE (em produção, use Redis ou similar)
const clients = new Set<ReadableStreamDefaultController>()

export async function GET(request: NextRequest) {
  console.log('🔌 SSE: Nova conexão recebida')
  
  const stream = new ReadableStream({
    start(controller) {
      console.log('🔌 SSE: Iniciando stream para cliente')
      clients.add(controller)
      
      // Enviar mensagem inicial
      const initialMessage = `data: ${JSON.stringify({ type: 'connected', timestamp: new Date().toISOString() })}\n\n`
      console.log('🔌 SSE: Enviando mensagem inicial:', initialMessage.trim())
      controller.enqueue(initialMessage)
      
      // Cleanup quando o cliente desconecta
      request.signal.addEventListener('abort', () => {
        console.log('🔌 SSE: Cliente desconectado, removendo do conjunto')
        clients.delete(controller)
        controller.close()
      })
    }
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control',
    },
  })
}

// Função para obter número de clientes conectados
export function getClientCount() {
  return clients.size;
}

// Função para notificar todos os clientes
export function notifyClients(data: any) {
  console.log('📡 SSE: Notificando', clients.size, 'clientes com:', data)
  const message = `data: ${JSON.stringify(data)}\n\n`
  
  clients.forEach(controller => {
    try {
      controller.enqueue(message)
      console.log('📡 SSE: Mensagem enviada com sucesso')
    } catch (error) {
      console.error('❌ SSE: Erro ao enviar mensagem, removendo cliente:', error)
      // Cliente desconectado, remover
      clients.delete(controller)
    }
  })
  
  console.log('📡 SSE: Notificação concluída')
}
