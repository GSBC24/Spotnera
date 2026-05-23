"use client";

import { motion } from "framer-motion";

const screenshots = [
  {
    title: "Live Discovery",
    subtitle: "Explore nearby deals in real time.",
    emoji: "🗺️",
    glow: "from-green-500/20",
  },
  {
    title: "Trending Offers",
    subtitle: "Find the hottest local promotions instantly.",
    emoji: "🔥",
    glow: "from-yellow-500/20",
  },
  {
    title: "Business Profiles",
    subtitle: "Discover ratings, deals and featured spots.",
    emoji: "🏪",
    glow: "from-blue-500/20",
  },
];

export default function ScreenshotsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            APP EXPERIENCE
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Designed for real-time discovery
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Explore local offers through a premium live experience.
          </p>

        </motion.div>

        {/* Screenshots */}
        <div className="mt-24 grid lg:grid-cols-3 gap-10">

          {screenshots.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="relative"
            >

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${screen.glow} to-transparent blur-3xl rounded-[40px]`}
              />

              {/* Phone Mockup */}
              <div className="relative bg-black/40 border border-white/10 backdrop-blur-3xl rounded-[40px] p-4 shadow-[0_0_60px_rgba(255,255,255,0.04)]">

                <div className="rounded-[30px] overflow-hidden bg-[#0D1B14] border border-white/5">

                  {/* Fake App UI */}
                  <div className="h-[520px] relative p-6 flex flex-col justify-between">

                    {/* Top Bar */}
                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-sm text-slate-400">
                          Spotnera
                        </p>

                        <h3 className="text-2xl font-bold mt-1">
                          {screen.title}
                        </h3>
                      </div>

                      <div className="text-4xl">
                        {screen.emoji}
                      </div>

                    </div>

                    {/* Main UI */}
                    <div className="space-y-5">

                      {/* Card */}
                      <motion.div
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl"
                      >

                        <div className="flex items-center justify-between">

                          <div>
                            <p className="font-semibold">
                              Burger House
                            </p>

                            <p className="text-sm text-green-400 mt-1">
                              20% OFF Today
                            </p>
                          </div>

                          <div className="text-yellow-400 font-bold">
                            ⭐ 4.8
                          </div>

                        </div>

                      </motion.div>

                      {/* Fake Map */}
                      <div className="h-[180px] rounded-3xl bg-gradient-to-br from-[#122019] to-[#1D3328] border border-white/5 relative overflow-hidden">

                        <motion.div
                          animate={{
                            scale: [1, 1.25, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute top-10 left-10 w-5 h-5 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,1)]"
                        />

                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                          }}
                          className="absolute bottom-10 right-10 w-5 h-5 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,1)]"
                        />

                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="absolute top-20 right-16 w-5 h-5 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,1)]"
                        />

                      </div>

                      {/* Live Activity */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

                        <div className="flex items-center gap-2">

                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                            className="w-3 h-3 rounded-full bg-green-400"
                          />

                          <p className="text-sm text-green-300">
                            12 people discovering nearby deals
                          </p>

                        </div>

                      </div>
                    </div>

                    {/* Bottom Caption */}
                    <div className="text-center">

                      <p className="text-slate-400 leading-relaxed">
                        {screen.subtitle}
                      </p>

                    </div>

                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}