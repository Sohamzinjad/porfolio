"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroAnimation() {
  const [phase, setPhase] = useState<"fullname" | "initials" | "done">("fullname");

  useEffect(() => {
    // Prevent scrolling while animation is playing
    document.body.style.overflow = "hidden";

    // Show fullname for 4 seconds, then switch to initials
    const timeout1 = setTimeout(() => {
      setPhase("initials");
    }, 4000);

    // Show initials for a bit, then drop the whole overlay
    const timeout2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = ""; // Restore scrolling
    }, 5500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        <AnimatePresence mode="wait">
          {phase === "fullname" && (
            <motion.div
              key="fullname"
              className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              SOHAM ZINJAD
            </motion.div>
          )}
          {phase === "initials" && (
            <motion.div
              key="initials"
              className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              SZ
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
