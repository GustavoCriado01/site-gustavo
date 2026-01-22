"use client";
import { motion } from "framer-motion";
import { FaCode, FaCogs, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: <FaCode className="text-emerald-400 text-5xl mb-4" />,
    title: "Desenvolvimento Web & Mobile",
    desc: "Criação de sites, sistemas e aplicativos utilizando Next.js, React e .NET. Soluções rápidas, modernas e escaláveis para empresas que buscam presença digital de impacto.",
  },
  {
    icon: <FaCogs className="text-emerald-400 text-5xl mb-4" />,
    title: "Automação de Processos",
    desc: "Implementação de RPA (Robotic Process Automation) e integrações via APIs que reduzem custos, aumentam produtividade e eliminam tarefas repetitivas.",
  },
  {
    icon: <FaShieldAlt className="text-emerald-400 text-5xl mb-4" />,
    title: "Segurança da Informação",
    desc: "Adequação à LGPD, consultoria em segurança digital e aplicação de práticas de hacking ético para proteção contra vulnerabilidades e ataques cibernéticos.",
  },
  {
    icon: <FaHandsHelping className="text-emerald-400 text-5xl mb-4" />,
    title: "Consultoria & Suporte Técnico",
    desc: "Apoio estratégico em TI e desenvolvimento, auxiliando empresas a planejar, estruturar e evoluir suas soluções digitais com segurança e confiança.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white px-6 py-20"
    >
      <div className="max-w-6xl text-center">
        <motion.h2
          id="servicos-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Meus <span className="text-emerald-400">Serviços</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Soluções digitais sob medida, unindo{" "}
          <strong>tecnologia moderna</strong>,{" "}
          <strong>automação inteligente</strong> e{" "}
          <strong>segurança da informação</strong>.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((s, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
