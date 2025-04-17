import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, popAnimation } from "@/lib/animations";
import { Link } from "wouter";

export default function NewCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#00b3e6] 3xl:py-28 4k:py-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 3xl:max-w-8xl 4k:max-w-10xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8 3xl:text-5xl 4k:text-6xl 3xl:mb-12 4k:mb-16"
          {...fadeIn()}
        >
          Ready to Transform Your Startup's Finances?
        </motion.h2>
        <div className="max-w-2xl text-center mx-auto 3xl:max-w-4xl 4k:max-w-6xl">
          <motion.div
            className="bg-[#00262E] rounded-xl p-8 md:p-12  shadow-2xl 3xl:p-16 4k:p-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 flex flex-col items-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-24 3xl:w-32 4k:w-40"
                />
                <span className="text-2xl font-bold 3xl:text-3xl 4k:text-4xl">
                  Cap<span className="text-[#00b3e6]">IA</span>.ai
                </span>
              </div>

              <div className="hidden md:flex md:items-center md:justify-center relative w-12 h-12 lg:-mt-3 lg:-ml-12 md:-mt-1 3xl:w-16 3xl:h-16 4k:w-20 4k:h-20 4k:-mt-12 3xl:-mt-10">
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="flex flex-col space-y-4 3xl:space-y-6 4k:space-y-8">
                <motion.div {...popAnimation}>
                  <Link href="/signup">
                    <Button className="w-full px-8 py-7 bg-[#00b3e6] hover:bg-[#00b3e6]/90 text-white text-lg 3xl:text-xl 4k:text-2xl 3xl:py-8 4k:py-10">
                      Sign Up and Get Started
                    </Button>
                  </Link>
                </motion.div>
                <motion.div {...popAnimation}>
                  <Button className="w-full px-8 py-7 bg-[#F1425A] hover:bg-[#F1425A]/90 text-white text-lg 3xl:text-xl 4k:text-2xl 3xl:py-8 4k:py-10">
                    Talk to us about your needs
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
