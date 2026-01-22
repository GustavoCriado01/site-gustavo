"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaLock, FaRocket, FaUsers } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const diffs = [
  {
    icon: <FaBriefcase className="text-emerald-400 text-2xl" />,
    title: "Experiência sólida",
    desc: "Mais de 9 anos de atuação em tecnologia e desenvolvimento de software, com projetos de alto impacto em instituições financeiras e startups. Experiência prática em Next.js, React e .NET.",
  },
  {
    icon: <FaRocket className="text-emerald-400 text-2xl" />,
    title: "Qualidade & Performance",
    desc: "Aplicação de boas práticas como TDD, DDD e arquitetura limpa para garantir soluções robustas, escaláveis e de alta performance. Cada projeto é desenvolvido pensando em eficiência e longevidade.",
  },
  {
    icon: <FaLock className="text-emerald-400 text-2xl" />,
    title: "Segurança como prioridade",
    desc: "Consultoria e implementação de segurança da informação com foco em conformidade à LGPD, proteção de dados sensíveis e conhecimentos em hacking ético para antecipar riscos.",
  },
  {
    icon: <FaUsers className="text-emerald-400 text-2xl" />,
    title: "Atendimento próximo",
    desc: "Relacionamento direto, transparente e consultivo, garantindo suporte contínuo e soluções sob medida para empresas que buscam evoluir digitalmente com segurança.",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="min-h-screen bg-gray-800 text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="diferenciais-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Meus <span className="text-emerald-400">Diferenciais</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center mb-12"
        >
          O que me torna a escolha certa como{" "}
          <strong>freelancer de tecnologia</strong> para o seu projeto digital.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l-2 border-emerald-500/30 ml-6"
        >
          {diffs.map((d, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              className="mb-12 ml-6 relative"
            >
              <div className="absolute -left-9 top-0 flex items-center justify-center w-10 h-10 bg-gray-900 border-2 border-emerald-500 rounded-full">
                {d.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-gray-400">{d.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
