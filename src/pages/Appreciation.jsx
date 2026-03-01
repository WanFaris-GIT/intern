const auroraStyles = `
  @keyframes float1 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
    25%  { transform: translate(150px, -100px) scale(1.3); opacity: 0.8; }
    50%  { transform: translate(80px, 130px) scale(0.85); opacity: 0.5; }
    75%  { transform: translate(-120px, 50px) scale(1.2); opacity: 0.7; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
  }
  @keyframes float2 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
    25%  { transform: translate(-160px, 110px) scale(1.35); opacity: 0.75; }
    50%  { transform: translate(-80px, -130px) scale(0.8); opacity: 0.5; }
    75%  { transform: translate(140px, -60px) scale(1.25); opacity: 0.8; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
  }
  @keyframes float3 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.45; }
    30%  { transform: translate(110px, 140px) scale(1.3); opacity: 0.7; }
    60%  { transform: translate(-130px, 70px) scale(0.85); opacity: 0.5; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.45; }
  }
  @keyframes float4 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.4; }
    33%  { transform: translate(-140px, -110px) scale(1.4); opacity: 0.7; }
    66%  { transform: translate(150px, 90px) scale(0.8); opacity: 0.4; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.4; }
  }
  @keyframes float5 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
    20%  { transform: translate(100px, -150px) scale(1.3); opacity: 0.75; }
    40%  { transform: translate(-110px, -80px) scale(0.85); opacity: 0.4; }
    60%  { transform: translate(-150px, 110px) scale(1.35); opacity: 0.7; }
    80%  { transform: translate(120px, 80px) scale(0.9); opacity: 0.5; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
  }

  .float1 { animation: float1 4s ease-in-out infinite; }
  .float2 { animation: float2 5s ease-in-out infinite; }
  .float3 { animation: float3 3.5s ease-in-out infinite; }
  .float4 { animation: float4 4.5s ease-in-out infinite; }
  .float5 { animation: float5 6s ease-in-out infinite; }
`;

function Appreciation() {
  return (
    <>
      <style>{auroraStyles}</style>

      <div className="min-h-screen py-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)" }}>

        {/* AURORA BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>

          <div className="float1 absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, #3b82f6, #1d4ed8)", filter: "blur(100px)", opacity: 0.5 }}></div>

          <div className="float2 absolute top-[5%] right-[-15%] w-[550px] h-[550px] rounded-full"
            style={{ background: "radial-gradient(circle, #6366f1, #4338ca)", filter: "blur(90px)", opacity: 0.45 }}></div>

          <div className="float3 absolute bottom-[-15%] left-[15%] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, #38bdf8, #0284c7)", filter: "blur(100px)", opacity: 0.4 }}></div>

          <div className="float4 absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, #2dd4bf, #0f766e)", filter: "blur(85px)", opacity: 0.4 }}></div>

          <div className="float5 absolute top-[40%] left-[30%] w-[450px] h-[450px] rounded-full"
            style={{ background: "radial-gradient(circle, #818cf8, #4f46e5)", filter: "blur(80px)", opacity: 0.45 }}></div>

          <div className="float1 absolute top-[60%] right-[20%] w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, #60a5fa, #2563eb)", filter: "blur(85px)", opacity: 0.4 }}></div>

          <div className="float3 absolute top-[20%] left-[45%] w-[350px] h-[350px] rounded-full"
            style={{ background: "radial-gradient(circle, #67e8f9, #0891b2)", filter: "blur(75px)", opacity: 0.35 }}></div>

          <div className="float2 absolute bottom-[25%] left-[-5%] w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, #a5b4fc, #3730a3)", filter: "blur(80px)", opacity: 0.4 }}></div>

        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto relative" style={{ zIndex: 10 }}>

          {/* TITLE */}
          <h1 className="text-2xl md:text-5xl font-extrabold mb-20 text-center drop-shadow-lg"
            style={{ background: "linear-gradient(90deg, #1d4ed8, #4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Dedication & Appreciation
          </h1>

          {/* DEDICATION */}
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 mb-24 border-l-8 border-blue-500">

            <h2 className="text-2xl font-bold text-blue-700 mb-6 tracking-wide">
              DEDICATIONS
            </h2>

            <p className="text-gray-700 leading-loose text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600">
              I offer my sincere thanks to Allah, the Almighty, the Most Gracious, and the Most Merciful, for His blessings and
              guidance that have accompanied me throughout my internship journey. His strength, persistence, and inspiration have
              given me the drive to successfully complete my six-month industrial training at Hit Digital Marketing Sdn Bhd,
              from January 29 to June 14.

              <br /><br />

              I want to express my profound gratitude to my family, especially my parents, who have been there for me from the
              beginning of my diploma studies. I appreciate your unwavering love, selflessness, and wisdom. Your resolute assistance
              has been my beacon of hope, lighting my path and molding me into the person I am today.

              <br /><br />

              Last but not least, I would like to acknowledge my industry supervisor at Hit Digital Marketing Sdn Bhd,
              Encik Muhammad Afiq Bin Azahar, as well as my supervisor from Politeknik Sultan Idris Shah. Your advice, experience,
              and support have been helpful throughout my internship and the preparation of this final report.
            </p>
          </div>

          {/* APPRECIATION */}
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 border-l-8 border-indigo-500">

            <h2 className="text-2xl font-bold text-indigo-600 mb-6 tracking-wide">
              APPRECIATIONS
            </h2>

            <p className="text-gray-700 leading-loose text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-indigo-500">
              First and foremost, I'd like to thank Allah for directing me into this profession and allowing me to complete this
              report within the stipulated timeframe. His presence has been a consistent source of comfort and support throughout
              my academic career and industrial training, particularly during challenging periods.

              <br /><br />

              I would want to thank my family, particularly my parents, for their continuous support and guidance throughout my studies.
              Their sacrifices and wisdom helped shape who I am today.

              <br /><br />

              Finally, I want to convey my heartfelt gratitude to my supervisor, Encik Muhammad Afiq Bin Azahar, for his advice,
              expertise, and support throughout my six months of training. Your guidance has inspired me to try new things and
              strive for greatness during my internship.

              <br /><br />

              I would also like to take this opportunity to sincerely apologize for any shortcomings or mistakes I may have made
              during my time undergoing this industrial training.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Appreciation;