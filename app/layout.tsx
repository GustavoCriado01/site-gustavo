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

export const metadata: Metadata = {
  title: "Gustavo Lira Criado — Desenvolvedor Freelancer",
  description:
    "Desenvolvimento de software com qualidade, automação de processos e segurança da informação (LGPD).",
 icons: {
    icon: "../app/favicon",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Loader />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
