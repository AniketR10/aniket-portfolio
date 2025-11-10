import type { Metadata } from "next";

import "./globals.css";
import "./globals-pattern.css";
import PatternWrapper from "./pattern-wrapper";
import { portfolioConfig } from "@/site.config";

export const metadata: Metadata = {
  generator: "Next.js",
  metadataBase: new URL("https://mawlio.vercel.app/"), // your domain for the og and twitter to know where to find the images, it needs the absolute path
  title: portfolioConfig.name,
  description: "Site description",
  applicationName: "Portfolio",
  keywords: [portfolioConfig.name],
  authors: [{ name: portfolioConfig.name }],
  creator: portfolioConfig.name,
  openGraph: {
    title: portfolioConfig.name,
    description: "Og description",
    url: "https://mawlio.vercel.app/",
    type: "website",
    siteName: "Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://mawlio.vercel.app/images/project.webp",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@user",
    creator: "@user",
    title: portfolioConfig.name,
    description: "Description",
    images: ["/images/project.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
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
        <body>
          <PatternWrapper>{children}</PatternWrapper>
        </body>
    </html>
  );
}
