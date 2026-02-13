// ParticleBackground.tsx
import { motion } from "framer-motion";

const particles = Array.from({ length: 24 });

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/10 blur-2xl"
          style={{
            width: `${16 + Math.random() * 32}px`,
            height: `${16 + Math.random() * 32}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.5 + Math.random() * 0.3,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
