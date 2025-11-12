import React from "react";
import { motion } from "motion/react";
const Heade = () => {
  return (
    <>
      <div className="flex mt-6 flex-wrap lg:flex-nowrap md:h-[80vh] lg:h-[70vh] gap-3">
        <motion.div
          animate={{
            x: [-500, 0],
            y: [-300, 0],
          }}
          transition={{
            duration: 1,
          }}
          className="lefty flex justify-center items-center w-[95%] mx-auto"
        >
          <div>
            <h2 className="font-bold text-[40px] md:text-[50px] lg:text-[60px] text-[#2F4057] text-start">
              Let cleanliness <br /> start from me
            </h2>
            <p className="text-lg mt-8 mb-7">
              Empowering movements, organizations, and individuals to raise
              their voices, take meaningful action, and stand united in the
              fight for justice, equality, and lasting change.
            </p>
            <div>
              <button className="abs_btn mr-3">Join The Movement</button>
              <button className="learn">Learn More</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            x: [500, 0],
            y: [600, 0],
          }}
          transition={{
            duration: 1,
          }}
          className="righty w-[95%] mx-auto h-[50vh] md:h-[100%]"
        ></motion.div>
      </div>
    </>
  );
};

export default Heade;
