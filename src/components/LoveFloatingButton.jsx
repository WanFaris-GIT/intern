import React, { useEffect, useMemo, useState } from "react";
import { FaHeart } from "react-icons/fa";

import { useDarkMode } from "../context/DarkModeContext";

const VISITOR_LIKE_KEY = "likeCount:landing";
const VISITOR_LIKE_FLAG = "likeCount:landing:liked";

const LIKE_API_BASE = "/api/like-sqlite";



export default function LoveFloatingButton() {
  const { darkMode } = useDarkMode();
  const [liked, setLiked] = useState(() => {
    try {
      return localStorage.getItem(VISITOR_LIKE_FLAG) === "1";
    } catch {
      return false;
    }
  });

  const [likeCount, setLikeCount] = useState(0);


  const [burst, setBurst] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(LIKE_API_BASE, { method: "GET" });
        const data = await res.json();
        if (!alive) return;
        if (data?.ok && Number.isFinite(data.likeCount)) {
          setLikeCount(Number(data.likeCount));
        }
      } catch {
        // fallback to local cache
        try {
          const raw = localStorage.getItem(VISITOR_LIKE_KEY);
          const n = Number(raw);
          if (Number.isFinite(n) && alive) setLikeCount(n);
        } catch {
          // ignore
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const containerClass = useMemo(() => {
    if (darkMode) {
      return liked
        ? "bg-gray-900/40 border-pink-400/30 text-pink-200"
        : "bg-gray-900/40 border-gray-700/60 text-gray-100";
    }
    return liked
      ? "bg-white/50 border-pink-200/60 text-pink-700"
      : "bg-white/50 border-blue-200/60 text-blue-900";
  }, [darkMode, liked]);

  const onLove = () => {
    if (liked) return; // toggle off disabled (per requirement)

    setLiked(true);
    // start animation immediately
    setBurst(true);


    // optimistic local cache (optional)
    try {
      localStorage.setItem(VISITOR_LIKE_FLAG, "1");
    } catch {
      // ignore
    }


    (async () => {
      try {
        const res = await fetch(LIKE_API_BASE, {
          method: "POST",
          headers: {
            // best-effort client id for global dedupe
            "x-client-id": `${navigator.userAgent}`,
          },
        });
        const data = await res.json();
        if (data?.ok && Number.isFinite(data.likeCount)) {
          setLikeCount(Number(data.likeCount));
          try {
            localStorage.setItem(VISITOR_LIKE_KEY, String(data.likeCount));
          } catch {
            // ignore
          }
        }
      } catch {
        // if API fails, don't change global count, but show animation
      } finally {
        window.setTimeout(() => setBurst(false), 650);
      }
    })();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={onLove}
        className={`relative px-4 py-3 rounded-2xl shadow-lg border backdrop-blur-xl flex items-center gap-3 text-sm font-semibold transition-colors overflow-hidden ${containerClass}`}
        aria-label="Like"
      >
        {/* burst overlay */}
        {burst && (
          <span className="pointer-events-none absolute inset-0">
            <span className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-pink-400 rounded-full animate-[pulseBurst_650ms_ease-out_forwards]" />
            <span className="absolute left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-pink-500/60 rounded-full animate-[pulseRing_650ms_ease-out_forwards]" />
          </span>
        )}

        <span
          className={`relative inline-flex items-center justify-center transition-transform duration-200 ${
            burst ? "scale-110" : "scale-100"
          }`}
        >
          <FaHeart
            className={`text-lg transition-all duration-300 ${
              liked
                ? "text-blue-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]"
                : darkMode
                ? "text-gray-200/70"
                : "text-blue-700/70"
            } ${burst ? "animate-[heartPop_650ms_ease-out_forwards]" : ""}`}
          />
        </span>

        <span className="tabular-nums">{likeCount.toLocaleString()}</span>

        

        {/* disabled cursor */}
        <span className="sr-only">{liked ? "You have already loved" : "Click to love"}</span>
      </button>

      {/* local keyframe css */}
      <style>
        {`
        @keyframes heartPop {
          0% { transform: scale(1); filter: brightness(1); }
          35% { transform: scale(1.35); filter: brightness(1.15); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        @keyframes pulseBurst {
          0% { transform: scale(0.8); opacity: 0.9; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.9); opacity: 0.55; }
          100% { transform: scale(5); opacity: 0; }
        }
        `}
      </style>
    </div>
  );
}

