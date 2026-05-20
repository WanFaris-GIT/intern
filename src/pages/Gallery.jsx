import GlobeDomeGallery from "../components/GlobeDomeGallery";

const images = [
  { src: "/images/p1.jpeg", alt: "Gallery 1" },
  { src: "/images/p2.jpeg", alt: "Gallery 2" },
  { src: "/images/p3.jpeg", alt: "Gallery 3" },
  { src: "/images/p4.jpeg", alt: "Gallery 4" },
  { src: "/images/p5.jpeg", alt: "Gallery 5" },
  { src: "/images/p6.jpeg", alt: "Gallery 6" },
  { src: "/images/p7.jpeg", alt: "Gallery 7" },
  { src: "/images/p8.jpeg", alt: "Gallery 8" },
  { src: "/images/p9.jpeg", alt: "Gallery 9" },
  { src: "/images/p10.jpeg", alt: "Gallery 10" },
  { src: "/images/p11.jpeg", alt: "Gallery 11" },
  { src: "/images/p12.jpeg", alt: "Gallery 12" },
  { src: "/images/p13.jpeg", alt: "Gallery 13" },
  { src: "/images/p14.jpeg", alt: "Gallery 14" },
  { src: "/images/p15.jpeg", alt: "Gallery 15" },
  { src: "/images/p16.jpeg", alt: "Gallery 16" }
];

export default function Gallery() {
  const lowPowerMode = typeof window !== 'undefined' && window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)').matches;
  const gallerySegments = lowPowerMode ? 16 : 22;

  return (
    <div className="min-h-screen w-screen px-0">
      <div className="w-full h-screen bg-black/5">
        <div className="w-full h-full">
          <GlobeDomeGallery
            images={images}
            segments={gallerySegments}
            fit={0.58}
            grayscale={false}
          />
        </div>
      </div>
    </div>
  );
}

