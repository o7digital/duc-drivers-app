import type { ReactNode } from "react";

export default function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[390px] rounded-[46px] border border-slate-200/20 bg-slate-950 p-3 shadow-[0_0_0_10px_rgba(15,23,42,.76),0_40px_100px_rgba(0,0,0,.55),0_0_80px_rgba(34,211,238,.18)]">
      <div className="relative min-h-[760px] overflow-hidden rounded-[36px] bg-city-panel">
        <div className="absolute left-1/2 top-0 z-10 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
        {children}
      </div>
    </div>
  );
}
