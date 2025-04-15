import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { AlertCircle, CheckCircle, X, Check } from "lucide-react";

interface ComparisonItem {
  title: string;
  description: string;
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
    },
    {
      title: "Ensure Accuracy",
      description:
        "Automated workflows and cash flow tracking reduce errors and improve financial stability.",
    },
    {
      title: "Save Time",
      description:
        "Streamline reconciliation and reporting, freeing up time to focus on scaling.",
    },
    {
      title: "Boost Revenue",
      description:
        "AI-powered customer insights help you retain customers and unlock new revenue streams.",
    },
    {
      title: "Build Confidence",
      description:
        "Investor-ready reports and predictive analytics strengthen your funding pitch and financial credibility.",
    },
  ];

  return (
    <section
      className=" bg-black min-h-screen flex items-center"
      id="comparison"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 ">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-white">
            Transforming Challenges into Opportunities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Without CapIA.ai */}
          <motion.div
            className="bg-[#202B31] rounded-lg p-6 border border-gray-800"
            {...slideInLeft(0.2)}
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#F1425A]/20 rounded-full p-2 mr-3">
                <X className="text-[#F1425A] h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Without CapIA.ai</h3>
            </div>

            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  <div className="mr-3 mt-1">
                    <AlertCircle className="text-[#F1425A] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {item.title}
                    </h4>
                    <p className="text-[#D3D3D3] text-sm">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With CapIA.ai */}
          <motion.div
            className="bg-[#00b3e6]/10 rounded-lg p-6 border border-[#00b3e6]"
            {...slideInRight(0.2)}
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#00b3e6]/20 rounded-full p-2 mr-3">
                <Check className="text-[#00b3e6] h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">With CapIA.ai</h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  <div className="mr-3 mt-1">
                    <CheckCircle className="text-[#00b3e6] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {item.title}
                    </h4>
                    <p className="text-[#D3D3D3] text-sm">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
