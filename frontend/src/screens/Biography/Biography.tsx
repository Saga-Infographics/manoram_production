// Clean About component for `/about` route
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Link } from "react-router-dom";
import { useState } from "react";

// Small inline icon components for visual flair (keeps everything in one file)
const IconCheck = ({ className = "w-5 h-5 text-white" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClock = ({ className = "w-5 h-5 text-white" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPeople = ({ className = "w-5 h-5 text-white" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLocation = ({ className = "w-5 h-5 text-white" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 21s8-5.5 8-11a8 8 0 1 0-16 0c0 5.5 8 11 8 11z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const achievements = [
  {
    year: "2024",
    title: "Production — 'Jhimke Mama'",
    description:
      "A company production presented at Mandala Theatre that focused on identity and community across Nepal. Manoram Production handled full development, staging and festival distribution, including a national tour.",
  },
  {
    year: "2020",
    title: "Production — 'Masaantaar'",
    description:
      "An original Manoram Production play blending political satire with folklore; staged regionally with community workshops and outreach programs developed by the company.",
  },
  {
    year: "2017",
    title: "Production — 'Kaalaa Patthar Maathi'",
    description:
      "A socially-driven company production examining rural livelihoods and resilience; showcased at Mandala Theatre and invited to regional festivals under Manoram's production management.",
  },
];

const services = [
  {
    id: "production-management",
    title: "Production Management",
    summary: "End-to-end production coordination",
    detail:
      "End-to-end production coordination — from budgeting and scheduling to on-set logistics and vendor management. We deliver organized shoots that respect timelines and creative vision.",
    lead: "4–16 weeks",
  },
  {
    id: "location-scouting",
    title: "Location Scouting & Permits",
    summary: "Scout locations & secure permits",
    detail:
      "Scout visually striking locations and secure necessary permits and local liaison support — whether urban streets or remote landscapes — so your production runs smoothly.",
    lead: "2–8 weeks",
  },
  {
    id: "casting-crew",
    title: "Casting & Crew",
    summary: "Actors, presenters and technical crew",
    detail:
      "We connect directors with carefully vetted actors, presenters and technical crew. Our casting process prioritizes fit, reliability and creative collaboration for each project.",
    lead: "2–8 weeks",
  },
  {
    id: "post-production",
    title: "Post Production",
    summary: "Offline/online editing, grading, mix",
    detail:
      "Comprehensive post workflows including offline/online editing, color grading, sound mixing and delivery masters optimized for festival, broadcast and digital platforms.",
    lead: "2–8 weeks",
  },
];

function ServicesAccordion({ items }: { items: typeof services }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);
  return (
    <div className="space-y-3">
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} className="border rounded-lg overflow-hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`panel-${it.id}`}
              onClick={() => setOpen(isOpen ? null : it.id)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50"
            >
              <div className="text-left">
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-slate-600">{it.summary}</div>
              </div>
              <div className="ml-4">
                <span className="text-sm text-slate-500">{it.lead}</span>
                <svg
                  className={`w-5 h-5 ml-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            <div
              id={`panel-${it.id}`}
              role="region"
              aria-labelledby={`panel-${it.id}`}
              className={`${isOpen ? "block" : "hidden"} p-4 bg-white text-slate-700`}
            >
              {it.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Biography = (): JSX.Element => {
  const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manoram Production",
    url: "https://manoramproduction.example",
    logo: "/images/pkdai2.jpg",
    sameAs: [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage",
      "https://youtube.com/yourchannel",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+977-1-XXXXXXXX",
        contactType: "customer service",
        areaServed: "NP",
        availableLanguage: ["English", "Nepali"],
      },
    ],
  } as const;

  return (
    <div className="bg-white w-full relative">
      <SEO
        title="About"
        description="Manoram Production — a Kathmandu-based production house creating theatre, film and media rooted in Nepali culture. Read about our company, services and major works."
        path="/about"
        structuredData={[orgStructuredData]}
      />

      <Header activePage="About" />

      <header className="w-full bg-gradient-to-r from-primary/10 via-white to-primary/5 py-20">
        <div className="container-modern grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-5xl md:text-6xl leading-tight">
              Manoram Production
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl">
              A Kathmandu-based production house crafting theatre, film and media rooted in Nepali cultural narratives. We develop concept to delivery, partnering with artists and organisations to realise ambitious, audience-centred work.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="inline-block bg-primary text-white px-5 py-3 rounded-full shadow-md">
                Discuss a Project
              </Link>
              <a href="/portfolio" className="inline-block text-primary underline">
                View Productions
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/pkdai2.jpg"
              alt="Manoram Production"
              className="w-full h-72 md:h-96 object-cover block"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/pkdai.png';
              }}
            />
          </div>
        </div>
      </header>

      <main className="container-modern py-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-start">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white to-primary/5 p-6 rounded-2xl shadow-lg">
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl text-[#171a1f]">What we do</h2>
              <p className="text-slate-700 mt-3 max-w-prose">
                We combine artistic practice with professional production management — offering concept development, casting, logistics, rehearsals, and post-production delivery for festivals, broadcast and digital platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 items-stretch">
                {services.slice(0, 4).map((s) => {
                  const Icon = s.id === "production-management" ? IconClock : s.id === "location-scouting" ? IconLocation : s.id === "casting-crew" ? IconPeople : IconCheck;
                  return (
                    <div
                      key={s.id}
                      className="flex flex-col justify-between p-4 bg-white rounded-lg border border-slate-100 hover:shadow-sm transition-shadow duration-150 ease-in-out h-full"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-none w-10 h-10 rounded-md bg-primary/5 text-primary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-base text-slate-900 leading-tight">{s.title}</h4>
                          <p className="mt-1 text-sm text-slate-600">{s.summary}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="text-xs text-slate-400">{s.lead}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <ServicesAccordion items={services} />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-6 bg-white border rounded-2xl shadow">
              <h4 className="font-semibold text-primary">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-xs text-slate-600">Productions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-xs text-slate-600">Festivals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-slate-600">Collaborators</div>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md">
                  <span>Get in touch</span>
                </Link>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-b from-white to-slate-50 border rounded-2xl">
              <h5 className="font-semibold">Our Partners</h5>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <img src="/images/client-1.png" alt="Client" className="h-10 object-contain" />
                <img src="/images/client-2.png" alt="Client" className="h-10 object-contain" />
                <img src="/images/client-3.png" alt="Client" className="h-10 object-contain" />
                <img src="/images/client-4.png" alt="Client" className="h-10 object-contain" />
              </div>
            </div>
          </aside>
        </section>

        <section className="mb-14">
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Team & Collaborators</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
                <img src="/images/team-1.jpg" alt="Team member" className="w-full h-full object-cover" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              </div>
              <div className="text-sm mt-2 font-medium">Director</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
                <img src="/images/team-2.jpg" alt="Team member" className="w-full h-full object-cover" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              </div>
              <div className="text-sm mt-2 font-medium">Producer</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
                <img src="/images/team-3.jpg" alt="Team member" className="w-full h-full object-cover" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              </div>
              <div className="text-sm mt-2 font-medium">Cinematography</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
                <img src="/images/team-4.jpg" alt="Team member" className="w-full h-full object-cover" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              </div>
              <div className="text-sm mt-2 font-medium">Design</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Major Works & Productions</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-3xl w-full sm:w-20 flex-shrink-0">{achievement.year}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-2xl mb-2">{achievement.title}</h4>
                  <p className="text-slate-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Biography;
