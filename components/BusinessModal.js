"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";

export default function BusinessModal({
  isOpen,
  onClose,
}) {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (
      !businessName ||
      !email ||
      !category ||
      !city
    ) {
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("business_waitlist")
      .insert([
        {
          business_name: businessName,
          email,
          category,
          city,
        },
      ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);

      setBusinessName("");
      setEmail("");
      setCategory("");
      setCity("");

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);

    } else {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xl px-6"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
            className="w-full max-w-2xl bg-[#0D1B14]/90 border border-white/10 rounded-[36px] p-8 md:p-10 backdrop-blur-3xl relative overflow-hidden"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition"
            >
              ✕
            </button>

            {/* Content */}
            <div className="relative z-10">

              <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-5">
                BUSINESS WAITLIST
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Get featured on Spotnera
              </h2>

              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                Join early and grow your local visibility through live promotions and featured discovery.
              </p>

              {/* Form */}
              <div className="mt-10 grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) =>
                    setBusinessName(e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Business Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none"
                />

              </div>

              {/* Success */}
              <AnimatePresence>

                {success && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="mt-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-green-400"
                  >
                    🚀 Thanks! We’ll contact you soon.
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={handleSubmit}
                className="mt-8 w-full bg-green-500 hover:bg-green-400 transition rounded-2xl py-5 text-lg font-semibold shadow-2xl shadow-green-500/20"
              >

                {loading
                  ? "Submitting..."
                  : "Join Business Waitlist"}

              </motion.button>

            </div>
          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}