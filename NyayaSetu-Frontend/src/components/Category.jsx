// CategoryIcons.jsx
import { FiShield, FiHeart, FiHome, FiGlobe, FiBriefcase, FiCpu } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  { icon: <FiHome />, label: "Property" },
  { icon: <FiHeart />, label: "Family Law" },
  { icon: <FiShield />, label: "Criminal" },
  { icon: <FiBriefcase />, label: "Corporate" },
  { icon: <FiCpu />, label: "Cyber Crime" },
  { icon: <FiGlobe />, label: "Immigration" },
];

export default function CategoryIcons({dark}) {
  const card = dark 
    ? "bg-gray-800/70 text-white border-gray-700 shadow-xl"
    : "bg-white/90 text-gray-900 border-gray-300 shadow-lg";

  return (
    <div className="px-6 py-16 md:px-20">
      <h2 className="text-3xl font-extrabold text-center mb-10 tracking-tight">
        Popular Legal Categories
      </h2>

      {/* Background container */}
      <div
        className="rounded-3xl relative p-10 md:p-14 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570043018873-a61c23e760a5?auto=format&fit=crop&w=1200&q=60')",
        }}
      >
        <div
          className={`absolute inset-0 rounded-3xl ${dark ? "bg-black/60" : "bg-white/45"} backdrop-blur-sm`}
        ></div>

        {/* 💻 DESKTOP LAYOUT (non-scroll) */}
        <div className="hidden sm:flex relative gap-6 justify-center">
          {categories.map((c, i) => (
            <div
              key={i}
              className={`min-w-[170px] h-[180px] flex flex-col items-center justify-center 
              gap-4 px-8 py-5 rounded-2xl border ${card}
              hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <span className="text-4xl text-green-500">{c.icon}</span>
              <span className="font-bold text-lg tracking-wide">{c.label}</span>
            </div>
          ))}
        </div>

        {/* 📱 MOBILE CAROUSEL (no scroll) */}
        <div className="block sm:hidden relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.3}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 1800 }}
            className="pt-2 pb-4"
          >
            {categories.map((c, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <div
                  className={`w-[65%] h-[165px] flex flex-col items-center justify-center 
                  gap-3 px-6 py-5 rounded-2xl border ${card}
                  transition-all duration-300`}
                >
                  <span className="text-4xl text-green-500">{c.icon}</span>
                  <span className="font-bold text-base tracking-wide">{c.label}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}
