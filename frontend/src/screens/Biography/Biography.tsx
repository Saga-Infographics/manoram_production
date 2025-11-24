// React import not required with the new JSX transform
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Link } from "react-router-dom";

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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl text-[#171a1f]">What we do</h2>
            <p className="text-slate-700">
              We combine artistic practice with professional production management — offering concept development, casting & rehearsals, location & logistics, crew hiring, on-set coordination and post-production delivery for festivals, broadcast and digital platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Development & Script Support</h4>
                <p className="text-sm text-slate-600">Workshops, dramaturgy and story development to strengthen projects before production.</p>
              </div>
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Production Management</h4>
                <p className="text-sm text-slate-600">Budgeting, scheduling, permits and on-ground coordination to deliver projects on time and on brief.</p>
              </div>
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Casting & Direction Support</h4>
                <p className="text-sm text-slate-600">Casting, rehearsals and creative supervision to achieve strong performances.</p>
              </div>
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Post-Production & Delivery</h4>
                <p className="text-sm text-slate-600">Editing, audio, grading and festival/broadcast delivery masters.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-6 bg-white border rounded-lg shadow-sm">
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
            </div>

            <div className="p-6 bg-slate-50 border rounded-lg text-sm">
              <h5 className="font-semibold">Work with us</h5>
              <p className="text-slate-700 mt-2">Whether you are a director, writer or brand, we offer partnership models from co-development to full production services.</p>
              <div className="mt-4">
                <Link to="/contact" className="inline-block bg-primary text-white px-4 py-2 rounded-md">Get in touch</Link>
              </div>
            </div>
          </aside>
        </section>

        <section className="mb-14">
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Team & Collaborators</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            <div className="text-center">
              <img src="/images/team-1.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Director</div>
            </div>
            <div className="text-center">
              <img src="/images/team-2.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Producer</div>
            </div>
            <div className="text-center">
              <img src="/images/team-3.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Cinematography</div>
            </div>
            <div className="text-center">
              <img src="/images/team-4.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Design</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Major Works & Productions</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-6 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-3xl w-20 flex-shrink-0">{achievement.year}</span>
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
// React import not required with the new JSX transform
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Link } from "react-router-dom";

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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl text-[#171a1f]">What we do</h2>
            <p className="text-slate-700">
              We combine artistic practice with professional production management — offering concept development, casting & rehearsals, location & logistics, crew hiring, on-set coordination and post-production delivery for festivals, broadcast and digital platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Development & Script Support</h4>
                <p className="text-sm text-slate-600">Workshops, dramaturgy and story development to strengthen projects before production.</p>
              </div>
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Production Management</h4>
                <p className="text-sm text-slate-600">Budgeting, scheduling, permits and on-ground coordination to deliver projects on time and on brief.</p>
              </div>
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Casting & Direction Support</h4>
                <p className="text-sm text-slate-600">Casting, rehearsals and creative supervision to achieve strong performances.</p>
              </div>
              <div className="p-5 border rounded-lg">
                <h4 className="font-semibold">Post-Production & Delivery</h4>
                <p className="text-sm text-slate-600">Editing, audio, grading and festival/broadcast delivery masters.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-6 bg-white border rounded-lg shadow-sm">
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
            </div>

            <div className="p-6 bg-slate-50 border rounded-lg text-sm">
              <h5 className="font-semibold">Work with us</h5>
              <p className="text-slate-700 mt-2">Whether you are a director, writer or brand, we offer partnership models from co-development to full production services.</p>
              <div className="mt-4">
                <Link to="/contact" className="inline-block bg-primary text-white px-4 py-2 rounded-md">Get in touch</Link>
              </div>
            </div>
          </aside>
        </section>

        <section className="mb-14">
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Team & Collaborators</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            <div className="text-center">
              <img src="/images/team-1.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Director</div>
            </div>
            <div className="text-center">
              <img src="/images/team-2.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Producer</div>
            </div>
            <div className="text-center">
              <img src="/images/team-3.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Cinematography</div>
            </div>
            <div className="text-center">
              <img src="/images/team-4.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
              <div className="text-sm mt-2">Design</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Major Works & Productions</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-6 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-3xl w-20 flex-shrink-0">{achievement.year}</span>
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

// React import not required with the new JSX transform
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const achievements = [
  import { Header } from "../../components/Header/Header";
  import { Footer } from "../../components/Footer";
  import { SEO } from "../../components/SEO/SEO";
  import { Link } from "react-router-dom";

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
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl text-[#171a1f]">What we do</h2>
              <p className="text-slate-700">
                We combine artistic practice with professional production management — offering concept development, casting & rehearsals, location & logistics, crew hiring, on-set coordination and post-production delivery for festivals, broadcast and digital platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-5 border rounded-lg">
                  <h4 className="font-semibold">Development & Script Support</h4>
                  <p className="text-sm text-slate-600">Workshops, dramaturgy and story development to strengthen projects before production.</p>
                </div>
                <div className="p-5 border rounded-lg">
                  <h4 className="font-semibold">Production Management</h4>
                  <p className="text-sm text-slate-600">Budgeting, scheduling, permits and on-ground coordination to deliver projects on time and on brief.</p>
                </div>
                <div className="p-5 border rounded-lg">
                  <h4 className="font-semibold">Casting & Direction Support</h4>
                  <p className="text-sm text-slate-600">Casting, rehearsals and creative supervision to achieve strong performances.</p>
                </div>
                <div className="p-5 border rounded-lg">
                  <h4 className="font-semibold">Post-Production & Delivery</h4>
                  <p className="text-sm text-slate-600">Editing, audio, grading and festival/broadcast delivery masters.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="p-6 bg-white border rounded-lg shadow-sm">
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
              </div>

              <div className="p-6 bg-slate-50 border rounded-lg text-sm">
                <h5 className="font-semibold">Work with us</h5>
                <p className="text-slate-700 mt-2">Whether you are a director, writer or brand, we offer partnership models from co-development to full production services.</p>
                <div className="mt-4">
                  <Link to="/contact" className="inline-block bg-primary text-white px-4 py-2 rounded-md">Get in touch</Link>
                </div>
              </div>
            </aside>
          </section>

          <section className="mb-14">
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Team & Collaborators</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <div className="text-center">
                <img src="/images/team-1.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
                <div className="text-sm mt-2">Director</div>
              </div>
              <div className="text-center">
                <img src="/images/team-2.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
                <div className="text-sm mt-2">Producer</div>
              </div>
              <div className="text-center">
                <img src="/images/team-3.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
                <div className="text-sm mt-2">Cinematography</div>
              </div>
              <div className="text-center">
                <img src="/images/team-4.jpg" alt="Team member" className="w-full h-28 object-cover rounded-md" onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = 'none';}} />
                <div className="text-sm mt-2">Design</div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl mb-6">Major Works & Productions</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-6 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                  <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-3xl w-20 flex-shrink-0">{achievement.year}</span>
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
