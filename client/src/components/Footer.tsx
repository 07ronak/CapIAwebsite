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
    <footer className="bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold ">
                Cap<span className="text-[#00b3e6]">IA</span>.ai
              </span>
            </div>
            <p className="text-[#D3D3D3] mb-4">
              Smarter finances for startups. Unify your data, get AI-powered
              insights, and grow with confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#D3D3D3] hover:text-[#00b3e6] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#D3D3D3] hover:text-[#00b3e6] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#D3D3D3] hover:text-[#00b3e6] transition-colors"
              >
                <Facebook className="h-5 w-5" />
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
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={openContactDialog}
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  Contact Us
                </button>
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
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-[#D3D3D3] hover:text-[#00b3e6] transition-colors ${underlineHoverAnimation}`}
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[#D3D3D3] hover:text-[#00b3e6] transition-colors"
                >
                  <span>Chat with us</span>
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
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
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-[#D3D3D3] mb-4">
              Stay updated with the latest financial insights for startups.
            </p>
            <form className="mb-4" onSubmit={handleSubscribe} id="Subscribe">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-2 rounded-l-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-[#00b3e6] px-4 py-2 rounded-r-md text-white hover:bg-[#00b3e6]/90 transition-all"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "..." : "Subscribe"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 CapIA.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#00b3e6] text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00b3e6] text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00b3e6] text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <dialog
        ref={dialogRef}
        className=" rounded-lg shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm w-full bg-[#121212] text-white p-8 max-w-md md:max-w-lg"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeContactDialog();
          }
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold text-[#00b3e6]">Contact Us</h3>
          <button
            onClick={closeContactDialog}
            className="text-gray-400 hover:text-white transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleContactSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={contactForm.name}
              onChange={handleContactFormChange}
              className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6]"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={contactForm.email}
              onChange={handleContactFormChange}
              className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6]"
              placeholder="Your email"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleContactFormChange}
              className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white focus:outline-none focus:border-[#00b3e6] min-h-[150px]"
              placeholder="Your message"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#00b3e6] py-3 rounded-md text-white hover:bg-[#00b3e6]/90 transition-all text-base font-medium"
          >
            Send Message
          </Button>
        </form>
      </dialog>
    </footer>
  );
}
