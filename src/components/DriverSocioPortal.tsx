import { BadgeCheck, CarFront, FileCheck2, Star, WalletCards } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import AccountStatement from "./AccountStatement";
import OliviaAI from "./OliviaAI";
import ServiceMarketplace from "./ServiceMarketplace";
import DriverKmPricing from "./DriverKmPricing";
import PackageSection from "./PackageSection";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    status: "Socio #1284 · Activo",
    plan: "Plan Profesional · Mensualidad pagada",
    month: "Mes",
    trips: "Viajes",
    subscriptionTitle: "Suscripcion pagada",
    subscriptionText: "Acceso activo a bolsa premium y servicios aeropuerto.",
    profileRows: [
      ["Ganancias hoy", "$1,850 MXN"],
      ["Documentos", "Vigentes"],
      ["Vehiculo", "Nissan Versa 2022"],
      ["Rating", "4.9"],
    ],
    panelTitle: "Portal del socio conductor",
    panelText: "El conductor no es solo operador: es socio con plan, mensualidad, estado de cuenta, documentos, vehiculos, reputacion y acceso a servicios rentables.",
  },
  en: {
    status: "Partner #1284 · Active",
    plan: "Professional Plan · Subscription paid",
    month: "Month",
    trips: "Trips",
    subscriptionTitle: "Subscription paid",
    subscriptionText: "Active access to premium marketplace and airport services.",
    profileRows: [
      ["Earnings today", "$1,850 MXN"],
      ["Documents", "Valid"],
      ["Vehicle", "Nissan Versa 2022"],
      ["Rating", "4.9"],
    ],
    panelTitle: "Driver partner portal",
    panelText: "The driver is not just an operator: he is a partner with a plan, subscription, account statement, documents, vehicles, reputation and access to profitable services.",
  },
  fr: {
    status: "Partenaire #1284 · Actif",
    plan: "Plan Professionnel · Abonnement paye",
    month: "Mois",
    trips: "Trajets",
    subscriptionTitle: "Abonnement paye",
    subscriptionText: "Acces actif a la bourse premium et aux services aeroport.",
    profileRows: [
      ["Revenus du jour", "$1,850 MXN"],
      ["Documents", "Valides"],
      ["Vehicule", "Nissan Versa 2022"],
      ["Note", "4.9"],
    ],
    panelTitle: "Portail chauffeur partenaire",
    panelText: "Le chauffeur n'est pas seulement operateur: il est partenaire avec plan, abonnement, releve de compte, documents, vehicules, reputation et acces a des services rentables.",
  },
};

export default function DriverSocioPortal() {
  const { language } = useLanguage();
  const content = pick(copy, language);
  const rowIcons = [WalletCards, FileCheck2, CarFront, Star];

  return (
    <section className="container-page grid gap-8 py-12 lg:grid-cols-[430px_1fr]">
      <PhoneMockup>
        <div className="bg-gradient-to-br from-slate-900 to-cyan-900 px-6 pb-5 pt-12">
          <p className="text-sm font-bold text-cyan-100">{content.status}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Carlos Hernandez</h2>
          <p className="mt-2 text-sm text-slate-300">{content.plan}</p>
        </div>
        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl border border-slate-700 bg-slate-950/50 p-4"><p className="text-xs text-city-muted">{content.month}</p><b className="text-2xl">$28,540</b></div>
            <div className="rounded-3xl border border-slate-700 bg-slate-950/50 p-4"><p className="text-xs text-city-muted">{content.trips}</p><b className="text-2xl">142</b></div>
          </div>
          <div className="rounded-3xl border border-city-green/30 bg-city-green/10 p-4">
            <p className="font-black text-city-green">{content.subscriptionTitle}</p>
            <p className="text-sm text-slate-300">{content.subscriptionText}</p>
          </div>
          {content.profileRows.map(([label, value], index) => {
            const I = rowIcons[index];
            return (
              <div key={label} className="flex items-center justify-between rounded-3xl border border-slate-700/60 bg-slate-950/50 p-4">
                <span className="flex items-center gap-3 text-sm text-slate-300"><I size={18} className="text-city-cyan" />{label}</span>
                <b>{value}</b>
              </div>
            );
          })}
        </div>
      </PhoneMockup>
      <div className="grid content-start gap-5">
        <div className="glass-card rounded-3xl p-6">
          <BadgeCheck className="text-city-green" />
          <h2 className="mt-4 text-4xl font-black tracking-tight">{content.panelTitle}</h2>
          <p className="mt-4 leading-8 text-slate-300">{content.panelText}</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          <AccountStatement />
          <OliviaAI defaultMode="driver" compact />
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          <DriverKmPricing />
          <PackageSection />
        </div>
        <ServiceMarketplace />
      </div>
    </section>
  );
}
