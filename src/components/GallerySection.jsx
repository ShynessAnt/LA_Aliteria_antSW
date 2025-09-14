import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Heart, Star, Facebook, Instagram } from "lucide-react";


const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Datos simulados de imágenes (en un proyecto real, estas serían URLs reales)
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
      alt: "Hamburguesa Clásica",
      category: "hamburguesas",
      title: "La Clásica",
      likes: 45,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
      alt: "Hamburguesa con Bacon",
      category: "hamburguesas",
      title: "La Bacon",
      likes: 62,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
      alt: "Hamburguesa Vegetariana",
      category: "hamburguesas",
      title: "La Vegetariana",
      likes: 38,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
      alt: "Papas Gourmet",
      category: "complementos",
      title: "Papas Gourmet",
      likes: 29,
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
      alt: "Ambiente del restaurante",
      category: "ambiente",
      title: "Nuestro Ambiente",
      likes: 51,
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=500",
      alt: "Hamburguesa Gourmet",
      category: "hamburguesas",
      title: "Especial del Chef",
      likes: 78,
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1596662747131-4c5e0c6b9da3?w=500",
      alt: "Preparación",
      category: "proceso",
      title: "En la Cocina",
      likes: 34,
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500",
      alt: "Hamburguesa Mexicana",
      category: "hamburguesas",
      title: "La Mexicana",
      likes: 67,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="galeria"
      className="section-padding bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-pink-500/25">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Galería La Aliteria
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre nuestras creaciones gastronómicas y el ambiente único de La
            Aliteria
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover="hover"
              className="relative cursor-pointer group overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback en caso de error al cargar la imagen
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                {/* Placeholder/Fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 items-center justify-center hidden">
                  <div className="text-center">
                    <Camera className="w-8 h-8 text-amber-400 mx-auto mb-2 opacity-50" />
                    <p className="text-amber-400 text-sm font-medium opacity-70">
                      {image.title}
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
                  <div className="w-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-400 fill-current" />
                        <span className="text-white text-sm">
                          {image.likes}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-amber-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      image.category === "hamburguesas"
                        ? "bg-amber-500 text-black"
                        : ""
                    }
                    ${
                      image.category === "complementos"
                        ? "bg-blue-500 text-white"
                        : ""
                    }
                    ${
                      image.category === "ambiente"
                        ? "bg-green-500 text-white"
                        : ""
                    }
                    ${
                      image.category === "proceso"
                        ? "bg-purple-500 text-white"
                        : ""
                    }
                  `}
                  >
                    {image.category === "hamburguesas" && "Hamburguesas"}
                    {image.category === "complementos" && "Complementos"}
                    {image.category === "ambiente" && "Ambiente"}
                    {image.category === "proceso" && "Proceso"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            ¿Te gusta lo que ves? ¡Síguenos en redes sociales para más
            contenido!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/25"
            >
              <Instagram className="w-10 h-10" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/25"
            >
              <Facebook className="w-10 h-10" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-amber-400 mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-400">
                    Una de nuestras creaciones especiales
                  </p>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-red-400 fill-current" />
                      <span className="text-white">
                        {selectedImage.likes} me gusta
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <span
                    className={`
                    px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      selectedImage.category === "hamburguesas"
                        ? "bg-amber-500 text-black"
                        : ""
                    }
                    ${
                      selectedImage.category === "complementos"
                        ? "bg-blue-500 text-white"
                        : ""
                    }
                    ${
                      selectedImage.category === "ambiente"
                        ? "bg-green-500 text-white"
                        : ""
                    }
                    ${
                      selectedImage.category === "proceso"
                        ? "bg-purple-500 text-white"
                        : ""
                    }
                  `}
                  >
                    {selectedImage.category === "hamburguesas" &&
                      "Hamburguesas"}
                    {selectedImage.category === "complementos" &&
                      "Complementos"}
                    {selectedImage.category === "ambiente" && "Ambiente"}
                    {selectedImage.category === "proceso" && "Proceso"}
                  </span>
                </div>
                <p className="text-gray-300">
                  {selectedImage.category === "hamburguesas" &&
                    "Nuestras hamburguesas gourmet son preparadas con los mejores ingredientes y mucho amor por la cocina."}
                  {selectedImage.category === "complementos" &&
                    "Los complementos perfectos para acompañar tu hamburguesa favorita."}
                  {selectedImage.category === "ambiente" &&
                    "Un ambiente acogedor donde cada visita se convierte en una experiencia memorable."}
                  {selectedImage.category === "proceso" &&
                    "Cada platillo es preparado con dedicación y técnicas artesanales."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .section-padding {
          padding: 4rem 1rem 6rem 1rem;
        }
        @media (min-width: 1024px) {
          .section-padding {
            padding: 6rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
