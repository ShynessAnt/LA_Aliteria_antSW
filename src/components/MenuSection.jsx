import React from "react";
import { motion } from "framer-motion";

const Star = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const MenuSection = () => {
  const menuData = {
    "ALITAS Y COSTILLAS": [
      {
        name: "Alitas Fritas",
        price: "$70",
        description: "Alitas de pollo fritas hasta quedar doradas y crujientes",
      },
      {
        name: "Alitas Carbón",
        price: "$70",
        description: "Alitas asadas al carbón con ese sabor ahumado único",
      },
      {
        name: "Costillas",
        price: "$75",
        description: "Costillas de cerdo tiernas y jugosas",
      },
      {
        name: "Combinadas",
        price: "$80",
        description: "Mezcla perfecta de alitas y costillas",
      },
      {
        name: "Alipapas",
        price: "$75",
        description: "Alitas acompañadas de papas crujientes",
      },
      {
        name: "Costipapas",
        price: "$80",
        description: "Costillas servidas con papas",
      },
    ],
    "BONELESS Y MÁS": [
      {
        name: "Boneless con Papas",
        price: "$75",
        description: "5 piezas de boneless + papas fritas",
      },
      {
        name: "Boneless sin Papas",
        price: "$85",
        description: "8 piezas de boneless sin acompañamiento",
      },
      {
        name: "Boneless Fuego c/ Papas",
        price: "$90",
        description: "5 piezas de boneless picante + papas",
      },
      {
        name: "Boneless Fuego s/Papas",
        price: "$95",
        description: "8 piezas de boneless extra picante sin papas",
      },
    ],
    "PAPAS Y NACHOS": [
      {
        name: "Francesa",
        price: "$50",
        description: "Papas francesas clásicas, doradas y crujientes",
      },
      {
        name: "Francesa Especiales",
        price: "$70",
        description: "Papas francesas con ingredientes especiales",
      },
      { name: "Gajo", price: "$65", description: "Papas gajo sazonadas" },
      {
        name: "Gajo Especiales",
        price: "$80",
        description: "Papas gajo con carne molida preparada y queso manchego",
      },
      {
        name: "Nachos",
        price: "$50",
        description: "Nachos tradicionales con queso",
      },
      {
        name: "Nachos Especiales",
        price: "$70",
        description: "Nachos con ingredientes premium",
      },
      {
        name: "Papas Waffle",
        price: "$65",
        description: "Papas con forma de waffle, crujientes por fuera",
      },
      {
        name: "Waffle Especiales",
        price: "$80",
        description: "Papas waffle con toppings especiales",
      },
    ],
    EXTRAS: [
      {
        name: "Nuggets c/Papas",
        price: "$50",
        description: "Nuggets de pollo acompañados de papas",
      },
      {
        name: "Palomitas de Pollo",
        price: "$50",
        description: "Pequeños trozos de pollo empanizado",
      },
      {
        name: "Salchipulpos c/Papas",
        price: "$50",
        description: "Divertidos salchipulpos con papas",
      },
      {
        name: "Dedos de Queso c/Papas",
        price: "$65",
        description: "Bastones de queso empanizado con papas",
      },
      {
        name: "Banderilla (Salchicha)",
        price: "$35",
        description: "Salchicha en palillo, perfecta para compartir",
      },
      {
        name: "Elote Amarillo",
        price: "$50",
        description: "Elote tierno con mantequilla y especias",
      },
      {
        name: "Aros de Cebolla c/Papas",
        price: "$60",
        description: "Aros de cebolla crujientes con papas",
      },
      {
        name: "Jalapeños Rellenos c/Papas",
        price: "$70",
        description: "Jalapeños rellenos de queso con papas",
      },
      {
        name: "Combo Snacks",
        price: "$70",
        description:
          "Elige 4 entre: aros de cebolla, jalapeños, nuggets, palomitas, salchipulpos, dedos de queso (incluye de 2 a 3 piezas de c/u)",
      },
    ],
  };

  return (
    <section
      id="menu"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400 mr-4"></div>
            <Star className="w-8 h-8 text-amber-400 fill-current" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400 ml-4"></div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="luxurious-script-regular text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              La Aliteria
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada platillo es preparado con ingredientes frescos y el sazón único
            que nos caracteriza. ¡Descubre por qué somos los favoritos!
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-20">
          {Object.entries(menuData).map(([category, items], categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-10"
            >
              {/* Category Title */}
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-4">
                  {category}
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
              </div>

              {/* Items Grid */}
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-500/20 hover:border-amber-400/60 transition-all duration-500"
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Item Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-100 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 ml-4 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed mb-6 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-current mr-0.5"
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">
                          (4.9)
                        </span>
                      </div>

                      {/* Order button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg"
                      >
                        Ordenar
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boton para ver más del menú */}
        {/* Botón para ver más del menú */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="Menu.html"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xl rounded-full shadow-2xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 border-2 border-amber-400/50 hover:border-amber-300"
          >
            <span className="flex items-center gap-3">
              Ver Menú Completo
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.a>
          <p className="text-gray-400 mt-4 text-sm">
            Descubre todas nuestras especialidades y promociones
          </p>
        </motion.div>

        {/* Special Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Nota Especial
            </h3>
            <p className="text-gray-300 text-lg">
              <strong>Especiales:</strong> Carne molida preparada y queso
              manchego
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Laredo, San Carlos, Jalapa, Laureles y Tule
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
