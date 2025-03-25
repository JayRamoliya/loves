import { useState } from "react";
import "./LoveMessage.css";

export default function LoveMessage() {
  const [hearts, setHearts] = useState([]);
  const [showText, setShowText] = useState(false);
  const [isBeating, setIsBeating] = useState(false);

  const handleClick = () => {
    setIsBeating(true);
    setShowText(true);

    setHearts((prev) => [
      ...prev,
      { id: Date.now(), x: Math.random() * 80 + 10 }, // Random position
    ]);

    setTimeout(() => setHearts((prev) => prev.slice(1)), 2000);
    setTimeout(() => setShowText(false), 2500);
    setTimeout(() => setIsBeating(false), 500);
  };

  return (
    <div className="love-container">
      <div className={`heart-icon ${isBeating ? "beat" : ""}`} onClick={handleClick}>
        ❤️
      </div>

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{ left: `${heart.x}%` }}
        >
          ❤️
        </span>
      ))}

      {/* "I Love You" Text */}
      {showText && <div className="love-text">I Love You ❤️</div>}
    </div>
  );
}
