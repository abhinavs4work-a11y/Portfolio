import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav Srivastava | Product Marketing & GTM",
  description: "Portfolio of Abhinav Srivastava - Product Marketing | GTM | SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-emerald-400/30 selection:text-emerald-200`}>
        <NavBar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
