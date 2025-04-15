import { motion, useInView } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { useRef, useState, useEffect } from "react";

interface TimelineItem {
  day: string;
  number: string;
  title: string;
  description: string;
}

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.3 });

  const timelineItems: TimelineItem[] = [
    {
      day: "Day",
      number: "1",
      title: "Get Started with Ease",
      description:
        "Integrate your financial tools and get a unified view of your finances in minutes",
    },
    {
      day: "Day",
      number: "7",
      title: "Gain Real-Time Insights",
      description:
        "Track cash flow, motion burn rate, and identify growth opportunities with actionable insights.",
    },
    {
      day: "Day",
      number: "30",
      title: "Make Smarter Decisions",
      description:
        "Use AI-powered forecast to optimize spending and extend your runway with confidence",
    },
  ];

  // Cycle through timeline items every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % timelineItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [timelineItems.length]);

  return (
    <section
      className="bg-gradient-to-b from-[#0d1d15] to-[#0a2028] min-h-screen flex items-center"
      id="timeline"
      ref={timelineRef}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            How Cap<span className="text-[#00b3e6]">IA</span>.ai Transforms Your Startup's Finances in{" "}
            <span className="text-[#3cb043]">Just 30 Days</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline connector line (desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-1 bg-[#00b3e6] z-0"></div>

          {/* First arrow between Day 1 and Day 7 */}
          <motion.div
            className="hidden md:block absolute top-[42px] left-[32%] transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="#00b3e6"
            >
              <path d="M14 5l7 7-7 7V5z" />
            </svg>
          </motion.div>

          {/* Second arrow between Day 7 and Day 30 */}
          <motion.div
            className="hidden md:block absolute top-[42px] left-[66%] transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="#00b3e6"
            >
              <path d="M14 5l7 7-7 7V5z" />
            </svg>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index * 0.2}
                >
                  <motion.div
                    className={`bg-black p-4 rounded-full border-2 border-[#00b3e6] mx-auto w-20 h-20 flex flex-col items-center justify-center mb-6 z-10 relative ${
                      isActive
                        ? "shadow-[0_0_15px_5px_rgba(0,179,230,0.5)]"
                        : ""
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-base">
                      {item.day}
                    </span>
                    <span className="text-white font-bold text-xl">
                      {item.number}
                    </span>
                  </motion.div>
                  <motion.div
                    className={`bg-[#0e2024] rounded-lg p-8 border border-gray-800 flex flex-col h-full ${
                      isActive
                        ? "shadow-[0_0_15px_5px_rgba(60,176,67,0.3)]"
                        : ""
                    }`}
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#3cb043] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[#E8E8E8] text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
