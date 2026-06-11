import { useState } from "react";
import { Bot, SendHorizontal, Sparkles } from "lucide-react";

const presets = {
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
};

type Mode = keyof typeof presets;

export default function OliviaAI({ defaultMode = "passenger" as Mode, compact = false }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const current = presets[mode];

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-city-cyan/10 text-city-cyan">
            <Bot size={22} />
          </span>
          <div>
            <p className="font-black">Olivia Mobility AI</p>
            <p className="text-sm text-city-muted">Asistente operativo mock</p>
          </div>
        </div>
        <Sparkles className="text-city-cyan" size={20} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {Object.entries(presets).map(([key, preset]) => (
          <button
            key={key}
            onClick={() => setMode(key as Mode)}
            className={`rounded-full border px-3 py-2 text-xs font-bold transition ${
              mode === key ? "border-city-cyan bg-city-cyan/15 text-white" : "border-slate-600/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {key === "passenger" ? "Usuario" : key === "driver" ? "Conductor" : "Admin"}
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
