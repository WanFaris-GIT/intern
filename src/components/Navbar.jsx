import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [reportOpen, setReportOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setReportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown if route changes and not report
  useEffect(() => {
    if (location.pathname !== "/weekly" && location.pathname !== "/technical") {
      setReportOpen(false);
    }
  }, [location.pathname]);

  const isReportActive =
    location.pathname === "/weekly" || location.pathname === "/technical";

  // Class untuk normal NavLinks
  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition-colors duration-300 cursor-pointer
    ${
      reportOpen
        ? "text-gray-700 after:w-0"
        : isActive
        ? "text-primary after:w-full"
        : "text-gray-700 hover:text-primary after:w-0"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[3px] after:bg-primary after:rounded-full after:transition-all after:duration-300`;

  return (
    <nav className="h-16 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6">
        <h1 className="text-2xl font-extrabold text-primary tracking-wide">
          Internship Report
        </h1>

        <div className="flex items-center space-x-6 relative">
          {/* Normal NavLinks */}
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

          {/* REPORT DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setReportOpen(!reportOpen)}
              className={`relative px-3 py-2 font-medium transition-colors duration-300 flex items-center
                ${
                  isReportActive ? "text-primary after:w-full" : "text-gray-700 hover:text-primary after:w-0"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[3px] after:bg-primary after:rounded-full after:transition-all after:duration-300`}
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

            {/* Dropdown items */}
            <div
              className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transform transition-all duration-300 origin-top
                ${reportOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
            >
              <NavLink
                to="/weekly"
                className={({ isActive }) =>
                  `block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
                onClick={() => setReportOpen(false)} // <-- Tutup dropdown selepas click
              >
                Weekly Summary
              </NavLink>
              <NavLink
                to="/technical"
                className={({ isActive }) =>
                  `block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition ${
                    isActive ? "bg-primary text-white" : ""
                  }`
                }
                onClick={() => setReportOpen(false)} // <-- Tutup dropdown selepas click
              >
                Technical Report
              </NavLink>
            </div>
          </div>

          {/* Remaining NavLinks */}
          <NavLink to="/conclusion" className={linkClass}>
            Conclusion
          </NavLink>
          <NavLink to="/references" className={linkClass}>
            References
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;