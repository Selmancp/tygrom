import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";

const title = "Smart Home Automation in Malappuram";

const description =
  "Smart home automation design and installation in Malappuram by Tygrom Integrated Solutions, Randathani. Lighting, curtains, climate control and integrated scenes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/home-automation",
  },
  openGraph: {
    title,
    description,
    url: "https://www.tygrom.in/home-automation",
    type: "website",
    images: [
      {
        url: "/smart-home.png",
        alt: "Smart home automation solutions by Tygrom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/smart-home.png"],
  },
};

const features = [
  {
    title: "Smart Lighting",
    description:
      "Control compatible lights individually or in groups. Plan convenient switching and lighting scenes for different rooms and activities.",
  },
  {
    title: "Curtain Automation",
    description:
      "Operate compatible motorised curtains using switches, schedules or an app, depending on the selected system.",
  },
  {
    title: "Climate Control",
    description:
      "Manage compatible air-conditioning equipment through supported controls. Available functions depend on your AC model and integration method.",
  },
  {
    title: "Everyday Scenes",
    description:
      "Combine selected controls into scenes for arriving home, leaving the house or relaxing in the evening.",
  },
  {
    title: "App and Voice Control",
    description:
      "Use supported devices with a compatible app or voice assistant. We assess connectivity and compatibility before recommending equipment.",
  },
  {
    title: "Security Integration",
    description:
      "Plan compatible CCTV, video intercom and access-control connections alongside your automation system.",
  },
];

const steps = [
  {
    title: "Discuss Your Requirements",
    description:
      "Share your site location, floor plan, construction stage and the features you want to control.",
  },
  {
    title: "Assess and Select Equipment",
    description:
      "We assess wiring, network connectivity and device compatibility, then prepare a proposed scope and quotation.",
  },
  {
    title: "Install and Explain the Controls",
    description:
      "We install and configure the agreed system, check its operation and guide you through the available controls.",
  },
];

const faqs = [
  {
    question: "Can home automation be installed in an existing house?",
    answer:
      "Some systems support installation in existing homes. Suitable options depend on your wiring, neutral-wire availability, switch-box space and network coverage. An assessment helps identify what can be installed and whether alterations are required.",
  },
  {
    question: "How much does home automation cost?",
    answer:
      "The cost depends on the number of rooms and control points, selected equipment, wiring requirements and integrations. Share your floor plan and priorities so we can prepare a quotation for your project.",
  },
  {
    question: "Will the system work without an internet connection?",
    answer:
      "This depends on the selected system. Some local switches and automation functions can operate without internet access, while remote access and cloud-based features require connectivity. We explain these differences when selecting equipment.",
  },
  {
    question: "Can I start with a few rooms and expand later?",
    answer:
      "Phased installation is possible with suitable systems. Planning the wiring, network and equipment early helps support future expansion.",
  },
  {
    question: "Where is Tygrom based?",
    answer:
      "Tygrom Integrated Solutions is based in Randathani, Malappuram, Kerala. Contact us with your project location to confirm site-visit and installation availability.",
  },
];

const whatsappUrl =
  "https://wa.me/916235625272?text=" +
  encodeURIComponent(
    "Hello Tygrom, I would like to discuss home automation. My site location is: "
  );

export default function HomeAutomationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <Link href="/" className="font-bold text-[#0A192F]">
            TYGROM Integrated Solutions
          </Link>

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0A192F]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            All Services
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-[#0A192F] px-5 py-16 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wide text-emerald-300">
                Randathani · Malappuram · Kerala
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Smart Home Automation in Malappuram
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Bring lighting, curtains and climate controls together with
                a system planned around your home and daily routine.
                Tygrom Integrated Solutions provides automation design,
                installation and support for the agreed project scope.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Discuss Your Project
                </a>

                <a
                  href="tel:+916235625272"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-500 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  <Phone size={19} aria-hidden="true" />
                  Call Tygrom
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#070e18]">
              <img
                src="/smart-home.png"
                alt="Illustration of smart home automation"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#0A192F]">
              What Can You Automate?
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
              Your options depend on the selected devices, existing
              wiring and preferred controls. We help you choose a
              practical combination for your requirements.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <CheckCircle2
                    size={28}
                    className="mb-4 text-emerald-600"
                    aria-hidden="true"
                  />

                  <h3 className="text-xl font-semibold text-[#0A192F]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#0A192F]">
              How We Plan Your Installation
            </h2>

            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A192F] font-bold text-white">
                    {index + 1}
                  </span>

                  <h3 className="text-xl font-semibold text-[#0A192F]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#0A192F]">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-semibold text-[#0A192F]">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A192F] px-5 py-14 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">
              Planning a Smart Home?
            </h2>

            <p className="mt-4 leading-relaxed text-slate-300">
              Send us your site location and requirements to discuss
              suitable automation options for your home.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Contact Us on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#0A192F]">
              Tygrom Integrated Solutions
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Randathani, Malappuram, Kerala
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0A192F]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Return to Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}