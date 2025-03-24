import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div className="container">
      <div className="heart-wrapper">
        <motion.img
          src="/heart.png" 
          alt="Heart"
          className="heart"
          initial={{ scale: 1 }}
          animate={isTapped ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3, repeat: 1 }}
          onTap={() => setIsTapped(!isTapped)}
        />
      </div>
    </div>
  );
}


