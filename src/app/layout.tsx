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
  "Tygrom Integrated Solutions | Home Automation & Security in Kerala";

const siteDescription =
  "Smart home automation, CCTV, gate automation, Wi-Fi and smart pool solutions in Kerala. Design, installation and support by Tygrom, Randathani.";

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