import { useDarkMode } from "../context/DarkModeContext";
import React from "react";
import TrainingImg from "../images/intern.jpg";
import AuroraBackground from "../components/Aurora";

function Introduction() {
  const { darkMode } = useDarkMode();
  
  const importancePoints = [
    {
      title: "Professional Networking",
      desc: "Industrial training provides opportunities to build professional networks, connect with industry experts, and establish relationships that can benefit participants throughout their careers."
    },
    {
      title: "Enhanced Employability",
      desc: "Participants gain practical skills and industry knowledge that make them more attractive to potential employers, increasing their chances of securing a job."
    },
    {
      title: "Confidence Building",
      desc: "By successfully completing real-world projects and overcoming challenges, participants build confidence in their abilities, which is essential for their professional development."
    },
    {
      title: "Career Clarity",
      desc: "It helps participants gain clarity about their career goals and interests by exposing them to various aspects of their chosen industry, allowing them to make informed career decisions."
    },
  ];

  return (
    <section
      className="flex flex-col items-center px-6 py-20 min-h-[calc(100vh-64px)] relative overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      {/* CONTENT */}
      <div className="w-full max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 text-center drop-shadow-lg mb-2">
          Introduction to Industrial Training
        </h1>
        <p className={`text-center text-base md:text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Understanding the concept, objectives, and importance of Industrial Training for students and professionals.
        </p>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        {/* Grid Layout: Image + Text */}
        <div className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 mb-10 hover:shadow-xl transition duration-300 card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-800/40' : 'bg-white/30 border-white/40 hover:bg-white/40'
        }`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="order-last md:order-first">
              <img
                src={TrainingImg}
                alt="Industrial Training"
                className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-500 border-4 border-blue-200"
              />
            </div>

            {/* Text Content */}
            <div className={`space-y-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-700 mb-3">What is Industrial Training?</h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Industrial training is a program designed to provide participants with practical experience and a comprehensive understanding of their chosen industry.
                  It bridges the gap between theoretical education and real-world application, enabling participants to apply their academic knowledge in a professional environment.
                  This training is crucial for students and professionals aiming to enhance their skills experience, and prepare, gain hands-on for a successful career in their respective fields.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-700 mb-3">Objectives of Industrial Training</h2>
                <ul className={`list-disc list-inside space-y-2 text-sm md:text-base ${darkMode ? 'text-gray-300' : ''}`}>
                  <li>Gain practical experience in a real industry environment.</li>
                  <li>Apply academic knowledge to solve professional tasks.</li>
                  <li>Develop soft skills such as communication and teamwork.</li>
                  <li>Understand company workflow, processes, and culture.</li>
                  <li>Prepare for a professional career after graduation.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Importance Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {importancePoints.map((point, idx) => (
            <div
              key={idx}
              className={`backdrop-blur-xl border rounded-2xl p-6 shadow-inner hover:scale-105 hover:shadow-xl transition-transform duration-300 card-glow ${
                darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
              }`}
            >
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-700 mb-2">{point.title}</h3>
              <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{point.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Introduction;

