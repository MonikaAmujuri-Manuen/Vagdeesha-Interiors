import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

  const textColor = isHome
  ? scrolled
    ? "text-[#5A0F14]"
    : "text-white"
  : "text-[#5A0F14]";    

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isHome
      ? scrolled
        ? "bg-[#F5EFE6]/80 backdrop-blur-md shadow-md border-b border-white/20 py-3"
        : "bg-transparent py-4"
      : "bg-[#F5EFE6]/80 backdrop-blur-md shadow-md border-b border-white/20 py-3"
  }`}
>
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* LOGO */}
        <Link to="/" className={`font-serif ${textColor}`}>
  <h1 className="text-lg tracking-wide">VAAGDEESHA</h1>
  <p className="text-[10px] tracking-[0.35em]">INTERIORS</p>
</Link>

        {/* MENU */}
        <nav className={`hidden md:flex gap-10 text-sm font-medium tracking-wide ${textColor}`}>
  {[
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Studio", path: "/studio" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ].map((item) => (
    <NavLink key={item.name} to={item.path}>
      {({ isActive }) => (
        <div className="relative group cursor-pointer">
          
          {/* TEXT */}
          <span
            className={`
              transition-colors duration-300
              ${isActive ? "text-[#C89B3C]" : ""}
              group-hover:text-[#C89B3C]
            `}
          >
            {item.name}
          </span>

          {/* UNDERLINE */}
          <span
            className={`
              absolute left-0 -bottom-1 h-[2px] bg-[#C89B3C]
              transition-all duration-300
              ${
                isActive
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
            `}
          />
        </div>
      )}
    </NavLink>
  ))}
</nav>

        {/* BUTTON */}
        <button 
        onClick={() => navigate("/contact#form")}
        className="
  bg-[#6B0F1A] 
  text-white 
  px-6 py-2 
  rounded-full 
  text-sm 
  transition-all duration-300 ease-out
  hover:-translate-y-1 
  hover:scale-[1.03]
  hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
  active:translate-y-0
">
  Inquire Now
</button>

      </div>
    </header>
  );
}