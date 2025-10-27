// src/components/Footer.jsx
import { motion } from "framer-motion";
import { L_A } from "./assets/imagenes";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 border-t border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo + Nombre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center ">
              <img
                className="h-14 w-auto object-contain ml-4"
                src={L_A}
                alt="logo secundario la aliteria"
              />
            </div>
            <span className="luxurious-script-regular text-3xl font-bold font-serif">
              La Aliteria
            </span>
          </motion.div>

          {/* Texto descriptivo */}
          <p className="text-gray-400 max-w-md mx-auto">
            Tradición y pasión en cada platillo, creando experiencias que
            deleitan los sentidos y fortalecen los lazos familiares.
          </p>

          {/* Línea final */}
          <div className="border-t border-amber-500/20 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 La Aliteria. Todos los derechos reservados. Hecho con ❤️
              para nuestra familia de clientes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
