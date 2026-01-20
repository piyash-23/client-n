import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 text-lg">
            Working together for a better tomorrow
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-lg transition"
            >
              <div className="text-gray-400 font-bold text-xl">
                PARTNER {idx}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
