import { useEffect, useState, useRef } from "react";

function BlurText({ text, className = "", delay = 50 }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const intervalRef = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCount(words.length);
      return;
    }

    setVisibleCount(0);
    intervalRef.current = window.setInterval(() => {
      setVisibleCount((prev) => {
        if (prev + 1 >= words.length) {
          clearInterval(intervalRef.current);
          return words.length;
        }
        return prev + 1;
      });
    }, delay);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [delay, words.length]);

  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => {
        const isVisible = i < visibleCount;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              marginRight: "0.3em",
              transition: "filter 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
              filter: isVisible ? "blur(0px)" : "blur(10px)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(-20px)",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

export default BlurText;