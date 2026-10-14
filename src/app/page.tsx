"use client";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  ArrowLeft,
  Send,
  Home as HomeIcon,
  Info,
  Wrench,
} from "lucide-react";
const CONTACT = {
  display: "+91 9946949924",
  phone: "+919946949924",
  whatsapp: "919946949924",
  email: "info@tygrom.in",
};
const navigation = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "About Us", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Careers", href: "#careers", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];
const services = [
  {
    gridLabel: "Home Automation",
    title: "Smart Home Automation",
    desc: "Control lighting, climate, curtains and everyday scenes through your phone or compatible voice assistant.",
    image: "/smart-home.png",
    href: "/home-automation",
  },
  {
    gridLabel: "Office Automation",
    title: "Smart Office Automation",
    desc: "Connect office lighting, meeting-room technology and energy controls for more convenient daily operation.",
    image: "/smart-office.png",
    href: "/office-automation",
  },
  {
    gridLabel: "CCTV Security",
    title: "CCTV & Security Systems",
    desc: "Video surveillance, remote viewing and recording solutions designed around your property and security needs.",
    image: "/cctv-security.png",
    href: "/cctv-security",
  },
  {
    gridLabel: "Access & Gates",
    title: "Access Control & Gate Automation",
    desc: "Biometric attendance, RFID door access and automated sliding or swing gates with suitable safety controls.",
    image: "/access-control.png",
    href: "/access-control-gate-automation",
  },
  {
    gridLabel: "Video Intercom",
    title: "Video Intercom & Video Door Phone Systems",
    desc: "See and speak to visitors, with mobile communication and remote unlocking on compatible systems.",
    image: "/video-intercom.png",
    href: "/video-intercom",
  },
  {
    gridLabel: "Networking",
    title: "Networking & WiFi Solutions",
    desc: "Reliable Wi-Fi coverage, structured cabling, network racks and connectivity for homes and businesses.",
    image: "/networking.png",
    href: "/networking-wifi",
  },
  {
    gridLabel: "Home Theater",
    title: "Home Theater & Audio-Video",
    desc: "Home theater, surround sound, multi-room audio and audio-video integration tailored to your space.",
    image: "/home-theater.png",
    href: "/home-theater",
  },
  {
    gridLabel: "Building Automation",
    title: "Building Automation",
    desc: "Integrated building management and ELV systems for coordinated monitoring and control of commercial spaces.",
    image: "/building-automation.png",
    href: "/building-automation",
  },
  {
    gridLabel: "Smart Pools",
    title: "Smart Swimming Pool",
    desc: "Pool consultation and integration of filtration controls, lighting and compatible monitoring systems.",
    image: "/smart-pool.png",
    href: "/smart-swimming-pool",
  },
  {
    gridLabel: "Electrical & IT",
    title: "Electrical & IT Solutions",
    desc: "Electrical installation, power distribution, UPS backup and IT infrastructure support.",
    image: "/electrical-it.png",
    href: "/electrical-it",
  },
  {
    gridLabel: "Digital Signage",
    title: "Digital Signage Solutions",
    desc: "Commercial displays, video walls and centrally managed content for customer-facing spaces.",
    image: "/digital-signage.png",
    href: "/digital-signage",
  },
  {
    gridLabel: "PABX Systems",
    title: "PABX Telephone Systems",
    desc: "IP-PBX systems, telephone extensions and business voice communication configured for your team.",
    image: "/pabx.png",
    href: "/pabx",
  },
];
const inputClass =
  "w-full min-w-0 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 focus:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-700/20";
const primaryButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700";
function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
function localDate() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
const BRAND_LOGOS = [
  {
    "name": "KNX",
    "src": "/brands/knx.png",
    "width": 46,
    "height": 22
  },
  {
    "name": "Control4",
    "src": "/brands/control4.png",
    "width": 80,
    "height": 18
  },
  {
    "name": "Tuya",
    "src": "/brands/tuya.png",
    "width": 44,
    "height": 22
  },
  {
    "name": "Smart Life",
    "src": "/brands/smart-life.png",
    "width": 22,
    "height": 22
  },
  {
    "name": "Schneider Electric",
    "src": "/brands/schneider-electric.png",
    "width": 75,
    "height": 22
  },
  {
    "name": "Legrand",
    "src": "/brands/legrand.png",
    "width": 80,
    "height": 20
  },
  {
    "name": "Dahua",
    "src": "/brands/dahua.png",
    "width": 74,
    "height": 22
  },
  {
    "name": "Hikvision",
    "src": "/brands/hikvision.png",
    "width": 80,
    "height": 10
  },
  {
    "name": "ZKTeco",
    "src": "/brands/zkteco.png",
    "width": 80,
    "height": 18
  },
  {
    "name": "BFT",
    "src": "/brands/bft.png",
    "width": 26,
    "height": 22
  },
  {
    "name": "Nice",
    "src": "/brands/nice.png",
    "width": 22,
    "height": 22
  },
  {
    "name": "Comelit",
    "src": "/brands/comelit.png",
    "width": 80,
    "height": 8
  },
  {
    "name": "Fermax",
    "src": "/brands/fermax.png",
    "width": 80,
    "height": 14
  },
  {
    "name": "TP-Link",
    "src": "/brands/tp-link.png",
    "width": 58,
    "height": 22
  },
  {
    "name": "Ubiquiti",
    "src": "/brands/ubiquiti.png",
    "width": 22,
    "height": 22
  },
  {
    "name": "D-Link",
    "src": "/brands/d-link.png",
    "width": 80,
    "height": 16
  },
  {
    "name": "JBL",
    "src": "/brands/jbl.png",
    "width": 32,
    "height": 22
  },
  {
    "name": "Bosch",
    "src": "/brands/bosch.png",
    "width": 80,
    "height": 18
  },
  {
    "name": "Bose",
    "src": "/brands/bose.png",
    "width": 80,
    "height": 10
  },
  {
    "name": "Yamaha",
    "src": "/brands/yamaha.png",
    "width": 56,
    "height": 22
  },
  {
    "name": "Klipsch",
    "src": "/brands/klipsch.png",
    "width": 30,
    "height": 22
  },
  {
    "name": "Denon",
    "src": "/brands/denon.png",
    "width": 80,
    "height": 16
  },
  {
    "name": "Samsung",
    "src": "/brands/samsung.png",
    "width": 80,
    "height": 12
  },
  {
    "name": "LG",
    "src": "/brands/lg.png",
    "width": 50,
    "height": 22
  },
  {
    "name": "ABB",
    "src": "/brands/abb.png",
    "width": 57,
    "height": 22
  },
  {
    "name": "Grandstream",
    "src": "/brands/grandstream.png",
    "width": 80,
    "height": 12
  },
  {
    "name": "Yeastar",
    "src": "/brands/yeastar.png",
    "width": 74,
    "height": 22
  },
  {
    "name": "AutoCAD",
    "src": "/brands/autocad.png",
    "width": 80,
    "height": 20
  },
  {
    "name": "SketchUp",
    "src": "/brands/sketchup.png",
    "width": 80,
    "height": 18
  },
  {
    "name": "Revit",
    "src": "/brands/revit.png",
    "width": 80,
    "height": 20
  }
];

function BrandLogo({ name, src, width, height }: {
  name: string; src: string; width: number; height: number;
}) {
  const [failed, setFailed] = useState(false);
  const dark = ["Comelit", "Fermax", "Denon", "ZKTeco"].includes(name);
  return (
    <div className={`flex h-7 shrink-0 items-center justify-center ${dark ? "rounded-lg bg-slate-900 px-1" : ""}`}>
      {failed ? (
        <span style={{ width }} className="text-center text-sm font-semibold text-slate-500">{name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} width={width} height={height}
          style={{ width, height }} className="block shrink-0 object-contain"
          onError={() => setFailed(true)} />
      )}
    </div>
  );
}

function BrandStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <section aria-label="Brands and technologies we work with" className="relative border-b border-slate-200 bg-white py-1">
      <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-10 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow">
        {paused ? "Play logo animation" : "Pause logo animation"}
      </button>
      <div className="tygrom-brand-window overflow-hidden" tabIndex={0} aria-label="Brand logos; animation pauses while focused">
        <div className="tygrom-brand-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="tygrom-brand-group" aria-hidden={copy === 1 ? true : undefined}>
              {BRAND_LOGOS.map((brand) => <BrandLogo key={brand.name} {...brand} />)}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .tygrom-brand-track { display:flex; width:max-content; animation:tygromBrandScroll 100s linear infinite; }
        .tygrom-brand-group { display:flex; flex-shrink:0; align-items:center; gap:32px; padding-right:32px; }
        .tygrom-brand-window:hover .tygrom-brand-track,
        .tygrom-brand-window:focus-within .tygrom-brand-track { animation-play-state:paused !important; }
        @keyframes tygromBrandScroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @media (prefers-reduced-motion:reduce) {
          .tygrom-brand-track { animation:none; }
          .tygrom-brand-window { overflow-x:auto; }
          .tygrom-brand-group[aria-hidden="true"] { display:none; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
                <article
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-sky-700 hover:shadow-lg"
                >
                  <div className="overflow-hidden bg-[#070e18]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-[#0A192F]">
                      {service.title}
                    </h3>
                    <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
                      {service.desc}
                    </p>
<a
                      href={service.href}
                      aria-label={`View details about ${service.title}`}
                      className="mb-4 inline-flex items-center gap-2 self-start font-semibold text-[#0A192F] hover:underline"
                    >
                      View Service Details
                      <ChevronRight size={18} aria-hidden="true" />
                    </a>
                    <a
                      href={whatsappLink(
                        `Hello Tygrom, I would like to enquire about ${service.title}. Please share the available options.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${service.title} on WhatsApp`}
                      className={`${primaryButton} self-start`}
                    >
                      <MessageCircle size={18} aria-hidden="true" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </article>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [careerPath, setCareerPath] = useState<
    "fresher" | "experienced" | null
  >(null);
  const [applicationStatus, setApplicationStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [applicationSubmitting, setApplicationSubmitting] = useState(false);
  const applicationLock = useRef(false);
  const submissionId = useRef<string | null>(null);
  const serviceDialog = useRef<HTMLDialogElement>(null);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  useEffect(() => {
    if (!selectedService) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedService]);
  function openService(service: (typeof services)[number]) {
    setSelectedService(service);
    serviceDialog.current?.showModal();
  }
  const bookingDialog = useRef<HTMLDialogElement>(null);
  function openBooking() {
    setMobileMenuOpen(false);
    bookingDialog.current?.showModal();
  }
  function handleSiteVisitSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) =>
      String(data.get(name) ?? "").trim();
    const message = [
      "*New Site Visit Request — Tygrom*",
      "",
      `Contact person: ${value("contactPerson")}`,
      `Phone: ${value("phone")}`,
      `Site location: ${value("location")}`,
      `System required: ${value("purpose")}`,
      `Preferred date: ${value("preferredDate") || "Please contact me"}`,
      `Preferred time: ${value("preferredTime") || "Please contact me"}`,
      "",
      "Please confirm availability and booking details.",
    ].join("\n");
    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  }
  async function handleCareerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (applicationLock.current || !careerPath) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const files = data.getAll("documents").filter((item): item is File => item instanceof File && item.size > 0);
    setApplicationStatus(null);
    if (files.length > 3 || files.reduce((sum, file) => sum + file.size, 0) > 3 * 1024 * 1024) {
      setApplicationStatus({ type: "error", message: "Choose up to 3 documents, with a combined size of 3 MB or less." });
      return;
    }
    if (files.some((file) => !/\.(pdf|docx|jpe?g|png)$/i.test(file.name))) {
      setApplicationStatus({ type: "error", message: "Please upload PDF, DOCX, JPG or PNG files." });
      return;
    }
    applicationLock.current = true;
    setApplicationSubmitting(true);
    submissionId.current ??= crypto.randomUUID();
    data.set("submissionId", submissionId.current);
    data.set("careerPath", careerPath);
    try {
      const response = await fetch("/api/careers", { method: "POST", body: data });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "Unable to submit. Please try again or email info@tygrom.in.");
      setApplicationStatus({ type: "success", message: "Your application has been submitted. Thank you for your interest in Tygrom." });
      form.reset();
      submissionId.current = null;
    } catch (error) {
      setApplicationStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to submit. Please try again." });
    } finally {
      applicationLock.current = false;
      setApplicationSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-700 selection:text-white">
      {/* CONTACT BAR */}
      <div className="bg-[#0A192F] px-3 py-1.5 text-[11px] text-slate-200 sm:px-8 sm:py-3 sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center sm:flex-wrap sm:justify-between sm:gap-x-6 sm:gap-y-2">
          <div className="hidden flex-wrap justify-center gap-x-5 gap-y-2 sm:flex">
            <span className="inline-flex items-center gap-2">
              <Clock size={15} aria-hidden="true" />
              Mon–Sat: 8:00 AM–6:00 PM
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              Randathani, Kerala
            </span>
          </div>
          <div className="flex items-center justify-center gap-x-4 whitespace-nowrap sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex min-h-7 items-center gap-1.5 hover:underline"
            >
              <Phone size={15} aria-hidden="true" />
              {CONTACT.display}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex min-h-7 items-center gap-1.5 hover:underline"
            >
              <Mail size={15} aria-hidden="true" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
      {/* NAVIGATION WITH ICONS */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-1 px-3 sm:min-h-20 sm:gap-2 sm:px-8">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="shrink-0"
          >
            <img
              src="/Logo.jpeg"
              alt="Tygrom Integrated Solutions — Home"
              className="h-11 w-auto max-w-32 object-contain min-[380px]:max-w-36 sm:h-14 sm:max-w-48"
            />
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navigation.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex min-h-11 items-center gap-2 py-3 text-slate-700 transition hover:text-sky-700"
              >
                <Icon
                  size={18}
                  strokeWidth={2}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-red-600 px-3 py-0 text-xs font-semibold leading-none text-white hover:bg-red-700 sm:h-11 sm:px-5 sm:py-2 sm:text-sm"
            >
              <span className="sm:hidden">Book Site Visit</span>
              <span className="hidden sm:inline">Book Free Site Visit</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-slate-100 lg:hidden"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 bg-white px-5 py-3 shadow-lg lg:hidden"
          >
            {navigation.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-700"
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-sky-700"
                  aria-hidden="true"
                />
                <span>{label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
      <main>
        <BrandStrip />
        {/* HERO */}
        <section
          id="home"
          className="relative isolate flex min-h-[calc(100svh-140px)] scroll-mt-20 items-center overflow-hidden bg-[#0A192F] py-7 sm:min-h-[75svh] sm:scroll-mt-24 sm:py-24"
        >
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="/kerala-smart-home-swimming-pool-mobile.png"
            />
            <img
              src="/kerala-smart-home-swimming-pool.png"
              alt=""
              fetchPriority="high"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/50" />
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold tracking-wide text-cyan-200 sm:mb-5 sm:text-sm">
                Automation · Security · Connectivity
              </p>
              <h1 className="mb-4 text-[clamp(1.75rem,8vw,2.125rem)] font-extrabold leading-tight tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
                Smart Technology.
                <br />
                Seamlessly Integrated.
              </h1>
              <p className="mb-3 text-sm leading-relaxed text-slate-100 sm:hidden">
                Smart automation, security, networking and pool solutions
                for homes and businesses across Kerala.
              </p>
              <p className="mb-5 flex items-center gap-2 text-xs text-slate-200 sm:hidden">
                <MapPin size={16} aria-hidden="true" />
                Randathani, Malappuram
              </p>
              <p className="mb-8 hidden max-w-2xl text-base leading-relaxed text-slate-100 sm:block sm:text-lg">
                Smart home automation, security, networking and pool
                automation for homes and businesses across Kerala.
                Based in Randathani, Tygrom designs, installs and
                supports systems tailored to your space.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <button
                  type="button"
                  onClick={openBooking}
                  className={`${primaryButton} col-span-2 w-full sm:w-auto`}
                >
                  Discuss Your Project
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
                <a
                  href={whatsappLink(
                    "Hello Tygrom, I would like to discuss a project."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-700 px-2 py-3 text-xs sm:px-5 sm:text-sm font-semibold text-white hover:bg-green-800"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/50 px-2 py-3 text-xs sm:px-5 sm:text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
              <p className="mt-5 text-xs text-slate-300 sm:mt-8 sm:text-sm">
                Building Trust, Delivering Excellence.
              </p>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-10 sm:py-14 lg:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 sm:gap-8 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                About Tygrom
              </p>
              <h2 className="mb-3 text-xl font-bold sm:text-2xl leading-tight sm:text-3xl text-[#0A192F]">
                Technology designed around your everyday needs.
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                We design, install, integrate and maintain technology
                for homes, offices and commercial spaces. Our work
                connects automation, security, electrical systems and
                IT infrastructure into solutions that are practical
                to operate.
              </p>
              <ul className="space-y-4">
                {[
                  "Solutions planned for your space and requirements",
                  "Professional installation and structured cabling",
                  "System setup, user guidance and technical support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-sky-700"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#0A192F] p-5 text-white sm:p-7 lg:p-9">
              <h3 className="mb-4 text-2xl font-bold">
                One coordinated solution.
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                From a single system upgrade to an integrated project,
                we help you select compatible technology and plan
                installation around your property.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-6">
                <div>
                  <p className="font-semibold text-cyan-200">Homes</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Comfort and security
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-200">
                    Businesses
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Connected operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 py-7 sm:py-12 lg:py-16"
        >
          <div className="mx-auto max-w-7xl px-3 sm:px-8">
            <div className="mx-auto mb-4 max-w-2xl text-center sm:mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 sm:mb-3 sm:text-sm sm:tracking-widest">
                Our Services
              </p>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-[#0A192F] sm:mb-4 sm:text-4xl">
                Smart Solution for Your Space.
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Tell us what you need. We will help you plan a suitable
                system and explain the available options.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-4 lg:hidden">
              {services.map((service, index) => (
                <button key={service.href} type="button" onClick={() => openService(service)}
                  aria-label={`Open ${service.title}`} aria-haspopup="dialog"
                  className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white text-center shadow-sm transition hover:border-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                  <span role="img" aria-label={service.title} className="block aspect-[4/3] w-full bg-slate-200"
                    style={{ backgroundImage: "url('/service-grid.png')", backgroundSize: "300% 400%", backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * (100 / 3)}%` }} />
                  <span className="flex min-h-11 items-center justify-center px-1 py-1 text-[8px] font-bold leading-tight text-[#0A192F] min-[380px]:text-[9px] sm:min-h-12 sm:text-sm">
                    {service.gridLabel}
                  </span>
                </button>
              ))}
            </div>
            <div className="hidden grid-cols-3 gap-6 lg:grid">
              {services.map((service) => <ServiceCard key={service.href} service={service} />)}
            </div>
          </div>
        </section>
        <dialog ref={serviceDialog} aria-label={selectedService?.title ?? "Service details"}
          onClose={() => setSelectedService(null)}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) serviceDialog.current?.close();
          }}
          className="fixed inset-0 m-auto max-h-[85svh] w-[calc(100%_-_24px)] max-w-lg overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-2xl backdrop:bg-slate-950/70">
          <button type="button" autoFocus onClick={() => serviceDialog.current?.close()} aria-label="Close service details"
            className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow focus-visible:outline-2 focus-visible:outline-sky-700">
            <X size={22} aria-hidden="true" />
          </button>
          {selectedService && <ServiceCard service={selectedService} />}
        </dialog>
        {/* PROJECT CONTACT */}
        <section className="bg-[#0A192F] py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
            <div>
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                Planning a new project or upgrading an existing system?
              </h2>
              <p className="max-w-2xl leading-relaxed text-slate-300">
                Share your location and requirements so we can discuss
                the next steps with you.
              </p>
            </div>
            <button
              type="button"
              onClick={openBooking}
              className={`${primaryButton} shrink-0`}
            >
              Request a Site Visit
            </button>
          </div>
        </section>
        {/* CAREERS */}
        <section
          id="careers"
          className="scroll-mt-24 py-8 sm:py-14 lg:py-16"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <div className="mb-6 text-center sm:mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 sm:mb-3 sm:text-sm sm:tracking-widest">
                Join Our Team
              </p>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-[#0A192F] sm:mb-4 sm:text-3xl">
                Build Your Career With Tygrom
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Share your background, technical interests and
                experience with our team.
              </p>
            </div>
            {!careerPath ? (
              <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-6">
                {(["fresher", "experienced"] as const).map((path) => (
                  <button
                    key={path}
                    type="button"
                    onClick={() => {
                      setCareerPath(path);
                      setApplicationStatus(null);
                      submissionId.current = null;
                    }}
                    className="flex min-h-40 min-w-0 flex-col items-center rounded-2xl border-2 border-slate-200 bg-white p-3 text-center transition hover:border-sky-700 hover:shadow-lg sm:min-h-56 sm:p-7"
                  >
                    {path === "fresher" ? (
                      <GraduationCap
                        size={32}
                        className="mb-4 text-sky-700"
                        aria-hidden="true"
                      />
                    ) : (
                      <Briefcase
                        size={32}
                        className="mb-4 text-sky-700"
                        aria-hidden="true"
                      />
                    )}
                    <h3 className="mb-3 text-base font-bold sm:text-xl">
                      {path === "fresher"
                        ? "Fresher"
                        : "Experienced"}
                    </h3>
                    <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600 sm:mb-5 sm:text-base">
                      {path === "fresher"
                        ? "Tell us about your education, interests and career goals."
                        : "Tell us about your technical skills and previous projects."}
                    </p>
                    <span className="inline-flex min-h-11 w-full items-center justify-center gap-1 rounded-lg bg-sky-700 px-1 py-2 text-[10px] font-semibold text-white sm:text-sm">
                      Apply Now
                      <ChevronRight size={18} aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
                <button
                  type="button"
                  disabled={applicationSubmitting}
                  onClick={() => {
                    setCareerPath(null);
                    setApplicationStatus(null);
                      submissionId.current = null;
                  }}
                  className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-700"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  Back to selection
                </button>
                <h3 className="mb-6 text-2xl font-bold">
                  {careerPath === "fresher"
                    ? "Fresher Application"
                    : "Experienced Application"}
                </h3>
                <form
                  key={careerPath}
                  onSubmit={handleCareerSubmit}
                  encType="multipart/form-data"
                  onChange={() => { setApplicationStatus(null); submissionId.current = null; }}
                  className="space-y-5"
                >
                  <fieldset disabled={applicationSubmitting} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="career-name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Full Name *
                      </label>
                      <input
                        id="career-name"
                        name="fullName"
                        autoComplete="name"
                        required
                        maxLength={100}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email Address *
                      </label>
                      <input
                        id="career-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={150}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-phone"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="career-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        maxLength={25}
                        className={inputClass}
                      />
                    </div>
                    {careerPath === "fresher" ? (
                      <div>
                        <label
                          htmlFor="career-education"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Education Qualification *
                        </label>
                        <input
                          id="career-education"
                          name="education"
                          required
                          maxLength={200}
                          className={inputClass}
                        />
                      </div>
                    ) : (
                      <>
                        <div>
                          <label
                            htmlFor="career-position"
                            className="mb-2 block text-sm font-semibold"
                          >
                            Applying For *
                          </label>
                          <select
                            id="career-position"
                            name="position"
                            className={inputClass}
                          >
                            <option>Field Technician / Installer</option>
                            <option>ELV Systems Engineer</option>
                            <option>Smart Automation Specialist</option>
                            <option>Project Manager</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="career-years"
                            className="mb-2 block text-sm font-semibold"
                          >
                            Years of Experience *
                          </label>
                          <input
                            id="career-years"
                            name="yearsOfExp"
                            type="number"
                            min="0"
                            max="60"
                            step="0.5"
                            required
                            className={inputClass}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="career-details"
                      className="mb-2 block text-sm font-semibold"
                    >
                      {careerPath === "fresher"
                        ? "Personality & Career Goals *"
                        : "Technical Strengths & Past Projects *"}
                    </label>
                    <textarea
                      id="career-details"
                      name={
                        careerPath === "fresher"
                          ? "personalityGoal"
                          : "technicalStrengths"
                      }
                      rows={5}
                      required
                      maxLength={2000}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="career-documents" className="mb-2 block text-sm font-semibold">CV / Relevant Documents</label>
                    <input id="career-documents" name="documents" type="file" multiple accept=".pdf,.docx,.jpg,.jpeg,.png" aria-describedby="career-documents-help" className={inputClass} />
                    <p id="career-documents-help" className="mt-2 text-xs text-slate-500">Optional: PDF, DOCX, JPG or PNG. Up to 3 files, 3 MB combined.</p>
                  </div>
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="career-company">Company</label>
                    <input id="career-company" name="company" tabIndex={-1} autoComplete="off" />
                  </div>
                  </fieldset>
                  <button type="submit" disabled={applicationSubmitting} className={`${primaryButton} disabled:cursor-wait disabled:opacity-60`}>
                    <Send size={18} aria-hidden="true" />
                    {applicationSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
                {applicationStatus && (
                  <div role={applicationStatus.type === "error" ? "alert" : "status"} className={`mt-5 rounded-xl p-4 text-sm ${applicationStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                    {applicationStatus.message}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer
        id="contact"
        className="scroll-mt-24 bg-[#0A192F] px-5 py-12 text-slate-300 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-9 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">
              Tygrom Integrated Solutions
            </h2>
            <p className="text-sm leading-relaxed">
              Automation, security, networking and integrated
              technology solutions for homes and businesses across
              Kerala.
            </p>
            <p className="mt-4 text-sm text-cyan-200">
              Building Trust, Delivering Excellence.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact Tygrom
            </h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <MapPin size={18} aria-hidden="true" />
                Randathani, Malappuram, Kerala
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 hover:text-white hover:underline"
              >
                <Phone size={18} aria-hidden="true" />
                {CONTACT.display}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 hover:text-white hover:underline"
              >
                <Mail size={18} aria-hidden="true" />
                {CONTACT.email}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white hover:underline"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Working Hours
            </h3>
            <p className="flex items-start gap-3 text-sm leading-relaxed">
              <Clock
                size={18}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              Monday–Saturday
              <br />
              8:00 AM–6:00 PM
            </p>
            <button
              type="button"
              onClick={openBooking}
              className="mt-5 min-h-11 rounded-lg border border-slate-500 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Request a Site Visit
            </button>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Tygrom Integrated Solutions.
          All rights reserved.
        </p>
      </footer>
      {/* SITE VISIT DIALOG */}
      <dialog
        ref={bookingDialog}
        aria-labelledby="booking-title"
        aria-describedby="booking-description"
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-slate-900 shadow-2xl backdrop:bg-black/60 sm:p-8"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2
            id="booking-title"
            className="text-2xl font-bold text-[#0A192F]"
          >
            Book Free Site Visit
          </h2>
          <button
            type="button"
            onClick={() => bookingDialog.current?.close()}
            aria-label="Close booking form"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <p
          id="booking-description"
          className="mb-6 text-sm leading-relaxed text-slate-600"
        >
          Share your requirements and preferred schedule.
          Our team will confirm availability and booking details.
        </p>
        <form
          onSubmit={handleSiteVisitSubmit}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="visit-name"
              className="mb-2 block text-sm font-semibold"
            >
              Contact Name *
            </label>
            <input
              id="visit-name"
              name="contactPerson"
              autoComplete="name"
              required
              maxLength={100}
              className={inputClass}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="visit-phone"
                className="mb-2 block text-sm font-semibold"
              >
                Phone *
              </label>
              <input
                id="visit-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={25}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="visit-location"
                className="mb-2 block text-sm font-semibold"
              >
                Site Location *
              </label>
              <input
                id="visit-location"
                name="location"
                placeholder="City / Area"
                required
                maxLength={200}
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="visit-purpose"
              className="mb-2 block text-sm font-semibold"
            >
              System Required *
            </label>
            <select
              id="visit-purpose"
              name="purpose"
              className={inputClass}
            >
              {services.map((service) => (
                <option key={service.title}>
                  {service.title}
                </option>
              ))}
              <option>Complete ELV & Smart Package</option>
            </select>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="visit-date"
                className="mb-2 block text-sm font-semibold"
              >
                Preferred Date
              </label>
              <input
                id="visit-date"
                name="preferredDate"
                type="date"
                min={localDate()}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="visit-time"
                className="mb-2 block text-sm font-semibold"
              >
                Preferred Time
              </label>
              <input
                id="visit-time"
                name="preferredTime"
                type="time"
                min="08:00"
                max="18:00"
                className={inputClass}
              />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Continuing opens WhatsApp with your details. Press Send
            in WhatsApp to submit your request. Your preferred
            schedule is subject to confirmation.
          </p>
          <button
            type="submit"
            className={`${primaryButton} w-full`}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Continue to WhatsApp
          </button>
        </form>
      </dialog>
    </div>
  );
}
