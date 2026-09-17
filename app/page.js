"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import MapPreview from "../components/MapPreview";
import HowItWorks from "../components/HowItWorks";
import ScreenshotsSection from "../components/ScreenshotsSection";
import BusinessCTA from "../components/BusinessCTA";

export default function SpotneraLanding() {
  const appUrl = "https://app.spotnera.com/";
  const ownerUrl = "https://app.spotnera.com/owner";

  return (
    <main className="min-h-screen bg-[#07120D] text-white overflow-hidden relative scroll-smooth">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[160px] rounded-full" />

      {/* Floating Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl">

        <div className="px-6 py-4 flex items-center justify-between">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >

            <Image
              src="/logo.png"
              alt="Spotnera"
              width={42}
              height={42}
            />

            <span className="text-xl font-bold tracking-tight">
              Spotnera
            </span>

          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={appUrl}
            className="bg-green-500 hover:bg-green-400 transition px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg shadow-green-500/20"
          >
            Open Spotnera
          </motion.a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-40">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="flex items-center gap-4 mb-8">

              <motion.div
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >

                <Image
                  src="/logo.png"
                  alt="Spotnera"
                  width={85}
                  height={85}
                  className="drop-shadow-[0_0_40px_rgba(34,197,94,0.4)]"
                />

              </motion.div>

              <div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                  Spotnera
                </h1>

                <p className="text-green-400 uppercase tracking-[0.3em] text-sm mt-2">
                  LIVE LOCAL DISCOVERY
                </p>

              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
              Discover live deals around you.
            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-xl">
              Restaurants, cafes and local businesses in real time. Spotnera is live now.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href={appUrl}
                className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/20"
              >
                Open Spotnera
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href={ownerUrl}
                className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-xl"
              >
                For Businesses
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT SIDE - PHONE MOCKUP */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="flex justify-center"
          >

            <div className="w-[360px] rounded-[42px] border border-white/10 bg-black/40 backdrop-blur-3xl p-4 shadow-[0_0_100px_rgba(34,197,94,0.3)]">

              <div className="rounded-[32px] overflow-hidden bg-[#0D1B14] border border-white/5">

                {/* MAPBOX PREMIUM MAP */}
                <MapPreview />

                {/* LIVE NOTIFICATION */}
                <div className="p-5">

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 backdrop-blur-xl"
                  >

                    <p className="text-sm text-green-300">
                      {"\u{1F514}"} Coffee Corner launched a new deal near you.
                    </p>

                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* PREMIUM SCREENSHOTS */}
      <ScreenshotsSection />

      {/* BUSINESS CTA */}
      <BusinessCTA />

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="Spotnera"
              width={36}
              height={36}
            />

            <span className="font-bold text-lg">
              Spotnera
            </span>

          </div>

          <div className="text-sm text-slate-500">
            {"\u00A9"} 2026 Spotnera. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}
