// React import removed because JSX runtime is automatic in this project (no direct React symbol usage)
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { useEffect, useRef, useState } from "react";

export const Home = (): JSX.Element => {
  const features = [
    {
      title: "Production Management",
      desc: "End-to-end production coordination — from budgeting and scheduling to on-set logistics and vendor management. We deliver organized shoots that respect timelines and creative vision.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 11h14M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Location Scouting & Permits",
      desc: "Scout visually striking locations and secure necessary permits and local liaison support — whether urban streets or remote landscapes — so your production runs smoothly.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Casting & Crew",
      desc: "We connect directors with carefully vetted actors, presenters and technical crew. Our casting process prioritizes fit, reliability and creative collaboration for each project.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Post Production",
      desc: "Comprehensive post workflows including offline/online editing, color grading, sound mixing and delivery masters optimized for festival, broadcast and digital platforms.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  // StatsGrid - modern statistics with count-up on enter
  const stats = [
    { label: "Finished Projects", value: 191, icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="4" y="9" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ) },
    { label: "Fixing & Producing", value: 174, icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) },
    { label: "Line Producing", value: 16, icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) },
    { label: "Happy Customers", value: 149, icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) },
  ];

  // Clients removed from Home — list kept in case we re-add later

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    let observed = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed) {
            observed = true;
            // animate each stat
            stats.forEach((s, idx) => {
              const duration = 1100 + idx * 120; // slight stagger
              const start = performance.now();
              const from = 0;
              const to = s.value;

              function step(now: number) {
                const t = Math.min((now - start) / duration, 1);
                const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad-ish
                const current = Math.floor(from + (to - from) * eased);
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[idx] = current;
                  return copy;
                });
                if (t < 1) requestAnimationFrame(step);
                else {
                  setCounts((prev) => {
                    const copy = [...prev];
                    copy[idx] = to;
                    return copy;
                  });
                }
              }

              requestAnimationFrame(step);
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Structured data for Organization and Service entries to improve SEO
  const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manoram Production",
    url: "https://manoramproduction.example",
    logo: "/images/pkdai2.jpg",
    sameAs: [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage",
      "https://youtube.com/yourchannel"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+977-1-XXXXXXXX",
      contactType: "customer service",
      areaServed: "NP",
      availableLanguage: ["English","Nepali"]
    }]
  } as const;

  const servicesStructured = features.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: f.title,
    description: f.desc,
    provider: {
      "@type": "Organization",
      name: "Manoram Production",
      url: "https://manoramproduction.example",
    }
  }));

  return (
    <div className="bg-white w-full relative">
      <SEO
        title="Home"
        description="Manoram Production — Nepal-based production house offering theatre direction, location shoots, casting, post-production and full production management. Contact us for film, stage and event production."
        path="/"
        image="/public/cover.jpg"
        structuredData={[orgStructuredData, ...servicesStructured]}
      />
      <Header activePage="Home" />
      <section
        className="relative w-full min-h-[56vh] md:min-h-[70vh] lg:min-h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url('/public/cover.jpg')` }}
        aria-label="Hero - Manoram Production"
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-3xl md:text-5xl mb-3">
                Manoram Production
              </h1>
              <p className="text-sm md:text-lg text-white/95 mb-3">A Nepal-based production house crafting theatre, film and media with local insight and international standards.</p>
              <p className="text-sm md:text-base text-white/85 mb-4">
                We produce thoughtful, culturally-rooted projects — from early concept workshops to final delivery — blending creative leadership with meticulous production execution across Nepal.
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

      <section className="relative w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/public/logo.png"
                alt="On location - Manoram Production"
                className="w-full h-full object-cover block rounded-lg"
                loading="lazy"
                decoding="async"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
              />
            </div>

            <div>
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-6">
                About Manoram Production
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Manoram Production is a creative studio and production house based in Nepal. We partner with directors, writers and brands to translate ideas into live performances, films and branded media. Our approach balances creative experimentation with production discipline so storytellers can focus on craft while we manage the logistics.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-8">
                From small ensemble theatre to full-scale film shoots, our team brings local networks, permitting experience and post-production workflows that help projects reach audiences on stage, screen and online platforms.
              </p>
              <div className="flex gap-4 items-center">
                <Button asChild variant="primary" className="px-6 py-3 rounded-full shadow-lg text-base">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button asChild variant="ghost" className="px-5 py-3 rounded-full border border-white/30 text-white bg-transparent hover:bg-white/5">
                  <Link to="/portfolio">Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-6 text-center">
            Featured Work
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-16 text-center max-w-3xl mx-auto">
            Explore some of Manoram Production's key performances and projects.
          </p>

          {/* Featured items (commented out examples) */}
          {/* Replace or re-enable items as needed */}
        </div>
      </section>

      {/* Our Statistics - modernized */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-center [font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-8">Our Statistics</h2>

          {/* stats with gradient cards and count-up */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="p-8 bg-gradient-to-br from-primary to-primary/70 text-white flex flex-col items-center justify-center gap-2">
                  <div className="bg-white/10 rounded-full p-3 mb-3 text-white">
                    {s.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {counts[i]}
                    <span className="text-xl align-super">+</span>
                  </div>
                  <div className="mt-2 uppercase text-sm tracking-wider text-white/90 text-center max-w-[10ch]">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Services - larger, descriptive cards */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-40">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl mb-6 text-center">Services — Full Breakdown</h2>
          <p className="text-center text-slate-700 max-w-3xl mx-auto mb-8">Below is a more detailed overview of our core services. Use these quick links to reach the right team member or request a tailored quote.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {features.map((f, i) => (
              <article key={i} className="card hover:shadow-lg transition-shadow duration-200 animate-fade-up flex flex-col justify-between h-full" style={{ ['--animation-delay' as any]: `${0.06 * i}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{f.title}</h3>
                    <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex items-center gap-3 w-full">
                    <Button asChild variant="outline" size="sm" className="px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                      <Link to="/services">Learn More</Link>
                    </Button>

                    <div className="ml-auto">
                      <Button asChild variant="primary" size="sm" className="whitespace-nowrap shrink-0">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team section removed per request */}

      {/* Clients & Partners section removed per request */}

      {/* FAQ + Newsletter + CTA cluster */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {[
                  {
                    q: 'How do I book Manoram Production?',
                    a: 'Use the contact form or email our production team — for large projects we recommend a brief call to outline scope and timelines.'
                  },
                  {
                    q: 'Do you handle permits for remote shoots?',
                    a: 'Yes — our location scouting service includes local liaison and permit support for urban and rural sites.'
                  },
                  {
                    q: 'Can you provide full post-production?',
                    a: 'We offer editing, color grading, sound design and final deliverables tailored to festival and broadcast requirements.'
                  }
                ].map((item, j) => (
                  <details key={j} className="p-4 bg-slate-50 rounded-md animate-fade-up" style={{ ['--animation-delay' as any]: `${0.06 * j}s` }}>
                    <summary className="font-medium cursor-pointer">{item.q}</summary>
                    <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Subscribe for Updates</h3>
              <p className="text-sm text-slate-600 mb-4">Get news about upcoming productions, workshops and casting calls.</p>
              <form className="flex gap-2 animate-fade-up" onSubmit={(e) => e.preventDefault()} aria-label="Subscribe to newsletter" style={{ ['--animation-delay' as any]: '0.04s' }}>
                <input type="email" placeholder="you@domain.com" required className="flex-1 rounded-md border border-slate-200 px-4 py-3" />
                <Button type="submit" variant="primary">Subscribe</Button>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/70 text-white rounded-2xl animate-fade-up" style={{ ['--animation-delay' as any]: '0.08s' }}>
                <h4 className="text-xl font-semibold">Ready to start your production?</h4>
                <p className="text-sm opacity-90">Tell us about your project and we'll prepare a tailored plan and estimate.</p>
                <div className="mt-4">
                  <Button asChild variant="ghost" className="bg-white/10 text-white px-4 py-2 rounded-md">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work was moved earlier in the document */}

      <Footer />
    </div>
  );
};
