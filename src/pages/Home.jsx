import React from "react";
import ProfilePic from "../images/Me.jpeg";
import Logo1 from "../images/psis.png";
import Logo2 from "../images/LogoHD.png";
import Logo3 from "../images/jpkk.png";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import AuroraBackground from "../components/Aurora";
import BlurText from "../components/BlurText";
import GlareImage from "../components/GlareHover";
import ShinyText from "../components/ShinyText";

function Home() {
  return (
    <section
      className="relative flex flex-col justify-center flex-grow px-6 py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
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
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            <ShinyText
              text="FINAL REPORT OF INDUSTRIAL TRAINING"
              speed={6}
            />
          </h1>

          <h3 className="text-xl font-bold mt-3">
            <ShinyText
              text="SESSION 2 2025 / 2026"
              speed={4}
              className="text-blue-900"
            />
          </h3>
        </div>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        {/* MAIN GLASS CARD */}

        <div
          className="
          bg-white/30
          backdrop-blur-xl
          border border-white/40
          shadow-2xl
          rounded-3xl
          p-8 md:p-12
          hover:shadow-blue-200
          transition
        "
        >
          {/* Logos */}

          <div className="flex justify-between items-center mb-16 flex-wrap gap-6">

            <img
              src={Logo1}
              className="w-28 md:w-36 object-contain hover:scale-105 transition"
            />

            <img
              src={Logo2}
              className="w-16 md:w-20 object-contain hover:scale-105 transition"
            />

            <img
              src={Logo3}
              className="w-28 md:w-36 object-contain hover:scale-105 transition"
            />

          </div>

          {/* PROFILE SECTION */}

          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Profile Image */}

            <div className="relative">

              <GlareImage
                src={ProfilePic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-blue-600 shadow-xl"
              />

              {/* Glow effect */}

              <div className="absolute inset-0 rounded-full bg-blue-400 blur-3xl opacity-20 -z-10"></div>

            </div>

            {/* PROFILE INFO */}

            <div className="flex-1 space-y-4 text-gray-700 font-semibold">

              <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                <BlurText
                  text="WAN MUHAMMAD FARIS BIN WAN ZULKIFLI"
                  delay={80}
                />
              </h2>

              <p>(17DDT23F1014)</p>

              <p>DIPLOMA INFORMATION TECHNOLOGY</p>

              <p className="text-xl font-bold text-gray-800 mt-4">
                HIT DIGITAL MARKETING SDN BHD
              </p>

              {/* CONTACT CARD */}

              <div
                className="
                mt-6
                bg-white/40
                backdrop-blur-lg
                border border-white/40
                rounded-2xl
                p-6
                space-y-4
                shadow-inner
              "
              >

                <div className="flex items-start gap-3 text-sm">

                  <FaMapMarkerAlt className="text-blue-600 mt-1" />

                  <p>
                    PT 532, Tingkat 1, Seksyen 17, Lembah Sireh,
                    <br />
                    15050 Kota Bharu, Kelantan, Malaysia
                  </p>

                </div>

                <a
                  href="mailto:sales@hitdigital.my"
                  className="flex items-center gap-3 text-sm hover:text-blue-700 transition"
                >

                  <FaEnvelope className="text-blue-600" />

                  sales@hitdigital.my

                </a>

                <a
                  href="tel:+60109056700"
                  className="flex items-center gap-3 text-sm hover:text-blue-700 transition"
                >

                  <FaPhone className="text-blue-600" />

                  +6010-905 6700

                </a>

                <a
                  href="https://hitdigital.my"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-blue-700 transition"
                >

                  <FaGlobe className="text-blue-600" />

                  www.hitdigital.my

                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;