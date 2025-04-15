import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { fadeIn, slideUp } from "@/lib/animations";
import { useRef } from "react";

interface TimelineItem {
  day: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Timeline() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });

  const timelineItems: TimelineItem[] = [
    {
      day: "Day",
      number: "1",
      title: "Get Started with Ease",
      description:
        "Integrate your financial tools and get a unified view of your finances in minutes",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      day: "Day",
      number: "7",
      title: "Gain Real-Time Insights",
      description:
        "Track cash flow, motion burn rate, and identify growth oppotunities with actionable insights.",
      imageUrl:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      day: "Day",
      number: "30",
      title: "Make Smarter Decisions",
      description:
        "Use AI-powered forecast to optimize spending and extend your runway with confidence",
      imageUrl:
        "https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      className="py-14 bg-gradient-to-b from-black to-[#202B31]"
      id="timeline"
      ref={timelineRef}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            How CapIA.ai Transforms Your Startup's Finances in Just 30 Days
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline connector line (desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 bg-[#00b3e6] z-0"></div>

          {/* First arrow between Day 1 and Day 7 */}
          <div className="hidden md:block absolute top-[41px] left-[33%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/right-arrow-backup-2-svgrepo-com.svg"
              alt="Right arrow"
              className="w-8 fill-current text-[#00b3e6]"
              style={{
                filter:
                  "invert(67%) sepia(78%) saturate(4929%) hue-rotate(166deg) brightness(97%) contrast(101%)",
              }}
            />
          </div>

          {/* Second arrow between Day 7 and Day 30 */}
          <div className="hidden md:block absolute top-[41px] left-[67%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/right-arrow-backup-2-svgrepo-com.svg"
              alt="Right arrow"
              className="w-8 fill-current text-[#00b3e6]"
              style={{
                filter:
                  "invert(67%) sepia(78%) saturate(4929%) hue-rotate(166deg) brightness(97%) contrast(101%)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-black p-4 rounded-full border-2 border-[#00b3e6] mx-auto w-16 h-16 flex flex-col items-center justify-center mb-4 z-10 relative">
                  <span className="text-white font-bold text-sm">
                    {item.day}
                  </span>
                  <span className="text-white font-bold text-sm">
                    {item.number}
                  </span>
                </div>
                <div className="bg-[#202B31] rounded-lg p-4 border border-gray-800 h-[350px] flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#D3D3D3] text-sm">{item.description}</p>
                  </div>
                  <div className="mt-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="rounded-lg w-full h-auto max-h-[180px] object-cover mt-4"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-14 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              className="bg-[#00b3e6] hover:bg-[#00b3e6]/90 text-white px-8 py-2.5 text-base"
              href="/pricing"
            >
              Start Your Free Trial Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
