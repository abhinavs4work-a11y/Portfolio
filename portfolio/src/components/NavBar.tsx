"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // When scrollY goes past 500vh (approximated here by window.innerHeight * 5)
  useEffect(() => {
    const handleScroll = () => {
      // 500vh is the height of the scrolly section
      if (window.scrollY > window.innerHeight * 5 - 100) {
        setHasScrolledPast(true);
      } else {
        setHasScrolledPast(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isContactModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isContactModalOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "AI Ads", href: "#", disabled: true },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 border-b border-white/5`}
        style={{
          backgroundColor: hasScrolledPast ? "rgba(18, 18, 18, 0.8)" : "rgba(18, 18, 18, 0.05)",
          backdropFilter: hasScrolledPast ? "blur(16px)" : "blur(8px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-24 h-20 flex items-center justify-between">
          <div className="text-xl font-bold text-transparent select-none" aria-hidden="true">
            AS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.disabled
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={(e) => {
                  if (link.disabled) e.preventDefault();
                }}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#121212]/70 backdrop-blur-xl border-l border-white/10 z-50 md:hidden flex flex-col pt-24 px-8 pb-8 shadow-2xl"
            >
              <div className="flex flex-col gap-6 items-end text-right">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-medium transition-colors ${
                      link.disabled
                        ? "text-gray-600 cursor-not-allowed"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={(e) => {
                      if (link.disabled) {
                        e.preventDefault();
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-full h-px bg-white/10 my-4" />
                <button
                  className="w-full text-center px-6 py-4 rounded-full text-lg font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all cursor-pointer block"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => setIsContactModalOpen(true), 300); // slight delay to allow menu animation
                  }}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-0">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 opacity-60" />
              
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-8 pr-8">
                <h3 className="text-2xl font-bold text-white mb-2">Interested to work with me?</h3>
                <p className="text-gray-400">Choose a way to connect that works best for you.</p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Book a Call */}
                <a
                  href="https://cal.id/abhinav-srivastava/connect-with-abhinav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Book a call</h4>
                    <span className="text-sm text-gray-400">Schedule time directly on my calendar</span>
                  </div>
                </a>

                {/* Drop a Text (WhatsApp) */}
                <a
                  href="https://wa.me/917376979474?text=Hi%20Abhinav,%20I%20saw%20your%20portfolio%20on%20the%20website.%20Are%20you%20available%20to%20connect%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.004 22l1.452-4.942A9.957 9.957 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 01-5.111-1.408L2.004 22z" />
                      <g transform="translate(6, 6) scale(0.5)" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.507-4.197-7.103-7.103l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Drop a text</h4>
                    <span className="text-sm text-gray-400">Reach out quickly via WhatsApp</span>
                  </div>
                </a>

                {/* Email me */}
                <a
                  href="mailto:abhinavsriv42@gmail.com?subject=Connecting%20from%20your%20portfolio&body=Hi%20Abhinav,%20I%20saw%20your%20portfolio%20on%20the%20website.%20Are%20you%20available%20to%20connect%3F"
                  className="group flex items-center gap-5 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Email me</h4>
                    <span className="text-sm text-gray-400">Send an email for detailed inquiries</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
