import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const eventData = await request.json();

    try {
      const { notifyClients, getClientCount } = await import('../route');
      const clientCount = getClientCount();

      if (clientCount > 0) {
        notifyClients(eventData);
        return NextResponse.json({
          success: true,
          method: 'sse'
        });
      } else {
        const { markDataUpdated } = await import('./globalCache');
        markDataUpdated();
        return NextResponse.json({
          success: true,
          method: 'tanstack-query'
        });
      }
    } catch (error) {
      try {
        const { markDataUpdated } = await import('./globalCache');
        markDataUpdated();
        return NextResponse.json({
          success: true,
          method: 'global-cache-fallback'
        });
      } catch (cacheError) {
        throw cacheError;
      }
    }
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro ao processar notificação'
      },
      { status: 500 }
    );
  }
}
