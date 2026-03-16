import { useDarkMode } from "../context/DarkModeContext";
import AuroraBackground from "../components/Aurora";

function References() {
  const { darkMode } = useDarkMode();

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const convertToNodes = (text) => {
    const parts = [];
    let lastIndex = 0;
    let match;
    while ((match = urlRegex.exec(text)) !== null) {
      const [url] = match;
      const start = match.index;
      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start));
      }
      parts.push(
        <a
          key={`${url}-${start}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-blue-400 hover:text-blue-500"
        >
          {url}
        </a>
      );
      lastIndex = start + url.length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  return (
    <div
      className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      <AuroraBackground />
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-lg">
            References
          </h1>
          <hr className="w-full border-t-4 border-blue-400 mt-6" />
        </div>

        <div
          className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-200 transition-all duration-300 w-full max-w-5xl mx-auto ${
            darkMode ? "bg-gray-800/30 border-gray-600/30" : "bg-white/30 border-white/40"
          }`}
          style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
        >
          <div className="space-y-8 ">
            <section>
              <div
                className={`w-full rounded-2xl p-5 ${
                  darkMode ? "bg-gray-900/50 border border-gray-600" : "bg-white/80 border border-gray-200"
                }`}
              >
                <div className={`space-y-3 text-left ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                  <p className="text-sm" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                    • HIT Digital Marketing Sdn Bhd. (2026). {convertToNodes("https://hitdigital.my")}
                  </p>
                  <p className="text-sm" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                    • Microsoft Corporation. (2024). <em>Microsoft Excel documentation</em>.
                  </p>
                  <p className="text-sm" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                    • WhatsApp. (2025). <em>WhatsApp Business API and automation best practices</em>.
                  </p>
                  <p className="text-sm" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                    • Chaffey, D., & Ellis-Chadwick, F. (2019). <em>Digital Marketing</em> (7th ed.). Pearson.
                  </p>
                  <p className="text-sm" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                    • Jabatan Pendidikan Politeknik & Kolej Komuniti, Malaysia. (2026). <em>Industrial Training Report Guide</em>.
                  </p>
                </div>
              </div>
            </section>
            {/*
              <section>
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  3. Rujukan Tambahan Dalam Laporan Anda
                </h2>
                <ul className={`mt-3 list-disc ml-5 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  <li>Manual latihan industri syarikat (contoh: SOP, garis panduan marketing). </li>
                  <li>Dokumentasi platform teknikal yang digunakan (contoh: WA Toolbox, Canva, Excel, CRM).</li>
                  <li>Rujukan akademik asas digital marketing untuk metodologi dan analisis hasil.
                  </li>
                </ul>
              </section> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
