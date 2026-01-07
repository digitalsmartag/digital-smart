import { NextRequest, NextResponse } from 'next/server';
import { handleWebhook } from "../../../admin/actions/webhook";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Chamar Server Action para processar webhook
    const result = await handleWebhook(body);
    
    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error('❌ Erro no webhook:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro interno no webhook' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook endpoint para leads. Use POST para enviar notificações.' 
  });
}
