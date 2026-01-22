import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/Components/FloatingWhatsApp";
import Loader from "@/Components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Ajuste para o seu domínio real (importante p/ OG e canonical)
const SITE_URL = "https://gustavoliracriado.com.br"; // troque se for outro
const BRAND = "Gustavo Lira Criado";
const OG_IMAGE_ABS = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} — Desenvolvedor Freelancer`,
    template: `%s | ${BRAND}`,
  },

  description:
    "Desenvolvedor freelancer especializado em .NET/C#, APIs, integrações, automação de processos e segurança da informação (LGPD). Projetos sob medida para empresas e profissionais.",

  applicationName: `${BRAND} — Desenvolvedor Freelancer`,

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ✅ Ícones corretos: devem estar em /public
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✅ Open Graph (WhatsApp/LinkedIn)
  openGraph: {
    title: `${BRAND} — Desenvolvedor Freelancer`,
    description:
      "Desenvolvimento de software com qualidade: .NET/C#, APIs, integrações, automação de processos e LGPD.",
    url: SITE_URL,
    siteName: BRAND,
    images: [
      {
        url: OG_IMAGE_ABS, // ✅ URL absoluta
        width: 1200,
        height: 630,
        alt: `${BRAND} — Desenvolvedor Freelancer`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — Desenvolvedor Freelancer`,
    description:
      "Freelancer em desenvolvimento de software: .NET/C#, APIs, integrações, automação e LGPD.",
    images: [OG_IMAGE_ABS],
  },

  // ✅ (Opcional) Ajuda com “entidade” e consistência
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,

  // ✅ Keywords (não é o fator #1 do Google hoje, mas ok incluir)
  keywords: [
    "Gustavo Lira Criado",
    "desenvolvedor freelancer",
    ".NET",
    "C#",
    "desenvolvimento de software",
    "APIs",
    "integrações",
    "microserviços",
    "automação de processos",
    "LGPD",
    "segurança da informação",
    "React",
    "Next.js",
    "consultoria de software",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Loader />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
