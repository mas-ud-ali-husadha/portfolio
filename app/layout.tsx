import RadialGradient from "@/components/RadialGradient";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Mas'ud Portfolio",
  description: "A web designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-slate-900 antialiased text-slate-400`}
      >
        <RadialGradient />
        {children}
      </body>
    </html>
  );
}
