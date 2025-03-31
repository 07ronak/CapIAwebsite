import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, popAnimation } from "@/lib/animations";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#202B31] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          {...fadeIn()}
        >
          Ready to Transform Your Startup's Finances?
        </motion.h2>

        <motion.div
          className="bg-[#202B31] rounded-xl p-8 md:p-12 border border-gray-800 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-left">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Startup founder"
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-[#6CABDD]"
                />
                <div>
                  <h4 className="text-white font-semibold">Sarah Chen</h4>
                  <p className="text-gray-400">Founder, TechVenture</p>
                </div>
              </div>
              <p className="text-[#D3D3D3] italic">
                "CapIA.ai helped us extend our runway by 6 months and improved
                our financial clarity for investors. It's been a game-changer."
              </p>
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
    </section>
  );
}
