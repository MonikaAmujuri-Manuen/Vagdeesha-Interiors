import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Studio() {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F8F4EE] pt-24 md:pt-28">

      <Navbar />

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 mb-16 md:mb-28 reveal">
        <p className="text-xs tracking-[0.3em] md:tracking-[0.35em] text-[#C89B3C] mb-3 md:mb-4">
          OUR STUDIO
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#5A0F14] leading-tight mb-4 md:mb-6">
          Designing Spaces <br /> That Tell Stories
        </h1>

        <p className="text-[#7A6A5A] max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Rooted in material integrity and guided by timeless aesthetics,
          we craft interiors that reflect identity, emotion, and purpose.
        </p>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-28 reveal">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A0F14] mb-4 md:mb-6">
            About Vaagdeesha
          </h2>

          <p className="text-[#7A6A5A] leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
            At Vaagdeesha Interiors, we believe that every space carries a story.
            Our approach blends natural materials, thoughtful planning, and refined
            design language to create environments that feel both luxurious and personal.
          </p>

          <p className="text-[#7A6A5A] leading-relaxed text-sm md:text-base">
            We focus on crafting spaces that age gracefully — where textures,
            light, and proportions work in harmony.
          </p>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/p4.png"
            className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover hover:scale-105 transition duration-700"
          />
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 md:mb-28 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 reveal">

        {[
          {
            title: "Material Integrity",
            desc: "We use authentic, high-quality materials that enhance both beauty and longevity.",
          },
          {
            title: "Timeless Aesthetic",
            desc: "Designs that remain relevant beyond trends, focusing on elegance and restraint.",
          },
          {
            title: "Intentional Design",
            desc: "Every detail is purposeful, ensuring harmony between function and emotion.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="reveal bg-[#EFE7DC] p-6 md:p-8 rounded-xl border border-[#E5D9CC]"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <h3 className="text-lg md:text-xl font-serif text-[#5A0F14] mb-2 md:mb-3">
              {item.title}
            </h3>

            <p className="text-[#7A6A5A] text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PROCESS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 md:mb-28 reveal">
        <h2 className="text-2xl md:text-3xl font-serif text-[#5A0F14] mb-8 md:mb-12 text-center">
          Our Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

          {[
            "Consultation",
            "Concept Design",
            "Execution",
            "Final Styling",
          ].map((step, i) => (
            <div key={i}>
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full border border-[#C89B3C] flex items-center justify-center text-[#C89B3C] text-sm md:text-base">
                {i + 1}
              </div>

              <p className="text-[#5A0F14] text-sm md:text-base font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 md:mb-28 reveal">
        <div className="bg-[#6B0F1A] text-[#C89B3C] p-8 md:p-12 rounded-2xl text-center">
          <p className="text-lg md:text-2xl italic mb-3 md:mb-4">
            "We don’t just design interiors. We craft experiences."
          </p>

          <p className="text-xs md:text-sm text-[#E5D3C2]">
            — VAAGDEESHA INTERIORS
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-16 md:pb-24 px-4 reveal">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#5A0F14] mb-6 md:mb-8">
          Begin Your Design Journey
        </h2>

        <button
          onClick={() => navigate("/contact#form")}
          className="
            bg-[#6B0F1A] text-white px-6 md:px-10 py-3 rounded-full 
            text-sm md:text-base
            tracking-wide transition-all duration-300
            hover:bg-[#8B1E2D] hover:scale-105
          "
        >
          Book Consultation
        </button>
      </div>

    </section>
  );
}