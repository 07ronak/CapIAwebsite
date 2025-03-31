import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  billingInfo: string[];
  features: PricingFeature[];
  ctaText: string;
  highlighted?: boolean;
}

export default function Pricing() {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "€0",
      description:
        "During starter phase. Free for the first 15 days and then move to PRO",
      billingInfo: ["To build and shape together the future with CapIA.ai"],
      features: [],
      ctaText: "Get Started",
    },
    {
      name: "Pro",
      price: "€250",
      description: "Everything you need to optimize your financial operations",
      billingInfo: ["Billed quarterly", "€2000/year (33% savings)"],
      features: [
        { text: "Unlimited seats" },
        { text: "Unlimited usage" },
        { text: "Early access to new modules" },
      ],
      ctaText: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "CFO Assist",
      price: "Custom",
      description: "Enterprise-grade solution with personalized support",
      billingInfo: ["Billed quarterly", "Starting at €2500"],
      features: [
        { text: "Everything in Pro+" },
        { text: "On demand expertise" },
        { text: "Personalized Financial Strategy" },
        { text: "Human support whenever needed" },
      ],
      ctaText: "Contact Sales",
    },
  ];

  return (
    <section className="pt-20 bg-black pb-16" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#D3D3D3] mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-lg p-6 border flex flex-col h-full group
            ${
              plan.highlighted
                ? "bg-[#00b3e6]/10 border-[#00b3e6]"
                : "bg-[#202B31] border-gray-800"
            }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={
                !plan.highlighted
                  ? {
                      backgroundColor: "rgba(0, 179, 230, 0.1)",
                      borderColor: "#00b3e6",
                    }
                  : {}
              }
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="flex items-end mt-2">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-[#D3D3D3] ml-1">/Month</span>
                  )}
                </div>
                <p className="text-[#D3D3D3] text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.billingInfo.map((info, i) => (
                  <p key={i} className="text-[#D3D3D3] text-sm">
                    {info}
                  </p>
                ))}
              </div>

              {plan.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 + 0.2 }}
                    >
                      <div className="mr-3 mt-0.5">
                        <CheckCircle
                          className={`${
                            plan.highlighted || "group-hover:text-[#00b3e6]"
                              ? "text-[#00b3e6]"
                              : "text-white"
                          } h-4 w-4`}
                        />
                      </div>
                      <p className="text-[#D3D3D3] text-sm">{feature.text}</p>
                    </motion.li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <motion.button
                  className={`w-full py-2 px-4 rounded-md flex items-center justify-center ${
                    plan.highlighted
                      ? "bg-[#00b3e6] text-black hover:bg-[#00b3e6]/90"
                      : "bg-[#202B31] border border-gray-700 text-white hover:bg-[#00b3e6] hover:text-black hover:border-[#00b3e6] group-hover:bg-[#00b3e6] group-hover:text-black group-hover:border-[#00b3e6]"
                  } transition-colors duration-200`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
