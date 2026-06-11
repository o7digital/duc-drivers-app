import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: string;
  trend?: string;
  icon: LucideIcon;
  tone?: "cyan" | "green" | "amber" | "red" | "blue";
};

const tones = {
  cyan: "text-city-cyan bg-city-cyan/10",
  green: "text-city-green bg-city-green/10",
  amber: "text-city-amber bg-city-amber/10",
  red: "text-city-red bg-city-red/10",
  blue: "text-city-blue bg-city-blue/10",
};

export default function KpiCard({ label, value, trend, icon: Icon, tone = "cyan" }: Props) {
  return (
    <motion.div
      className="glass-card rounded-3xl p-5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-city-muted">{label}</p>
          <p className="mt-2 text-2xl font-black tracking-tight md:text-3xl">{value}</p>
        </div>
        <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tones[tone]}`}>
          <Icon size={20} />
        </span>
      </div>
      {trend && <p className="mt-3 text-sm font-bold text-city-green">{trend}</p>}
    </motion.div>
  );
}
