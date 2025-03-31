import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Wallet,
  Users,
  BarChart3,
  Layers,
} from "lucide-react";

// Assuming these are imported from your project
const fadeIn = () => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
});

const features = [
  {
    id: 1,
    title: "Predict the Future, Act with Confidence",
    description:
      "Leverage AI-powered forecasts to anticipate challenges and seize opportunities.",
    painPoint: "Uncertainty in decision-making without predictive insights.",
    icon: <TrendingUp className="text-[#00b3e6]" />,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Smarter Cash Flow Management",
    description:
      "Gain real-time visibility into your cash flow and runway to make informed decisions.",
    painPoint: "Poor cash flow visibility risks financial instability.",
    icon: <Wallet className="text-[#00b3e6]" />,
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Retain More Customers, Build Long-Term Relationships",
    description:
      "Spot early warning signs of churn and take proactive steps to retain your most valuable customers.",
    painPoint:
      "Poor customer insights drive churn and missed upsell opportunities.",
    icon: <Users className="text-[#00b3e6]" />,
    imageUrl:
      "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Focus on the Deals That Drive Growth",
    description:
      "Prioritize high-value opportunities with deal pipeline health insights.",
    painPoint: "Fragmented data delays decisions and stifles growth.",
    icon: <BarChart3 className="text-[#00b3e6]" />,
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Unified Financial Insights",
    description:
      "Bring all your financial data into one platform for a complete picture of your business.",
    painPoint: "Scattered financial data across multiple tools.",
    icon: <Layers className="text-[#00b3e6]" />,
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

function App() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-cycle through features every 5 seconds
  useEffect(() => {
    let interval: any;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveFeature((current) => (current === 5 ? 1 : current + 1));
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNavigation = (direction: any) => {
    setAutoplay(false); // Stop autoplay when user navigates
    if (direction === "next") {
      setActiveFeature((current) => (current === 5 ? 1 : current + 1));
    } else {
      setActiveFeature((current) => (current === 1 ? 5 : current - 1));
    }
  };

  const selectFeature = (id: any) => {
    setActiveFeature(id);
    setAutoplay(false); // Stop autoplay when user selects
  };

  const activeFeatureData = features.find((f) => f.id === activeFeature);

  return (
    <section className="pb-16 bg-black pt-8" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-24" {...fadeIn()}>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Empowering Startups to Scale Smarter and Faster
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Features info */}
          <div className="lg:w-3/5">
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex items-center">
                    <div className="bg-[#00b3e6]/20 rounded-full p-3 mr-4">
                      {activeFeatureData?.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {activeFeatureData?.title}
                    </h3>
                  </div>

                  <p className="text-[#D3D3D3] text-lg leading-relaxed pl-2 border-l-2 border-[#00b3e6]/50">
                    {activeFeatureData?.description}
                  </p>

                  <div className="flex items-baseline">
                    <span className="text-[#F1425A] font-medium mr-2">
                      Pain Point:
                    </span>
                    <span className="text-white">
                      {activeFeatureData?.painPoint}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-2/5 flex items-center justify-center">
            <div className="w-[350px] h-[350px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full rounded-lg overflow-hidden shadow-xl absolute"
                >
                  <img
                    src={activeFeatureData?.imageUrl}
                    alt={activeFeatureData?.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Feature navigation - moved to bottom */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-800">
          <div className="flex space-x-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => selectFeature(feature.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "bg-[#00b3e6] scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Feature ${feature.id}`}
              />
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => handleNavigation("prev")}
              className="bg-[#202B31] hover:bg-[#2a373e] text-white p-2.5 rounded-full transition-all duration-300 border border-gray-700"
              aria-label="Previous feature"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="bg-[#202B31] hover:bg-[#2a373e] text-white p-2.5 rounded-full transition-all duration-300 border border-gray-700"
              aria-label="Next feature"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
