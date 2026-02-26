import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Appreciation from "./pages/Appreciation";
import Introduction from "./pages/Introduction";
import Company from "./pages/Company";
import Weekly from "./pages/Weekly";
import Technical from "./pages/Technical";
import Conclusion from "./pages/Conclusion";
import References from "./pages/References";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">

        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appreciation" element={<Appreciation />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/company" element={<Company />} />
            <Route path="/weekly" element={<Weekly />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;