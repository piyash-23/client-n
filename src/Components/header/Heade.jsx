import React from "react";
import { motion } from "framer-motion";

const Heade = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-50 to-teal-50 py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Let cleanliness start from me
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Empowering movements, organizations, and individuals to raise
              their voices, take meaningful action, and stand united in the
              fight for justice, equality, and lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition">
                Join The Movement
              </button>
              <button className="border border-gray-800 text-gray-800 px-8 py-3 rounded hover:bg-gray-800 hover:text-white transition">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
              alt="Community cleanup"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Heade;
