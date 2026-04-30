import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function EditorialGrid() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // PARALLAX
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
  ref={sectionRef}
  className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pb-20 md:pb-28 px-4 md:px-0"
>

  {/* 🌫️ GRAIN OVERLAY */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

  {/* LEFT COLUMN */}
  <div className="flex flex-col gap-6 md:gap-8">

    {/* MATERIAL */}
    <div
      className={`bg-[#EFE7DC] p-6 md:p-12 rounded-2xl min-h-[220px] md:min-h-[280px] flex flex-col justify-center
      transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-xl md:text-[28px] font-serif text-[#5A0F14] mb-3 md:mb-5 leading-snug">
        Material Integrity
      </h3>
      <p className="text-sm md:text-[15px] leading-relaxed text-[#7A6A5A] tracking-wide">
        We source rare stones and reclaimed woods, treating every surface as
        a canvas for natural textures.
      </p>
    </div>

    {/* QUOTE */}
    <div
      className={`bg-[#6B0F1A] text-[#C89B3C] p-6 md:p-10 rounded-2xl
      transition-all duration-700 delay-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <p className="italic text-base md:text-lg leading-relaxed">
        "The details are not the details. They make the design."
      </p>
      <p className="text-[10px] md:text-xs mt-4 md:mt-5 text-[#E5D3C2] tracking-[0.2em]">
        — CHARLES EAMES
      </p>
    </div>

  </div>

  {/* IMAGES */}
  
<div className="md:col-span-2">

  {/* 📱 MOBILE SWIPE */}
  <div className="block md:hidden">
    <Swiper spaceBetween={16} slidesPerView={1.2} centeredSlides={true}>
      {[ "/images/p4.png", "/images/p5.png" ].map((img, i) => (
        <SwiperSlide key={i}>
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={img}
              style={{ transform: `translateY(${offset * 0.03}px)` }}
              className="h-[260px] w-full object-cover rounded-2xl"
            />

            {/* SHADOW */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)]" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* 💻 DESKTOP GRID (UNCHANGED LOOK) */}
  <div className="hidden md:grid grid-cols-2 gap-10">
    {[ "/images/p4.png", "/images/p5.png" ].map((img, i) => (
      <div
        key={i}
        className={`relative overflow-hidden rounded-2xl group cursor-pointer
        transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${i * 150}ms` }}
      >
        <img
          src={img}
          style={{ transform: `translateY(${offset * 0.03}px)` }}
          className="
            h-[440px] w-full object-cover
            transition-all duration-[900ms]
            group-hover:scale-105 group-hover:-translate-y-2
          "
        />

        {/* SHADOW */}
        <div className="absolute inset-0 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-all duration-700" />

        {/* LIGHT SWEEP */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
          <div className="
            absolute -left-1/2 top-0 w-[200%] h-full
            bg-gradient-to-r from-transparent via-white/15 to-transparent
            rotate-12 translate-x-[-100%]
            group-hover:translate-x-[100%]
            transition-all duration-[1200ms]
          " />
        </div>
      </div>
    ))}
  </div>

</div>

</div>
  );
}