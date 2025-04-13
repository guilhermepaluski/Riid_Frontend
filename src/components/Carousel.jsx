import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categorias = [
  "Drama",
  "Romance",
  "Aventura",
  "Terror",
  "Comédia",
  "Ação",
  "Ficção",
  "Suspense",
];

export default function CarouselHorizontalLoop() {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const duplicatedCategorias = [
    categorias[categorias.length - 1],
    ...categorias,
    categorias[0],
  ];

  useEffect(() => {
    const firstCard = containerRef.current?.children[1]; // o primeiro real (após o clone do último)
    if (firstCard) setCardWidth(firstCard.offsetWidth + 24); // largura + gap
  }, []);

  const scrollToIndex = (index) => {
    containerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const scrollBy = (dir) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  // Corrige o scroll ao atingir os clones (sem animação)
  const handleScrollEnd = () => {
    const maxIndex = duplicatedCategorias.length - 2;
    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);

    if (index === 0) {
      // Se chegou no clone do último, pula pro último real
      containerRef.current.scrollTo({
        left: (categorias.length) * cardWidth,
        behavior: "auto",
      });
    } else if (index === duplicatedCategorias.length - 1) {
      // Se chegou no clone do primeiro, volta pro primeiro real
      containerRef.current.scrollTo({
        left: cardWidth,
        behavior: "auto",
      });
    }
  };

  {/* AUTOPLAY */}
  useEffect(() => {
    const interval = setInterval(() => {
      scrollBy(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardWidth]);

  return (
    <div className="relative w-full bg-black py-8">
      {/* Botão esquerdo */}
      <button
        onClick={() => scrollBy(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 shadow-md"
      >
        <ChevronLeft />
      </button>

      {/* Container de rolagem */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-16"
        onScroll={() => {
          clearTimeout(containerRef.current._scrollTimeout);
          containerRef.current._scrollTimeout = setTimeout(handleScrollEnd, 200);
        }}
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
        }}
      >
        {duplicatedCategorias.map((categoria, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[200px] md:min-w-[240px] h-60 flex items-center justify-center bg-white rounded-2xl shadow-md shrink-0 text-black text-lg font-semibold"
            style={{
              scrollSnapAlign: "center",
            }}
          >
            {categoria}
          </div>
        ))}
      </div>

      {/* Botão direito */}
      <button
        onClick={() => scrollBy(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 shadow-md"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
