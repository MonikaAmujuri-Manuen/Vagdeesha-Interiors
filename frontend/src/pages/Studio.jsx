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
    <section className="bg-[#F8F4EE] pt-28">

      <Navbar />

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-28 reveal">
        <p className="text-xs tracking-[0.3em] text-[#C89B3C] mb-4">
          OUR STUDIO
        </p>

        <h1 className="text-5xl md:text-6xl font-serif text-[#5A0F14] leading-tight mb-6">
          Designing Spaces <br /> That Tell Stories
        </h1>

        <p className="text-[#7A6A5A] max-w-2xl mx-auto leading-relaxed">
          Rooted in material integrity and guided by timeless aesthetics,
          we craft interiors that reflect identity, emotion, and purpose.
        </p>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-28 
reveal">
        
        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-serif text-[#5A0F14] mb-6">
            About Vaagdeesha
          </h2>

          <p className="text-[#7A6A5A] leading-relaxed mb-4">
            At Vaagdeesha Interiors, we believe that every space carries a story.
            Our approach blends natural materials, thoughtful planning, and refined
            design language to create environments that feel both luxurious and personal.
          </p>

          <p className="text-[#7A6A5A] leading-relaxed">
            We focus on crafting spaces that age gracefully — where textures,
            light, and proportions work in harmony.
          </p>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/p4.png"
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
          />
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="max-w-6xl mx-auto px-6 mb-28 grid md:grid-cols-3 gap-10 
reveal">

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
            className="reveal bg-[#EFE7DC] p-8 rounded-xl border border-[#E5D9CC]"
            style={{ transitionDelay: `${i * 150}ms` }} 
          >
            <h3 className="text-xl font-serif text-[#5A0F14] mb-3">
              {item.title}
            </h3>

            <p className="text-[#7A6A5A] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PROCESS */}
      <div className="max-w-6xl mx-auto px-6 mb-28 reveal">
        <h2 className="text-3xl font-serif text-[#5A0F14] mb-12 text-center">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {[
            "Consultation",
            "Concept Design",
            "Execution",
            "Final Styling",
          ].map((step, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#C89B3C] flex items-center justify-center text-[#C89B3C]">
                {i + 1}
              </div>

              <p className="text-[#5A0F14] font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE */}
      <div className="max-w-6xl mx-auto px-6 mb-28 reveal">
        <div className="bg-[#6B0F1A] text-[#C89B3C] p-12 rounded-2xl text-center">
          <p className="text-xl md:text-2xl italic mb-4">
            "We don’t just design interiors. We craft experiences."
          </p>

          <p className="text-sm text-[#E5D3C2]">
            — VAAGDEESHA INTERIORS
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-24 reveal">
        <h2 className="text-4xl md:text-5xl font-serif text-[#5A0F14] mb-8">
          Begin Your Design Journey
        </h2>

        <button onClick={() => navigate("/contact#form")}
        className="
          bg-[#6B0F1A] text-white px-10 py-3 rounded-full 
          tracking-wide transition-all duration-300
          hover:bg-[#8B1E2D] hover:scale-105
        ">
          Book Consultation
        </button>
      </div>

    </section>
  );
}