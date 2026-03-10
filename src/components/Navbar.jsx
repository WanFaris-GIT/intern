import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa";

/* 3D Rotating Cube Component */
const cubeStyles = `
.cube-scene {
  width: 28px;
  height: 28px;
  perspective: 80px;
}
.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 4s linear infinite;
}
@keyframes rotateCube {
  0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); }
}
.cube__face {
  position: absolute;
  width: 28px;
  height: 28px;
  border: 1.5px solid rgba(96, 165, 250, 0.8);
  background: rgba(59, 130, 246, 0.08);
  backdrop-filter: blur(2px);
}
.cube__face--front { transform: rotateY(0deg) translateZ(14px); }
.cube__face--back { transform: rotateY(180deg) translateZ(14px); }
.cube__face--right { transform: rotateY(90deg) translateZ(14px); }
.cube__face--left { transform: rotateY(-90deg) translateZ(14px); }
.cube__face--top { transform: rotateX(90deg) translateZ(14px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(14px); }
.cube__face::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 3px;
  height: 3px;
  background: #60a5fa;
  border-radius: 50%;
  box-shadow: 0 0 4px #60a5fa, 20px 0 4px #60a5fa, 0 20px 4px #60a5fa, 20px 20px 4px #60a5fa;
}
`;

function RotatingCube() {
  return (
    <>
      <style>{cubeStyles}</style>
      <div className="cube-scene">
        <div className="cube">
          <div className="cube__face cube__face--front" />
          <div className="cube__face cube__face--back" />
          <div className="cube__face cube__face--right" />
          <div className="cube__face cube__face--left" />
          <div className="cube__face cube__face--top" />
          <div className="cube__face cube__face--bottom" />
        </div>
      </div>
    </>
  );
}

/* Navbar Component */
function Navbar() {
  const [reportOpen, setReportOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  /* Close dropdown if clicked outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setReportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close dropdown if navigating away from report pages, only if dropdown open */
  useEffect(() => {
    if (location.pathname !== "/weekly" && location.pathname !== "/technical") {
      const timeout = setTimeout(() => setReportOpen(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  const isReportActive =
    location.pathname === "/weekly" || location.pathname === "/technical";

  /* NavLink class helper */
  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition-colors duration-300 cursor-pointer ${
      reportOpen
        ? "text-blue-700 after:w-0"
        : isActive
        ? "text-blue-700 after:w-full"
        : darkMode ? "text-gray-200 hover:text-blue-400 after:w-0" : "text-gray-600 hover:text-blue-700 after:w-0"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-blue-700 after:rounded-full after:transition-all after:duration-300`;

  return (
    <nav className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6">
        {/* Logo + Cube */}
        <div className="flex items-center gap-3">
          <RotatingCube />
          <h1 className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-wide">
            Internship Report
          </h1>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 relative">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/appreciation" className={linkClass}>
            Appreciation
          </NavLink>
          <NavLink to="/introduction" className={linkClass}>
            Introduction
          </NavLink>
          <NavLink to="/company" className={linkClass}>
            Company
          </NavLink>

          {/* Report Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setReportOpen((prev) => !prev)}
              className={`relative px-3 py-2 font-medium transition-colors duration-300 flex items-center ${
                isReportActive
                  ? "text-blue-700 after:w-full"
                  : darkMode ? "text-gray-200 hover:text-blue-400 after:w-0" : "text-gray-600 hover:text-blue-700 after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-blue-700 after:rounded-full after:transition-all after:duration-300`}
            >
              Report
              <span
                className={`ml-1 text-sm transition-transform duration-300 ${
                  reportOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-blue-100 dark:border-gray-700 z-50 transform transition-all duration-300 origin-top ${
                reportOpen
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0 pointer-events-none"
              }`}
            >
              <NavLink
                to="/weekly"
                className={({ isActive }) =>
                  `block px-4 py-2 transition font-medium ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-gray-600 dark:text-gray-200 hover:bg-blue-700 hover:text-white"
                  }`
                }
                onClick={() => setReportOpen(false)}
              >
                Weekly Summary
              </NavLink>
              <NavLink
                to="/technical"
                className={({ isActive }) =>
                  `block px-4 py-2 transition font-medium ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-gray-600 dark:text-gray-200 hover:bg-blue-700 hover:text-white"
                  }`
                }
                onClick={() => setReportOpen(false)}
              >
                Technical Report
              </NavLink>
            </div>
          </div>

          <NavLink to="/conclusion" className={linkClass}>
            Conclusion
          </NavLink>
          <NavLink to="/references" className={linkClass}>
            References
          </NavLink>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-600 text-lg" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;