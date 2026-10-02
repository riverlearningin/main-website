import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HEAD_SCRIPT, Motion } from "@/components/Motion";
import "./globals.css";
import "./pages.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://riverlearning.in"),
  title: { default: "River Learning — From chaos to clarity. From clarity to growth.", template: "%s · River Learning" },
  description:
    "Business consulting, practical training and purpose-built digital tools that strengthen the processes, systems and people behind measurable growth. Since 2011.",
  openGraph: {
    type: "website",
    siteName: "River Learning",
    title: "River Learning — From chaos to clarity. From clarity to growth.",
    description: "Consulting, training and digital products for measurable business growth. Since 2011.",
    url: "/",
  },
};

export const viewport: Viewport = { themeColor: "#F7FAFD", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
