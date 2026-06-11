import { useState } from "react";
import { Activity, CarFront, Command, Menu, UserRound, X } from "lucide-react";

const links = [
  { href: "/", label: "Landing", icon: Activity },
  { href: "/usuario", label: "Usuario", icon: UserRound },
  { href: "/conductor", label: "Socio", icon: CarFront },
  { href: "/control", label: "Control Center", icon: Command },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = typeof window === "undefined" ? "/" : window.location.pathname;

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
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-700/70 bg-slate-950/60 text-slate-100 md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <div className={`${open ? "flex" : "hidden"} mt-4 flex-col gap-2 md:mt-0 md:flex md:flex-row md:flex-wrap md:justify-end`}>
          {links.map(({ href, label, icon: Icon }) => {
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
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
