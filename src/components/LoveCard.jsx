import { useState } from "react";
import "./LoveCard.css";

export default function LoveCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="love-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">💌 Click for Love</div>
        <div className="card-back">❤️ You Are Loved!</div>
      </div>
    </div>
  );
}
