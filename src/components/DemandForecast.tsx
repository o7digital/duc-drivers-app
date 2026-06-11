export default function DemandForecast() {
  return (
    <div className="glass-card rounded-3xl p-5">
      <h3 className="text-xl font-black tracking-tight">Prediccion de demanda</h3>
      <p className="mt-1 text-sm text-city-muted">Zonas con mayor oportunidad en las proximas 3 horas</p>
      <div className="mt-5 h-40 rounded-3xl border border-slate-700/50 bg-slate-950/50 p-4">
        <svg viewBox="0 0 500 150" className="h-full w-full">
          <path d="M0 116 C80 88 112 96 170 62 C230 28 276 48 330 32 C392 14 430 38 500 18" fill="none" stroke="#22D3EE" strokeWidth="5" />
          <path d="M0 132 C90 110 130 118 188 88 C238 62 292 78 352 58 C406 40 446 58 500 42" fill="none" stroke="#34D399" strokeWidth="4" opacity=".8" />
        </svg>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {["AICM +32%", "Polanco +18%", "Estadio Azteca evento"].map((item) => (
          <span key={item} className="rounded-2xl border border-city-cyan/20 bg-city-cyan/5 px-4 py-3 text-sm font-bold">{item}</span>
        ))}
      </div>
    </div>
  );
}
