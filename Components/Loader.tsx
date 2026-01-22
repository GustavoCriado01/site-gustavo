"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
 <motion.div
  className="fixed inset-0 bg-animated-gradient flex flex-col items-center justify-center z-[9999]"
  initial={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
  <div className="relative flex flex-col items-center">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg mb-6"
    >
      <Image
        src="/guga-avatar.png"
        alt="Foto estilo anime de Gustavo Lira Criado"
        width={200}
        height={200}
        className="object-cover w-full h-full"
        priority
      />
    </motion.div>
<motion.h1
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="text-4xl md:text-6xl font-extrabold shimmer-text"
>
  GustavoDev
</motion.h1>
  </div>
</motion.div>

      )}
    </AnimatePresence>
  );
}
