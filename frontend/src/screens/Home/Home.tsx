// React import removed because JSX runtime is automatic in this project (no direct React symbol usage)
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Home" description="Manoram Production — portfolio, projects, and contact for bookings and collaborations." path="/" image="/images/pkdai2.jpg" />
      <Header activePage="Home" />
      <section
        className="relative w-full h-[680px] md:h-[760px] bg-cover bg-center"
        style={{ backgroundImage: `url('/images/pkdai2.jpg')` }}
        aria-label="Hero - Manoram Production"
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-2xl md:text-4xl mb-2">
                Manoram Production
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-4">Productions • Media • Collaborations</p>
              <p className="text-sm md:text-base text-white/80 mb-4">
                Production services and creative projects across Nepal — from location shoots to post production.
              </p>
              <div className="flex gap-3">
                <Button asChild variant="primary" className="px-4 py-2">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button asChild variant="ghost" className="px-4 py-2 border border-white/30 text-white bg-transparent hover:bg-white/5">
                  <Link to="/portfolio">Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* small decorative left/right arrows like reference (non-functional) */}
        <button aria-hidden="true" className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center">
          ‹
        </button>
        <button aria-hidden="true" className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center">
          ›
        </button>
      </section>

      <section className="relative w-full py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/pkdai2.jpg"
                alt="Manoram Production on bridge"
                className="w-full h-full object-cover block rounded-lg"
                loading="lazy"
                decoding="async"
                onError={(e) => ((e.currentTarget as HTMLImageElement).src = '/images/pkdai2.jpg')}
              />
            </div>
            <div>
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-6">
                About Me
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                With over 15 years of experience in the performing arts, I have dedicated my career to bringing compelling stories and characters to audiences around the world.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-8">
                From classical theater to contemporary cinema, my versatility and commitment to craft have earned recognition from both critics and peers.
              </p>
              <Button asChild className="bg-[#18386e] hover:bg-[#18386e]/90 text-white px-8 py-6 text-base h-auto">
                <Link to="/biography">Read Full Biography</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-6 text-center">
            Featured Work
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-16 text-center max-w-3xl mx-auto">
            Explore some of Manoram Production's key performances and projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Jhimke Mama",
                type: "Play (Director & Writer)",
                description:
                  "An original play (2020) written and directed by the company, based on a real story by Durga Prasad Pandey. Set in the village of Deurali, it explores identity and community perspectives.",
                // Put the poster image (place the file at public/images/jhimke-mama-poster.jpg)
                image: "/images/jhimkey_mama.jpg"
              },
              {
                title: "Masaantaar",
                type: "Play (Writer & Director)",
                description:
                  "Story of a young boy and his sister who tries to go against superstitions but is threatened by the society and people who have strong belief on ghosts and traditional healers.",
                image: "/images/masantaar.jpg"
              },
              {
                title: "Kaalaa Patthar Maathi",
                type: "Play (Director)",
                description: "Sufferings of a mother residing in mountains who wants to keep her family alive and together.",
                // Poster from Mandala Theatre page — place at public/images/kaalaa-patthar-maathi.jpg
                image: "/images/kaalaa_pathar_mathi.jpg"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/5] bg-slate-200 rounded-lg mb-4 overflow-hidden relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain block bg-black"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // hide the broken image so the gradient fallback is visible
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[0] leading-7 mb-2">
                  {item.title}
                </h3>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-base tracking-[0] leading-6">
                  {item.type}
                </p>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
