import { Gauge, MapPinned, TrendingUp } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    title: "Precio por km",
    subtitle: "Referencia clara para que el socio entienda cuanto gana por distancia, demanda y tipo de servicio.",
    rows: [
      ["Base ciudad", "$12.50 MXN/km", "Tarifa estandar"],
      ["Alta demanda", "$16.80 MXN/km", "+34% dinamico"],
      ["Aeropuerto", "$19.20 MXN/km", "Premium"],
    ],
    estimate: "Ruta estimada",
    route: "Roma Norte a AICM T2",
    total: "$286 MXN",
  },
  en: {
    title: "Price per km",
    subtitle: "A clear reference so the partner understands earnings by distance, demand and service type.",
    rows: [
      ["City base", "$12.50 MXN/km", "Standard rate"],
      ["High demand", "$16.80 MXN/km", "+34% dynamic"],
      ["Airport", "$19.20 MXN/km", "Premium"],
    ],
    estimate: "Estimated route",
    route: "Roma Norte to AICM T2",
    total: "$286 MXN",
  },
  fr: {
    title: "Prix par km",
    subtitle: "Une reference claire pour que le socio comprenne son revenu selon distance, demande et type de service.",
    rows: [
      ["Base ville", "$12.50 MXN/km", "Tarif standard"],
      ["Forte demande", "$16.80 MXN/km", "+34% dynamique"],
      ["Aeroport", "$19.20 MXN/km", "Premium"],
    ],
    estimate: "Trajet estime",
    route: "Roma Norte vers AICM T2",
    total: "$286 MXN",
  },
};

const icons = [Gauge, TrendingUp, MapPinned];

export default function DriverKmPricing() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <div className="glass-card rounded-3xl p-5">
      <h3 className="text-xl font-black tracking-tight">{content.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{content.subtitle}</p>
      <div className="mt-4 grid gap-3">
        {content.rows.map(([label, price, detail], index) => {
          const Icon = icons[index];
          return (
            <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-700/60 bg-slate-950/45 p-4">
              <span className="flex items-center gap-3 text-sm font-bold text-slate-300">
                <Icon size={18} className="text-city-cyan" />
                {label}
              </span>
              <span className="text-right">
                <b className="block">{price}</b>
                <small className="text-city-muted">{detail}</small>
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-3xl border border-city-green/30 bg-city-green/10 p-4">
        <p className="text-xs font-black uppercase text-city-green">{content.estimate}</p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <p className="text-sm font-bold text-slate-200">{content.route}</p>
          <p className="text-2xl font-black">{content.total}</p>
        </div>
      </div>
    </div>
  );
}
