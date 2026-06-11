import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  text: string;
  href?: string;
  icon: LucideIcon;
};

export default function FeatureCard({ title, text, href, icon: Icon }: Props) {
  const content = (
    <motion.div
      className="glass-card h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:border-city-cyan/40"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-city-cyan/10 text-city-cyan">
        <Icon size={22} />
      </span>
      <h3 className="mt-6 text-2xl font-black tracking-tight">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </motion.div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
