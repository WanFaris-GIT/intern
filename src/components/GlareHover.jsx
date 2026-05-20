import { useEffect, useRef } from "react";

function GlareImage({ src, alt, className }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const updateGlare = () => {
    rafRef.current = null;
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = pointerRef.current.x - rect.left;
    const y = pointerRef.current.y - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.45) 0%, transparent 70%)`;
    glare.style.opacity = "1";
  };

  const handleMouseMove = (e) => {
    pointerRef.current = { x: e.clientX, y: e.clientY };
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(updateGlare);
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
    glare.style.opacity = "0";
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: "50%",
        transition: "transform 0.15s ease",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      <img src={src} alt={alt} className={className} />

      {/* Glare Layer */}
      <div
        ref={glareRef}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

export default GlareImage;