// src/components/Footer.jsx
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

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
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25">
              <ChefHat className="w-6 h-6 text-black" />
            </div>
            <span className="text-3xl font-bold font-serif">La Aliteria</span>
          </motion.div>

          {/* Texto descriptivo */}
          <p className="text-gray-400 max-w-md mx-auto">
            Sabores auténticos que conectan corazones y crean momentos
            inolvidables en familia.
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
