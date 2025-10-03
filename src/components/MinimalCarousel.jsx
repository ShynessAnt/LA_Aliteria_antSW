import React, { useState, useEffect, useRef, useCallback } from "react";

const MinimalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  // Datos de las imágenes
  const images = [
    {
      id: 1,
      url: "/imagenes/img-05comida.webp",
      title: "Hamburguesas Caseras",
      description:
        "Hechas con pasión y los mejores ingredientes de la casa para disfrutar en familia",
    },
    {
      id: 2,
      url: "/imagenes/img-01bebida.webp",
      title: "Bebidas Especiales",
      description: "Sabores únicos para disfrutar",
    },
    {
      id: 3,
      url: "/imagenes/img-04collaje_6_11zon.jpg",
      title: "Postres Artesanales",
      description: "El final perfecto para una experiencia inolvidable",
    },
  ];

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, images.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(handleNext, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, handleNext]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Contenedor principal */}
      <div
        className="relative bg-black/70 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-500/20 group cursor-pointer shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Carrusel de imágenes */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="w-full h-full flex-shrink-0 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Contenido */}
                <div
                  className={`absolute bottom-6 left-6 text-white transition-all duration-700 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: index === currentIndex ? "300ms" : "0ms",
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 group/btn opacity-0 group-hover:opacity-100"
        >
          <svg
            className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 group/btn opacity-0 group-hover:opacity-100"
        >
          <svg
            className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-400 scale-125 shadow-lg shadow-amber-400/50"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CSS personalizado para la animación */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MinimalCarousel;
