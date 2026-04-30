import FeaturedCarousel from "../components/FeaturedCarousel";
import EditorialGrid from "../components/EditorialGrid";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F8F4EE] pt-28 px-6">
      <Navbar />

      {/* HERO */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">

        <div>
          <p className="text-xs tracking-[0.3em] text-[#C89B3C] mb-4">
            CURATED EXCELLENCE
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-[#5A0F14] leading-tight">
  The Collection
</h1>
        </div>

        <div className="flex items-end">
          <p className="text-[#7A6A5A] leading-relaxed">
            A collection of architectural narratives where heritage materials
            meet contemporary restraint. Each space is a study in light,
            volume, and intentionality.
          </p>
        </div>

      </div>

      {/* CAROUSEL */}
      <FeaturedCarousel />

      {/* GRID */}
      <EditorialGrid />

      {/* ✅ CTA SECTION (ADD HERE) */}
      <div className="
      py-32 text-center
      border-t border-[#E8E0D6] 
      bg-[#F4EFE8]
      ">

        <h2 className="text-4xl md:text-5xl font-serif text-[#5A0F14] mb-10 leading-snug">
          Begin Your <br /> Design Journey
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* PRIMARY BUTTON */}
          <button 
          onClick={() => {
    document.getElementById("catalog")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
          className="
            bg-[#6B0F1A] text-white px-10 py-4 text-sm tracking-[0.2em]
            rounded-md transition-all duration-300
            hover:bg-[#5A0F14] hover:-translate-y-1
            hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
          ">
            VIEW CATALOG
          </button>

          {/* SECONDARY BUTTON */}
          <button onClick={() => navigate("/contact#form")}
          className="
            border border-[#BFAE9F] text-[#5A0F14]
            px-10 py-4 text-sm tracking-[0.2em]
            rounded-md transition-all duration-300
            hover:bg-[#EFE7DC] hover:-translate-y-1
          ">
            BOOK CONSULTATION
          </button>

        </div>

      </div>

    </section>
  );
}