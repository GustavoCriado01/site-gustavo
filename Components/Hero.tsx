"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-6"
    >
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center">
        <motion.h1
          id="hero-title"
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 shimmer-text"
        >
          Gustavo Lira Criado
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-xl md:text-2xl font-semibold text-emerald-400 mb-6 max-w-3xl leading-snug"
        >
          Desenvolvedor Freelancer em Next.js, React e .NET
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-300 max-w-2xl mb-10">
          Criação de <strong>sites, sistemas e aplicativos</strong> com foco em performance, 
  automação de processos e <strong>segurança da informação (LGPD)</strong>.  
  Desde 2016 ajudando empresas e pessoas a transformar ideias em soluções digitais modernas.
        </motion.p>

        <motion.a
          variants={fadeInUp}
          href="https://wa.me/5511989007006"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <FaWhatsapp size={20} />
          Fale comigo no WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
