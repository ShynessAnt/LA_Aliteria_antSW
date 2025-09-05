import React, { useState, useEffect } from "react";
import GallerySection from "./GallerySection";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
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

const LaAliteria = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

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

  // Navegación suave
  const scrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(elementId);
    setIsMenuOpen(false);
  };

  // Menú de navegación con iconos
  const navigationItems = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "galeria", label: "Galería", icon: Camera },
    { id: "menu", label: "Menú", icon: UtensilsCrossed },
    { id: "nosotros", label: "Nosotros", icon: Info },
    { id: "contacto", label: "Contacto", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header / Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl z-50"
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            {/* Logo IMG */}
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25">
              <ChefHat className="w-10 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-white font-mono">
              La Aliteria
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-lg font-medium capitalize transition-all duration-300 hover:text-amber-400 relative group ${
                  activeSection === item.id ? "text-amber-400" : "text-gray-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-4 text-gray-300 hover:text-amber-400 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl z-50 md:hidden border-l border-amber-500/20"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-amber-500/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white font-mono">
                      La Aliteria
                    </h2>
                    <p className="text-sm text-amber-400">Menú de Navegación</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-2">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      custom={index}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 hover:border-amber-500/30 border border-transparent ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-gradient-to-br from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/25"
                            : "bg-gray-800 group-hover:bg-gray-700"
                        }`}
                      >
                        <IconComponent size={25} />
                      </div>

                      <div className="flex-1 text-left">
                        <span className="text-lg font-semibold block">
                          {item.label}
                        </span>
                        <span className="text-sm opacity-70">
                          {item.id === "inicio" && "Página principal"}
                          {item.id === "menu" && "Nuestros platillos"}
                          {item.id === "nosotros" && "Conoce nuestra historia"}
                          {item.id === "contacto" && "Ubicación y horarios"}
                        </span>
                      </div>

                      {activeSection === item.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-amber-400 rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Social Media in Mobile Menu */}
              <div className="p-6 border-t border-amber-500/20 mt-auto">
                <p className="text-sm text-gray-400 mb-4">
                  Síguenos en redes sociales
                </p>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/25"
                  >
                    <a
                      href="https://www.instagram.com/ant.shynxxss_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25"
                  >
                    <a
                      href="https://www.facebook.com/aliteria.bermirez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/25"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-24 min-h-screen flex items-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url(./src/components/assets/fondo1.jpg)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    La Aliteria
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-300 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Sabores auténticos que conquistan corazones. Hamburguesas
                  gourmet hechas con amor y los mejores ingredientes.
                </motion.p>
              </div>

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
                  <ChefHat size={20} />
                  <span>Ver Menú</span>
                </button>

                <button
                  onClick={() => scrollTo("contacto")}
                  className="px-6 py-3 border-2 border-amber-500 text-amber-400 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300"
                >
                  Contáctanos
                </button>
              </motion.div>

              {/* Stats */}
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

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 shadow-2xl shadow-amber-500/25 transform rotate-3 transition-all duration-300 hover:shadow-3xl hover:shadow-amber-500/40 hover:rotate-6 hover:brightness-110 bg-cover bg-center">
                <div
                  className="w-full h-80 rounded-xl flex items-center justify-center border border-amber-500/10"
                  style={{
                    backgroundImage:
                      "url('src/components/assets/img-hamburguesa.jpg')",
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 hover:text-amber-300">
                      Hamburguesas Gourmet
                    </h3>
                    <p className="text-gray-400 transition-colors duration-300 hover:text-gray-300">
                      Hechas con pasión y los mejores ingredientes
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collage Imagen  */}

      <GallerySection id="galeria" />

      {/* Menu Section */}
      <section
        id="menu"
        className="section-padding bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestro Menú
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cada hamburguesa es una obra de arte culinaria, preparada con
              ingredientes frescos y mucho amor
            </p>
          </motion.div>

          <div className="space-y-16">
            {menuItems.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-center text-amber-400">
                  {category.category}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-white">
                          {item.name}
                        </h4>
                        <span className="text-2xl font-bold text-amber-400">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center mt-4 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">
                          (4.9)
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="nosotros"
        className="section-padding bg-gradient-to-br from-black to-gray-900"
      >
        <div className="container mx-auto">
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
                  gastronomía. Comenzamos como un pequeño negocio familiar con
                  la misión de crear las mejores hamburguesas gourmet de la
                  región.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Cada día trabajamos con dedicación para ofrecer productos de
                  la más alta calidad, utilizando ingredientes frescos y recetas
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
                        <ChefHat className="w-10 h-10 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Misión
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Crear experiencias gastronómicas únicas que conecten a
                        las familias a través del sabor auténtico y la
                        tradición.
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
                        <div className="text-sm text-gray-400">
                          Ingredientes
                        </div>
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

      {/* Contact Section */}
      <section
        id="contacto"
        className="section-padding bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Section */}
            <section
              id="contacto"
              className="section-padding bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
            >
              <div className="container mx-auto relative z-10">
                {/* Título */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    ¡Visítanos!
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Te esperamos para vivir una experiencia gastronómica única
                    en familia
                  </p>
                </motion.div>

                {/* Grid principal */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Información */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                  >
                    {/* Ubicación */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Ubicación
                        </h3>
                        <p className="text-gray-400">
                          Xalapa, Veracruz, México
                        </p>
                        <p className="text-gray-400">
                          En el corazón de la ciudad
                        </p>
                      </div>
                    </div>

                    {/* Horarios */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Horarios
                        </h3>
                        <div className="space-y-1 text-gray-400">
                          <p>Lunes - Viernes: 12:00 PM - 10:00 PM</p>
                          <p>Sábado - Domingo: 11:00 AM - 11:00 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Contacto
                        </h3>
                        <p className="text-gray-400">+52 56 15 67 19 81</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Google Maps */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-lg shadow-amber-500/20 border border-gray-700"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.748074893574!2d-96.927909!3d19.541436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db33f9e0d9cbb3%3A0x3b5a0a7f2f3b6df4!2sXalapa%2C%20Veracruz!5e0!3m2!1ses!2smx!4v1682728298264!5m2!1ses!2smx"
                      width="100%"
                      height="400"
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-[400px] border-0"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <div className="space-y-10">
              <h3 className="text-3xl font-semibold text-gray-200 text-center">
                Síguenos en Redes
              </h3>
              <div className="flex space-x-10 justify-center">
                {/* Instagram */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center 
                 bg-white/10 border border-white/20 text-pink-400 
                 hover:bg-pink-500/20 hover:text-pink-500 
                 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center 
                 bg-white/10 border border-white/20 text-blue-400 
                 hover:bg-blue-500/20 hover:text-blue-500 
                 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>

                {/* WhatsApp / Mensajería */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center 
                 bg-white/10 border border-white/20 text-green-400 
                 hover:bg-green-500/20 hover:text-green-500 
                 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              ¿Listo para ordenar?
            </h3>

            <div className="space-y-6">
              {/* Ícono */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/20">
                  <Phone className="w-7 h-7 text-amber-400" />
                </div>
                <p className="text-gray-400 max-w-sm mx-auto">
                  Llámanos ahora o visítanos para disfrutar de nuestras
                  hamburguesas gourmet
                </p>
              </div>

              {/* Botón */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 text-black px-6 py-3 rounded-xl font-medium 
                 hover:bg-amber-400 transition-all duration-300 text-lg flex 
                 items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar ahora</span>
              </motion.button>

              {/* Nota */}
              <p className="text-center text-sm text-gray-500">
                ¡También hacemos entregas a domicilio!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 border-t border-amber-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25">
                <ChefHat className="w-6 h-6 text-black" />
              </div>
              <span className="text-3xl font-bold font-serif">La Aliteria</span>
            </motion.div>

            <p className="text-gray-400 max-w-md mx-auto">
              Sabores auténticos que conectan corazones y crean momentos
              inolvidables en familia.
            </p>

            <div className="border-t border-amber-500/20 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 La Aliteria. Todos los derechos reservados. Hecho con ❤️
                para nuestra familia de clientes.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full shadow-2xl shadow-amber-500/25 flex items-center justify-center z-40 md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Phone className="w-6 h-6 text-black" />
      </motion.button>

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
    </div>
  );
};

export default LaAliteria;
