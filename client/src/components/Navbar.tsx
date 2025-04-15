import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { isOpen, toggleMenu } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add background blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover animation class
  const underlineHoverAnimation =
    "relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-[#00b3e6] after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full 3xl:after:h-[1.5px] 4k:after:h-[2px] 3xl:after:bottom-[-3px] 4k:after:bottom-[-4px]";

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 3xl:max-w-8xl 4k:max-w-10xl 3xl:px-8 4k:px-12 3xl:pt-2 4k:pt-3">
        <div className="flex justify-between h-16 3xl:h-20 4k:h-24">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center cursor-pointer">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-9 w-10 mr-2 3xl:h-12 3xl:w-14 4k:h-14 4k:w-16 3xl:mr-3 4k:mr-4"
                />{" "}
                <span className="text-2xl font-bold 3xl:text-3xl 4k:text-4xl">
                  Cap<span className="text-[#00b3e6]">IA</span>.ai
                </span>
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 3xl:space-x-12 4k:space-x-16">
            <Link
              href="/"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial 3xl:text-xl 4k:text-2xl ${underlineHoverAnimation}`}
            >
              Home
            </Link>
            <Link
              href="/360"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial 3xl:text-xl 4k:text-2xl ${underlineHoverAnimation}`}
            >
              Revenue 360
            </Link>

            <Link
              href="/pricing"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial 3xl:text-xl 4k:text-2xl ${underlineHoverAnimation}`}
            >
              Pricing
            </Link>
            <Link
              className="bg-[#00b3e6] hover:bg-[#00b3e6]/90
                text-[#F5F5F5] hover:text-black font-arial
                transition-all duration-300 ease-in-out
                font-medium rounded-md px-6 py-3
                shadow-md hover:shadow-xl
                border border-transparent hover:border-[#00b3e6]/30
                focus:ring-4 focus:ring-[#00b3e6]/30
                active:transform active:scale-95
                3xl:text-xl 4k:text-2xl 3xl:px-8 3xl:py-4 4k:px-10 4k:py-5 3xl:rounded-lg 4k:rounded-xl"
              href="/alpha"
            >
              LogIn
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-40 md:hidden pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4 space-y-6">
            <Link
              href="/"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              Home
            </Link>
            <Link
              href="/360"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              Revenue 360
            </Link>

            <Link
              href="/pricing"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              Pricing
            </Link>
            <Link
              className="bg-[#00b3e6] hover:bg-[#00b3e6]/90
                text-[#F5F5F5] hover:text-black font-arial
                transition-all duration-300 ease-in-out
                font-medium rounded-md px-6 py-3
                shadow-md hover:shadow-xl
                border border-transparent hover:border-[#00b3e6]/30
                focus:ring-4 focus:ring-[#00b3e6]/30
                active:transform active:scale-95"
              href="/alpha"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
