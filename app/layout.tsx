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

// ✅ SEMPRE usar WWW (canonical + og:url + og:image no mesmo host)
const SITE_URL = "https://www.gustavoliracriado.com.br";
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
    canonical: SITE_URL, // ✅ www
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

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: `${BRAND} — Desenvolvedor Freelancer`,
    description:
      "Desenvolvimento de software com qualidade: .NET/C#, APIs, integrações, automação de processos e LGPD.",
    url: SITE_URL, // ✅ www
    siteName: BRAND,
    images: [
      {
        url: OG_IMAGE_ABS, // ✅ www + absoluto
        width: 1200,
        height: 630,
        alt: `${BRAND} — Desenvolvedor Freelancer`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — Desenvolvedor Freelancer`,
    description:
      "Freelancer em desenvolvimento de software: .NET/C#, APIs, integrações, automação e LGPD.",
    images: [OG_IMAGE_ABS], // ✅ www
  },

  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
