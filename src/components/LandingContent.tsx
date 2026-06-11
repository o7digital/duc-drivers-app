import { Building2, CarFront, Command, MapPinned, UserRound } from "lucide-react";
import { pick, useLanguage } from "../i18n";
import FeatureCard from "./FeatureCard";
import OliviaAI from "./OliviaAI";
import SmartCityMap from "./SmartCityMap";

const copy = {
  es: {
    previewChip: "Live Smart City Preview",
    previewTitle: "Operacion visible en tiempo real",
    previewText: "Heat zones, servicios activos, cobranza, socios online y recomendaciones AI para mover oferta donde Mexico la necesita.",
    cards: [
      {
        title: "Experiencia Usuario",
        text: "Solicitud de viaje, Olivia AI, conductor asignado, ETA, precio, seguridad, SOS, compartir viaje y modo turista Mundial 2026.",
      },
      {
        title: "Experiencia Conductor / Socio",
        text: "Portal premium para socios con mensualidad, estado de cuenta, ganancias, documentos, rating y bolsa de servicios.",
      },
      {
        title: "Control Center",
        text: "Command Center para KPIs, mapa vivo, cobranza, flota, prediccion de demanda, viajes activos y reportes.",
      },
    ],
    positioningTitle: "No vendemos otra app de taxi.",
    positioningText: "Vendemos una plataforma operativa para redes de movilidad mexicanas: socios que pagan mensualidad, conductores que toman servicios, administradores que controlan cobranza y usuarios que reciben una experiencia moderna.",
    positioningItems: ["Cooperativas y agencias", "Aeropuertos y turismo", "Mundial 2026"],
  },
  en: {
    previewChip: "Live Smart City Preview",
    previewTitle: "Real-time operational visibility",
    previewText: "Heat zones, active services, collections, online partners and AI recommendations to move supply where Mexico needs it.",
    cards: [
      {
        title: "Passenger Experience",
        text: "Ride request, Olivia AI, assigned driver, ETA, pricing, safety score, SOS, trip sharing and World Cup 2026 tourist mode.",
      },
      {
        title: "Driver / Partner Experience",
        text: "Premium partner portal with monthly subscription, account statement, earnings, documents, ratings and service marketplace.",
      },
      {
        title: "Control Center",
        text: "Command Center for KPIs, live map, collections, fleet, demand prediction, active rides and reports.",
      },
    ],
    positioningTitle: "We are not selling another taxi app.",
    positioningText: "We are selling an operating platform for Mexican mobility networks: partners who pay subscriptions, drivers who take services, admins who control collections and passengers who receive a modern experience.",
    positioningItems: ["Cooperatives and agencies", "Airports and tourism", "World Cup 2026"],
  },
  fr: {
    previewChip: "Apercu Smart City en direct",
    previewTitle: "Operation visible en temps reel",
    previewText: "Zones de chaleur, services actifs, recouvrement, partenaires en ligne et recommandations AI pour deplacer l'offre la ou le Mexique en a besoin.",
    cards: [
      {
        title: "Experience utilisateur",
        text: "Demande de trajet, Olivia AI, chauffeur assigne, ETA, prix, securite, SOS, partage du trajet et mode touriste Coupe du Monde 2026.",
      },
      {
        title: "Experience Chauffeur / Partenaire",
        text: "Portail premium pour partenaires avec abonnement, releve de compte, revenus, documents, notes et bourse de services.",
      },
      {
        title: "Control Center",
        text: "Command Center pour KPIs, carte live, recouvrement, flotte, prediction de demande, trajets actifs et rapports.",
      },
    ],
    positioningTitle: "Nous ne vendons pas une autre app de taxi.",
    positioningText: "Nous vendons une plateforme operationnelle pour les reseaux de mobilite mexicains: partenaires abonnes, chauffeurs qui prennent des services, administrateurs qui pilotent le recouvrement et utilisateurs avec une experience moderne.",
    positioningItems: ["Cooperatives et agences", "Aeroports et tourisme", "Coupe du Monde 2026"],
  },
};

const cardLinks = [
  { href: "/usuario", icon: UserRound },
  { href: "/conductor", icon: CarFront },
  { href: "/control", icon: Command },
];

export default function LandingContent() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <>
      <section className="container-page py-16">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="chip rounded-full px-4 py-2">{content.previewChip}</span>
            <h2 className="mt-5 text-4xl font-black tracking-tighter md:text-6xl">{content.previewTitle}</h2>
          </div>
          <p className="max-w-2xl leading-8 text-slate-300">{content.previewText}</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
          <SmartCityMap />
          <OliviaAI defaultMode="admin" />
        </div>
      </section>
      <section className="container-page grid gap-5 py-12 md:grid-cols-3">
        {content.cards.map((card, index) => {
          const link = cardLinks[index];
          return <FeatureCard key={link.href} href={link.href} icon={link.icon} title={card.title} text={card.text} />;
        })}
      </section>
      <section className="container-page py-16">
        <div className="glass-card rounded-[2rem] p-8 md:p-10">
          <MapPinned className="text-city-cyan" />
          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tighter md:text-6xl">{content.positioningTitle}</h2>
          <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-300">{content.positioningText}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.positioningItems.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-700/60 bg-slate-950/45 p-5">
                <Building2 className="text-city-blue" />
                <p className="mt-4 font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
