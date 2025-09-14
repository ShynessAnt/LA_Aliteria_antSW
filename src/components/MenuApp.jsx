import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Star = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const MenuApp = () => {
  const [activeCategory, setActiveCategory] = useState("paquetes");

  const menuData = {
    paquetes: {
      title: "PAQUETES",
      icon: "🎉",
      items: [
        {
          name: "Costillar",
          price: "$180",
          description:
            "Pieza de costilla entera, con papas francesa o elote amarillo",
          note: "Para 2 personas",
          people: 2,
        },
        {
          name: "Combo Amigos",
          price: "$330",
          description:
            "2 ord. costillas, 2 ord. alitas (fritas o al carbón) y papas especiales",
          note: "Para 4 personas",
          people: 4,
        },
        {
          name: "Combo Burguer",
          price: "$170",
          description: "2 hamburguesas tradicionales, con papas a la francesa",
          note: "Para 2 personas",
          people: 2,
        },
        {
          name: "Paque' Compartas",
          price: "$265",
          description:
            "1 costillas, 1 alitas (fritas o carbón), 1 boneless, 1 hamburguesa tradicional",
          note: "Para 4 personas",
          people: 4,
        },
      ],
    },
    hamburguesas: {
      title: "HAMBURGUESAS",
      subtitle: "Carne 100% hecha en casa",
      icon: "🍔",
      items: [
        {
          name: "Hamburguesa Doble V",
          classicPrice: "$105",
          briochePrice: "$110",
          description:
            "2 carnes de res al carbón de 150 g (receta casera), chistorra, tocino, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "AndyBurguer",
          classicPrice: "$85",
          briochePrice: "$90",
          description:
            "150 g de carne de res al carbón (receta casera), aros de cebolla tocino, queso cheddar, lechuga, jitomate, cebolla, BBQ catsup, mostaza y pepinillos",
        },
        {
          name: "GabyBurguer",
          classicPrice: "$90",
          briochePrice: "$95",
          description:
            "150 g de boneless fuego, tocino, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "Hamburguesa Super M",
          classicPrice: "$105",
          briochePrice: "$110",
          description:
            "2 carnes de res al carbón de 150 g (receta casera), 2 tocinos, 2 quesos cheddar, lechuga, jitomate, catsup cebolla, mostaza y pepinillos",
        },
        {
          name: "KarleishonBurguer",
          classicPrice: "$90",
          briochePrice: "$95",
          description:
            "150 g de carne de res al carbón (receta casera), carne especial, habanero, 2 tocinos, 2 quesos cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "Hawaiana 2.0",
          classicPrice: "$85",
          briochePrice: "$90",
          description:
            "150 G de carne de res al carbón (receta casera), salchicha, queso oaxaca, tocino, jamón, piña, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "MarcBurguer",
          classicPrice: "$110",
          briochePrice: "$115",
          description:
            "150 G de boneless fuego, 150 G carne de res al carbón (receta casera), piña, tocino, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "Arrachera Tropical",
          classicPrice: "$90",
          briochePrice: "$95",
          description:
            "150 G de arrachera al carbón, piña, tocino, queso cheddar, lechuga, jitomate, catsup, cebolla, mostaza y pepinillos",
        },
        {
          name: "Hamburguesa Argentina",
          classicPrice: "$95",
          briochePrice: "$100",
          description:
            "150 G de arrachera, chorizo argentino, chistorra, tocino, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "Hamburguesa Tradicional",
          classicPrice: "$70",
          briochePrice: "$75",
          description:
            "150 G de carne de res al carbón (receta casera), tocino, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "Hamburguesa Hawaiana",
          classicPrice: "$75",
          briochePrice: "$80",
          description:
            "150 G de carne de res al carbón (receta casera), tocino, jamón, piña, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos",
        },
        {
          name: "Hamburguesa de Boneless",
          classicPrice: "$85",
          briochePrice: "$90",
          description:
            "150 G de boneless, tocino, queso cheddar, lechuga, jitomate, cebolla, catsup, mostaza y pepinillos (elegir la salsa o aderezo para sus boneless)",
        },
        {
          name: "Hamburguesa de Arrachera",
          classicPrice: "$85",
          briochePrice: "$90",
          description:
            "150 G de arrachera al carbón, tocino, queso cheddar, lechuga, jitomate, catsup, cebolla, mostaza y pepinillos",
        },
      ],
    },
    nuevos: {
      title: "LO + NUEVO EN EL MENÚ",
      icon: "✨",
      items: [
        {
          name: "Camarones Encocados",
          price: "$90.00",
          description:
            "5 pzas. de camarones empanizados con coco, acompañados de papas a la francesa",
          icon: "🍤",
        },
        {
          name: "Hamburguesa Terramar",
          classicPrice: "$90.00",
          briochePrice: "$95.00",
          description:
            "150 gr de carne de la casa, camarones al carbón, queso cheddar, tocino, lechuga, jitomate, cebolla, mostaza, pepinillos y catsup",
        },
        {
          name: "Hamburguesa Terramar 2.0",
          classicPrice: "$100.00",
          briochePrice: "$105.00",
          description:
            "150 gr de carne de la casa, camarones encocados, queso cheddar, tocino, lechuga, jitomate, cebolla, mostaza, pepinillos y catsup",
        },
      ],
    },
    jochos: {
      title: "JOCHOS",
      icon: "🌭",
      items: [
        {
          name: "Jocho Sencillo",
          price: "$20.00",
          description: "Tocino, jitomate, cebolla, catsup y mostaza",
        },
        {
          name: "Jocho Hawaiano",
          price: "$25.00",
          description:
            "Jamón, piña, tocino, jitomate, cebolla, catsup y mostaza",
        },
        {
          name: "Jocho Especial",
          price: "$30.00",
          description:
            "Queso manchego, carne especial, tocino, catsup, mostaza, jitomate y cebolla",
        },
      ],
      combos: [
        { name: "1 sencillo 1 hawaiano 1 especial", price: "$65.00" },
        { name: "3 sencillos", price: "$50.00" },
        { name: "3 hawaianos", price: "$65.00" },
        { name: "3 especiales", price: "$80.00" },
      ],
    },
    salsas: {
      title: "NUESTRAS SALSAS",
      icon: "🌶️",
      picantes: [
        "A la Diabla",
        "Habanero Extra Picante",
        "Guayaba Habanero",
        "Tamarindo Habanero",
      ],
      medias: [
        "Arándano Habanero",
        "Mango Habanero",
        "Habanero Clásica",
        "Fresa Habanero",
        "Durazno Habanero",
        "Piña Mango",
        "Hawaiano Habanero",
      ],
      suaves: ["Búfalo", "Valentina", "Botanera", "BBQ"],
      aderezos: ["Ranch", "Ajo Parmesano", "Blue Cheese"],
    },
    bebidas: {
      title: "MENÚ DE BEBIDAS",
      icon: "🥤",
      categories: {
        calientes: {
          title: "CALIENTES",
          items: [
            { name: "Café americano", price: "$30.00" },
            { name: "Café descafeinado", price: "$30.00" },
            { name: "Capuchino tradicional", price: "$40.00" },
            {
              name: "Capuchino",
              price: "$45.00",
              note: "Amaretto, cajeta, almendra, rompope",
            },
            { name: "Té Variedad de sabores", price: "$20.00" },
            { name: "Chocolate caliente", price: "$35.00" },
          ],
        },
        frappes: {
          title: "FRAPPÉS",
          items: [
            {
              name: "Frappés",
              price: "$50.00",
              note: "Café, moka, oreo, cajeta, mazapán chocolate abuelita y choco menta",
            },
            {
              name: "Frappés gourmet",
              price: "$55.00",
              note: "Gansito, Nutella y rompope",
            },
          ],
        },
        smoothies: {
          title: "SMOOTHIES",
          items: [
            {
              name: "Base agua",
              price: "$50.00",
              note: "Fresa, frutos rojos, mango y cereza",
            },
            {
              name: "Base yogurth",
              price: "$60.00",
              note: "Fresa, frutos rojos, mango",
            },
            { name: "Mora azul", price: "$70.00" },
          ],
        },
        postres: {
          title: "POSTRES",
          items: [
            { name: "Pan de elote", price: "$25.00" },
            { name: "Con toque de rompope", price: "$35.00" },
            { name: "Crepas", price: "$45.00" },
          ],
        },
        malteadas: {
          title: "MALTEADAS",
          items: [
            {
              name: "Malteadas",
              price: "$55.00",
              note: "Fresa, vainilla, chocolate, oreo, mazapán y chocolate abuelita",
            },
            {
              name: "Malteadas gourmet",
              price: "$60.00",
              note: "Gansito, Nutella y rompope",
            },
          ],
        },
        frias: {
          title: "FRÍAS",
          items: [
            { name: "Sodas italianas ½ lt", price: "$35.00" },
            {
              name: "Sodas italianas 1 lt",
              price: "$60.00",
              note: "Incluyen perlas explosivas",
            },
            { name: "Naranjada de ½ lt", price: "$35.00" },
            { name: "Limonada de ½ lt", price: "$35.00" },
            { name: "Boing de ½ lt", price: "$18.00" },
            { name: "Arizona de 600 ml.", price: "$25.00" },
            { name: "Agua de fruta natural 1lt", price: "$35.00" },
            {
              name: "Agua de fruta natural ½ lt",
              price: "$18.00",
              note: "Pregunta por los sabores del día",
            },
          ],
        },
        refrescos: {
          title: "REFRESCOS",
          items: [
            { name: "Coca cola ½", price: "$25.00" },
            { name: "Manzanita ½", price: "$15.00" },
            { name: "Red cola 355 ml.", price: "$18.00" },
            { name: "Agua mineral 600 ml.", price: "$18.00" },
          ],
        },
      },
    },
    crepas: {
      title: "MENÚ DE CREPAS",
      icon: "🥞",
      price: "$45.00",
      description: "Elige 1 base, 1 relleno, 1 aderezo y 1 topping",
      options: {
        base: {
          dulces: ["Cajeta", "Nutella", "Mermelada"],
          saladas: ["Q. Manchego", "Q. cheddar", "Philadelphia"],
        },
        relleno: {
          dulces: ["Durazno", "Mango", "Plátano", "Fresa", "Piña"],
          saladas: ["Jamón", "Pepperoni"],
        },
        aderezos: {
          dulces: ["Lechera", "Hershey's"],
          saladas: ["Q. Amarillo", "Catsup", "BBQ"],
        },
        toppings: [
          "Chispas chocolate",
          "Gotas de chocolate",
          "Galleta oreo",
          "Nuez",
        ],
      },
      extras: [
        "Ingrediente extra $10.00",
        "kinder delice (topping) $15.00",
        "bola de helado 10.00",
      ],
    },
    alitas: {
      title: "ALITAS Y COSTILLAS",
      icon: "🍗",
      items: [
        {
          name: "Alitas Fritas",
          price: "$70",
          description:
            "Alitas de pollo fritas hasta quedar doradas y crujientes",
        },
        {
          name: "Alitas Carbón",
          price: "$70",
          description: "Alitas asadas al carbón con ese sabor ahumado único",
        },
        {
          name: "Costillas",
          price: "$75",
          description: "Costillas de cerdo tiernas y jugosas",
        },
        {
          name: "Combinadas",
          price: "$80",
          description: "Mezcla perfecta de alitas y costillas",
        },
        {
          name: "Alipapas",
          price: "$75",
          description: "Alitas acompañadas de papas crujientes",
        },
        {
          name: "Costipapas",
          price: "$80",
          description: "Costillas servidas con papas",
        },
      ],
    },
    boneless: {
      title: "BONELESS Y MÁS",
      icon: "🍖",
      items: [
        {
          name: "Boneless con Papas",
          price: "$75",
          description: "5 piezas de boneless + papas fritas",
        },
        {
          name: "Boneless sin Papas",
          price: "$85",
          description: "8 piezas de boneless sin acompañamiento",
        },
        {
          name: "Boneless Fuego c/ Papas",
          price: "$90",
          description: "5 piezas de boneless picante + papas",
        },
        {
          name: "Boneless Fuego s/Papas",
          price: "$95",
          description: "8 piezas de boneless extra picante sin papas",
        },
      ],
    },
    papas: {
      title: "PAPAS Y NACHOS",
      icon: "🍟",
      items: [
        {
          name: "Francesa",
          price: "$50",
          description: "Papas francesas clásicas, doradas y crujientes",
        },
        {
          name: "Francesa Especiales",
          price: "$70",
          description: "Papas francesas con ingredientes especiales",
        },
        { name: "Gajo", price: "$65", description: "Papas gajo sazonadas" },
        {
          name: "Gajo Especiales",
          price: "$80",
          description: "Papas gajo con carne molida preparada y queso manchego",
        },
        {
          name: "Nachos",
          price: "$50",
          description: "Nachos tradicionales con queso",
        },
        {
          name: "Nachos Especiales",
          price: "$70",
          description: "Nachos con ingredientes premium",
        },
        {
          name: "Papas Waffle",
          price: "$65",
          description: "Papas con forma de waffle, crujientes por fuera",
        },
        {
          name: "Waffle Especiales",
          price: "$80",
          description: "Papas waffle con toppings especiales",
        },
      ],
    },
    extras: {
      title: "EXTRAS",
      icon: "🍽️",
      items: [
        {
          name: "Nuggets c/Papas",
          price: "$50",
          description: "Nuggets de pollo acompañados de papas",
        },
        {
          name: "Palomitas de Pollo",
          price: "$50",
          description: "Pequeños trozos de pollo empanizado",
        },
        {
          name: "Salchipulpos c/Papas",
          price: "$50",
          description: "Divertidos salchipulpos con papas",
        },
        {
          name: "Dedos de Queso c/Papas",
          price: "$65",
          description: "Bastones de queso empanizado con papas",
        },
        {
          name: "Banderilla (Salchicha)",
          price: "$35",
          description: "Salchicha en palillo, perfecta para compartir",
        },
        {
          name: "Elote Amarillo",
          price: "$50",
          description: "Elote tierno con mantequilla y especias",
        },
        {
          name: "Aros de Cebolla c/Papas",
          price: "$60",
          description: "Aros de cebolla crujientes con papas",
        },
        {
          name: "Jalapeños Rellenos c/Papas",
          price: "$70",
          description: "Jalapeños rellenos de queso con papas",
        },
        {
          name: "Combo Snacks",
          price: "$70",
          description:
            "Elige 4 entre: aros de cebolla, jalapeños, nuggets, palomitas, salchipulpos, dedos de queso (incluye de 2 a 3 piezas de c/u)",
        },
      ],
    },
  };

  const categories = [
    { id: "paquetes", name: "Paquetes", icon: "🎉" },
    { id: "hamburguesas", name: "Hamburguesas", icon: "🍔" },
    { id: "nuevos", name: "Nuevos", icon: "✨" },
    { id: "jochos", name: "Jochos", icon: "🌭" },
    { id: "alitas", name: "Alitas", icon: "🍗" },
    { id: "boneless", name: "Boneless", icon: "🍖" },
    { id: "papas", name: "Papas", icon: "🍟" },
    { id: "extras", name: "Extras", icon: "🍽️" },
    { id: "salsas", name: "Salsas", icon: "🌶️" },
    { id: "bebidas", name: "Bebidas", icon: "🥤" },
    { id: "crepas", name: "Crepas", icon: "🥞" },
  ];

  const renderPaquetes = () => (
    <div className="grid lg:grid-cols-2 gap-8">
      {menuData.paquetes.items.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/60 transition-all duration-500"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{item.people === 2 ? "👫" : "👨‍👩‍👧‍👦"}</div>
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>
            </div>
            <span className="text-3xl font-bold text-amber-400">
              {item.price}
            </span>
          </div>
          <p className="text-gray-300 mb-4">{item.description}</p>
          <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/30">
            <p className="text-amber-300 font-semibold">{item.note}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderHamburguesas = () => (
    <div>
      <div className="text-center mb-8">
        <p className="text-xl text-amber-300 font-semibold">
          Carne 100% hecha en casa
        </p>
        <div className="flex justify-center gap-8 mt-4">
          <span className="text-gray-300">Pan Clásico</span>
          <span className="text-gray-300">Pan Brioche</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {menuData.hamburguesas.items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 border border-amber-500/20"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍔</span>
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
              </div>
              <div className="text-right">
                {item.classicPrice && (
                  <>
                    <div className="text-lg font-bold text-amber-400">
                      {item.classicPrice}
                    </div>
                    <div className="text-lg font-bold text-amber-400">
                      {item.briochePrice}
                    </div>
                  </>
                )}
                {item.price && (
                  <div className="text-2xl font-bold text-amber-400">
                    {item.price}
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderJochos = () => (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-6">
        {menuData.jochos.items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center border border-amber-500/20"
          >
            <span className="text-4xl mb-4 block">🌭</span>
            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
            <p className="text-2xl font-bold text-amber-400 mb-3">
              {item.price}
            </p>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
        <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
          Combos Jocho
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {menuData.jochos.combos.map((combo, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-800/50 rounded-lg p-4"
            >
              <span className="text-amber-300 flex items-center gap-2">
                <span className="text-lg">📦</span>
                {combo.name}
              </span>
              <span className="text-amber-400 font-bold text-lg">
                {combo.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSalsas = () => (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
            🔥 Picantes
          </h3>
          <div className="space-y-2">
            {menuData.salsas.picantes.map((salsa, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-red-500/10 rounded-lg p-3 border border-red-500/30"
              >
                <span className="text-red-400">🌶️</span>
                <span className="text-white">{salsa}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
            🔶 Medias
          </h3>
          <div className="space-y-2">
            {menuData.salsas.medias.map((salsa, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-orange-500/10 rounded-lg p-3 border border-orange-500/30"
              >
                <span className="text-orange-400">🌶️</span>
                <span className="text-white">{salsa}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-green-400 flex items-center gap-2">
            🟢 Suaves
          </h3>
          <div className="space-y-2">
            {menuData.salsas.suaves.map((salsa, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-green-500/10 rounded-lg p-3 border border-green-500/30"
              >
                <span className="text-green-400">🌶️</span>
                <span className="text-white">{salsa}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
            🥄 Aderezos
          </h3>
          <div className="space-y-2">
            {menuData.salsas.aderezos.map((aderezo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/30"
              >
                <span className="text-blue-400">🥄</span>
                <span className="text-white">{aderezo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBebidas = () => (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {Object.entries(menuData.bebidas.categories).map(([key, category]) => (
        <div
          key={key}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-amber-500/20"
        >
          <h3 className="text-xl font-bold text-amber-400 mb-6 text-center border-b border-amber-500/30 pb-3">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.items.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  {item.note && (
                    <p className="text-gray-400 text-xs mt-1">{item.note}</p>
                  )}
                </div>
                <span className="text-amber-400 font-bold ml-3">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCrepas = () => (
    <div className="space-y-8">
      <div className="text-center bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
        <h3 className="text-3xl font-bold text-amber-400 mb-4">
          {menuData.crepas.price}
        </h3>
        <p className="text-xl text-gray-300">{menuData.crepas.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(menuData.crepas.options).map(([key, options]) => (
          <div
            key={key}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-amber-500/20"
          >
            <h4 className="text-xl font-bold text-amber-400 mb-4 capitalize">
              {key === "aderezos"
                ? "Aderezos"
                : key.charAt(0).toUpperCase() + key.slice(1)}
            </h4>

            {options.dulces && (
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-pink-400 mb-2">
                  Dulces
                </h5>
                <div className="space-y-1">
                  {options.dulces.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-pink-400">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {options.saladas && (
              <div>
                <h5 className="text-lg font-semibold text-blue-400 mb-2">
                  Saladas
                </h5>
                <div className="space-y-1">
                  {options.saladas.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-blue-400">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(options) && (
              <div className="space-y-1">
                {options.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="text-amber-400">•</span>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
        <h4 className="text-lg font-bold text-amber-400 mb-4">Extras</h4>
        <div className="space-y-2">
          {menuData.crepas.extras.map((extra, index) => (
            <div key={index} className="text-gray-300">
              {extra}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGenericItems = (categoryData) => (
    <div>
      {/* Special note for papas category */}
      {categoryData.specialNote && (
        <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 text-center">
          <h3 className="text-xl font-bold text-amber-400 mb-2">
            Nota Especial
          </h3>
          <p className="text-gray-300">{categoryData.specialNote}</p>
        </div>
      )}

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {categoryData.items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            whileHover={{
              scale: 1.03,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-500/20 hover:border-amber-400/60 transition-all duration-500"
          >
            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-100 transition-colors duration-300 leading-tight">
                {item.name}
              </h3>
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 ml-4 flex-shrink-0">
                {item.price}
              </span>
            </div>

            <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed mb-6 transition-colors duration-300">
              {item.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current mr-0.5" />
                ))}
                <span className="ml-2 text-sm text-gray-500">(4.9)</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg"
              >
                Ordenar
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    const categoryData = menuData[activeCategory];

    switch (activeCategory) {
      case "paquetes":
        return renderPaquetes();
      case "hamburguesas":
        return renderHamburguesas();
      case "jochos":
        return renderJochos();
      case "salsas":
        return renderSalsas();
      case "bebidas":
        return renderBebidas();
      case "crepas":
        return renderCrepas();
      default:
        return renderGenericItems(categoryData);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400 mr-4"></div>
            <Star className="w-8 h-8 text-amber-400 fill-current" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400 ml-4"></div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              La Aliteria
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Menú completo con todos nuestros deliciosos platillos
          </p>

          <div className="mt-8 text-amber-400">
            <p className="text-sm">
              Servicio a domicilio gratis con mínimo de compra $155.00 o $10.00
              el envío
            </p>
            <p className="text-sm">
              WhatsApp: 5615671981 | Facebook: La Aliteria Laredo
            </p>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-amber-500/20"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Category Title */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-4">
            {menuData[activeCategory].title}
          </h2>
          {menuData[activeCategory].subtitle && (
            <p className="text-xl text-amber-300 font-semibold">
              {menuData[activeCategory].subtitle}
            </p>
          )}
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Información de Contacto
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="text-lg mb-2">
                  <strong className="text-amber-400">WhatsApp:</strong>{" "}
                  5615671981
                </p>
                <p className="text-lg">
                  <strong className="text-amber-400">Facebook:</strong> La
                  Aliteria Laredo
                </p>
              </div>
              <div>
                <p className="text-lg mb-2">
                  <strong className="text-amber-400">Cobertura:</strong>
                </p>
                <p className="text-gray-400">
                  Laredo, San Carlos, Jalapa, Laureles y Tule
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuApp;
