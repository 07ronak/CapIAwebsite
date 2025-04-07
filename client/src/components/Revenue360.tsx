/* "use client"; */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdQueryStats,
  MdPayments,
  MdPeople,
  MdAnalytics,
  MdExpandMore,
} from "react-icons/md";
import { Link } from "wouter";

// Images
const revenueInsightsImg = "/revenue-insights.webp";
const paymentAnalysisImg = "/payment-analysis.webp";
const retentionPipelineImg = "/retention-pipeline.webp";
const revenueForecastImg = "/revenue-forecast.webp";

export default function Revenue360() {
  const [activeFeature, setActiveFeature] = useState<number>(1);

  const features = [
    {
      id: 1,
      icon: <MdQueryStats />,
      title: "Real-Time Revenue Insights",
      subtitle: "Real-Time Revenue Insights",
      keypoint:
        "Automated Revenue Recognition with real-time recognition of deferred revenue & late invoice tracking",
      description:
        "Instantly track revenue performance with AI-powered analytics. Compare realized vs. promised revenue, monitor payments, and uncover trends to drive smarter, data-driven growth.",
      image: revenueInsightsImg,
    },
    {
      id: 2,
      icon: <MdPayments />,
      title: "Payment Behavior Analysis",
      subtitle: "Predictive Analytics",
      keypoint:
        "Revenue forecasting & Churn Prediction with CRM pipeline integration",
      description:
        "Analyze payment patterns, predict issues, and optimize cash flow with AI-driven recommendations. Automate reminders and follow-ups to boost collections.",
      image: paymentAnalysisImg,
    },
    {
      id: 3,
      icon: <MdPeople />,
      title: "Customer Retention Analysis",
      subtitle: "Active Cash Flow Supervision",
      keypoint:
        "Anomaly detection & Recommendation with Customer Segmentation & Smart-payment scheduling",
      description:
        "Anticipate churn before it happens. Track engagement, identify at-risk accounts, and take decisive actions to improve retention.",
      image: retentionPipelineImg,
    },
    {
      id: 4,
      icon: <MdAnalytics />,
      title: "Deals Pipeline Health",
      description:
        "Track deal progress and forecast pipeline conversion with machine learning accuracy. Prioritize high-probability deals, focus resources where they matter most, and accelerate revenue growth.",
      image: revenueForecastImg,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      id="revenue360"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Revenue360 Preview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#00b3e6]">
              Introducing <span className="text-white">Revenue360</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mt-4">
              Your First Step to Financial Clarity
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-[#00b3e6]/10 backdrop-blur-sm rounded-lg p-8 border border-[#00b3e6]/50 hover:border-[#00b3e6] transition-all hover:shadow-lg hover:shadow-[#00b3e6]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-[#00b3e6] text-3xl">
                      {feature.icon}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {feature.subtitle}
                    </h3>
                  </div>
                  <p className="text-base text-gray-300 text-center">
                    {feature.keypoint}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue360 Main Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Left Column */}
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#00b3e6]">
                Revenue360
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                Unlock Growth Potential with Predictive Analytics
              </h3>
              <div className="text-lg text-gray-300 space-y-6">
                <p>
                  Transform your revenue operations with AI-powered insights. By
                  seamlessly connecting your CRM, accounting, and contract
                  systems, Revenue360 unifies disparate datasets to uncover
                  meaningful connections.
                </p>
                <p>
                  It identifies business events, builds a cohesive financial
                  story, and provides a comprehensive platform to drive smarter,
                  data-driven decisions for sustainable growth.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-[400px] border border-[#00b3e6]/50 rounded-lg overflow-hidden bg-[#00b3e6]/10 p-4">
                <img
                  src="./Connectors.png"
                  alt="Connections"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Features Accordion Section */}
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-2xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Key Features
            </motion.h3>

            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`mb-6 border border-[#00b3e6]/50 rounded-lg overflow-hidden
                ${
                  activeFeature === feature.id
                    ? "bg-[#00b3e6]/10"
                    : "bg-gray-900/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Header/Title section */}
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() =>
                    setActiveFeature(
                      activeFeature === feature.id ? 0 : feature.id
                    )
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#00b3e6] text-2xl">
                      {feature.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: activeFeature === feature.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MdExpandMore className="text-2xl text-[#00b3e6]" />
                  </motion.div>
                </button>

                {/* Content section */}
                <AnimatePresence>
                  {activeFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-8"
                    >
                      {/* Description Text */}
                      <p className="text-base text-gray-300 mb-8">
                        {feature.description}
                      </p>

                      {/* Feature Image */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border border-[#00b3e6]/50 rounded-lg bg-[#00b3e6]/10 overflow-hidden p-2"
                        style={{ height: "220px" }} // Fixed height container
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full rounded-lg object-cover"
                          loading="eager" // Eagerly load images
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-[#00b3e6]/10 rounded-lg p-10 border border-[#00b3e6]/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Transform Your Revenue Operations?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our alpha program to get early access to Revenue360 and start
            making smarter, data-driven decisions for your business.
          </p>
          <Link
            href="/alpha"
            className="inline-block bg-[#00b3e6] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#00b3e6]/90 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
