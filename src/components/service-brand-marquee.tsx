"use client";

import { useState } from "react";

type Brand = { name: string; src: string; width?: number };

const designTools: Brand[] = [
  { name: "Autodesk AutoCAD", src: "/brands/autocad.png", width: 105 },
  { name: "SketchUp by Trimble", src: "/brands/sketchup.png", width: 105 },
  { name: "Autodesk Revit MEP", src: "/brands/revit.png", width: 105 },
];

const serviceBrands: Record<string, { label: string; brands: Brand[] }> = {
  "home-automation": {
    label: "Smart home automation",
    brands: [
      { name: "Control4", src: "/brands/control4.png" },
      { name: "Tuya", src: "/brands/tuya.png" },
      { name: "Smart Life", src: "/brands/smart-life.png" },
      { name: "KNX", src: "/brands/knx.png" },
      { name: "Schneider Electric", src: "/brands/schneider-electric.png" },
      { name: "Legrand", src: "/brands/legrand.png" },
    ],
  },
  "office-automation": {
    label: "Smart office automation",
    brands: [
      { name: "KNX", src: "/brands/knx.png" },
      { name: "Schneider Electric", src: "/brands/schneider-electric.png" },
      { name: "ABB", src: "/brands/abb.png" },
      { name: "Legrand", src: "/brands/legrand.png" },
      { name: "Control4", src: "/brands/control4.png" },
    ],
  },
  "cctv-security": {
    label: "CCTV and security systems",
    brands: [
      { name: "Dahua", src: "/brands/dahua.png" },
      { name: "Hikvision", src: "/brands/hikvision.png" },
      { name: "Bosch", src: "/brands/bosch.png" },
    ],
  },
  "access-control-gate-automation": {
    label: "Access control and gate automation",
    brands: [
      { name: "ZKTeco", src: "/brands/zkteco.png" },
      { name: "Dahua", src: "/brands/dahua.png" },
      { name: "Hikvision", src: "/brands/hikvision.png" },
      { name: "BFT", src: "/brands/bft.png" },
      { name: "NICE", src: "/brands/nice.png" },
    ],
  },
  "video-intercom": {
    label: "Video door phone and intercom systems",
    brands: [
      { name: "Dahua", src: "/brands/dahua.png" },
      { name: "Hikvision", src: "/brands/hikvision.png" },
      { name: "Fermax", src: "/brands/fermax.png" },
      { name: "Comelit", src: "/brands/comelit.png" },
      { name: "Grandstream", src: "/brands/grandstream.png" },
    ],
  },
  "networking-wifi": {
    label: "Networking and Wi-Fi solutions",
    brands: [
      { name: "TP-Link", src: "/brands/tp-link.png" },
      { name: "Ubiquiti", src: "/brands/ubiquiti.png" },
      { name: "D-Link", src: "/brands/d-link.png" },
      { name: "Grandstream", src: "/brands/grandstream.png" },
    ],
  },
  "home-theater": {
    label: "Home theater and audio-video",
    brands: [
      { name: "JBL", src: "/brands/jbl.png" },
      { name: "Bose", src: "/brands/bose.png" },
      { name: "Yamaha", src: "/brands/yamaha.png" },
      { name: "Klipsch", src: "/brands/klipsch.png" },
      { name: "Denon", src: "/brands/denon.png" },
      { name: "Samsung", src: "/brands/samsung.png" },
      { name: "LG", src: "/brands/lg.png" },
    ],
  },
  "building-automation": {
    label: "Building automation",
    brands: [
      { name: "KNX", src: "/brands/knx.png" },
      { name: "Schneider Electric", src: "/brands/schneider-electric.png" },
      { name: "ABB", src: "/brands/abb.png" },
      { name: "Legrand", src: "/brands/legrand.png" },
      { name: "Control4", src: "/brands/control4.png" },
    ],
  },
  "smart-swimming-pool": {
    label: "Smart swimming pool controls",
    brands: [
      { name: "KNX", src: "/brands/knx.png" },
      { name: "Schneider Electric", src: "/brands/schneider-electric.png" },
      { name: "ABB", src: "/brands/abb.png" },
      { name: "Tuya", src: "/brands/tuya.png" },
      { name: "Smart Life", src: "/brands/smart-life.png" },
    ],
  },
  "electrical-it": {
    label: "Electrical and IT solutions",
    brands: [
      { name: "Schneider Electric", src: "/brands/schneider-electric.png" },
      { name: "ABB", src: "/brands/abb.png" },
      { name: "Legrand", src: "/brands/legrand.png" },
      { name: "TP-Link", src: "/brands/tp-link.png" },
      { name: "Ubiquiti", src: "/brands/ubiquiti.png" },
      { name: "D-Link", src: "/brands/d-link.png" },
    ],
  },
  "digital-signage": {
    label: "Digital signage solutions",
    brands: [
      { name: "Samsung", src: "/brands/samsung.png" },
      { name: "LG", src: "/brands/lg.png" },
    ],
  },
  pabx: {
    label: "PABX telephone systems",
    brands: [
      { name: "Yeastar", src: "/brands/yeastar.png" },
      { name: "Grandstream", src: "/brands/grandstream.png" },
    ],
  },
};

export default function ServiceBrandMarquee({ serviceKey }: { serviceKey: string }) {
  const [paused, setPaused] = useState(false);
  const service = serviceBrands[serviceKey];

  if (!service) return null;

  const brands = [...service.brands, ...designTools];

  return (
    <section
      aria-label={`${service.label} brands and design tools`}
      className="relative border-b border-slate-200 bg-white py-1"
    >
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-10 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        {paused ? "Play logo animation" : "Pause logo animation"}
      </button>
      <div
        className="tygrom-service-brand-window overflow-hidden"
        tabIndex={0}
        aria-label={`${service.label} brand logos; animation pauses while focused`}
      >
        <div
          className="tygrom-service-brand-track"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="tygrom-service-brand-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {brands.map((brand) => (
                <div key={`${brand.name}-${brand.src}`} className="flex h-8 w-24 shrink-0 items-center justify-center sm:w-28">
                  {/* These files are the supplied brand marks used in the main-site carousel. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width ?? 112}
                    height={32}
                    loading="lazy"
                    decoding="async"
                    className="max-h-7 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .tygrom-service-brand-track { display:flex; width:max-content; animation:tygromServiceBrandScroll 42s linear infinite; }
        .tygrom-service-brand-group { display:flex; flex-shrink:0; align-items:center; gap:20px; padding-right:20px; }
        @media (min-width:640px) { .tygrom-service-brand-group { gap:32px; padding-right:32px; } }
        .tygrom-service-brand-window:hover .tygrom-service-brand-track,
        .tygrom-service-brand-window:focus-within .tygrom-service-brand-track { animation-play-state:paused !important; }
        @keyframes tygromServiceBrandScroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @media (prefers-reduced-motion:reduce) {
          .tygrom-service-brand-track { animation:none; }
          .tygrom-service-brand-window { overflow-x:auto; }
          .tygrom-service-brand-group[aria-hidden="true"] { display:none; }
        }
      `}</style>
    </section>
  );
}
