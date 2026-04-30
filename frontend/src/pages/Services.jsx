import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
   const navigate = useNavigate();
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

  return (
    <section className="bg-[#F8F4EE] min-h-screen">

      <Navbar />

      {/* ================= HERO ================= */}
      <div className="pt-32 pb-20 text-center px-6 reveal">
        <p className="text-xs tracking-[0.35em] text-[#C89B3C] mb-6">
          OUR SERVICES
        </p>

        <h1 className="text-5xl md:text-6xl font-serif text-[#5A0F14] leading-tight max-w-4xl mx-auto">
          Crafting Thoughtful Interior Experiences
        </h1>

        <p className="text-[#7A6A5A] mt-6 max-w-2xl mx-auto">
          From bespoke residential transformations to curated commercial
          ateliers, we translate your vision into a sanctuary of architectural elegance.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">

        {[
          {
            title: "Residential Interiors",
            desc: "Bespoke living spaces tailored to individual lifestyles, balancing functionality with refined artistic expression.",
          },
          {
            title: "Modular Kitchen Design",
            desc: "Contemporary, functional culinary spaces featuring premium finishes and innovative storage solutions.",
          },
          {
            title: "Office & Commercial Interiors",
            desc: "Strategic workspace design to enhance productivity and reflect your brand identity.",
          },
          {
            title: "Custom Furniture Design",
            desc: "Exclusive handcrafted pieces designed specifically for your space with uncompromising quality.",
          },
        ].map((item, i) => (
          <div
  key={i}
  className=" reveal
    group
    bg-[#EFE7DC] p-10 rounded-xl 
    border border-[#E5D9CC]

    transition-all duration-500 ease-out

    hover:bg-[#6B0F1A]
    hover:border-[#C89B3C]
    hover:-translate-y-3
    hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)]
    style={{ transitionDelay: `${i * 120}ms` }}"
>
          
            <h3 className=" text-2xl font-serif mb-4 text-[#5A0F14] 
            transition-colors duration-500 group-hover:text-[#C89B3C]">
              {item.title}
            </h3>

            <p className="text-[#7A6A5A] leading-relaxed transition-colors 
            duration-500 group-hover:text-[#E6D3A3]">
              {item.desc}
            </p>

            {/* GOLD LINE */}
            <div className=" mt-6 w-10 h-[2px] bg-[#C89B3C] 
            transition-all duration-500 group-hover:w-16
"/>
          </div>
        ))}

      </div>

      {/* ================= DETAIL SECTION ================= */}

      {/* SECTION 1 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pb-24 reveal">

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/service1.jpg"
            className="
      w-full h-[420px] object-cover
      transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:scale-105"
          />
        </div>

        <div>
          <h2 className="text-4xl font-serif text-[#5A0F14] mb-6 reveal">
            Residential Interiors
          </h2>

          <p className="text-[#7A6A5A] mb-6">
            We design homes that reflect the people who live in them,
            creating emotional, elegant, and functional living environments.
          </p>

          <ul className="space-y-3 text-[#5A5A5A]">
            <li>→ Personalized conceptual design & planning</li>
            <li>→ Bespoke materials & finishes</li>
            <li>→ End-to-end execution</li>
          </ul>
        </div>
      </div>

      {/* SECTION 2 (reverse) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pb-24 reveal">

        <div>
          <h2 className="text-4xl font-serif text-[#5A0F14] mb-6 reveal">
            Modular Kitchen Design
          </h2>

          <p className="text-[#7A6A5A] mb-6">
            Functional yet aesthetic kitchens crafted with precision,
            premium materials, and modern technology.
          </p>

          <ul className="space-y-3 text-[#5A5A5A]">
            <li>→ Smart storage systems</li>
            <li>→ Premium finishes</li>
            <li>→ Seamless appliance integration</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/service2.jpg"
            className="
      w-full h-[420px] object-cover
      transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:scale-105"
          />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pb-24 reveal">

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/service3.jpg"
            className="
      w-full h-[420px] object-cover
      transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:scale-105"
          />
        </div>

        <div>
          <h2 className="text-4xl font-serif text-[#5A0F14] mb-6 reveal">
            Office & Commercial Interiors
          </h2>

          <p className="text-[#7A6A5A] mb-6">
            Transforming workspaces into inspiring environments that enhance productivity.
          </p>

          <ul className="space-y-3 text-[#5A5A5A]">
            <li>→ Brand-aligned design</li>
            <li>→ Acoustic & lighting optimization</li>
            <li>→ Flexible layouts</li>
          </ul>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pb-24 reveal">

        <div>
          <h2 className="text-4xl font-serif text-[#5A0F14] mb-6 reveal">
            Custom Furniture Design
          </h2>

          <p className="text-[#7A6A5A] mb-6">
            Unique handcrafted furniture pieces that blend art with functionality.
          </p>

          <ul className="space-y-3 text-[#5A5A5A]">
            <li>→ Tailored dimensions</li>
            <li>→ Premium materials</li>
            <li>→ Fine craftsmanship</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/service4.jpg"
            className="
      w-full h-[420px] object-cover
      transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:scale-105"
          />
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#EFE7DC] text-center py-28 px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#5A0F14] mb-8">
          Let’s Design Your Dream Space
        </h2>

        <button onClick={() => navigate("/contact#form")}
        className="
          bg-[#C89B3C] text-white px-10 py-4 rounded-md
          tracking-[0.2em] text-sm
          hover:scale-105 transition-all duration-300
        ">
          BOOK CONSULTATION
        </button>
      </div>

    </section>
  );
}