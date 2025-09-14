import React, { useState, useEffect } from "react";
import GallerySection from "./GallerySection";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChefHat,
  Users,
  Heart,
  Instagram,
  Facebook,
  MessageCircle,
  Home,
  UtensilsCrossed,
  Info,
  Camera,
} from "lucide-react";

import { hamburguesa1 } from "./assets/imagenes";
import MenuItems from "./MenuItems";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MenuSection from "./MenuSection";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Animaciones para el menú móvil
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Datos del menú
  const menuItems = [
    {
      category: "Hamburguesas",
      items: [
        {
          name: "Hamburguesa Doble V",
          price: "$105 - $110 ",
          description:
            "2 carnes de res al carbón de 150g (receta casera), Chistorra, Tocino, Queso Cheddra, Lechuga, Jitomate, Cebolla, Catsup, Mostaza y Pepinillos",
        },
        {
          name: "Hamburguesa Super M",
          price: "$105 - $110",
          description:
            "2 Carnes de res al carbón de 150g (receta casera), 2 Tocinos, 2 Quesos Cheddar, Lechuga, Jitomate, Catsup, Cebolla, Mostaza y Pepinillos",
        },
        {
          name: "Andyburguer ",
          price: "$85 - $90",
          description:
            "150g de carne de res al carbón (receta casera), Aros De Cebolla Tocino, Queso Cheddar, Lechuga, Jitomate, Cebolla, BBQ Catsup, Mostaza y Pepinillos",
        },
        {
          name: "Gabyburguer",
          price: "$90 - $95",
          description:
            "150g de Boneless fuego, Tocino, Queso Cheddar, Lechuga, Jitomate, Cebolla, Catsup, Mostaza y Pepinillos",
        },
      ],
    },
    {
      category: "Bebidas",
      items: [
        {
          name: "Café Americano",
          price: "$30",
          description: "",
        },
        {
          name: "Capuchino",
          price: "$45",
          description: "Amaretto, Cajeta, Almendra, Rompope",
        },
        {
          name: "Café Descafeinado",
          price: "$30",
          description: "",
        },
        {
          name: "Capuchino Tradicional",
          price: "$40",
          description: "",
        },
        {
          name: "Té",
          price: "$20",
          description: "Variedad de sabores",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <MenuItems
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HeroSection
        fadeInUp={fadeInUp}
        stagger={stagger}
        scrollTo={setActiveSection}
      />

      {/* menú */}
      <MenuApp />
      {/* menú */}
      <MenuSection menuItems={menuItems} />

      {/* About Section */}
      <AboutSection backgroundImage="/imagenes/fondo1.jpg" />

      {/* Contact Section */}
      <ContactSection />

      {/* Collage Imagen  */}
      <GallerySection id="galeria" className="min-h-screen" />

      {/* Footer */}
      <Footer />

      {/* Botón flotante para volver arriba */}
      <ScrollToTop />

      {/* 📞 Floating Action Button (FAB) para Mobile */}
      <motion.a
        href="tel:+521234567890" // 👉 coloca tu número aquí
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
