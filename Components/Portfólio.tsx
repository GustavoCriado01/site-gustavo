"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const experiences = [
  "Sistemas financeiros e transacionais",
  "Automação de processos e integrações via APIs",
  "Aplicações web modernas com Next.js e React",
  "Backends robustos em .NET",
  "Sites institucionais e landing pages",
  "Projetos com foco em segurança da informação e LGPD",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          id="portfolio-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Experiência e <span className="text-emerald-400">Projetos</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Ao longo da minha carreira atuei em <strong>projetos complexos</strong> para empresas e instituições,
desenvolvendo sistemas críticos, automações de processos e aplicações web modernas.
Muitos desses projetos envolvem dados sensíveis e operações estratégicas,
o que exige confidencialidade, alto padrão técnico e foco em resultados reais.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-14"
        >
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-start gap-3 bg-gray-800/60 rounded-lg p-5"
            >
              <FaCheckCircle className="text-emerald-400 mt-1" />
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Em breve, novos estudos de caso e projetos públicos serão adicionados
          aqui.
        </motion.p>

        <motion.a
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="#contato"
          className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Vamos conversar sobre seu projeto
        </motion.a>
      </div>
    </section>
  );
}
