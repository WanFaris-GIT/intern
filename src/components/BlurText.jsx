import { useEffect, useState } from "react";

function BlurText({ text, className = "", delay = 50 }) {
  const [revealed, setRevealed] = useState([]);
  const words = text.split(" ");

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setRevealed((prev) => [...prev, i]);
      }, i * delay);
    });
  }, []);

  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.3em",
            transition: "filter 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
            filter: revealed.includes(i) ? "blur(0px)" : "blur(10px)",
            opacity: revealed.includes(i) ? 1 : 0,
            transform: revealed.includes(i) ? "translateY(0px)" : "translateY(-20px)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default BlurText;