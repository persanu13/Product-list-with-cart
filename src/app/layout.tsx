import type { Metadata } from "next";
import "./globals.css";

import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-red-hat-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatText.variable}>{children}</body>
    </html>
  );
}
