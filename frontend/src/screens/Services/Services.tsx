import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import HeroImage from "../../components/ui/HeroImage";
import { Button } from "../../components/ui/button";
// Card components replaced by `.card` markup for consistent styling

const features = [
  {
    title: "Production Management",
    desc: "Scheduling, budgeting and on-set coordination to keep your shoot on time and on budget.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11h14M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Location Scouting & Permits",
    desc: "Local expertise to find unique locations and handle permits for urban and remote shoots.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Casting & Crew",
    desc: "Access to a vetted network of performers and technicians across Nepal.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Post Production",
    desc: "Editing, color grading, sound design and final delivery for festivals and broadcast.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const Services = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO
        title="Services"
        description="Production services offered by Manoram Production — production management, location scouting, permits, and post-production."
        path="/services"
      />
      <Header activePage="Services" />

      <section className="relative w-full py-20 bg-gradient-to-b from-[#f8fbff] to-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#0f2650] text-4xl md:text-5xl mb-4">
                Production Services
              </h1>
              <p className="[font-family:'Open_Sans',Helvetica] text-lg text-[#36454f] mb-6 max-w-2xl">
                Manoram Production provides end-to-end production solutions — from pre-production planning and permits to full production management and post-production services. We support international and local teams across Nepal's diverse locations.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button asChild variant="primary" className="px-6 py-3">
                  <a href="/contact">Get a Quote</a>
                </Button>
                <Button asChild variant="outline" className="px-6 py-3">
                  <a href="/portfolio">See Our Work</a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <HeroImage src="/images/pkdai2.jpg" alt="On location" caption="On-location production in Nepal" rotate={-6} className="md:!w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl mb-8 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => (
              <article key={idx} className="card hover:shadow-lg transition-shadow duration-200 animate-fade-up" style={{ ['--animation-delay' as any]: `${0.06 * idx}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{f.title}</h3>
                    <p className="text-sm text-[#47555b] mt-2">{f.desc}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-[#47555b]">We tailor each service to the project's needs — contact us to discuss logistics, crew, and timelines.</p>
                </div>

                <div className="mt-4">
                  <Button asChild variant="primary" size="sm">
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
