import React from "react";
import { motion } from "framer-motion";
import { Calendar, Heart, Megaphone, Trophy, Users } from "lucide-react";

const WayToCon = () => {
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

  const ways = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Volunteer Your Time",
      description:
        "Join our volunteers and help bring projects and events to fruition.",
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Support Donation",
      description:
        "Every contribution counts to raise fund projects and provides what you have them.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-500" />,
      title: "Share Awareness",
      description:
        "Share our initiatives, get involved, and spread awareness in our story.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Join Community",
      description:
        "Join some local programs and diverse workspace to empower communities.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      title: "Justice Advocate",
      description:
        "Use your voice to speak up and help drive positive change in your community.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: "Attend the Events",
      description:
        "Participate in our events to connect with others, and support initiatives.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Step Forward and Create Lasting Change
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {ways.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WayToCon;
