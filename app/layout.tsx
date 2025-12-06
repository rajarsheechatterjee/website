import "./global.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rajarshee Chatterjee",
    template: "%s | Rajarshee Chatterjee",
  },
  description:
    "Senior Software Engineer at Harness. Creator of LNReader. Passionate about React, React Native, and open source.",
  openGraph: {
    title: "Rajarshee Chatterjee",
    description:
      "Senior Software Engineer at Harness. Creator of LNReader. Passionate about React, React Native, and open source.",
    url: baseUrl,
    siteName: "Rajarshee Chatterjee",
    locale: "en_US",
    type: "website",
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

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        nunito.variable,
        GeistMono.variable,
        "font-sans"
      )}
    >
      <body
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        style={{
          fontFamily:
            "var(--font-nunito), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
