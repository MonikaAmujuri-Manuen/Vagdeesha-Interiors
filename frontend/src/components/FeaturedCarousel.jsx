import { useEffect, useState } from "react";

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

  // PARALLAX
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ AUTO SCROLL (FINAL FIX)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (isHovered) return prev; // pause on hover
        return (prev + 1) % projects.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative max-w-6xl mx-auto mb-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CAROUSEL */}
      <div id="catalog" className="flex items-center justify-center gap-8">

        {/* LEFT */}
        <div className="opacity-40 scale-[0.9] transition-all duration-500">
          <img
            src={projects[(current - 1 + projects.length) % projects.length].image}
            className="w-[260px] h-[180px] md:w-[360px] md:h-[240px] object-cover rounded-2xl"
          />
        </div>

        {/* CENTER */}
              <div className="
              relative z-20
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-[1.08] hover:-translate-y-3
               hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
               ">
          <div key={current} className="animate-fadeIn">
            <img
              src={projects[current].image}
              style={{ transform: `translateY(${offset * 0.04}px)` }}
              className="w-[340px] h-[230px] md:w-[620px] md:h-[400px] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* DARK GRADIENT */}
          <div className="absolute bottom-0 left-0 w-full h-[35%] 
            bg-gradient-to-t from-black/40 to-transparent rounded-b-2xl"
          />

          {/* TEXT */}
          <div className="absolute bottom-6 left-6 text-white z-10">
            <p className="text-xs tracking-widest text-[#E6C57A] mb-1">
              {projects[current].location}
            </p>
            <h3 className="text-2xl md:text-3xl font-serif">
              {projects[current].title}
            </h3>
          </div>
        </div>

        {/* RIGHT */}
        <div className="opacity-40 scale-[0.9] transition-all duration-500">
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
        bg-white/20 backdrop-blur-md border border-white/30 
        text-white w-10 h-10 rounded-full flex items-center justify-center
        hover:bg-white/30 transition"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % projects.length)
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
        bg-white/20 backdrop-blur-md border border-white/30 
        text-white w-10 h-10 rounded-full flex items-center justify-center
        hover:bg-white/30 transition"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500 ${
              current === i
                ? "w-8 h-[4px] bg-[#C89B3C]"
                : "w-4 h-[4px] bg-[#CBBFB2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}