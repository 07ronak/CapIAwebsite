import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import Timeline from "@/components/Timeline";
import Comparison from "@/components/Comparison";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import NewCta from "@/components/NewCta";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  useEffect(() => {
    // Set up smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = (this as HTMLAnchorElement).getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for fixed header
            behavior: "smooth",
          });
        }
      });
    });

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Timeline />
        <Comparison />
        {/* <CtaSection /> */}
        <NewCta />
      </main>
      <Footer />
    </div>
  );
}
