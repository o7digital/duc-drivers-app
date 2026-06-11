import { useState } from "react";
import { Languages, Trophy } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const content = {
  Espanol: "Rutas turisticas, estadios, aeropuertos y soporte para visitantes del Mundial 2026.",
  English: "Tourist routes, stadiums, airports and visitor support for World Cup 2026.",
  Francais: "Itineraires touristiques, stades, aeroports et assistance visiteurs pour la Coupe du Monde 2026.",
  Portugues: "Rotas turisticas, estadios, aeroportos e suporte para visitantes da Copa 2026.",
};

const copy = {
  es: {
    title: "Modo Mundial 2026",
    subtitle: "Turismo, estadios y soporte multilingue",
  },
  en: {
    title: "World Cup 2026 Mode",
    subtitle: "Tourism, stadiums and multilingual support",
  },
  fr: {
    title: "Mode Coupe du Monde 2026",
    subtitle: "Tourisme, stades et support multilingue",
  },
};

export default function WorldCupMode() {
  const { language } = useLanguage();
  const pageCopy = pick(copy, language);
  const [worldCupLanguage, setWorldCupLanguage] = useState<keyof typeof content>("Espanol");

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-city-amber/10 text-city-amber">
          <Trophy size={21} />
        </span>
        <div>
          <p className="font-black">{pageCopy.title}</p>
          <p className="text-sm text-city-muted">{pageCopy.subtitle}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {Object.keys(content).map((item) => (
          <button
            key={item}
            onClick={() => setWorldCupLanguage(item as keyof typeof content)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold ${
              worldCupLanguage === item ? "border-city-amber bg-city-amber/15 text-white" : "border-slate-600/50 text-slate-300"
            }`}
          >
            <Languages size={14} />
            {item}
          </button>
        ))}
      </div>
      <p className="mt-4 leading-7 text-slate-300">{content[worldCupLanguage]}</p>
    </div>
  );
}
