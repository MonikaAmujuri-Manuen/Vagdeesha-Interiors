export default function Footer() {
  return (
    <footer className="bg-[#0F140F] text-center py-14 md:py-20 px-4 sm:px-6 animate-fadeUp">

      <div className="max-w-4xl mx-auto">

        {/* LOGO / BRAND */}
        <h2 className="text-white font-serif text-xl md:text-2xl tracking-wide mb-2">
          VAAGDEESHA
        </h2>

        <p className="text-[#A8A29E] text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-10">
          INTERIORS
        </p>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-[#8B7B6B] tracking-wide mb-8 md:mb-10">

          {["INSTAGRAM", "PINTEREST", "LINKEDIN", "PRIVACY POLICY"].map((item, index) => (
            <span
              key={index}
              className="cursor-pointer relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C89B3C] transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}

        </div>

        {/* COPYRIGHT */}
        <p className="text-[10px] md:text-xs text-[#6B7280] tracking-wide leading-relaxed">
          © 2024 VAAGDEESHA INTERIORS. ALL RIGHTS RESERVED.
        </p>

      </div>

    </footer>
  );
}