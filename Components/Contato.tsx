"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { fadeInUp } from "@/lib/animations";

export default function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20 text-center"
    >
      <motion.h2
        id="contato-title"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Vamos <span className="text-emerald-400">conversar</span>?
      </motion.h2>

      <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-gray-300 mb-10 max-w-2xl">
        Fale comigo para transformar sua ideia em uma solução digital com qualidade e segurança.
      </motion.p>

      <motion.a
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        href="https://wa.me/5511989007006"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 text-lg mb-8"
        aria-label="Fale comigo no WhatsApp"
      >
        <FaWhatsapp size={24} /> Fale comigo no WhatsApp
      </motion.a>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-6">
        <a href="mailto:gustavoliracriado30@gmail.com" className="text-gray-400 hover:text-emerald-400 transition" aria-label="Enviar e-mail">
          <FaEnvelope size={28} />
        </a>
        <a href="https://www.linkedin.com/in/gustavo-lira-criado-894111143/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition" aria-label="LinkedIn">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/gustavocriado" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition" aria-label="GitHub">
          <FaGithub size={28} />
        </a>
      </motion.div>

      <p className="text-sm text-gray-400 mt-6">
        Atendo clientes em todo o Brasil, especialmente São Paulo/SP.
      </p>
    </section>
  );
}
