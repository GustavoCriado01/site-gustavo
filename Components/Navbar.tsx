"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#portfolio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scroll, setScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);

      setScrolled(window.scrollY > 50); // ativa fundo + shrink

      const sections = navLinks.map(
        (link) => document.querySelector(link.href) as HTMLElement
      );
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        if (sec && scrollPos >= sec.offsetTop) {
          setActive(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-emerald-500 z-50"
        initial={{ width: 0 }}
        animate={{ width: `${scroll}%` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 shadow-md transition-colors duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold text-white">
            Gustavo<span className="text-emerald-400">Dev</span>
          </a>

          {/* Links desktop */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="hidden md:flex gap-8"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className={clsx(
                  "relative transition-colors",
                  active === link.href.replace("#", "")
                    ? "text-emerald-400 font-semibold"
                    : "text-gray-300 hover:text-emerald-400"
                )}
              >
                {link.label}
                {/* Underline animado */}
                <motion.span
                  layoutId="underline"
                  className={clsx(
                    "absolute left-0 -bottom-1 h-0.5 bg-emerald-400",
                    active === link.href.replace("#", "") ? "w-full" : "w-0"
                  )}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Botão WhatsApp desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5511989007006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition"
            >
              <FaWhatsapp size={18} /> Fale comigo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/95 overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="px-6 py-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className={clsx(
                    "transition-colors",
                    active === link.href.replace("#", "")
                      ? "text-emerald-400 font-semibold"
                      : "text-gray-300 hover:text-emerald-400"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/5511989007006"
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition"
              >
                <FaWhatsapp size={18} /> Fale comigo
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
