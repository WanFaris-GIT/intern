import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

function NextWeekButton({ to }) {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  if (!to) return null;

  return (
    <div style={{ position: "absolute", top: "24px", right: "24px" }}>
      <button
        onClick={() => navigate(to)}
        aria-label="Next week"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s ease",
          outline: "none",
          userSelect: "none",
          background: darkMode ? "#1e1e2e" : "#e8edf5",
          color: darkMode ? "#a5b4fc" : "#4f6ef7",
          boxShadow: darkMode
            ? "5px 5px 12px #0d0d1a, -5px -5px 12px #6366f1"
            : "5px 5px 12px #c8cdd8, -5px -5px 12px #ffffff",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = darkMode
            ? "3px 3px 8px #0d0d1a, -3px -3px 8px #6366f1"
            : "3px 3px 8px #c8cdd8, -3px -3px 8px #ffffff";
          e.currentTarget.style.transform = "scale(0.96)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = darkMode
            ? "5px 5px 12px #0d0d1a, -5px -5px 12px #6366f1"
            : "5px 5px 12px #c8cdd8, -5px -5px 12px #ffffff";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.boxShadow = darkMode
            ? "inset 3px 3px 8px #0d0d1a, inset -3px -3px 8px #6366f1"
            : "inset 3px 3px 8px #c8cdd8, inset -3px -3px 8px #ffffff";
          e.currentTarget.style.transform = "scale(0.93)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.boxShadow = darkMode
            ? "5px 5px 12px #0d0d1a, -5px -5px 12px #6366f1"
            : "5px 5px 12px #c8cdd8, -5px -5px 12px #ffffff";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default NextWeekButton;

