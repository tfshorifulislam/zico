import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="en" className={`${jakarta.variable}`}>
      <body className="min-h-screen bg-[#F7F1DE] text-[#2D2A26]">
        {children}
      </body>
    </html>
  );
}