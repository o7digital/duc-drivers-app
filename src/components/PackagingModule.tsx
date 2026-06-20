import { Building2, CarTaxiFront, CheckCircle2, Crown, FileCog, Package, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    chip: "Modulo Packaging",
    title: "Gestion de packages para socios, flotillas y cuentas business.",
    text: "Configura planes, beneficios, reglas de acceso y precios para convertir la membresia en una oferta clara y administrable.",
    publish: "Publicar cambios",
    draft: "Borrador activo",
    packagesTitle: "Catalogo de packages",
    accessTitle: "Accesos al modulo",
    rulesTitle: "Reglas de acceso",
    assignmentTitle: "Asignacion",
    accessProfiles: [
      ["Socios", "Entran para elegir package, ver beneficios, precio por km y desbloquear servicios premium.", "Gestion individual"],
      ["Business multi-flotilla", "Hoteles, empresas y operadores entran para asignar packages por flotilla, controlar accesos y revisar consumo.", "Gestion de flotillas"],
    ],
    packages: [
      ["Starter", "$199/mes", "Ciudad", "Bolsa ciudad, soporte basico, estado mensual"],
      ["Pro", "$299/mes", "Mas vendido", "Aeropuerto, alta demanda, prioridad de cobranza"],
      ["Elite", "$499/mes", "Business", "Hoteles, concierge, cuentas corporativas, soporte prioritario"],
    ],
    rules: [
      ["Aeropuerto", "Solo Pro y Elite", "Validar documentos y mensualidad pagada"],
      ["Hoteles", "Solo Elite", "Requiere rating minimo 4.8"],
      ["Alta demanda", "Pro y Elite", "Disponible cuando hay picos activos"],
      ["Concierge", "Elite", "Asignacion manual desde Control Center"],
    ],
    segments: [
      ["Socios Starter", "284", "Listos para upsell"],
      ["Socios Pro", "246", "Mayor actividad"],
      ["Socios Elite", "82", "Business habilitado"],
    ],
  },
  en: {
    chip: "Packaging Module",
    title: "Package management for partners, fleets and business accounts.",
    text: "Configure plans, benefits, access rules and pricing to make membership clear and manageable.",
    publish: "Publish changes",
    draft: "Active draft",
    packagesTitle: "Package catalog",
    accessTitle: "Module access",
    rulesTitle: "Access rules",
    assignmentTitle: "Assignment",
    accessProfiles: [
      ["Partners", "Access the module to choose a package, see benefits, price per km and unlock premium services.", "Individual management"],
      ["Multi-fleet business", "Hotels, companies and operators access it to assign packages by fleet, control access and review usage.", "Fleet management"],
    ],
    packages: [
      ["Starter", "$199/mo", "City", "City marketplace, basic support, monthly statement"],
      ["Pro", "$299/mo", "Best seller", "Airport, high demand, collections priority"],
      ["Elite", "$499/mo", "Business", "Hotels, concierge, corporate accounts, priority support"],
    ],
    rules: [
      ["Airport", "Pro and Elite only", "Validate documents and paid subscription"],
      ["Hotels", "Elite only", "Requires minimum 4.8 rating"],
      ["High demand", "Pro and Elite", "Available during active peaks"],
      ["Concierge", "Elite", "Manual assignment from Control Center"],
    ],
    segments: [
      ["Starter partners", "284", "Ready for upsell"],
      ["Pro partners", "246", "Highest activity"],
      ["Elite partners", "82", "Business enabled"],
    ],
  },
  fr: {
    chip: "Module Packaging",
    title: "Gestion des packages pour socios, flottes et comptes business.",
    text: "Configurez plans, avantages, regles d'acces et prix pour rendre l'abonnement clair et administrable.",
    publish: "Publier",
    draft: "Brouillon actif",
    packagesTitle: "Catalogue packages",
    accessTitle: "Acces au module",
    rulesTitle: "Regles d'acces",
    assignmentTitle: "Assignation",
    accessProfiles: [
      ["Socios", "Ils entrent pour choisir un package, voir avantages, prix par km et debloquer les services premium.", "Gestion individuelle"],
      ["Business multi-flotte", "Hotels, entreprises et operateurs entrent pour assigner des packages par flotte, controler les acces et suivre l'usage.", "Gestion de flottes"],
    ],
    packages: [
      ["Starter", "$199/mois", "Ville", "Bourse ville, support basique, releve mensuel"],
      ["Pro", "$299/mois", "Le plus vendu", "Aeroport, forte demande, priorite recouvrement"],
      ["Elite", "$499/mois", "Business", "Hotels, concierge, comptes corporate, support prioritaire"],
    ],
    rules: [
      ["Aeroport", "Pro et Elite seulement", "Valider documents et abonnement paye"],
      ["Hotels", "Elite seulement", "Note minimale 4.8 requise"],
      ["Forte demande", "Pro et Elite", "Disponible pendant les pics actifs"],
      ["Concierge", "Elite", "Assignation manuelle depuis Control Center"],
    ],
    segments: [
      ["Socios Starter", "284", "Prets pour upsell"],
      ["Socios Pro", "246", "Activite maximale"],
      ["Socios Elite", "82", "Business active"],
    ],
  },
};

const packageIcons = [Package, Sparkles, Crown];
const accessIcons = [UsersRound, Building2];

export default function PackagingModule() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <main className="container-page py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="chip rounded-full px-4 py-2">{content.chip}</span>
          <h1 className="mt-5 max-w-6xl text-5xl font-black leading-none tracking-tighter md:text-7xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{content.text}</p>
        </div>
        <div className="flex gap-3">
          <span className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/60 px-4 text-sm font-black text-slate-300">
            <FileCog size={17} className="text-city-amber" />
            {content.draft}
          </span>
          <button className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-city-cyan px-4 text-sm font-black text-slate-950">
            <CheckCircle2 size={17} />
            {content.publish}
          </button>
        </div>
      </div>

      <section className="glass-card mt-8 rounded-3xl p-5">
        <h2 className="text-2xl font-black tracking-tight">{content.accessTitle}</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {content.accessProfiles.map(([name, description, badge], index) => {
            const Icon = accessIcons[index];
            return (
              <article key={name} className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-city-cyan/10 text-city-cyan">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full bg-city-green/10 px-3 py-1 text-xs font-black text-city-green">{badge}</span>
                </div>
                <h3 className="mt-5 text-2xl font-black">{name}</h3>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mt-8 grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
        <section className="glass-card rounded-3xl p-5">
          <h2 className="text-2xl font-black tracking-tight">{content.packagesTitle}</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {content.packages.map(([name, price, badge, description], index) => {
              const Icon = packageIcons[index];
              return (
                <article key={name} className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`grid h-11 w-11 place-items-center rounded-2xl ${index === 2 ? "bg-city-amber/10 text-city-amber" : "bg-city-cyan/10 text-city-cyan"}`}>
                      <Icon size={20} />
                    </span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-black text-slate-200">{badge}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{name}</h3>
                  <p className="mt-1 text-xl font-black text-city-green">{price}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="glass-card rounded-3xl p-5">
          <h2 className="text-2xl font-black tracking-tight">{content.assignmentTitle}</h2>
          <div className="mt-5 grid gap-3">
            {content.segments.map(([label, value, detail]) => (
              <div key={label} className="flex items-center justify-between gap-4 rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4">
                <span className="flex items-center gap-3">
                  <CarTaxiFront size={18} className="text-city-cyan" />
                  <span>
                    <b className="block">{label}</b>
                    <small className="text-city-muted">{detail}</small>
                  </span>
                </span>
                <span className="text-2xl font-black">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="glass-card mt-5 rounded-3xl p-5">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-city-green" />
          <h2 className="text-2xl font-black tracking-tight">{content.rulesTitle}</h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {content.rules.map(([feature, access, condition]) => (
            <div key={feature} className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-black">{feature}</h3>
                <span className="rounded-full bg-city-blue/10 px-3 py-1 text-xs font-black text-city-blue">{access}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{condition}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
