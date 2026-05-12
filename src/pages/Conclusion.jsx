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
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 drop-shadow-lg">
            Conclusion
          </h1>
          <hr className="w-full border-t-4 border-blue-400 mt-6" />
        </div>

        {/* Glass Card */}
        <div
          className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-200 transition card-glow space-y-6 leading-relaxed ${
            darkMode ? 'bg-gray-800/30 border-gray-600/30 text-gray-200' : 'bg-white/30 border-white/40 text-gray-700'
          }`}
        >
          <p>
            After completing my Industrial Training at Hit Digital Marketing Sdn. Bhd., I understood more clearly how the real working world operates.
            I gained useful knowledge and hands-on experience. Finishing this training makes me proud and thankful for what I learned,
            and I believe it will help me in my future plans. Throughout the training, I was introduced to new ideas and also saw firsthand
            what life in a professional workplace is like.
          </p>

          <p>
            This program also gave students the chance to grow by observing the employees’ daily routines and their disciplined work attitude.
            I became more aware of how my academic subjects connect to my career goals. Sometimes what we learn in theory does not match
            the practical tasks during training, but I clearly saw that being serious and having real interest are important when preparing
            for the professional world.
          </p>

          <p>
            I gained a lot of knowledge during the Industrial Training period. The skills and lessons I collected will be applied as fully as possible
            in my future career. More importantly, the experience taught me to be responsible, adapt when things change, and manage my time well
            when handling tasks in a fast-moving digital marketing environment.
          </p>

          <p>
            In summary, Industrial Training is an important opportunity for students to learn not only academically and technically, but also in the
            different responsibilities of an employee’s role. During this period, I experienced a real workplace and learned that building good
            relationships between employees and trainees matters. These connections help strengthen professional bonds and support teamwork
            within the working environment.
          </p>

          <p>
            I strongly recommend Hit Digital Marketing Sdn. Bhd. as a good place for Industrial Training.
            I sincerely appreciate the opportunity, guidance, and support that the company provided during my training period.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Conclusion;