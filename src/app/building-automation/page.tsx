import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, MessageCircle, Phone } from "lucide-react";

const title = "Building Automation Solutions in Malappuram";
const description = "Building Automation in Malappuram by Tygrom Integrated Solutions, Randathani. Discuss equipment selection, installation and your project requirements.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/building-automation" },
  openGraph: {
    type: "website", title, description,
    url: "https://www.tygrom.in/building-automation",
    images: [{ url: "/building-automation.png", alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/building-automation.png"] },
};

const features = [
  {
    "title": "Requirements Assessment",
    "description": "Identify the building systems, users and operating information that need to be connected."
  },
  {
    "title": "Lighting Coordination",
    "description": "Plan supported lighting controls around zones, schedules and occupancy requirements."
  },
  {
    "title": "Equipment Monitoring",
    "description": "Assess available interfaces for monitoring compatible equipment and selected operating conditions."
  },
  {
    "title": "Access and Security Integration",
    "description": "Review supported connections between access control, surveillance and building-management functions."
  },
  {
    "title": "Network and ELV Planning",
    "description": "Coordinate suitable cabling and network requirements for the agreed systems."
  },
  {
    "title": "Operator Handover",
    "description": "Document the agreed controls, permissions and operating instructions for building users."
  }
];
const faqs = [
  {
    "question": "Can existing systems be integrated?",
    "answer": "Integration depends on supported protocols, available interfaces and manufacturer restrictions. Equipment details are needed first."
  },
  {
    "question": "Can the project be implemented in stages?",
    "answer": "A phased scope can be considered when interfaces and infrastructure allow future expansion."
  },
  {
    "question": "Does every system need replacement?",
    "answer": "Not necessarily. Compatible existing equipment may be retained after assessment."
  },
  {
    "question": "What do you need for an initial proposal?",
    "answer": "Share building plans, installed equipment details, operational requirements and the systems you want to monitor or control."
  }
];
const whatsappUrl = "https://wa.me/916235625272?text=" + encodeURIComponent("Hello Tygrom, I would like to enquire about Building Automation. My site location is: ");

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <Link href="/" aria-label="Tygrom Integrated Solutions homepage" className="inline-flex items-center">
            <img src="/Logo.jpeg" alt="Tygrom Integrated Solutions" className="block h-auto w-[180px] object-contain sm:w-[220px]" />
          </Link>
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0A192F]">
            <ArrowLeft size={18} aria-hidden="true" /> All Services
          </Link>
        </div>
      </header>
      <main>
        <section className="bg-[#0A192F] px-5 py-16 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wide text-sky-300">Randathani · Malappuram · Kerala</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">Coordinate supported building controls and monitoring around your commercial property requirements. Tygrom in Randathani assesses equipment interfaces, network infrastructure and the required integration scope before proposing building automation or ELV connections.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400">
                  <MessageCircle size={20} aria-hidden="true" /> Discuss Your Project
                </a>
                <a href="tel:+916235625272" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-500 px-6 py-3 font-semibold hover:bg-white/10">
                  <Phone size={19} aria-hidden="true" /> Call Tygrom
                </a>
              </div>
            </div>
            <img src="/building-automation.png" alt="Building Automation by Tygrom Integrated Solutions" className="h-auto w-full rounded-2xl bg-[#070e18] object-contain" />
          </div>
        </section>
        <section className="px-5 py-16" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="solutions-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">Building Automation Options</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">Equipment and features are selected after assessing your site. Your quotation will specify the installation scope, compatible functions and any required accessories.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <CheckCircle2 size={24} className="mb-4 text-sky-700" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-[#0A192F]">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white px-5 py-16" aria-labelledby="planning-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="planning-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">Plan Your Installation</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">1. Share Your Requirements</h3><p className="mt-3 leading-7 text-slate-600">Share building plans, installed system models and the controls or monitoring your operators require.</p></li>
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">2. Review the Proposed Scope</h3><p className="mt-3 leading-7 text-slate-600">Discuss site conditions, compatible equipment, installation work and the quotation before proceeding.</p></li>
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">3. Installation and Handover</h3><p className="mt-3 leading-7 text-slate-600">The agreed equipment is installed and configured, with operating guidance and support arrangements explained at handover.</p></li>
            </ol>
          </div>
        </section>
        <section className="px-5 py-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer font-semibold text-[#0A192F]">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#0A192F] px-5 py-12 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold">Discuss Your Project with Tygrom</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-200">Based in Randathani, Malappuram. Share your site location and requirements so we can discuss the appropriate scope and installation availability.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"><MessageCircle size={20} aria-hidden="true" /> Enquire on WhatsApp</a>
            <p className="mt-8 text-sm font-semibold text-sky-300">Related Services</p>
            <div className="mt-3 flex flex-wrap gap-5"><Link href="/office-automation" className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-sky-300">Smart Office Automation<ChevronRight size={16} aria-hidden="true" /></Link>
<Link href="/access-control-gate-automation" className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-sky-300">Access Control &amp; Gate Automation<ChevronRight size={16} aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div><p className="font-semibold text-[#0A192F]">Tygrom Integrated Solutions</p><p className="mt-1 text-sm text-slate-600">Randathani, Malappuram, Kerala</p></div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0A192F]"><ArrowLeft size={18} aria-hidden="true" /> Return to Homepage</Link>
        </div>
      </footer>
    </div>
  );
}
