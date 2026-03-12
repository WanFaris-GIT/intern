import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import AuroraBackground from "../components/Aurora";


function ExecutiveSummary() {
  const { darkMode } = useDarkMode();
  
  return (
    <section
      className="relative flex flex-col justify-center flex-grow px-6 py-20 overflow-hidden min-h-screen"
      style={{
        background:
          darkMode 
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
            : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      {/* CONTENT */}
      <div
        className="w-full max-w-6xl mx-auto"
        style={{ zIndex: 10, position: "relative" }}
      >
        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 text-center drop-shadow-lg mb-2">
            Executive Summary
          </h1>
        </div>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        {/* MAIN GLASS CARD */}
        <div
          className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-200 transition-all duration-300 ${
            darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
          }`}
        >
          <div className="space-y-6">
            <p className={`leading-relaxed text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              After completing my Industrial Training at HIT Digital Marketing Sdn. Bhd. under the Database Customer Management (DCM) Department, I gained valuable exposure to the professional working environment, particularly in the field of digital marketing and customer database management. The experience provided meaningful opportunities to develop practical skills and a deeper understanding of how digital marketing operations are conducted in a real organizational setting. This achievement brings a sense of pride and appreciation for the knowledge and experience gained, which will serve as a strong foundation for future career development.
            </p>
            <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              During the training period, I was involved in various tasks related to customer data management and digital marketing activities. These responsibilities included updating and organizing customer information, recording donation collections, and managing communication through the WhatsApp dashboard. I also assisted in setting up WhatsApp blasting campaigns, following up with customers, and verifying WhatsApp Business accounts to ensure smooth communication with clients and donors.
            </p>
            <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Throughout the training, I had the opportunity to observe and participate in several meetings and seminars related to WhatsApp automation tools and digital marketing strategies. These experiences enhanced my understanding of how digital marketing campaigns are planned, executed, and monitored within an organization.
            </p>
            <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              The training also provided valuable insights into workplace professionalism, teamwork, and effective communication. Although some tasks required adapting to new tools and systems, the experience strengthened my ability to learn quickly, manage responsibilities efficiently, and work collaboratively within a team.
            </p>
            <p className={`leading-relaxed text-lg first-letter:text-3xl first-letter:font-bold first-letter:text-blue-600 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              In conclusion, the Industrial Training at HIT Digital Marketing Sdn. Bhd. has been an important learning experience that contributed significantly to both my personal and professional development. The knowledge and skills gained throughout this period have prepared me to face future challenges with greater confidence, while fostering a strong appreciation for teamwork, responsibility, and continuous learning in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExecutiveSummary;

