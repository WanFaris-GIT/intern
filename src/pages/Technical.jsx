import { useDarkMode } from "../context/DarkModeContext";
import AuroraBackground from "../components/Aurora";

function Technical() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-300 text-center drop-shadow-lg mb-8">
          Technical Report
        </h1>
        <p className={`text-center text-lg ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Project yang dibangunkan dan teknologi digunakan.
        </p>
      </div>
    </div>
  );
}

export default Technical;

