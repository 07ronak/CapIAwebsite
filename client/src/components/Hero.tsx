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
      className="bg-gradient-to-br from-[#0E0E0E] to-black h-screen flex items-center"
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div className="w-full text-center" {...slideInLeft()}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
              {...fadeIn(0.2)}
            >
              Smarter Finances for Startups—
              <span className="text-[#00b3e6] md:text-3xl">
                Unify, Predict, Grow.
              </span>
            </motion.h1>
            <motion.p
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-[#D3D3D3] max-w-3xl mx-auto"
              {...fadeIn(0.4)}
            >
              CapIA.ai unifies your financial data, delivers AI-powered
              insights, and gives you the clarity to scale your startup with
              confidence.
            </motion.p>
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              {...fadeIn(0.6)}
            >
              <motion.div {...popAnimation}>
                <Link href="/alpha">
                  <Button className="w-full sm:w-auto px-6 py-5 bg-[#00b3e6] hover:bg-[#00b3e6]/90 text-white text-base font-medium">
                    Get Started for Free
                  </Button>
                </Link>
              </motion.div>
              <motion.div {...popAnimation}>
                <Button className="w-full sm:w-auto px-6 py-5 bg-[#FF955C] hover:bg-[#FF955C]/90 text-white text-base font-medium">
                  Schedule a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="w-full" {...slideInRight(0.3)}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800 max-w-4xl mx-auto">
              {/* Dashboard visualization image */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="CapIA.ai Dashboard Preview"
                className="w-20"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default App;
