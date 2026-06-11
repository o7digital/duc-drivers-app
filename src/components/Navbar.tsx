import { Activity, Building2, CarFront, Command, UserRound } from "lucide-react";

const links = [
  { href: "/", label: "Landing", icon: Activity },
  { href: "/usuario", label: "Usuario", icon: UserRound },
  { href: "/conductor", label: "Socio", icon: CarFront },
  { href: "/control", label: "Control Center", icon: Command },
];

export default function Navbar() {
  const path = typeof window === "undefined" ? "/" : window.location.pathname;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/40 bg-city-bg/78 backdrop-blur-2xl">
      <div className="container-page flex min-h-[74px] flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <a href="/" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-city-cyan to-city-blue text-sm font-black text-slate-950 shadow-glow">
            MO
          </span>
          <span>Mobility OS Mexico</span>
        </a>
        <div className="flex flex-wrap gap-2">
          {links.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <a
                key={href}
                href={href}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition ${
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
