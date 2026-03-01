import React from "react";
import ProfilePic from "../images/Me.jpeg";
import Logo1 from "../images/psis.png";
import Logo2 from "../images/LogoHD.png";
import Logo3 from "../images/jpkk.png";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import AuroraBackground from "../components/Aurora";

function Home() {
  return (
    <section className="relative flex flex-col justify-center flex-grow px-6 py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)" }}>

      {/* AURORA BACKGROUND — reusable on any page */}
      <AuroraBackground />

      {/* CONTENT */}
      <div className="w-full max-w-5xl mx-auto" style={{ zIndex: 10, position: "relative" }}>

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center drop-shadow-lg">
          FINAL REPORT OF INDUSTRIAL TRAINING
        </h1>

        <h3 className="text-xl font-extrabold text-blue-900 mb-16 text-center drop-shadow-lg">
          SESSION 2 2025/2026
        </h3>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12">

          <div className="flex justify-between items-center mb-16 flex-wrap gap-4">
            <img src={Logo1} className="w-28 md:w-36 object-contain" />
            <img src={Logo2} className="w-16 md:w-20 object-contain" />
            <img src={Logo3} className="w-28 md:w-36 object-contain" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">

            <img
              src={ProfilePic}
              alt="Profile"
              className="w-72 h-72 rounded-full object-cover border-4 border-blue-400 shadow-lg hover:scale-105 transition"
            />

            <div className="flex-1 space-y-3 text-gray-700 font-semibold">

              <h2 className="text-xl md:text-2xl font-bold text-blue-700">
                WAN MUHAMMAD FARIS BIN WAN ZULKIFLI
              </h2>

              <p>(17DDT23F1014)</p>
              <p>DIPLOMA INFORMATION TECHNOLOGY</p>

              <p className="text-xl font-bold text-gray-800 mt-3">
                HIT DIGITAL MARKETING SDN BHD
              </p>

              <div className="mt-6 bg-blue-50 rounded-2xl p-5 space-y-3 shadow-inner">

                <div className="flex items-start gap-3 text-sm">
                  <FaMapMarkerAlt className="text-blue-600 mt-1" />
                  <p>
                    PT 532, Tingkat 1, Seksyen 17, Lembah Sireh,<br />
                    15050 Kota Bharu, Kelantan, Malaysia
                  </p>
                </div>

                <a href="mailto:sales@hitdigital.my" className="flex items-center gap-3 text-sm hover:text-blue-700">
                  <FaEnvelope className="text-blue-600" />
                  sales@hitdigital.my
                </a>

                <a href="tel:+60109056700" className="flex items-center gap-3 text-sm hover:text-blue-700">
                  <FaPhone className="text-blue-600" />
                  +6010-905 6700
                </a>

                <a href="https://hitdigital.my" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-blue-700">
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