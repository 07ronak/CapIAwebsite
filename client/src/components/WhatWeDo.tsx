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
      className="min-h-screen flex items-center bg-gradient-to-b from-black to-capia-darkGray"
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
        className="absolute w-36 h-36 3xl:w-44 3xl:h-44 4k:w-52 4k:h-52 rounded bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-3 3xl:p-4 4k:p-5"
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
        <FileSpreadsheet className="w-16 h-16 3xl:w-20 3xl:h-20 4k:w-24 4k:h-24 text-gray-500" />
        <span className="block text-sm 3xl:text-base 4k:text-lg mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          Spreadsheets
        </span>
      </motion.div>

      <motion.div
        className="absolute w-32 h-32 3xl:w-40 3xl:h-40 4k:w-48 4k:h-48 rounded bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-3 3xl:p-4 4k:p-5"
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
        <PieChart className="w-14 h-14 3xl:w-18 3xl:h-18 4k:w-22 4k:h-22 text-gray-500" />
        <span className="block text-sm 3xl:text-base 4k:text-lg mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          CRM Data
        </span>
      </motion.div>

      <motion.div
        className="absolute w-28 h-28 3xl:w-36 3xl:h-36 4k:w-44 4k:h-44 rounded bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-3 3xl:p-4 4k:p-5"
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
        <DollarSign className="w-12 h-12 3xl:w-16 3xl:h-16 4k:w-20 4k:h-20 text-gray-500" />
        <span className="block text-sm 3xl:text-base 4k:text-lg mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          Treasury
        </span>
      </motion.div>

      <motion.div
        className="absolute w-40 h-40 3xl:w-48 3xl:h-48 4k:w-56 4k:h-56 rounded bg-capia-darkGray border border-gray-700 3xl:border-2 4k:border-3 flex items-center justify-center p-3 3xl:p-4 4k:p-5"
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
        <TrendingUp className="w-16 h-16 3xl:w-20 3xl:h-20 4k:w-24 4k:h-24 text-gray-500" />
        <span className="block text-sm 3xl:text-base 4k:text-lg mt-2 3xl:mt-3 4k:mt-4 text-gray-400">
          Accounting
        </span>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 py-4 3xl:px-8 3xl:py-5 4k:px-10 4k:py-6 rounded-lg bg-black/70 backdrop-blur-sm">
          <span className="text-lg 3xl:text-xl 4k:text-2xl text-gray-400">
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
            className="absolute bg-gray-800 w-44 h-32 3xl:w-52 3xl:h-40 4k:w-64 4k:h-48 rounded shadow-lg border border-gray-700 3xl:border-2 4k:border-3 3xl:shadow-xl 4k:shadow-2xl"
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
            <div className="h-4 3xl:h-5 4k:h-6 bg-capia-blue/30 rounded-t"></div>
            <div className="p-2 3xl:p-3 4k:p-4">
              <div className="w-full h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-3/4 h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-1/2 h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bg-gray-800 w-40 h-28 3xl:w-48 3xl:h-36 4k:w-56 4k:h-44 rounded shadow-lg border border-gray-700 3xl:border-2 4k:border-3 3xl:shadow-xl 4k:shadow-2xl"
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
            <div className="h-4 3xl:h-5 4k:h-6 bg-capia-red/30 rounded-t"></div>
            <div className="p-2 3xl:p-3 4k:p-4">
              <div className="w-full h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-2/3 h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-full h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bg-gray-800 w-36 h-24 3xl:w-44 3xl:h-32 4k:w-52 4k:h-40 rounded shadow-lg border border-gray-700 3xl:border-2 4k:border-3 3xl:shadow-xl 4k:shadow-2xl"
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
            <div className="h-4 3xl:h-5 4k:h-6 bg-capia-orange/30 rounded-t"></div>
            <div className="p-2 3xl:p-3 4k:p-4">
              <div className="w-full h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded mb-2 3xl:mb-3 4k:mb-4"></div>
              <div className="w-1/2 h-3 3xl:h-4 4k:h-5 bg-gray-700 rounded"></div>
            </div>
          </motion.div>

          {/* Finance team representative */}
          <div className="absolute bottom-12 3xl:bottom-16 4k:bottom-20 right-16 3xl:right-20 4k:right-24 w-48 3xl:w-56 4k:w-64 h-48 3xl:h-56 4k:h-64 flex items-end">
            <div className="relative w-full">
              <motion.div
                className="w-20 h-20 3xl:w-24 3xl:h-24 4k:w-28 4k:h-28 rounded-full bg-gray-700 mx-auto mb-3 3xl:mb-4 4k:mb-5 flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <span className="text-3xl 3xl:text-4xl 4k:text-5xl">🤯</span>
              </motion.div>
              <div className="bg-gray-800 rounded-lg p-3 3xl:p-4 4k:p-5 text-center border border-gray-700 3xl:border-2 4k:border-3">
                <span className="text-sm 3xl:text-base 4k:text-lg text-gray-300">
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
      <div className="absolute inset-10 3xl:inset-12 4k:inset-14">
        <div className="w-full h-full rounded-xl 3xl:rounded-2xl 4k:rounded-3xl border border-capia-blue/30 3xl:border-2 4k:border-3 bg-gray-900/70 overflow-hidden shadow-lg shadow-capia-blue/10 3xl:shadow-xl 3xl:shadow-capia-blue/15 4k:shadow-2xl 4k:shadow-capia-blue/20">
          <div className="h-10 3xl:h-12 4k:h-14 border-b border-capia-blue/20 3xl:border-b-2 4k:border-b-3 bg-gray-800/80 flex items-center px-4 3xl:px-5 4k:px-6">
            <div className="flex space-x-2 3xl:space-x-3 4k:space-x-4 mr-4 3xl:mr-5 4k:mr-6">
              <div className="w-3 h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-red"></div>
              <div className="w-3 h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-orange"></div>
              <div className="w-3 h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm 3xl:text-base 4k:text-lg text-capia-blue font-medium">
              CapiA.ai Platform
            </span>
          </div>

          <div className="p-6 3xl:p-8 4k:p-10">
            {/* Financial data coming together */}
            <motion.div
              className="grid grid-cols-2 gap-4 3xl:gap-6 4k:gap-8 mb-6 3xl:mb-8 4k:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-gray-800/50 rounded-lg p-4 3xl:p-5 4k:p-6 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3 3xl:mb-4 4k:mb-5">
                  <FileSpreadsheet className="h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Financial Data
                  </span>
                </div>
                <div className="h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-3 3xl:h-4 4k:h-5 w-2/3 bg-capia-blue/20 rounded-full"></div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-lg p-4 3xl:p-5 4k:p-6 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="flex items-center mb-3 3xl:mb-4 4k:mb-5">
                  <PieChart className="h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    CRM Integration
                  </span>
                </div>
                <div className="h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-3 3xl:h-4 4k:h-5 w-3/4 bg-capia-blue/20 rounded-full"></div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-lg p-4 3xl:p-5 4k:p-6 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <div className="flex items-center mb-3 3xl:mb-4 4k:mb-5">
                  <DollarSign className="h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Treasury & Banking
                  </span>
                </div>
                <div className="h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-3 3xl:h-4 4k:h-5 w-1/2 bg-capia-blue/20 rounded-full"></div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-lg p-4 3xl:p-5 4k:p-6 border border-capia-blue/20 3xl:border-2 4k:border-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <div className="flex items-center mb-3 3xl:mb-4 4k:mb-5">
                  <TrendingUp className="h-5 w-5 3xl:h-6 3xl:w-6 4k:h-7 4k:w-7 text-capia-blue mr-2 3xl:mr-3 4k:mr-4" />
                  <span className="text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Accounting
                  </span>
                </div>
                <div className="h-3 3xl:h-4 4k:h-5 bg-capia-blue/30 rounded-full mb-2 3xl:mb-3 4k:mb-4"></div>
                <div className="h-3 3xl:h-4 4k:h-5 w-3/5 bg-capia-blue/20 rounded-full"></div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 3xl:mt-8 4k:mt-10 bg-capia-blue/5 rounded-lg p-5 3xl:p-6 4k:p-8 border border-capia-blue/30 3xl:border-2 4k:border-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center mb-4 3xl:mb-5 4k:mb-6">
                <Lightbulb className="h-6 w-6 3xl:h-7 3xl:w-7 4k:h-8 4k:w-8 text-capia-blue mr-3 3xl:mr-4 4k:mr-5" />
                <span className="text-lg 3xl:text-xl 4k:text-2xl text-capia-blue font-medium">
                  Unified Financial Platform
                </span>
              </div>
              <div className="flex justify-between text-sm 3xl:text-base 4k:text-lg text-gray-400 mb-2 3xl:mb-3 4k:mb-4">
                <span>Real-time Insights</span>
                <span>Automation</span>
                <span>Analysis</span>
              </div>
              <div className="h-4 3xl:h-5 4k:h-6 bg-gray-800 rounded-full">
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
      <div className="absolute inset-8 3xl:inset-10 4k:inset-12">
        <div className="w-full h-full rounded-xl 3xl:rounded-2xl 4k:rounded-3xl border border-capia-blue/40 3xl:border-2 4k:border-3 bg-capia-darkGray/70 overflow-hidden shadow-xl shadow-capia-blue/20 3xl:shadow-2xl 3xl:shadow-capia-blue/25 4k:shadow-3xl 4k:shadow-capia-blue/30">
          <div className="h-11 3xl:h-14 4k:h-16 border-b border-capia-blue/30 3xl:border-b-2 4k:border-b-3 bg-gray-800/90 flex items-center px-4 3xl:px-5 4k:px-6">
            <div className="flex space-x-2 3xl:space-x-3 4k:space-x-4 mr-4 3xl:mr-5 4k:mr-6">
              <div className="w-3 h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-red"></div>
              <div className="w-3 h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-capia-orange"></div>
              <div className="w-3 h-3 3xl:w-4 3xl:h-4 4k:w-5 4k:h-5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-base 3xl:text-lg 4k:text-xl text-capia-blue font-semibold">
              CapiA.ai Financial Dashboard
            </span>
          </div>

          <div className="p-6 3xl:p-8 4k:p-10">
            <div className="flex justify-between mb-8 3xl:mb-10 4k:mb-12">
              <motion.div
                className="bg-capia-blue text-white px-4 py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded-md 3xl:rounded-lg 4k:rounded-xl text-base 3xl:text-lg 4k:text-xl font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Overview
              </motion.div>
              <div className="flex space-x-3 3xl:space-x-4 4k:space-x-5">
                <motion.div
                  className="bg-gray-800 text-gray-300 px-4 py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded-md 3xl:rounded-lg 4k:rounded-xl text-base 3xl:text-lg 4k:text-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(107, 171, 221, 0.2)",
                  }}
                >
                  Week
                </motion.div>
                <motion.div
                  className="bg-gray-800 text-gray-300 px-4 py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded-md 3xl:rounded-lg 4k:rounded-xl text-base 3xl:text-lg 4k:text-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(107, 171, 221, 0.2)",
                  }}
                >
                  Month
                </motion.div>
                <motion.div
                  className="bg-gray-800 text-gray-300 px-4 py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded-md 3xl:rounded-lg 4k:rounded-xl text-base 3xl:text-lg 4k:text-xl"
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
              className="grid grid-cols-2 gap-6 3xl:gap-8 4k:gap-10 mb-6 3xl:mb-8 4k:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-capia-blue/10 rounded-lg 3xl:rounded-xl 4k:rounded-2xl p-5 3xl:p-6 4k:p-8 border border-capia-blue/30 3xl:border-2 4k:border-3">
                <div className="flex justify-between items-start mb-3 3xl:mb-4 4k:mb-5">
                  <span className="text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Cash Flow
                  </span>
                  <motion.div
                    className="px-2 py-1 3xl:px-3 3xl:py-1.5 4k:px-4 4k:py-2 bg-green-500/20 rounded 3xl:rounded-md 4k:rounded-lg text-green-500 text-sm 3xl:text-base 4k:text-lg font-medium"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: 2, duration: 1, delay: 1 }}
                  >
                    +24%
                  </motion.div>
                </div>
                <div className="text-2xl 3xl:text-3xl 4k:text-4xl font-bold text-white mb-2 3xl:mb-3 4k:mb-4">
                  $328,500
                </div>
                <div className="h-3 3xl:h-4 4k:h-5 bg-gray-800/80 rounded-full">
                  <motion.div
                    className="h-full bg-capia-blue rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </div>

              <div className="bg-capia-blue/10 rounded-lg 3xl:rounded-xl 4k:rounded-2xl p-5 3xl:p-6 4k:p-8 border border-capia-blue/30 3xl:border-2 4k:border-3">
                <div className="flex justify-between items-start mb-3 3xl:mb-4 4k:mb-5">
                  <span className="text-base 3xl:text-lg 4k:text-xl text-gray-300">
                    Runway
                  </span>
                  <motion.div
                    className="px-2 py-1 3xl:px-3 3xl:py-1.5 4k:px-4 4k:py-2 bg-capia-blue/20 rounded 3xl:rounded-md 4k:rounded-lg text-capia-blue text-sm 3xl:text-base 4k:text-lg font-medium"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: 2, duration: 1, delay: 1.2 }}
                  >
                    16 months
                  </motion.div>
                </div>
                <div className="text-2xl 3xl:text-3xl 4k:text-4xl font-bold text-white mb-2 3xl:mb-3 4k:mb-4">
                  $1.6M
                </div>
                <div className="h-3 3xl:h-4 4k:h-5 bg-gray-800/80 rounded-full">
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
              className="relative h-24 3xl:h-32 4k:h-40 bg-capia-blue/10 rounded-lg 3xl:rounded-xl 4k:rounded-2xl border border-capia-blue/30 3xl:border-2 4k:border-3 p-4 3xl:p-5 4k:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-base 3xl:text-lg 4k:text-xl text-gray-300 mb-3 3xl:mb-4 4k:mb-5">
                AI-powered Insights
              </div>
              <motion.div
                className="text-base 3xl:text-lg 4k:text-xl text-white"
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
        className="absolute bottom-5 3xl:bottom-7 4k:bottom-9 right-5 3xl:right-7 4k:right-9 bg-black/40 backdrop-blur-sm px-4 py-2 3xl:px-5 3xl:py-3 4k:px-6 4k:py-4 rounded-lg 3xl:rounded-xl 4k:rounded-2xl border border-capia-blue/30 3xl:border-2 4k:border-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="text-base 3xl:text-lg 4k:text-xl text-capia-blue">
          Clear, comprehensive, and actionable
        </div>
      </motion.div>
    </div>
  );
}
