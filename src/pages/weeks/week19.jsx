import { useDarkMode } from "../../context/DarkModeContext";
import AuroraBackground from "../../components/Aurora";

function Week19() {
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
        <div className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-xl transition duration-300 card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-800/40' : 'bg-white/30 border-white/40 hover:bg-white/40'
        }`}>
          
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 mb-2">
            Week 19
          </h1>
          
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            10 May 2026 - 14 May 2026
          </p>
          
          {/* Image */}
          <img
            src="/images/week1.jpg"
            alt="Week 19"
            className="rounded-2xl shadow-xl w-full object-cover mb-8 border-4 border-blue-200 hover:scale-[1.02] transition-transform duration-500"
          />
          
          {/* Content */}
          <div className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            <p className="text-lg leading-relaxed">
              During the first week, I was introduced to the company's workflow, 
              systems, and responsibilities. I learned how to organize creative 
              content materials systematically and understood the basic process 
              of managing client data and WhatsApp blasting systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Week19;

