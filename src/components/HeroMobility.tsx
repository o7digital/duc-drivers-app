import { motion } from "framer-motion";
import { ArrowRight, CarFront, Command, UserRound } from "lucide-react";
import { pick, useLanguage } from "../i18n";
import SmartCityMap from "./SmartCityMap";

const copy = {
  es: {
    chip: "Smart City · Mexico · Mundial 2026",
    title: "Taxifacil",
    country: "por DUcDrivers Financial",
    subtitle: "La plataforma inteligente para cooperativas, agencias de taxi, transporte ejecutivo, aeropuertos, turismo y Mundial 2026.",
    userCta: "Ver experiencia usuario",
    driverCta: "Ver portal socio",
    controlCta: "Abrir Control Center",
  },
  en: {
    chip: "Smart City · Mexico · World Cup 2026",
    title: "Taxifacil",
    country: "por DUcDrivers Financial",
    subtitle: "The intelligent platform for cooperatives, taxi agencies, executive transportation, airports, tourism and World Cup 2026.",
    userCta: "View passenger experience",
    driverCta: "View partner portal",
    controlCta: "Open Control Center",
  },
  fr: {
    chip: "Smart City · Mexique · Coupe du Monde 2026",
    title: "Taxifacil",
    country: "por DUcDrivers Financial",
    subtitle: "La plateforme intelligente pour cooperatives, agences de taxi, transport executif, aeroports, tourisme et Coupe du Monde 2026.",
    userCta: "Voir l'experience utilisateur",
    driverCta: "Voir le portail partenaire",
    controlCta: "Ouvrir le Control Center",
  },
};

export default function HeroMobility() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <header className="container-page grid gap-10 py-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="chip rounded-full px-4 py-2">{content.chip}</span>
        <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
          {content.title} <span className="bg-gradient-to-r from-city-cyan via-city-blue to-white bg-clip-text text-transparent">{content.country}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl">{content.subtitle}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="/usuario" className="inline-flex min-h-13 items-center gap-2 rounded-2xl bg-gradient-to-br from-city-cyan to-city-blue px-5 py-3 font-black text-slate-950 shadow-glow">
            <UserRound size={19} />
            {content.userCta}
          </a>
          <a href="/conductor" className="inline-flex min-h-13 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-black text-slate-100">
            <CarFront size={19} />
            {content.driverCta}
          </a>
          <a href="/control" className="inline-flex min-h-13 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-black text-slate-100">
            <Command size={19} />
            {content.controlCta}
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
        <SmartCityMap />
      </motion.div>
    </header>
  );
}
