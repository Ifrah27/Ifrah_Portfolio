import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(45, 212, 191)" }}
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-black-gradient-2 border border-gray-800 hover:border-teal-400 transition-all duration-300 group shadow-lg"
    >
      <span className="text-white text-[40px] group-hover:text-teal-400 transition-colors duration-300 mb-3">
        {React.createElement(icon)}
      </span>
      <p className="font-poppins text-dimWhite group-hover:text-white text-[14px] font-medium text-center">{name}</p>
    </motion.div>
  );
};

const SkillCategory = ({ title, items }) => {
  return (
    <div className="w-full mb-12">
      <div className="flex items-center mb-8">
        <h4 className="font-poppins font-semibold text-[24px] text-white leading-[32px] mr-4 whitespace-nowrap">
          {title}
        </h4>
        <div className="h-[1px] w-full bg-gradient-to-r from-teal-400 to-transparent opacity-30"></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 px-2">
        {items.map((item) => (
          <SkillIcon key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="py-20 flex flex-col items-center w-full max-w-[1280px] mx-auto px-6 sm:px-16">
      <div className="w-full text-center mb-16">
        <h2 className="font-poppins font-semibold text-[45px] sm:text-[55px] text-white leading-[1.2]">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] max-w-[600px] mx-auto mt-4">
          A comprehensive overview of my technical expertise and the tools I use to build intelligent systems.
        </p>
      </div>

      <div className="w-full">
        {skills.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default SkillsAndExperience;
