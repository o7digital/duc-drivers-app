import { CalendarClock, MapPin, Mic, Plane, Share2, ShieldCheck, Siren, Trophy } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import SmartCityMap from "./SmartCityMap";
import OliviaAI from "./OliviaAI";
import WorldCupMode from "./WorldCupMode";

export default function UserRideExperience() {
  return (
    <section className="container-page grid gap-8 py-12 lg:grid-cols-[430px_1fr]">
      <PhoneMockup>
        <div className="bg-gradient-to-br from-cyan-700 to-blue-700 px-6 pb-5 pt-12">
          <p className="text-sm font-bold text-cyan-100">Hola, Ana Maria Lopez</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">A donde vamos?</h2>
          <div className="mt-5 flex items-center gap-3 rounded-3xl bg-white/12 p-4 backdrop-blur">
            <Mic size={20} />
            <span className="text-sm font-semibold">Olivia, llevame al aeropuerto</span>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-city-muted">Ruta</p>
            <p className="mt-2 font-black">Polanco → Aeropuerto CDMX Terminal 2</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              [Plane, "Aeropuerto"],
              [Trophy, "Estadio"],
              [MapPin, "Casa"],
              [CalendarClock, "Trabajo"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Plane;
              return (
                <button key={label as string} className="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-2 py-3 text-center text-[11px] font-bold">
                  <I className="mx-auto mb-2 text-city-cyan" size={18} />
                  {label as string}
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
                <p className="text-xs text-city-muted">Nissan Versa 2022 · blanco · ABC-125-A</p>
              </div>
              <span className="text-sm font-black text-city-green">ETA 4 min</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-slate-900 p-3"><b>$185</b><small className="block text-city-muted">MXN</small></div>
              <div className="rounded-2xl bg-slate-900 p-3"><b>98%</b><small className="block text-city-muted">Seguridad</small></div>
              <div className="rounded-2xl bg-slate-900 p-3"><b>4.9</b><small className="block text-city-muted">Rating</small></div>
            </div>
          </div>
          <button className="w-full rounded-2xl bg-gradient-to-br from-city-cyan to-city-blue px-5 py-4 font-black text-slate-950">Confirmar viaje</button>
          <div className="grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-city-red/40 bg-city-red/10 px-4 py-3 font-bold text-city-red"><Siren size={18} /> SOS</button>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 font-bold"><Share2 size={18} /> Compartir</button>
          </div>
        </div>
      </PhoneMockup>
      <div className="grid content-start gap-5">
        <OliviaAI defaultMode="passenger" />
        <WorldCupMode />
        <div className="grid gap-4 sm:grid-cols-3">
          {["Conductor asignado", "Ruta segura 98%", "Soporte multilingue"].map((item) => (
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
