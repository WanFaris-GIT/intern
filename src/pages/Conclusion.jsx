import AuroraBackground from "../components/Aurora";

function Conclusion() {
  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)" }}>

      <AuroraBackground />

      <div className="max-w-5xl mx-auto relative" style={{ zIndex: 10 }}>

        <h1 className="text-2xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow-lg mb-16">
          Conclusion
        </h1>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 border-l-8 border-blue-500 text-gray-700 space-y-6 leading-relaxed">
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
    </div>
  );
}

export default Conclusion;