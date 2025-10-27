import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./assets/imagenes";

// Iconos (puedes reemplazar con los de tu librería preferida)
const Heart = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const AboutSection = ({ backgroundImage }) => {
  return (
    <section
      id="nosotros"
      className=" section-padding relative pb-52"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(55, 65, 81, 0.8)), url(${backgroundImage})`
          : "linear-gradient(to bottom right, #000, #1f2937)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                La Aliteria nació del sueño de una familia apasionada por la
                gastronomía. Comenzamos como un pequeño negocio familiar con la
                misión de crear las mejores hamburguesas gourmet de la región.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cada día trabajamos con dedicación para ofrecer productos de la
                más alta calidad, utilizando ingredientes frescos y recetas
                tradicionales que han pasado de generación en generación.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Con Amor</h3>
                <p className="text-gray-400 text-sm">
                  Cada hamburguesa hecha con pasión
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Familia</h3>
                <p className="text-gray-400 text-sm">
                  Un negocio familiar auténtico
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 shadow-2xl shadow-amber-500/25">
              <div className="bg-black rounded-2xl p-8 border border-amber-500/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-amber-500/25">
                      <img
                        className=""
                        src={Logo}
                        alt="logo secundario la aliteria"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Misión
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Crear experiencias gastronómicas únicas que conecten a las
                      familias a través del sabor auténtico y la tradición.
                    </p>
                  </div>

                  <div className="border-t border-amber-500/20 pt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-amber-400">
                        100%
                      </div>
                      <div className="text-sm text-gray-400">Natural</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">
                        Fresh
                      </div>
                      <div className="text-sm text-gray-400">Ingredientes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">
                        Love
                      </div>
                      <div className="text-sm text-gray-400">Preparación</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
