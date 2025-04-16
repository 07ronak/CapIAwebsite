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
