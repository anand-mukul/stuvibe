"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    });
  }, [controls]);

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={controls}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p
            className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-1 h-52"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <span style={{ letterSpacing: "0.15em" }}>Coming Soon</span>
          </motion.p>
          <motion.button
            className="px-6 py-3 backdrop-blur-sm border border-white/30 bg-emerald-400/20 text-white mx-auto text-center rounded-full relative mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ letterSpacing: "0.1em" }}>StuVibe</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </motion.button>
        </motion.div>
      </div>
    </BackgroundGradientAnimation>
  );
}
