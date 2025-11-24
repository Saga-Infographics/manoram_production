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
    <div className="bg-white w-full relative">
      <SEO title="Contact" description="Contact and booking information for Manoram Production — email, phone, and social profiles." path="/contact" />
      <Header activePage="Contact" />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Contact form */}
            <div>
              <ContactInfoSection />
            </div>

            {/* Right: Contact details */}
            <aside className="space-y-4">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl tracking-[0] leading-9 mb-2">
                Reach Out
              </h1>

              <article className="card animate-fade-up" style={{ ['--animation-delay' as any]: '0.04s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Email</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">contact@manoramproduction.com</div>
                  </div>
                </div>
              </article>

              <article className="card animate-fade-up" style={{ ['--animation-delay' as any]: '0.10s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Phone</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">+977 986-0765125</div>
                  </div>
                </div>
              </article>

              <article className="card animate-fade-up" style={{ ['--animation-delay' as any]: '0.16s' }}>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-medium text-[#171a1f] text-xl tracking-[0] leading-7 mb-4">Connect on Social Media</h2>
                <div className="flex items-center gap-3 mb-2">
                  {socialMediaButtons.map((social, idx) => {
                    const Icon = social.Icon;
                    return social.url ? (
                      <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.alt}>
                        <Button variant="outline" size="icon" className="w-11 h-11 bg-white border-2 border-solid border-[#dee1e6] rounded-full text-primary">
                          <Icon className="w-6 h-6" />
                        </Button>
                      </a>
                    ) : (
                      <Button key={idx} variant="outline" size="icon" className="w-11 h-11 bg-white border-2 border-solid border-[#dee1e6] rounded-full text-primary">
                        <Icon className="w-6 h-6" />
                      </Button>
                    );
                  })}
                </div>
              </article>

              <article className="card animate-fade-up" style={{ ['--animation-delay' as any]: '0.22s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img className="w-6 h-6" alt="Home" src="/home-2-1.svg" />
                  </div>
                  <div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f]">Permanent address</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">Gaighat, Nepal</div>
                    <div className="text-sm [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] mt-2">Current residence</div>
                    <div className="text-lg [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc]">Kathmandu, Nepal</div>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
