// React import not required with the new JSX transform
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const achievements = [
  {
    year: "2024",
    title: "Director",
    description: "Recent production at Mandala Theatre Nepal"
  },
  {
    year: "2020",
    title: "Writer & Director - Jhimke Mama",
    description: "Original play staged at Mandala Theatre Nepal"
  },
  {
    year: "2017",
    title: "Writer & Director - Masaantaar",
    description: "Political satire exploring superstitions in rural Nepal"
  },
  {
    year: "2017",
    title: "Director - Kala patthar mathi",
    description: "Production at Mandala Theatre Nepal"
  }
];

const training = [
  {
    institution: "Mandala Theatre Nepal",
    degree: "Member of Executive Board (NGO)",
    year: "Present"
  },
  {
    institution: "Mandala Theatre Nepal",
    degree: "Member of Company Board",
    year: "Present"
  }
];

export const Biography = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Biography" description="About Manoram Production — company biography, achievements, and major productions." path="/biography" />
      <Header activePage="Biography" />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-24">
            <div className="aspect-[3/4] rounded-lg sticky top-8 overflow-hidden">
              <img
                src="/images/pkdai2.jpg"
                alt="Manoram Production"
                className="w-full h-full object-cover block rounded-lg"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  // fallback to existing pkdai.png if pkdai2.jpg is missing
                  (e.currentTarget as HTMLImageElement).src = '/images/pkdai.png';
                }}
              />
            </div>
            <div>
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-5xl tracking-[0] leading-[60px] mb-8">
                Biography
              </h1>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Manoram Production is a creative company focused on theatre and media projects rooted in local culture and community themes. The company works with artists and partners to produce thought-provoking performances and media initiatives.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                The team collaborates with local organizations and festivals to develop productions that address social issues and cultural narratives, balancing traditional forms with contemporary storytelling approaches.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                Manoram Production's body of work includes a range of stage productions and media projects created in partnership with theatre companies and community artists.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Professional Roles & Affiliations
            </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {training.map((item, index) => (
                <div key={index} className="border border-solid border-[#dee1e6] rounded-lg p-8">
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-3">
                    {item.institution}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-lg tracking-[0] leading-7 mb-2">
                    {item.degree}
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-base tracking-[0] leading-6">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Major Works & Productions
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-8 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                   <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-3xl tracking-[0] leading-9 w-20 md:w-20 flex-shrink-0">
                    {achievement.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
