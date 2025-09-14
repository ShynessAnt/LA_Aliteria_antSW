// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY + window.innerHeight;

      // 👇 Solo aparece al llegar al último 25% de la página
      if (scrollTop >= scrollHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-24 right-7 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 
                 rounded-full shadow-xl flex items-center justify-center z-40 md:hidden
                 hover:from-orange-500 hover:to-amber-500 transition-all duration-300"
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
    >
      <ArrowUp className="w-6 h-6 text-black" />
    </motion.button>
  );
};

export default ScrollToTop;
