import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import RotatingCube from "./RotatingCube";

function Navbar() {
  const [reportOpen, setReportOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setReportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/weekly" && location.pathname !== "/technical") {
      const timeout = setTimeout(() => setReportOpen(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  const isReportActive =
    location.pathname === "/weekly" || location.pathname === "/technical";

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
        <div className="flex items-center gap-5">
          <RotatingCube />
          <div className="text-xl font-extrabold text-blue-700 dark:text-blue-700 tracking-wide flex flex-col items-start">
            <p>INDUSTRIAL TRAINING</p> 
          </div>
        </div>

        <div className="flex items-center space-x-6 relative">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/executive-summary" className={linkClass}>
            <div className="marquee-container">
              <span className="marquee-text">Executive Summary Executive Summary Executive Summary&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </NavLink>
          <NavLink to="/company" className={linkClass}>
            Company
          </NavLink>

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
