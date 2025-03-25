import { useState } from "react";
import "./RoseAnimation.css";

export default function RoseAnimation() {
  const [showText, setShowText] = useState(false);
  const [petals, setPetals] = useState([]);

  const handleClick = () => {
    setShowText(true);
    setPetals((prev) => [
      ...prev,
      { id: Date.now(), x: Math.random() * 80 + 10 },
    ]);

    setTimeout(() => setShowText(false), 2000);
    setTimeout(() => setPetals((prev) => prev.slice(1)), 2500);
  };

  return (
    <div className="rose-container">
      <div className="rose-wrapper" onClick={handleClick}>
        <img src='./rose.png' alt="Rose" className="rose-image" />
      </div>

      {/* Floating Petals */}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="floating-petal"
          style={{ left: `${petal.x}%` }}
        >
          🍂
        </span>
      ))}

      {/* "You Are Special" Text */}
      {showText && <div className="rose-text">You Are Special 💖</div>}
    </div>
  );
}
