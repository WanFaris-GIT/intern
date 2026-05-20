import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { DarkModeProvider } from "./context/DarkModeContext";


const Home = lazy(() => import("./pages/Home"));
const Appreciation = lazy(() => import("./pages/Appreciation"));
const Introduction = lazy(() => import("./pages/Introduction"));
const Company = lazy(() => import("./pages/Company"));
const Weekly = lazy(() => import("./pages/Weekly"));
const Technical = lazy(() => import("./pages/Technical"));
const Conclusion = lazy(() => import("./pages/Conclusion"));
const References = lazy(() => import("./pages/References"));
const Gallery = lazy(() => import("./pages/Gallery"));





const ExecutiveSummary = lazy(() => import("./pages/ExecutiveSummary"));
const Week1 = lazy(() => import("./pages/weeks/week1"));
const Week2 = lazy(() => import("./pages/weeks/week2"));
const Week3 = lazy(() => import("./pages/weeks/week3"));
const Week4 = lazy(() => import("./pages/weeks/week4"));
const Week5 = lazy(() => import("./pages/weeks/week5"));
const Week6 = lazy(() => import("./pages/weeks/week6"));
const Week7 = lazy(() => import("./pages/weeks/week7"));
const Week8 = lazy(() => import("./pages/weeks/week8"));
const Week9 = lazy(() => import("./pages/weeks/week9"));
const Week10 = lazy(() => import("./pages/weeks/week10"));
const Week11 = lazy(() => import("./pages/weeks/week11"));
const Week12 = lazy(() => import("./pages/weeks/week12"));
const Week13 = lazy(() => import("./pages/weeks/week13"));
const Week14 = lazy(() => import("./pages/weeks/week14"));
const Week15 = lazy(() => import("./pages/weeks/week15"));
const Week16 = lazy(() => import("./pages/weeks/week16"));
const Week17 = lazy(() => import("./pages/weeks/week17"));
const Week18 = lazy(() => import("./pages/weeks/week18"));
const Week19 = lazy(() => import("./pages/weeks/week19"));
const Week20 = lazy(() => import("./pages/weeks/week20"));


function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">

          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-grow flex flex-col">
            <Suspense fallback={<div className="flex-grow flex items-center justify-center py-20 text-gray-600 dark:text-gray-300">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/executive-summary" element={<ExecutiveSummary />} />
                <Route path="/appreciation" element={<Appreciation />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/company" element={<Company />} />
                <Route path="/weekly" element={<Weekly />} />
                <Route path="/technical" element={<Technical />} />
                <Route path="/conclusion" element={<Conclusion />} />
                <Route path="/references" element={<References />} />
                <Route path="/gallery" element={<Gallery />} />

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
            </Suspense>
          </main>

          <Footer />

        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;

