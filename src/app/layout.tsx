import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duc Anh Dang | Software Developer",
  description: "Portfolio website for Duc Anh Dang, a web and app developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
