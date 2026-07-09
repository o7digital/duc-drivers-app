import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Banknote,
  Bot,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Command,
  CreditCard,
  FileCheck2,
  Gauge,
  Hotel,
  Landmark,
  Package,
  Plane,
  Radar,
  ReceiptText,
  Route,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tone = "cyan" | "green" | "blue" | "amber" | "rose" | "violet";

const toneClasses: Record<Tone, string> = {
  cyan: "border-city-cyan/25 bg-city-cyan/10 text-city-cyan",
  green: "border-city-green/25 bg-city-green/10 text-city-green",
  blue: "border-city-blue/25 bg-city-blue/10 text-city-blue",
  amber: "border-city-amber/25 bg-city-amber/10 text-city-amber",
  rose: "border-city-red/25 bg-city-red/10 text-city-red",
  violet: "border-violet-400/25 bg-violet-400/10 text-violet-200",
};

const navItems = [
  ["Ecosistema", "#ecosistema"],
  ["Usuarios", "#usuarios"],
  ["Socios", "#socios"],
  ["Vehiculos", "#vehiculos"],
  ["Paquetes", "#paquetes"],
  ["Flotillas", "#flotillas"],
  ["Control Center", "#control-center"],
  ["Olivia AI", "#olivia"],
  ["Demo", "#demo"],
];

const heroBadges = [
  "Comision desde 4%",
  "Socios conductores",
  "Vehiculos flexibles",
  "Envio de paquetes",
  "Flotillas & empresas",
  "Olivia Mobility AI",
];

const ecosystemCards: Array<{ title: string; text: string; icon: LucideIcon; tone: Tone }> = [
  {
    title: "Usuario",
    text: "Viajes, reservas, paquetes, seguridad, pagos y comprobantes desde una sola app.",
    icon: UserRound,
    tone: "cyan",
  },
  {
    title: "Socio conductor",
    text: "Ingresos, vehiculo, seguro, GPS, camara, soporte fiscal y oportunidades B2B.",
    icon: CarFront,
    tone: "green",
  },
  {
    title: "Empresa / flotilla",
    text: "Control de usuarios, rutas, unidades, liquidacion, reportes y servicios programados.",
    icon: Building2,
    tone: "blue",
  },
  {
    title: "Control Center",
    text: "Monitoreo, alertas, cobranza, fiscal, demanda por zona y recomendaciones AI.",
    icon: Command,
    tone: "violet",
  },
];

const userFeatures = [
  "Pedir viaje inmediato",
  "Reservar viaje para aeropuerto, hotel, evento o empresa",
  "Enviar paquete",
  "Ver conductor, unidad, placas y ubicacion GPS",
  "Compartir viaje",
  "Solicitar factura o comprobante",
  "Pagar desde la app",
  "Recibir soporte por Olivia Mobility AI",
];

const driverFeatures = [
  "Comision desde 4% por viaje",
  "Evaluacion flexible segun ingresos reales y perfil operativo",
  "Opciones disponibles incluso si el historial no es perfecto, sujeto a evaluacion",
  "Renta semanal",
  "Opcion a compra",
  "Vehiculo nuevo, seminuevo o reconstruido certificado",
  "Seguro, GPS y camara de seguridad",
  "Soporte fiscal y acompanamiento para operar correctamente",
];

const vehicles = [
  {
    title: "Vehiculo nuevo",
    text: "Para socios que buscan unidad nueva, mayor confianza operativa y una ruta clara hacia propiedad.",
    monthly: "Mensualidad estimada alta",
    tone: "cyan" as Tone,
  },
  {
    title: "Vehiculo seminuevo",
    text: "Una opcion equilibrada para empezar rapido con menor mensualidad y buena calidad operativa.",
    monthly: "Mensualidad estimada media",
    tone: "amber" as Tone,
  },
  {
    title: "Vehiculo reconstruido certificado",
    text: "Unidades recuperadas, revisadas y reconstruidas para reducir costo de entrada, con validacion mecanica y documentacion.",
    monthly: "Mensualidad estimada baja",
    tone: "green" as Tone,
  },
];

const plans = [
  {
    name: "Basic",
    price: "499 MXN",
    note: "desde / mes",
    items: ["Acceso a plataforma", "Perfil socio conductor", "Comision desde 4%", "Historial de viajes", "Soporte basico", "Acceso a oportunidades de vehiculo"],
  },
  {
    name: "Advanced",
    price: "899 MXN",
    note: "desde / mes",
    featured: true,
    items: ["Todo Basic", "Soporte fiscal guiado", "Prioridad en zonas de demanda", "Reporte de ingresos", "Acceso a seguros, GPS y camara", "Evaluacion para renta semanal"],
  },
  {
    name: "Premium",
    price: "1,499 MXN",
    note: "desde / mes",
    items: ["Todo Advanced", "Prioridad B2B / hoteles / eventos", "Asesoria de vehiculo", "Alertas inteligentes", "Control de desempeno", "Paquete Mundial 2026 / aeropuerto / turismo"],
  },
];

const packageFeatures = [
  "Pickup en origen",
  "Entrega express",
  "Tracking GPS",
  "Codigo OTP de entrega",
  "Foto de comprobante",
  "Firma o confirmacion digital",
  "Historial de envios",
  "Tarifas dinamicas segun zona, distancia y urgencia",
];

const businessCards: Array<{ title: string; icon: LucideIcon; text: string; tone: Tone }> = [
  { title: "Hoteles", icon: Hotel, text: "Concierge de transporte, reservas, unidades premium y reportes por huesped o convenio.", tone: "cyan" },
  { title: "Empresas", icon: BriefcaseBusiness, text: "Usuarios autorizados, centros de costo, servicios programados y liquidacion mensual.", tone: "blue" },
  { title: "Eventos", icon: UsersRound, text: "Asignacion de unidades, rutas, horarios y control operativo para alta demanda.", tone: "violet" },
  { title: "Clinicas", icon: Stethoscope, text: "Traslados controlados para pacientes, personal, proveedores y entregas ligeras.", tone: "green" },
  { title: "Aeropuerto", icon: Plane, text: "Servicios programados, pickup coordinado, demanda por terminal y tracking en vivo.", tone: "amber" },
  { title: "Mundial 2026", icon: Landmark, text: "Operaciones premium para turismo, hoteles, eventos, grupos y aeropuertos.", tone: "rose" },
];

const controlKpis: Array<{ label: string; value: string; trend: string; icon: LucideIcon; tone: Tone }> = [
  { label: "Ingresos del dia", value: "$284,450", trend: "+21% vs ayer", icon: Banknote, tone: "green" },
  { label: "Viajes activos", value: "82", trend: "18 aeropuerto", icon: Route, tone: "cyan" },
  { label: "Paquetes activos", value: "46", trend: "9 urgentes", icon: Package, tone: "amber" },
  { label: "Socios conectados", value: "126", trend: "612 activos", icon: UsersRound, tone: "blue" },
  { label: "Unidades disponibles", value: "214", trend: "37 premium", icon: CarFront, tone: "green" },
  { label: "Mensualidades pendientes", value: "25", trend: "8 +7 dias", icon: CreditCard, tone: "rose" },
  { label: "Cobranza", value: "$96,800", trend: "recuperable", icon: WalletCards, tone: "amber" },
  { label: "Alertas fiscales", value: "17", trend: "5 criticas", icon: ReceiptText, tone: "violet" },
];

const operationalModules = [
  "Mapa operacional / zonas calientes",
  "Flotillas activas",
  "Paquetes en ruta",
  "Financiamiento y mensualidades",
  "Validacion fiscal",
  "Alertas de seguridad",
  "Olivia Mobility AI recomendaciones",
  "Servicios B2B",
  "Demanda por zona",
];

const oliviaCards: Array<{ title: string; icon: LucideIcon; items: string[]; tone: Tone }> = [
  {
    title: "Concierge para usuario",
    icon: UserRound,
    tone: "cyan",
    items: ["Ayuda a pedir viaje", "Reserva aeropuerto / hotel / evento", "Seguimiento de paquete", "Soporte durante el servicio", "Preguntas frecuentes", "Recomendaciones de seguridad"],
  },
  {
    title: "Copiloto del socio conductor",
    icon: CarFront,
    tone: "green",
    items: ["Sugiere zonas de mayor demanda", "Recuerda mensualidades", "Explica ingresos", "Recomienda servicios", "Ayuda con soporte fiscal", "Notifica oportunidades B2B"],
  },
  {
    title: "Dispatcher inteligente",
    icon: Radar,
    tone: "blue",
    items: ["Detecta demanda por zona", "Sugiere asignacion de conductores", "Prioriza paquetes urgentes", "Alerta retrasos", "Optimiza rutas", "Reduce tiempos muertos"],
  },
  {
    title: "Control fiscal y documental",
    icon: FileCheck2,
    tone: "amber",
    items: ["Revision RFC", "Regimen fiscal", "Constancia de situacion fiscal", "Comprobantes", "Alertas de documentos vencidos", "Seguimiento de obligaciones"],
  },
  {
    title: "Seguridad y operacion",
    icon: ShieldCheck,
    tone: "rose",
    items: ["Alertas de riesgo", "Camara / GPS integrable", "Boton de emergencia", "Verificacion de unidad", "Incidentes", "Historial operativo"],
  },
];

const oliviaActions = [
  "Hay alta demanda cerca de AICM, mover 4 socios a zona aeropuerto.",
  "El socio Luis tiene mensualidad pendiente, enviar recordatorio automatico.",
  "Paquete urgente en Polanco requiere conductor con camara activa.",
  "Hotel partner solicita 3 unidades premium para las 18:30.",
  "Socio nuevo necesita completar RFC y seguro antes de operar.",
];

const revenueModel = [
  "Mensualidad socio conductor",
  "Comision desde 4%",
  "Financiamiento / renta semanal",
  "Seguros",
  "GPS / camara",
  "Flotillas B2B",
  "Paqueteria",
  "Servicios premium",
  "Mundial 2026 / turismo / aeropuerto",
];

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="chip rounded-full px-4 py-2">{eyebrow}</span>
        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">{title}</h2>
      </div>
      {text && <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">{text}</p>}
    </div>
  );
}

function IconPanel({ icon: Icon, tone, children }: { icon: LucideIcon; tone: Tone; children: React.ReactNode }) {
  return (
    <div className="glass-card rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-city-cyan/30">
      <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${toneClasses[tone]}`}>
        <Icon size={22} />
      </span>
      {children}
    </div>
  );
}

function CheckList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <div className={`grid gap-3 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-700/50 bg-slate-950/45 px-4 py-3 text-sm leading-6 text-slate-200">
          <Check className="mt-1 shrink-0 text-city-green" size={16} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[390px] rounded-[2.3rem] border border-slate-600/60 bg-slate-950 p-3 shadow-panel">
      <div className="min-h-[590px] rounded-[1.8rem] border border-slate-800 bg-gradient-to-b from-slate-900 via-[#07111f] to-slate-950 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-city-cyan">DUC usuario</p>
            <p className="mt-1 text-xl font-black">Confirmar servicio</p>
          </div>
          <span className="rounded-full border border-city-green/25 bg-city-green/10 px-3 py-1 text-xs font-black text-city-green">Online</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["Viaje", "Paquete", "Reserva"].map((item, index) => (
            <span key={item} className={`rounded-2xl px-3 py-3 text-center text-xs font-black ${index === 0 ? "bg-city-cyan text-slate-950" : "border border-slate-700 bg-slate-950/60 text-slate-300"}`}>
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 rounded-3xl border border-slate-700/70 bg-slate-950/60 p-4">
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-2 h-3 w-3 rounded-full bg-city-green shadow-[0_0_0_6px_rgba(52,211,153,0.12)]" />
              <span className="my-2 h-12 w-px bg-gradient-to-b from-city-green to-city-red" />
              <span className="h-3 w-3 rounded-full bg-city-red shadow-[0_0_0_6px_rgba(251,113,133,0.12)]" />
            </div>
            <div className="grid flex-1 gap-5">
              <div>
                <p className="text-xs text-slate-400">Origen</p>
                <p className="font-black">Hotel partner, Reforma</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Destino</p>
                <p className="font-black">AICM Terminal 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-4">
            <Clock3 className="text-city-amber" size={18} />
            <p className="mt-3 text-xs text-slate-400">Tiempo estimado</p>
            <p className="text-2xl font-black">24 min</p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-4">
            <CarFront className="text-city-cyan" size={18} />
            <p className="mt-3 text-xs text-slate-400">Conductor asignado</p>
            <p className="text-lg font-black">Luis M.</p>
          </div>
        </div>
        <div className="mt-4 rounded-3xl border border-city-cyan/20 bg-city-cyan/5 p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-city-blue/15 text-city-blue">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="font-black">Unidad verificada</p>
              <p className="text-sm text-slate-400">Placas, GPS, camara y soporte activo</p>
            </div>
          </div>
        </div>
        <button className="mt-5 min-h-12 w-full rounded-2xl bg-gradient-to-r from-city-cyan to-city-green text-sm font-black text-slate-950">
          Confirmar servicio
        </button>
      </div>
    </div>
  );
}

function MobilityMap() {
  const points = [
    ["left-[18%] top-[28%]", "AICM", "Alta demanda", "cyan"],
    ["left-[52%] top-[38%]", "Polanco", "Paquete urgente", "amber"],
    ["left-[30%] top-[68%]", "Hotel", "3 unidades", "green"],
    ["right-[13%] top-[63%]", "Evento", "Flotilla activa", "rose"],
  ];

  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-slate-700/60 bg-[#050b16]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(32deg,transparent_0_44%,rgba(226,232,240,0.08)_45%,transparent_46%),linear-gradient(118deg,transparent_0_38%,rgba(226,232,240,0.07)_39%,transparent_40%),linear-gradient(-22deg,transparent_0_48%,rgba(226,232,240,0.06)_49%,transparent_50%)]" />
      <div className="absolute left-[20%] top-[30%] h-[43%] w-[54%] rounded-tr-[5rem] border-r-2 border-t-2 border-dashed border-city-cyan/60" />
      {points.map(([position, title, subtitle, tone]) => (
        <motion.div
          key={title}
          className={`absolute z-10 ${position} rounded-2xl border bg-slate-950/80 px-4 py-3 backdrop-blur-xl ${toneClasses[tone as Tone]}`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-sm font-black text-white">{title}</p>
          <p className="mt-1 text-xs text-slate-300">{subtitle}</p>
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-3">
        {["126 socios online", "46 paquetes en ruta", "17 alertas fiscales"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-700/60 bg-slate-950/75 px-4 py-3 text-sm font-black text-slate-100 backdrop-blur-xl">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CommandCenter() {
  const [period, setPeriod] = useState("Hoy");

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_55%_96%,rgba(52,211,153,0.12),transparent_34%)]" />

      <section className="container-page py-8 md:py-12" id="ecosistema">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-700/50 bg-slate-950/55 p-3 backdrop-blur-2xl">
          <div className="flex items-center gap-3 px-2">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-city-cyan via-city-blue to-violet-400 text-sm font-black text-white shadow-glow">
              DUC
            </span>
            <div>
              <p className="font-black tracking-tight">DUC MobilityOS</p>
              <p className="text-xs text-slate-400">Usuario · Socio conductor · Paquetes · Flotillas · Control Center · Olivia AI</p>
            </div>
          </div>
          <div className="flex max-w-full gap-1 overflow-x-auto p-1">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold text-slate-300 transition hover:bg-city-cyan/10 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.02fr_.98fr]">
          <motion.div className="glass-card rounded-[2rem] p-6 md:p-9" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="chip rounded-full px-4 py-2">Mobility + Financing + Logistics + AI</span>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.88] tracking-tighter md:text-7xl xl:text-8xl">
              DUC MobilityOS
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-white md:text-3xl">
              Maneja, viaja, envia paquetes y opera flotillas desde un solo ecosistema.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Una plataforma disenada para conectar usuarios, socios conductores, vehiculos, financiamiento, paquetes, empresas y operacion inteligente en tiempo real.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-city-cyan to-city-green px-5 text-sm font-black text-slate-950 shadow-glow">
                Solicitar demo <ChevronRight size={17} />
              </a>
              <a href="#ecosistema-duC" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-600 bg-slate-950/60 px-5 text-sm font-black text-white hover:border-city-cyan/50">
                Ver ecosistema
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {heroBadges.map((item, index) => (
                <span key={item} className={`rounded-2xl border px-4 py-3 text-sm font-black ${toneClasses[(["green", "cyan", "blue", "amber", "violet", "rose"] as Tone[])[index]]}`}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            <MobilityMap />
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["4%", "comision desde", "por viaje"],
                ["499", "MXN / mes", "plan socio Basic"],
                ["360", "operacion", "viajes · paquetes · B2B"],
              ].map(([value, label, note]) => (
                <div key={value} className="glass-card rounded-3xl p-5">
                  <p className="text-4xl font-black tracking-tighter text-white">{value}</p>
                  <p className="mt-1 text-sm font-bold text-slate-300">{label}</p>
                  <p className="mt-2 text-xs font-bold text-city-green">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10" id="ecosistema-duC">
        <SectionHeader
          eyebrow="Posicionamiento"
          title="El producto no es otra plataforma de viajes. Es un ecosistema DUC."
          text="Una app tradicional conecta un usuario con un conductor. DUC conecta viajes, vehiculos, socios conductores, paquetes, empresas, hoteles, flotillas, seguridad, financiamiento y operacion inteligente."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemCards.map(({ title, text, icon, tone }) => (
            <IconPanel key={title} icon={icon} tone={tone}>
              <h3 className="mt-5 text-2xl font-black tracking-tight">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </IconPanel>
          ))}
        </div>
      </section>

      <section className="container-page py-10" id="usuarios">
        <SectionHeader
          eyebrow="App usuario"
          title="Una app para usuarios, reservas y entregas"
          text="El usuario puede viajar, reservar, enviar paquetes, pagar, comprobar y recibir soporte AI con una experiencia clara y segura."
        />
        <div className="grid gap-6 xl:grid-cols-[.96fr_1.04fr]">
          <div className="glass-card rounded-[2rem] p-5 md:p-6">
            <CheckList items={userFeatures} columns />
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="container-page py-10" id="socios">
        <SectionHeader
          eyebrow="Socio conductor + financiamiento"
          title="Para socios conductores: ingresos, vehiculo y crecimiento"
          text="DUC no solo conecta viajes. Tambien permite al socio conductor construir su herramienta de trabajo con opciones operativas y financieras segun perfil."
        />
        <div className="grid gap-6 xl:grid-cols-[1.08fr_.92fr]">
          <div className="glass-card rounded-[2rem] p-5 md:p-6">
            <CheckList items={driverFeatures} columns />
          </div>
          <div className="glass-card rounded-[2rem] p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-city-green/25 bg-city-green/10 text-city-green">
              <CircleDollarSign size={23} />
            </span>
            <h3 className="mt-5 text-3xl font-black tracking-tight">Ruta operativa del socio</h3>
            <div className="mt-5 grid gap-3">
              {["Perfil e ingresos reales", "Evaluacion flexible", "Unidad + seguro + GPS/camara", "Operacion con comision desde 4%", "Reportes, soporte fiscal y oportunidades B2B"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-700/55 bg-slate-950/45 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-city-cyan/10 text-sm font-black text-city-cyan">{index + 1}</span>
                  <p className="font-bold text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10" id="vehiculos">
        <SectionHeader eyebrow="Vehiculos" title="Tres rutas para activar unidades segun perfil operativo" />
        <div className="grid gap-5 lg:grid-cols-3">
          {vehicles.map(({ title, text, monthly, tone }) => (
            <div key={title} className="glass-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1">
              <div className={`h-28 rounded-3xl border ${toneClasses[tone]} relative overflow-hidden`}>
                <div className="absolute bottom-8 left-[18%] right-[18%] h-10 rounded-t-3xl rounded-b-xl bg-current opacity-70" />
                <div className="absolute bottom-5 left-[25%] h-5 w-5 rounded-full bg-slate-950 ring-4 ring-white/25" />
                <div className="absolute bottom-5 right-[25%] h-5 w-5 rounded-full bg-slate-950 ring-4 ring-white/25" />
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight">{title}</h3>
              <p className="mt-3 min-h-24 leading-7 text-slate-300">{text}</p>
              <div className="mt-5 grid gap-2">
                {[monthly, "Renta semanal posible", "Opcion a compra", "Seguro opcional", "GPS / camara opcional"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <Check size={15} className="text-city-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10" id="planes">
        <SectionHeader eyebrow="Planes socio conductor" title="Planes claros para operar, crecer y acceder a oportunidades" />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-[2rem] border p-6 shadow-panel ${plan.featured ? "border-city-cyan/40 bg-city-cyan/10" : "border-slate-700/60 bg-slate-900/60"}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black tracking-tight">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{plan.note}</p>
                </div>
                {plan.featured && <span className="rounded-full bg-city-cyan px-3 py-1 text-xs font-black text-slate-950">Popular</span>}
              </div>
              <p className="mt-6 text-4xl font-black tracking-tighter">{plan.price}</p>
              <div className="mt-6 grid gap-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                    <Check size={16} className="mt-1 shrink-0 text-city-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">Los precios pueden variar segun ciudad, unidad, perfil, seguro y condiciones operativas.</p>
      </section>

      <section className="container-page py-10" id="paquetes">
        <SectionHeader
          eyebrow="Envio de paquetes"
          title="Viajes y paquetes en la misma red"
          text="DUC permite aprovechar la misma red de socios conductores para viajes, entregas ligeras, documentos, paquetes y servicios empresariales."
        />
        <div className="grid gap-6 xl:grid-cols-[.95fr_1.05fr]">
          <div className="glass-card rounded-[2rem] p-5 md:p-6">
            <CheckList items={packageFeatures} />
          </div>
          <div className="glass-card rounded-[2rem] p-6">
            <div className="grid gap-3 sm:grid-cols-5">
              {["Solicitud", "Recoleccion", "Ruta GPS", "Entrega", "Comprobante"].map((item, index) => (
                <div key={item} className="relative rounded-2xl border border-slate-700/60 bg-slate-950/50 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-city-cyan/10 text-sm font-black text-city-cyan">{index + 1}</span>
                  <p className="mt-4 text-sm font-black text-white">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 min-h-[280px] rounded-3xl border border-slate-700/60 bg-[#050b16] p-5">
              <div className="relative h-[240px] rounded-2xl border border-city-cyan/10 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:34px_34px]">
                <div className="absolute left-[22%] top-[32%] h-[42%] w-[50%] rounded-tr-[4rem] border-r-2 border-t-2 border-dashed border-city-cyan/65" />
                <span className="absolute left-[18%] top-[27%] h-5 w-5 rounded-full bg-city-green shadow-[0_0_0_10px_rgba(52,211,153,0.12)]" />
                <span className="absolute bottom-[25%] right-[23%] h-5 w-5 rounded-full bg-city-red shadow-[0_0_0_10px_rgba(251,113,133,0.12)]" />
                <div className="absolute bottom-4 left-4 rounded-2xl border border-slate-700/60 bg-slate-950/80 p-4">
                  <p className="font-black">OTP + foto + firma</p>
                  <p className="mt-1 text-sm text-slate-400">Confirmacion digital de entrega</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10" id="flotillas">
        <SectionHeader
          eyebrow="Flotillas / B2B / empresas"
          title="Control para flotillas, hoteles, empresas y eventos"
          text="Portal empresa, usuarios autorizados, servicios programados, conductores asignados, control de unidades, liquidacion por semana o mes y reportes por cliente."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {businessCards.map(({ title, icon, text, tone }) => (
            <IconPanel key={title} icon={icon} tone={tone}>
              <h3 className="mt-5 text-2xl font-black tracking-tight">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </IconPanel>
          ))}
        </div>
      </section>

      <section className="container-page py-10" id="control-center">
        <SectionHeader
          eyebrow="Control Center"
          title="Dashboard operacional para movilidad real"
          text="Una vista ejecutiva para monitorear ingresos, viajes, paquetes, socios, unidades, cobranza, fiscal, B2B y demanda por zona."
        />
        <div className="mb-5 flex w-fit rounded-2xl border border-slate-700 bg-slate-950/60 p-1">
          {["Hoy", "Semana", "Mes"].map((item) => (
            <button key={item} type="button" onClick={() => setPeriod(item)} className={`rounded-xl px-4 py-2 text-sm font-black ${period === item ? "bg-city-cyan text-slate-950" : "text-slate-300"}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {controlKpis.map(({ label, value, trend, icon: Icon, tone }) => (
            <div key={label} className="glass-card rounded-3xl p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-city-muted">{label}</p>
                  <p className="mt-2 text-3xl font-black tracking-tight">{value}</p>
                  <p className="mt-2 text-sm font-bold text-city-green">{trend}</p>
                </div>
                <span className={`grid h-11 w-11 place-items-center rounded-2xl border ${toneClasses[tone]}`}>
                  <Icon size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
          <MobilityMap />
          <div className="grid gap-4">
            <div className="glass-card rounded-[2rem] p-5">
              <h3 className="text-2xl font-black tracking-tight">Modulos activos</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {operationalModules.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-700/50 bg-slate-950/45 px-4 py-3 text-sm font-bold text-slate-200">
                    <Gauge className="shrink-0 text-city-cyan" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-[2rem] p-5">
              <h3 className="text-2xl font-black tracking-tight">Alertas vivas</h3>
              <div className="mt-5 grid gap-3">
                {[
                  ["Seguridad", "Unidad sin camara activa en zona premium", AlertTriangle, "rose"],
                  ["Fiscal", "5 socios requieren constancia actualizada", FileCheck2, "amber"],
                  ["Cobranza", "Enviar recordatorio a socios con mensualidad pendiente", CreditCard, "cyan"],
                ].map(([label, text, Icon, tone]) => {
                  const AlertIcon = Icon as LucideIcon;
                  return (
                    <div key={label as string} className="flex gap-3 rounded-2xl border border-slate-700/55 bg-slate-950/45 p-4">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${toneClasses[tone as Tone]}`}>
                        <AlertIcon size={18} />
                      </span>
                      <div>
                        <p className="font-black">{label as string}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{text as string}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10" id="olivia">
        <SectionHeader
          eyebrow="Olivia Mobility AI"
          title="Olivia Mobility AI: la inteligencia operativa de DUC"
          text="Olivia Mobility AI es la capa inteligente que ayuda a usuarios, socios conductores, flotillas y operadores a tomar mejores decisiones en tiempo real."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {oliviaCards.map(({ title, icon, items, tone }) => (
            <div key={title} className="glass-card rounded-[2rem] p-5">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${toneClasses[tone]}`}>
                {(() => {
                  const Icon = icon;
                  return <Icon size={22} />;
                })()}
              </span>
              <h3 className="mt-5 text-xl font-black tracking-tight">{title}</h3>
              <div className="mt-4 grid gap-2">
                {items.map((item) => (
                  <p key={item} className="rounded-2xl border border-slate-700/50 bg-slate-950/45 px-3 py-2 text-sm leading-5 text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[.72fr_1.28fr]">
          <div className="glass-card rounded-[2rem] p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-city-cyan/25 bg-city-cyan/10 text-city-cyan">
              <Bot size={23} />
            </span>
            <h3 className="mt-5 text-3xl font-black tracking-tight">Ejemplos de acciones de Olivia</h3>
            <p className="mt-3 leading-7 text-slate-300">Recomendaciones listas para convertir datos operativos en acciones concretas.</p>
          </div>
          <div className="grid gap-3">
            {oliviaActions.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-city-cyan/15 bg-city-cyan/5 p-4 text-slate-200">
                <Sparkles className="mt-1 shrink-0 text-city-cyan" size={18} />
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeader
          eyebrow="Modelo economico"
          title="Un modelo mas fuerte que solo cobrar comision"
          text="DUC combina varias lineas de valor para sostener la operacion: plataforma, socios, financiamiento, servicios, B2B, paqueteria y temporadas premium."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {revenueModel.map((item, index) => (
            <div key={item} className="rounded-3xl border border-slate-700/60 bg-slate-950/55 p-5">
              <span className={`grid h-10 w-10 place-items-center rounded-xl border ${toneClasses[(["green", "cyan", "blue", "amber", "violet", "rose"] as Tone[])[index % 6]]}`}>
                <Check size={18} />
              </span>
              <p className="mt-4 font-black text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16 pt-10" id="demo">
        <div className="rounded-[2rem] border border-city-cyan/25 bg-gradient-to-r from-city-cyan/15 via-violet-400/10 to-city-green/15 p-6 shadow-panel md:p-9">
          <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-center">
            <div>
              <span className="chip rounded-full px-4 py-2">Demo ejecutiva</span>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">
                DUC MobilityOS esta disenado para operar movilidad real
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Viajes, paquetes, socios conductores, vehiculos, flotillas, financiamiento y AI en una sola plataforma.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 xl:justify-end">
              <a href="mailto:contacto@ducdrivers.com?subject=Solicitar%20demo%20DUC%20MobilityOS" className="inline-flex min-h-12 items-center rounded-full bg-city-cyan px-5 text-sm font-black text-slate-950">
                Solicitar demo
              </a>
              <a href="/conductor" className="inline-flex min-h-12 items-center rounded-full border border-slate-600 bg-slate-950/60 px-5 text-sm font-black text-white">
                Quiero ser socio conductor
              </a>
              <a href="#flotillas" className="inline-flex min-h-12 items-center rounded-full border border-slate-600 bg-slate-950/60 px-5 text-sm font-black text-white">
                Quiero operar una flotilla
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
