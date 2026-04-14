import { useDarkMode } from "../../context/DarkModeContext";
import AuroraBackground from "../../components/Aurora";
import BackButton from "../../components/Backbutton";

function Week11() {
  const { darkMode } = useDarkMode();

  return (
    <section
      className="relative flex flex-col justify-center flex-grow px-6 py-20 overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      <AuroraBackground />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 10 }}>
        
        {/* Glassmorphism Card */}
        <div className={`relative max-w-4xl mx-auto px-12 md:px-24 py-8 md:py-16 backdrop-blur-xl border rounded-3xl shadow-2xl hover:shadow-xl transition duration-300 card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-800/40' : 'bg-white/30 border-white/40 hover:bg-white/40'
        }`}>

          {/* Back Button — absolute penjuru kiri atas */}
          <div style={{ position: "absolute", top: "24px", left: "24px" }}>
            <BackButton />
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 mb-2">
            Week 11
          </h1>
          
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            15 March 2026 - 19 March 2026
          </p>
          
          {/* Image */}
          <img
            src="/images/week11.jpg"
            alt="Week 11"
            className="rounded-2xl shadow-xl w-full object-cover mb-8 border-4 border-blue-200 hover:scale-[1.02] transition-transform duration-500"
          />
          
          {/* Content */}
          <div className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            <p className="text-lg leading-relaxed">
                In this week, I conducted WhatsApp blasting manually using an auto clicker. I also faced issues with account restrictions 
                due to third-party tools. This experience increased my awareness of compliance and risks in digital marketing practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Week11;

