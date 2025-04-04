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
    "relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-[#00b3e6] after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center cursor-pointer">
                <img src="/logo.png" alt="Logo" className="h-9 w-10 mr-2" />{" "}
                {/* Added image with some styling */}
                <span className="text-[#00b3e6] text-2xl font-bold ">
                  CapIA<span className="text-[#FF955C]">.ai</span>
                </span>
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              Features
            </a>
            <a
              href="#timeline"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              Results
            </a>
            <Link
              href="/360"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              Revenue 360
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-[#00b3e6] transition-colors font-arial ${underlineHoverAnimation}`}
            >
              About us
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
              href="/pricing"
            >
              Get Started
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
            <a
              href="#features"
              className={`block py-2 text-xl text-white hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#timeline"
              className={`block py-2 text-xl text-white hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
              onClick={toggleMenu}
            >
              Results
            </a>
            <a
              href="#comparison"
              className={`block py-2 text-xl text-white hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
              onClick={toggleMenu}
            >
              Why CapIA
            </a>
            <a
              href="#"
              className={`block py-2 text-xl text-white hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <Button
              className="w-full bg-[#00b3e6] hover:bg-[#00b3e6]/80 text-white mt-4"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
