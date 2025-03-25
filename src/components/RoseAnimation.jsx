// import { useState } from "react";
// import "./RoseAnimation.css";

// export default function RoseAnimation() {
//   const [showText, setShowText] = useState(false);
//   const [petals, setPetals] = useState([]);

//   const handleClick = () => {
//     setShowText(true);
//     setPetals((prev) => [
//       ...prev,
//       { id: Date.now(), x: Math.random() * 80 + 10 },
//     ]);

//     setTimeout(() => setShowText(false), 2000);
//     setTimeout(() => setPetals((prev) => prev.slice(1)), 2500);
//   };

//   return (
//     <div className="rose-container">
//       <div className="rose-wrapper" onClick={handleClick}>
//         <img src='./rose.png' alt="Rose" className="rose-image" />
//       </div>

//       {/* Floating Petals */}
//       {petals.map((petal) => (
//         <span
//           key={petal.id}
//           className="floating-petal"
//           style={{ left: `${petal.x}%` }}
//         >
//           🍂
//         </span>
//       ))}

//       {/* "You Are Special" Text */}
//       {showText && <div className="rose-text">You Are Special 💖</div>}
//     </div>
//   );
// }



import { useState } from "react";
import "./RoseAnimation.css";
import { motion } from "framer-motion";

export default function RoseAnimation() {
  const [showText, setShowText] = useState(false);
  const [petals, setPetals] = useState([]);

  const handleClick = () => {
    setShowText(true);
    setPetals((prev) => [
      ...prev,
      { id: Date.now(), x: Math.random() * 80 + 10, y: 0 }
    ]);

    setTimeout(() => setShowText(false), 2000);
    setTimeout(() => setPetals((prev) => prev.slice(1)), 3000);
  };

  return (
    <div className="rose-container">
      <motion.div
        className="rose-wrapper"
        whileTap={{ scale: 1.1 }}
        whileHover={{ filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 0.7))" }}
        onClick={handleClick}
      >
        <img src="./rose.png" alt="Rose" className="rose-image" />
      </motion.div>

      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="floating-petal"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          exit={{ opacity: 0, y: -150 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ left: `${petal.x}%` }}
        >
          🍂
        </motion.span>
      ))}

      {showText && (
        <motion.div 
          className="rose-text" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          You Are Special 💖
        </motion.div>
      )}
    </div>
  );
}
