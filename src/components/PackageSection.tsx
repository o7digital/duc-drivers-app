import { Crown, Package, ShieldCheck, Sparkles } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    title: "Packages",
    subtitle: "Planes claros para que cada socio vea que incluye su mensualidad y que puede desbloquear.",
    packages: [
      ["Starter", "$199/mes", "Bolsa ciudad", "Soporte basico"],
      ["Pro", "$299/mes", "Aeropuerto + alta demanda", "Estado de cuenta avanzado"],
      ["Elite", "$499/mes", "Hoteles y cuentas business", "Prioridad concierge"],
    ],
  },
  en: {
    title: "Packages",
    subtitle: "Clear plans so every partner can see what the subscription includes and what can be unlocked.",
    packages: [
      ["Starter", "$199/mo", "City marketplace", "Basic support"],
      ["Pro", "$299/mo", "Airport + high demand", "Advanced account statement"],
      ["Elite", "$499/mo", "Hotels and business accounts", "Concierge priority"],
    ],
  },
  fr: {
    title: "Packages",
    subtitle: "Des plans clairs pour que chaque socio voie ce que son abonnement inclut et ce qu'il peut debloquer.",
    packages: [
      ["Starter", "$199/mois", "Bourse ville", "Support basique"],
      ["Pro", "$299/mois", "Aeroport + forte demande", "Releve avance"],
      ["Elite", "$499/mois", "Hotels et comptes business", "Priorite concierge"],
    ],
  },
};

const icons = [Package, Sparkles, Crown];

export default function PackageSection() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black tracking-tight">{content.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{content.subtitle}</p>
        </div>
        <ShieldCheck className="shrink-0 text-city-green" />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {content.packages.map(([name, price, benefit, support], index) => {
          const Icon = icons[index];
          return (
            <div key={name} className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4">
              <div className="flex items-center justify-between gap-3">
                <Icon size={20} className={index === 2 ? "text-city-amber" : "text-city-cyan"} />
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-black text-slate-200">{price}</span>
              </div>
              <h4 className="mt-4 text-lg font-black">{name}</h4>
              <p className="mt-3 text-sm text-slate-300">{benefit}</p>
              <p className="mt-2 text-sm text-city-muted">{support}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
