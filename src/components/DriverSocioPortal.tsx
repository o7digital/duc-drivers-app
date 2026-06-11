import { BadgeCheck, CarFront, FileCheck2, Star, WalletCards } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import AccountStatement from "./AccountStatement";
import OliviaAI from "./OliviaAI";
import ServiceMarketplace from "./ServiceMarketplace";

export default function DriverSocioPortal() {
  return (
    <section className="container-page grid gap-8 py-12 lg:grid-cols-[430px_1fr]">
      <PhoneMockup>
        <div className="bg-gradient-to-br from-slate-900 to-cyan-900 px-6 pb-5 pt-12">
          <p className="text-sm font-bold text-cyan-100">Socio #1284 · Activo</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Carlos Hernandez</h2>
          <p className="mt-2 text-sm text-slate-300">Plan Profesional · Mensualidad pagada</p>
        </div>
        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl border border-slate-700 bg-slate-950/50 p-4"><p className="text-xs text-city-muted">Mes</p><b className="text-2xl">$28,540</b></div>
            <div className="rounded-3xl border border-slate-700 bg-slate-950/50 p-4"><p className="text-xs text-city-muted">Viajes</p><b className="text-2xl">142</b></div>
          </div>
          <div className="rounded-3xl border border-city-green/30 bg-city-green/10 p-4">
            <p className="font-black text-city-green">Suscripcion pagada</p>
            <p className="text-sm text-slate-300">Acceso activo a bolsa premium y servicios aeropuerto.</p>
          </div>
          {[
            [WalletCards, "Ganancias hoy", "$1,850 MXN"],
            [FileCheck2, "Documentos", "Vigentes"],
            [CarFront, "Vehiculo", "Nissan Versa 2022"],
            [Star, "Rating", "4.9"],
          ].map(([Icon, label, value]) => {
            const I = Icon as typeof WalletCards;
            return (
              <div key={label as string} className="flex items-center justify-between rounded-3xl border border-slate-700/60 bg-slate-950/50 p-4">
                <span className="flex items-center gap-3 text-sm text-slate-300"><I size={18} className="text-city-cyan" />{label as string}</span>
                <b>{value as string}</b>
              </div>
            );
          })}
        </div>
      </PhoneMockup>
      <div className="grid content-start gap-5">
        <div className="glass-card rounded-3xl p-6">
          <BadgeCheck className="text-city-green" />
          <h2 className="mt-4 text-4xl font-black tracking-tight">Portal del socio conductor</h2>
          <p className="mt-4 leading-8 text-slate-300">El conductor no es solo operador: es socio con plan, mensualidad, estado de cuenta, documentos, vehiculos, reputacion y acceso a servicios rentables.</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          <AccountStatement />
          <OliviaAI defaultMode="driver" compact />
        </div>
        <ServiceMarketplace />
      </div>
    </section>
  );
}
