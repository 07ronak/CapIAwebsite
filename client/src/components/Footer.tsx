import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);

    try {
      // Submit to newsletter API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const openContactDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeContactDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          ...contactForm,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      toast({
        title: "Thank you for your message!",
        description: "We'll get back to you soon.",
      });

      // Reset form and close dialog
      setContactForm({ name: "", email: "", message: "" });
      closeContactDialog();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  // Hover animation class
  const underlineHoverAnimation =
    "relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-[#00b3e6] after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-2px] hover:after:w-full";

  return (
    <footer className="bg-black pt-16 pb-8 3xl:pt-24 3xl:pb-12 4k:pt-32 4k:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 3xl:max-w-8xl 4k:max-w-10xl 2xl:px-10 3xl:px-12 4k:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 3xl:gap-16 4k:gap-24">
          {/* Company Info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4 3xl:mb-6 4k:mb-8">
              <span className="text-2xl font-bold 3xl:text-3xl 4k:text-4k">
                Cap<span className="text-[#00b3e6]">IA</span>.ai
              </span>
            </div>
            <p className="text-[#D3D3D3] mb-4 3xl:text-xl 4k:text-2xl 3xl:mb-6 4k:mb-8">
              Smarter finances for startups. Unify your data, get AI-powered
              insights, and grow with confidence.
            </p>
            <div className="flex space-x-4 3xl:space-x-6 4k:space-x-8">
              <a
                href="https://www.linkedin.com/company/capia-ai"
                className="text-[#D3D3D3] hover:text-[#00b3e6] transition-colors"
              >
                <Linkedin className="h-5 w-5 3xl:h-6 3xl:w-6 4k:h-8 4k:w-8" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 3xl:text-xl 4k:text-2xl 3xl:mb-6 4k:mb-8">
              Company
            </h4>
            <ul className="space-y-2 3xl:space-y-4 4k:space-y-6">
              <li>
                <button
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation} 3xl:text-lg 4k:text-xl`}
                >
                  What we do
                </button>
              </li>

              <li>
                <button
                  onClick={openContactDialog}
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation} 3xl:text-lg 4k:text-xl`}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/capia-ai"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation} 3xl:text-lg 4k:text-xl`}
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 3xl:text-xl 4k:text-2xl 3xl:mb-6 4k:mb-8">
              Resources
            </h4>
            <ul className="space-y-2 3xl:space-y-4 4k:space-y-6">
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation} 3xl:text-lg 4k:text-xl`}
                >
                  Why CapIA?
                </a>
              </li>
              <li>
                <Link
                  href="/360"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation} 3xl:text-lg 4k:text-xl`}
                >
                  Revenue 360
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation} 3xl:text-lg 4k:text-xl`}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4 3xl:text-xl 4k:text-2xl 3xl:mb-6 4k:mb-8">
              Stay Updated
            </h4>
            <p className="text-[#D3D3D3] mb-4 3xl:text-lg 4k:text-xl 3xl:mb-6 4k:mb-8">
              Stay updated with the latest financial insights for startups.
            </p>
            <form
              className="mb-4 3xl:mb-6 4k:mb-8"
              onSubmit={handleSubscribe}
              id="Subscribe"
            >
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-2 rounded-l-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6] 3xl:p-3 4k:p-4 3xl:text-lg 4k:text-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-[#00b3e6] px-4 py-2 rounded-r-md text-white hover:bg-[#00b3e6]/90 transition-all 3xl:px-6 3xl:py-3 4k:px-8 4k:py-4 3xl:text-lg 4k:text-xl"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "..." : "Subscribe"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center 3xl:mt-16 3xl:pt-12 4k:mt-24 4k:pt-16">
          <p className="text-gray-500 text-sm 3xl:text-base 4k:text-lg">
            © 2025 CapIA.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 3xl:space-x-8 4k:space-x-12">
            <a
              href="#"
              className="text-gray-500 hover:text-[#00b3e6] text-sm 3xl:text-base 4k:text-lg"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#00b3e6] text-sm 3xl:text-base 4k:text-lg"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#00b3e6] text-sm 3xl:text-base 4k:text-lg"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <dialog
        ref={dialogRef}
        className="rounded-lg shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm w-full bg-[#121212] text-white p-8 max-w-md md:max-w-lg 3xl:max-w-xl 4k:max-w-2xl 3xl:p-10 4k:p-12"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeContactDialog();
          }
        }}
      >
        <div className="flex justify-between items-center mb-8 3xl:mb-10 4k:mb-12">
          <h3 className="text-2xl font-semibold text-[#00b3e6] 3xl:text-3xl 4k:text-4k">
            Contact Us
          </h3>
          <button
            onClick={closeContactDialog}
            className="text-gray-400 hover:text-white transition-colors text-xl 3xl:text-2xl 4k:text-3xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleContactSubmit}>
          <div className="mb-6 3xl:mb-8 4k:mb-10">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2 3xl:text-base 4k:text-lg 3xl:mb-3 4k:mb-4"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={contactForm.name}
              onChange={handleContactFormChange}
              className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6] 3xl:p-4 4k:p-5 3xl:text-lg 4k:text-xl"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6 3xl:mb-8 4k:mb-10">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2 3xl:text-base 4k:text-lg 3xl:mb-3 4k:mb-4"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={contactForm.email}
              onChange={handleContactFormChange}
              className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6] 3xl:p-4 4k:p-5 3xl:text-lg 4k:text-xl"
              placeholder="Your email"
            />
          </div>

          <div className="mb-8 3xl:mb-10 4k:mb-12">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2 3xl:text-base 4k:text-lg 3xl:mb-3 4k:mb-4"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleContactFormChange}
              className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6] min-h-[150px] 3xl:p-4 4k:p-5 3xl:text-lg 4k:text-xl 3xl:min-h-[200px] 4k:min-h-[250px]"
              placeholder="Your message"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#00b3e6] py-3 rounded-md text-white hover:bg-[#00b3e6]/90 transition-all text-base font-medium 3xl:py-4 4k:py-5 3xl:text-lg 4k:text-xl 3xl:rounded-lg 4k:rounded-xl"
          >
            Send Message
          </Button>
        </form>
      </dialog>
    </footer>
  );
}
