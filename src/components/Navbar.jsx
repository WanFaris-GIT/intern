import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import RotatingCube from "./RotatingCube";

function Navbar() {
  const [reportOpen, setReportOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
          return;
        }
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

  const sidebarLinkClass = ({ isActive }) =>
    `block w-full text-left px-3 py-3 rounded-lg font-medium transition-colors duration-300 ${
      isActive
        ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200"
        : darkMode
        ? "text-gray-200 hover:bg-gray-800 hover:text-blue-300"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-5 md:mr-20">
          <RotatingCube />
          <div className="text-xl font-extrabold text-blue-700 dark:text-blue-700 tracking-wide flex flex-col items-start">
            <p>INDUSTRIAL TRAINING</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 relative">
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

        <div className="flex items-center gap-2 md:hidden">
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
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? 'visible' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <aside ref={sidebarRef} className={`absolute inset-y-0 left-0 w-72 max-w-full bg-white bg-opacity-100 dark:bg-gray-900 dark:bg-opacity-100 shadow-2xl border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 z-50 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-lg font-bold text-blue-700 dark:text-blue-400">Menu</div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Navigation</p>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-xl font-bold leading-none text-gray-700 dark:text-gray-200"
              aria-label="Close sidebar"
            >
              ×
            </button>
          </div>
          <div className="p-4 space-y-2">
            <NavLink to="/" className={sidebarLinkClass} onClick={() => setMobileOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/executive-summary" className={sidebarLinkClass} onClick={() => setMobileOpen(false)}>
              Executive Summary
            </NavLink>
            <NavLink to="/company" className={sidebarLinkClass} onClick={() => setMobileOpen(false)}>
              Company
            </NavLink>
            <button
              type="button"
              onClick={() => setReportOpen((prev) => !prev)}
              className={`w-full text-left px-3 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-between ${
                isReportActive
                  ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200"
                  : darkMode
                  ? "text-gray-200 hover:bg-gray-800 hover:text-blue-300"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <span>Report</span>
              <span className={`ml-1 text-sm transition-transform duration-300 ${reportOpen ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>
            {reportOpen && (
              <div className="space-y-1 pl-4">
                <NavLink to="/weekly" className={sidebarLinkClass} onClick={() => { setMobileOpen(false); setReportOpen(false); }}>
                  Weekly Summary
                </NavLink>
                <NavLink to="/technical" className={sidebarLinkClass} onClick={() => { setMobileOpen(false); setReportOpen(false); }}>
                  Technical Report
                </NavLink>
              </div>
            )}
            <NavLink to="/conclusion" className={sidebarLinkClass} onClick={() => setMobileOpen(false)}>
              Conclusion
            </NavLink>
            <NavLink to="/references" className={sidebarLinkClass} onClick={() => setMobileOpen(false)}>
              References
            </NavLink>
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
