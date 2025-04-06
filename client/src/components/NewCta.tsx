import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, popAnimation } from "@/lib/animations";

export default function NewCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#202B31] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          {...fadeIn()}
        >
          Ready to Transform Your Startup's Finances?
        </motion.h2>
        <div className="max-w-2xl text-center mx-auto">
          <motion.div
            className="bg-[#202B31] rounded-xl p-8 md:p-12 border border-gray-800 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 flex flex-col items-center">
                <img src="/logo.png" alt="Logo" className="w-24" />
                <span className="text-[#00b3e6] text-2xl font-bold mt-2">
                  CapIA<span className="text-[#FF955C]">.ai</span>
                </span>
              </div>

              <div className="hidden md:flex md:items-center md:justify-center relative w-12 h-12 -mt-6 -ml-12">
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <motion.div {...popAnimation}>
                  <Button className="w-full px-8 py-7 bg-[#00b3e6] hover:bg-[#00b3e6]/90 text-white text-lg">
                    Start Your Free Trial Today
                  </Button>
                </motion.div>
                <motion.div {...popAnimation}>
                  <Button className="w-full px-8 py-7 bg-[#F1425A] hover:bg-[#F1425A]/90 text-white text-lg">
                    Schedule a Demo in 15 Minutes
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
