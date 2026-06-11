import { useState } from "react";
import { Banknote, CarFront, CreditCard, Gauge, Radio, Star, UsersRound, WalletCards } from "lucide-react";
import KpiCard from "./KpiCard";
import SmartCityMap from "./SmartCityMap";
import OliviaAI from "./OliviaAI";
import DemandForecast from "./DemandForecast";
import CollectionsPanel from "./CollectionsPanel";
import WorldCupMode from "./WorldCupMode";
import ServiceMarketplace from "./ServiceMarketplace";

const filters = ["Hoy", "Semana", "Mes"];

export default function CommandCenter() {
  const [filter, setFilter] = useState("Hoy");

  return (
    <main className="container-page py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="chip rounded-full px-4 py-2">Operacion nacional · {filter}</span>
          <h1 className="mt-5 text-5xl font-black leading-none tracking-tighter md:text-7xl">Mobility Command Center</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Control operativo para socios, viajes activos, cobranza, demanda, flota, reportes y asistencia AI.</p>
        </div>
        <div className="flex rounded-2xl border border-slate-700 bg-slate-950/60 p-1">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-sm font-black ${filter === item ? "bg-city-cyan text-slate-950" : "text-slate-300"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Ingresos hoy" value="$284,450 MXN" trend="+21% vs ayer" icon={Banknote} />
        <KpiCard label="Socios activos" value="612" trend="126 online" icon={UsersRound} tone="green" />
        <KpiCard label="Mensualidades pagadas" value="587" icon={CreditCard} tone="blue" />
        <KpiCard label="Pagos vencidos" value="25" icon={WalletCards} tone="red" />
        <KpiCard label="Viajes activos" value="82" icon={Radio} tone="cyan" />
        <KpiCard label="Conductores online" value="126" icon={CarFront} tone="green" />
        <KpiCard label="Satisfaccion" value="98%" icon={Star} tone="amber" />
        <KpiCard label="Demanda aeropuerto" value="+32%" icon={Gauge} tone="blue" />
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
      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <div className="glass-card rounded-3xl p-5">
          <h3 className="text-xl font-black">Viajes activos</h3>
          {["Polanco → AICM T2", "Roma → Estadio Azteca", "Santa Fe → Reforma"].map((item) => (
            <p key={item} className="mt-4 rounded-2xl bg-slate-950/50 px-4 py-3 text-sm text-slate-300">{item}</p>
          ))}
        </div>
        <div className="glass-card rounded-3xl p-5">
          <h3 className="text-xl font-black">Top conductores</h3>
          {["Jose Luis Martinez · 4.9", "Carlos Hernandez · 4.9", "Patricia Gomez · 4.8"].map((item) => (
            <p key={item} className="mt-4 rounded-2xl bg-slate-950/50 px-4 py-3 text-sm text-slate-300">{item}</p>
          ))}
        </div>
        <WorldCupMode />
      </div>
    </main>
  );
}
