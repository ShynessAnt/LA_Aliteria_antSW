import React, { useState, useEffect } from "react";
import GallerySection from "./GallerySection";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

import MenuItems from "./MenuItems";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ScrollToTop from "./ScrollToTop";
import ContactSection from "./ContactSection";
import MenuApp from "./MenuApp";

const LaAliteria = () => {
  // Estado para manejar la sección activa
  const [activeSection, setActiveSection] = useState("inicio");

  // Detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "inicio";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // ajuste por el header fijo
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animaciones para las secciones
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <MenuItems
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HeroSection scrollTo={scrollTo} fadeInUp={fadeInUp} stagger={stagger} />

      {/* menú */}
      <MenuApp id="menu" />

      {/* About Section */}
      <AboutSection backgroundImage="/imagenes/fondo1.jpg" />

      {/* Contact Section */}
      <ContactSection id="contacto" />

      {/* Collage Imagen  */}
      <GallerySection id="galeria" className="min-h-screen" />

      {/* Footer */}
      <Footer />

      {/* Botón flotante para volver arriba */}
      <ScrollToTop />

      {/* 📞 Floating Action Button (FAB) para Mobile */}
      <motion.a
        href="tel:+525615671981"
        aria-label="Llamar ahora"
        className="fixed bottom-7 right-7 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full shadow-xl flex items-center justify-center z-40 md:hidden
             hover:from-orange-500 hover:to-amber-500 transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Phone className="w-6 h-6 text-black" />
      </motion.a>
    </div>
  );
};

export default LaAliteria;
