import { useState, useRef, useCallback } from "react";

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
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [dragDeltaY, setDragDeltaY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const lastTime = useRef(0);

  const N = images.length;

  const advance = useCallback(() => setCurrent((prev) => (prev + 1) % N), [N]);
  const retreat = useCallback(() => setCurrent((prev) => (prev - 1 + N) % N), [N]);

  const getStyle = (i) => {
    const rel = (i - current + N) % N;

    if (rel === 0) {
      const dx = isDragging ? dragDeltaX : 0;
      const dy = isDragging ? dragDeltaY : 0;
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

    // Jangan treat card paling belakang secara khas (rel === N-1).
    // Sebab bila jumlah item tertentu, card ini mudah jadi terlalu kecil/opacity rendah lalu nampak seolah-olah “hilang”.
    // Biarkan semua card ikut formula depth yang sama.
    const dragInfluenceX = dragDeltaX * 0.1;
    const dragInfluenceY = dragDeltaY * 0.1;

    // Kurangkan “loss” visual untuk rel yang jauh supaya card tak nampak hilang bila N berubah (contoh 5 item: 1/5 nampak)
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

  const onMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startY.current = e.clientY;
    lastTime.current = Date.now();
    setDragDeltaX(0);
    setDragDeltaY(0);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setDragDeltaX(e.clientX - startX.current);
    setDragDeltaY(e.clientY - startY.current);
  };

  const onMouseUp = () => {
    if (!isDragging) return;

    const dist = Math.sqrt(dragDeltaX ** 2 + dragDeltaY ** 2);
    if (dist > 60) {
      const angle = Math.atan2(dragDeltaY, dragDeltaX);
      if (
        angle > 0.785 ||
        angle < -0.785 ||
        angle > 2.356 ||
        angle < -2.356
      ) {
        advance();
      } else {
        retreat();
      }
    }

    setIsDragging(false);
    setDragDeltaX(0);
    setDragDeltaY(0);
  };

  const onTouchStart = (e) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    lastTime.current = Date.now();
    setDragDeltaX(0);
    setDragDeltaY(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    setDragDeltaX(e.touches[0].clientX - startX.current);
    setDragDeltaY(e.touches[0].clientY - startY.current);
  };

  const onTouchEnd = () => {
    onMouseUp();
  };

  if (!images.length) return null;

  return (
    <div className="flex flex-col items-center gap-3 select-none flex-shrink-0">
      <div
        className="relative cursor-grab active:cursor-grabbing"
        style={{ width: 420, height: 320, padding: "35px", overflow: "visible" }}
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
              className="absolute overflow-hidden shadow-xl border border-white/20"
              style={{
                width: 330,
                height: 235,
                top: 0,
                left: 0,
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

      <p className="text-xs text-gray-400">drag to browse</p>
    </div>
  );
}

export default StackedImageCarousel;

