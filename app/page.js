"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from "../lib/supabase";

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

  // FIX hydration error
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    } else {
      console.log(error);
      alert(JSON.stringify(error));
    }
  };

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <main className="min-h-screen bg-[#07120D] text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[160px] rounded-full" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Spotnera"
              width={42}
              height={42}
            />

            <span className="text-xl font-bold tracking-tight">
              Spotnera
            </span>
          </div>

          <button className="bg-green-500 hover:bg-green-400 transition px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg shadow-green-500/20">
            Join Waitlist
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="flex items-center gap-4 mb-8">

              <Image
                src="/logo.png"
                alt="Spotnera"
                width={85}
                height={85}
                className="drop-shadow-[0_0_30px_rgba(34,197,94,0.35)]"
              />

              <div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                  Spotnera
                </h1>

                <p className="text-green-400 uppercase tracking-[0.3em] text-sm mt-2">
                  Live Local Discovery
                </p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
              Discover live deals around you.
            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-xl">
              Restaurants, hotels and local businesses in real time.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/20">
                Join the Waitlist
              </button>

              <button className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-xl">
                Watch Preview
              </button>

            </div>

            {/* Countdown */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">

              {countdownItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl"
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

          {/* Phone Mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center"
          >

            <div className="w-[340px] rounded-[42px] border border-white/10 bg-black/40 backdrop-blur-2xl p-4 shadow-[0_0_80px_rgba(34,197,94,0.25)]">

              <div className="rounded-[32px] overflow-hidden bg-[#0D1B14] border border-white/5">

                {/* Fake Map */}
                <div className="h-[250px] relative bg-gradient-to-br from-[#0B1410] to-[#13281C] overflow-hidden">

                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:30px_30px]" />

                  <div className="absolute top-12 left-10 w-5 h-5 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

                  <div className="absolute top-24 right-14 w-5 h-5 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]" />

                  <div className="absolute bottom-16 left-20 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                  {/* Deal Card */}
                  <div className="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="font-semibold">
                          Burger House
                        </p>

                        <p className="text-sm text-green-400">
                          20% OFF right now
                        </p>
                      </div>

                      <div className="text-yellow-400 font-bold">
                        ⭐ 4.8
                      </div>

                    </div>
                  </div>
                </div>

                {/* Notification */}
                <div className="p-5">

                  <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                    <p className="text-sm text-green-300">
                      🔔 Coffee Corner launched a new deal near you.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Features */}
      <section className="pb-32 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              icon: "🗺️",
              title: "Live Map",
              desc: "Discover nearby businesses instantly.",
            },
            {
              icon: "💬",
              title: "Business Chat",
              desc: "Talk directly with local businesses.",
            },
            {
              icon: "🔥",
              title: "Live Deals",
              desc: "Find promotions in real time.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </section>

      {/* Waitlist */}
      <section className="pb-32 px-6">

        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,197,94,0.12)]">

          <h2 className="text-5xl font-bold">
            Join the Waitlist
          </h2>

          <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Be one of the first users to access Spotnera.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-500 outline-none"
            />

            <button
              onClick={handleWaitlist}
              className="bg-green-500 hover:bg-green-400 transition px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-green-500/20 whitespace-nowrap"
            >
              {loading ? "Loading..." : "Notify Me"}
            </button>

          </div>

          {success && (
            <p className="mt-6 text-green-400 font-medium">
              Thanks for joining Spotnera 🚀
            </p>
          )}

          <div className="mt-8 text-slate-500 text-sm">
            🚀 Launching July 20, 2026
          </div>

        </div>
      </section>

      {/* Footer */}
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