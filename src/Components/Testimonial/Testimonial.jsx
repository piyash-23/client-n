import React from "react";
import { motion } from "framer-motion";
const Testimonial = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Volunteer",
      text: "Being part of this movement has completely transformed how I see my role in the community. Every event brings new hope.",
    },
    {
      name: "Michael Chen",
      role: "Event Organizer",
      text: "The support and passion from everyone involved is incredible. Together we are making real, tangible differences.",
    },
    {
      name: "Emma Williams",
      role: "Donor",
      text: "Knowing my contributions directly impact positive change motivates me to stay involved and give more.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Voices of Change
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our community members
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="text-4xl text-teal-500 mb-4">"</div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full mr-4" />
                <div>
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
