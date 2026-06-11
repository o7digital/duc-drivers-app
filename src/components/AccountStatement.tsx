const rows = [
  ["Ingresos", "$28,540 MXN"],
  ["Comision", "$2,854 MXN"],
  ["Mensualidad", "$299 MXN"],
  ["Neto estimado", "$25,387 MXN"],
];

export default function AccountStatement() {
  return (
    <div className="glass-card rounded-3xl p-5">
      <h3 className="text-xl font-black tracking-tight">Estado de cuenta</h3>
      <div className="mt-4 divide-y divide-slate-700/60">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-city-muted">{label}</span>
            <span className="font-black">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
