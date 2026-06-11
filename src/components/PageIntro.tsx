import { pick, useLanguage } from "../i18n";

type PageKey = "usuario" | "conductor";

const copy = {
  usuario: {
    es: {
      chip: "Experiencia Usuario",
      title: "Viajes seguros, inteligentes y listos para turismo.",
      text: "Ana Maria Lopez solicita Polanco hacia Aeropuerto CDMX Terminal 2 con Olivia AI, ETA, precio en MXN, seguridad y soporte Mundial 2026.",
    },
    en: {
      chip: "Passenger Experience",
      title: "Safe, intelligent rides ready for tourism.",
      text: "Ana Maria Lopez requests a ride from Polanco to Mexico City Airport Terminal 2 with Olivia AI, ETA, MXN pricing, safety and World Cup 2026 support.",
    },
    fr: {
      chip: "Experience utilisateur",
      title: "Des trajets surs, intelligents et prets pour le tourisme.",
      text: "Ana Maria Lopez demande un trajet de Polanco vers l'aeroport CDMX Terminal 2 avec Olivia AI, ETA, prix en MXN, securite et support Coupe du Monde 2026.",
    },
  },
  conductor: {
    es: {
      chip: "Conductor / Socio",
      title: "Socios con cuenta, mensualidad y oportunidades reales.",
      text: "Carlos Hernandez, socio #1284, administra ganancias, documentos, vehiculo, estado de cuenta y bolsa de servicios premium.",
    },
    en: {
      chip: "Driver / Partner",
      title: "Partners with accounts, monthly plans and real opportunities.",
      text: "Carlos Hernandez, partner #1284, manages earnings, documents, vehicle, account statement and the premium service marketplace.",
    },
    fr: {
      chip: "Chauffeur / Partenaire",
      title: "Des partenaires avec compte, abonnement et vraies opportunites.",
      text: "Carlos Hernandez, partenaire #1284, gere ses revenus, documents, vehicule, releve de compte et la bourse de services premium.",
    },
  },
};

export default function PageIntro({ page }: { page: PageKey }) {
  const { language } = useLanguage();
  const content = pick(copy[page], language);

  return (
    <main className="container-page pt-14">
      <span className="chip rounded-full px-4 py-2">{content.chip}</span>
      <h1 className="mt-5 max-w-5xl text-5xl font-black leading-none tracking-tighter md:text-7xl">{content.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{content.text}</p>
    </main>
  );
}
