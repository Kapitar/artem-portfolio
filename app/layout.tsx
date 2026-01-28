import type { Metadata } from "next";
import { Rethink_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Artem Kim",
  description: "First-year Computer Science student at Georgia Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethinkSans.variable} ${jetBrainsMono.variable} antialiased font-mono bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
