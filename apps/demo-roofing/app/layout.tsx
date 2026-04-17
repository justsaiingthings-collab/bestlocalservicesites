import type { Metadata } from "next";

import "./globals.css";
import { StickyHeader, MobileStickyCTA, Footer, TopBar } from "@bestlocal/ui";
import { roofingConfig as config } from "@bestlocal/templates";



export const metadata: Metadata = {
  title: `${config.businessName} | ${config.primaryLocation}`,
  description: config.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <TopBar config={config} />
        <StickyHeader config={config} />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer config={config} />
        <MobileStickyCTA config={config} />
      </body>
    </html>
  );
}
