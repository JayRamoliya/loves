import { useState } from "react";
import { motion } from "framer-motion";

export default function Heartbeat() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="love-container">
      <motion.img
        src="/heart.png"
        alt="Heart"
        className="heart"
        initial={{ scale: 1 }}
        animate={isAnimating ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, repeat: isAnimating ? Infinity : 0 }}
        onTap={() => setIsAnimating(!isAnimating)}
      />
    </div>
  );
}
