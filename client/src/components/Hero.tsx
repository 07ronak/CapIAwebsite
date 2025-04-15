import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideInLeft,
  slideInRight,
  popAnimation,
} from "@/lib/animations";
import { Shield } from "lucide-react";
import { Link } from "wouter";

function App() {
  return (
    <section
      className="bg-gradient-to-b from-black via-[#005A73] to-[#00b3e6] flex items-center pt-24 pb-8"
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm w-full">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div className="w-full text-center" {...slideInLeft()}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight"
              {...fadeIn(0.2)}
            >
              Smarter Finances for Startups
            </motion.h1>
            <motion.span
              className="block text-[#00b3e6] text-xl sm:text-2xl md:text-2xl mt-2 font-montserrat"
              {...fadeIn(0.3)}
            >
              Unify, Predict, Grow.
            </motion.span>
            <motion.p
              className="mt-2 text-base text-[#D3D3D3] mx-auto"
              {...fadeIn(0.4)}
            >
              CapIA.ai unifies your financial data, delivers AI-powered
              insights, and gives you the clarity to scale your startup with
              confidence.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              {...fadeIn(0.6)}
            >
              <motion.div {...popAnimation}>
                <Link href="/alpha">
                  <Button className="w-full sm:w-auto px-10 py-5 bg-[#00b3e6] hover:bg-[#00b3e6]/90 text-white text-base font-medium">
                    Sign Up and Get Started
                  </Button>
                </Link>
              </motion.div>
              <motion.div {...popAnimation}>
                <Button className="w-full sm:w-auto px-6 py-5 bg-[#FF955C] hover:bg-[#FF955C]/90 text-white text-base font-medium">
                  Talk to us about your needs
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex justify-center"
            {...slideInRight(0.3)}
          >
            <div className="flex justify-center items-center w-full">
              <div className="relative border-4 border-gray-800 rounded-3xl shadow-2xl bg-black w-full max-w-5xl aspect-[3200/1688] overflow-hidden">
                {/* Dashboard visualization image */}
                <img
                  src="/Trimmed.gif"
                  alt="CapIA.ai Dashboard Preview"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-40"></div>

                {/* Optional: Side button */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1.5 h-10 bg-gray-700 rounded-l-md"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default App;
