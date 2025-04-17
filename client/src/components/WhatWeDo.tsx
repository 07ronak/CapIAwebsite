import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

interface ChapterProps {
  number: number;
  title: string;
  text: string;
  imageUrl: string;
  altText?: string;
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
      text: "Imagine managing finances like reading a scattered book in many languages—a confusing puzzle instead of a clear financial narrative.",
      imageUrl: "/i1.png",
      altText: "Visual representation of chaos",
    },
    {
      number: 2,
      title: "The Struggle",
      text: "Scattered tools mean fragmented finances, a partial story pieced together—making confident decisions early impossible for your growing team.",
      imageUrl: "/new2.png",
      altText: "Visual representation of struggle",
    },
    {
      number: 3,
      title: "The Solution",
      text: "CapIA.ai unifies finances via insights and automation—powering smarter, faster scaling and profitable growth with newfound clarity.",
      imageUrl: "/new.png",
      altText: "Visual representation of solution",
    },
    {
      number: 4,
      title: "The Transformation",
      text: "With CapiA.ai, your finances become a story you can read, understand, and act on—empowering you to scale with confidence.",
      imageUrl: "/new4.png",
      altText: "Visual representation of transformation",
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
    }, 150); // Slowed down to 250ms per word

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

  // Navigation functions
  const goToPreviousChapter = () => {
    setActiveChapter((prev) => (prev === 1 ? chapters.length : prev - 1));
  };

  const goToNextChapter = () => {
    setActiveChapter((prev) => (prev === chapters.length ? 1 : prev + 1));
  };

  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-b from-black to-gray-800 pb-12 md:py-0 mt-12"
      id="what-we-do"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full 3xl:max-w-8xl 4k:max-w-10xl 3xl:px-10 4k:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 3xl:gap-28 4k:gap-32">
          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-8 3xl:text-6xl 4k:text-7xl 3xl:mb-10 4k:mb-12">
                  {chapters[activeChapter - 1].title}
                </h3>
                <div
                  ref={textRef}
                  className="prose prose-xl prose-invert max-w-none 3xl:prose-2xl 4k:prose-3xl"
                >
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl leading-relaxed 3xl:text-5xl 4k:text-5xl 3xl:leading-relaxed 4k:leading-relaxed font-mono">
                    {activeChapterWords.map((word, index) => (
                      <span
                        key={index}
                        className={`transition-colors duration-500 ${
                          index < readWords ? "text-capia-blue" : "text-white"
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="w-full h-[450px] md:h-[550px] 3xl:h-[650px] 4k:h-[750px] rounded-xl 3xl:rounded-2xl 4k:rounded-3xl overflow-hidden"
              >
                <img
                  src={chapters[activeChapter - 1].imageUrl}
                  alt={
                    chapters[activeChapter - 1].altText ||
                    chapters[activeChapter - 1].title
                  }
                  className="object-cover w-full h-full "
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Navigation Arrows */}
        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-4">
          <button
            onClick={goToPreviousChapter}
            className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-capia-blue/70 opacity-100"
            aria-label="Previous chapter"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>

          <button
            onClick={goToNextChapter}
            className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-capia-blue/70 opacity-100"
            aria-label="Next chapter"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
