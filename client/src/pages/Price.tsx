import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import Pricing from "@/components/Pricing";
import NewCta from "@/components/NewCta";

export default function Price() {
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
        <Pricing />
        {/* <CtaSection /> */}
        <NewCta />
      </main>
      <Footer />
    </div>
  );
}
