import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heartbeat from "./components/Heartbeat";
import LoveMessage from "./components/LoveMessage";
import LoveCard from "./components/LoveCard";
import RoseAnimation from "./components/RoseAnimation"; // New component
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="nav-container">
        <Link to="/">💓 Heartbeat</Link>
        <Link to="/love-message">❤️ Love Message</Link>
        <Link to="/love-card">💌 Love Card</Link>
        <Link to="/rose-animation">🌹 Rose Animation</Link> {/* New Route Link */}
      </div>
      <Routes>
        <Route path="/" element={<Heartbeat />} />
        <Route path="/love-message" element={<LoveMessage />} />
        <Route path="/love-card" element={<LoveCard />} />
        <Route path="/rose-animation" element={<RoseAnimation />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}
