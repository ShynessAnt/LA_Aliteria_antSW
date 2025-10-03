import React from "react";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

import MinimalCarousel from "./MinimalCarousel";

const HeroSection = ({ fadeInUp, stagger, scrollTo }) => {
  return (
    <section
      id="inicio"
      className="relative pt-24 min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/imagenes/img-01fondo.webp)" }}
    >
      {/*  Overlay oscuro encima de la imagen */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/*  Contenido principal siempre encima del overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bienvenido a
                <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  La{" "}
                  <span className="luxurious-script-regular text-9xl">
                    Aliteria
                  </span>
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Autenticidad en cada sabor y excelencia en cada receta.
                Hamburguesas preparadas con pasión y los mejores ingredientes,
                para que disfrutes momentos memorables en cada bocado.
              </motion.p>
            </div>

            {/* Botones */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollTo("menu")}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ChefHat size={20} /> <span>Ver Menú</span>
              </button>
              <button
                onClick={() => scrollTo("contacto")}
                className="px-6 py-3 border-2 border-amber-500 text-amber-400 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                Contáctanos
              </button>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {[
                { number: "500+", label: "Clientes Felices" },
                { number: "5★", label: "Calificación" },
                { number: "2+", label: "Años de Experiencia" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-amber-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MinimalCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
