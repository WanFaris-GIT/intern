import { useDarkMode } from "../context/DarkModeContext";
import React from "react";
import HDchart from "../images/HitDigital.jpg";
import LogoHD from "../images/LogoHD.png";
import AuroraBackground from "../components/Aurora";
import {
  FaBullseye,
  FaEye,
  FaMapMarkerAlt,
  FaPalette,
  FaBullhorn,
  FaPenNib,
  FaVideo,
  FaShoppingCart,
  FaDatabase,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Company() {
  const { darkMode } = useDarkMode();
  
  const services = [
    { title: "Zoom Fundraising", icon: <FaVideo /> },
    { title: "Digital Ads", icon: <FaBullhorn /> },
    { title: "Products Marketing", icon: <FaShoppingCart /> },
    { title: "Content marketing & user database", icon: <FaDatabase /> },
    { title: "Creative design & branding", icon: <FaPalette /> },
    { title: "Copywriting Services", icon: <FaPenNib /> },
  ];

  const email = "sales@hitdigital.my";
  const phone = "+6010-9056700";

  return (
    <div
      className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 text-center drop-shadow-lg mb-2">
          Company's Background
        </h1>
        <p className={`text-center text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>HIT Digital Marketing Sdn Bhd</p>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        {/* INTRO CARD */}
        <div className={`backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-blue-200 transition card-glow ${darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30'}`}>
          <div className="flex-shrink-0">
            <img
              src={LogoHD}
              alt="HIT Digital Marketing Logo"
              className="w-52 h-52 object-contain mx-auto bg-blue-50 rounded-2xl shadow-md p-4"
            />
          </div>

          <div className="text-center md:text-left space-y-4">
            <p className={`leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              HIT Digital Marketing Sdn Bhd (HD) was established in 2020 with the
              initiative to provide a powerful platform for businesses, educational
              institutions and NGOs in Malaysia to grow through digital marketing.
            </p>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              We strive to become a leading Shariah-compliant marketing company
              while contributing towards economic growth and community development.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-4 justify-start">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.open(`mailto:${email}`, '_blank'); }}
                className={`flex items-center gap-2 backdrop-blur-xl border px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer ${
                  darkMode ? 'bg-gray-800/40 border-gray-600/40 text-gray-200' : 'bg-white/30 border-white/40 text-gray-800'
                }`}
              >
                <FaEnvelope className="text-blue-600" />
                <span className="font-semibold">{email}</span>
              </a>

              <a
                href={`tel:${phone}`}
                className={`flex items-center gap-2 backdrop-blur-xl border px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer ${
                  darkMode ? 'bg-gray-800/40 border-gray-600/40 text-gray-200' : 'bg-white/30 border-white/40 text-gray-800'
                }`}
              >
                <FaPhone className="text-blue-600" />
                <span className="font-semibold">{phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className={`backdrop-blur-xl border shadow-2xl rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition card-glow ${
            darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
          }`}>
            <FaEye className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-xl text-blue-700 dark:text-blue-700 mb-2">Vision</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Empowering economies, communities, and education through globally
              impactful digital marketing.
            </p>
          </div>

          <div className={`backdrop-blur-xl border shadow-2xl rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition card-glow ${
            darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
          }`}>
            <FaBullseye className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-xl text-blue-700 dark:text-blue-700 mb-4">Mission</h3>
            <div className="space-y-3">
              {[
                "Generating multiple active income streams.",
                "Expanding market through global networking.",
                "Developing leaders in every project.",
                "Creating economic programs for education sector.",
              ].map((item, index) => (
                <div key={index} className={`px-4 py-2 rounded-lg text-sm ${darkMode ? 'bg-gray-700/50 text-gray-200' : 'bg-blue-50 text-gray-700'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ORGANIZATION CHART */}
        <div className={`backdrop-blur-xl border shadow-2xl rounded-3xl p-8 md:p-12 mb-10 text-center hover:shadow-2xl transition card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
        }`}>
          <h3 className="font-bold text-xl text-blue-800 dark:text-blue-700 mb-6">Organization Chart</h3>
          <img
            src={HDchart}
            alt="Organization Chart"
            className="mx-auto rounded-2xl shadow-md border-2 border-blue-100"
          />
        </div>

        {/* SERVICES */}
        <div className={`backdrop-blur-xl border shadow-2xl rounded-3xl p-8 md:p-12 mb-10 text-center hover:shadow-2xl transition card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
        }`}>
          <h3 className="font-bold text-2xl text-blue-800 dark:text-blue-700 mb-8">Services</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-600 to-blue-800 text-white p-8 rounded-3xl shadow-xl 
                hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                <h4 className="font-bold text-base leading-snug">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* LOCATION */}
        <div className={`backdrop-blur-xl border shadow-2xl rounded-3xl p-8 md:p-12 text-center hover:shadow-2xl transition card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
        }`}>
          <FaMapMarkerAlt className="text-blue-600 text-3xl mb-4 mx-auto" />
          <h3 className="font-bold text-xl text-blue-800 dark:text-blue-700 mb-3">Our Location</h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            PT 532, Tingkat 1, Seksyen 17, Lembah Sireh,
            <br />
            15050 Kota Bharu, Kelantan, Malaysia
          </p>

          <div className="w-full h-[350px] rounded-2xl overflow-hidden border-2 border-blue-100">
            <iframe
              title="company-location"
              src="https://www.google.com/maps?q=Lembah+Sireh+Kota+Bharu&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Company;