import React from "react";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-10 rounded-2xl shadow-2xl max-w-3xl mx-auto mt-10 transform hover:scale-110 transition-transform duration-500"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-5xl font-extrabold text-center mb-6 tracking-wider text-yellow-300 drop-shadow-lg"
      >
        Hi Everyone! 👋
      </motion.h2>

      <p className="text-xl text-center leading-relaxed text-gray-200">
        I'm <span className="font-bold text-yellow-300">Mehdi Alam</span> — a developer from 
        <span className="font-bold text-yellow-300"> Delhi, India</span> with a passion for building impactful digital solutions.
      </p>

      <p className="mt-4 text-center text-gray-300 text-lg">
        I’ve worked as a <span className="font-bold text-yellow-300">Software Development Engineer</span> and 
        <span className="font-bold text-yellow-300"> Frontend Developer</span> at Finolity, where I developed full-stack web applications using React.js, Node.js, and WordPress.
      </p>

      <p className="mt-4 text-center text-gray-400 text-lg">
        I hold a <span className="font-bold text-yellow-300">B.Tech in Data Science</span> from MMDU, Haryana (GPA: 8.0/10). My journey is driven by learning, problem-solving, and real-world impact.
      </p>

      <p className="mt-4 text-center text-gray-400 text-lg">
        I'm currently open to new opportunities where I can grow, contribute, and innovate alongside passionate teams.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 text-center"
      >
        <h3 className="text-3xl font-semibold underline decoration-yellow-300 decoration-4 mb-6 drop-shadow-md">
          Apart from coding, I love:
        </h3>
        <ul className="mt-4 space-y-4 text-2xl font-medium">
          <li className="flex items-center justify-center gap-4 text-lg text-gray-200 hover:text-yellow-300 transition-colors duration-300">
            <ImPointRight className="text-yellow-300 text-3xl animate-bounce" /> 🎮 Immersing in Games
          </li>
          <li className="flex items-center justify-center gap-4 text-lg text-gray-200 hover:text-yellow-300 transition-colors duration-300">
            <ImPointRight className="text-yellow-300 text-3xl animate-bounce" /> 🌍 Adventuring the World
          </li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-10 text-center text-yellow-300 italic text-2xl font-semibold drop-shadow-md"
      >
        "Turning ideas into meaningful digital experiences."
      </motion.p>

      <footer className="mt-8 text-center text-md text-gray-300 font-light">
        — Mehdi
      </footer>
    </motion.div>
  );
};

export default AboutCard;
