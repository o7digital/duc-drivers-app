import { motion } from "framer-motion";
import { pick, useLanguage } from "../i18n";
import AnimatedMapPin from "./AnimatedMapPin";

type Props = {
  compact?: boolean;
};

const copy = {
  es: {
    pins: ["Polanco", "AICM +32%", "Estadio activo", "Santa Fe"],
    layer: "Live city layer",
    drivers: "126 conductores online",
    aiTitle: "Olivia AI recomienda",
    aiText: "Enviar 18 conductores a AICM y activar tarifa evento en Estadio Azteca.",
  },
  en: {
    pins: ["Polanco", "AICM +32%", "Active stadium", "Santa Fe"],
    layer: "Live city layer",
    drivers: "126 drivers online",
    aiTitle: "Olivia AI recommends",
    aiText: "Send 18 drivers to AICM and activate event pricing at Estadio Azteca.",
  },
  fr: {
    pins: ["Polanco", "AICM +32%", "Stade actif", "Santa Fe"],
    layer: "Couche ville live",
    drivers: "126 chauffeurs en ligne",
    aiTitle: "Olivia AI recommande",
    aiText: "Envoyer 18 chauffeurs vers AICM et activer le tarif evenement au Stade Azteca.",
  },
};

export default function SmartCityMap({ compact = false }: Props) {
  const { language } = useLanguage();
  const content = pick(copy, language);

  return (
    <div className={`smart-map rounded-[2rem] ${compact ? "min-h-[320px]" : "min-h-[460px]"}`}>
      <div className="road-grid" />
      <AnimatedMapPin x="23%" y="32%" label={content.pins[0]} />
      <AnimatedMapPin x="55%" y="45%" label={content.pins[1]} tone="amber" />
      <AnimatedMapPin x="72%" y="68%" label={content.pins[2]} tone="green" />
      <AnimatedMapPin x="38%" y="72%" label={content.pins[3]} tone="red" />
      <motion.div
        className="absolute left-5 top-5 z-20 rounded-3xl border border-slate-600/40 bg-slate-950/75 p-4 backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-wide text-city-cyan">{content.layer}</p>
        <p className="mt-1 text-2xl font-black">{content.drivers}</p>
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-5 z-20 max-w-[280px] rounded-3xl border border-slate-600/40 bg-slate-950/75 p-4 backdrop-blur-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm font-bold text-white">{content.aiTitle}</p>
        <p className="mt-1 text-sm leading-6 text-slate-300">{content.aiText}</p>
      </motion.div>
    </div>
  );
}
