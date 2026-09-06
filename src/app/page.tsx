'use client';

import React, { useState } from 'react';
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
  Upload,
  Send,
  GraduationCap,
  ArrowLeft,
  Home as HomeIcon,
  Info,
  Wrench,
  Calendar,
  User
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'careers'>('home');
  
  // Site Visit Modal State
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [siteVisitForm, setSiteVisitForm] = useState({
    contactPerson: '',
    phone: '',
    location: '',
    purpose: 'Smart Home Automation',
    preferredDate: '',
    timeHour: '10',
    timeMinute: '00',
    timePeriod: 'AM'
  });

  // Career Sub-Flow State
  const [careerPath, setCareerPath] = useState<'fresher' | 'experienced' | null>(null);

  // Fresher Form State
  const [fresherForm, setFresherForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    personalityGoal: '', 
    cv: null as File | null
  });

  // Experienced Form State
  const [expForm, setExpForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Field Technician / Installer',
    yearsOfExp: '',
    technicalStrengths: '', 
    cv: null as File | null
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFresherFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFresherForm({ ...fresherForm, cv: e.target.files[0] });
    }
  };

  const handleExpFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setExpForm({ ...expForm, cv: e.target.files[0] });
    }
  };

  const handleFresherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cvName = fresherForm.cv ? fresherForm.cv.name : 'No CV Uploaded';
    const subject = encodeURIComponent(`New Fresher Application - ${fresherForm.fullName}`);
    const body = encodeURIComponent(
      `New Fresher Career Application:\n\n` +
      `Full Name: ${fresherForm.fullName}\n` +
      `Email: ${fresherForm.email}\n` +
      `Phone: ${fresherForm.phone}\n` +
      `Education: ${fresherForm.education}\n` +
      `Personality & Goal: ${fresherForm.personalityGoal}\n` +
      `Attached CV File: ${cvName}`
    );
    window.location.href = `mailto:Info.tygrom@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const handleExpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cvName = expForm.cv ? expForm.cv.name : 'No CV Uploaded';
    const subject = encodeURIComponent(`New Experienced Application (${expForm.position}) - ${expForm.fullName}`);
    const body = encodeURIComponent(
      `New Experienced Career Application:\n\n` +
      `Full Name: ${expForm.fullName}\n` +
      `Email: ${expForm.email}\n` +
      `Phone: ${expForm.phone}\n` +
      `Position Applying For: ${expForm.position}\n` +
      `Years of Experience: ${expForm.yearsOfExp}\n` +
      `Technical Strengths: ${expForm.technicalStrengths}\n` +
      `Attached CV File: ${cvName}`
    );
    window.location.href = `mailto:Info.tygrom@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const handleSiteVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedTime = `${siteVisitForm.timeHour}:${siteVisitForm.timeMinute} ${siteVisitForm.timePeriod}`;
    const message = 
      `*New Site Visit Request - Tygrom*%0A` +
      `--------------------------------%0A` +
      `*Contact Person:* ${encodeURIComponent(siteVisitForm.contactPerson)}%0A` +
      `*Phone:* ${encodeURIComponent(siteVisitForm.phone)}%0A` +
      `*Site Location:* ${encodeURIComponent(siteVisitForm.location)}%0A` +
      `*Purpose/System Required:* ${encodeURIComponent(siteVisitForm.purpose)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(siteVisitForm.preferredDate || 'As soon as possible')}%0A` +
      `*Preferred Time:* ${encodeURIComponent(formattedTime)}`;

    const whatsappUrl = `https://wa.me/916235625272?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsSiteVisitModalOpen(false);
  };

  const services = [
    { title: "Smart Home Automation", desc: "App and voice-controlled lighting, climate, curtain, and intelligent scene control.", image: "/smart-home.png" },
    { title: "Smart Office Automation", desc: "Integrated conference room systems, smart lighting, and energy management.", image: "/smart-office.png" },
    { title: "CCTV & Security Systems", desc: "High-definition AI surveillance, remote live view, and 24/7 video recording.", image: "/cctv-security.png" },
    { title: "Access Control & Gate Automation", desc: "Biometric attendance, RFID entry, and automated sliding/swing gate motors.", image: "/access-control.png" },
    { title: "Video Intercom & Video Door Phone Systems", desc: "Smart IP video door phones with mobile app unlock and remote communication.", image: "/video-intercom.png" },
    { title: "Networking & WiFi Solutions", desc: "Seamless mesh Wi-Fi 6, structured LAN cabling, firewall, and rack setup.", image: "/networking.png" },
    { title: "Home Theater & Audio-Video", desc: "Immersive surround sound, acoustic paneling, and multi-room audio zones.", image: "/home-theater.png" },
    { title: "Building Automation", desc: "Centralized ELV and BMS automation for commercial spaces and multi-story sites.", image: "/building-automation.png" },
    { title: "Smart Swimming Pool", desc: "Automated pool filtration, LED underwater lighting, and temperature controls.", image: "/smart-pool.png" },
    { title: "Electrical & IT Solutions", desc: "Professional power distribution, UPS backup, server racks, and maintenance.", image: "/electrical-it.png" },
    { title: "Digital Signage Solution", desc: "High-impact commercial displays, video walls, and remote content management.", image: "/digital-signage.png" },
    { title: "PABX Telephone System", desc: "IP-PBX voice solutions, intercom extension setups, and unified business communication.", image: "/pabx.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
      
      {/* TOP HEADER / CONTACT BAR */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5 hover:text-[#00B4D8] transition">
              <Clock className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-[#00B4D8] transition">
              <MapPin className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
              <span>Randathani, Kerala</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <a href="tel:+916235625272" className="flex items-center gap-1.5 hover:text-[#00B4D8] transition">
              <Phone className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
              <span>+91 6235625272</span>
            </a>
            <a href="mailto:Info.tygrom@gmail.com" className="flex items-center gap-1.5 hover:text-[#00B4D8] transition">
              <Mail className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
              <span>Info.tygrom@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 sm:h-20 flex justify-between items-center gap-2">
          
          {/* LOGO */}
          <button onClick={() => { setActiveTab('home'); setCareerPath(null); }} className="flex items-center group shrink-0 text-left">
            <img 
              src="/Logo.jpeg" 
              alt="Tygrom Integrated Solutions" 
              className="h-9 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* DESKTOP NAV LINKS WITH ICONS */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <button 
              onClick={() => { setActiveTab('home'); setCareerPath(null); }} 
              className={`transition flex items-center gap-1.5 ${activeTab === 'home' ? 'text-[#00B4D8] font-semibold' : 'hover:text-[#00B4D8]'}`}
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </button>
            <a href="#about" onClick={() => { setActiveTab('home'); setCareerPath(null); }} className="hover:text-[#00B4D8] transition flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              About Us
            </a>
            <a href="#services" onClick={() => { setActiveTab('home'); setCareerPath(null); }} className="hover:text-[#00B4D8] transition flex items-center gap-1.5">
              <Wrench className="w-4 h-4" />
              Services
            </a>
            <button 
              onClick={() => { setActiveTab('careers'); setCareerPath(null); setFormSubmitted(false); }} 
              className={`transition flex items-center gap-1.5 ${activeTab === 'careers' ? 'text-[#00B4D8] font-semibold' : 'hover:text-[#00B4D8]'}`}
            >
              <Briefcase className="w-4 h-4" />
              Careers
            </button>
            <a href="#contact" onClick={() => { setActiveTab('home'); setCareerPath(null); }} className="hover:text-[#00B4D8] transition flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* CTA BUTTON & MOBILE HAMBURGER */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button 
              onClick={() => setIsSiteVisitModalOpen(true)}
              className="px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-red-600 text-white text-[11px] sm:text-sm font-semibold hover:bg-red-700 transition-colors shadow-md flex items-center whitespace-nowrap"
            >
              <span>Book Free Site Visit</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => { setActiveTab('home'); setCareerPath(null); setMobileMenuOpen(false); }}
              className={`text-left font-medium text-sm transition py-2 border-b border-slate-100 flex items-center gap-2.5 ${activeTab === 'home' ? 'text-[#00B4D8] font-semibold' : 'text-slate-700 hover:text-[#00B4D8]'}`}
            >
              <HomeIcon className="w-4 h-4 text-[#00B4D8]" />
              Home
            </button>
            <a 
              href="#about" 
              onClick={() => { setActiveTab('home'); setCareerPath(null); setMobileMenuOpen(false); }}
              className="text-slate-700 font-medium text-sm hover:text-[#00B4D8] transition py-2 border-b border-slate-100 flex items-center gap-2.5"
            >
              <Info className="w-4 h-4 text-[#00B4D8]" />
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => { setActiveTab('home'); setCareerPath(null); setMobileMenuOpen(false); }}
              className="text-slate-700 font-medium text-sm hover:text-[#00B4D8] transition py-2 border-b border-slate-100 flex items-center gap-2.5"
            >
              <Wrench className="w-4 h-4 text-[#00B4D8]" />
              Services
            </a>
            <button 
              onClick={() => { setActiveTab('careers'); setCareerPath(null); setFormSubmitted(false); setMobileMenuOpen(false); }}
              className={`text-left font-medium text-sm transition py-2 border-b border-slate-100 flex items-center gap-2.5 ${activeTab === 'careers' ? 'text-[#00B4D8] font-semibold' : 'text-slate-700 hover:text-[#00B4D8]'}`}
            >
              <Briefcase className="w-4 h-4 text-[#00B4D8]" />
              Careers
            </button>
            <a 
              href="#contact" 
              onClick={() => { setActiveTab('home'); setCareerPath(null); setMobileMenuOpen(false); }}
              className="text-slate-700 font-medium text-sm hover:text-[#00B4D8] transition py-2 border-b border-slate-100 flex items-center gap-2.5"
            >
              <Mail className="w-4 h-4 text-[#00B4D8]" />
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* VIEW ROUTING */}
      {activeTab === 'home' ? (
        <>
          {/* HERO SECTION */}
          <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-slate-900 overflow-hidden border-b border-slate-800 flex flex-col justify-center py-6 sm:py-10">
            {/* Mobile Background Image */}
            <img 
              src="/kerala-smart-home-swimming-pool-mobile.png" 
              alt="Kerala Smart Home Mobile View" 
              className="absolute inset-0 w-full h-full object-cover object-center block sm:hidden"
            />

            {/* Desktop Background Image */}
            <img 
              src="/kerala-smart-home-swimming-pool.png" 
              alt="Kerala Smart Home Desktop View" 
              className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-[#0A192F]/40 sm:to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/15 border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-semibold mb-3 sm:mb-4 backdrop-blur-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
                  Smart Automation & ELV Technology Partner
                </div>
                
                {/* STRICT 2-LINE FORMAT: FIRST LINE "Intelligence,", SECOND LINE "Integrated Your Space." */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 drop-shadow-md">
                  Intelligence,<br />
                  Integrated Your Space.
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-100 mb-6 sm:mb-8 leading-relaxed font-normal drop-shadow">
                  Tygrom Integrated Solutions delivers advanced AI-powered smart home & office automation, integrated CCTV & proactive security, high-speed networking, advanced access control, digital video intercom, gate automation, high-end audio & video, integrated electrical, IT, connected digital signage, intelligent PABX systems, and autonomous smart swimming pool solutions, serving clients across all of Kerala.
                </p>

                {/* HERO BUTTONS */}
                <div className="flex flex-col sm:flex-row items-start gap-2">
                  <a 
                    href="#services" 
                    className="w-max px-4 py-2.5 rounded-lg bg-[#00B4D8] text-white font-bold hover:bg-[#0799ba] transition shadow-lg flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider"
                  >
                    Explore All Services
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                  
                  <a 
                    href="https://wa.me/916235625272" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-max px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20ba5a] transition shadow-lg flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                    WhatsApp Us
                  </a>

                  <a 
                    href="mailto:Info.tygrom@gmail.com" 
                    className="w-max px-4 py-2.5 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 transition shadow-lg flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider border border-slate-700"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#00B4D8]" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT US */}
          <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-xs font-bold text-[#00B4D8] tracking-widest uppercase mb-3">About Tygrom</h2>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-6 leading-tight">
                    Engineering intelligent technology for seamless, safe, and connected living.
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                    We design, install, integrate, and maintain reliable technology solutions for homes, offices, and commercial spaces. From precise structured cabling to complex AI surveillance and multi-zone automation, our engineering ensures total reliability.
                  </p>
                  <div className="space-y-3">
                    {['Turnkey ELV & Automation Projects', 'Professional Hardware & Clean Cabling', 'Dedicated On-Site Technical Support'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#00B4D8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-xl">
                  <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#00B4D8]/20 rounded-full blur-2xl"></div>
                  <h4 className="text-xl font-bold text-[#90E0EF] mb-4">Complete System Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Every solution is custom-configured to meet your space's specific architecture and security demands.
                  </p>
                  <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                      <span className="block text-2xl font-bold text-white">100%</span>
                      <span className="text-xs text-slate-400">Integrated Systems</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                      <span className="block text-2xl font-bold text-[#00B4D8]">Kerala</span>
                      <span className="text-xs text-slate-400">Coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES GRID */}
          <section id="services" className="py-16 sm:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-xs font-bold text-[#00B4D8] tracking-widest uppercase mb-3">Our Core Capabilities</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#0A192F]">Our Integrated Solutions</h3>
              </div>

              {/* 2 columns on mobile (grid-cols-2), 2 on md, 3 on lg */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                {services.map((srv, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-[#00B4D8] hover:shadow-xl transition-all group flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        {srv.image && (
                          <div className="w-full overflow-hidden bg-[#070e18] border-b border-slate-100 flex items-center justify-center">
                            <img 
                              src={srv.image} 
                              alt={srv.title} 
                              className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}

                        <div className="p-3 sm:p-8">
                          <h4 className="text-xs sm:text-xl font-bold text-[#0A192F] mb-1 sm:mb-3 group-hover:text-[#00B4D8] transition-colors leading-tight">
                            {srv.title}
                          </h4>
                          <p className="text-slate-600 text-[11px] sm:text-sm leading-snug sm:leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                            {srv.desc}
                          </p>
                        </div>
                      </div>

                      {/* INQUIRE BUTTON: Reduced size across all views, left-aligned, no extra spacing inside */}
                      <div className="px-3 sm:px-8 pb-3 sm:pb-8 flex items-center justify-start">
                        <a 
                          href="https://wa.me/916235625272" 
                          target="_blank"
                          rel="noreferrer"
                          className="w-auto py-1 px-2.5 sm:py-1.5 sm:px-3 rounded sm:rounded-md bg-[#00B4D8] text-white hover:bg-[#0096b4] transition-colors shadow-sm font-semibold text-[9px] sm:text-[11px] inline-flex items-center justify-start gap-1 uppercase tracking-wider text-left whitespace-nowrap"
                        >
                          <span className="leading-none">Inquire</span>
                          <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-[#00B4D8] shrink-0" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* CAREERS PAGE VIEW */
        <section className="py-16 sm:py-24 bg-slate-50 flex-grow">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-bold uppercase tracking-wider">
                Join Our Team
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mt-3 mb-4">
                Build Your Career With Tygrom
              </h1>
              <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base italic">
                "Your future is created by what you do today, not tomorrow. Take the first step toward a brilliant career in smart technology and innovation with us."
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F]">Application Submitted Successfully!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Your email client has opened to send your application securely. Our hiring team will review it shortly.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button 
                    onClick={() => { setFormSubmitted(false); setCareerPath(null); }}
                    className="px-6 py-2.5 bg-[#00B4D8] text-white rounded-xl font-semibold text-sm hover:bg-[#0799ba] transition"
                  >
                    Back to Careers
                  </button>
                  <button 
                    onClick={() => { setFormSubmitted(false); setCareerPath(null); setActiveTab('home'); }}
                    className="px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-300 transition"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : careerPath === null ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <button 
                  onClick={() => setCareerPath('fresher')}
                  className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-[#00B4D8] hover:shadow-xl transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00B4D8] flex items-center justify-center mb-4 group-hover:bg-[#00B4D8] group-hover:text-white transition-colors">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">Apply as Fresher</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      Just starting out? Tell us about your education background, career goals, and personal mindset.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-wider">
                    <span>Select Fresher Track</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button 
                  onClick={() => setCareerPath('experienced')}
                  className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-[#00B4D8] hover:shadow-xl transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00B4D8] flex items-center justify-center mb-4 group-hover:bg-[#00B4D8] group-hover:text-white transition-colors">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">Apply with Experience</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      Experienced professional? Share your technical strengths, track record, and past project experience.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-wider">
                    <span>Select Experienced Track</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            ) : careerPath === 'fresher' ? (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <button 
                    onClick={() => setCareerPath(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#00B4D8] transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to selection</span>
                  </button>
                  <span className="px-3 py-1 bg-sky-50 text-[#00B4D8] rounded-full text-xs font-bold uppercase tracking-wider">
                    Fresher Application Track
                  </span>
                </div>

                <form onSubmit={handleFresherSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={fresherForm.fullName}
                        onChange={(e) => setFresherForm({...fresherForm, fullName: e.target.value})}
                        placeholder="e.g. Rahul Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={fresherForm.email}
                        onChange={(e) => setFresherForm({...fresherForm, email: e.target.value})}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={fresherForm.phone}
                        onChange={(e) => setFresherForm({...fresherForm, phone: e.target.value})}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Education Qualification & Degree *</label>
                      <input 
                        type="text" 
                        required
                        value={fresherForm.education}
                        onChange={(e) => setFresherForm({...fresherForm, education: e.target.value})}
                        placeholder="e.g. Diploma in Electronics / B.Tech"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="bg-sky-50/60 border border-sky-100 p-5 rounded-xl">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0A192F] mb-1">
                      ⭐ Personality & Life Goal: What drives you, and what are your main career targets? *
                    </label>
                    <textarea 
                      required
                      rows={3}
                      value={fresherForm.personalityGoal}
                      onChange={(e) => setFresherForm({...fresherForm, personalityGoal: e.target.value})}
                      placeholder="e.g. I am a quick learner, disciplined, and eager to master smart automation..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-white"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Upload Your CV / Resume *</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                          <Upload className="w-8 h-8 mb-2 text-[#00B4D8]" />
                          <p className="text-sm text-slate-600 font-medium">
                            {fresherForm.cv ? <span className="text-[#00B4D8] font-bold">{fresherForm.cv.name}</span> : "Click to upload CV"}
                          </p>
                        </div>
                        <input type="file" required accept=".pdf,.doc,.docx" onChange={handleFresherFileChange} className="hidden" />
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <button 
                    onClick={() => setCareerPath(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#00B4D8] transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to selection</span>
                  </button>
                  <span className="px-3 py-1 bg-sky-50 text-[#00B4D8] rounded-full text-xs font-bold uppercase tracking-wider">
                    Experienced Professional Track
                  </span>
                </div>

                <form onSubmit={handleExpSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={expForm.fullName}
                        onChange={(e) => setExpForm({...expForm, fullName: e.target.value})}
                        placeholder="e.g. Muhammed Ali"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={expForm.email}
                        onChange={(e) => setExpForm({...expForm, email: e.target.value})}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={expForm.phone}
                        onChange={(e) => setExpForm({...expForm, phone: e.target.value})}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Position Applying For *</label>
                      <select 
                        value={expForm.position}
                        onChange={(e) => setExpForm({...expForm, position: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      >
                        <option value="Field Technician / Installer">Field Technician / Installer</option>
                        <option value="Smart Home Programmer">Smart Home Programmer</option>
                        <option value="CCTV & Networking Engineer">CCTV & Networking Engineer</option>
                        <option value="Sales & Business Development">Sales & Business Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Years of Relevant Experience *</label>
                    <input 
                      type="text" 
                      required
                      value={expForm.yearsOfExp}
                      onChange={(e) => setExpForm({...expForm, yearsOfExp: e.target.value})}
                      placeholder="e.g. 4 Years"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                    />
                  </div>

                  <div className="bg-sky-50/60 border border-sky-100 p-5 rounded-xl">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0A192F] mb-1">
                      ⭐ Experience Highlights: Core technical strengths & major project achievements *
                    </label>
                    <textarea 
                      required
                      rows={3}
                      value={expForm.technicalStrengths}
                      onChange={(e) => setExpForm({...expForm, technicalStrengths: e.target.value})}
                      placeholder="e.g., Expert in configuring Hikvision NVR arrays and structured Cat6 fiber management..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-white"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Upload Your CV / Resume *</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                          <Upload className="w-8 h-8 mb-2 text-[#00B4D8]" />
                          <p className="text-sm text-slate-600 font-medium">
                            {expForm.cv ? <span className="text-[#00B4D8] font-bold">{expForm.cv.name}</span> : "Click to upload CV"}
                          </p>
                        </div>
                        <input type="file" required accept=".pdf,.doc,.docx" onChange={handleExpFileChange} className="hidden" />
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SITE VISIT POPUP MODAL FORM */}
      {isSiteVisitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00B4D8]" />
                <h3 className="font-bold text-base">Book Free Site Visit</h3>
              </div>
              <button 
                onClick={() => setIsSiteVisitModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 transition text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSiteVisitSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Contact Person *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    value={siteVisitForm.contactPerson}
                    onChange={(e) => setSiteVisitForm({...siteVisitForm, contactPerson: e.target.value})}
                    placeholder="Enter contact person name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="tel" 
                    required
                    value={siteVisitForm.phone}
                    onChange={(e) => setSiteVisitForm({...siteVisitForm, phone: e.target.value})}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Site Location / Area in Kerala *</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    value={siteVisitForm.location}
                    onChange={(e) => setSiteVisitForm({...siteVisitForm, location: e.target.value})}
                    placeholder="e.g. Randathani, Malappuram"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Purpose / System Required *</label>
                <select 
                  value={siteVisitForm.purpose}
                  onChange={(e) => setSiteVisitForm({...siteVisitForm, purpose: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                >
                  <option value="Smart Home Automation">Smart Home Automation</option>
                  <option value="Smart Office Automation">Smart Office Automation</option>
                  <option value="CCTV & Security Systems">CCTV & Security Systems</option>
                  <option value="Access Control & Gate Automation">Access Control & Gate Automation</option>
                  <option value="Video Intercom & Video Door Phone Systems">Video Intercom & Video Door Phone Systems</option>
                  <option value="Networking & WiFi Solutions">Networking & WiFi Solutions</option>
                  <option value="Home Theater & Audio-Video">Home Theater & Audio-Video</option>
                  <option value="Building Automation">Building Automation</option>
                  <option value="Smart Swimming Pool">Smart Swimming Pool</option>
                  <option value="Electrical & IT Solutions">Electrical & IT Solutions</option>
                  <option value="Digital Signage Solution">Digital Signage Solution</option>
                  <option value="PABX Telephone System">PABX Telephone System</option>
                  <option value="Other Technical Services">Other Technical Services</option>
                </select>
              </div>

              {/* DATE & 12-HR TIME SYSTEM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    value={siteVisitForm.preferredDate}
                    onChange={(e) => setSiteVisitForm({...siteVisitForm, preferredDate: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50 text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Time (12-hr)</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <select 
                      value={siteVisitForm.timeHour}
                      onChange={(e) => setSiteVisitForm({...siteVisitForm, timeHour: e.target.value})}
                      className="px-2 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-xs bg-slate-50 text-slate-700"
                    >
                      {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(h => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                    <select 
                      value={siteVisitForm.timeMinute}
                      onChange={(e) => setSiteVisitForm({...siteVisitForm, timeMinute: e.target.value})}
                      className="px-2 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-xs bg-slate-50 text-slate-700"
                    >
                      {['00', '15', '30', '45'].map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <select 
                      value={siteVisitForm.timePeriod}
                      onChange={(e) => setSiteVisitForm({...siteVisitForm, timePeriod: e.target.value})}
                      className="px-2 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-xs bg-slate-50 text-slate-700 font-bold"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* REQUEST NOW BUTTON */}
              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba5a] transition shadow-lg flex items-center justify-center gap-2 mt-4 uppercase tracking-wider"
              >
                <span>Request Now</span>
                <Send className="w-4 h-4 fill-white text-[#25D366]" />
              </button>
            </form>

          </div>
        </div>
      )}

      {/* CONTACT & FOOTER */}
      <footer id="contact" className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
            
            <div className="space-y-4">
              <a href="#" className="flex items-center">
                <img 
                  src="/Logo.jpeg" 
                  alt="Tygrom Integrated Solutions" 
                  className="h-12 w-auto object-contain rounded-md"
                />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed">
                Integrated smart home, security, IT, and automation solutions across Kerala.
              </p>
            </div>

            <div>
              <h5 className="text-white font-semibold text-sm mb-4">Direct Contact</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://wa.me/916235625272" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-[#25D366] transition">
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp: +91 6235625272</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+916235625272" className="flex items-center gap-3 text-slate-400 hover:text-[#00B4D8] transition">
                    <Phone className="w-4 h-4 text-[#00B4D8] shrink-0" />
                    <span>+91 6235625272</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Info.tygrom@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-[#00B4D8] transition">
                    <Mail className="w-4 h-4 text-[#00B4D8] shrink-0" />
                    <span>Info.tygrom@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold text-sm mb-4">Location</h5>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-[#00B4D8] mt-1 shrink-0" />
                <span>Randathani, Kerala, India</span>
              </div>
            </div>

            <div>
              <h5 className="text-white font-semibold text-sm mb-4">Working Hours</h5>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-[#00B4D8] mt-1 shrink-0" />
                <div>
                  <p>Monday - Saturday</p>
                  <p className="text-white font-medium">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Tygrom Integrated Solutions. All rights reserved.</p>
            <p>Designed with MinimalTech Precision.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}