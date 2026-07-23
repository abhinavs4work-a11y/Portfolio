import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workwithabhinav.in"),
  title: "Abhinav Srivastava | Product Marketing & GTM",
  description: "Portfolio of Abhinav Srivastava - Product Marketing | GTM | SEO",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-emerald-400/30 selection:text-emerald-200`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QZWXBWJHND" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QZWXBWJHND');`}
        </Script>
        <NavBar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
