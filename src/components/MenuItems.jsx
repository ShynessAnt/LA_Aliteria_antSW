// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChefHat,
  Home,
  Camera,
  Info,
  UtensilsCrossed,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

import { Logo } from "./assets/imagenes";

// 🔹 Items de navegación
const navigationItems = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "menu", label: "Menú", icon: UtensilsCrossed },
  { id: "nosotros", label: "Nosotros", icon: Info },
  { id: "contacto", label: "Contacto", icon: Phone },
  { id: "galeria", label: "Galería", icon: Camera },
];

// 🔹 Animación menú móvil
const mobileMenuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
};

// 🔹 Animación items
const menuItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

// 🔹 Scroll suave
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = 80;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

// 🔹 ScrollSpy para resaltar sección activa
const useScrollSpy = (setActiveSection) => {
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + 120;
      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navigationItems[i].id);
        if (section && section.offsetTop <= pos) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);
};

const MenuItems = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useScrollSpy(setActiveSection);

  // 🔹 Detectar scroll para cambiar navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 🔝 Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-md border-b border-amber-600/20"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* 🔹 Logo */}
            <a
              href="inicio" // Lo cambiamos a "#" o lo eliminamos, pero en React es mejor usar un handler
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado del <a>
                handleClick("inicio");
              }}
            >
              <img
                className="h-14 w-auto object-contain ml-4 cursor-pointer" // Añade cursor-pointer para mejor UX
                src={Logo}
                alt="Ir al inicio | La Aliteria"
              />
            </a>
            {/* 🔹 Menú escritorio */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-amber-500 bg-amber-500/10"
                      : scrolled
                      ? "text-gray-300 hover:text-amber-400 hover:bg-amber-400/10"
                      : "text-white hover:text-amber-400 hover:bg-amber-400/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* 🔹 Menú móvil */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full transition ${
                scrolled
                  ? "text-gray-300 hover:bg-amber-500/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* 🔹 Panel lateral móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="fixed top-0 right-0 h-full w-72 bg-zinc-900 shadow-2xl z-50 md:hidden"
            >
              {/* Header menú móvil */}
              <div className="p-6 border-b border-amber-500/20 flex items-center space-x-3">
                <h2 className="luxurious-script-regular text-3xl font-bold text-amber-500">
                  La Aliteria
                </h2>
              </div>

              {/* Items menú móvil */}
              <div className="p-4 space-y-1">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      variants={menuItemVariants}
                      onClick={() => handleClick(item.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400 border-l-2 border-amber-500"
                          : "text-gray-300 hover:bg-amber-400/10 hover:text-amber-300"
                      }`}
                    >
                      <IconComponent size={18} />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Redes sociales */}
              <div className="p-6 border-t border-amber-500/20 mt-auto">
                <p className="text-sm text-gray-400 mb-4">Síguenos</p>
                <div className="flex space-x-3">
                  <motion.a
                    href="https://www.instagram.com/laaliterialaredo/"
                    target="_blank"
                    className="w-10 h-10 bg-pink-600/20 text-pink-400 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/aliteria.bermirez"
                    target="_blank"
                    className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/525615671981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600/20 text-green-400 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuItems;
