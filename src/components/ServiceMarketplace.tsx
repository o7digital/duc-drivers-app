import { useState } from "react";
import { MapPin, Zap } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    title: "Bolsa de servicios",
    premium: "Premium",
    available: "Disponible",
    taken: "Servicio tomado",
    services: [
      ["Aeropuerto CDMX Terminal 2", "$850 MXN", "92% probability"],
      ["Santa Fe", "$240 MXN", "alta demanda"],
      ["Cuernavaca", "$1,250 MXN", "larga distancia"],
      ["Estadio Azteca", "$420 MXN", "evento activo"],
    ],
  },
  en: {
    title: "Service marketplace",
    premium: "Premium",
    available: "Available",
    taken: "Service taken",
    services: [
      ["Mexico City Airport Terminal 2", "$850 MXN", "92% probability"],
      ["Santa Fe", "$240 MXN", "high demand"],
      ["Cuernavaca", "$1,250 MXN", "long distance"],
      ["Estadio Azteca", "$420 MXN", "active event"],
    ],
  },
  fr: {
    title: "Bourse de services",
    premium: "Premium",
    available: "Disponible",
    taken: "Service pris",
    services: [
      ["Aeroport CDMX Terminal 2", "$850 MXN", "92% de probabilite"],
      ["Santa Fe", "$240 MXN", "forte demande"],
      ["Cuernavaca", "$1,250 MXN", "longue distance"],
      ["Stade Azteca", "$420 MXN", "evenement actif"],
    ],
  },
};

export default function ServiceMarketplace() {
  const [taken, setTaken] = useState<string | null>(null);
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-black tracking-tight">{content.title}</h3>
        <span className="rounded-full bg-city-green/10 px-3 py-1 text-xs font-bold text-city-green">{content.premium}</span>
      </div>
      <div className="mt-4 grid gap-3">
        {content.services.map(([place, price, detail]) => (
          <button
            key={place}
            onClick={() => setTaken(place)}
            className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4 text-left transition hover:border-city-cyan/50 hover:bg-city-cyan/5"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-3 font-bold">
                <MapPin size={18} className="text-city-cyan" />
                {place}
              </span>
              <span className="font-black text-white">{price}</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm">
              <span className="inline-flex items-center gap-2 text-city-muted">
                <Zap size={15} className="text-city-amber" />
                {detail}
              </span>
              <span className={taken === place ? "font-black text-city-green" : "text-city-muted"}>
                {taken === place ? content.taken : content.available}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
