import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

interface HeaderProps {
  activePage?: string;
}

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Productions", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const socialMediaIcons = [
  { Icon: FacebookIcon, alt: "Facebook", url: "#" },
  { Icon: InstagramIcon, alt: "Instagram", url: "#" },
  { Icon: YoutubeIcon, alt: "YouTube", url: "#" },
];

export const Header = ({ }: HeaderProps): JSX.Element => {
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    if (openMobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  return (
    <header className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-transparent">
      <nav className="container-modern flex items-center justify-between gap-6 py-4">
        <Link
          to="/"
          className={`flex items-center gap-4 transition-opacity duration-200 ${openMobile ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Go to homepage"
          title="Manoram Production — Home"
        >
          <div className="w-20 h-20 md:w-28 md:h-28 bg-transparent rounded-md flex items-center justify-center shadow-md">
            <img className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-sm" alt="Manoram Production logo" src="/logo.png" title="Manoram Production" />
          </div>
          <div>
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-primary text-lg md:text-xl tracking-[0] leading-5 whitespace-nowrap">
              Manoram Production
            </h1>
            <p className="text-xs text-gray-500 whitespace-nowrap">Productions • Media • Collaborations</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-4">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "[font-family:'Open_Sans',Helvetica] text-sm px-4 py-2 rounded-full transition-colors duration-200 font-semibold text-primary bg-primary/10 shadow-sm"
                      : "[font-family:'Open_Sans',Helvetica] text-sm px-4 py-2 rounded-full transition-colors duration-200 font-normal text-slate-800 hover:bg-primary/10 hover:text-primary"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Button asChild variant="primary" className="px-5 py-3 shadow-[var(--shadow-2)] hover:shadow-[var(--shadow-3)] transform hover:-translate-y-0.5 rounded-full">
              <a href="/contact">Get a Quote</a>
            </Button>

            <div className="flex items-center gap-3">
              {socialMediaIcons.map((icon) => {
                const Icon = icon.Icon;
                return (
                  <a key={icon.alt} href={icon.url} target="_blank" rel="noopener noreferrer" aria-label={icon.alt} className="inline-block">
                    <Button variant="ghost" size="icon" className="w-11 h-11 rounded-full p-0 hover:bg-primary/10 text-primary border-2 border-primary/30">
                      <Icon className="w-6 h-6" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
            <button
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle navigation"
              className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d={openMobile ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
        </div>
      </nav>

      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${openMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpenMobile(false)}
          aria-hidden="true"
        />

        {/* Compact right-side panel (nav only) */}
        <aside className={`fixed top-16 right-4 z-50 w-[320px] bg-white rounded-lg shadow-2xl transform transition-all duration-200 ${openMobile ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`} role="dialog" aria-modal="true">
          <div className="relative">
              <button
              onClick={() => setOpenMobile(false)}
              aria-label="Close menu"
              className="absolute right-3 top-3 w-8 h-8 rounded-md flex items-center justify-center border border-gray-200 bg-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Small logo to match the navbar */}
              <div className="absolute left-3 top-3 w-24 h-24 bg-transparent rounded-md flex items-center justify-center">
              <img className="w-20 h-20 object-contain drop-shadow-sm" alt="Manoram Production logo" src="/logo.png" title="Manoram Production" />
            </div>

            <div className="px-6 pt-20 pb-2">
              <nav>
                <ul className="flex flex-col gap-6">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} onClick={() => setOpenMobile(false)} className="block py-3 text-lg [font-family:'Open_Sans',Helvetica] font-medium text-[#171a1f] hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center gap-4">
              <Button asChild variant="primary" className="w-full">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {/* body-scroll lock is handled in a useEffect above */}
    </header>
  );
};
