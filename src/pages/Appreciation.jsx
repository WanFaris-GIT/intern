function Appreciation() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 py-20 px-6">

      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITLE */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-purple-700 mb-20 text-center drop-shadow-lg">
          Dedication & Appreciation
        </h1>

        {/* ================= DEDICATION ================= */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 mb-24 border-l-8 border-purple-500">

          <h2 className="text-2xl font-bold text-purple-700 mb-6 tracking-wide">
            DEDICATIONS
          </h2>

          <p className="text-gray-700 leading-loose text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-purple-600">
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

        {/* ================= APPRECIATION ================= */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border-l-8 border-pink-500">

          <h2 className="text-2xl font-bold text-pink-600 mb-6 tracking-wide">
            APPRECIATIONS
          </h2>

          <p className="text-gray-700 leading-loose text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-pink-500">
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