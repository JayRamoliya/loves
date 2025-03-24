import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="container">
      <div className="heart-wrapper">
        <motion.img
          src="/heart1.png"
          alt="Heart"
          className="heart"
          initial={{ scale: 1 }}
          animate={isAnimating ? { scale: [1, 1.3, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, repeat: isAnimating ? Infinity : 0 }}
          onTap={() => setIsAnimating(!isAnimating)}
        />
      </div>
    </div>
  );
}
