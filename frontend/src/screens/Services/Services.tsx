import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
// plain image used for hero (no animation)
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
// Card components replaced by `.card` markup for consistent styling

const features = [
  {
    title: "Production Management",
    desc: "Scheduling, budgeting and on-set coordination to keep your shoot on time and on budget.",
    items: [
      'Budgeting & cost control',
      'Scheduling, call sheets & on-set coordination',
      'Vendor & location logistics'
    ],
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
    items: [
      'Location reports with reference photos',
      'Permit applications & local liaison',
      'Access planning for remote sites'
    ],
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
    items: [
      'Casting calls and audition coordination',
      'Vetted local technicians and support crew',
      'Contracts, scheduling and payroll support'
    ],
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
    items: [
      'Offline & online editing workflows',
      'Color grading and delivery masters',
      'Sound design, mixing and stems'
    ],
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

      <section className="relative w-full py-24 bg-gradient-to-b from-[#fffaf6] to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-secondary text-4xl md:text-5xl mb-4">
                Production Services
              </h1>
              <p className="[font-family:'Open_Sans',Helvetica] text-lg text-[#47555b] mb-6 max-w-2xl leading-relaxed">
                End-to-end production solutions across Nepal — from pre-production planning and permits to full production management and post-production. We partner with local crews and international creatives to deliver high-quality productions on time and on budget.
              </p>

              <div className="flex gap-4 flex-wrap items-center">
                <Button asChild variant="primary" className="px-6 py-3 rounded-full shadow-lg">
                  <a href="/contact">Get a Quote</a>
                </Button>
                <Button asChild variant="outline" className="px-6 py-3 rounded-full">
                  <a href="/portfolio">See Our Work</a>
                </Button>
                <div className="ml-2 text-sm text-slate-600">Or call us: <a href="tel:+9779860765125" className="text-secondary font-medium">+977 986-0765125</a></div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-[1.02] transition-transform duration-400">
                <img src="/cover.jpg" alt="Production on location" className="w-full h-auto rounded-2xl shadow-xl object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl mb-8 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {features.map((f, idx) => (
              <article key={idx} className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-up p-6 flex flex-col justify-between" style={{ ['--animation-delay' as any]: `${0.06 * idx}s` }}>
                <div className="absolute left-4 top-4 w-14 h-1.5 bg-primary/80 rounded-full" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/95 to-primary/70 text-primary-foreground shadow-md">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-secondary">{f.title}</h3>
                    <p className="text-sm text-[#58636b] mt-2">{f.desc}</p>
                  </div>
                </div>

                {f.items && (
                  <ul className="mt-6 text-sm text-slate-600 list-disc list-inside space-y-1 max-w-[40ch]">
                    {f.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 text-sm text-[#47555b]">We tailor each service to the project's needs — contact us to discuss logistics, crew, and timelines.</div>

                <div className="mt-6">
                  <Button asChild variant="primary" size="sm" className="rounded-full px-4 py-2">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to start your production?</h3>
            <p className="text-sm text-white/80">Tell us about your project and we'll prepare a tailored plan and estimate.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="primary" className="px-5 py-3 rounded-full">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" className="px-4 py-2 rounded-full bg-white/5 border-white/10 text-white">Learn More</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
