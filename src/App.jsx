// import { useState } from "react";
// import { motion } from "framer-motion";
// import "./App.css";

// export default function App() {
//   const [isAnimating, setIsAnimating] = useState(false);

//   return (
//     <div className="container">
//       <div className="heart-wrapper">
//         <motion.img
//           src="/heart1.png"
//           alt="Heart"
//           className="heart"
//           initial={{ scale: 1 }}
//           animate={isAnimating ? { scale: [1, 1.3, 1] } : { scale: 1 }}
//           transition={{ duration: 0.3, repeat: isAnimating ? Infinity : 0 }}
//           onTap={() => setIsAnimating(!isAnimating)}
//         />
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const handleTap = () => {
    setIsAnimating(!isAnimating);

    // Add a floating heart
    setFloatingHearts((prev) => [
      ...prev,
      { id: Date.now(), x: Math.random() * 100 - 50 },
    ]);

    // Remove heart after animation
    setTimeout(() => {
      setFloatingHearts((prev) => prev.slice(1));
    }, 1000);
  };

  return (
    <div className="container">
      <div className="heart-wrapper">
        {/* Floating Hearts */}
        <AnimatePresence>
          {floatingHearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="floating-heart"
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: -80, scale: 1 }}
              exit={{ opacity: 0, y: -120, scale: 1.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ left: `${heart.x}%` }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Main Heart Animation */}
        <motion.img
          src="/heart1.png"
          alt="Heart"
          className="heart"
          initial={{ scale: 1, filter: "brightness(1)" }}
          animate={
            isAnimating
              ? { 
                  scale: [1, 1.4, 1], 
                  filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"], 
                }
              : { scale: 1, filter: "brightness(1)" }
          }
          transition={{ duration: 0.4, repeat: isAnimating ? Infinity : 0, ease: "easeInOut" }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          onTap={handleTap}
        />
      </div>
    </div>
  );
}
