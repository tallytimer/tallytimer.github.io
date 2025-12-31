import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "TallyTimer - Master Your Time with Elegance",
  description: "Create and manage events with ease. Offering custom reminders and real-time countdowns right on your home screen.",
  authors: [{ name: "Faysal Hossain", url: "https://fsfaysalcse.me" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Nova+Round&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased selection:bg-blue-500/10 font-sans"
      >

        {children}
      </body>
    </html>
  );
}
