

import type { Metadata } from "next";
import { Roboto_Slab, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Roboto_Slab({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: "normal",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Bonn Medical Industry",
  description: "BMI is a medical manufacturer located in Riyadh, Saudi Arabia. Equipped with the latest and up to date machines and equipment that meet cGMP requirement, we are confident that we are able to provide the latest and novel products, services and formulations, either for standard formulations as well as bespoke preparations when required.",
  keywords: [
    "Bonn Med",
    "Bonn",
    "Medical Industry",
    "Skin Care",
    "Pharmaceuticals",
    "medical",
    "creams",
    "cosmetics",
    "Saudi Arabia",
  ],
  authors: [{ name: "Bonn Medical Industry" }],
  creator: "Bonn Medical Industry",
  openGraph: {
    title: "Bonn Medical Industry",
    description: "BMI is a medical manufacturer located in Riyadh, Saudi Arabia. Equipped with the latest and up to date machines and equipment that meet cGMP requirement, we are confident that we are able to provide the latest and novel products, services and formulations, either for standard formulations as well as bespoke preparations when required.",
    url: "https://www.bonnmed.com",
    siteName: "Bonn",
    locale: "en_US",
    type: "website",
  }
  };

  
export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
