import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";



export default function Contact() {
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#form") {
      const el = document.getElementById("form");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 6;   // SMALL tilt
    const rotateY = ((x - midX) / midX) * 6;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const reset = () => {
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    details: "",
    file: null
  });

  const [success, setSuccess] = useState(false);
  const fileRef = useRef();
const [fileName, setFileName] = useState("No file chosen");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE FILE
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type !== "application/pdf") {
      alert("Only PDF files allowed");
      return;
    }

    setFormData({
      ...formData,
      file: file
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const form = new FormData();

    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("location", formData.location);
    form.append("details", formData.details);

    if (formData.file) {
      form.append("file", formData.file);
    }

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      body: form,
    });

    const result = await res.json();

    console.log(result);

    toast.success("Inquiry submitted ✨", {
  style: {
    background: "#5A0F14",
    color: "#fff",
    border: "1px solid #C89B3C"
  },
});

    // ✅ 🔥 RESET FORM HERE
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      details: "",
      file: null
    });

    setFileName("No file chosen");

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  }
};

  return (

    <div className="bg-[#F5EFE6] py-16 md:py-20 px-4 sm:px-6 md:px-20">
          <Navbar />
    <Reveal>
    <section id="form" className="bg-[#F5EFE6] py-16 md:py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE (FORM) */}
    <div>

      <p className="tracking-[0.25em] text-xs text-[#7A6A5A] mb-4">
        CONTACT US
      </p>

      <h2 className="text-5xl font-serif text-[#5A0F14] leading-tight mb-6">
        Let’s Design <br /> Your Space
      </h2>

      <p className="text-[#7A6A5A] mb-10 max-w-md">
        Share your requirements and our team will get in touch with you
        to curate your vision.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">

        
              {/* ROW 1 */}
              <div className="grid grid-cols-2 gap-5 mb-5">

                <div>
                  <label className="labelStyle">FULL NAME*</label>
                  <input 
                  name = "name"
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="inputStyle"
                  />
                </div>

                <div>
                  <label className="labelStyle">PHONE NUMBER*</label>
                  <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  className="inputStyle" 
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-2 gap-5 mb-5">

                <div>
                  <label className="labelStyle">EMAIL*</label>
                  <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@address.com" 
                  className="inputStyle" 
                  />
                </div>

                <div>
                  <label className="labelStyle">LOCATION</label>
                  <input 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City / Area" 
                  className="inputStyle" 
                  />
                </div>

              </div>

              {/* FILE */}
              <div className="mb-6">
                <p className="text-xs tracking-widest text-[#7A6A5A] mb-2">
                  UPLOAD HOUSE PLAN (PDF)
                </p>

                <div className="flex items-center justify-between border border-[#E5D9CC] px-4 py-3 bg-white">

                  {/* BUTTON */}
                  <button
                    type="button"
                    onClick={() => fileRef.current.click()}
                    className="border border-[#C89B3C] px-4 py-2 text-sm text-[#5A0F14] hover:bg-[#C89B3C]/10"
                  >
                    SELECT PDF
                  </button>

                  {/* FILE NAME */}
                  <span className="text-sm text-[#A89A8A] truncate max-w-[200px]">
                    {fileName}
                  </span>

                  {/* HIDDEN INPUT */}
                  <input
                    type="file"
                    accept="application/pdf"
                    ref={fileRef}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];

                      if (file) {
                        setFileName(file.name);
                        setFormData({
                          ...formData,
                          file: file
                        });
                      }
                    }}
                  />
                </div>

              </div>

              {/* TEXTAREA */}
              <div>
                <label className="labelStyle">DETAILS</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your space and aesthetic preferences..."
                className="w-full border border-[#E5D9CC] bg-white px-4 py-3 h-[120px] text-sm outline-none focus:border-[#C89B3C]"
              />
              </div>

        {/* BUTTON */}
        <button
          className="
            bg-[#C89B3C] text-white px-8 py-4 rounded-lg
            hover:-translate-y-1 hover:shadow-xl
            transition-all duration-300
          "
        >
          SUBMIT INQUIRY →
        </button>

      </form>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className=" 
        rounded-md overflow-hidden
        transition-transform duration-300 ease-out
        will-change-transform
      "
    >
      <img
        src="/images/contact.jpg"
        className="w-full h-[640px] object-cover"
      />
    </div>

  </div>
</section>
</Reveal>

<Reveal>
<section className="bg-[#F5EFE6] py-16 border-t border-[#E5D9CC]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    {/* PHONE */}
    <div className="flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:-translate-y-2">
      <Phone className="text-[#C89B3C]" size={22} />
      <p className="text-xs tracking-[0.3em] text-[#7A6A5A]">PHONE</p>
      <p className="text-[#5A0F14] text-lg font-medium">
        +91 98765 43210
      </p>
    </div>

    {/* EMAIL */}
    <div className="flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:-translate-y-2">
      <Mail className="text-[#C89B3C]" size={22} />
      <p className="text-xs tracking-[0.3em] text-[#7A6A5A]">EMAIL</p>
      <p className="text-[#5A0F14] text-lg font-medium">
        hello@vaagdeesha.com
      </p>
    </div>

    {/* LOCATION */}
    <div className="flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:-translate-y-2">
      <MapPin className="text-[#C89B3C]" size={22} />
      <p className="text-xs tracking-[0.3em] text-[#7A6A5A]">LOCATION</p>
      <p className="text-[#5A0F14] text-sm leading-6">
        Avenue de l'Atelier 42, Design District,<br />
        Hyderabad, TS 500033
      </p>
    </div>

  </div>
</section>
</Reveal>
</div>
  );
}