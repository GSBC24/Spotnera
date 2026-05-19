"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SpotneraCountdownLanding() {
  const launchDate = new Date("2026-07-20T00:00:00");

  const calculateTimeLeft = () => {
    const difference = launchDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const months = Math.floor(
      difference / (1000 * 60 * 60 * 24 * 30)
    );
    const days = Math.floor(
      (difference / (1000 * 60 * 60 * 24)) % 30
    );
    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
      (difference / 1000 / 60) % 60
    );
    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    return {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Months", value: timeLeft.months },
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <main className="min-h-screen bg-[#07120D] text-white overflow-hidden relative flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/logo.png"
            alt="Spotnera Logo"
            width={180}
            height={180}
            className="mx-auto mb-6 drop-shadow-[0_0_35px_rgba(34,197,94,0.35)]"
          />

          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            Spotnera
          </h1>

          <p className="mt-4 text-green-400 uppercase tracking-[0.4em] text-sm md:text-base">
            Discover. Save. Nearby.
          </p>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            The future of discovering
            <span className="text-green-400">
              {" "}
              nearby businesses{" "}
            </span>
            in real time.
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Spotnera connects people with restaurants, hotels,
            shops and local businesses through live promotions,
            maps, chat and reviews.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-5"
        >
          {countdownItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <div className="text-4xl md:text-6xl font-black text-green-400">
                {String(item.value).padStart(2, "0")}
              </div>

              <div className="mt-3 text-slate-400 uppercase tracking-widest text-xs md:text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Launch Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-14"
        >
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-full text-green-300 text-sm md:text-base">
            🚀 Launching July 20 at 00:00
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 grid md:grid-cols-4 gap-5"
        >
          {[
            {
              icon: "🗺️",
              title: "Live Map",
            },
            {
              icon: "💬",
              title: "Business Chat",
            },
            {
              icon: "🔥",
              title: "Real-Time Deals",
            },
            {
              icon: "⭐",
              title: "Reviews & Ratings",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg"
            >
              <div className="text-4xl">
                {feature.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}