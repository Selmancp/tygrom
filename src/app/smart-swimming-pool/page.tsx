import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import ServiceBrandMarquee from "@/components/service-brand-marquee";
import ServiceHeroBackground from "@/components/service-hero-background";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, MessageCircle, Phone } from "lucide-react";

const title = "Swimming Pool Automation in Malappuram";
const description = "Swimming pool automation in Malappuram for compatible filtration controls, pool lighting and monitoring. Tygrom offers consultation and installation planning.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/smart-swimming-pool" },
  openGraph: {
    type: "website", title, description,
    url: "https://www.tygrom.in/smart-swimming-pool",
    images: [{ url: "/smart-pool.png", alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/smart-pool.png"] },
};

const features = [
  {
    "title": "Pool-System Consultation",
    "description": "Review your existing or proposed pool equipment and identify the functions you want to control."
  },
  {
    "title": "Filtration Scheduling",
    "description": "Assess compatible pump and filtration controls for suitable operating schedules."
  },
  {
    "title": "Pool Lighting",
    "description": "Plan supported lighting controls with appropriate equipment and electrical installation requirements."
  },
  {
    "title": "Monitoring Options",
    "description": "Check compatible sensors and monitoring equipment for the measurements required by your project."
  },
  {
    "title": "App Control Assessment",
    "description": "Confirm whether the selected controller supports mobile access and the required connectivity."
  },
  {
    "title": "Operating Guidance",
    "description": "Explain the agreed controls and discuss equipment servicing and maintenance responsibilities."
  }
];
const faqs = [
  {
    "question": "Can my existing pool equipment be automated?",
    "answer": "This depends on the pump, lighting, controller and available electrical interfaces. Share equipment models for an assessment."
  },
  {
    "question": "Does automation replace regular pool maintenance?",
    "answer": "No. Water testing, cleaning and equipment maintenance remain necessary. Automation only supports the functions included in the system."
  },
  {
    "question": "Can I control pool lights from my phone?",
    "answer": "Supported controllers may offer app access. Compatibility, connectivity and installation requirements need checking."
  },
  {
    "question": "Can you quote from photographs?",
    "answer": "Photos and equipment details help with an initial discussion. Site conditions may need assessment before a final quotation."
  }
];
const whatsappUrl = "https://wa.me/919946949924?text=" + encodeURIComponent("Hello Tygrom, I would like to enquire about Smart Swimming Pool. My site location is: ");

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <ServiceBrandMarquee serviceKey="smart-swimming-pool" />
      <main>
        <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#0A192F] px-5 py-16 text-white md:min-h-[40vw] md:max-h-[680px]">
          <ServiceHeroBackground imageSrc="/smart-pool.png" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-wide text-sky-300">Randathani · Malappuram · Kerala</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">Plan compatible controls for an existing or proposed swimming pool system. Tygrom Integrated Solutions, Randathani, offers consultation on filtration controls, pool lighting and supported monitoring, with the final scope based on equipment compatibility and site requirements.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400">
                  <MessageCircle size={20} aria-hidden="true" /> Discuss Your Project
                </a>
                <a href="tel:+919946949924" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-500 px-6 py-3 font-semibold hover:bg-white/10">
                  <Phone size={19} aria-hidden="true" /> Call Tygrom
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-16" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="solutions-heading" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">Smart Swimming Pool Options</h2>
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
              <li className="rounded-2xl bg-slate-50 p-6"><h3 className="font-semibold text-[#0A192F]">1. Share Your Requirements</h3><p className="mt-3 leading-7 text-slate-600">Share pool equipment models, controller details and the lighting or filtration functions you want to manage.</p></li>
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
            <div className="mt-3 flex flex-wrap gap-5"><Link href="/home-automation" className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-sky-300">Smart Home Automation<ChevronRight size={16} aria-hidden="true" /></Link>
<Link href="/electrical-it" className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-sky-300">Electrical &amp; IT Solutions<ChevronRight size={16} aria-hidden="true" /></Link></div>
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
