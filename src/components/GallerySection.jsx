import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/imagenes/img-05collaje.webp",
      alt: "Hamburguesa",
      title: "La Clásica",
    },
    {
      id: 2,
      src: "/imagenes/img-03bebida_4_11zon.webp",
      alt: "Malteada",
      title: "Malteada mazapán",
    },
    {
      id: 3,
      src: "/imagenes/img-02comida_3_11zon.webp",
      alt: "Hamburguesa",
      title: "Patillo",
    },
    {
      id: 4,
      src: "/imagenes/img-05bebida.webp",
      alt: "Malteada",
      title: "Malteada de Fresa",
    },
    {
      id: 5,
      src: "/imagenes/img-03comida_5_11zon.webp",
      alt: "Platillo",
      title: "Platillo",
    },
  ];

  const modalVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <h2
          id="galeria"
          className="text-white text-4xl font-bold text-center mb-10"
        >
          Galería
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium text-lg">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] bg-black rounded-lg overflow-hidden relative"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
