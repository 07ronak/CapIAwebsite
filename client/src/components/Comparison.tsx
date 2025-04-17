import { motion, AnimatePresence } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { useRef, useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle,
  X,
  Check,
  Goal,
  DollarSign,
  Clock,
  Rocket,
  ShieldCheck,
} from "lucide-react";

interface ComparisonItem {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export default function Comparison() {
  const challenges: ComparisonItem[] = [
    {
      title: "Missed Opportunities",
      description: "Fragmented data delays decisions and stifles growth.",
    },
    {
      title: "Costly Errors",
      description:
        "Manual processes and poor cash flow visibility risk financial instability.",
    },
    {
      title: "Time Drain",
      description:
        "Reconciliation tasks steal focus from scaling your business.",
    },
    {
      title: "Lost Revenue",
      description:
        "Poor customer insights drive churn and missed upsell opportunities.",
    },
    {
      title: "Investor Concerns",
      description:
        "Weak financial tools deter funding and reduce investor confidence.",
    },
  ];

  const solutions: ComparisonItem[] = [
    {
      title: "Seize Opportunities",
      description:
        "Unified financial data and real-time insights empower faster, smarter decisions to fuel growth.",
      icon: Goal,
    },
    {
      title: "Ensure Accuracy",
      description:
        "Automated workflows and cash flow visibility reduce errors and improve financial stability.",
      icon: DollarSign,
    },
    {
      title: "Save Time",
      description:
        "Streamline reconciliation and reporting, freeing up time to focus on scaling.",
      icon: Clock,
    },
    {
      title: "Boost Revenue",
      description:
        "AI-powered customer insights help retain customers and unlock new revenue streams.",
      icon: Rocket,
    },
    {
      title: "Build Confidence",
      description:
        "Investor-ready reports and predictive analytics strengthen funding pitch and credibility.",
      icon: ShieldCheck,
    },
  ];

  // State to track which icon is currently highlighted
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  // Animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % solutions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [solutions.length]);

  return (
    <section
      className="bg-gradient-to-b from-black to-gray-800 min-h-screen flex items-center justify-center my-12 md:my-0"
      id="comparison"
    >
      <div className="max-w-5xl mx-auto px-4 3xl:max-w-8xl 4k:max-w-10xl 3xl:px-8 4k:px-12">
        <motion.div
          className="text-center mb-12 3xl:mb-16 4k:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-6xl font-bold text-white">
            Transforming Challenges into Opportunities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 3xl:gap-8 4k:gap-12">
          {/* Without CapIA.ai */}
          <motion.div
            className="bg-[#202B31] rounded-lg p-6 3xl:p-8 4k:p-10 border border-gray-800"
            {...slideInLeft(0.2)}
          >
            <div className="flex items-center mb-4 3xl:mb-6 4k:mb-8">
              <div className="bg-[#F1425A]/20 rounded-full p-2 mr-3 3xl:p-3 4k:p-4 3xl:mr-4 4k:mr-5">
                <X className="text-[#F1425A] h-5 w-5 3xl:h-6 3xl:w-6 4k:h-8 4k:w-8" />
              </div>
              <h3 className="text-xl font-bold text-white 3xl:text-2xl 4k:text-3xl">
                Without CapIA.ai
              </h3>
            </div>

            <ul className="space-y-4 3xl:space-y-6 4k:space-y-12">
              {challenges.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  <div className="mr-3 mt-1 3xl:mr-4 4k:mr-5 3xl:mt-1.5 4k:mt-2">
                    <AlertCircle className="text-[#F1425A] h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base 3xl:text-xl 4k:text-2xl">
                      {item.title}
                    </h4>
                    <p className="text-[#D3D3D3] text-sm 3xl:text-xl 4k:text-2xl">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With CapIA.ai */}
          <motion.div
            className="bg-[#00b3e6]/10 rounded-lg p-6 3xl:p-8 4k:p-10 border border-[#00b3e6]"
            {...slideInRight(0.2)}
          >
            <div className="flex items-center mb-4 3xl:mb-6 4k:mb-8">
              <div className="bg-[#00b3e6]/20 rounded-full p-2 mr-3 3xl:p-3 4k:p-4 3xl:mr-4 4k:mr-5">
                <Check className="text-[#00b3e6] h-5 w-5 3xl:h-6 3xl:w-6 4k:h-8 4k:w-8" />
              </div>
              <h3 className="text-xl font-bold text-white 3xl:text-2xl 4k:text-3xl">
                With CapIA.ai
              </h3>
            </div>

            <ul className="space-y-4 3xl:space-y-6 4k:space-y-12">
              {solutions.map((item, index) => {
                const Icon = item.icon || CheckCircle;
                return (
                  <motion.li
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="mr-3 mt-1 3xl:mr-4 4k:mr-5 3xl:mt-1.5 4k:mt-2">
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={
                          activeIconIndex === index
                            ? {
                                scale: [1, 1.3, 1],
                                color: ["#00b3e6", "#ffff", "#00b3e6"],
                              }
                            : { scale: 1, color: "#00b3e6" }
                        }
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="text-[#00b3e6]"
                      >
                        <Icon className="h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <motion.h4
                          initial={{ scale: 1 }}
                          animate={
                            activeIconIndex === index
                              ? {
                                  scale: [1, 1.1, 1],
                                  color: ["#ffffff", "#00b3e6", "#ffffff"],
                                }
                              : { scale: 1, color: "#ffffff" }
                          }
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="font-semibold text-base mr-2 3xl:text-xl 4k:text-2xl 3xl:mr-3 4k:mr-4"
                        >
                          {item.title}
                        </motion.h4>
                      </div>
                      <p className="text-[#D3D3D3] text-sm 3xl:text-xl 4k:text-2xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
