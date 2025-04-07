import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
  });
  const [emailError, setEmailError] = useState("");

  // List of common personal email domains to block
  const personalDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "mail.com",
    "protonmail.com",
    "zoho.com",
    "yandex.com",
    "gmx.com",
    "live.com",
    "me.com",
    "inbox.com",
    "fastmail.com",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Reset email error when user types
    if (name === "email") {
      setEmailError("");
    }
  };

  const validateWorkEmail = (email: any) => {
    if (!email) return false;

    const domain = email.split("@")[1];
    if (!domain) return false;

    return !personalDomains.includes(domain.toLowerCase());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate work email
    if (!validateWorkEmail(formData.email)) {
      setEmailError("Please use your work email");
      return;
    }

    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="pt-32 bg-black pb-20" id="signup">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Be Part of the Future of Startup Finance
          </h2>
          <p className="text-[#D3D3D3] mt-4 max-w-xl mx-auto">
            Join our alpha program to shape the future of Capia.ai. Get early
            access to Revenue360 and provide feedback to help us grow.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg p-8 border bg-[#00b3e6]/10 border-[#00b3e6] shadow-lg shadow-[#00b3e6]/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1A2329] border border-[#00b3e6]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00b3e6] focus:border-transparent transition duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1A2329] border border-[#00b3e6]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00b3e6] focus:border-transparent transition duration-200"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-[#1A2329] border ${
                  emailError ? "border-red-500" : "border-[#00b3e6]/30"
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00b3e6] focus:border-transparent transition duration-200`}
                placeholder="your.email@company.com"
              />
              {emailError && (
                <div className="mt-2 flex items-center text-red-400 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {emailError}
                </div>
              )}
              <p className="mt-2 text-xs text-[#D3D3D3]">
                Please use your work email address
              </p>
            </div>

            <div className="pt-6">
              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-md flex items-center justify-center bg-[#00b3e6] text-black font-medium hover:bg-[#00b3e6]/90 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sign up for Alpha Access</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
