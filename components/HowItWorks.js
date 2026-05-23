"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Open the app",
    description:
      "Launch Spotnera and instantly explore what’s happening around you.",
    icon: "📱",
  },
  {
    id: "02",
    title: "Discover nearby deals",
    description:
      "Find restaurants, cafes and local businesses with live promotions.",
    icon: "🗺️",
  },
  {
    id: "03",
    title: "Save money instantly",
    description:
      "Unlock exclusive discounts and trending local offers in real time.",
    icon: "🔥",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            HOW IT WORKS
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Discover deals around you
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Spotnera helps you discover live local offers in seconds.
          </p>

        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-3xl overflow-hidden"
            >

              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />

              {/* Step Number */}
              <div className="text-green-400 text-sm tracking-[0.3em] uppercase mb-6">
                {step.id}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-slate-400 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}