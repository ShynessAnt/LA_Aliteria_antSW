// src/components/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="min-h-screen py-16 bg-gradient-to-br from-gray-900 to-black"
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
            familia
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
                <p className="text-gray-400">Calle Nte. 19 18</p>
                <p className="text-gray-400">
                  Lomas de San Carlos, 55080 Ecatepec de Morelos, Méx.
                </p>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Horarios</h3>
                <div className="space-y-1 text-gray-400">
                  <p>Lunes - Viernes: 12:00 PM - 10:00 PM</p>
                  <p>Sábado - Domingo: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Contacto</h3>
                <p className="text-gray-400">+52 56 15 67 19 81</p>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="pt-8">
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                Síguenos en Redes
              </h3>
              <div className="flex space-x-6">
                {/* Instagram */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white/10 border border-white/20 text-pink-400 
                  hover:bg-pink-500/20 hover:text-pink-500 
                  transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white/10 border border-white/20 text-blue-400 
                  hover:bg-blue-500/20 hover:text-blue-500 
                  transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white/10 border border-white/20 text-green-400 
                  hover:bg-green-500/20 hover:text-green-500 
                  transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.7869456452354!2d-99.05315063046844!3d19.578168398858292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f054ba6e0fad%3A0xc47a9192d96c25f2!2sCalle%20Nte.%2019%2018%2C%20Lomas%20de%20San%20Carlos%2C%2055080%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1759512093691!5m2!1ses-419!2smx"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[400px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* CTA móvil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden bg-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-lg mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            ¿Listo para ordenar?
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
