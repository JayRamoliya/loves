import { useState, useEffect } from "react";
import "./LoveCard.css";

export default function LoveCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
  }, [isFlipped]);

  return (
    <div className="container">
      <div
        className={`love-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-inner">
          <div className="card-front">💌 Tap for Love</div>
          <div className="card-back">
            ❤️ You Are My Everything! 💖  
            <p className="love-message">Forever & Always, My Love! 😘</p>
          </div>
        </div>
        <div className="floating-hearts">❤️💖💓</div>
      </div>

      {showConfetti && <div className="confetti">🎉🎊✨</div>}

      <button className="flip-button" onClick={() => setIsFlipped(!isFlipped)}>
        {isFlipped ? "Close" : "Open"} Love Card
      </button>
    </div>
  );
}
