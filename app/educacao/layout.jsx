export const metadata = {
  title: "Dominando as Vendas Educacionais | Digital Smart",
  description: "O passo a passo prático para estruturar sua empresa educacional, gerar credibilidade no mercado e aumentar o número de alunos de forma previsível.",
  keywords: [
    "vendas educacionais",
    "curso de vendas",
    "marketing educacional",
    "captação de alunos",
    "gestão educacional",
    "matrículas",
    "conversão de alunos",
    "escola de cursos",
    "empreendedorismo educacional",
    "maxsuel moreira"
  ],
  authors: [{ name: "Maxsuel Moreira" }, { name: "Digital Smart" }],
  creator: "Maxsuel Moreira",
  publisher: "Digital Smart",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://digitalsmartag.com.br/educacao",
    siteName: "Digital Smart",
    title: "Dominando as Vendas Educacionais | Curso Completo",
    description: "Aprenda a vender educação do jeito certo, do primeiro contato ao pós-venda. Estruture sua empresa educacional e aumente o número de alunos de forma previsível.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dominando as Vendas Educacionais - Curso Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominando as Vendas Educacionais | Curso Completo",
    description: "Aprenda a vender educação do jeito certo, do primeiro contato ao pós-venda. Estruture sua empresa educacional e aumente o número de alunos de forma previsível.",
    images: ["/og-image.png"],
    creator: "@digitalsmartag",
  },
  alternates: {
    canonical: "https://digitalsmartag.com.br/educacao",
  },
  category: "Educação",
};

export default function EducacaoLayout({ children }) {
  return <>{children}</>;
}
