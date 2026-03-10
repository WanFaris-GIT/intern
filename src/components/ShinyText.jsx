// ShinyText.jsx - letak dalam components folder

function ShinyText({ text, className = "", speed = 3 }) {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(
          120deg,
          #1e40af 0%,
          #1e40af 30%,
          #93c5fd 45%,
          #ffffff 50%,
          #93c5fd 55%,
          #1e40af 70%,
          #1e40af 100%
        )`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: `shiny ${speed}s linear infinite`,
      }}
    >
      {text}

      <style>{`
        @keyframes shiny {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </span>
  );
}

export default ShinyText;