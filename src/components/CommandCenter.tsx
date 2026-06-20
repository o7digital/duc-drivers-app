import { useState } from "react";
import { Banknote, CarFront, CreditCard, Gauge, Radio, Star, UsersRound, WalletCards } from "lucide-react";
import KpiCard from "./KpiCard";
import SmartCityMap from "./SmartCityMap";
import OliviaAI from "./OliviaAI";
import DemandForecast from "./DemandForecast";
import CollectionsPanel from "./CollectionsPanel";
import WorldCupMode from "./WorldCupMode";
import ServiceMarketplace from "./ServiceMarketplace";
import BusinessFleetAccess from "./BusinessFleetAccess";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    filters: ["Hoy", "Semana", "Mes"],
    chip: "Operacion nacional",
    title: "Taxifacil por DUcDrivers Financial",
    subtitle: "Control operativo para socios, viajes activos, cobranza, demanda, flota, reportes y asistencia AI.",
    kpis: [
      ["Ingresos hoy", "$284,450 MXN", "+21% vs ayer"],
      ["Socios activos", "612", "126 online"],
      ["Mensualidades pagadas", "587"],
      ["Pagos vencidos", "25"],
      ["Viajes activos", "82"],
      ["Conductores online", "126"],
      ["Satisfaccion", "98%"],
      ["Demanda aeropuerto", "+32%"],
    ],
    activeTrips: "Viajes activos",
    topDrivers: "Top conductores",
    packaging: "Abrir Packaging",
    trips: ["Polanco → AICM T2", "Roma → Estadio Azteca", "Santa Fe → Reforma"],
    drivers: ["Jose Luis Martinez · 4.9", "Carlos Hernandez · 4.9", "Patricia Gomez · 4.8"],
  },
  en: {
    filters: ["Today", "Week", "Month"],
    chip: "National operation",
    title: "Taxifacil por DUcDrivers Financial",
    subtitle: "Operational control for partners, active trips, collections, demand, fleet, reports and AI assistance.",
    kpis: [
      ["Revenue today", "$284,450 MXN", "+21% vs yesterday"],
      ["Active partners", "612", "126 online"],
      ["Subscriptions paid", "587"],
      ["Overdue payments", "25"],
      ["Active trips", "82"],
      ["Drivers online", "126"],
      ["Satisfaction", "98%"],
      ["Airport demand", "+32%"],
    ],
    activeTrips: "Active trips",
    topDrivers: "Top drivers",
    packaging: "Open Packaging",
    trips: ["Polanco → AICM T2", "Roma → Estadio Azteca", "Santa Fe → Reforma"],
    drivers: ["Jose Luis Martinez · 4.9", "Carlos Hernandez · 4.9", "Patricia Gomez · 4.8"],
  },
  fr: {
    filters: ["Aujourd'hui", "Semaine", "Mois"],
    chip: "Operation nationale",
    title: "Taxifacil por DUcDrivers Financial",
    subtitle: "Controle operationnel des partenaires, trajets actifs, recouvrement, demande, flotte, rapports et assistance AI.",
    kpis: [
      ["Revenus du jour", "$284,450 MXN", "+21% vs hier"],
      ["Partenaires actifs", "612", "126 en ligne"],
      ["Abonnements payes", "587"],
      ["Paiements en retard", "25"],
      ["Trajets actifs", "82"],
      ["Chauffeurs en ligne", "126"],
      ["Satisfaction", "98%"],
      ["Demande aeroport", "+32%"],
    ],
    activeTrips: "Trajets actifs",
    topDrivers: "Top chauffeurs",
    packaging: "Ouvrir Packaging",
    trips: ["Polanco → AICM T2", "Roma → Stade Azteca", "Santa Fe → Reforma"],
    drivers: ["Jose Luis Martinez · 4.9", "Carlos Hernandez · 4.9", "Patricia Gomez · 4.8"],
  },
};

const kpiIcons = [Banknote, UsersRound, CreditCard, WalletCards, Radio, CarFront, Star, Gauge];
const kpiTones = ["cyan", "green", "blue", "red", "cyan", "green", "amber", "blue"] as const;

export default function CommandCenter() {
  const { language } = useLanguage();
  const content = pick(copy, language);
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <main className="container-page py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="chip rounded-full px-4 py-2">{content.chip} · {content.filters[filterIndex]}</span>
          <h1 className="mt-5 text-5xl font-black leading-none tracking-tighter md:text-7xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{content.subtitle}</p>
        </div>
        <div className="flex rounded-2xl border border-slate-700 bg-slate-950/60 p-1">
          {content.filters.map((item, index) => (
            <button key={item} onClick={() => setFilterIndex(index)} className={`rounded-xl px-4 py-2 text-sm font-black ${filterIndex === index ? "bg-city-cyan text-slate-950" : "text-slate-300"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.kpis.map(([label, value, trend], index) => (
          <KpiCard key={label} label={label} value={value} trend={trend} icon={kpiIcons[index]} tone={kpiTones[index]} />
        ))}
      </div>
      <div className="mt-8 grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
        <SmartCityMap />
        <div className="grid gap-5">
          <OliviaAI defaultMode="admin" compact />
          <CollectionsPanel />
        </div>
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <DemandForecast />
        <ServiceMarketplace />
      </div>
      <div className="mt-5">
        <BusinessFleetAccess />
      </div>
      <div className="mt-5">
        <a href="/packaging" className="inline-flex min-h-11 items-center rounded-2xl bg-city-cyan px-5 text-sm font-black text-slate-950">
          {content.packaging}
        </a>
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <div className="glass-card rounded-3xl p-5">
          <h3 className="text-xl font-black">{content.activeTrips}</h3>
          {content.trips.map((item) => (
            <p key={item} className="mt-4 rounded-2xl bg-slate-950/50 px-4 py-3 text-sm text-slate-300">{item}</p>
          ))}
        </div>
        <div className="glass-card rounded-3xl p-5">
          <h3 className="text-xl font-black">{content.topDrivers}</h3>
          {content.drivers.map((item) => (
            <p key={item} className="mt-4 rounded-2xl bg-slate-950/50 px-4 py-3 text-sm text-slate-300">{item}</p>
          ))}
        </div>
        <WorldCupMode />
      </div>
    </main>
  );
}
