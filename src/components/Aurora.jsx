import React from "react";

const auroraStyles = `
  @keyframes amoeba1 {
    0%   { transform: translate(0px, 0px) scale(1, 1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; opacity: 0.5; }
    8%   { transform: translate(180px, -90px) scale(1.3, 0.8); border-radius: 40% 60% 70% 30% / 50% 60% 40% 50%; opacity: 0.7; }
    18%  { transform: translate(250px, 80px) scale(0.8, 1.4); border-radius: 70% 30% 50% 50% / 30% 70% 30% 70%; opacity: 0.4; }
    28%  { transform: translate(100px, 200px) scale(1.4, 0.85); border-radius: 50% 50% 40% 60% / 70% 40% 60% 30%; opacity: 0.65; }
    38%  { transform: translate(-150px, 180px) scale(0.85, 1.3); border-radius: 30% 70% 60% 40% / 40% 50% 50% 60%; opacity: 0.5; }
    48%  { transform: translate(-280px, 60px) scale(1.2, 1.1); border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; opacity: 0.6; }
    58%  { transform: translate(-220px, -160px) scale(0.9, 0.85); border-radius: 40% 60% 50% 50% / 60% 30% 70% 40%; opacity: 0.45; }
    68%  { transform: translate(-60px, -240px) scale(1.3, 1.0); border-radius: 70% 30% 40% 60% / 30% 60% 40% 70%; opacity: 0.7; }
    78%  { transform: translate(130px, -200px) scale(1.0, 1.35); border-radius: 50% 50% 70% 30% / 50% 40% 60% 50%; opacity: 0.55; }
    88%  { transform: translate(200px, -100px) scale(1.15, 0.9); border-radius: 35% 65% 45% 55% / 55% 35% 65% 45%; opacity: 0.6; }
    100% { transform: translate(0px, 0px) scale(1, 1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; opacity: 0.5; }
  }

  @keyframes amoeba2 {
    0%   { transform: translate(0px, 0px) scale(1, 1); border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; opacity: 0.45; }
    11%  { transform: translate(-220px, 130px) scale(1.4, 0.75); border-radius: 60% 40% 30% 70% / 40% 60% 40% 60%; opacity: 0.7; }
    22%  { transform: translate(-300px, -50px) scale(0.75, 1.4); border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%; opacity: 0.5; }
    33%  { transform: translate(-180px, -220px) scale(1.2, 0.9); border-radius: 70% 30% 40% 60% / 30% 70% 30% 70%; opacity: 0.65; }
    44%  { transform: translate(80px, -260px) scale(0.85, 1.3); border-radius: 50% 50% 60% 40% / 50% 50% 50% 50%; opacity: 0.4; }
    55%  { transform: translate(240px, -140px) scale(1.3, 0.8); border-radius: 40% 60% 30% 70% / 70% 30% 60% 40%; opacity: 0.7; }
    66%  { transform: translate(280px, 100px) scale(0.8, 1.2); border-radius: 65% 35% 55% 45% / 45% 65% 35% 55%; opacity: 0.5; }
    77%  { transform: translate(160px, 230px) scale(1.1, 0.9); border-radius: 30% 70% 45% 55% / 60% 40% 55% 45%; opacity: 0.6; }
    88%  { transform: translate(-70px, 200px) scale(0.9, 1.25); border-radius: 55% 45% 65% 35% / 35% 65% 40% 60%; opacity: 0.45; }
    100% { transform: translate(0px, 0px) scale(1, 1); border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; opacity: 0.45; }
  }

  @keyframes amoeba3 {
    0%   { transform: translate(0px, 0px) scale(1, 1); border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%; opacity: 0.4; }
    14%  { transform: translate(200px, -170px) scale(0.8, 1.4); border-radius: 30% 70% 40% 60% / 60% 40% 70% 30%; opacity: 0.65; }
    28%  { transform: translate(310px, 60px) scale(1.35, 0.85); border-radius: 50% 50% 70% 30% / 30% 70% 40% 60%; opacity: 0.4; }
    42%  { transform: translate(180px, 230px) scale(1.0, 1.3); border-radius: 60% 40% 30% 70% / 50% 50% 60% 40%; opacity: 0.6; }
    57%  { transform: translate(-100px, 280px) scale(1.3, 0.8); border-radius: 40% 60% 60% 40% / 70% 30% 50% 50%; opacity: 0.45; }
    71%  { transform: translate(-270px, 130px) scale(0.85, 1.2); border-radius: 65% 35% 45% 55% / 45% 55% 65% 35%; opacity: 0.65; }
    85%  { transform: translate(-230px, -100px) scale(1.2, 0.9); border-radius: 35% 65% 55% 45% / 60% 40% 35% 65%; opacity: 0.4; }
    100% { transform: translate(0px, 0px) scale(1, 1); border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%; opacity: 0.4; }
  }

  @keyframes amoeba4 {
    0%   { transform: translate(0px, 0px) scale(1, 1); border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%; opacity: 0.45; }
    9%   { transform: translate(-170px, -220px) scale(1.3, 0.75); border-radius: 70% 30% 60% 40% / 40% 60% 30% 70%; opacity: 0.65; }
    19%  { transform: translate(60px, -300px) scale(0.75, 1.4); border-radius: 30% 70% 30% 70% / 70% 30% 70% 30%; opacity: 0.5; }
    30%  { transform: translate(260px, -190px) scale(1.2, 1.1); border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%; opacity: 0.7; }
    41%  { transform: translate(320px, 50px) scale(0.85, 0.85); border-radius: 40% 60% 70% 30% / 30% 70% 50% 50%; opacity: 0.4; }
    52%  { transform: translate(200px, 220px) scale(1.35, 0.8); border-radius: 55% 45% 35% 65% / 65% 35% 55% 45%; opacity: 0.6; }
    63%  { transform: translate(-50px, 290px) scale(0.8, 1.3); border-radius: 35% 65% 55% 45% / 45% 55% 65% 35%; opacity: 0.5; }
    74%  { transform: translate(-240px, 180px) scale(1.15, 0.9); border-radius: 65% 35% 45% 55% / 55% 45% 35% 65%; opacity: 0.45; }
    85%  { transform: translate(-290px, -80px) scale(0.9, 1.2); border-radius: 45% 55% 65% 35% / 35% 65% 45% 55%; opacity: 0.45; }
    93%  { transform: translate(-140px, -210px) scale(1.1, 1.0); border-radius: 60% 40% 40% 60% / 50% 50% 60% 40%; opacity: 0.6; }
    100% { transform: translate(0px, 0px) scale(1, 1); border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%; opacity: 0.45; }
  }

  .amoeba1 { animation: amoeba1 7s ease-in-out infinite; }
  .amoeba2 { animation: amoeba2 9s ease-in-out infinite; }
  .amoeba3 { animation: amoeba3 6s ease-in-out infinite; }
  .amoeba4 { animation: amoeba4 11s ease-in-out infinite; }
`;

// Shared blob color — soft bright sky blue for all 4 blobs
const BLOB_COLOR = "radial-gradient(ellipse, #93c5fd, #60a5fa)";
const BLOB_FILTER = "blur(65px)";

function AuroraBackground() {
  return (
    <>
      <style>{auroraStyles}</style>
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>

        <div className="amoeba1 absolute top-[10%] left-[5%]"
          style={{ width: "320px", height: "270px", background: BLOB_COLOR, filter: BLOB_FILTER, opacity: 0.55, borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />

        <div className="amoeba2 absolute top-[8%] right-[5%]"
          style={{ width: "260px", height: "310px", background: BLOB_COLOR, filter: BLOB_FILTER, opacity: 0.55, borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%" }} />

        <div className="amoeba3 absolute bottom-[10%] left-[8%]"
          style={{ width: "340px", height: "250px", background: BLOB_COLOR, filter: BLOB_FILTER, opacity: 0.55, borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%" }} />

        <div className="amoeba4 absolute bottom-[8%] right-[5%]"
          style={{ width: "280px", height: "290px", background: BLOB_COLOR, filter: BLOB_FILTER, opacity: 0.55, borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }} />

      </div>
    </>
  );
}

export default AuroraBackground;