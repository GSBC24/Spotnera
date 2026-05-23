"use client";

import { motion } from "framer-motion";

export default function BusinessCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="w-[900px] h-[900px] bg-green-500/10 blur-[180px] rounded-full" />

      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-3xl p-10 md:p-16"
        >

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">

            {/* LEFT */}
            <div>

              <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-6">
                FOR BUSINESSES
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Own a business?
                <br />
                Get featured on Spotnera.
              </h2>

              <p className="mt-8 text-xl text-slate-400 leading-relaxed max-w-xl">
                Reach nearby customers instantly with live promotions,
                featured visibility and real-time engagement.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">

                {[
                  "Launch promotions instantly",
                  "Reach customers nearby",
                  "Increase local visibility",
                  "Real-time engagement",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >

                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,1)]" />

                    <p className="text-slate-300 text-lg">
                      {item}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/20"
                >
                  Join as Business
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-xl"
                >
                  Learn More
                </motion.button>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative"
            >

              {/* Main Card */}
              <div className="relative bg-black/40 border border-white/10 rounded-[36px] backdrop-blur-3xl p-6 shadow-[0_0_80px_rgba(34,197,94,0.2)]">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-slate-400 text-sm">
                      Featured Business
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      Burger House
                    </h3>

                  </div>

                  <div className="text-5xl">
                    🍔
                  </div>

                </div>

                {/* Promo Card */}
                <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-3xl p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-green-400 text-sm uppercase tracking-widest">
                        LIVE OFFER
                      </p>

                      <h4 className="text-4xl font-black mt-2">
                        20% OFF
                      </h4>

                    </div>

                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="w-5 h-5 rounded-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,1)]"
                    />

                  </div>

                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                    <p className="text-slate-400 text-sm">
                      Nearby Views
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      2.4K
                    </h4>

                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                    <p className="text-slate-400 text-sm">
                      Engagement
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      +38%
                    </h4>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}