import { CalendarClock, MapPin, Mic, Plane, Share2, ShieldCheck, Siren, Trophy } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import SmartCityMap from "./SmartCityMap";
import OliviaAI from "./OliviaAI";
import WorldCupMode from "./WorldCupMode";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    greeting: "Hola, Ana Maria Lopez",
    title: "A donde vamos?",
    prompt: "Olivia, llevame al aeropuerto",
    routeLabel: "Ruta",
    route: "Polanco → Aeropuerto CDMX Terminal 2",
    quickActions: ["Aeropuerto", "Estadio", "Casa", "Trabajo"],
    driverVehicle: "Nissan Versa 2022 · blanco · ABC-125-A",
    priceLabel: "MXN",
    safetyLabel: "Seguridad",
    ratingLabel: "Rating",
    confirm: "Confirmar viaje",
    share: "Compartir",
    trustItems: ["Conductor asignado", "Ruta segura 98%", "Soporte multilingue"],
  },
  en: {
    greeting: "Hello, Ana Maria Lopez",
    title: "Where are we going?",
    prompt: "Olivia, take me to the airport",
    routeLabel: "Route",
    route: "Polanco → Mexico City Airport Terminal 2",
    quickActions: ["Airport", "Stadium", "Home", "Work"],
    driverVehicle: "Nissan Versa 2022 · white · ABC-125-A",
    priceLabel: "MXN",
    safetyLabel: "Safety",
    ratingLabel: "Rating",
    confirm: "Confirm ride",
    share: "Share",
    trustItems: ["Assigned driver", "Safe route 98%", "Multilingual support"],
  },
  fr: {
    greeting: "Bonjour, Ana Maria Lopez",
    title: "Ou allons-nous?",
    prompt: "Olivia, emmene-moi a l'aeroport",
    routeLabel: "Itineraire",
    route: "Polanco → Aeroport CDMX Terminal 2",
    quickActions: ["Aeroport", "Stade", "Maison", "Travail"],
    driverVehicle: "Nissan Versa 2022 · blanc · ABC-125-A",
    priceLabel: "MXN",
    safetyLabel: "Securite",
    ratingLabel: "Note",
    confirm: "Confirmer le trajet",
    share: "Partager",
    trustItems: ["Chauffeur assigne", "Itineraire sur 98%", "Support multilingue"],
  },
};

export default function UserRideExperience() {
  const { language } = useLanguage();
  const content = pick(copy, language);
  const quickIcons = [Plane, Trophy, MapPin, CalendarClock];

  return (
    <section className="container-page grid gap-8 py-12 lg:grid-cols-[430px_1fr]">
      <PhoneMockup>
        <div className="bg-gradient-to-br from-cyan-700 to-blue-700 px-6 pb-5 pt-12">
          <p className="text-sm font-bold text-cyan-100">{content.greeting}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">{content.title}</h2>
          <div className="mt-5 flex items-center gap-3 rounded-3xl bg-white/12 p-4 backdrop-blur">
            <Mic size={20} />
            <span className="text-sm font-semibold">{content.prompt}</span>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-city-muted">{content.routeLabel}</p>
            <p className="mt-2 font-black">{content.route}</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {content.quickActions.map((label, index) => {
              const I = quickIcons[index];
              return (
                <button key={label} className="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-2 py-3 text-center text-[11px] font-bold">
                  <I className="mx-auto mb-2 text-city-cyan" size={18} />
                  {label}
                </button>
              );
            })}
          </div>
          <div className="h-48 overflow-hidden rounded-3xl">
            <SmartCityMap compact />
          </div>
          <div className="rounded-3xl border border-slate-700/60 bg-slate-950/60 p-4">
            <div className="flex justify-between gap-3">
              <div>
                <p className="font-black">Jose Luis Martinez</p>
                <p className="text-xs text-city-muted">{content.driverVehicle}</p>
              </div>
              <span className="text-sm font-black text-city-green">ETA 4 min</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-slate-900 p-3"><b>$185</b><small className="block text-city-muted">{content.priceLabel}</small></div>
              <div className="rounded-2xl bg-slate-900 p-3"><b>98%</b><small className="block text-city-muted">{content.safetyLabel}</small></div>
              <div className="rounded-2xl bg-slate-900 p-3"><b>4.9</b><small className="block text-city-muted">{content.ratingLabel}</small></div>
            </div>
          </div>
          <button className="w-full rounded-2xl bg-gradient-to-br from-city-cyan to-city-blue px-5 py-4 font-black text-slate-950">{content.confirm}</button>
          <div className="grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-city-red/40 bg-city-red/10 px-4 py-3 font-bold text-city-red"><Siren size={18} /> SOS</button>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 font-bold"><Share2 size={18} /> {content.share}</button>
          </div>
        </div>
      </PhoneMockup>
      <div className="grid content-start gap-5">
        <OliviaAI defaultMode="passenger" />
        <WorldCupMode />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.trustItems.map((item) => (
            <div key={item} className="glass-card rounded-3xl p-5">
              <ShieldCheck className="text-city-green" />
              <p className="mt-4 font-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
