import { motion } from "framer-motion";

type Props = {
  className?: string;
  label?: string;
  x: string;
  y: string;
  tone?: "cyan" | "green" | "amber" | "red";
};

const tones = {
  cyan: "bg-city-cyan shadow-[0_0_0_8px_rgba(34,211,238,.11),0_0_28px_#22D3EE]",
  green: "bg-city-green shadow-[0_0_0_8px_rgba(52,211,153,.11),0_0_28px_#34D399]",
  amber: "bg-city-amber shadow-[0_0_0_8px_rgba(251,191,36,.11),0_0_28px_#FBBF24]",
  red: "bg-city-red shadow-[0_0_0_8px_rgba(251,113,133,.11),0_0_28px_#FB7185]",
};

export default function AnimatedMapPin({ className = "", label, x, y, tone = "cyan" }: Props) {
  return (
    <motion.div
      className={`absolute z-10 ${className}`}
      style={{ left: x, top: y }}
      animate={{ scale: [1, 1.16, 1], opacity: [1, 0.75, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className={`block h-3.5 w-3.5 rounded-full ${tones[tone]}`} />
      {label && (
        <span className="absolute left-5 top-1/2 min-w-max -translate-y-1/2 rounded-full border border-slate-600/50 bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold text-slate-100 backdrop-blur">
          {label}
        </span>
      )}
    </motion.div>
  );
}
