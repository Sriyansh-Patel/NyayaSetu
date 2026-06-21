import React, { useEffect, useState } from "react";

export default function FloatingDust({ dark }) {
  const count = 30;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15); // parallax multiplier
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particles = Array.from({ length: count });

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const depth = Math.random() * 3 + 1; // each particle different layer
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * -20;

        // parallax speed: closer = bigger = faster
        const parallax = offset / depth;

        return (
          <span
            key={i}
            className="absolute rounded-full blur-[1px] animate-dust-float"
            style={{
              width: size + "px",
              height: size + "px",
              top: `calc(-10% + ${parallax}px)`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              backgroundColor: dark ? "white" : "black",
              boxShadow: dark
                ? "0 0 6px rgba(255,0,0,0.8), 0 0 8px rgba(0,255,0,0.7), 0 0 10px rgba(0,0,255,0.9)"
                : "0 0 6px rgba(255,100,100,0.7), 0 0 8px rgba(100,255,100,0.7), 0 0 10px rgba(100,100,255,0.8)",
              mixBlendMode: dark ? "screen" : "multiply",
              opacity: 0.75,
              transform: `translateY(${parallax}px)`,
            }}
          ></span>
        );
      })}
    </div>
  );
}
