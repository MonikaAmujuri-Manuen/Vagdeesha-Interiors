import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = "text-white";

  return (
    <header
  className="
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    bg-transparent
    py-4
    backdrop-blur-[2px]
  "
>
  {/* CONTAINER */}
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">

    {/* LOGO */}
    <Link
      to="/"
      className={`
        font-serif
        ${textColor}
        drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]
        shrink-0
      `}
    >
      <h1 className="text-[20px] sm:text-lg tracking-wide leading-none">
        VAAGDESHA
      </h1>

      <p className="text-[9px] sm:text-[10px] tracking-[0.35em] mt-1">
        INTERIORS
      </p>
    </Link>

    {/* DESKTOP MENU */}
    <nav
      className={`
        hidden md:flex
        gap-8 lg:gap-10
        text-sm font-medium tracking-wide
        ${textColor}
        drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]
      `}
    >
      {[
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Services", path: "/services" },
        { name: "Reviews", path: "/reviews" },
        { name: "Contact", path: "/contact" },
      ].map((item) => (
        <NavLink key={item.name} to={item.path}>
          {({ isActive }) => (
            <div className="relative group cursor-pointer">
              <span
                className={`
                  transition-colors duration-300
                  ${isActive ? "text-[#D4AF37]" : ""}
                  group-hover:text-[#D4AF37]
                `}
              >
                {item.name}
              </span>

              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-[#C89B3C]
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </div>
          )}
        </NavLink>
      ))}
    </nav>

    {/* DESKTOP BUTTON */}
    <button
      onClick={() => navigate("/contact#form")}
      className="
        hidden md:block
        bg-[#F5F1EA]
        text-[#5A0F14]
        px-5 lg:px-6
        py-2
        rounded-full
        text-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:scale-[1.03]
      "
    >
      Inquire Now
    </button>

    {/* MOBILE MENU BUTTON */}
    <button
      className={`
        md:hidden
        ${textColor}
        text-3xl
        leading-none
        pb-1
      `}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "×" : "☰"}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div
      className="
        md:hidden

        mt-4
        mx-4

        rounded-2xl

        bg-black/85
        backdrop-blur-xl

        border border-white/10

        px-6 py-6

        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      "
    >
      <nav className="flex flex-col gap-5 text-white font-medium">

        {[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Services", path: "/services" },
          { name: "Reviews", path: "/reviews" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `
                text-[15px]
                tracking-wide
                transition-colors duration-300
                ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-white"
                }
              `
            }
          >
            {item.name}
          </NavLink>

        ))}

        {/* MOBILE BUTTON */}
        <button
          onClick={() => {
            navigate("/contact#form");
            setMenuOpen(false);
          }}
          className="
            mt-3
            bg-[#F5F1EA]
            text-[#5A0F14]

            px-5 py-3
            rounded-full

            text-sm

            transition-all duration-300
          "
        >
          Inquire Now
        </button>

      </nav>
    </div>
  )}
</header>
  );
}