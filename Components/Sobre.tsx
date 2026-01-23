"use client";
import { motion } from "framer-motion";
import { FaCode, FaLock, FaCloud } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Sobre() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-5xl text-center">
        <motion.h2
          id="sobre-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Sobre <span className="text-emerald-400">mim</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-12 leading-relaxed"
        >
          Sou <strong>desenvolvedor freelancer</strong> com mais de 9 anos de experiência em 
  <strong> tecnologia e desenvolvimento de software</strong>.  
  Atuo em projetos que vão desde <strong>sites institucionais</strong> até 
  <strong> aplicações complexas em Next.js, React e .NET</strong>.  
  Minha missão é entregar soluções digitais com qualidade, segurança e escalabilidade, 
  sempre alinhadas às necessidades do cliente.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.article variants={fadeInUp} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaCode className="text-emerald-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
            <p className="text-gray-400 text-sm">Next.js, React, .NET, APIs e alta performance.</p>
          </motion.article>

          <motion.article variants={fadeInUp} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaCloud className="text-emerald-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Automação & Cloud</h3>
            <p className="text-gray-400 text-sm">Integrações, RPA, Azure e AWS.</p>
          </motion.article>

          <motion.article variants={fadeInUp} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaLock className="text-emerald-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Segurança</h3>
            <p className="text-gray-400 text-sm">LGPD, boas práticas e hacking ético.</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}