// LawyerCard.jsx
import { FiMapPin, FiStar, FiArrowRight } from "react-icons/fi";

export default function LawyerCard({ lawyer, dark, disableHoverScale = false }) {
  const bg = dark
    ? "bg-gray-800/70 text-white border-gray-700"
    : "bg-white/90 text-gray-900 border-gray-200";

  const shadow = dark
    ? "shadow-[0_0_18px_rgba(255,255,255,0.08)]"
    : "shadow-[0_0_18px_rgba(0,0,0,0.08)]";

  return (
    <div
      className={`
        relative w-[270px] h-[350px] rounded-3xl border ${bg} ${shadow} backdrop-blur-xl
        overflow-hidden
        transition-all duration-300
        group                   /* for inner hover target */
      `}
    >
      {/* MAIN CONTENT CONTAINER - Only one container needed */}
      <div className={`
        flex flex-col justify-between h-full p-6
        transition-transform duration-300
        ${!disableHoverScale ? 'group-hover:scale-[1.02] group-hover:-translate-y-[1px]' : ''}
        origin-center
      `}>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-500/60 shadow-md"
            />
            <span className="
              absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px]
              px-2 py-[2px] rounded-full shadow
            ">
              ★ {lawyer.rating}
            </span>
          </div>

          <h3 className="font-bold text-lg mt-3 text-center">{lawyer.name}</h3>

          <span className="
            mt-1 text-xs bg-green-100 text-green-700
            dark:bg-green-900 dark:text-green-200
            px-3 py-1 rounded-full
          ">
            {lawyer.specialization}
          </span>

          <p className="flex items-center justify-center gap-2 mt-2 text-sm opacity-80">
            <FiMapPin className="text-green-500" /> {lawyer.city}
          </p>
        </div>

        <button className="
          mt-4 w-full bg-green-600 hover:bg-green-700
          text-white font-medium py-2 rounded-xl
          flex items-center justify-center gap-2 transition-colors duration-200
          group/btn
        ">
          <span>View Profile</span>
          <FiArrowRight className="
            transition-transform duration-200
            group-hover/btn:translate-x-1
          " />
        </button>
      </div>
    </div>
  );
}