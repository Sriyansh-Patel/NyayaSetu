// FooterWaves.jsx
import React, { useRef, useEffect, useState } from "react";

export default function FooterWaves({
  height = "24vh",        // visual height of the wave area (adjustable)
  tilt = 3,               // tilt degrees
  colorCycleMs = 6000,    // how often to switch palettes
}) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const containerRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);

  // Palettes the gradient cycles through
  const palettes = [
    ["#00B4DB", "#0083B0"], // blue
    ["#9D50BB", "#6E48AA"], // purple
    ["#EC4899", "#DB2777"], // pink
    ["#34E89E", "#0F3443"], // aqua/green
  ];
  const [palIndex, setPalIndex] = useState(0);

  // update viewport width on resize
  useEffect(() => {
    const onResize = () => setViewportWidth(containerRef.current?.clientWidth || window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // cycle palette index automatically
  useEffect(() => {
    const t = setInterval(() => setPalIndex(i => (i + 1) % palettes.length), colorCycleMs);
    return () => clearInterval(t);
  }, [colorCycleMs]);

  // smooth color transition for gradient stops: we update stop colors,
  // and rely on CSS transition on the stop elements for smooth interpolation.
  const [frontColors, setFrontColors] = useState(palettes[0]);
  const [backColors, setBackColors] = useState(palettes[1]);

  useEffect(() => {
    // front/back palettes offset so layers are harmonious
    setFrontColors(palettes[palIndex]);
    setBackColors(palettes[(palIndex + 2) % palettes.length]);
  }, [palIndex]);

  // main wave animation: generate filled path for top of wave; close path to bottom
  useEffect(() => {
    let raf = null;

    const front = frontRef.current;
    const back = backRef.current;

    // small configuration for natural water look
    const segments = 320;          // number of segments (smoothness)
    const baseAmp = 16;            // amplitude in px for front
    const backAmp = 10;            // amplitude for back (smaller)
    const baseFreq = 0.0012;       // frequency (lower = longer waves)
    const speed = 0.9;             // time multiplier for motion

    const animate = () => {
      const now = Date.now() / 1000 * speed;
      const width = containerRef.current?.clientWidth || viewportWidth;
      const heightPx = (containerRef.current?.clientHeight || (window.innerHeight * 0.24)) | 0;

      // helper to produce y value
      const yFront = x => baseAmp * Math.sin(x * baseFreq + now) + baseAmp * 0.5 * Math.sin(x * baseFreq * 1.9 + now * 0.6);
      const yBack  = x => backAmp * Math.sin(x * baseFreq * 0.9 + now * 0.9) + backAmp * 0.4 * Math.sin(x * baseFreq * 2.1 + now * 0.5);

      // build path string that is a closed polygon (top wave then to bottom right -> bottom left -> Z)
      const buildPath = (yFn, verticalOffset) => {
        let d = `M 0 ${heightPx} `; // start bottom-left
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * width;
          const yy = yFn(x) + verticalOffset;
          d += `L ${x.toFixed(2)} ${yy.toFixed(2)} `;
        }
        d += `L ${width} ${heightPx} L 0 ${heightPx} Z`;
        return d;
      };

      if (front) front.setAttribute("d", buildPath(yFront, heightPx * 0.45)); // front sits higher
      if (back)  back.setAttribute("d", buildPath(yBack, heightPx * 0.55));     // back sits a bit lower

      raf = requestAnimationFrame(animate);
    };

    // start
    animate();
    return () => raf && cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportWidth]); // re-run when width changes

  // inline styles to keep component self-contained
  const containerStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height,
    pointerEvents: "none",
    transform: `rotate(${tilt}deg)`,
    zIndex: 50,
    overflow: "hidden",
    WebkitTransform: `rotate(${tilt}deg)`,
    willChange: "transform",
  };

  // subtle shadow to make waves visible on white backgrounds
  const svgStyle = {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    mixBlendMode: "normal",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.08))",
    display: "block",
  };

  const [f0, f1] = frontColors;
  const [b0, b1] = backColors;

  return (
    <div ref={containerRef} style={containerStyle} aria-hidden>
      <svg
        style={svgStyle}
        viewBox={`0 0 ${viewportWidth} ${Math.max(150, Math.round(window.innerHeight * 0.24))}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* gradients with smooth CSS transition on stop-color */}
          <linearGradient id="gw-front" x1="0%" x2="100%">
            <stop offset="0%" stopColor={f0} style={{ transition: "stop-color 2.8s linear" }} />
            <stop offset="100%" stopColor={f1} style={{ transition: "stop-color 2.8s linear" }} />
          </linearGradient>

          <linearGradient id="gw-back" x1="0%" x2="100%">
            <stop offset="0%" stopColor={b0} style={{ transition: "stop-color 2.8s linear" }} />
            <stop offset="100%" stopColor={b1} style={{ transition: "stop-color 2.8s linear" }} />
          </linearGradient>

          {/* small blur filters for subtle softness */}
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* BACK LAYER (farther) */}
        <path
          ref={backRef}
          fill="url(#gw-back)"
          opacity="0.95"
          filter="url(#softBlur)"
        />

        {/* FRONT LAYER (nearer) */}
        <path
          ref={frontRef}
          fill="url(#gw-front)"
          opacity="1"
          filter="url(#softBlur)"
        />
      </svg>
    </div>
  );
}
