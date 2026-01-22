"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511989007006"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-transform hover:scale-110 animate-pulse"
      aria-label="Fale comigo no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
