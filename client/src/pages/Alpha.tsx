import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
/* import SignUp from "@/components/SignUp"; */

export default function AboutUs() {
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
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}
