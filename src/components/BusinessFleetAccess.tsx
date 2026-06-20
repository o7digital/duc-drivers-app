import { Building2, CarTaxiFront, Hotel, KeyRound, UsersRound } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    title: "Acceso business",
    badge: "Hoteles y cuentas B2B",
    subtitle: "Alta negocios que pueden solicitar, supervisar y liquidar flotillas de taxi desde un portal dedicado.",
    metrics: [
      ["Hoteles activos", "38"],
      ["Flotillas asignadas", "124"],
      ["Viajes corporativos", "1,842"],
    ],
    businesses: [
      ["Hotel Reforma Grand", "12 taxis asignados", "Concierge + facturacion"],
      ["Clinica Norte", "8 taxis asignados", "Traslados programados"],
      ["Centro Expo CDMX", "24 taxis asignados", "Picos por evento"],
    ],
    actions: ["Agregar business", "Asignar flotilla", "Portal concierge"],
  },
  en: {
    title: "Business access",
    badge: "Hotels and B2B accounts",
    subtitle: "Add businesses that can request, supervise and settle taxi fleets from a dedicated portal.",
    metrics: [
      ["Active hotels", "38"],
      ["Assigned fleets", "124"],
      ["Corporate trips", "1,842"],
    ],
    businesses: [
      ["Hotel Reforma Grand", "12 assigned taxis", "Concierge + billing"],
      ["North Clinic", "8 assigned taxis", "Scheduled transfers"],
      ["CDMX Expo Center", "24 assigned taxis", "Event peaks"],
    ],
    actions: ["Add business", "Assign fleet", "Concierge portal"],
  },
  fr: {
    title: "Acces business",
    badge: "Hotels et comptes B2B",
    subtitle: "Ajoutez des business qui peuvent demander, superviser et regler des flottes de taxi depuis un portail dedie.",
    metrics: [
      ["Hotels actifs", "38"],
      ["Flottes assignees", "124"],
      ["Trajets corporate", "1,842"],
    ],
    businesses: [
      ["Hotel Reforma Grand", "12 taxis assignes", "Concierge + facturation"],
      ["Clinique Nord", "8 taxis assignes", "Transferts planifies"],
      ["Centre Expo CDMX", "24 taxis assignes", "Pics evenementiels"],
    ],
    actions: ["Ajouter business", "Assigner flotte", "Portail concierge"],
  },
};

const metricIcons = [Hotel, CarTaxiFront, UsersRound];
const actionIcons = [Building2, CarTaxiFront, KeyRound];

export default function BusinessFleetAccess() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-city-blue/10 px-3 py-1 text-xs font-black uppercase text-city-blue">
            <Building2 size={14} />
            {content.badge}
          </span>
          <h3 className="mt-4 text-2xl font-black tracking-tight">{content.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:min-w-[360px]">
          {content.metrics.map(([label, value], index) => {
            const Icon = metricIcons[index];
            return (
              <div key={label} className="rounded-2xl border border-slate-700/60 bg-slate-950/45 p-3">
                <Icon size={17} className="text-city-cyan" />
                <p className="mt-3 text-lg font-black">{value}</p>
                <p className="mt-1 text-[11px] font-bold leading-4 text-city-muted">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_280px]">
        <div className="grid gap-3">
          {content.businesses.map(([name, fleet, detail]) => (
            <div key={name} className="flex items-center justify-between gap-4 rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4">
              <div>
                <p className="font-black">{name}</p>
                <p className="mt-1 text-sm text-city-muted">{detail}</p>
              </div>
              <span className="shrink-0 rounded-full bg-city-green/10 px-3 py-1 text-xs font-black text-city-green">{fleet}</span>
            </div>
          ))}
        </div>
        <div className="grid content-start gap-3">
          {content.actions.map((action, index) => {
            const Icon = actionIcons[index];
            return (
              <button key={action} className="flex items-center justify-between rounded-2xl border border-city-cyan/20 bg-city-cyan/5 px-4 py-3 text-left text-sm font-black text-cyan-100 transition hover:border-city-cyan/50 hover:bg-city-cyan/10">
                <span className="inline-flex items-center gap-3">
                  <Icon size={17} />
                  {action}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
