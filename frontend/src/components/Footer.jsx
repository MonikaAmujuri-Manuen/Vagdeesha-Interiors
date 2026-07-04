import {
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {

  const socials = [
  {
    icon: <FaInstagram size={18} />,
    href: "https://instagram.com/vaagdesha_interiors",
    label: "Instagram",
  },
  {
    icon: <FaYoutube size={18} />,
    href: "https://youtube.com/@Vaagdeshainteriors",
    label: "YouTube",
  }
];

  return (
    <footer className="bg-[#0F0F10] text-center py-12 md:py-14 px-4 sm:px-6 animate-fadeUp">

      <div className="max-w-6xl mx-auto">

        {/* LOGO / BRAND */}
        <h2 className="text-white font-serif text-xl md:text-2xl tracking-wide mb-2">
          VAAGDESHA
        </h2>

        <p className="text-[#B08D57] text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-10">
          INTERIORS
        </p>

        
        <div
          className="
            mt-10
            flex flex-col
            md:flex-row
            items-center
            justify-center
            gap-8
            md:gap-16
            mb-10
          "
        >

          {/* Socials */}
          <div className="flex items-center gap-6">

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  w-11 h-11
                  rounded-full
                  border border-[#B08D57]/30
                  bg-white/[0.03]
                  flex items-center justify-center
                  text-[#B08D57]
                  transition-all duration-300
                  hover:bg-[#B08D57]
                  hover:text-black
                  hover:-translate-y-1
                "
              >
                {social.icon}
              </a>
            ))}

          </div>

          {/* Phone */}
          <a
            href="tel:+917599999729"
            className="flex items-center gap-3 text-[#D6D2CC] hover:text-[#C89B3C]"
          >
            <FaPhoneAlt className="text-[#B08D57]" />
            <span>+91 75999 99729</span>
          </a>

          <a
            href="mailto:vaagdeeshainteriors@gmail.com"
            className="flex items-center gap-3 text-[#D6D2CC] hover:text-[#C89B3C]"
          >
            <FaEnvelope className="text-[#B08D57]" />
            <span>vaagdeeshainteriors@gmail.com</span>
          </a>


        </div>

        {/* COPYRIGHT */}
        <p className="text-[10px] md:text-xs text-[#A8A29E] tracking-wide leading-relaxed">
          © 2026 VAAGDESHA INTERIORS. ALL RIGHTS RESERVED.
        </p>

      </div>

    </footer>
  );
}