import { useState } from "react";
import { Activity, CarFront, Command, Globe2, Menu, Package, UserRound, X } from "lucide-react";
import { languages, pick, useLanguage } from "../i18n";

const copy = {
  es: {
    openMenu: "Abrir menu",
    closeMenu: "Cerrar menu",
    links: ["Landing", "Usuario", "Socio", "Packaging", "Control Center"],
  },
  en: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: ["Landing", "Passenger", "Partner", "Packaging", "Control Center"],
  },
  fr: {
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    links: ["Accueil", "Utilisateur", "Partenaire", "Packaging", "Control Center"],
  },
};

const links = [
  { href: "/", icon: Activity },
  { href: "/usuario", icon: UserRound },
  { href: "/conductor", icon: CarFront },
  { href: "/packaging", icon: Package },
  { href: "/control", icon: Command },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const path = typeof window === "undefined" ? "/" : window.location.pathname;
  const isControlPage = path.startsWith("/control");
  const content = pick(copy, language);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/40 bg-city-bg/78 backdrop-blur-2xl">
      <div className="container-page py-4">
        <div className="flex min-h-11 items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3 font-black tracking-tight" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-city-cyan to-city-blue text-sm font-black text-slate-950 shadow-glow">
              {isControlPage ? "DUC" : "TF"}
            </span>
            <span className="truncate">{isControlPage ? "DUC MobilityOS" : "Taxifacil por DUcDrivers Financial"}</span>
          </a>
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-700/70 bg-slate-950/60 text-slate-100 md:hidden"
            aria-label={open ? content.closeMenu : content.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <div className={`${open ? "flex" : "hidden"} mt-4 flex-col gap-3 md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center md:justify-end`}>
          {links.map(({ href, icon: Icon }, index) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-2xl border px-3.5 py-2 text-sm transition md:rounded-full ${
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
          <div className="flex items-center gap-1 rounded-2xl border border-slate-700/70 bg-slate-950/60 p-1 md:rounded-full">
            <Globe2 size={16} className="ml-2 hidden text-city-cyan sm:block" />
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                aria-pressed={language === item.code}
                onClick={() => setLanguage(item.code)}
                className={`min-h-9 rounded-xl px-3 text-xs font-black transition md:rounded-full ${
                  language === item.code ? "bg-city-cyan text-slate-950" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
