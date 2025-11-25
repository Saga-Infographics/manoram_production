import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Button } from "../../components/ui/button";

// production categories removed — portfolio displays company productions by default

const portfolioItems = [
  {
    title: "Barista Balaram",
    category: "Actor",
    year: "2025",
    role: "Actor",
    description: "Recently released film in which he played the role of Maila.",
    image: "https://source.unsplash.com/800x1000/?actor,portrait",
  },
];

export const Portfolio = (): JSX.Element => {
  // no category filter for company-focused site; show all deduped productions

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
    // show all productions but dedupe by title so a production with multiple role entries appears once
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-4xl md:text-5xl tracking-[0] leading-[60px] mb-6 text-center">
            Productions
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-12 text-center max-w-3xl mx-auto">
            A collection of theatrical works spanning directing, writing, and acting. Each production explores Nepali culture, social issues, and the human experience through powerful storytelling.
          </p>

          {/* Category filters removed: portfolio shows company productions by default */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <article key={index} className="card group cursor-pointer overflow-hidden animate-fade-up" style={{ ['--animation-delay' as any]: `${0.04 * index}s` }}>
                <div className="relative">
                  <div className="aspect-[4/5] bg-slate-200 overflow-hidden rounded-md">
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

                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-primary text-sm tracking-[0] leading-5">
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
              </article>
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

          <div className="relative z-10 max-w-6xl w-full max-h-[90vh] mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-transparent max-h-[90vh] overflow-auto">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-6 top-6 z-20 text-white text-3xl leading-3"
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row w-full">
                <div className="md:w-1/2 w-full flex items-center justify-center bg-black">
                  {selectedItem.image ? (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="max-h-[70vh] w-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800" />
                  )}
                </div>

                <div className="md:w-1/2 w-full bg-black/60 backdrop-blur-sm text-white p-6 md:p-12 overflow-auto">
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
