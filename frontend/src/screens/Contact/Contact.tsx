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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left: Contact details & quick info */}
            <aside className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <h1 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl tracking-[0] leading-9">
                  Reach Out
                </h1>
                <span className="text-sm text-slate-500">We usually reply within 2 business days.</span>
              </div>

              <div className="bg-gradient-to-br from-primary/6 via-primary/4 to-transparent p-6 rounded-2xl border border-[#efe7d6]">
                <h3 className="font-semibold text-lg mb-3">Contact details</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#171a1f]">Email</div>
                      <div className="text-sm text-[#171a1fcc]">contact@manoramproduction.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#171a1f]">Phone</div>
                      <div className="text-sm text-[#171a1fcc]">+977 986-0765125</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">Connect</h4>
                  <div className="flex items-center gap-3">
                    {socialMediaButtons.map((social, idx) => {
                      const Icon = social.Icon;
                      return (
                        <a key={idx} href={social.url ?? '#'} target="_blank" rel="noopener noreferrer" aria-label={social.alt}>
                          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full p-0 text-secondary border-2 border-[#efe7d6] hover:bg-primary/10">
                            <Icon className="w-5 h-5" />
                          </Button>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <article className="card animate-fade-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img className="w-6 h-6" alt="Home" src="/home-2-1.svg" />
                  </div>
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Address</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">Kathmandu, Nepal</div>
                  </div>
                </div>
              </article>

              <article className="card animate-fade-up">
                <div className="w-full h-48 bg-slate-100 rounded-md flex items-center justify-center text-slate-400">
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
