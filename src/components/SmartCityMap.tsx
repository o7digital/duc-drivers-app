import { motion } from "framer-motion";
import AnimatedMapPin from "./AnimatedMapPin";

type Props = {
  compact?: boolean;
};

export default function SmartCityMap({ compact = false }: Props) {
  return (
    <div className={`smart-map rounded-[2rem] ${compact ? "min-h-[320px]" : "min-h-[460px]"}`}>
      <div className="road-grid" />
      <AnimatedMapPin x="23%" y="32%" label="Polanco" />
      <AnimatedMapPin x="55%" y="45%" label="AICM +32%" tone="amber" />
      <AnimatedMapPin x="72%" y="68%" label="Estadio activo" tone="green" />
      <AnimatedMapPin x="38%" y="72%" label="Santa Fe" tone="red" />
      <motion.div
        className="absolute left-5 top-5 z-20 rounded-3xl border border-slate-600/40 bg-slate-950/75 p-4 backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-wide text-city-cyan">Live city layer</p>
        <p className="mt-1 text-2xl font-black">126 conductores online</p>
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-5 z-20 max-w-[280px] rounded-3xl border border-slate-600/40 bg-slate-950/75 p-4 backdrop-blur-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm font-bold text-white">Olivia AI recomienda</p>
        <p className="mt-1 text-sm leading-6 text-slate-300">Enviar 18 conductores a AICM y activar tarifa evento en Estadio Azteca.</p>
      </motion.div>
    </div>
  );
}
