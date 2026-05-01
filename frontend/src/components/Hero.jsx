import { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import PanoramaModal from "../components/PanoramaModal";
import hero360 from "../assets/hero360.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [open360, setOpen360] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative h-[100vh] md:h-[120vh] w-full overflow-hidden">

      {/* IMAGE */}
      <div
        className="absolute inset-0 bg-cover scale-110 brightness-[0.98] contrast-[1.05] will-change-transform transition-transform duration-300"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center 95%",
          transform: `
            translateY(${offset * 0.15}px)
            translate(${mouse.x}px, ${mouse.y}px)
            scale(${1 + offset * 0.0002})
          `
        }}
      ></div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50"></div>
      <div className="absolute inset-0 bg-[#C89B3C]/10 mix-blend-overlay"></div>

      {/* GLASS */}
      

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-6 space-y-2 group">

        <p className="opacity-0 animate-fadeUp delay-100 bg-white/20 px-4 py-1 rounded-full text-xs md:text-sm mb-4">
          EST. 1998
        </p>

        <h1 className="font-cormorant text-white text-center leading-none">

          <span className="block animate-textReveal text-3xl sm:text-4xl md:text-7xl tracking-[0.04em] transition-all duration-500 ease-out drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] group-hover:drop-shadow-[0_10px_40px_rgba(200,155,60,0.25)]">
            Vaagdeesha
          </span>

          <span className="block animate-textReveal delay-200 text-3xl sm:text-4xl md:text-7xl italic text-[#F5EFE6] mt-2 transition-all duration-500 ease-out drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] group-hover:drop-shadow-[0_10px_40px_rgba(200,155,60,0.3)]">
            Interiors
          </span>

        </h1>

        <p className="opacity-0 animate-fadeUp delay-300 mt-4 md:mt-5 tracking-[0.2em] md:tracking-[0.25em] text-xs md:text-sm text-[#E5D3C2] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          CRAFTED FOR LUXURY LIVING
        </p>

        <div className="w-12 md:w-16 h-[2px] bg-[#C89B3C] mt-4 md:mt-6 opacity-80"></div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">

          {/* PRIMARY */}
          <button
            onClick={() => setOpen360(true)}
            className="group bg-[#C89B3C] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm tracking-[0.2em] relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] active:scale-[0.96]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Preview
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>

          {/* SECONDARY */}
          <button
            onClick={() => navigate("/portfolio")}
            className="border border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm tracking-[0.15em] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:bg-white hover:text-black hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            VIEW PORTFOLIO
          </button>
        </div>

        {/* LIGHT STREAK */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[250px] md:w-[400px] h-[2px] overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C89B3C]/60 to-transparent animate-streak"></div>
        </div>

      </div>

      <PanoramaModal 
        isOpen={open360}
        onClose={() => setOpen360(false)}
        image={hero360}
      />

    </section>
  );
}