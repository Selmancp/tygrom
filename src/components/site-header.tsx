"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Briefcase,
  Clock,
  Home as HomeIcon,
  Info,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Wrench,
  X,
} from "lucide-react";

const CONTACT = {
  display: "+91 9946949924",
  phone: "+919946949924",
  whatsapp: "919946949924",
  email: "info@tygrom.in",
};

const serviceOptions = [
  "Smart Home Automation",
  "Smart Office Automation",
  "CCTV & Security Systems",
  "Access Control & Gate Automation",
  "Video Door Phone & Video Intercom Systems",
  "Networking & WiFi Solutions",
  "Home Theater & Audio-Video",
  "Building Automation",
  "Smart Swimming Pool",
  "Electrical & IT Solutions",
  "Digital Signage Solutions",
  "PABX Telephone Systems",
  "Complete ELV & Smart Package",
];

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100";

function localDate() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

export default function SiteHeader({
  isHome = false,
  onBookVisit,
}: {
  isHome?: boolean;
  onBookVisit?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bookingDialog = useRef<HTMLDialogElement>(null);
  const homeHref = isHome ? "#home" : "/#home";
  const navigation = [
    { label: "Home", href: homeHref, icon: HomeIcon },
    { label: "About Us", href: isHome ? "#about" : "/#about", icon: Info },
    { label: "Services", href: isHome ? "#services" : "/#services", icon: Wrench },
    { label: "Careers", href: isHome ? "#careers" : "/#careers", icon: Briefcase },
    { label: "Contact", href: isHome ? "#contact" : "/#contact", icon: Mail },
  ];

  function openBooking() {
    setMobileMenuOpen(false);
    if (onBookVisit) {
      onBookVisit();
    } else {
      bookingDialog.current?.showModal();
    }
  }

  function handleSiteVisitSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
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
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
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
            <a href={`tel:${CONTACT.phone}`} className="inline-flex min-h-7 items-center gap-1.5 hover:underline">
              <Phone size={15} aria-hidden="true" />
              {CONTACT.display}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-7 items-center gap-1.5 hover:underline">
              <Mail size={15} aria-hidden="true" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="Main navigation" className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-1 px-3 sm:min-h-20 sm:gap-2 sm:px-8">
          <a href={homeHref} onClick={() => setMobileMenuOpen(false)} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo.jpeg"
              alt="Tygrom Integrated Solutions — Home"
              className="tygrom-logo-spin h-11 w-auto max-w-32 object-contain min-[380px]:max-w-36 sm:h-14 sm:max-w-48"
            />
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navigation.map(({ label, href, icon: Icon }) => (
              <a key={href} href={href} className="inline-flex min-h-11 items-center gap-2 py-3 text-slate-700 transition hover:text-sky-700">
                <Icon size={18} strokeWidth={2} className="shrink-0" aria-hidden="true" />
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
              <span className="hidden sm:inline">Request a Site Visit</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-slate-100 lg:hidden"
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-slate-100 bg-white px-5 py-3 shadow-lg lg:hidden">
            {navigation.map(({ label, href, icon: Icon }) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-700">
                <Icon size={20} strokeWidth={2} className="shrink-0 text-sky-700" aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>

      {!onBookVisit && (
        <dialog
          ref={bookingDialog}
          aria-labelledby="service-booking-title"
          aria-describedby="service-booking-description"
          className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-slate-900 shadow-2xl backdrop:bg-black/60 sm:p-8"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2 id="service-booking-title" className="text-2xl font-bold text-[#0A192F]">Request a Site Visit</h2>
            <button type="button" onClick={() => bookingDialog.current?.close()} aria-label="Close booking form" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100">
              <X aria-hidden="true" />
            </button>
          </div>
          <p id="service-booking-description" className="mb-6 text-sm leading-relaxed text-slate-600">
            Share your requirements and preferred schedule. Our team will confirm availability and booking details.
          </p>
          <form onSubmit={handleSiteVisitSubmit} className="space-y-5">
            <label className="block text-sm font-semibold" htmlFor="service-visit-name">
              Contact Name *
              <input id="service-visit-name" name="contactPerson" autoComplete="name" required maxLength={100} className={`${inputClass} mt-2 font-normal`} />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold" htmlFor="service-visit-phone">
                Phone *
                <input id="service-visit-phone" name="phone" type="tel" autoComplete="tel" required maxLength={25} className={`${inputClass} mt-2 font-normal`} />
              </label>
              <label className="block text-sm font-semibold" htmlFor="service-visit-location">
                Site Location *
                <input id="service-visit-location" name="location" placeholder="City / Area" required maxLength={200} className={`${inputClass} mt-2 font-normal`} />
              </label>
            </div>
            <label className="block text-sm font-semibold" htmlFor="service-visit-purpose">
              System Required *
              <select id="service-visit-purpose" name="purpose" className={`${inputClass} mt-2 font-normal`}>
                {serviceOptions.map((service) => <option key={service}>{service}</option>)}
              </select>
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold" htmlFor="service-visit-date">
                Preferred Date
                <input id="service-visit-date" name="preferredDate" type="date" min={localDate()} className={`${inputClass} mt-2 font-normal`} />
              </label>
              <label className="block text-sm font-semibold" htmlFor="service-visit-time">
                Preferred Time
                <input id="service-visit-time" name="preferredTime" type="time" min="08:00" max="18:00" className={`${inputClass} mt-2 font-normal`} />
              </label>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Continuing opens WhatsApp with your details. Press Send in WhatsApp to submit your request. Your preferred schedule is subject to confirmation.
            </p>
            <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
              <MessageCircle size={18} aria-hidden="true" />
              Continue to WhatsApp
            </button>
          </form>
        </dialog>
      )}
    </>
  );
}
