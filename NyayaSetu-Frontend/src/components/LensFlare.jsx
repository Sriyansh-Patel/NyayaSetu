// LensFlare.jsx
export default function LensFlare({ dark }) {
  return (
    <svg
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[0]"
      viewBox="0 0 1920 1080"
      fill="none"
    >
      {/* ☀️ Central Glow */}
      <circle
        cx="1600"
        cy="200"
        r="300"
        className={`
          ${dark ? "opacity-30" : "opacity-40"}
        `}
        fill={dark ? "url(#flareGradientDark)" : "url(#flareGradientLight)"}
        style={{ mixBlendMode: dark ? "screen" : "overlay" }}
      />

      {/* 🌈 Horizontal Flare Streak */}
      <rect
        x="0"
        y="200"
        width="1920"
        height="10"
        rx="5"
        fill={dark ? "#c084fc" : "#fbbf24"}
        className="opacity-25 blur-xl"
        style={{ mixBlendMode: "screen" }}
      />

      {/* 🎞 Diagonal Streak */}
      <rect
        x="-400"
        y="600"
        width="2000"
        height="8"
        rx="4"
        transform="rotate(-15)"
        fill={dark ? "#ec4899" : "#f59e0b"}
        className="opacity-20 blur-lg"
        style={{ mixBlendMode: "screen" }}
      />

      {/* ⭐ Halo rings */}
      <circle cx="1600" cy="200" r="120" stroke={dark ? "#c084fc" : "#fbbf24"} strokeWidth="2" className="opacity-30" />
      <circle cx="1600" cy="200" r="180" stroke={dark ? "#ec4899" : "#f59e0b"} strokeWidth="1.8" className="opacity-20" />

      {/* 🌈 Gradients */}
      <defs>
        <radialGradient id="flareGradientLight">
          <stop offset="0%" stopColor="#fff8c2" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        <radialGradient id="flareGradientDark">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
