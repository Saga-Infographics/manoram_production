import { Separator } from "../../../../components/ui/separator";
import FacebookIcon from "../../../../components/icons/FacebookIcon";
import InstagramIcon from "../../../../components/icons/InstagramIcon";
import YoutubeIcon from "../../../../components/icons/YoutubeIcon";

const socialIcons = [
  { Icon: FacebookIcon, alt: "Social icon 1" },
  { Icon: InstagramIcon, alt: "Social icon 2" },
  { Icon: InstagramIcon, alt: "Social icon 3" },
  { Icon: YoutubeIcon, alt: "Social icon 4" },
];

const sectionLinks = [
  { label: "Home" },
  { label: "About" },
  { label: "Portfolio" },
  { label: "Contact" },
];

const connectLinks = [{ label: "Social Media" }, { label: "Booking" }];

export const InquiryFormSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white py-11">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16">
          <div className="flex flex-col gap-10">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-base tracking-[0] leading-6">
              Elegant portfolio for an actor.
            </p>
            <div className="flex gap-6">
              {socialIcons.map((icon, index) => {
                const Icon = icon.Icon;
                return (
                  <button
                    key={index}
                    className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity text-primary border-2 border-[#dee1e6] rounded-md"
                    aria-label={icon.alt}
                  >
                    <Icon className="w-7 h-7" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-base tracking-[0] leading-6">
              Sections
            </h3>
            <nav className="flex flex-col gap-3">
              {sectionLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-left opacity-80 [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-sm tracking-[0] leading-5 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-base tracking-[0] leading-6">
              Connect
            </h3>
            <nav className="flex flex-col gap-3">
              {connectLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-left opacity-80 [font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-sm tracking-[0] leading-5 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="mt-16" />
      </div>
    </footer>
  );
};
