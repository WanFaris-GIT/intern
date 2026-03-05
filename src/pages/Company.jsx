import React from "react";
import HDchart from "../images/HDchart.jpg";
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
    <div className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)" }}>

      <AuroraBackground />

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto relative" style={{ zIndex: 10 }}>

        {/* TITLE */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow-lg mb-2">
          Company's Background
        </h1>
        <p className="text-gray-500 text-center text-lg mb-16">HIT Digital Marketing Sdn Bhd</p>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        {/* INTRO CARD */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={LogoHD}
              alt="HIT Digital Marketing Logo"
              className="w-52 h-52 object-contain mx-auto bg-blue-50 rounded-2xl shadow-md p-4"
            />
          </div>

          <div className="text-center md:text-left space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Hit Digital Marketing Sdn Bhd (HD) was established in 2020 with the
              initiative to provide a powerful platform for businesses, educational
              institutions and NGOs in Malaysia to grow through digital marketing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We strive to become a leading Shariah-compliant marketing company
              while contributing towards economic growth and community development.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-800 transition duration-300"
              >
                <FaEnvelope />
                <span>{email}</span>
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 bg-white text-blue-700 border border-blue-400 px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
              >
                <FaPhone />
                <span>{phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 hover:-translate-y-2 transition">
            <FaEye className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-xl text-blue-700 mb-2">Vision</h3>
            <p className="text-gray-600">
              Empowering economies, communities, and education through globally
              impactful digital marketing.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 hover:-translate-y-2 transition">
            <FaBullseye className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-xl text-blue-700 mb-4">Mission</h3>
            <div className="space-y-3">
              {[
                "Generating multiple active income streams.",
                "Expanding market through global networking.",
                "Developing leaders in every project.",
                "Creating economic programs for education sector.",
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 px-4 py-2 rounded-lg text-gray-700 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ORGANIZATION CHART */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 mb-10 text-center">
          <h3 className="font-bold text-xl text-blue-800 mb-6">Organization Chart</h3>
          <img
            src={HDchart}
            alt="Organization Chart"
            className="mx-auto rounded-2xl shadow-md border-2 border-blue-100"
          />
        </div>

        {/* SERVICES */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 mb-10 text-center">
          <h3 className="font-bold text-2xl text-blue-800 mb-8">Our Services</h3>

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
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 text-center">
          <FaMapMarkerAlt className="text-blue-600 text-3xl mb-4 mx-auto" />
          <h3 className="font-bold text-xl text-blue-800 mb-3">Our Location</h3>
          <p className="text-gray-600 mb-6">
            PT 532, Tingkat 1, Seksyen 17, Lembah Sireh,<br />
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