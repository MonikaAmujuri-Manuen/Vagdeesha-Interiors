import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import atelier1 from "../assets/atelier1.jpg";
import portfolio1 from "../assets/portfolio1.png"
import portfolio4 from "../assets/portfolio4.jpg"
import portfolio3 from "../assets/portfolio3.png"
import client from "../assets/client.png"
import client2 from "../assets/client2.png"
import { useEffect, useRef, useState } from "react"
import Counter from "../components/Counter";
import PageWrapper from "../components/PageWrapper";
import { Compass, Sofa, Pencil, Sparkles, ArrowRight } from "lucide-react";


export default function Home() {

const navigate = useNavigate();
const [offset, setOffset] = useState(0);
const [index, setIndex] = useState(0);
const [paused, setPaused] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 5000); // ⏱ slow = luxury

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, [paused]);

 // 👇 Parallax
  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY < 1000) {
          setOffset(window.scrollY);
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const portfolio = [
  {
    img: portfolio1,
    title: "The Celestial Villa",
    subtitle: "MODERN HERITAGE · HYDERABAD",
  },
  {
    img: portfolio4,
    title: "Amber Residences",
    subtitle: "MINIMALIST LUXURY · BANGALORE",
  },
  {
    img: portfolio3,
    title: "Opaline Studio",
    subtitle: "ART DECO REVIVAL · MUMBAI",
  },
];

  const services = [
    {
      icon: Compass,
      title: "Architectural Design",
      desc: "Structural integrity meeting aesthetic perfection in every foundation.",
    },
    {
      icon: Sofa,
      title: "Interior Styling",
      desc: "The art of choosing textures, colors, and furniture that speak to you.",
    },
    {
      icon: Pencil,
      title: "Custom Furniture",
      desc: "Bespoke pieces crafted by master artisans to fit your space exactly.",
    },
    {
      icon: Sparkles,
      title: "Turnkey Solutions",
      desc: "Stress-free project management from concept to final reveal.",
    },
  ];

  const testimonials = [
  {
    text: "Vaagdeesha Interiors transformed our ancestral home into a modern masterpiece without losing its soul. Their attention to detail is unparalleled.",
    name: "ADITI SHARMA",
    role: "RESIDENTIAL CLIENT, HYDERABAD",
    image: client,
  },
  {
    text: "The team understood our vision instantly. Every corner reflects elegance and intention. Truly a seamless experience.",
    name: "RAHUL MEHTA",
    role: "VILLA OWNER, BANGALORE",
    image: client2, 
  },
  {
    text: "From concept to execution, everything was handled with precision. The result exceeded expectations.",
    name: "NEHA REDDY",
    role: "APARTMENT OWNER, HYDERABAD",
    image: client,
  },
];

  return (
    <PageWrapper>
    <>
      <Navbar />
      <Hero />


<div className="bg-[#F5EFE6] py-16 md:py-20 px-4 sm:px-6 md:px-20">

  {/* ATELIER */}
  <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

    <div className="space-y-4 md:space-y-6 text-center md:text-left">
      <p className="text-xs tracking-[0.3em] text-[#C89B3C]">
        THE ATELIER
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5A0F14] leading-tight">
        Quiet Luxury,<br />Loud Heritage.
      </h2>

      <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
        At Vaagdeesha, we believe that luxury is not about excess—it's about
        the meticulous curation of space, texture, and light.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] h-[320px] sm:h-[400px] md:h-[500px] w-full max-w-[500px]">
        <img
          src={atelier1}
          alt="Luxury Interior"
          style={{ transform: `translateY(${offset * 0.03 - 20}px)` }}
          className="w-full h-[120%] object-cover brightness-95 transition-all duration-700 ease-out hover:scale-105"
        />
      </div>
    </div>

  </Reveal>
</div>

      {/*Legacy SECTION */}

      <section className="bg-gradient-to-b from-[#F8F4EE] to-[#F5EFE6] py-16 md:py-24 px-4 sm:px-6 border-t border-[#E8E0D6]">

        <div className="max-w-6xl mx-auto text-center">

          {/* HEADING */}
          <p className="text-[#C89B3C] text-xs tracking-[0.3em] mb-4">
            OUR LEGACY
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">

            {[
              { number: 25, label: "Years Experience" },
              { number: 120, label: "Projects Completed" },
              { number: 50, label: "Happy Clients" },
              { number: 15, label: "Design Awards" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center space-y-2 
                     transition-all duration-300 
                     hover:-translate-y-2 cursor-pointer"
              >

                {/* NUMBER */}
                <h3 className="text-3xl md:text-4xl font-serif text-[#5A0F14] 
                         transition-colors duration-300 
                         group-hover:text-[#C89B3C]">
                  <Counter target={item.number} />
                </h3>

                {/* LABEL */}
                <p className="text-sm text-[#7A6A5C] tracking-wide 
                        transition-colors duration-300 
                        group-hover:text-[#C89B3C]">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/*Portfolio SECTION */}

      <section className="bg-[#F9F6F1] py-16 md:py-24 px-4 sm:px-6 border-t border-[#E8E0D6]">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A0F14]">
            Portfolio Highlights
            <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-[#C89B3C]"></span>
          </h2>

          <Link to="/portfolio" className="text-xs md:text-sm tracking-[0.2em] text-[#5A0F14]">
            EXPLORE ALL WORKS →

            {/* UNDERLINE */}
            <span className="
    absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C89B3C]
    transition-all duration-300 group-hover:w-full
  " />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">

          {portfolio.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${window.innerWidth < 768 ? "" : index === 1 ? "translate-y-10" : "-translate-y-10"}`}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[280px] sm:h-[350px] md:h-[420px] object-cover 
                       transition-all duration-700 ease-out 
                       group-hover:scale-110 group-hover:brightness-95"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              </div>

              {/* TEXT OUTSIDE */}
              <div className="mt-4">
                <h3 className="text-[#5A0F14] font-serif text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8B7B6B] tracking-[0.15em] mt-1 uppercase">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/*Service SECTION */}

      <Reveal>
  <section id="services" className="bg-[#F5EFE6] py-16 md:py-24 px-4 sm:px-6 text-center">

      {/* HEADING */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5A0F14] mb-6">
        Signature Services
      </h2>

      <p className="max-w-2xl mx-auto text-[#6B7280] mb-12 md:mb-16 text-sm md:text-base">
        From initial blueprint to final styling, we offer an end-to-end luxury experience tailored to your unique lifestyle.
      </p>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className={`group relative overflow-hidden bg-[#FAF7F2] p-10 text-center cursor-pointer
              
  transition-transform duration-200 ease-out
  hover:-translate-y-2 hover:scale-[1.02]

  transition-colors duration-300
  hover:bg-[#6B0F1A]

  hover:shadow-[0_10px_40px_rgba(107,15,26,0.4)]
  will-change-transform

  ${index === 0 ? "delay-100" :
                  index === 1 ? "delay-200" :
                    index === 2 ? "delay-300" :
                      "delay-500"}
`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </div>

              {/* ICON */}
              <Icon
                size={32}
                className="mx-auto mb-6 text-[#C89B3C] 
             transition-all duration-300 
             group-hover:text-white 
             group-hover:-translate-y-1"
              />

              {/* TITLE */}
              <h3 className="font-serif text-lg mb-3 text-[#5A0F14]
               transition-all duration-300
               group-hover:text-[#C89B3C]
               group-hover:tracking-wide">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500
                            transition-colors duration-300
                            group-hover:text-[#E5D3C2]"
              >
                {service.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
    </Reveal>
    
    {/*Testimonial SECTION */}

    <Reveal>
  <section className="bg-[#F5EFE6] py-12 md:py-16 px-4 sm:px-6 text-center border-t border-[#E8E0D6]">
  <div
  className="max-w-5xl mx-auto relative overflow-hidden"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>

    {/* QUOTE */}
    <div className="text-[40px] text-[#5A0F14] opacity-70 font-serif mb-4">
      ”
    </div>

    {/* PROGRESS BAR */}
<div className="mt-10 flex justify-center">
  <div className="w-32 h-[2px] bg-[#E5D3C2] overflow-hidden relative">

    <div
      key={index} // 👈 IMPORTANT (resets animation)
      className="absolute left-0 top-0 h-full bg-[#C89B3C]"
      style={{
        width: "100%",
        transform: "scaleX(0)",
        transformOrigin: "left",
        animation: "progressAnim 5s linear forwards"
      }}
    />

  </div>
</div>

    {/* SLIDING CONTENT */}
    <div className="relative h-[220px] md:h-[180px]">

      {testimonials.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-in-out
          ${i === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
        >
          {/* TEXT */}
          <p className="text-base sm:text-lg md:text-2xl font-serif italic px-2 text-[#5A0F14] leading-relaxed">
            "{item.text}"
          </p>

          {/* CLIENT */}
          <div className="mt-8 flex items-center justify-center gap-4">

            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition duration-300"
            />

            <div className="text-left">
              <p className="text-sm tracking-widest text-[#5A0F14] font-medium">
                {item.name}
              </p>
              <p className="text-xs text-[#8B7B6B] tracking-wide">
                {item.role}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>
</Reveal>

{/*CTA SECTION */}

      <Reveal>
  <section className="relative py-16 md:py-28 px-4 sm:px-6 text-center overflow-hidden">
  {/* BASE GRADIENT */}
<div className="absolute inset-0 bg-gradient-to-br 
  from-[#7A1622] via-[#6B0F1A] to-[#3E0A0F]" />

{/* SOFT CENTER GLOW */}
<div className="absolute inset-0 
  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">

          {/* HEADING */}
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl font-serif text-[#C89B3C] mb-4 md:mb-6 
      transition-all duration-700 tracking-tight `}
          >
            Let’s Design Your Legacy.
          </h2>

          {/* SUBTEXT */}
          <p
            className={`text-[#E5D3C2] text-sm md:text-lg mb-8 md:mb-10
      transition-all duration-700 `}
          >
            Begin your journey with the world's most refined interior atelier.
          </p>

          {/* BUTTON */}
          <button onClick={() => navigate("/contact#form")}
            className={`bg-[#F5EFE6] text-[#5A0F14] px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-[0.2em] 
      font-medium rounded-md transition-all duration-300
      hover:bg-[#C89B3C] hover:text-white hover:scale-[1.03]
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
      `}
          >
            INQUIRE TODAY
          </button>

        </div>
      </section>
      </Reveal>
    </>
</PageWrapper>
  );
}