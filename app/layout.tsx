import type { Metadata } from "next";
import "./globals.css";
import LanguageToggle from '@/components/LanguageToggle';

export const metadata: Metadata = {
  title: "3D Portfolio - Interactive Resume",
  description: "Interactive portfolio with a 3D magazine effect and immersive navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <LanguageToggle />
        {children}
      </body>
    </html>
  );
}
