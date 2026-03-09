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

import Week1 from "./pages/weeks/week1";
import Week2 from "./pages/weeks/week2";
import Week3 from "./pages/weeks/week3";
import Week4 from "./pages/weeks/week4";
import Week5 from "./pages/weeks/week5";
import Week6 from "./pages/weeks/week6";
import Week7 from "./pages/weeks/week7";
import Week8 from "./pages/weeks/week8";
import Week9 from "./pages/weeks/week9";
import Week10 from "./pages/weeks/week10";
import Week11 from "./pages/weeks/week11";
import Week12 from "./pages/weeks/week12";
import Week13 from "./pages/weeks/week13";
import Week14 from "./pages/weeks/week14";
import Week15 from "./pages/weeks/week15";
import Week16 from "./pages/weeks/week16";
import Week17 from "./pages/weeks/week17";
import Week18 from "./pages/weeks/week18";
import Week19 from "./pages/weeks/week19";
import Week20 from "./pages/weeks/week20";


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
            <Route path="/week1" element={<Week1 />} />
            <Route path="/week2" element={<Week2 />} />
            <Route path="/week3" element={<Week3 />} />
            <Route path="/week4" element={<Week4 />} />
            <Route path="/week5" element={<Week5 />} />
            <Route path="/week6" element={<Week6 />} />
            <Route path="/week7" element={<Week7 />} />
            <Route path="/week8" element={<Week8 />} />
            <Route path="/week9" element={<Week9 />} />
            <Route path="/week10" element={<Week10 />} />
            <Route path="/week11" element={<Week11 />} />
            <Route path="/week12" element={<Week12 />} />
            <Route path="/week13" element={<Week13 />} />
            <Route path="/week14" element={<Week14 />} />
            <Route path="/week15" element={<Week15 />} />
            <Route path="/week16" element={<Week16 />} />
            <Route path="/week17" element={<Week17 />} />
            <Route path="/week18" element={<Week18 />} />
            <Route path="/week19" element={<Week19 />} />
            <Route path="/week20" element={<Week20 />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;