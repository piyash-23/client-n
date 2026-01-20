import React from "react";
import { motion } from "framer-motion";

const NewsLetter = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be part of the change!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get activism news and community updates sent to you regularly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetter;
