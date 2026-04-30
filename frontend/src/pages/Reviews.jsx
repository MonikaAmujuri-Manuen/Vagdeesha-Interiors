import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  const navigate = useNavigate();

  const [imgRef, imgVisible] = useInView();
  const [cardRef, cardVisible] = useInView();
  const [heroRef, heroVisible] = useInView();
const [featuredRef, featuredVisible] = useInView();
const [cardsRef, cardsVisible] = useInView();
const [gridRef, gridVisible] = useInView();
const [ctaRef, ctaVisible] = useInView();
const [lastCardsRef, lastCardsVisible] = useInView();

function useInView() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
  return (

    <div className="bg-[#F5EFE6] py-16 md:py-20 px-4 sm:px-6 md:px-20">
      <Navbar />

    {/*Hero SECTION */}

    <section
  ref={heroRef}
  className={`
    text-center py-16 md:py-28 px-4 sm:px-6 bg-[#F5EFE6]
    transition-all duration-1000 ease-out
    ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
      

      <p className="tracking-[0.3em] text-[#C89B3C] text-xs md:text-sm mb-3 md:mb-4">
        CLIENT REVIEWS
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#5A0F14] mb-4 md:mb-6">
        What Our Clients Say
      </h1>

      <p className="max-w-2xl mx-auto text-[#7A6A5A] text-sm md:text-base">
        Experiences from clients who trusted us to design their spaces,
        reflecting our commitment to architectural heritage and modern minimalism.
      </p>
    </section>

    {/*Featured Testimonials SECTION */}

    <section
  ref={featuredRef}
  className={`
    py-16 md:py-28 px-4 sm:px-6 text-center bg-[#EFE7DC]
    transition-all duration-1000 ease-out
    ${featuredVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
      <div className="max-w-4xl mx-auto">
        <div className="text-6xl text-[#E5D9CC] mb-6"></div>

        <p className="text-xl sm:text-2xl md:text-4xl font-serif text-[#5A0F14] leading-relaxed">
          "The team at Vaagdeesha Interiors transformed our heritage apartment into a modern 
          scantuary without losing it's original character. Their eye for detail and mastery of 
          texture is truly unparalleled in the industry."
        </p>

        <p className="mt-6 md:mt-8 text-[#5A0F14] font-medium">
          Julian Throne
        </p>

        <p className="text-xs tracking-widest text-[#C89B3C]">
          HERITAGE PENTHOUSE
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5EFE6]">

      <div className="md:hidden">
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={16}
    slidesPerView={1.1}
    centeredSlides
    loop={false}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    pagination={{
      el: ".custom-pagination",
      clickable: true,
    }}
  >
    {[
      { 
        comment: "The level of sophistication and attention to detail in their work is remarkable.They truly understand our vision for a quite, luxury home.",
        client: "Aria Kensington",
        role: "CREATIVE DIRECTOR"
      },
      {
        comment: "Working with vagdeesha was a seamless experience. They managed to balance historical integrity with absolute modern comfort.",
        client: "Thomas Moreland",
        role: "ESTATE COLLECTOR"
      },
      {
        comment: "Their approach to lighting and texture changed how we feel in our space. It's not just a house anymore, it's a curated gallery.",
        client: "Isabella Vough",
        role: "PRIVATE CLIENT"
      }
    ].map((item, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white p-6 rounded-xl border border-[#E5D9CC]">
          <div className="text-[#C89B3C] mb-2">★★★★★</div>

          <p className="text-[#7A6A5A] text-sm mb-4">
            {item.comment}
          </p>

          <p className="text-[#5A0F14] font-medium">
            {item.client}
          </p>

          <p className="text-xs text-[#A89A8A] uppercase">
            {item.role}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className="custom-pagination mt-4 flex justify-center"></div>
</div>

      <div
  ref={cardsRef}
  className={`
    group hidden md:grid max-w-6xl mx-auto md:grid-cols-3 gap-8
    transition-all duration-1000 ease-out
    ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
        {[
          { 
            comment: "The level of sophistication and attention to detail in their work is remarkable.They truly understand our vision for a quite, luxury home.",
            client: "Aria Kensington",
            role: "CREATIVE DIRECTOR"
          },
          {
            comment: "Working with vagdeesha was a seamless experience. They managed to balance historical integrity with absolute modern comfort.",
            client: "Thomas Moreland",
            role: "ESTATE COLLECTOR"
          },
          {
            comment: "Their approach to lighting and texture changed how we feel in our space. It's not just a house anymore, it's a curated gallery.",
            client: "Isabella Vough",
            role: "PRIVATE CLIENT"
          }
         
        ].map((item,i)=>(
          <div
          key={i}
          className="bg-white p-8 rounded-xl 
          border border-[#E5D9CC]
          transition-all duration-500 ease-out
          
          group hover:text-[#7A0F14]
          hover:border-[#7A0F14]
          hover:bg-[#FFF9F8]
          hover:shadow-[0_20px_50px_rgba(122,15,20,0.15)]
          hover:-translate-y-2
          style={{ transitionDelay: `${i * 150}ms` }}"
          >
            <div className="text-[#C89B3C] group-hover:text-[#7A0F14] transition">★★★★★</div>

            <p className="text-[#7A6A5A] mb-6">
              {item.comment}
            </p>

            <p className="text-[#5A0F14] font-medium">
              {item.client}
        </p>

        <p className="text-xs text-[#A89A8A] uppercase">
          {item.role}
        </p>
        </div>   
        ))}
      </div>
    </section>

    <section
  ref={gridRef}
  className={`
    py-16 md:py-24 px-4 sm:px-6 bg-[#EFE7DC]
    transition-all duration-1000 ease-out
    ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">

    {/* BIG */}
    <div className="md:col-span-2 bg-white p-6 md:p-10 rounded-xl">
      <div className="text-[#C89B3C] mb-4">★★★★★</div>
      <p className="text-lg md:text-2xl font-serif text-[#5A0F14]">
        "The team at Vaagdeesha Interiors transformed our heritage apartment to modern scantuary without losing it's 
        original character. Their eye for detail and mastery of texture is truly unparalleled in the industry."
      </p>

      <div className="mt-6 flex items-center gap-4">
        
        <div>
          <p className="text-[#5A0F14] font-medium">Julian Thorne</p>
          <p className="text-xs text-[#A89A8A]">Founder</p>
        </div>
      </div>
    </div>

    {/* SMALL */}
    <div className="bg-[#F5EFE6] p-6 md:p-8 rounded-xl">
      <div className="text-[#C89B3C] mb-4">★★</div>
      <p className="text-sm md:text-base text-[#7A6A5A]">
        "Minimalism is often cold, but Vaagdeesha brings a warmth that is rare. They curated every piece like it was for gallery."
      </p>

      <p className="mt-6 text-[#5A0F14] font-medium">Elara Vance</p>
      <p className="text-xs text-[#A89A8A]">PRIVATE CLIENT</p>
    </div>

  </div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5EFE6]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

<div
  ref={imgRef}
  className={`
    relative overflow-hidden rounded-md
    transition-all duration-500 ease-out

    ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}

    hover:-translate-y-2
    hover:shadow-[0_20px_50px_rgba(122,15,20,0.15)]
    cursor-pointer
  `}
>
  <img
    src="/images/review.png"
    className={`
      w-full h-[260px] sm:h-[360px] md:h-[480px] object-cover 
      transition-transform duration-[2000ms] ease-out
      ${imgVisible ? "scale-100" : "scale-110"}
    `}
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#5A0F14]/60 to-transparent" />

  {/* text */}
  <div className="absolute bottom-6 left-6 text-white">
    <p className="italic text-sm mb-1">
      "A masterclass in modern architectural heritage."
    </p>
    <span className="text-xs tracking-widest opacity-80">
      — ARCHITECTURAL DIGEST
    </span>
  </div>
</div>


    <div
  ref={cardRef}
  className={`
    bg-[#EFE7DC] p-6 md:p-10 rounded-md 

    transition-all duration-1000 ease-out delay-200

    ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>

  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-8 rounded-full bg-[#E5D9CC] flex items-center justify-center text-xs font-semibold text-[#5A0F14]">
      MB
    </div>

    <div>
      <h3 className="text-sm font-semibold text-[#5A0F14]">
        Marcus Bennett
      </h3>
      <div className="text-[#C89B3C] text-sm">★★★★★</div>
    </div>
  </div>

  <p className="text-sm md:text-base text-[#7A6A5A] leading-relaxed mb-6">
    "From the initial sketch to the final placement of the custom-woven rugs,
    the journey was seamless. They don’t just design rooms; they curate a lifestyle
    that feels both historic and incredibly fresh."
  </p>

  <a
    href="#"
    className="text-[#C89B3C] text-sm tracking-wide font-medium hover:text-[#5A0F14] transition"
  >
    VIEW PROJECT CASE STUDY →
  </a>

</div>
</div>
</section>

<section
  ref={lastCardsRef}
  className={`
    py-16 md:py-24 px-4 sm:px-6 bg-[#EFE7DC]
    transition-all duration-1000 ease-out
    ${lastCardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

    {/* CARD 1 */}
    <div
  className="
    bg-white p-6
    border border-[#E5D9CC]
    transition-all duration-300 ease-out
    hover:border-[#7A0F14]
    hover:shadow-[0_10px_30px_rgba(122,15,20,0.15)]
    hover:-translate-y-1
    hover:cursor-pointer
  "
>
      "The studio's approach to light is what sets them apart. Our home feels alive at every hour of the day."

      <p className="mt-6 text-[#5A0F14] font-medium">Sophia Chen</p>
      <p className="text-xs text-[#A89A8A]">DESIGN DIRECTOR, MUSE</p>
    </div>

    {/* CARD 2 */}
    <div
  className="
    bg-[#F5EFE6] p-6
    border border-[#E5D9CC]
    transition-all duration-300 ease-out
    hover:border-[#7A0F14]
    hover:shadow-[0_10px_30px_rgba(122,15,20,0.15)]
    hover:-translate-y-1
    hover:cursor-pointer
  "
>
      "Sophisticated, disciplined, and profoundly beautiful. Every interaction with Vaagdeesha was a pleasure."
      
      <p className="mt-6 text-[#5A0F14] font-medium">Oliver Saint</p>
      <p className="text-xs text-[#A89A8A]">PRIVATE COLLECTOR</p>
    </div>

    {/* CARD 3 */}
    <div
  className="
    bg-[#7A0F14] text-[#D4AF37] p-6
    border border-[#7A0F14]
    transition-all duration-300 ease-out
    hover:border-[#D4AF37]
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
    hover:-translate-y-1
    hover:cursor-pointer
  "
>
      "Exceeded all expectations. Their project management is as meticulous as their design aesthetic."

      <p className="mt-6 text-[#5A0F14] font-medium">Elena Rodriguez</p>
      <p className="text-xs text-[#A89A8A]">Real Estate Developer</p>
    </div>

  </div>
</section>

<section
  ref={ctaRef}
  className={`
    py-20 md:py-28 px-4 text-center bg-[#F5EFE6]
    transition-all duration-1000 ease-out
    ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A0F14] mb-4">
    Ready to Begin Your Narrative?
  </h2>

  <p className="text-sm md:text-base text-[#7A6A5A] mb-6 md:mb-8">
    Join our list of discerning clients and let us transform your vision.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

    {/* PRIMARY BUTTON */}
    <button onClick={() => navigate("/contact#form")}
      className="
        bg-[#7A0F14] text-white px-6 py-3
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(122,15,20,0.25)]
        hover:bg-[#8E1419]
      "
    >
      START A CONVERSATION
    </button>

    {/* SECONDARY BUTTON */}
    <button
      className="group
        text-[#7A0F14] relative
        transition-all duration-300

        hover:-translate-y-1
      "
    >
      DOWNLOAD PORTFOLIO

      {/* subtle underline animation */}
      <span className="
        absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7A0F14]
        transition-all duration-300
        group-hover:w-full
      " />
    </button>

  </div>
</section>

    </div>
  );
}