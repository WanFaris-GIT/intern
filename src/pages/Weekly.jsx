import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import AuroraBackground from "../components/Aurora";
import { FiClipboard } from "react-icons/fi";

function Weekly() {
  const { darkMode } = useDarkMode();

  const totalWeeks = 20;

  const weeks = Array.from({ length: totalWeeks }, (_, i) => ({
    week: i + 1
  }));

  return (
    <section
      className="relative flex flex-col justify-center flex-grow px-6 py-20 overflow-hidden"
      style={{
        background:
          darkMode 
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
            : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)"
      }}
    >

      {/* Aurora Animated Background */}
      <AuroraBackground />

      {/* CONTENT */}
      <div
        className="w-full max-w-7xl mx-auto"
        style={{ zIndex: 10, position: "relative" }}
      >

        {/* Title Section */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-lg mb-4">
            Weekly Internship Summary
          </h1>

          <p className="text-gray-600 text-lg">
            Internship Duration
          </p>

          <p className="text-gray-700 font-semibold">
            04 January 2026 – 21 May 2026
          </p>

        </div>


        {/* Weeks Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {weeks.map((w) => (

            <Link key={w.week} to={`/week${w.week}`}>

              <div className="group 
                bg-white/30 
                backdrop-blur-xl 
                border border-white/40
                rounded-3xl 
                p-8 
                text-center 
                shadow-lg 
                hover:shadow-2xl 
                hover:-translate-y-3 
                hover:bg-white/40
                transition duration-300 cursor-pointer
              ">

                {/* Icon Circle */}

                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                bg-blue-600 text-white text-2xl mb-5 
                group-hover:scale-110 transition">

                  <FiClipboard />

                </div>


                {/* Week Title */}

                <h2 className="text-xl font-bold text-blue-700 mb-2">

                  Week {w.week}

                </h2>


                {/* Description */}

                <p className="text-gray-700 text-sm mb-4">

                  Internship Activity Report

                </p>


                {/* Button */}

                <div className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-700 transition">

                  View Details →

                </div>

              </div>

            </Link>

          ))}

        </div>


        {/* Bottom Info */}

        <div className="text-center mt-20">

          <div className="inline-block bg-white/30 backdrop-blur-xl border border-white/40 px-8 py-4 rounded-xl shadow">

            <p className="text-gray-700 text-sm">
              This section provides a weekly summary of activities completed
              during the internship period.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Weekly;