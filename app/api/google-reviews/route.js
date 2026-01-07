import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Cache para armazenar as avaliações por 1 hora
let cachedReviews = null;
let cacheTimestamp = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hora em milissegundos

export async function GET() {
  try {
    // Verificar se há cache válido
    if (cachedReviews && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
      return NextResponse.json({ reviews: cachedReviews, cached: true });
    }

    // Configurar autenticação do Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/business.manage'],
    });

    const authClient = await auth.getClient();
    const mybusinessaccountmanagement = google.mybusinessaccountmanagement({
      version: 'v1',
      auth: authClient,
    });

    // Buscar contas
    const accountsResponse = await mybusinessaccountmanagement.accounts.list();
    const accounts = accountsResponse.data.accounts;

    if (!accounts || accounts.length === 0) {
      return NextResponse.json({ error: 'Nenhuma conta encontrada' }, { status: 404 });
    }

    // Usar a primeira conta (ou você pode filtrar pela conta específica)
    const accountName = accounts[0].name;

    // Buscar localizações
    const mybusinessbusinessinformation = google.mybusinessbusinessinformation({
      version: 'v1',
      auth: authClient,
    });

    const locationsResponse = await mybusinessbusinessinformation.accounts.locations.list({
      parent: accountName,
    });

    const locations = locationsResponse.data.locations;

    if (!locations || locations.length === 0) {
      return NextResponse.json({ error: 'Nenhuma localização encontrada' }, { status: 404 });
    }

    // Buscar avaliações da primeira localização
    const locationName = locations[0].name;
    
    // Usar a API de avaliações
    const reviewsUrl = `https://mybusiness.googleapis.com/v4/${locationName}/reviews`;
    const response = await fetch(reviewsUrl, {
      headers: {
        Authorization: `Bearer ${(await authClient.getAccessToken()).token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar avaliações: ${response.statusText}`);
    }

    const data = await response.json();
    const reviews = data.reviews || [];

    // Formatar avaliações para o formato do componente
    const formattedReviews = reviews.map((review) => ({
      name: review.reviewer?.displayName || 'Anônimo',
      role: 'Cliente',
      company: 'Google',
      content: review.comment || 'Sem comentário',
      rating: review.starRating === 'FIVE' ? 5 : 
              review.starRating === 'FOUR' ? 4 :
              review.starRating === 'THREE' ? 3 :
              review.starRating === 'TWO' ? 2 : 1,
      date: review.createTime,
      avatar: review.reviewer?.profilePhotoUrl,
    }));

    // Atualizar cache
    cachedReviews = formattedReviews;
    cacheTimestamp = Date.now();

    return NextResponse.json({ 
      reviews: formattedReviews, 
      cached: false,
      totalReviews: formattedReviews.length 
    });

  } catch (error) {
    console.error('Erro ao buscar avaliações do Google:', error);
    
    // Retornar avaliações estáticas em caso de erro
    return NextResponse.json({ 
      error: error.message,
      reviews: getFallbackReviews(),
      fallback: true 
    }, { status: 200 });
  }
}

// Avaliações de fallback caso a API falhe
function getFallbackReviews() {
  return [
    {
      name: "Ricardo Mendes",
      role: "CEO",
      company: "TechStart",
      content: "A Digital Smart transformou nossa presença digital. Em 3 meses, triplicamos o número de leads qualificados. O investimento se pagou já no primeiro mês.",
      rating: 5,
    },
    {
      name: "Dra. Camila Santos",
      role: "Diretora",
      company: "Clínica Vida",
      content: "Profissionais extremamente competentes. A landing page que criaram tem uma taxa de conversão de 15%, muito acima da média do mercado.",
      rating: 5,
    },
    {
      name: "Fernando Costa",
      role: "Proprietário",
      company: "Academia Elite",
      content: "O tráfego pago gerenciado pela Digital Smart trouxe resultados incríveis. Lotamos todas as turmas em tempo recorde.",
      rating: 5,
    },
  ];
}
