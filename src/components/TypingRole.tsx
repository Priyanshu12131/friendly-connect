// TypingRole.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "VLSI Engineer"
];

export default function TypingRole() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(roles[0].slice(0, 1));
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (display.length < roles[index].length) {
        timeout = setTimeout(() => {
          setDisplay(roles[index].slice(0, display.length + 1));
        }, 60);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 1200);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, 30);
      } else {
        setIndex((index + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, index]);

  return (
    <motion.span
      className="gradient-text font-bold"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {display}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
}
