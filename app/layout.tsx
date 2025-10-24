import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halloween 2025 | Spooky Ancient Origins & Traditions",
  description: "Dive into Halloween's mystical journey: from ancient Celtic origins to sacred traditions. Discover spooky stories, dos & don'ts, and festive guides for 2025!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics gaId="G-VH9GGYME7H" />
        <meta
          name="description"
          content={metadata?.description ?? ""}
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={(metadata?.title ?? "") as string} />
        <meta property="og:description" content={metadata?.description ?? ""} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="hero-halloween.jpg" />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.origin : "https://deepakeon.github.io/haunted-halloween-landing/"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={(metadata?.title || "") as string} />
        <meta name="twitter:description" content={metadata?.description ?? ""} />
        <meta name="twitter:image" content="hero-halloween.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      
    </html>
  );
}
