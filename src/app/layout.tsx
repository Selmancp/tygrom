import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.tygrom.in";

const siteTitle =
  "Home Automation, CCTV & Security in Malappuram | Tygrom";

const siteDescription =
  "Tygrom plans and installs home automation, CCTV, Wi-Fi, gate automation and smart pool systems for homes and businesses in Malappuram, Kerala.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Tygrom Integrated Solutions",
      alternateName: "Tygrom",
      url: siteUrl,
      logo: `${siteUrl}/Logo.jpeg`,
      description:
        "Engineering-led technology solutions for homes and businesses, including automation, security, networking and smart pool systems.",
      telephone: "+919946949924",
      email: "info@tygrom.in",
      areaServed: ["Randathani", "Malappuram", "Kerala"],
      knowsAbout: [
        "Smart home automation",
        "Smart office automation",
        "CCTV and security systems",
        "Gate automation and access control",
        "Video door phones and intercom systems",
        "Wi-Fi networking and structured cabling",
        "Building automation",
        "Swimming pool automation",
        "Electrical and IT solutions",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919946949924",
        email: "info@tygrom.in",
        contactType: "customer support",
        availableLanguage: ["English", "Malayalam"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tygrom Integrated Solutions",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

const measurementId = "G-HD5ZNX3BYT";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Tygrom Integrated Solutions",
  },

  description: siteDescription,

  applicationName: "Tygrom Integrated Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Tygrom Integrated Solutions",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/Logo.jpeg",
        alt: "Tygrom Integrated Solutions",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/Logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}

        <Script
          id="tygrom-google-analytics"
          strategy="afterInteractive"
        >
          {`
            if (
              window.location.hostname === "tygrom.in" ||
              window.location.hostname === "www.tygrom.in"
            ) {
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag("js", new Date());
              gtag("config", "${measurementId}");

              var analyticsScript = document.createElement("script");
              analyticsScript.async = true;
              analyticsScript.src =
                "https://www.googletagmanager.com/gtag/js?id=${measurementId}";

              document.head.appendChild(analyticsScript);
            }
          `}
        </Script>
      </body>
    </html>
  );
}
