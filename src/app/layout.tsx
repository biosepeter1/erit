import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "AbiaFIRST | Education Transformation Portal",
  description: "The official portal for tracking the digital and educational transformation of Abia State schools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${publicSans.variable}`}>
      <body className="antialiased bg-background text-on-surface">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
