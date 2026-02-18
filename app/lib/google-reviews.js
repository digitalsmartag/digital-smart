const fallbackReviews = [
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

// Cache em memória no servidor
let cachedReviews = null;
let cacheTimestamp = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hora

/**
 * Busca avaliações do Google via API do Featurable
 * @returns {Promise<{reviews: Array, isGoogleReviews: boolean, averageRating: number, totalReviewCount: number}>}
 */
export async function fetchGoogleReviews() {
  try {
    // Verificar cache
    if (cachedReviews && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
      return { reviews: cachedReviews, isGoogleReviews: true, averageRating: 5, totalReviewCount: cachedReviews.length };
    }

    const widgetId = process.env.FEATURABLE_WIDGET_ID || "e6024c41-ec90-4eb4-9e3a-c162fecb718d";
    const response = await fetch(
      `https://featurable.com/api/v1/widgets/${widgetId}`,
      {
        next: { revalidate: 3600 }, // Revalidar a cada 1 hora
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success || !data.reviews) {
      throw new Error("Invalid response from Featurable API");
    }

    // Transformar os dados da API no formato esperado pelo componente Testimonials
    const reviews = data.reviews.map((review) => {
      // Remover traduções do Google, mantendo apenas o comentário original
      let content = review.comment || '';
      
      // Remove a parte "(Translated by Google)" e o texto traduzido
      const translatedMatch = content.match(/\(Translated by Google\)[\s\S]*$/);
      if (translatedMatch) {
        content = content.substring(0, translatedMatch.index).trim();
      }
      
      return {
        name: review.reviewer.displayName,
        role: "Cliente",
        company: "Google Review",
        content: content,
        rating: review.starRating,
        avatar: review.reviewer.profilePhotoUrl,
        date: review.createTime,
      };
    });

    // Atualizar cache
    cachedReviews = reviews;
    cacheTimestamp = Date.now();

    return {
      reviews,
      isGoogleReviews: true,
      averageRating: data.averageRating,
      totalReviewCount: data.totalReviewCount,
    };
  } catch (error) {
    console.error("Erro ao buscar avaliações do Google:", error);
    return { 
      reviews: fallbackReviews, 
      isGoogleReviews: false,
      averageRating: 5,
      totalReviewCount: fallbackReviews.length,
    };
  }
}
