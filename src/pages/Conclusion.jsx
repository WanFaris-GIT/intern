import { useDarkMode } from "../context/DarkModeContext";
import AuroraBackground from "../components/Aurora";

function Conclusion() {
  const { darkMode } = useDarkMode();
  
  return (
    <section
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Animated Background */}
      <AuroraBackground />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-300 drop-shadow-lg">
            Conclusion
          </h1>
          <hr className="w-full border-t-4 border-blue-400 mt-6" />
        </div>

        {/* Glass Card */}
        <div
          className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-200 transition space-y-6 leading-relaxed ${
            darkMode ? 'bg-gray-800/30 border-gray-600/30 text-gray-200' : 'bg-white/30 border-white/40 text-gray-700'
          }`}
        >
          <p>
            After undergoing Industrial Training at Hit Digital Marketing Sdn. Bhd., I have delved deeper into the world of work,
            gaining invaluable insights and experiences. This accomplishment instils a sense of pride and gratitude for the acquired
            knowledge, which will undoubtedly prove beneficial for my future endeavours. The training not only introduced me to new
            concepts but also provided early exposure to the realities of the professional world.
          </p>

          <p>
            Furthermore, this program has offered numerous opportunities for students to expand their knowledge and skills by observing
            the daily routines and diligent work ethic of the employees. It has heightened my awareness of the relevance of my academic
            subjects in achieving my career aspirations. While theoretical knowledge may not always align perfectly with the practical
            tasks during the training period, the importance of seriousness and passion in preparing for the professional world became
            clearly evident.
          </p>

          <p>
            I have gained a wealth of knowledge throughout the Industrial Training program. All the skills and insights acquired
            during this training will be utilized to the fullest extent in my future professional endeavours. Additionally,
            the experience has underscored the significance of responsibility, adaptability, and effective time management in executing
            assigned tasks within a fast-paced digital marketing environment.
          </p>

          <p>
            In conclusion, Industrial Training presents a golden opportunity for students to learn not only in academic
            and technical domains but also in every facet of an employee's role, thereby fostering the development of highly
            capable individuals. During the training, I experienced a real work environment and learned the importance of fostering
            good relationships between employees and trainees, which serves to strengthen professional bonds and cultivate a
            collaborative team spirit.
          </p>

          <p>
            I wholeheartedly recommend Hit Digital Marketing Sdn. Bhd. as an exemplary organization for industrial training.
            I deeply appreciate the opportunity, guidance, and support provided by the company throughout my training period.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Conclusion;