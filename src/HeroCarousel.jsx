import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "src/components/assets/img-hamburguesa.jpg",
    title: "Hamburguesas Gourmet",
    desc: "Hechas con pasión y los mejores ingredientes",
  },
  {
    src: "src/components/assets/fondo1.jpg",
    title: "Papas Crujientes",
    desc: "Perfectas para acompañar tu hamburguesa",
  },
  {
    src: "src/components/assets/fondo2.jpg",
    title: "Bebidas Refrescantes",
    desc: "Disfruta con tu combo favorito",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // autoplay cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 shadow-2xl shadow-amber-500/25">
      <motion.div
        key={images[current].src}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-80 rounded-xl flex items-center justify-center border border-amber-500/20 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[current].src})` }}
      >
        <div className="bg-black/50 p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            {images[current].title}
          </h3>
          <p className="text-gray-300">{images[current].desc}</p>
        </div>
      </motion.div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-amber-500" : "bg-gray-400/50"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
