import { useState } from "react";
import { Bot, SendHorizontal, Sparkles } from "lucide-react";
import { pick, useLanguage } from "../i18n";

const presets = {
  es: {
    subtitle: "Asistente operativo mock",
    labels: { passenger: "Usuario", driver: "Conductor", admin: "Admin" },
    passenger: {
      prompt: "Necesito llegar al aeropuerto manana a las 6 AM",
      answer: ["Vehiculo reservado", "Salida recomendada: 4:55 AM", "Ruta segura: 98%", "Trafico analizado", "Conductor preasignado"],
    },
    driver: {
      prompt: "Cuanto gane esta semana?",
      answer: ["Ganaste $5,480 MXN", "+18% respecto a la semana pasada", "Mejor zona: Aeropuerto CDMX", "Recomendacion: trabajar 5 PM - 8 PM"],
    },
    admin: {
      prompt: "Quien no ha pagado su mensualidad?",
      answer: ["25 socios con pagos vencidos", "8 con mas de 7 dias", "Recomiendo enviar cobranza WhatsApp", "Recomiendo limitar bolsa premium"],
    },
  },
  en: {
    subtitle: "Mock operations assistant",
    labels: { passenger: "Passenger", driver: "Driver", admin: "Admin" },
    passenger: {
      prompt: "I need to get to the airport tomorrow at 6 AM",
      answer: ["Vehicle reserved", "Recommended departure: 4:55 AM", "Safe route: 98%", "Traffic analyzed", "Driver pre-assigned"],
    },
    driver: {
      prompt: "How much did I earn this week?",
      answer: ["You earned $5,480 MXN", "+18% versus last week", "Best zone: Mexico City Airport", "Recommendation: work 5 PM - 8 PM"],
    },
    admin: {
      prompt: "Who has not paid their monthly subscription?",
      answer: ["25 partners have overdue payments", "8 are more than 7 days late", "Recommend WhatsApp collections", "Recommend limiting premium marketplace access"],
    },
  },
  fr: {
    subtitle: "Assistant operationnel mock",
    labels: { passenger: "Utilisateur", driver: "Chauffeur", admin: "Admin" },
    passenger: {
      prompt: "Je dois aller a l'aeroport demain a 6 h",
      answer: ["Vehicule reserve", "Depart recommande: 4:55", "Itineraire sur: 98%", "Trafic analyse", "Chauffeur pre-assigne"],
    },
    driver: {
      prompt: "Combien ai-je gagne cette semaine?",
      answer: ["Vous avez gagne $5,480 MXN", "+18% par rapport a la semaine derniere", "Meilleure zone: Aeroport CDMX", "Recommandation: travailler de 17 h a 20 h"],
    },
    admin: {
      prompt: "Qui n'a pas paye son abonnement mensuel?",
      answer: ["25 partenaires ont des paiements en retard", "8 ont plus de 7 jours de retard", "Recommandation: recouvrement WhatsApp", "Recommandation: limiter la bourse premium"],
    },
  },
};

type Mode = "passenger" | "driver" | "admin";

export default function OliviaAI({ defaultMode = "passenger" as Mode, compact = false }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const { language } = useLanguage();
  const content = pick(presets, language);
  const current = content[mode];

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-city-cyan/10 text-city-cyan">
            <Bot size={22} />
          </span>
          <div>
            <p className="font-black">Olivia Mobility AI</p>
            <p className="text-sm text-city-muted">{content.subtitle}</p>
          </div>
        </div>
        <Sparkles className="text-city-cyan" size={20} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {(["passenger", "driver", "admin"] as Mode[]).map((key) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`rounded-full border px-3 py-2 text-xs font-bold transition ${
              mode === key ? "border-city-cyan bg-city-cyan/15 text-white" : "border-slate-600/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {content.labels[key]}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-3xl border border-slate-700/60 bg-slate-950/60 p-4">
        <div className="flex items-start gap-3">
          <SendHorizontal className="mt-1 text-city-blue" size={18} />
          <p className="text-sm font-semibold text-slate-200">{current.prompt}</p>
        </div>
      </div>
      <div className={`mt-4 grid gap-2 ${compact ? "" : "sm:grid-cols-2"}`}>
        {current.answer.map((item) => (
          <div key={item} className="rounded-2xl border border-city-cyan/15 bg-city-cyan/5 px-4 py-3 text-sm text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
