import AuroraBackground from "../components/Aurora";

function Appreciation() {
  return (
    <div
      className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto relative" style={{ zIndex: 10 }}>

        {/* TITLE */}
        <h1
          className="text-2xl md:text-5xl font-extrabold mb-20 text-center drop-shadow-lg"
          style={{
            background: "linear-gradient(90deg, #1d4ed8, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dedication & Appreciation
        </h1>

        {/* DEDICATION CARD */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl p-8 md:p-12 mb-12 hover:shadow-blue-200 transition">
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

        {/* APPRECIATION CARD */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-indigo-200 transition">
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
  );
}

export default Appreciation;