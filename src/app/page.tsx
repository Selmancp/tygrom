"use client";

import { useRef, useState } from "react";
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
  display: "+91 6235625272",
  phone: "+916235625272",
  whatsapp: "916235625272",
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
    title: "Smart Home Automation",
    desc: "Control lighting, climate, curtains and everyday scenes through your phone or compatible voice assistant.",
    image: "/smart-home.png",
  },
  {
    title: "Smart Office Automation",
    desc: "Connect office lighting, meeting-room technology and energy controls for more convenient daily operation.",
    image: "/smart-office.png",
  },
  {
    title: "CCTV & Security Systems",
    desc: "Video surveillance, remote viewing and recording solutions designed around your property and security needs.",
    image: "/cctv-security.png",
  },
  {
    title: "Access Control & Gate Automation",
    desc: "Biometric attendance, RFID door access and automated sliding or swing gates with suitable safety controls.",
    image: "/access-control.png",
  },
  {
    title: "Video Intercom & Video Door Phone Systems",
    desc: "See and speak to visitors, with mobile communication and remote unlocking on compatible systems.",
    image: "/video-intercom.png",
  },
  {
    title: "Networking & WiFi Solutions",
    desc: "Reliable Wi-Fi coverage, structured cabling, network racks and connectivity for homes and businesses.",
    image: "/networking.png",
  },
  {
    title: "Home Theater & Audio-Video",
    desc: "Home theater, surround sound, multi-room audio and audio-video integration tailored to your space.",
    image: "/home-theater.png",
  },
  {
    title: "Building Automation",
    desc: "Integrated building management and ELV systems for coordinated monitoring and control of commercial spaces.",
    image: "/building-automation.png",
  },
  {
    title: "Smart Swimming Pool",
    desc: "Pool consultation and integration of filtration controls, lighting and compatible monitoring systems.",
    image: "/smart-pool.png",
  },
  {
    title: "Electrical & IT Solutions",
    desc: "Electrical installation, power distribution, UPS backup and IT infrastructure support.",
    image: "/electrical-it.png",
  },
  {
    title: "Digital Signage Solutions",
    desc: "Commercial displays, video walls and centrally managed content for customer-facing spaces.",
    image: "/digital-signage.png",
  },
  {
    title: "PABX Telephone Systems",
    desc: "IP-PBX systems, telephone extensions and business voice communication configured for your team.",
    image: "/pabx.png",
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [careerPath, setCareerPath] = useState<
    "fresher" | "experienced" | null
  >(null);

  const [applicationDraft, setApplicationDraft] = useState<{
    subject: string;
    body: string;
  } | null>(null);

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

  function handleCareerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const value = (name: string) =>
      String(data.get(name) ?? "").trim();

    const experienced = careerPath === "experienced";

    const subject = experienced
      ? `Experienced Application — ${value("position")} — ${value("fullName")}`
      : `Fresher Application — ${value("fullName")}`;

    const body = [
      experienced
        ? "Experienced Career Application"
        : "Fresher Career Application",
      "",
      `Full name: ${value("fullName")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone")}`,
      ...(experienced
        ? [
            `Position: ${value("position")}`,
            `Years of experience: ${value("yearsOfExp")}`,
            `Technical strengths and projects: ${value("technicalStrengths")}`,
          ]
        : [
            `Education: ${value("education")}`,
            `Personality and career goals: ${value("personalityGoal")}`,
          ]),
      "",
      "I will attach my CV to this email before sending.",
    ].join("\n");

    setApplicationDraft({ subject, body });
  }

  const draftEmailLink = applicationDraft
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        applicationDraft.subject
      )}&body=${encodeURIComponent(applicationDraft.body)}`
    : `mailto:${CONTACT.email}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-700 selection:text-white">
      {/* CONTACT BAR */}
      <div className="bg-[#0A192F] px-4 py-3 text-xs text-slate-200 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-between">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <Clock size={15} aria-hidden="true" />
              Mon–Sat: 8:00 AM–6:00 PM
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              Randathani, Kerala
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Phone size={15} aria-hidden="true" />
              {CONTACT.display}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 hover:underline"
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
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-2 px-3 sm:px-8">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="shrink-0"
          >
            <img
              src="/Logo.jpeg"
              alt="Tygrom Integrated Solutions — Home"
              className="h-10 w-auto max-w-32 object-contain sm:h-14 sm:max-w-48"
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
              className="min-h-11 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700 sm:px-5 sm:text-sm"
            >
              Book Free Site Visit
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
        {/* HERO */}
        <section
          id="home"
          className="relative isolate flex min-h-[75svh] scroll-mt-24 items-center overflow-hidden bg-[#0A192F] py-16 sm:py-24"
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
              <p className="mb-5 text-sm font-semibold tracking-wide text-cyan-200">
                Automation · Security · Connectivity
              </p>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Smart Technology.
                <br />
                Seamlessly Integrated.
              </h1>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
                Smart home automation, security, networking and pool
                automation for homes and businesses across Kerala.
                Based in Randathani, Tygrom designs, installs and
                supports systems tailored to your space.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openBooking}
                  className={primaryButton}
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
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Us
                </a>

                <a
                  href="#services"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>

              <p className="mt-8 text-sm text-slate-300">
                Building Trust, Delivering Excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                About Tygrom
              </p>

              <h2 className="mb-5 text-3xl font-bold leading-tight text-[#0A192F]">
                Technology designed around your everyday needs.
              </h2>

              <p className="mb-6 leading-relaxed text-slate-600">
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
                  <li key={item} className="flex items-start gap-3">
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

            <div className="rounded-2xl bg-[#0A192F] p-7 text-white sm:p-9">
              <h3 className="mb-4 text-2xl font-bold">
                One coordinated solution.
              </h3>

              <p className="mb-6 leading-relaxed text-slate-300">
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
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                Our Services
              </p>

              <h2 className="mb-4 text-3xl font-bold text-[#0A192F] sm:text-4xl">
                Integrated solutions for your space.
              </h2>

              <p className="leading-relaxed text-slate-600">
                Tell us what you need. We will help you plan a suitable
                system and explain the available options.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
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
{service.title === "Smart Home Automation" && (
  <a
    href="/home-automation"
    className="mb-4 inline-flex items-center gap-2 self-start font-semibold text-[#0A192F] hover:underline"
  >
    View Home Automation Details
    <ChevronRight size={18} aria-hidden="true" />
  </a>
)}
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
              ))}
            </div>
          </div>
        </section>

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
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                Join Our Team
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[#0A192F]">
                Build Your Career With Tygrom
              </h2>
              <p className="text-slate-600">
                Share your background, technical interests and
                experience with our team.
              </p>
            </div>

            {!careerPath ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {(["fresher", "experienced"] as const).map((path) => (
                  <button
                    key={path}
                    type="button"
                    onClick={() => {
                      setCareerPath(path);
                      setApplicationDraft(null);
                    }}
                    className="rounded-2xl border-2 border-slate-200 bg-white p-7 text-left transition hover:border-sky-700 hover:shadow-lg"
                  >
                    {path === "fresher" ? (
                      <GraduationCap
                        size={32}
                        className="mb-5 text-sky-700"
                        aria-hidden="true"
                      />
                    ) : (
                      <Briefcase
                        size={32}
                        className="mb-5 text-sky-700"
                        aria-hidden="true"
                      />
                    )}

                    <h3 className="mb-3 text-xl font-bold">
                      {path === "fresher"
                        ? "Apply as Fresher"
                        : "Apply with Experience"}
                    </h3>

                    <p className="mb-5 leading-relaxed text-slate-600">
                      {path === "fresher"
                        ? "Tell us about your education, interests and career goals."
                        : "Tell us about your technical skills and previous projects."}
                    </p>

                    <span className="inline-flex items-center gap-2 font-semibold text-sky-700">
                      Start Application
                      <ChevronRight size={18} aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
                <button
                  type="button"
                  onClick={() => {
                    setCareerPath(null);
                    setApplicationDraft(null);
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
                  onChange={() => setApplicationDraft(null)}
                  className="space-y-5"
                >
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

                  <p className="rounded-xl bg-sky-50 p-4 text-sm leading-relaxed text-slate-700">
                    This form prepares an email draft. Attach your CV
                    in your email app and send it to {CONTACT.email}.
                    No application or file is uploaded by this website.
                  </p>

                  <button
                    type="submit"
                    className={primaryButton}
                  >
                    <Send size={18} aria-hidden="true" />
                    Prepare Application Email
                  </button>
                </form>

                {applicationDraft && (
                  <div
                    role="status"
                    className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5"
                  >
                    <h4 className="mb-2 font-bold">
                      Your application draft is ready.
                    </h4>

                    <p className="mb-4 text-sm leading-relaxed text-slate-700">
                      Open your email app, attach your CV and press
                      Send. If no email app opens, copy the draft
                      below into your preferred email service.
                    </p>

                    <a
                      href={draftEmailLink}
                      className={primaryButton}
                    >
                      <Mail size={18} aria-hidden="true" />
                      Open Email Draft
                    </a>

                    <p className="mt-4 break-words text-sm">
                      <strong>To:</strong> {CONTACT.email}
                    </p>
                    <p className="mt-2 break-words text-sm">
                      <strong>Subject:</strong>{" "}
                      {applicationDraft.subject}
                    </p>

                    <textarea
                      aria-label="Application email body to copy"
                      readOnly
                      value={applicationDraft.body}
                      rows={12}
                      className={`${inputClass} mt-4`}
                    />
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