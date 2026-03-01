import React from "react";
import HDchart from "../images/HDchart.jpg";
import LogoHD from "../images/LogoHD.png";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-20 px-6">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1 className="text-2xl md:text-5xl font-extrabold text-purple-700 mb-3 drop-shadow-lg">
          Company Background
        </h1>
        <p className="text-gray-500 text-lg md:text-xl">HIT Digital Marketing Sdn Bhd</p>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto rounded-3xl shadow-xl p-10 mb-20 flex flex-col md:flex-row items-center gap-8
                      bg-gradient-to-r from-purple-400 via-purple-100 to-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={LogoHD}
            alt="HIT Digital Marketing Logo"
            className="w-72 h-72 object-contain mx-auto bg-purple-100 rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
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

          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-800 transition duration-300"
            >
              <FaEnvelope />
              <span>{email}</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 hover:text-white transition duration-300"
            >
              <FaPhone />
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <FaEye className="text-purple-600 text-3xl mb-4" />
          <h3 className="font-bold text-xl mb-2">Vision</h3>
          <p className="text-gray-600">
            Empowering economies, communities, and education through globally
            impactful digital marketing.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
          <FaBullseye className="text-purple-600 text-3xl mb-4" />
          <h3 className="font-bold text-xl mb-4">Mission</h3>
          <div className="space-y-3">
            {[
              "Generating multiple active income streams.",
              "Expanding market through global networking.",
              "Developing leaders in every project.",
              "Creating economic programs for education sector.",
            ].map((item, index) => (
              <div key={index} className="bg-purple-50 px-4 py-2 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ORGANIZATION CHART */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-50 via-white to-white p-10 rounded-2xl shadow-lg text-center mb-20">
        <h3 className="font-bold text-xl mb-6">Organization Chart</h3>
        <img
          src={HDchart}
          alt="Organization Chart"
          className="mx-auto rounded-xl shadow-md"
        />
      </div>

      {/* SERVICES */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h3 className="font-bold text-2xl mb-12 text-black">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-fuchsia-600 to-purple-800 text-white p-8 rounded-3xl shadow-xl
              hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
              <h4 className="font-bold text-lg leading-snug">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATION */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-50 via-white to-white p-10 rounded-2xl shadow-lg text-center">
        <FaMapMarkerAlt className="text-purple-600 text-3xl mb-4 mx-auto" />
        <h3 className="font-bold text-xl mb-4">Our Location</h3>

        <p className="text-gray-600 mb-6">
          PT 532, Tingkat 1, Seksyen 17, Lembah Sireh,<br />
          15050 Kota Bharu, Kelantan, Malaysia
        </p>

        <div className="w-full h-[350px] rounded-xl overflow-hidden">
          <iframe
            title="company-location"
            src="https://www.google.com/maps?q=Lembah+Sireh+Kota+Bharu&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Company;