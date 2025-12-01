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
    <div className="w-full relative">
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
              <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-10 h-1 rounded-full bg-primary/90 block" />
                  <span className="text-sm font-medium text-secondary/80">Services</span>
                </div>

                <div className="relative max-w-2xl">
                  <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-secondary text-4xl md:text-6xl mb-4 leading-tight">
                    <span className="inline-block mr-2 bg-gradient-to-r from-primary/0 via-primary/20 to-transparent px-2 py-1 rounded">End-to-end</span>
                    Production Services
                  </h1>
                  <div className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none opacity-60" />
                </div>

                <p className="[font-family:'Open_Sans',Helvetica] text-lg text-[#55595d] mb-6 max-w-2xl leading-relaxed">
                  From pre-production and location permits to full production management and post-production. We combine local knowledge with international standards to deliver productions that meet creative and logistical goals.
                </p>

              {/* CTA moved to the right column on larger screens per request */}
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-[1.02] transition-transform duration-400 relative flex flex-col items-center md:items-end">
                <img src="/cover.jpg" alt="Production on location" className="w-full h-auto rounded-2xl shadow-2xl object-cover" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-60 pointer-events-none" />

                {/* play overlay */}
                <a href="#" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-6 md:translate-x-0 md:-translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-primary/20 hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7-11-7z" fill="currentColor"/></svg>
                  </div>
                </a>

                <div className="mt-6 md:mt-8 w-full flex flex-col items-center md:items-end md:flex-row md:justify-end md:gap-4">
                  <div className="flex gap-4 items-center">
                    <Button asChild variant="primary" className="px-6 py-3 rounded-full shadow-xl">
                      <a href="/contact">Get a Quote</a>
                    </Button>
                    <Button asChild variant="outline" className="px-6 py-3 rounded-full">
                      <a href="/portfolio">See Our Work</a>
                    </Button>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-3 text-sm text-slate-600">Or call us: <a href="tel:+9779860765125" className="text-secondary font-medium">+977 986-0765125</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl mb-8 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {features.map((f, idx) => (
              <article key={idx} className="card group relative overflow-hidden rounded-2xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 p-6 flex flex-col justify-between" style={{ ['--animation-delay' as any]: `${0.06 * idx}s` }}>
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-primary/70" />

                <div className="flex items-start gap-4">
                  <div className="w-18 h-18 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/95 to-primary/70 text-primary-foreground shadow-xl relative md:w-20 md:h-20">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center">{f.icon}</div>
                    <span className="absolute -inset-2 rounded-full blur-sm opacity-40 bg-gradient-to-br from-primary/30 to-transparent" />
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

      {/* Clients / Testimonials strip */}
      <section className="w-full py-12 bg-[#fffaf6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h3 className="text-center text-lg font-semibold text-secondary mb-6">Trusted by creatives & brands</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <p className="text-sm text-[#47555b]">“Manoram handled our shoot across multiple locations — great logistics and a calm, professional team. Delivery was on time.”</p>
              <div className="mt-4 text-sm font-medium text-secondary">— Creative Director, Kathmandu</div>
            </div>

            <div className="card p-6">
              <p className="text-sm text-[#47555b]">“Local knowledge and excellent vendor relationships made the shoot easy. Highly recommended for complex shoots.”</p>
              <div className="mt-4 text-sm font-medium text-secondary">— Producer, Pokhara</div>
            </div>

            <div className="card p-6">
              <p className="text-sm text-[#47555b]">“Post-production was fast and the final grade matched the look we asked for. Smooth communication throughout.”</p>
              <div className="mt-4 text-sm font-medium text-secondary">— Agency Rep, Lalitpur</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="bg-black text-white rounded-2xl px-6 py-8 relative overflow-visible">
            <div className="flex items-center justify-start gap-6">
              <div>
                <h3 className="text-xl font-semibold">Ready to start your production?</h3>
                <p className="text-sm text-white/80">Tell us about your project and we'll prepare a tailored plan and estimate.</p>
              </div>
              {/* small-screen CTA (stays inside box) */}
              <div className="flex items-center gap-3 ml-auto md:hidden">
                <Button asChild variant="primary" className="px-5 py-3 rounded-full">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
                <Button asChild variant="outline" className="px-4 py-2 rounded-full bg-white/5 border-white/10 text-white">Learn More</Button>
              </div>
            </div>

            {/* pinned compact CTA inside the centered black box on md+ screens */}
            <div className="hidden md:block absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10">
              <Button asChild variant="primary" className="px-3 py-2 rounded-full text-sm shadow-lg">
                <Link to="/contact" aria-label="Contact Our Team">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
