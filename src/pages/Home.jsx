import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e8f3ff] flex flex-col items-center justify-center text-center px-6">

      {/* Elegant Pleated Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-[120%] h-[50%] bg-gradient-to-br from-white/60 to-[#dbeaff] rounded-b-[50%] blur-2xl"
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[110%] h-[45%] bg-gradient-to-tr from-[#f5faff] to-[#d0e3ff] rounded-t-[50%] blur-2xl"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Floating Soft Circles */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-white/30 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.div
        className="absolute bottom-24 left-10 w-52 h-52 bg-white/20 rounded-full blur-xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Hero Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-[#1a3353] drop-shadow-sm z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Your Smart Invoice Manager
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-[#3c5777] text-lg md:text-xl mt-3 w-full md:w-2/3 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        Create, track, and manage invoices with ease in a clean, modern dashboard.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-5 mt-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Link
          to="/login"
          className="px-7 py-3 bg-white text-[#1a3353] font-semibold rounded-xl shadow-md hover:bg-[#f2f8ff] transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-7 py-3 bg-[#1a72ff] text-white font-semibold rounded-xl shadow-lg hover:bg-[#005ae0] transition"
        >
          Sign Up
        </Link>
      </motion.div>
    </div>
  );
}
