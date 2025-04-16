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
