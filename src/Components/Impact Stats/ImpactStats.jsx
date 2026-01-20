import React from "react";
import { motion } from "framer-motion";

const ImpactStats = () => {
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

  const stats = [
    { number: "50K+", label: "Active Members" },
    { number: "200+", label: "Events Hosted" },
    { number: "100+", label: "Cities Reached" },
    { number: "$2M+", label: "Funds Raised" },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
