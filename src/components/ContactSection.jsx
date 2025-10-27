// src/components/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

// --- Datos de las Sucursales ---
const sucursalesData = [
  {
    id: "sancarlos",
    nombre: "Sucursal San Carlos 📍",
    direccion: ["Norte 19 #7. Fracc. San Carlos"],
    telefono: "+52 56 15 67 19 81",
    horario: ["Martes - Domingo: A partir de las 6:00 p.m."],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.4301759634297!2d-99.05250213528818!3d19.578056444254003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f054ba4995f1%3A0xa7ced32df5a94cc3!2sCalle%20Nte.%2019%2011%2C%20Lomas%20de%20San%20Carlos%2C%2055080%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1761529973714!5m2!1ses-419!2smx", // ¡REEMPLAZAR CON URL REAL!
  },
  {
    id: "laredo",
    nombre: "Sucursal Laredo 📍",
    direccion: ["Rio Bravo #49. Col. Nuevo Laredo"],
    telefono: "+52 56 15 67 19 81", // ¡REEMPLAZAR CON DATOS REALES!
    horario: [
      "🧾 Martes - Domingo: A partir de las 6:00 p.m.",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.1899201513384!2d-99.04625820000001!3d19.5763625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1f13c90f4f5%3A0x8f9b4b64a41389e7!2sLa%20Aliteria%20Laredo!5e0!3m2!1ses-419!2smx!4v1761530053117!5m2!1ses-419!2smx", // ¡REEMPLAZAR CON URL REAL!
  },
];

// --- Componente de Tarjeta de Sucursal ---
const SucursalCard = ({ sucursal }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-colors duration-300"
  >
    <h3 className="text-2xl font-bold text-amber-400 mb-4">
      {sucursal.nombre}
    </h3>

    <div className="space-y-4">
      {/* Ubicación */}
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-white">Dirección:</p>
          {sucursal.direccion.map((line, index) => (
            <p key={index} className="text-gray-400 text-sm">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Horarios */}
      <div className="flex items-start space-x-3">
        <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-white">Horarios:</p>
          {sucursal.horario.map((line, index) => (
            <p key={index} className="text-gray-400 text-sm">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Contacto */}
      <div className="flex items-start space-x-3">
        <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-white">Teléfono:</p>
          <p className="text-gray-400 text-sm">{sucursal.telefono}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Componente Principal ---
const ContactSection = () => {
  const [activeMap, setActiveMap] = useState(sucursalesData[0].id);

  const activeSucursal = sucursalesData.find((s) => s.id === activeMap);

  return (
    <section
      id="contacto"
      className="min-h-screen py-32 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
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
            Te esperamos para vivir una experiencia gastronómica única en
            cualquiera de nuestras **dos sucursales**.
          </p>
        </motion.div>

        {/* --- Información de Sucursales y Redes Sociales --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sucursales */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold text-white border-b border-gray-700 pb-3 mb-6">
              Encuéntranos Aquí
            </h3>
            {/* Grid para las dos tarjetas de sucursal */}
            <div className="grid md:grid-cols-2 gap-6">
              {sucursalesData.map((sucursal) => (
                <SucursalCard key={sucursal.id} sucursal={sucursal} />
              ))}
            </div>

            {/* Redes sociales */}
            <div className="pt-8">
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                Síguenos en Redes
              </h3>
              <div className="flex space-x-6">
                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/laaliterialaredo/"
                  target="_blank"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white/10 border border-white/20 text-pink-400 
                  hover:bg-pink-500/20 hover:text-pink-500 
                  transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="https://www.facebook.com/aliteria.bermirez"
                  target="_blank"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white/10 border border-white/20 text-blue-400 
                  hover:bg-blue-500/20 hover:text-blue-500 
                  transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/525615671981"
                  target="_blank"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white/10 border border-white/20 text-green-400 
                  hover:bg-green-500/20 hover:text-green-500 
                  transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps (Pestañas) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-amber-500/10 border border-gray-700"
          >
            {/* Navegación de Pestañas */}
            <div className="flex bg-gray-900 border-b border-gray-700">
              {sucursalesData.map((sucursal) => (
                <button
                  key={sucursal.id}
                  onClick={() => setActiveMap(sucursal.id)}
                  className={`flex-1 py-3 text-sm font-medium transition-all duration-300 
                    ${
                      activeMap === sucursal.id
                        ? "bg-amber-500 text-black shadow-inner"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                >
                  {sucursal.nombre.replace(" 📍", "")}
                </button>
              ))}
            </div>

            {/* Iframe del Mapa Activo */}
            <div className="relative h-[400px] lg:h-[550px]">
              {activeSucursal && (
                <iframe
                  title={`Mapa de ${activeSucursal.nombre}`}
                  src={activeSucursal.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA móvil (Sección original sin cambios mayores) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden bg-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-lg mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            ¿Listo para ordenar? 📲
          </h3>

          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/20">
                <Phone className="w-7 h-7 text-amber-400" />
              </div>
              <p className="text-gray-400 max-w-sm mx-auto">
                Llámanos ahora o visítanos para disfrutar de nuestras
                hamburguesas gourmet
              </p>
            </div>

            <motion.a
              href={`tel:${sucursalesData[0].telefono.replace(/\s/g, "")}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-amber-500 text-black px-6 py-3 rounded-xl font-medium 
              hover:bg-amber-400 transition-all duration-300 text-lg flex 
              items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Llamar ahora</span>
            </motion.a>

            <p className="text-center text-sm text-gray-500">
              ¡También hacemos entregas a domicilio!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
