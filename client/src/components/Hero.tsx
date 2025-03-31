import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideInLeft,
  slideInRight,
  popAnimation,
} from "@/lib/animations";
import { Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="pt-44 pb-44 bg-gradient-to-br from-[#0E0E0E] to-black"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
        <div className="md:flex items-center md:gap-12">
          <motion.div className="md:w-1/2 mb-10 md:mb-0" {...slideInLeft()}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              {...fadeIn(0.2)}
            >
              Smarter Finances for Startups—
              <span className="text-[#00b3e6]">Unify, Predict, Grow.</span>
            </motion.h1>
            <motion.p className="mt-6 text-xl text-[#D3D3D3]" {...fadeIn(0.4)}>
              CapIA.ai unifies your financial data, delivers AI-powered
              insights, and gives you the clarity to scale your startup with
              confidence.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              {...fadeIn(0.6)}
            >
              <motion.div {...popAnimation}>
                <Button className="w-full sm:w-auto px-6 py-6 bg-[#00b3e6] hover:bg-[#00b3e6]/90 text-white text-base font-medium">
                  Get Started for Free
                </Button>
              </motion.div>
              <motion.div {...popAnimation}>
                {/* #FF955C , #FF9F68  */}
                <Button className="w-full sm:w-auto px-6 py-6 bg-[#FF955C] hover:bg-[#FF955C]/90 text-white text-base font-medium">
                  See CapIA.ai in Action
                </Button>
              </motion.div>
            </motion.div>
            <motion.div className="mt-6" {...fadeIn(0.8)}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                SOC 2 Compliant | Trusted by Early-Stage Startups
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="md:w-1/2" {...slideInRight(0.3)}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              {/* Dashboard visualization image */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="CapIA.ai Dashboard Preview"
                className="w-full h-auto"
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
