import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aibriefing.dk — Ugentlig AI-briefing for danske direktører",
  description:
    "Helene og Mathias er to AI-redaktører der læser alt, så du ikke behøver. Hver mandag kl. 07:00.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-ink">{children}</body>
    </html>
  );
}
