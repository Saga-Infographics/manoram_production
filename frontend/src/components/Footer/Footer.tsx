import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const socialIcons = [
  { Icon: FacebookIcon, alt: "Facebook", url: "#" },
  { Icon: InstagramIcon, alt: "Instagram", url: "#" },
  { Icon: YoutubeIcon, alt: "YouTube", url: "#" },
];

const sectionLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Productions", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-primary/20 text-primary-foreground pt-16 pb-8 shadow-inner">
      <div className="container-modern">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-20 h-20 flex items-center justify-center">
                  <div className="rounded-full p-1 bg-primary/10 flex items-center justify-center">
                    <img className="w-16 h-16 object-contain rounded-full" alt="Manoram Production logo" src="/logo.png" />
                  </div>
                </div>
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-xl">
                Manoram Production
              </h3>
            </div>
            <p className="text-sm text-slate-800 max-w-md">
              Manoram Production is a creative production house producing culturally rooted theatre, film and live events that engage communities and spark social conversations.
            </p>

            <div className="flex items-center gap-3 mt-3">
              {socialIcons.map((icon, index) => {
                const Icon = icon.Icon;
                return (
                  <a
                    key={index}
                    href={icon.url ?? '#'}
                    aria-label={icon.alt}
                    className="w-10 h-10 rounded-md bg-white/0 border-2 border-primary/30 flex items-center justify-center hover:bg-primary/10 transition shadow-sm text-primary"
                    target={icon.url && icon.url !== '#' ? '_blank' : undefined}
                    rel={icon.url && icon.url !== '#' ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-800">
              {sectionLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-primary transition underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Stay in touch</h4>
              <p className="text-sm text-slate-800 mb-3">Subscribe for occasional news about productions and events.</p>
              <form className="flex gap-2">
                <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-md bg-white text-black placeholder:text-gray-500" />
                <Button type="submit" className="rounded-md">Subscribe</Button>
              </form>
          </div>
        </div>

        <Separator className="my-8 border-primary/30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-700">
          <div>© {new Date().getFullYear()} Manoram Production. All rights reserved.</div>
          <div>Developed by Saga Infographics</div>
        </div>
      </div>
    </footer>
  );
};
