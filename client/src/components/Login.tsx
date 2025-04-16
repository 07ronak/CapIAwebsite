import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Reset errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Check if password is empty
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add your authentication logic here
      toast({
        title: "Welcome back!",
        description:
          "Sorry this is a dummy page. Dashboard is under construction :)",
      });
    }
  };

  // Function to handle forgotten password
  const handleForgotPassword = () => {
    toast({
      title: "Password Reset",
      description:
        "If your email is registered, you'll receive password reset instructions.",
    });
  };

  return (
    <section
      className="pt-20 pb-20 bg-gradient-to-b from-[#00b3e6]/25 via-[#00b3e6]/15 via-[#00b3e6]/8 to-black flex items-center min-h-screen"
      id="signin"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="text-[#D3D3D3] mt-2 max-w-xl mx-auto">
            Sign in to Capia.ai and continue optimizing your startup's financial
            growth 🚀
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl p-8 bg-gradient-to-b from-[#00b3e6]/15 to-[#00b3e6]/5 shadow-xl shadow-[#00b3e6]/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email Address
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
                    errors.email
                      ? "focus:ring-red-500 ring-1 ring-red-500"
                      : "focus:ring-[#00b3e6]"
                  } transition-all duration-300`}
                  placeholder="your.name@company.com"
                />
              </motion.div>
              {errors.email && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 flex items-center text-red-400 text-sm"
                >
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </motion.div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-[#00b3e6] hover:text-[#00c5ff] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-[#1A2329]/80 rounded-md text-white focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "focus:ring-red-500 ring-1 ring-red-500"
                      : "focus:ring-[#00b3e6]"
                  } transition-all duration-300`}
                  placeholder="••••••••"
                />
              </motion.div>
              {errors.password && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 flex items-center text-red-400 text-sm"
                >
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.password}
                </motion.div>
              )}
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                className="w-full py-3.5 px-6 rounded-md flex items-center justify-center bg-[#00b3e6] text-black font-medium transition-all duration-300"
                whileHover={{ scale: 1.03, backgroundColor: "#00c5ff" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sign In</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>

            <div className="pt-4 text-center">
              <motion.a
                href="/signup"
                className="flex items-center justify-center text-[#00b3e6] hover:text-[#00c5ff] md:font-medium transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Not a customer? Sign up</span>
              </motion.a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
