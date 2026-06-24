"use client";

import React, { useMemo } from "react";

export default function HeroBackground() {
  const points = useMemo(() => {
    const list = [];
    // Adjust center of vortex to be slightly to the left/center (matches user's image)
    const cx = 380;
    const cy = 280;
    const rings = 25; // Good density
    const dotsPerRing = 48; // Excellent curved resolution

    for (let r = 2; r < rings; r++) {
      // Exponential radius scaling gives a deep 3D perspective tunnel effect
      const radius = Math.pow(r, 1.7) * 7.5 + 25;
      
      // Gradually rotating rings creates the spiral curvature (vortex)
      const angleOffset = (r * Math.PI) / 14;
      
      // Width and height of the curved slots/rhombuses
      // As they get farther from the center, they get larger
      const width = 1.8 + (r / rings) * 15;
      const height = 0.9 + (r / rings) * 5.5;
      
      // Fade out opacity towards the center and outer boundaries for smoothness
      // Peaks in the mid-range (like a real lens/aperture radial falloff)
      const opacity = Math.sin((r / rings) * Math.PI) * 0.16 + 0.01;

      for (let d = 0; d < dotsPerRing; d++) {
        const angle = angleOffset + (d / dotsPerRing) * Math.PI * 2;
        
        // Elliptical scaling: stretch wider horizontally to mimic perspective look
        const x = cx + radius * 1.55 * Math.cos(angle);
        const y = cy + radius * 0.92 * Math.sin(angle);

        // Calculate rotation so each slot aligns precisely along the flow of the spiral curves
        const rotation = ((angle + Math.PI / 2.2) * 180) / Math.PI;

        list.push({
          x,
          y,
          width,
          height,
          rotation,
          opacity,
          key: `${r}-${d}`,
        });
      }
    }
    return list;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Underlying smooth radial glow to highlight the laser mesh effect */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_38%_46%,rgba(29,78,216,0.3)_0%,rgba(15,23,42,0)_60%)]"
        aria-hidden="true"
      />
      
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* We animate the spiral group very slowly for a premium micro-animation feel */}
        <g 
          className="animate-[spin_320s_linear_infinite]" 
          style={{ transformOrigin: "380px 280px" }}
        >
          {points.map((pt) => (
            <rect
              key={pt.key}
              x={pt.x - pt.width / 2}
              y={pt.y - pt.height / 2}
              width={pt.width}
              height={pt.height}
              rx={pt.height / 2}
              transform={`rotate(${pt.rotation}, ${pt.x}, ${pt.y})`}
              fill="currentColor"
              className="text-blue-400"
              style={{ opacity: pt.opacity }}
            />
          ))}
        </g>
      </svg>
      
      {/* Vignette / shadow overlay on bottom-right to fade into the deep red gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-950/60 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
  );
}
