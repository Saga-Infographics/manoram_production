import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

const categories = ["All", "Director", "Actor", "Writer"];

const portfolioItems = [
  {
    title: "Barista Balaram",
    category: "Actor",
    year: "2025",
    role: "Actor",
    description: "Recently released film in which he played the role of Maila.",
    image: "/images/barista-balaram_2.jpg",
  },
  {
    title: "Hostel Returns",
    category: "Actor",
    year: "2015",
    role: "Actor (Breakout role: 'Pk Don')",
    description: "Breakout film role in the popular Nepali movie 'Hostel Returns' (2015).",
    image: "/images/hostel_return2.jpg",
  },
  {
    title: "Maun",
    category: "Actor",
    year: "2013",
    role: "Actor",
    description: "Maun (2013) - Appeared as Aman's friend in the film.",
    image: "/images/maun_2013.jpg",
  },
  {
    title: "Jhimkey Mama",
    category: "Director",
    year: "2020",
    role: "Writer & Director",
    description: "Original play based on a real story told by advocate Durga Prasad Pandey, set in imaginary village Deurali",
    image: "/images/jhimkey_mama.jpg",
  },
  {
    title: "Masaantaar",
    category: "Director",
    year: "2017",
    role: "Writer & Director",
    description: "Story of a young boy and his sister who tries to go against superstitions but is threatened by the society and people who have strong belief on ghosts and traditional healers.",
    image: "/images/masantaar.jpg",
  },
  {
    title: "Kalapattharmathi",
    category: "Director",
    year: "2017",
    role: "Director",
    description: "Theatrical production at Mandala Theatre Nepal",
    image: "/images/kaalaa_pathar_mathi.jpg",
  },
  {
    title: "Aakash Ko Bato",
    category: "Director",
    year: "—",
    role: "Director",
    description:
      "Stage production presented by Mandala Theatre (Aakash Ko Bato / The Sky Route). Visit Mandala Theatre for production details and credits.",
    image: "/images/aakashkobato.webp",
  },
  {
    title: "Sunkeshari",
    category: "Actor",
    year: "2023",
    role: "Actor",
    description: "A play based on a Karnali folk story; premiered at Rongo Harshe Bingo Barshe (Dhaka, 2012) and opened Kathmandu International Theatre Festival 2012; later staged at major festivals including Bharat Rang Mahotsav.",
    image: "/images/Final_sunkeshari-poster-KTM.jpg",
  },
  {
    title: "Masaantaar",
    category: "Writer",
    year: "2017",
    role: "Playwright",
    description: "60-minute play exploring contradictions between conservative and modern mindsets in rural villages",
    image: "/images/masantaar.jpg",
  },
  {
    title: "Jhimke Mama",
    category: "Writer",
    year: "2020",
    role: "Playwright",
    description: "Original play based on a real story told by advocate Durga Prasad Pandey, set in imaginary village Deurali",
    image: "/images/jhimkey_mama.jpg",
  },
];

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Build structured data for each production (CreativeWork)
  const structuredData = portfolioItems.map((item) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    image: item.image ? `https://manoram-production.com${item.image}` : undefined,
    datePublished: item.year && item.year !== "—" ? item.year : undefined,
    author: {
      "@type": "Person",
      name: "Manoram Production",
    },
  }));

  const filteredItems = (() => {
    if (activeCategory !== "All") {
      return portfolioItems.filter((item) => item.category === activeCategory);
    }

    // When viewing "All", dedupe items by title so the same production
    // (which may have multiple entries for different roles) only appears once.
    const seen = new Set<string>();
    return portfolioItems.filter((item) => {
      const key = (item.title || "").toString().toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  const [selectedItem, setSelectedItem] = useState<any>(null);

  const closeModal = () => setSelectedItem(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bg-white w-full relative">
      <SEO title="Productions" description="Selected theatrical and film work presented by Manoram Production — directing, writing and acting credits." path="/productions" structuredData={structuredData} />
      <Header activePage="Productions" />

      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-5xl tracking-[0] leading-[60px] mb-6 text-center">
            Productions
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-12 text-center max-w-3xl mx-auto">
            A collection of theatrical works spanning directing, writing, and acting. Each production explores Nepali culture, social issues, and the human experience through powerful storytelling.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-[#18386e] hover:bg-[#18386e]/90 text-white px-8"
                    : "border-[#dee1e6] text-[#171a1f] hover:bg-slate-50 px-8"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden">
                <div className="relative">
                  <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>

                  {/* Overlay with CTA */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-200">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button onClick={() => setSelectedItem(item)} variant="primary" className="px-4 py-2">
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#18386e] text-sm tracking-[0] leading-5">
                      {item.category}
                    </span>
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[0] leading-7 mb-2">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-base tracking-[0] leading-6 mb-2">
                    {item.role}
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal detail view (full-screen) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} details`}
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 w-full h-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-transparent h-full overflow-hidden">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-6 top-6 z-20 text-white text-3xl leading-3"
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row w-full h-full">
                <div className="md:w-1/2 w-full h-full flex items-center justify-center bg-black">
                  {selectedItem.image ? (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800" />
                  )}
                </div>

                <div className="md:w-1/2 w-full h-full bg-black/60 backdrop-blur-sm text-white p-6 md:p-12 overflow-auto">
                  <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-4xl mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-lg text-slate-200 mb-6">{selectedItem.description}</p>

                  <div className="space-y-3 text-sm text-slate-300">
                    <div>
                      <strong className="text-white">Category:</strong> {selectedItem.category}
                    </div>
                    <div>
                      <strong className="text-white">Role:</strong> {selectedItem.role}
                    </div>
                    <div>
                      <strong className="text-white">Year:</strong> {selectedItem.year}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      variant="outline"
                      className="border-white text-white bg-white/5 hover:bg-white/10"
                      onClick={() => { /* placeholder for trailer or details */ }}
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
