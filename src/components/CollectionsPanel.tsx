import { MessageCircleWarning, Send } from "lucide-react";

export default function CollectionsPanel() {
  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black tracking-tight">Cobranza y mensualidades</h3>
          <p className="mt-1 text-sm text-city-muted">25 pagos vencidos · 8 superan 7 dias</p>
        </div>
        <MessageCircleWarning className="text-city-amber" />
      </div>
      <div className="mt-5 space-y-3">
        {["587 mensualidades pagadas", "25 socios vencidos", "$7,475 MXN en recuperacion"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-950/45 px-4 py-3">
            <span className="text-sm text-slate-300">{item}</span>
            <span className="h-2 w-2 rounded-full bg-city-cyan" />
          </div>
        ))}
      </div>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-city-amber to-city-cyan px-5 py-4 font-black text-slate-950">
        <Send size={18} />
        Enviar cobranza automatica
      </button>
    </div>
  );
}
