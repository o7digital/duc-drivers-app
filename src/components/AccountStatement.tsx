import { pick, useLanguage } from "../i18n";

const copy = {
  es: {
    title: "Estado de cuenta",
    rows: [
      ["Ingresos", "$28,540 MXN"],
      ["Comision", "$2,854 MXN"],
      ["Mensualidad", "$299 MXN"],
      ["Neto estimado", "$25,387 MXN"],
    ],
  },
  en: {
    title: "Account statement",
    rows: [
      ["Revenue", "$28,540 MXN"],
      ["Commission", "$2,854 MXN"],
      ["Monthly fee", "$299 MXN"],
      ["Estimated net", "$25,387 MXN"],
    ],
  },
  fr: {
    title: "Releve de compte",
    rows: [
      ["Revenus", "$28,540 MXN"],
      ["Commission", "$2,854 MXN"],
      ["Abonnement", "$299 MXN"],
      ["Net estime", "$25,387 MXN"],
    ],
  },
};

export default function AccountStatement() {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <div className="glass-card rounded-3xl p-5">
      <h3 className="text-xl font-black tracking-tight">{content.title}</h3>
      <div className="mt-4 divide-y divide-slate-700/60">
        {content.rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-city-muted">{label}</span>
            <span className="font-black">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
