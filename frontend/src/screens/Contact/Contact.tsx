// React import not required with the new JSX transform
import { Button } from "../../components/ui/button";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import MailIcon from "../../components/icons/MailIcon";
import PhoneIcon from "../../components/icons/PhoneIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import YoutubeIcon from "../../components/icons/YoutubeIcon";

const socialMediaButtons = [
  { Icon: FacebookIcon, alt: "Facebook", left: "left-40", url: "#" },
  { Icon: InstagramIcon, alt: "Instagram", left: "left-[216px]", url: "#" },
  { Icon: YoutubeIcon, alt: "You tube", left: "left-[328px]", url: "#" },
];

export const Contact = (): JSX.Element => {
  return (
    <div className="w-full relative">
      <SEO title="Contact" description="Contact and booking information for Manoram Production — email, phone, and social profiles." path="/contact" />
      <Header activePage="Contact" />

      <section className="w-full py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact details & quick info */}
            <aside className="space-y-8">
              <div>
                <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-4xl md:text-5xl text-secondary mb-2">Contact Manoram</h1>
                <p className="text-sm text-slate-600 max-w-xl">Whether you're booking a production, casting, or just want to collaborate, tell us about your project — we’ll get back with availability and a tailored plan.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/90 border border-[#efe7d6] shadow-md">
                <h3 className="font-semibold text-lg mb-4">Contact details</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-secondary">Email</div>
                      <div className="text-sm text-slate-700">contact@manoramproduction.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-secondary">Phone</div>
                      <div className="text-sm text-slate-700">+977 986-0765125</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="font-medium text-sm mb-3">Follow</h4>
                  <div className="flex items-center gap-3">
                    {socialMediaButtons.map((social, idx) => {
                      const Icon = social.Icon;
                      return (
                        <a key={idx} href={social.url ?? '#'} target="_blank" rel="noopener noreferrer" aria-label={social.alt}>
                          <Button variant="ghost" size="icon" className="w-11 h-11 rounded-full p-0 text-secondary border border-[#efe7d6] bg-white hover:bg-primary/10">
                            <Icon className="w-5 h-5" />
                          </Button>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <article className="card animate-fade-up p-6 bg-white/95">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img className="w-6 h-6" alt="Home" src="/home-2-1.svg" />
                  </div>
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-secondary">Address</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-slate-700">Kathmandu, Nepal</div>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden shadow-inner">
                <div className="w-full h-60 bg-gradient-to-b from-white/60 to-primary/6 flex items-center justify-center text-slate-400">
                  Map placeholder
                </div>
              </article>
            </aside>

            {/* Right: Contact form */}
            <div>
              <ContactInfoSection />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
