import { useDarkMode } from "../context/DarkModeContext";
import { Link, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaHeart,
  FaTiktok,
  FaInstagram,
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaCode,
  FaBookOpen,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/introduction", label: "Introduction", icon: FaInfoCircle },
  { to: "/company", label: "Company", icon: FaBuilding },
  { to: "/technical", label: "Technical", icon: FaCode },
  { to: "/references", label: "References", icon: FaBookOpen },
];

function Footer() {
  const { darkMode } = useDarkMode();
  const location = useLocation();

  return (
    <footer className="relative text-white">

      {/* Base gradient */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900'}`}></div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-0 right-1/3 w-48 h-48 bg-indigo-400 rounded-full blur-2xl opacity-15"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Internship Report</h2>
          <p className="text-sm text-blue-100">
            Final Report for Industrial Training Session 2025/2026.
          </p>
        </div>

        {/* Quick Links - IMPROVED */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-1">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                    ${isActive
                      ? "bg-white/15 text-white font-medium"
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {/* Icon */}
                  <span className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-teal-300" : "text-blue-300 group-hover:text-teal-300"}`}>
                    <Icon size={13} />
                  </span>

                  {/* Label */}
                  <span>{label}</span>

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-300"></span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-3 text-sm text-blue-100">
            <a href="#" onClick={(e) => { e.preventDefault(); window.open('mailto:wanfaris3235@gmail.com', '_blank'); }} className="flex gap-2 hover:text-white transition cursor-pointer">
              <FaEnvelope /> wanfaris3235@gmail.com
            </a>
            <a href="https://www.tiktok.com/@_.wanfaris?_r=1&_t=ZS-94ZA7gZRMqv" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-white transition">
              <FaTiktok /> _.wanfaris
            </a>
            <a href="https://www.instagram.com/_.wanfaris?igsh=MXFvNGk2amR2YjNmOQ==" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-white transition">
              <FaInstagram /> _.wanfaris
            </a>
          </div>
        </div>

      </div>

      <div className="relative text-center border-t border-blue-400/30 py-5 text-sm text-blue-100">
        © 2026 Wan Muhammad Faris | Made with{" "}
        <FaHeart className="inline text-teal-300 mx-1 animate-pulse" />
        using React
      </div>
    </footer>
  );
}

export default Footer;