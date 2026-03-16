import React from "react";

const cubeStyles = `
.cube-scene {
  width: 28px;
  height: 28px;
  perspective: 80px;
}
.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 4s linear infinite;
}
@keyframes rotateCube {
  0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); }
}
.cube__face {
  position: absolute;
  width: 28px;
  height: 28px;
  border: 1.5px solid rgba(96, 165, 250, 0.8);
  background: rgba(59, 130, 246, 0.08);
  backdrop-filter: blur(2px);
}
.cube__face--front { transform: rotateY(0deg) translateZ(14px); }
.cube__face--back { transform: rotateY(180deg) translateZ(14px); }
.cube__face--right { transform: rotateY(90deg) translateZ(14px); }
.cube__face--left { transform: rotateY(-90deg) translateZ(14px); }
.cube__face--top { transform: rotateX(90deg) translateZ(14px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(14px); }
.cube__face::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 3px;
  height: 3px;
  background: #60a5fa;
  border-radius: 50%;
  box-shadow: 0 0 4px #60a5fa, 20px 0 4px #60a5fa, 0 20px 4px #60a5fa, 20px 20px 4px #60a5fa;
}
`;

const marqueeStyles = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.marquee-container {
  width: 100px;
  overflow: hidden;
}
.marquee-text {
  display: inline-block;
  animation: marquee 6s linear infinite;
  white-space: nowrap;
}
`;

export default function RotatingCube() {
  return (
    <>
      <style>{cubeStyles}</style>
      <style>{marqueeStyles}</style>
      <div className="cube-scene">
        <div className="cube">
          <div className="cube__face cube__face--front" />
          <div className="cube__face cube__face--back" />
          <div className="cube__face cube__face--right" />
          <div className="cube__face cube__face--left" />
          <div className="cube__face cube__face--top" />
          <div className="cube__face cube__face--bottom" />
        </div>
      </div>
    </>
  );
}
