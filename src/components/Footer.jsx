import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaHeart,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative text-white">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600"></div>

      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-3">Internship Report</h2>
          <p className="text-sm text-purple-100">
            Final Report for Industrial Training Session 2025/2026.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-purple-100 text-sm">
            <Link to="/">Home</Link>
            <Link to="/introduction">Introduction</Link>
            <Link to="/company">Company</Link>
            <Link to="/technical">Technical</Link>
            <Link to="/references">References</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-3 text-sm text-purple-100">
            <a href="mailto:wanfaris3235@gmail.com" className="flex gap-2">
              <FaEnvelope /> wanfaris3235@gmail.com
            </a>
            <a href="#" className="flex gap-2"><FaTiktok /> _.wanfaris</a>
            <a href="#" className="flex gap-2"><FaInstagram /> _.wanfaris</a>
          </div>
        </div>

      </div>

      <div className="relative text-center border-t border-purple-400/30 py-5 text-sm text-purple-100">
        © 2026 Wan Muhammad Faris | Made with{" "}
        <FaHeart className="inline text-pink-300 mx-1 animate-pulse" />
        using React
      </div>
    </footer>
  );
}

export default Footer;