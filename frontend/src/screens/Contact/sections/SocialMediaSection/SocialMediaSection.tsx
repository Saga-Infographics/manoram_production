import React from "react";
import { Button } from "../../../../components/ui/button";
import FacebookIcon from "../../../../components/icons/FacebookIcon";
import InstagramIcon from "../../../../components/icons/InstagramIcon";
import YoutubeIcon from "../../../../components/icons/YoutubeIcon";

const navigationItems = [
  { label: "Home", active: false },
  { label: "About", active: false },
  { label: "Productions", active: false },
  { label: "Services", active: false },
  { label: "Contact", active: true },
];

const socialMediaIcons = [
  { Icon: FacebookIcon, alt: "Facebook" },
  { Icon: InstagramIcon, alt: "Instagram" },
  { Icon: InstagramIcon, alt: "Linked in" },
  { Icon: YoutubeIcon, alt: "You tube" },
];

export const SocialMediaSection = (): JSX.Element => {
  return (
    <header className="w-full h-16 bg-white shadow-[0px_0px_1px_#171a1f0d,0px_0px_2px_#171a1f14]">
      <nav className="w-full h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-transparent rounded-md flex items-center justify-center">
            <img className="w-[22px] h-[22px] object-contain" alt="Manoram Production logo" src="/logo-circle.png" />
          </div>
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-xl tracking-[0] leading-5 whitespace-nowrap">
            Manoram Production
          </h1>
        </div>

        <ul className="flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`[font-family:'Open_Sans',Helvetica] text-sm tracking-[0] leading-[22px] whitespace-nowrap ${
                  item.active
                    ? "font-semibold text-primary"
                    : "font-normal text-[#171a1f]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socialMediaIcons.map((icon, index) => {
            const Icon = icon.Icon;
            return (
              <Button key={index} variant="ghost" size="icon" className="w-11 h-11 rounded-md p-0 text-primary border-2 border-[#dee1e6]">
                <Icon className="w-7 h-7" />
              </Button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
