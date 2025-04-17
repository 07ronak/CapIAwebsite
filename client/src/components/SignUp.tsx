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
    <section
      className="pt-32 pb-20 bg-gradient-to-b from-[#00b3e6]/25 via-[#00b3e6]/15 via-[#00b3e6]/8 to-black"
      id="signup"
    >
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
            Join our program to shape the future of Capia.ai. Get early
            access to Revenue360 and provide feedback to help us grow.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl p-8 bg-gradient-to-b from-[#00b3e6]/15 to-[#00b3e6]/5 shadow-xl shadow-[#00b3e6]/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name
              </label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A2329]/80 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00b3e6] transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white mb-2"
              >
                Company Name
              </label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A2329]/80 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00b3e6] transition-all duration-300"
                  placeholder="Your company name"
                />
              </motion.div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-[#1A2329]/80 rounded-md text-white focus:outline-none focus:ring-2 ${
                    emailError
                      ? "focus:ring-red-500 ring-1 ring-red-500"
                      : "focus:ring-[#00b3e6]"
                  } transition-all duration-300`}
                  placeholder="your.email@company.com"
                />
              </motion.div>
              {emailError && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 flex items-center text-red-400 text-sm"
                >
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {emailError}
                </motion.div>
              )}
              <p className="mt-2 text-xs text-[#D3D3D3]/80">
                Please use your work email address
              </p>
            </div>

            <div className="pt-6">
              <motion.button
                type="submit"
                className="w-full py-3.5 px-6 rounded-md flex items-center justify-center bg-[#00b3e6] text-black font-medium transition-all duration-300"
                whileHover={{ scale: 1.03, backgroundColor: "#00c5ff" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sign up for Access</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
