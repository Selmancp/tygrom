import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TYBOOK | Tygrohm Technical Services",
  description: "Inventory and service management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col justify-between">
          {/* Top Contact & Timing Bar */}
          <header className="w-full bg-[#1e293b] text-white text-xs py-2 px-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <div className="flex items-center space-x-6">
                <span className="flex items-center gap-1">
                  🕒 Mon - Sat: 8:00 AM - 6:00 PM
                </span>
                <span className="flex items-center gap-1">
                  📍 Randathani, Kerala
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="flex items-center gap-1">
                  📞 +91 6235625272
                </span>
                <span className="flex items-center gap-1">
                  ✉️ info@tygrom.in
                </span>
              </div>
            </div>
          </header>

          {/* Main Navigation Bar with Logo and Modal trigger */}
          <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <img src="/Logo.jpeg" alt="Tygrohm Logo" className="h-10 w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-[#0284c7] tracking-tight">TYGROM</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Integrated Solutions</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
                <a href="/" className="hover:text-blue-600">Home</a>
                <a href="/about" className="hover:text-blue-600">About Us</a>
                <a href="/services" className="hover:text-blue-600">Services</a>
                <a href="/careers" className="hover:text-blue-600">Careers</a>
                <a href="/contact" className="hover:text-blue-600">Contact</a>
              </div>
              <div>
                <button 
                  onClick={() => {
                    const modal = document.getElementById('site-visit-modal');
                    if (modal) modal.style.display = 'flex';
                  }}
                  className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700 transition-colors"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="w-full flex-grow">
            {children}
          </main>

          {/* Footer Component */}
          <footer className="border-t bg-gray-900 py-6 text-center text-sm text-gray-400">
            <div className="mx-auto max-w-7xl px-4">
              &copy; {new Date().getFullYear()} Tygrohm Technical Services. All rights reserved.
            </div>
          </footer>

          {/* Integrated Site Visit Modal */}
          <div id="site-visit-modal" style={{ display: 'none' }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between bg-[#0f172a] px-6 py-4 text-white">
                <h3 className="text-lg font-bold">Book Free Site Visit</h3>
                <button 
                  onClick={() => {
                    const modal = document.getElementById('site-visit-modal');
                    if (modal) modal.style.display = 'none';
                  }} 
                  className="text-gray-300 hover:text-white text-xl font-bold"
                >
                  &times;
                </button>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as typeof e.target & {
                    name: { value: string };
                    phone: { value: string };
                    location: { value: string };
                    purpose: { value: string };
                    date: { value: string };
                    hour: { value: string };
                    ampm: { value: string };
                  };
                  const message = `*Book Free Site Visit*%0A` +
                    `*Contact Person:* ${target.name.value}%0A` +
                    `*Phone Number:* ${target.phone.value}%0A` +
                    `*Site Location:* ${target.location.value}%0A` +
                    `*Purpose / System:* ${target.purpose.value}%0A` +
                    `*Preferred Date:* ${target.date.value}%0A` +
                    `*Preferred Time:* ${target.hour.value} ${target.ampm.value}`;

                  window.open(`https://wa.me/916235625272?text=${message}`, '_blank');
                }} 
                className="p-6 space-y-4 text-gray-800"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Contact Person *</label>
                  <input type="text" name="name" required placeholder="Your Name" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXXXXXXXX" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Site Location *</label>
                  <input type="text" name="location" required placeholder="City / Area" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Purpose / System Required</label>
                  <select name="purpose" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm bg-white focus:border-blue-500 focus:outline-none">
                    <option value="Smart Home Automation">Smart Home Automation</option>
                    <option value="CCTV & Security Systems">CCTV & Security Systems</option>
                    <option value="Structured Cabling & Wi-Fi">Structured Cabling & Wi-Fi</option>
                    <option value="Electrical & IT Solutions">Electrical & IT Solutions</option>
                    <option value="Digital Signage Solution">Digital Signage Solution</option>
                    <option value="PABX Telephone System">PABX Telephone System</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Preferred Date</label>
                    <input type="date" name="date" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Preferred Time</label>
                    <div className="flex gap-2">
                      <select name="hour" className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:border-blue-500 focus:outline-none">
                        {['09', '10', '11', '12', '01', '02', '03', '04', '05', '06'].map(h => (
                          <option key={h} value={h}>{h}</option>
                        ))}
                      </select>
                      <select name="ampm" className="w-24 rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:border-blue-500 focus:outline-none">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full rounded-lg bg-red-600 py-3 text-center text-sm font-bold text-white shadow-md hover:bg-red-700 transition-colors">
                    Confirm via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}