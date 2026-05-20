import { useState, useRef, useCallback, useEffect } from "react";

const ROTATIONS = [-8, 7, -11, 9, -6, 10, -7];

const OFFSETS = [
  { x: -18, y: 6 },
  { x: 14, y: -8 },
  { x: -10, y: 10 },
  { x: 20, y: 4 },
  { x: -16, y: -6 },
  { x: 10, y: 8 },
  { x: -20, y: -4 },
];

function StackedImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const [dragForce, setDragForce] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const dragDeltaRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const isDraggingRef = useRef(false);

  const N = images.length;

  const advance = useCallback(() => setCurrent((prev) => (prev + 1) % N), [N]);
  const retreat = useCallback(() => setCurrent((prev) => (prev - 1 + N) % N), [N]);

  const getStyle = (i) => {
    const rel = (i - current + N) % N;
    const drag = isDragging ? dragForce : { x: 0, y: 0 };

    if (rel === 0) {
      const dx = drag.x;
      const dy = drag.y;
      return {
        transform: `translate(${dx}px, ${dy}px) rotate(${dx * 0.02 + dy * 0.02}deg) scale(1)`,
        zIndex: N,
        opacity: 1,
        transition: isDragging
          ? "none"
          : "transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s",
      };
    }

    const depth = Math.min(rel, 4);
    const rot = ROTATIONS[i % ROTATIONS.length];
    const off = OFFSETS[i % OFFSETS.length];
    const dragInfluenceX = drag.x * 0.1;
    const dragInfluenceY = drag.y * 0.1;
    const scaledRot = rot * (0.35 + depth * 0.25);
    const scaledX = (off.x + dragInfluenceX) * (0.45 + depth * 0.18);
    const scaledY = (off.y + dragInfluenceY) * (0.45 + depth * 0.18);
    const scale = Math.max(0.92, 1 - depth * 0.025);
    const opacity = Math.max(0.78, 1 - depth * 0.07);

    return {
      transform: `translate(${scaledX}px, ${scaledY}px) rotate(${scaledRot}deg) scale(${scale})`,
      zIndex: N - rel,
      opacity,
      transition: "transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s",
    };
  };

  const tickDrag = () => {
    if (!isDraggingRef.current) return;
    const drag = dragDeltaRef.current;
    setDragForce({ x: drag.x, y: drag.y });
    animationFrameRef.current = requestAnimationFrame(tickDrag);
  };

  const startDrag = (x, y) => {
    setIsDragging(true);
    isDraggingRef.current = true;
    startX.current = x;
    startY.current = y;
    dragDeltaRef.current = { x: 0, y: 0 };
    setDragForce({ x: 0, y: 0 });
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(tickDrag);
  };

  const finishDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const { x, y } = dragDeltaRef.current;
    const dist = Math.sqrt(x * x + y * y);
    if (dist > 60) {
      const angle = Math.atan2(y, x);
      if (angle > 0.785 || angle < -0.785 || angle > 2.356 || angle < -2.356) {
        advance();
      } else {
        retreat();
      }
    }

    dragDeltaRef.current = { x: 0, y: 0 };
    setDragForce({ x: 0, y: 0 });
  };

  const onMouseDown = (e) => {
    startDrag(e.clientX, e.clientY);
  };

  const onMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    dragDeltaRef.current = {
      x: e.clientX - startX.current,
      y: e.clientY - startY.current,
    };
  };

  const onMouseUp = () => {
    finishDrag();
  };

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    if (!touch) return;
    startDrag(touch.clientX, touch.clientY);
  };

  const onTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const touch = e.touches[0];
    if (!touch) return;
    dragDeltaRef.current = {
      x: touch.clientX - startX.current,
      y: touch.clientY - startY.current,
    };
  };

  const onTouchEnd = () => {
    finishDrag();
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  if (!images.length) return null;

  return (
    <div className="flex flex-col items-center gap-3 select-none flex-shrink-0 w-full max-w-[420px]">
      <div
        className="relative cursor-grab active:cursor-grabbing w-full"
        style={{ paddingTop: "72%", overflow: "visible" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => {
          // Normalize incoming image paths so they work reliably with Vite dev server/router.
          // - If someone passes "/images/..." (from public/images), resolve it using import.meta.url.
          // - Otherwise, keep as-is (allows already-resolved URLs / data URLs).
          const resolvedSrc = (() => {
            if (typeof src !== "string") return src;
            if (src.startsWith("/images/")) {
              // Prefer absolute public URL.
              // Also handle potential double-leading-slash or accidental whitespace.
              return src.trim().replace(/^\/+/, "/");
            }
            return src;
          })();

          return (
            <div
              key={i}
              className="absolute inset-0 overflow-hidden shadow-xl border border-white/20"
              style={{
                transformOrigin: "center center",
                ...getStyle(i),
              }}
            >
              <img
                src={resolvedSrc}
                alt={`slide ${i + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
                onError={(e) => {
                  // Prevent “blank” slides; log which image path is failing.
                  console.error('[StackedImageCarousel] image failed:', resolvedSrc);
                  const img = e.currentTarget;
                  img.onerror = null;
                  // fallback: try to load the same file from /src/images if it exists in case paths differ
                  if (typeof resolvedSrc === 'string' && resolvedSrc.startsWith('/images/')) {
                    img.src = resolvedSrc;
                  }
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex gap-1.5 items-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === current ? 14 : 6,
              height: 6,
              background: i === current ? "#3b82f6" : "rgba(156,163,175,0.5)",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default StackedImageCarousel;

