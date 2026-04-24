"use client"
import { motion } from "framer-motion"

// Designer Math: This generates a perfect tileable "S" curve.
// By rendering a length of 2400 and moving it exactly 1200px, it loops seamlessly forever.
const generateSineWave = (yOffset: number, amplitude: number) => {
  const yBase = 400 + yOffset;
  return `M 0 ${yBase} 
          C 300 ${yBase - amplitude}, 900 ${yBase + amplitude}, 1200 ${yBase} 
          C 1500 ${yBase - amplitude}, 2100 ${yBase + amplitude}, 2400 ${yBase}`;
}

// These arrays create the "Silk/Fiber" cluster effect.
// 1 core crisp line + adjacent thin lines + massive blurred lines for ambient volumetric glow.
const foregroundLines = [
  { y: 0, amp: 180, op: 0.8, w: 1, blur: 0 },
  { y: 5, amp: 185, op: 0.6, w: 2, blur: 0 },
  { y: -5, amp: 175, op: 0.6, w: 2, blur: 0 },
  { y: 15, amp: 195, op: 0.4, w: 4, blur: 2 },
  { y: -15, amp: 165, op: 0.4, w: 4, blur: 2 },
  { y: 0, amp: 180, op: 0.15, w: 20, blur: 12 }, // Inner Glow
  { y: 0, amp: 180, op: 0.08, w: 50, blur: 24 }, // Outer Ambient Glow
];

const backgroundLines = [
  { y: 50, amp: 240, op: 0.7, w: 1, blur: 0 },
  { y: 56, amp: 246, op: 0.5, w: 2, blur: 0 },
  { y: 44, amp: 234, op: 0.5, w: 2, blur: 0 },
  { y: 65, amp: 255, op: 0.3, w: 4, blur: 2 },
  { y: 35, amp: 225, op: 0.3, w: 4, blur: 2 },
  { y: 50, amp: 240, op: 0.15, w: 24, blur: 12 }, // Inner Glow
  { y: 50, amp: 240, op: 0.08, w: 60, blur: 24 }, // Outer Ambient Glow
];

export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blend Modes: Gives it that glassy, overlapping enterprise look */}
      <div className="absolute inset-0 mix-blend-multiply dark:mix-blend-screen opacity-[0.6] dark:opacity-[0.8] transition-opacity duration-700">
        
        {/* preserveAspectRatio="none" stretches our 1200px math coordinates to fit any screen perfectly */}
        <svg className="w-full h-[150%] absolute top-[-25%] left-0" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            {/* Seamless Tileable Gradients */}
            <linearGradient id="grad-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--brand-normal)" />
              <stop offset="25%" stopColor="var(--brand-dark)" />
              <stop offset="50%" stopColor="var(--brand-normal)" />
              <stop offset="75%" stopColor="var(--brand-dark)" />
              <stop offset="100%" stopColor="var(--brand-normal)" />
            </linearGradient>

            <linearGradient id="grad-turquoise" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-turquoise)" />
              <stop offset="25%" stopColor="#8c87a6" /> {/* Neutral transition */}
              <stop offset="50%" stopColor="var(--accent-turquoise)" />
              <stop offset="75%" stopColor="#8c87a6" />
              <stop offset="100%" stopColor="var(--accent-turquoise)" />
            </linearGradient>

            {/* Hardware-accelerated SVG Blurs for the glow effect */}
            <filter id="blur-2"><feGaussianBlur stdDeviation="2" /></filter>
            <filter id="blur-12"><feGaussianBlur stdDeviation="12" /></filter>
            <filter id="blur-24"><feGaussianBlur stdDeviation="24" /></filter>
          </defs>

          {/* BACKGROUND RIBBON (Flows Right, Breathes Up/Down) */}
          <motion.g
            animate={{ x: [-1200, 0], y: [0, -30, 0] }}
            transition={{
              x: { repeat: Infinity, duration: 35, ease: "linear" },
              y: { repeat: Infinity, duration: 18, ease: "easeInOut" } // Parallax breathing
            }}
          >
            {backgroundLines.map((line, idx) => (
              <path
                key={`bg-${idx}`}
                d={generateSineWave(line.y, line.amp)}
                fill="none"
                stroke="url(#grad-turquoise)"
                strokeWidth={line.w}
                opacity={line.op}
                filter={line.blur ? `url(#blur-${line.blur})` : undefined}
                className="will-change-transform"
              />
            ))}
          </motion.g>

          {/* FOREGROUND RIBBON (Flows Left, Breathes Down/Up) */}
          <motion.g
            animate={{ x: [0, -1200], y: [0, 40, 0] }}
            transition={{
              x: { repeat: Infinity, duration: 25, ease: "linear" },
              y: { repeat: Infinity, duration: 14, ease: "easeInOut" } // Parallax breathing
            }}
          >
            {foregroundLines.map((line, idx) => (
              <path
                key={`fg-${idx}`}
                d={generateSineWave(line.y, line.amp)}
                fill="none"
                stroke="url(#grad-magenta)"
                strokeWidth={line.w}
                opacity={line.op}
                filter={line.blur ? `url(#blur-${line.blur})` : undefined}
                className="will-change-transform"
              />
            ))}
          </motion.g>
        </svg>
      </div>
    </div>
  )
}
