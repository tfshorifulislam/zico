import type { Metadata } from "next";
import { Khand, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import { ToastContainer } from "react-toastify";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: {
    default: "Zico",
    template: "%s | Zico",
  },
  description: "Your thoughts. Your voice.",
  applicationName: "Zico",
  keywords: [
    "thoughts",
    "voice",
    "social",
    "journal",
    "community",
    "audio",
    "text",
  ],
  authors: [{ name: "Zico" }],
  creator: "Zico",
  publisher: "Zico",
  metadataBase: new URL("https://zico.app"), // Change to your domain
  openGraph: {
    title: "Zico",
    description: "Your thoughts. Your voice.",
    type: "website",
    siteName: "Zico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zico",
    description: "Your thoughts. Your voice.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.className, khand.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen">
        <Navbar/>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}