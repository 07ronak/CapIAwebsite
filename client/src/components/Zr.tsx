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
