import { useState, useRef, useCallback } from "react";

// Each index gets a fixed, wide rotation so back cards fan out visibly
const ROTATIONS = [-8, 7, -11, 9, -6, 10, -7];

// Per-card x/y nudge so they peek from different directions, not just stack behind
const OFFSETS = [
  { x: -18, y: 6  },
  { x:  14, y: -8 },
  { x: -10, y: 10 },
  { x:  20, y: 4  },
  { x: -16, y: -6 },
  { x:  10, y: 8  },
  { x: -20, y: -4 },
];

function StackedImageCarousel({ images = [] }) {
const [current, setCurrent] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [dragDeltaY, setDragDeltaY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocityX, setVelocityX] = useState(0);
  const [velocityY, setVelocityY] = useState(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const lastTime = useRef(0);
  const N = images.length;

  const advance = useCallback(() => setCurrent(prev => (prev + 1) % N), [N]);
  const retreat = useCallback(() => setCurrent(prev => (prev - 1 + N) % N), [N]);

  const getStyle = (i) => {
    const rel = (i - current + N) % N;

    // Top card — draggable in 2D
    if (rel === 0) {
      const dx = isDragging ? dragDeltaX : 0;
      const dy = isDragging ? dragDeltaY : 0;
      return {
        transform: `translate(${dx}px, ${dy}px) rotate(${dx * 0.02 + dy * 0.02}deg) scale(1)`,
        zIndex: N,
        opacity: 1,
        transition: isDragging ? "none" : "transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s",
      };
    }

    // Last card — hidden
    if (rel === N - 1) {
      return {
        transform: `translate(0px, 0px) rotate(0deg) scale(0.82)`,
        zIndex: 0,
        opacity: 0,
        transition: "transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s",
      };
    }

    // Back cards — dynamic offset based on recent drag direction
    const depth = Math.min(rel, 4);
    const rot = ROTATIONS[i % ROTATIONS.length];
    const off = OFFSETS[i % OFFSETS.length];
    const dragInfluenceX = dragDeltaX * 0.1;
    const dragInfluenceY = dragDeltaY * 0.1;
    const scaledRot = rot * (0.5 + depth * 0.35);
    const scaledX = (off.x + dragInfluenceX) * (0.5 + depth * 0.3);
    const scaledY = (off.y + dragInfluenceY) * (0.5 + depth * 0.3);

    return {
      transform: `translate(${scaledX}px, ${scaledY}px) rotate(${scaledRot}deg) scale(${1 - depth * 0.05})`,
      zIndex: N - rel,
      opacity: Math.max(0.5, 1 - depth * 0.15),
      transition: "transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s",
    };
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startY.current = e.clientY;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
    lastTime.current = Date.now();
    setDragDeltaX(0);
    setDragDeltaY(0);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const now = Date.now();
    const dt = now - lastTime.current;
    const deltaX = e.clientX - startX.current;
    const deltaY = e.clientY - startY.current;
    setDragDeltaX(deltaX);
    setDragDeltaY(deltaY);
    // Velocity
    if (dt > 0) {
      setVelocityX((e.clientX - lastX.current) / dt);
      setVelocityY((e.clientY - lastY.current) / dt);
    }
    lastX.current = e.clientX;
    lastY.current = e.clientY;
    lastTime.current = now;
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    const dist = Math.sqrt(dragDeltaX**2 + dragDeltaY**2);
    if (dist > 60) {
      const angle = Math.atan2(dragDeltaY, dragDeltaX);
      // Quadrants: left/down quadrants -> advance, right/up -> retreat
      if (angle > 0.785 || angle < -0.785 || angle > 2.356 || angle < -2.356) { // left/down
        advance();
      } else {
        retreat();
      }
    }
    setIsDragging(false);
    setDragDeltaX(0);
    setDragDeltaY(0);
    setVelocityX(0);
    setVelocityY(0);
  };

  const onTouchStart = (e) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    lastX.current = e.touches[0].clientX;
    lastY.current = e.touches[0].clientY;
    lastTime.current = Date.now();
    setDragDeltaX(0);
    setDragDeltaY(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const now = Date.now();
    const dt = now - lastTime.current;
    const deltaX = e.touches[0].clientX - startX.current;
    const deltaY = e.touches[0].clientY - startY.current;
    setDragDeltaX(deltaX);
    setDragDeltaY(deltaY);
    // Velocity
    if (dt > 0) {
      setVelocityX((e.touches[0].clientX - lastX.current) / dt);
      setVelocityY((e.touches[0].clientY - lastY.current) / dt);
    }
    lastX.current = e.touches[0].clientX;
    lastY.current = e.touches[0].clientY;
    lastTime.current = now;
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    const dist = Math.sqrt(dragDeltaX**2 + dragDeltaY**2);
    if (dist > 60) {
      const angle = Math.atan2(dragDeltaY, dragDeltaX);
      // Quadrants: left/down quadrants -> advance, right/up -> retreat
      if (angle > 0.785 || angle < -0.785 || angle > 2.356 || angle < -2.356) { // left/down
        advance();
      } else {
        retreat();
      }
    }
    setIsDragging(false);
    setDragDeltaX(0);
    setDragDeltaY(0);
    setVelocityX(0);
    setVelocityY(0);
  };

  if (!images.length) return null;

  return (
    <div className="flex flex-col items-center gap-3 select-none flex-shrink-0">
      {/* Stack area — extra padding so rotated cards don't clip */}
      <div
className="relative cursor-grab active:cursor-grabbing"
        style={{ width: 380, height: 290, padding: "35px" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => (
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
              src={src}
              alt={`slide ${i + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
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

      {/* Hint */}
      <p className="text-xs text-gray-400">drag to browse</p>
    </div>
  );
}

export default StackedImageCarousel;