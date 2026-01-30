import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://digitalsmartag.com.br'),
  title: {
    default: "Digital Smart | Agência de Marketing Digital",
    template: "%s | Digital Smart"
  },
  description: "Agência de marketing digital especializada em tráfego pago, sites, landing pages, posts e automações WhatsApp. +12 empresas parceiras no Brasil e EUA.",
  keywords: ["marketing digital", "tráfego pago", "sites", "landing pages", "automação whatsapp", "agência digital", "google ads", "meta ads", "gestão de tráfego"],
  authors: [{ name: "Digital Smart" }],
  creator: "Digital Smart",
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
    url: "https://digitalsmartag.com.br",
    siteName: "Digital Smart",
    title: "Digital Smart | Agência de Marketing Digital",
    description: "Agência de marketing digital especializada em tráfego pago, sites, landing pages, posts e automações WhatsApp. +12 empresas parceiras no Brasil e EUA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Smart - Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Smart | Agência de Marketing Digital",
    description: "Agência de marketing digital especializada em tráfego pago, sites, landing pages, posts e automações WhatsApp. +12 empresas parceiras no Brasil e EUA.",
    images: ["/og-image.png"],
    creator: "@digitalsmartag",
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
  other: {
    'facebook-domain-verification': '359gc7x4m9b5g4dtt496zuauwvi8vx'
  },
  alternates: {
    canonical: "https://digitalsmartag.com.br",
  },
  category: "Marketing Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
