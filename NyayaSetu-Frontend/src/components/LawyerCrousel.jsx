// LawyerCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LawyerCard from "./LawyerCard";

const lawyers = [
  {name:"Adv. Sneha Verma", specialization:"Family Law", rating:"4.9", city:"Delhi", image:"https://i.pravatar.cc/150?img=47"},
  {name:"Adv. Raghav Mehta", specialization:"Criminal & Appeals", rating:"4.8", city:"Mumbai", image:"https://i.pravatar.cc/150?img=32"},
  {name:"Adv. Neel Joshi", specialization:"Cyber Law", rating:"4.7", city:"Bangalore", image:"https://i.pravatar.cc/150?img=51"},
  {name:"Adv. Zara Khan", specialization:"Corporate & IP", rating:"4.9", city:"Hyderabad", image:"https://i.pravatar.cc/150?img=36"},
];

export default function LawyerCarousel({ dark }) {
  return (
    <div className="relative w-full flex flex-col items-center px-4 py-16 sm:px-10 md:px-20 mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-10">Top Rated Lawyers</h2>

      {/* MAIN CONTAINER WITH RELATIVE POSITIONING FOR ARROWS */}
      <div className="relative w-full max-w-6xl">
        {/* SWIPER CONTAINER WITH CENTERED CONTENT */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}  // Center the single slide on mobile
          breakpoints={{
            640:  { 
              slidesPerView: 2, 
              spaceBetween: 20,
              centeredSlides: false  // Disable centering on tablet/desktop
            },
            1024: { 
              slidesPerView: 3, 
              spaceBetween: 24,
              centeredSlides: false
            },
          }}
          className="w-full"
        >
          {lawyers.map((lawyer, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center py-2">
              <div className="flex justify-center w-full">
                <LawyerCard lawyer={lawyer} dark={dark} disableHoverScale={false} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CUSTOM ARROW STYLES */}
      <style>{`
        /* Black arrow styling */
        .swiper-button-next,
        .swiper-button-prev {
          background-color: #000000 !important;
          border-radius: 50%;
          width: 44px !important;
          height: 44px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          top: 50% !important;
          transform: translateY(-50%) !important;
          color: white !important;
          transition: all 0.3s ease;
          z-index: 10;
          opacity: 1 !important;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: 900 !important;
        }
        
        /* Arrow positioning - positioned outside the carousel */
        .swiper-button-prev {
          left: -60px !important;
        }
        
        .swiper-button-next {
          right: -60px !important;
        }
        
        /* Hover effects */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #333333 !important;
          transform: translateY(-50%) scale(1.05) !important;
        }
        
        /* Dark mode support */
        .dark .swiper-button-next,
        .dark .swiper-button-prev {
          background-color: #000000 !important;
          color: white !important;
        }
        
        .dark .swiper-button-next:hover,
        .dark .swiper-button-prev:hover {
          background-color: #333333 !important;
        }
        
        /* Hide arrows on mobile and tablet, show only on desktop */
        @media (max-width: 1023px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
        
        /* Show arrows on desktop (1024px and above) */
        @media (min-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex !important;
          }
        }
        
        /* Adjust arrow position for larger screens */
        @media (min-width: 1280px) {
          .swiper-button-prev {
            left: -70px !important;
          }
          .swiper-button-next {
            right: -70px !important;
          }
        }
        
        @media (min-width: 1536px) {
          .swiper-button-prev {
            left: -80px !important;
          }
          .swiper-button-next {
            right: -80px !important;
          }
        }
      `}</style>
    </div>
  );
}