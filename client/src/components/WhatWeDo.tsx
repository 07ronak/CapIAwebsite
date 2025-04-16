import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  FileSpreadsheet,
  PieChart,
  DollarSign,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

interface ChapterProps {
  number: number;
  title: string;
  text: string;
  visualComponent: React.ReactNode;
}

export default function WhatWeDo() {
  // The active chapter (1-indexed)
  const [activeChapter, setActiveChapter] = useState(1);

  // Word-by-word reading animation state
  const [readWords, setReadWords] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Chapters content
  const chapters: ChapterProps[] = [
    {
      number: 1,
      title: "The Chaos",
      text: "Imagine trying to read a book when each chapter is written by a different author, in a different font, on different platforms. That's what managing finances feels like for most startups today.",
      visualComponent: <ChaoticVisual />,
    },
    {
      number: 2,
      title: "The Struggle",
      text: "Accounting software, cash flow spreadsheets, CRM data, and treasury tools all operate in isolation. These disconnections give the CFO migraines, leaving founders and finance teams piecing together their own financial information, struggling to make confident decisions.",
      visualComponent: <StruggleVisual />,
    },
    {
      number: 3,
      title: "The Solution",
      text: "CapiA.ai changes everything. We bring your financial systems into one platform, providing real-time insights, proactive analysis, and automation to help you scale smarter and more profitably.",
      visualComponent: <SolutionVisual />,
    },
    {
      number: 4,
      title: "The Transformation",
      text: "With CapiA.ai, your finances become a story you can read, understand, and act on—empowering you to scale with confidence.",
      visualComponent: <TransformationVisual />,
    },
  ];

  // The active chapter text split into words
  const activeChapterWords = chapters[activeChapter - 1].text.split(" ");

  // Simulate reading progress
  useEffect(() => {
    // Reset word count when changing chapters
    setReadWords(0);

    // Animate the text being read word by word
    const totalWords = activeChapterWords.length;
    const readingInterval = setInterval(() => {
      setReadWords((currentWords) => {
        if (currentWords >= totalWords) {
          clearInterval(readingInterval);
          return currentWords;
        }
        return currentWords + 1;
      });
    }, 250); // Slowed down to 250ms per word

    return () => clearInterval(readingInterval);
  }, [activeChapter, activeChapterWords.length]);

  // Go to next chapter when current one is complete
  useEffect(() => {
    if (
      readWords >= activeChapterWords.length &&
      activeChapter < chapters.length
    ) {
      const timer = setTimeout(() => {
        setActiveChapter((current) => current + 1);
      }, 2000); // Longer delay before moving to next chapter

      return () => clearTimeout(timer);
    }
  }, [readWords, activeChapterWords.length, activeChapter, chapters.length]);

  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-b bg-black to-[#00b3e6]"
      id="what-we-do"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full 3xl:max-w-8xl 4k:max-w-10xl 3xl:px-10 4k:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 3xl:gap-28 4k:gap-32">
          {/* Left Side - Chapter Navigation and Text */}
          <div className="md:w-1/2 flex flex-col">
            {/* Chapter Navigation */}
            <div className="mb-12 3xl:mb-16 4k:mb-20">
              <div className="space-y-6 3xl:space-y-8 4k:space-y-10">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.number}
                    onClick={() => setActiveChapter(chapter.number)}
                    className={`relative w-full text-left pl-12 py-3 3xl:pl-16 3xl:py-4 4k:pl-20 4k:py-5 focus:outline-none group transition-colors ${
                      chapter.number < activeChapter
                        ? "text-gray-500" // Past chapter
                        : chapter.number === activeChapter
                        ? "text-capia-blue font-medium" // Current chapter
                        : "text-gray-400" // Future chapter
                    }`}
                  >
                    {/* Chapter indicator circle */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 3xl:h-10 3xl:w-10 4k:h-12 4k:w-12 rounded-full flex items-center justify-center border ${
                        chapter.number < activeChapter
                          ? "border-gray-600 bg-gray-800 text-gray-500" // Past chapter
                          : chapter.number === activeChapter
                          ? "border-capia-blue bg-capia-blue/20 text-capia-blue" // Current chapter
                          : "border-gray-700 bg-gray-900 text-gray-500" // Future chapter
                      }`}
                    >
                      {chapter.number < activeChapter ? (
                        <Check className="h-4 w-4 3xl:h-5 3xl:w-5 4k:h-6 4k:w-6" />
                      ) : (
                        <span className="3xl:text-lg 4k:text-xl">
                          {chapter.number}
                        </span>
                      )}
                    </div>

                    {/* Chapter title */}
                    <span className="block text-lg font-medium 3xl:text-xl 4k:text-2xl">
                      {chapter.title}
                    </span>

                    {/* Connecting line to next chapter */}
                    {chapter.number < chapters.length && (
                      <div
                        className={`absolute left-4 3xl:left-5 4k:left-6 top-12 3xl:top-14 4k:top-16 w-px 3xl:w-0.5 4k:w-1 h-10 3xl:h-14 4k:h-16 -ml-px ${
                          chapter.number < activeChapter
                            ? "bg-gray-600"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[200px] 3xl:min-h-[250px] 4k:min-h-[300px]"
                >
                  <div className="mb-8 3xl:mb-10 4k:mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 3xl:text-5xl 4k:text-6xl 3xl:mb-10 4k:mb-12">
                      {chapters[activeChapter - 1].title}
                    </h3>

                    <div
                      ref={textRef}
                      className="prose prose-xl prose-invert max-w-none 3xl:prose-2xl 4k:prose-3xl"
                    >
                      <p className="text-xl md:text-2xl leading-relaxed 3xl:text-3xl 4k:text-4xl 3xl:leading-relaxed 4k:leading-relaxed">
                        {activeChapterWords.map((word, index) => (
                          <span
                            key={index}
                            className={`transition-colors duration-500 ${
                              index < readWords
                                ? "text-capia-blue" // Read words
                                : "text-white" // Unread words
                            }`}
                          >
                            {word}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Only show next button if not auto-advancing and not at last chapter */}
                  {readWords >= activeChapterWords.length &&
                    activeChapter < chapters.length && (
                      <motion.button
                        onClick={() => setActiveChapter(activeChapter + 1)}
                        className="inline-flex items-center text-capia-blue hover:text-capia-blue/80 transition-colors mt-8 text-lg 3xl:text-xl 4k:text-2xl 3xl:mt-10 4k:mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Continue to {chapters[activeChapter].title}
                        <ChevronRight className="ml-2 h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 3xl:ml-3 4k:ml-4" />
                      </motion.button>
                    )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="md:w-1/2 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="w-full h-[450px] md:h-[550px] 3xl:h-[650px] 4k:h-[750px] rounded-xl 3xl:rounded-2xl 4k:rounded-3xl overflow-hidden border border-gray-800 3xl:border-2 4k:border-3"
              >
                {chapters[activeChapter - 1].visualComponent}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Visual Components for each chapter
function ChaoticVisual() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <motion.div
        className="absolute w-24 sm:w-28 md:w-32 lg:w-36 2xl:w-36 3xl:w-44 4k:w-52 h-24 sm:h-28 md:h-32 lg:h-36 2xl:h-36 3xl:h-44 4k:h-52 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-2 sm:p-2.5 md:p-2.5 lg:p-3 2xl:p-3 3xl:p-4 4k:p-5"
        style={{ top: "10%", left: "5%" }}
        animate={{
          rotate: [0, 3, -3, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
      >
        <FileSpreadsheet className="w-12 sm:w-14 md:w-14 lg:w-16 2xl:w-16 3xl:w-20 4k:w-24 h-12 sm:h-14 md:h-14 lg:h-16 2xl:h-16 3xl:h-20 4k:h-24 text-gray-500" />
        <span className="block text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-sm 3xl:text-base 4k:text-lg mt-1 sm:mt-1.5 md:mt-1.5 lg:mt-2 2xl:mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          Spreadsheets
        </span>
      </motion.div>

      <motion.div
        className="absolute w-20 sm:w-24 md:w-28 lg:w-32 2xl:w-32 3xl:w-40 4k:w-48 h-20 sm:h-24 md:h-28 lg:h-32 2xl:h-32 3xl:h-40 4k:h-48 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-2 sm:p-2.5 md:p-2.5 lg:p-3 2xl:p-3 3xl:p-4 4k:p-5"
        style={{ top: "30%", right: "15%" }}
        animate={{
          rotate: [0, -5, 5, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <PieChart className="w-10 sm:w-12 md:w-12 lg:w-14 2xl:w-14 3xl:w-18 4k:w-22 h-10 sm:h-12 md:h-12 lg:h-14 2xl:h-14 3xl:h-18 4k:h-22 text-gray-500" />
        <span className="block text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-sm 3xl:text-base 4k:text-lg mt-1 sm:mt-1.5 md:mt-1.5 lg:mt-2 2xl:mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          CRM Data
        </span>
      </motion.div>

      <motion.div
        className="absolute w-16 sm:w-20 md:w-24 lg:w-28 2xl:w-28 3xl:w-36 4k:w-44 h-16 sm:h-20 md:h-24 lg:h-28 2xl:h-28 3xl:h-36 4k:h-44 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-2 sm:p-2.5 md:p-2.5 lg:p-3 2xl:p-3 3xl:p-4 4k:p-5"
        style={{ bottom: "20%", left: "20%" }}
        animate={{
          rotate: [0, 4, -4, 0],
          x: [0, -10, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <DollarSign className="w-8 sm:w-10 md:w-10 lg:w-12 2xl:w-12 3xl:w-16 4k:w-20 h-8 sm:h-10 md:h-10 lg:h-12 2xl:h-12 3xl:h-16 4k:h-20 text-gray-500" />
        <span className="block text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-sm 3xl:text-base 4k:text-lg mt-1 sm:mt-1.5 md:mt-1.5 lg:mt-2 2xl:mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          Treasury
        </span>
      </motion.div>

      <motion.div
        className="absolute w-28 sm:w-32 md:w-36 lg:w-40 2xl:w-40 3xl:w-48 4k:w-56 h-28 sm:h-32 md:h-36 lg:h-40 2xl:h-40 3xl:h-48 4k:h-56 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-2 sm:p-2.5 md:p-2.5 lg:p-3 2xl:p-3 3xl:p-4 4k:p-5"
        style={{ bottom: "10%", right: "10%" }}
        animate={{
          rotate: [0, -3, 3, 0],
          y: [0, -12, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <TrendingUp className="w-12 sm:w-14 md:w-14 lg:w-16 2xl:w-16 3xl:w-20 4k:w-24 h-12 sm:h-14 md:h-14 lg:h-16 2xl:h-16 3xl:h-20 4k:h-24 text-gray-500" />
        <span className="block text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-sm 3xl:text-base 4k:text-lg mt-1 sm:mt-1.5 md:mt-1.5 lg:mt-2 2xl:mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          Accounting
        </span>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-5 md:px-5 lg:px-6 2xl:px-6 3xl:px-8 4k:px-10 py-2 sm:py-3 md:py-3 lg:py-4 2xl:py-4 3xl:py-5 4k:py-6 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl bg-black/70 backdrop-blur-sm">
          <span className="text-base sm:text-lg md:text-base lg:text-lg 2xl:text-lg 3xl:text-xl 4k:text-2xl text-gray-400">
            Disconnected Financial Tools
          </span>
        </div>
      </div>
    </div>
  );
}

function StruggleVisual() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-capia-darkGray overflow-hidden">
      {/* Frustrated finance team - documents scattered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          {/* Scattered documents */}
          <motion.div
            className="absolute bg-gray-800 w-32 sm:w-36 md:w-40 lg:w-44 2xl:w-44 3xl:w-52 4k:w-64 h-24 sm:h-28 md:h-30 lg:h-32 2xl:h-32 3xl:h-40 4k:h-48 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl shadow-md sm:shadow-lg lg:shadow-xl 2xl:shadow-xl 3xl:shadow-2xl 4k:shadow-3xl border border-gray-700 3xl:border-2 4k:border-3"
            initial={{ x: 0, y: 0, rotate: -5 }}
            style={{ top: "15%", left: "20%" }}
            animate={{
              y: [0, -8, 0],
              rotate: [-5, -8, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          >
            <div className="h-3 sm:h-3.5 md:h-3.5 lg:h-4 2xl:h-4 3xl:h-5 4k:h-6 bg-capia-blue/30 rounded-t sm:rounded-t-md lg:rounded-t-lg 2xl:rounded-t-lg 3xl:rounded-t-xl 4k:rounded-t-2xl"></div>
            <div className="p-1.5 sm:p-2 md:p-2 lg:p-2 2xl:p-2 3xl:p-3 4k:p-4">
              <div className="w-full h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl mb-1.5 sm:mb-2 md:mb-2 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-3/4 h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl mb-1.5 sm:mb-2 md:mb-2 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-1/2 h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bg-gray-800 w-28 sm:w-32 md:w-36 lg:w-40 2xl:w-40 3xl:w-48 4k:w-56 h-20 sm:h-24 md:h-26 lg:h-28 2xl:h-28 3xl:h-36 4k:h-44 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl shadow-md sm:shadow-lg lg:shadow-xl 2xl:shadow-xl 3xl:shadow-2xl 4k:shadow-3xl border border-gray-700 3xl:border-2 4k:border-3"
            initial={{ x: 0, y: 0, rotate: 8 }}
            style={{ top: "30%", right: "15%" }}
            animate={{
              y: [0, 8, 0],
              rotate: [8, 12, 8],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="h-3 sm:h-3.5 md:h-3.5 lg:h-4 2xl:h-4 3xl:h-5 4k:h-6 bg-capia-red/30 rounded-t sm:rounded-t-md lg:rounded-t-lg 2xl:rounded-t-lg 3xl:rounded-t-xl 4k:rounded-t-2xl"></div>
            <div className="p-1.5 sm:p-2 md:p-2 lg:p-2 2xl:p-2 3xl:p-3 4k:p-4">
              <div className="w-full h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl mb-1.5 sm:mb-2 md:mb-2 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-2/3 h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl mb-1.5 sm:mb-2 md:mb-2 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-full h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bg-gray-800 w-24 sm:w-28 md:w-32 lg:w-36 2xl:w-36 3xl:w-44 4k:w-52 h-16 sm:h-20 md:h-22 lg:h-24 2xl:h-24 3xl:h-32 4k:h-40 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl shadow-md sm:shadow-lg lg:shadow-xl 2xl:shadow-xl 3xl:shadow-2xl 4k:shadow-3xl border border-gray-700 3xl:border-2 4k:border-3"
            initial={{ x: 0, y: 0, rotate: -10 }}
            style={{ bottom: "25%", left: "10%" }}
            animate={{
              y: [0, -6, 0],
              rotate: [-10, -7, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 11,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="h-3 sm:h-3.5 md:h-3.5 lg:h-4 2xl:h-4 3xl:h-5 4k:h-6 bg-capia-orange/30 rounded-t sm:rounded-t-md lg:rounded-t-lg 2xl:rounded-t-lg 3xl:rounded-t-xl 4k:rounded-t-2xl"></div>
            <div className="p-1.5 sm:p-2 md:p-2 lg:p-2 2xl:p-2 3xl:p-3 4k:p-4">
              <div className="w-full h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl mb-1.5 sm:mb-2 md:mb-2 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-1/2 h-2 sm:h-2.5 md:h-2.5 lg:h-3 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Finance team representative */}
          <div className="absolute bottom-8 sm:bottom-10 md:bottom-10 lg:bottom-12 2xl:bottom-12 3xl:bottom-16 4k:bottom-20 right-12 sm:right-14 md:right-14 lg:right-16 2xl:right-16 3xl:right-20 4k:right-24 w-36 sm:w-40 md:w-44 lg:w-48 2xl:w-48 3xl:w-56 4k:w-64 h-36 sm:h-40 md:h-44 lg:h-48 2xl:h-48 3xl:h-56 4k:h-64 flex items-end">
            <div className="relative w-full">
              <motion.div
                className="w-16 sm:w-18 md:w-18 lg:w-20 2xl:w-20 3xl:w-24 4k:w-28 h-16 sm:h-18 md:h-18 lg:h-20 2xl:h-20 3xl:h-24 4k:h-28 rounded-full bg-gray-700 mx-auto mb-2 sm:mb-2.5 md:mb-2.5 lg:mb-3 2xl:mb-3 3xl:mb-4 4k:mb-5 flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-3xl 3xl:text-4xl 4k:text-5xl">
                  🤯
                </span>
              </motion.div>
              <div className="bg-gray-800 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl p-2 sm:p-2.5 md:p-2.5 lg:p-3 2xl:p-3 3xl:p-4 4k:p-5 text-center border border-gray-700 3xl:border-2 4k:border-3">
                <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-sm 3xl:text-base 4k:text-lg text-gray-300">
                  Finance team trying to piece it all together
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/50 pointer-events-none"></div>
    </div>
  );
}

function SolutionVisual() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-capia-darkGray overflow-hidden">
      {/* CapiA platform representation */}
      <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-7 2xl:inset-8 3xl:inset-10 4k:inset-12">
        <div className="w-full h-full rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl 2xl:rounded-xl border border-capia-blue/30 3xl:border-2 4k:border-3 bg-gray-900/70 overflow-hidden shadow-md sm:shadow-lg lg:shadow-xl 2xl:shadow-xl shadow-capia-blue/10 3xl:shadow-2xl 3xl:shadow-capia-blue/15 4k:shadow-3xl 4k:shadow-capia-blue/20">
          <div className="h-7 sm:h-8 md:h-9 lg:h-10 2xl:h-11 3xl:h-14 4k:h-16 border-b border-capia-blue/20 3xl:border-b-2 4k:border-b-3 bg-gray-800/80 flex items-center px-2 sm:px-3 md:px-3 lg:px-4 2xl:px-4 3xl:px-5 4k:px-6">
            <div className="flex space-x-1 sm:space-x-1.5 md:space-x-1.5 lg:space-x-2 2xl:space-x-2 3xl:space-x-3 4k:space-x-4 mr-2 sm:mr-2.5 md:mr-3 lg:mr-3.5 2xl:mr-4 3xl:mr-5 4k:mr-6">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-red"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-orange"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-capia-blue font-medium">
              CapiA.ai Platform
            </span>
          </div>

          <div className="p-2 md:p-4 lg:p-5 2xl:p-6 3xl:p-8 4k:p-10">
            {/* Financial data coming together */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 lg:gap-5 2xl:gap-6 3xl:gap-8 4k:gap-10 mb-3 sm:mb-4 md:mb-4 lg:mb-5 2xl:mb-6 3xl:mb-8 4k:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-gray-800/50 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg p-3 sm:p-3 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-1.5 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                  <FileSpreadsheet className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-5 lg:w-5 2xl:h-5 2xl:w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-1 sm:mr-1.5 md:mr-2 lg:mr-2 2xl:mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Financial Data
                  </span>
                </div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 w-2/3 bg-capia-blue/20 rounded-full"></div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg p-3 sm:p-3 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="flex items-center mb-1.5 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                  <PieChart className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-5 lg:w-5 2xl:h-5 2xl:w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-1 sm:mr-1.5 md:mr-2 lg:mr-2 2xl:mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    CRM Integration
                  </span>
                </div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 w-3/4 bg-capia-blue/20 rounded-full"></div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg p-3 sm:p-3 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <div className="flex items-center mb-1.5 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                  <DollarSign className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-5 lg:w-5 2xl:h-5 2xl:w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-1 sm:mr-1.5 md:mr-2 lg:mr-2 2xl:mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Treasury & Banking
                  </span>
                </div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 w-1/2 bg-capia-blue/20 rounded-full"></div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg p-3 sm:p-3 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <div className="flex items-center mb-1.5 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                  <TrendingUp className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-5 lg:w-5 2xl:h-5 2xl:w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-1 sm:mr-1.5 md:mr-2 lg:mr-2 2xl:mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Accounting
                  </span>
                </div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 w-3/5 bg-capia-blue/20 rounded-full"></div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-2 md:mt-4 lg:mt-5 2xl:mt-6 3xl:mt-8 4k:mt-10 bg-capia-blue/5 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg p-3 sm:p-3.5 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/30 3xl:border-2 4k:border-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center mb-2 sm:mb-2 md:mb-3 lg:mb-3.5 2xl:mb-4 3xl:mb-5 4k:mb-6">
                <Lightbulb className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 2xl:h-6 2xl:w-6 3xl:h-7 3xl:w-7 4k:h-8 4k:w-8 text-capia-blue mr-1.5 sm:mr-2 md:mr-2 lg:mr-2.5 2xl:mr-3 3xl:mr-4 4k:mr-5" />
                <span className="text-xs  md:text-base lg:text-lg 2xl:text-lg 3xl:text-xl 4k:text-2xl text-capia-blue font-medium">
                  Unified Financial Platform
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-xs md:text-xs lg:text-sm 2xl:text-sm 3xl:text-base 4k:text-lg text-gray-400 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4">
                <span>Real-time Insights</span>
                <span>Automation</span>
                <span>Analysis</span>
              </div>
              <div className="h-2 sm:h-2.5 md:h-3 lg:h-3.5 2xl:h-4 3xl:h-5 4k:h-6 bg-gray-800 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-capia-blue to-capia-blue/70 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransformationVisual() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-900 via-capia-darkGray to-black overflow-hidden">
      {/* Clean, organized dashboard */}
      <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-7 2xl:inset-8 3xl:inset-10 4k:inset-12">
        <div className="w-full h-full rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl 2xl:rounded-xl border border-capia-blue/40 3xl:border-2 4k:border-3 bg-capia-darkGray/70 overflow-hidden shadow-md sm:shadow-lg lg:shadow-xl 2xl:shadow-xl shadow-capia-blue/20 3xl:shadow-2xl 3xl:shadow-capia-blue/25 4k:shadow-3xl 4k:shadow-capia-blue/30">
          <div className="h-7 sm:h-8 md:h-9 lg:h-10 2xl:h-11 3xl:h-14 4k:h-16 border-b border-capia-blue/30 3xl:border-b-2 4k:border-b-3 bg-gray-800/90 flex items-center px-2 sm:px-3 md:px-3 lg:px-4 2xl:px-4 3xl:px-5 4k:px-6">
            <div className="flex space-x-1 sm:space-x-1.5 md:space-x-1.5 lg:space-x-2 2xl:space-x-2 3xl:space-x-3 4k:space-x-4 mr-2 sm:mr-2.5 md:mr-3 lg:mr-3.5 2xl:mr-4 3xl:mr-5 4k:mr-6">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-red"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-orange"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-capia-blue font-semibold">
              CapiA.ai Financial Dashboard
            </span>
          </div>

          <div className="p-3 sm:p-4 md:p-4 lg:p-5 2xl:p-6 3xl:p-8 4k:p-10">
            <div className="flex justify-between mb-4 sm:mb-5 md:mb-6 lg:mb-7 2xl:mb-8 3xl:mb-10 4k:mb-12">
              <motion.div
                className="bg-capia-blue text-white px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-3.5 lg:py-2 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded sm:rounded-md 2xl:rounded-md 3xl:rounded-lg 4k:rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Overview
              </motion.div>
              <div className="flex space-x-1.5 sm:space-x-2 md:space-x-2 lg:space-x-2.5 2xl:space-x-3 3xl:space-x-4 4k:space-x-5">
                <motion.div
                  className="bg-gray-800 text-gray-300 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-3.5 lg:py-2 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded sm:rounded-md 2xl:rounded-md 3xl:rounded-lg 4k:rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(107, 171, 221, 0.2)",
                  }}
                >
                  Week
                </motion.div>
                <motion.div
                  className="bg-gray-800 text-gray-300 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-3.5 lg:py-2 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded sm:rounded-md 2xl:rounded-md 3xl:rounded-lg 4k:rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(107, 171, 221, 0.2)",
                  }}
                >
                  Month
                </motion.div>
                <motion.div
                  className="bg-gray-800 text-gray-300 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-3.5 lg:py-2 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded sm:rounded-md 2xl:rounded-md 3xl:rounded-lg 4k:rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(107, 171, 221, 0.2)",
                  }}
                >
                  Quarter
                </motion.div>
              </div>
            </div>

            {/* Clean dashboard content */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-5 2xl:gap-6 3xl:gap-8 4k:gap-10 mb-3 sm:mb-4 md:mb-4 lg:mb-5 2xl:mb-6 3xl:mb-8 4k:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-capia-blue/10 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl p-3 sm:p-3.5 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/30 3xl:border-2 4k:border-3">
                <div className="flex justify-between items-start mb-1.5 sm:mb-2 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Cash Flow
                  </span>
                  <motion.div
                    className="px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 2xl:px-2 2xl:py-1 3xl:px-3 3xl:py-1.5 4k:px-4 4k:py-2 bg-green-500/20 rounded sm:rounded 2xl:rounded 3xl:rounded-md 4k:rounded-lg text-green-500 text-xs sm:text-xs md:text-xs lg:text-xs 2xl:text-sm 3xl:text-base 4k:text-lg font-medium"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: 2, duration: 1, delay: 1 }}
                  >
                    +24%
                  </motion.div>
                </div>
                <div className="text-lg sm:text-xl md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl 4k:text-4xl font-bold text-white mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4">
                  $328,500
                </div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-800/80 rounded-full">
                  <motion.div
                    className="h-full bg-capia-blue rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </div>

              <div className="bg-capia-blue/10 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl p-3 sm:p-3.5 md:p-4 lg:p-4.5 2xl:p-5 3xl:p-6 4k:p-8 border border-capia-blue/30 3xl:border-2 4k:border-3">
                <div className="flex justify-between items-start mb-1.5 sm:mb-2 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                  <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Runway
                  </span>
                  <motion.div
                    className="px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 2xl:px-2 2xl:py-1 3xl:px-3 3xl:py-1.5 4k:px-4 4k:py-2 bg-capia-blue/20 rounded sm:rounded 2xl:rounded 3xl:rounded-md 4k:rounded-lg text-capia-blue text-xs sm:text-xs md:text-xs lg:text-xs 2xl:text-sm 3xl:text-base 4k:text-lg font-medium"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: 2, duration: 1, delay: 1.2 }}
                  >
                    16 months
                  </motion.div>
                </div>
                <div className="text-lg sm:text-xl md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl 4k:text-4xl font-bold text-white mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 2xl:mb-2 3xl:mb-3 4k:mb-4">
                  $1.6M
                </div>
                <div className="h-2 sm:h-2 md:h-2.5 lg:h-2.5 2xl:h-3 3xl:h-4 4k:h-5 bg-gray-800/80 rounded-full">
                  <motion.div
                    className="h-full bg-capia-blue rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-24 md:h-24 lg:h-32 3xl:h-36 4k:h-44 bg-capia-blue/10 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl border border-capia-blue/30 3xl:border-2 4k:border-3 p-2 sm:p-2.5 md:p-3 lg:p-3.5 2xl:p-4 3xl:p-5 4k:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-gray-300 mb-1.5 sm:mb-2 md:mb-2 lg:mb-2.5 2xl:mb-3 3xl:mb-4 4k:mb-5">
                AI-powered Insights
              </div>
              <motion.div
                className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="text-capia-blue font-medium">
                  Recommendation:
                </span>{" "}
                Optimize your pricing strategy for Enterprise tier to improve
                cash flow by an estimated 18%.
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success indicator */}
      <motion.div
        className="absolute bottom-2 sm:bottom-3 md:bottom-3 lg:bottom-4 2xl:bottom-5 3xl:bottom-7 4k:bottom-9 right-2 sm:right-3 md:right-3 lg:right-4 2xl:right-5 3xl:right-7 4k:right-9 bg-black/40 backdrop-blur-sm px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 lg:px-3.5 lg:py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded sm:rounded-md lg:rounded-lg 2xl:rounded-lg 3xl:rounded-xl 4k:rounded-2xl border border-capia-blue/30 3xl:border-2 4k:border-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4k:text-xl text-capia-blue">
          Clear, comprehensive, and actionable
        </div>
      </motion.div>
    </div>
  );
}
