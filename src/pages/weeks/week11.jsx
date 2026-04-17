import { useDarkMode } from "../../context/DarkModeContext";
import { useState, useEffect } from "react";
import AuroraBackground from "../../components/Aurora";
import BackButton from "../../components/Backbutton";

function Week11() {
  const { darkMode } = useDarkMode();
  
  const images = [
    '/images/week11.jpg',
    '/images/week11.jpg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);
  
    return () => clearInterval(interval);
  }, [isPaused, images.length]);
  
  return (
    <section
      className="relative flex flex-col justify-center flex-grow px-6 py-20 overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      <AuroraBackground />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 10 }}>
        
        <div className={`relative max-w-4xl mx-auto px-12 md:px-24 py-8 md:py-16 backdrop-blur-xl border rounded-3xl shadow-2xl hover:shadow-xl transition duration-300 card-glow ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-800/40' : 'bg-white/30 border-white/40 hover:bg-white/40'
        }`}>

          <div style={{ position: "absolute", top: "24px", left: "24px" }}>
            <BackButton />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 mb-2">
            Week 11
          </h1>
          
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            15 March 2026 - 19 March 2026
          </p>
          
          <div className="flex flex-col items-center mb-8 w-full max-w-lg mx-auto">
            <div 
              className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, idx) => (
                  <img 
                    key={idx}
                    src={src}
                    alt={`Week 11 Image ${idx + 1}`}
                    className="w-full h-full flex-shrink-0 object-cover"
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100 z-10"
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${idx === currentIndex ? 'bg-blue-600 scale-125 shadow-md' : 'bg-gray-400 hover:bg-gray-500 hover:scale-110'}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            <p className="text-lg leading-relaxed">
                During Week 11, I carried out WhatsApp blasting tasks, managed client numbers, and monitored campaign 
                effectiveness. In addition, I was responsible for preparing monthly reports and reviewing data. 
                These tasks helped strengthen my analytical skills, data management, and ability to evaluate campaign 
                performance.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Week11;
