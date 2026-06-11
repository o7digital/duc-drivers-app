import { useState } from "react";
import { Activity, CarFront, Command, Globe2, Menu, UserRound, X } from "lucide-react";
import { languages, pick, useLanguage } from "../i18n";

const copy = {
  es: {
    openMenu: "Abrir menu",
    closeMenu: "Cerrar menu",
    links: ["Landing", "Usuario", "Socio", "Control Center"],
  },
  en: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: ["Landing", "Passenger", "Partner", "Control Center"],
  },
  fr: {
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    links: ["Accueil", "Utilisateur", "Partenaire", "Control Center"],
  },
};

const links = [
  { href: "/", icon: Activity },
  { href: "/usuario", icon: UserRound },
  { href: "/conductor", icon: CarFront },
  { href: "/control", icon: Command },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const path = typeof window === "undefined" ? "/" : window.location.pathname;
  const content = pick(copy, language);
  const languageSwitch = (
    <div className="flex items-center gap-1 rounded-2xl border border-slate-700/70 bg-slate-950/60 p-1 md:rounded-full">
      <Globe2 size={16} className="ml-2 hidden text-city-cyan lg:block" />
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          aria-label={item.label}
          aria-pressed={language === item.code}
          onClick={() => setLanguage(item.code)}
          className={`min-h-9 rounded-xl px-2.5 text-xs font-black transition md:rounded-full md:px-3 ${
            language === item.code ? "bg-city-cyan text-slate-950" : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          {item.shortLabel}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/40 bg-city-bg/78 backdrop-blur-2xl">
      <div className="container-page py-4">
        <div className="flex min-h-11 items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3 font-black tracking-tight" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-city-cyan to-city-blue text-sm font-black text-slate-950 shadow-glow">
              MO
            </span>
            <span className="truncate">Mobility OS Mexico</span>
          </a>
          <div className="ml-auto flex shrink-0 items-center gap-2 md:hidden">
            {languageSwitch}
          </div>
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-700/70 bg-slate-950/60 text-slate-100 md:hidden"
            aria-label={open ? content.closeMenu : content.openMenu}
            aria-controls="mobile-nav-menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <div
          id="mobile-nav-menu"
          className={`${open ? "grid" : "hidden"} mt-4 gap-2 rounded-3xl border border-slate-700/70 bg-slate-950/90 p-3 shadow-panel md:hidden`}
        >
          {links.map(({ href, icon: Icon }, index) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`inline-flex min-h-12 items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "border-city-cyan/40 bg-city-cyan/10 text-white"
                    : "border-transparent text-slate-300 hover:border-city-cyan/30 hover:bg-city-cyan/10 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {content.links[index]}
              </a>
            );
          })}
        </div>
        <div className="mt-4 hidden flex-wrap items-center justify-end gap-3 md:flex">
          {links.map(({ href, icon: Icon }, index) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <a
                key={href}
                href={href}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition ${
                  active
                    ? "border-city-cyan/40 bg-city-cyan/10 text-white"
                    : "border-transparent text-slate-300 hover:border-city-cyan/30 hover:bg-city-cyan/10 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {content.links[index]}
              </a>
            );
          })}
          {languageSwitch}
        </div>
      </div>
    </nav>
  );
}
