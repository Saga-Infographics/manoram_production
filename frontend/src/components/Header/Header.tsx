import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  activePage?: string;
}

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/biography" },
  { label: "Productions", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const socialMediaIcons = [
  { alt: "Facebook", src: "/facebook.svg", url: "#" },
  { alt: "Instagram", src: "/instagram.svg", url: "#" },
  { alt: "YouTube", src: "/youtube-1.svg", url: "#" },
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
    <header className="w-full bg-white/70 backdrop-blur-sm sticky top-0 z-40 shadow-sm border-b border-slate-100">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
            <div className="w-24 h-24 bg-transparent rounded-md flex items-center justify-center shadow-sm">
              <img className="w-19 h-19 object-contain" alt="Manoram Production logo" src="/logo.png" />
            </div>
          <div>
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-base md:text-lg tracking-[0] leading-5 whitespace-nowrap">
              Manoram Production
            </h1>
            <p className="text-xs text-gray-500 whitespace-nowrap">Productions • Media • Collaborations</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "[font-family:'Open_Sans',Helvetica] text-sm px-3 py-2 rounded-lg transition-colors duration-200 font-semibold text-[#18386e]"
                      : "[font-family:'Open_Sans',Helvetica] text-sm px-3 py-2 rounded-lg transition-colors duration-200 font-normal text-[#171a1f] hover:text-[#18386e]"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Button asChild variant="primary" className="px-4 py-2">
              <a href="/contact">Get a Quote</a>
            </Button>

            <div className="flex items-center gap-3">
              {socialMediaIcons.map((icon) => (
                <a key={icon.alt} href={icon.url} target="_blank" rel="noopener noreferrer" aria-label={icon.alt} className="inline-block">
                  <Button variant="ghost" size="icon" className="w-10 h-10 rounded-md p-0 hover:bg-[#f6f9ff]">
                    <img className="w-4 h-4" alt={icon.alt} src={icon.src} />
                  </Button>
                </a>
              ))}
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#18386e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#18386e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Small logo to match the navbar */}
            <div className="absolute left-3 top-3 w-20 h-20 bg-transparent rounded-md flex items-center justify-center">
              <img className="w-16 h-16 object-contain" alt="Manoram Production logo" src="/logo-circle.png" />
            </div>

            <div className="px-6 pt-6 pb-2">
              <nav>
                <ul className="flex flex-col gap-6">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} onClick={() => setOpenMobile(false)} className="block py-3 text-lg [font-family:'Open_Sans',Helvetica] font-medium text-[#171a1f] hover:text-[#18386e]">
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
