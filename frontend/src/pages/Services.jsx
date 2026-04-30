import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

export default function Services() {
   const navigate = useNavigate();
   const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeUp");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

const services = [
  {
    title: "Residential Interiors",
    desc: "Bespoke living spaces tailored to individual lifestyles, balancing functionality with refined artistic expression.",
    desc1: "We design homes that reflect the people who live in them, creating emotional, elegant, and functional living environments.",
    points: [
      "Personalized conceptual design & planning",
      "Bespoke materials & finishes",
      "End-to-end execution",
    ],
    img: "/images/service1.jpg",
  },
  {
    title: "Modular Kitchen Design",
    desc: "Contemporary, functional culinary spaces featuring premium finishes and innovative storage solutions.",
    desc1: "Functional yet aesthetic kitchens crafted with precision, premium materials, and modern technology.",
    points: [
      "Smart storage systems",
      "Premium finishes",
      "Seamless appliance integration",
    ],
    img: "/images/service2.jpg",
  },
  {
    title: "Office & Commercial Interiors",
    desc: "Strategic workspace design to enhance productivity and reflect your brand identity.",
    desc1: "Transforming workspaces into inspiring environments that enhance productivity.",
    points: [
      "Brand-aligned design",
      "Acoustic & lighting optimization",
      "Flexible layouts",
    ],
    img: "/images/service3.jpg",
  },
  {
    title: "Custom Furniture Design",
    desc: "Exclusive handcrafted pieces designed specifically for your space with uncompromising quality.",
    desc1: "Unique handcrafted furniture pieces that blend art with functionality.",
    points: [
      "Tailored dimensions",
      "Premium materials",
      "Fine craftsmanship",
    ],
    img: "/images/service4.jpg",
  },
];

  return (
    // Responsive improvements applied (no design change)

<section className="bg-[#F8F4EE] min-h-screen">

  <Navbar />

  {/* ================= HERO ================= */}
  <div className="pt-24 md:pt-32 pb-16 md:pb-20 text-center px-4 sm:px-6 reveal">
    <p className="text-xs tracking-[0.3em] md:tracking-[0.35em] text-[#C89B3C] mb-4 md:mb-6">
      OUR SERVICES
    </p>

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#5A0F14] leading-tight max-w-4xl mx-auto">
      Crafting Thoughtful Interior Experiences
    </h1>

    <p className="text-[#7A6A5A] mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
      From bespoke residential transformations to curated commercial
      ateliers, we translate your vision into a sanctuary of architectural elegance.
    </p>
  </div>

  {/* ================= CARDS ================= */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-24 grid sm:grid-cols-2 gap-6 md:gap-8">

    {services.map((item, i) => (
      <div
        key={i}
        className="reveal group bg-[#EFE7DC] p-6 md:p-10 rounded-xl border border-[#E5D9CC]
        transition-all duration-500 ease-out
        hover:bg-[#6B0F1A] hover:border-[#C89B3C]
        hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
        style={{ transitionDelay: `${i * 120}ms` }}
      >

        <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-[#5A0F14]
        transition-colors duration-500 group-hover:text-[#C89B3C]">
          {item.title}
        </h3>

        <p className="text-[#7A6A5A] text-sm md:text-base leading-relaxed transition-colors 
        duration-500 group-hover:text-[#E6D3A3]">
          {item.desc}
        </p>

        <div className="mt-4 md:mt-6 w-10 h-[2px] bg-[#C89B3C] 
        transition-all duration-500 group-hover:w-16"/>
      </div>
    ))}

  </div>

  {/* ================= DETAIL SECTIONS ================= */}
  {/* 📱 MOBILE SWIPE VERSION */}
<div className="block md:hidden px-4 pb-16">

  <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={20}
  slidesPerView={1.05}
  centeredSlides={true}

  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}

  pagination={{
    el: ".custom-pagination",
    clickable: true,
  }}
>

    {services.map((item, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white rounded-xl overflow-hidden shadow-md">

          <img src={item.img} className="w-full h-[220px] object-cover" />

          <div className="p-6">
            <h3 className="text-xl font-serif text-[#5A0F14] mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-[#7A6A5A]">
              {item.desc1}
            </p>

            {/* EXPAND IN SWIPER */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="text-[#C89B3C] text-xs mt-3"
            >
              {openIndex === i ? "Hide" : "Details"}
            </button>

            {openIndex === i && (
              <ul className="mt-3 text-xs text-[#5A0F14] space-y-1">
                {item.points.map((p, idx) => (
                  <li key={idx}>→ {p}</li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </SwiperSlide>
    ))}

  </Swiper>
  <div className="custom-pagination mt-4 flex justify-center"></div>
</div>

  {/* SECTION 1 */}
  <div className="hidden md:block">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 pb-16 md:pb-24 reveal">

    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/service1.jpg"
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-[1200ms] hover:scale-105"
      />
    </div>

    <div className="text-center md:text-left">
      <h2 className="text-2xl md:text-4xl font-serif text-[#5A0F14] mb-4 md:mb-6">
        Residential Interiors
      </h2>

      <p className="text-[#7A6A5A] mb-4 md:mb-6 text-sm md:text-base">
        We design homes that reflect the people who live in them,
        creating emotional, elegant, and functional living environments.
      </p>

      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#5A5A5A]">
        <li>→ Personalized conceptual design & planning</li>
        <li>→ Bespoke materials & finishes</li>
        <li>→ End-to-end execution</li>
      </ul>
    </div>
  </div>
  

  {/* SECTION 2 */}

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 pb-16 md:pb-24 reveal">

    <div className="text-center md:text-left order-2 md:order-1">
      <h2 className="text-2xl md:text-4xl font-serif text-[#5A0F14] mb-4 md:mb-6">
        Modular Kitchen Design
      </h2>

      <p className="text-[#7A6A5A] mb-4 md:mb-6 text-sm md:text-base">
        Functional yet aesthetic kitchens crafted with precision,
        premium materials, and modern technology.
      </p>

      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#5A5A5A]">
        <li>→ Smart storage systems</li>
        <li>→ Premium finishes</li>
        <li>→ Seamless appliance integration</li>
      </ul>
    </div>

    <div className="overflow-hidden rounded-xl order-1 md:order-2">
      <img
        src="/images/service2.jpg"
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-[1200ms] hover:scale-105"
      />
    </div>
  </div>

  {/* SECTION 3 */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 pb-16 md:pb-24 reveal">

    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/service3.jpg"
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-[1200ms] hover:scale-105"
      />
    </div>

    <div className="text-center md:text-left">
      <h2 className="text-2xl md:text-4xl font-serif text-[#5A0F14] mb-4 md:mb-6">
        Office & Commercial Interiors
      </h2>

      <p className="text-[#7A6A5A] mb-4 md:mb-6 text-sm md:text-base">
        Transforming workspaces into inspiring environments that enhance productivity.
      </p>

      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#5A5A5A]">
        <li>→ Brand-aligned design</li>
        <li>→ Acoustic & lighting optimization</li>
        <li>→ Flexible layouts</li>
      </ul>
    </div>
  </div>

  {/* SECTION 4 */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 pb-16 md:pb-24 reveal">

    <div className="text-center md:text-left order-2 md:order-1">
      <h2 className="text-2xl md:text-4xl font-serif text-[#5A0F14] mb-4 md:mb-6">
        Custom Furniture Design
      </h2>

      <p className="text-[#7A6A5A] mb-4 md:mb-6 text-sm md:text-base">
        Unique handcrafted furniture pieces that blend art with functionality.
      </p>

      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#5A5A5A]">
        <li>→ Tailored dimensions</li>
        <li>→ Premium materials</li>
        <li>→ Fine craftsmanship</li>
      </ul>
    </div>

    <div className="overflow-hidden rounded-xl order-1 md:order-2">
      <img
        src="/images/service4.jpg"
        className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-[1200ms] hover:scale-105"
      />
    </div>
  </div>
  </div>

  {/* ================= CTA ================= */}
  <div className="bg-[#EFE7DC] text-center py-16 md:py-28 px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#5A0F14] mb-6 md:mb-8">
      Let’s Design Your Dream Space
    </h2>

    <button
      onClick={() => navigate("/contact#form")}
      className="bg-[#C89B3C] text-white px-6 md:px-10 py-3 md:py-4 rounded-md
      tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-all duration-300"
    >
      BOOK CONSULTATION
    </button>
  </div>

</section>
  );
}