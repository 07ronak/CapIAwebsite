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
        "Integrate your financial tools and get a unified view of your finances in minutes.",
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
        "Use AI-powered forecast to optimize spending and extend your runway with confidence.",
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
      className="bg-[#f4f1de] min-h-screen flex items-center"
      id="timeline"
      ref={timelineRef}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 3xl:max-w-8xl 4k:max-w-10xl 3xl:px-10 4k:px-12">
        <motion.div
          className="text-center mb-20 3xl:mb-24 4k:mb-32"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 3xl:text-4xl 4k:text-5xl 3xl:mb-10 4k:mb-12">
            How Cap<span className="text-[#00b3e6]">IA</span>.ai Transforms Your
            Startup's Finances in{" "}
            <span className="text-[#f8851a]">Just 30 Days</span>
          </h2>
        </motion.div>
        {/*[#9ECD4E]*/}
        <div className="relative">
          {/* Timeline connector line (desktop only) */}
          <div className="hidden md:block absolute top-[40px] 3xl:top-[50px] 4k:top-[60px] left-0 right-0 h-1 3xl:h-1.5 4k:h-2 bg-[#00b3e6] z-0"></div>

          {/* First arrow between Day 1 and Day 7 */}
          <motion.div
            className="hidden md:block absolute top-[42px] 3xl:top-[52px] 4k:top-[62px] left-[32%] transform -translate-x-1/2 -translate-y-1/2 z-10"
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
              className="3xl:w-[55px] 3xl:h-[55px] 4k:w-[65px] 4k:h-[65px]"
            >
              <path d="M14 5l7 7-7 7V5z" />
            </svg>
          </motion.div>

          {/* Second arrow between Day 7 and Day 30 */}
          <motion.div
            className="hidden md:block absolute top-[42px] 3xl:top-[52px] 4k:top-[62px] left-[66%] transform -translate-x-1/2 -translate-y-1/2 z-10"
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
              className="3xl:w-[55px] 3xl:h-[55px] 4k:w-[65px] 4k:h-[65px]"
            >
              <path d="M14 5l7 7-7 7V5z" />
            </svg>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-12 4k:gap-16">
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
                    className={`bg-black p-4 rounded-full border-2 border-[#00b3e6] mx-auto w-20 h-20 3xl:w-24 3xl:h-24 4k:w-28 4k:h-28 3xl:p-5 4k:p-6 3xl:border-3 4k:border-4 flex flex-col items-center justify-center mb-10 3xl:mb-12 4k:mb-16 z-10 relative ${
                      isActive
                        ? "shadow-[0_0_10px_0px_rgba(0,179,230,0.5)] 3xl:shadow-[0_0_15px_0px_rgba(0,179,230,0.5)] 4k:shadow-[0_0_20px_0px_rgba(0,179,230,0.5)]"
                        : ""
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-base 3xl:text-lg 4k:text-xl">
                      {item.day}
                    </span>
                    <span className="text-white font-bold text-xl 3xl:text-2xl 4k:text-3xl">
                      {item.number}
                    </span>
                  </motion.div>
                  <motion.div
                    className={`bg-[#0e2024] rounded-lg px-6 pt-8 3xl:px-8 3xl:pt-10 4k:px-10 4k:pt-12 border border-gray-800 flex flex-col h-64 3xl:h-72 4k:h-96 ${
                      isActive
                        ? "shadow-[0_0_15px_5px_rgba(0,179,230,0.5)] 3xl:shadow-[0_0_20px_7px_rgba(0,179,230,0.5)] 4k:shadow-[0_0_25px_10px_rgba(0,179,230,0.5)]"
                        : ""
                    }`}
                    animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#00b3e6] mb-4 3xl:text-2xl 4k:text-3xl 3xl:mb-6 4k:mb-8">
                        {item.title}
                      </h3>
                      <p className="text-[#E8E8E8] text-base md:text-lg 3xl:text-xl 4k:text-2xl">
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
