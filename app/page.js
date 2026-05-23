"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";

import { supabase } from "../lib/supabase";

import MapPreview from "../components/MapPreview";
import HowItWorks from "../components/HowItWorks";
import ScreenshotsSection from "../components/ScreenshotsSection";
import BusinessCTA from "../components/BusinessCTA";

export default function SpotneraLanding() {
  const launchDate = new Date("2026-07-20T00:00:00");

  const calculateTimeLeft = () => {
    const difference = launchDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Waitlist State
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Countdown Effect
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Smooth Scroll
  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Waitlist Handler
  const handleWaitlist = async () => {
    if (!email) return;

    setLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setEmail("");

      // Confetti Animation
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } else {

      if (error.code === "23505") {
        alert("This email is already registered.");
      } else {
        alert("Something went wrong.");
      }

      console.log(error);
    }
  };

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToWaitlist}
            className="bg-green-500 hover:bg-green-400 transition px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg shadow-green-500/20"
          >
            Join Waitlist
          </motion.button>

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
              Restaurants, cafés and local businesses in real time.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToWaitlist}
                className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/20"
              >
                Join the Waitlist
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-xl"
              >
                Watch Preview
              </motion.button>

            </div>

            {/* COUNTDOWN */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">

              {countdownItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                >

                  <div className="text-3xl md:text-4xl font-black text-green-400">
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                    {item.label}
                  </div>

                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* RIGHT SIDE — PHONE MOCKUP */}
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
                      🔔 Coffee Corner launched a new deal near you.
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

      {/* WAITLIST SECTION */}
      <section
        id="waitlist"
        className="pb-32 px-6"
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-3xl shadow-[0_0_100px_rgba(34,197,94,0.15)]"
        >

          <h2 className="text-5xl font-bold">
            Join the Waitlist
          </h2>

          <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Be one of the first users to access Spotnera.
          </p>

          {/* WAITLIST FORM */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-500 outline-none backdrop-blur-xl"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleWaitlist}
              className="bg-green-500 hover:bg-green-400 transition px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/20 whitespace-nowrap"
            >

              {loading ? "Loading..." : "Notify Me"}

            </motion.button>

          </div>

          {/* SUCCESS MESSAGE */}
          <AnimatePresence>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-green-400 font-medium text-lg"
              >
                Thanks for joining Spotnera 🚀
              </motion.p>
            )}

          </AnimatePresence>

          <div className="mt-8 text-slate-500 text-sm">
            🚀 Launching July 20, 2026
          </div>

        </motion.div>
      </section>

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
            © 2026 Spotnera. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}