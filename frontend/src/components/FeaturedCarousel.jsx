import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    image: "/images/p1.jpg",
    title: "Modern Living",
    location: "VILLA — DUBAI",
  },
  {
    image: "/images/p2.jpg",
    title: "Lumina Kitchen",
    location: "PENTHOUSE — LONDON",
  },
  {
    image: "/images/p3.jpg",
    title: "Serene Bedroom",
    location: "RESIDENCE — HYDERABAD",
  },
];

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (isHovered) return prev;
        return (prev + 1) % projects.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative max-w-6xl mx-auto mb-16 md:mb-24 px-4 sm:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CAROUSEL */}
      <div
        id="catalog"
        className="flex items-center justify-center gap-4 md:gap-8"
      >

        {/* LEFT (hidden on mobile) */}
        <div className="hidden md:block opacity-40 scale-[0.9] transition-all duration-500">
          <img
            src={projects[(current - 1 + projects.length) % projects.length].image}
            className="w-[260px] h-[180px] md:w-[360px] md:h-[240px] object-cover rounded-2xl"
          />
        </div>

        {/* CENTER */}
        <div className="
          relative z-20
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:scale-[1.05] md:hover:scale-[1.08]
          hover:-translate-y-2 md:hover:-translate-y-3
          hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
        ">
          <div key={current} className="animate-fadeIn">
            <img
              src={projects[current].image}
              style={{ transform: `translateY(${offset * 0.04}px)` }}
              className="
                w-[100%] max-w-[340px] h-[200px]
                sm:max-w-[420px] sm:h-[260px]
                md:w-[620px] md:h-[400px]
                object-cover rounded-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            />
          </div>

          {/* GRADIENT */}
          <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black/40 to-transparent rounded-b-2xl" />

          {/* TEXT */}
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white z-10">
            <p className="text-[10px] md:text-xs tracking-widest text-[#E6C57A] mb-1">
              {projects[current].location}
            </p>
            <h3 className="text-lg md:text-3xl font-serif">
              {projects[current].title}
            </h3>
          </div>
        </div>

        {/* RIGHT (hidden on mobile) */}
        <div className="hidden md:block opacity-40 scale-[0.9] transition-all duration-500">
          <img
            src={projects[(current + 1) % projects.length].image}
            className="w-[260px] h-[180px] md:w-[360px] md:h-[240px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
        }
        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 
        bg-white backdrop-blur-md border border-white/30 
        text-[#6B0F1A] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
        hover:bg-[#6B0F1A]/50 transition"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % projects.length)
        }
        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 
        bg-white backdrop-blur-md border border-white/30 
        text-[#6B0F1A] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
        hover:bg-[#6B0F1A]/30 transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-6 md:mt-10 gap-2 md:gap-3">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500 ${
              current === i
                ? "w-6 md:w-8 h-[3px] md:h-[4px] bg-[#C89B3C]"
                : "w-3 md:w-4 h-[3px] md:h-[4px] bg-[#CBBFB2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}