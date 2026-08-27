import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchemaJsonLd } from "@/components/common/SchemaJsonLd";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#d90429",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.midastechnologies.in"),
  title: {
    default: "MIDAS Institute of Software Technology | Premier IT & Data Science Training in Raipur",
    template: "%s | MIDAS Institute of Software Technology"
  },
  description: "Raipur's premier technology institute with 11+ years of excellence. Industry-aligned courses in Full Stack Web Development, Data Science, AI, DevOps, Cyber Security, Mobile Apps & University Degrees.",
  keywords: [
    "Software training institute in Raipur",
    "Data Science course in Raipur",
    "Full Stack development Raipur",
    "Python training Raipur",
    "DevOps classes Raipur",
    "Cyber security course Raipur",
    "Tally Prime GST institute Raipur",
    "Midas Institute of Software Technology",
    "MIST Computer Education Raipur",
    "Authorised University Partner Raipur"
  ],
  authors: [{ name: "MIDAS Institute of Software Technology" }],
  creator: "MIDAS Institute of Software Technology",
  publisher: "MIDAS Institute of Software Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.midastechnologies.in",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "MIDAS Institute of Software Technology | Raipur",
    description: "Launch your tech career with 11+ years of proven software & data science training in Raipur. Live projects, HR prep & university degrees.",
    url: "https://www.midastechnologies.in",
    siteName: "MIDAS Institute of Software Technology",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 600,
        alt: "MIDAS Institute of Software Technology (MIST) Logo",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "MIDAS Institute of Software Technology | Raipur",
    description: "Premier Software, Data Science & IT Training Institute in Raipur. 11+ Years of Technical Excellence.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd type="EducationalOrganization" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
