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
  GraduationCap,
  ArrowLeft,
  Home as HomeIcon,
  Info,
  Wrench
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  // UPDATED: Sends Fresher data & CV file directly to /api/career
  const handleFresherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('applicantType', 'fresher');
    formData.append('name', fresherForm.fullName);
    formData.append('email', fresherForm.email);
    formData.append('phone', fresherForm.phone);
    formData.append('education', fresherForm.education);
    formData.append('personalityGoal', fresherForm.personalityGoal);
    if (fresherForm.cv) {
      formData.append('resume', fresherForm.cv);
    }

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit application.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // UPDATED: Sends Experienced data & CV file directly to /api/career
  const handleExpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('applicantType', 'experienced');
    formData.append('name', expForm.fullName);
    formData.append('email', expForm.email);
    formData.append('phone', expForm.phone);
    formData.append('position', expForm.position);
    formData.append('yearsOfExp', expForm.yearsOfExp);
    formData.append('technicalStrengths', expForm.technicalStrengths);
    if (expForm.cv) {
      formData.append('resume', expForm.cv);
    }

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit application.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <a href="mailto:info@tygrom.in" className="flex items-center gap-1.5 hover:text-[#00B4D8] transition">
              <Mail className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
              <span>info@tygrom.in</span>
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
                    href="mailto:info@tygrom.in" 
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
                &quot;Your future is created by what you do today, not tomorrow. Take the first step toward a brilliant career in smart technology and innovation with us.&quot;
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F]">Application Submitted Successfully!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Your details and resume have been sent to our hiring team. We will review your application and reach out shortly.
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

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                    {errorMessage}
                  </div>
                )}

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
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Education Background *</label>
                      <input 
                        type="text" 
                        required
                        value={fresherForm.education}
                        onChange={(e) => setFresherForm({...fresherForm, education: e.target.value})}
                        placeholder="Degree / Diploma / Specialization"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Personality & Career Goal</label>
                    <textarea 
                      rows={4}
                      value={fresherForm.personalityGoal}
                      onChange={(e) => setFresherForm({...fresherForm, personalityGoal: e.target.value})}
                      placeholder="Share your technical interests, problem-solving mindset, and future goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Attach Resume / CV (Optional)</label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFresherFileChange}
                      className="w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-[#00B4D8] hover:file:bg-sky-100 cursor-pointer"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#00B4D8] hover:bg-[#0799ba] text-white font-bold text-sm transition shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
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
                    Experienced Track
                  </span>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleExpSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={expForm.fullName}
                        onChange={(e) => setExpForm({...expForm, fullName: e.target.value})}
                        placeholder="e.g. Anjali Nair"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Years of Experience *</label>
                      <input 
                        type="text" 
                        required
                        value={expForm.yearsOfExp}
                        onChange={(e) => setExpForm({...expForm, yearsOfExp: e.target.value})}
                        placeholder="e.g. 3 Years"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Position Applying For *</label>
                    <input 
                      type="text" 
                      required
                      value={expForm.position}
                      onChange={(e) => setExpForm({...expForm, position: e.target.value})}
                      placeholder="e.g. Field Technician / Installer"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Technical Strengths & Key Projects</label>
                    <textarea 
                      rows={4}
                      value={expForm.technicalStrengths}
                      onChange={(e) => setExpForm({...expForm, technicalStrengths: e.target.value})}
                      placeholder="Mention your key expertise, technologies handled, and prior experience..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Attach Resume / CV (Optional)</label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleExpFileChange}
                      className="w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-[#00B4D8] hover:file:bg-sky-100 cursor-pointer"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#00B4D8] hover:bg-[#0799ba] text-white font-bold text-sm transition shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SITE VISIT MODAL */}
      {isSiteVisitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-[#0A192F] text-white flex justify-between items-center">
              <h3 className="font-bold text-lg">Book Free Site Visit</h3>
              <button 
                onClick={() => setIsSiteVisitModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSiteVisitSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Contact Person *</label>
                <input 
                  type="text" 
                  required
                  value={siteVisitForm.contactPerson}
                  onChange={(e) => setSiteVisitForm({...siteVisitForm, contactPerson: e.target.value})}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  value={siteVisitForm.phone}
                  onChange={(e) => setSiteVisitForm({...siteVisitForm, phone: e.target.value})}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Site Location *</label>
                <input 
                  type="text" 
                  required
                  value={siteVisitForm.location}
                  onChange={(e) => setSiteVisitForm({...siteVisitForm, location: e.target.value})}
                  placeholder="City / Area"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Purpose / System Required</label>
                <select 
                  value={siteVisitForm.purpose}
                  onChange={(e) => setSiteVisitForm({...siteVisitForm, purpose: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                >
                  <option value="Smart Home Automation">Smart Home Automation</option>
                  <option value="Smart Office Automation">Smart Office Automation</option>
                  <option value="CCTV & Security Systems">CCTV & Security Systems</option>
                  <option value="Access Control & Gate Automation">Access Control & Gate Automation</option>
                  <option value="Networking & WiFi Solutions">Networking & WiFi Solutions</option>
                  <option value="Home Theater & Audio-Video">Home Theater & Audio-Video</option>
                  <option value="Smart Swimming Pool">Smart Swimming Pool</option>
                  <option value="Other / Multiple Systems">Other / Multiple Systems</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    value={siteVisitForm.preferredDate}
                    onChange={(e) => setSiteVisitForm({...siteVisitForm, preferredDate: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00B4D8] focus:outline-none text-sm bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Time</label>
                  <div className="flex gap-1">
                    <select 
                      value={siteVisitForm.timeHour}
                      onChange={(e) => setSiteVisitForm({...siteVisitForm, timeHour: e.target.value})}
                      className="w-full px-2 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50"
                    >
                      {Array.from({length: 12}, (_, i) => i + 1).map(h => (
                        <option key={h} value={h < 10 ? `0${h}` : `${h}`}>{h < 10 ? `0${h}` : h}</option>
                      ))}
                    </select>
                    <select 
                      value={siteVisitForm.timePeriod}
                      onChange={(e) => setSiteVisitForm({...siteVisitForm, timePeriod: e.target.value})}
                      className="px-2 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition shadow-lg mt-2"
              >
                Confirm via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}