import styles from "../style";
import LetsConnect from "./LetsConnect";
import { aboutMe, resumeLink } from "../constants";
import { profilePic } from "../assets";
import { AiFillFilePdf, AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col-reverse ${styles.paddingY} items-center min-h-[80vh]`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[10]`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]"
          >
            Hi there!
            <br className="sm:block hidden" /> I am
          </motion.h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full"
        >
          <span className="text-gradient">{aboutMe.name}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          {aboutMe.intro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button
            id="hero-view-projects-btn"
            onClick={() => scrollToSection("projects")}
            className="font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] px-8 py-4 hover:opacity-80 transition-opacity shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            View Projects
          </button>
          <a
            id="hero-resume-btn"
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="font-poppins font-medium text-[16px] text-white border border-teal-400 rounded-[10px] px-8 py-4 hover:bg-teal-400 hover:text-primary transition-all active:scale-95"
          >
            <span className="flex items-center gap-2">
              <AiFillFilePdf /> Download Resume
            </span>
          </a>
          <button
            id="hero-contact-btn"
            onClick={() => scrollToSection("contactMe")}
            className="font-poppins font-medium text-[16px] text-white border border-gray-500 rounded-[10px] px-8 py-4 hover:border-teal-400 hover:text-teal-400 transition-all active:scale-95"
          >
            <span className="flex items-center gap-2">
              <AiFillMail /> Contact Me
            </span>
          </button>
        </motion.div>
      </div>

      {/* Hero Image Container */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:min-w-[50%] w-full h-full`}
      >
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-[5] w-full h-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-[650px] flex justify-center items-center">
            
            {/* The Image with advanced masking and zoom to remove background box */}
            <div className="relative w-[90%] md:w-full overflow-hidden flex justify-center items-end h-[500px] md:h-[650px]">
                <img 
                  src={profilePic} 
                  alt={aboutMe.name} 
                  className="w-full h-full object-contain relative z-[5] scale-[1.6] translate-y-[5%]"
                  style={{
                    // Aggressive masking to isolate the person and fade the white background
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 65%)',
                    maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 65%)',
                  }}
                />
            </div>

            {/* Premium Glow & Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-teal-400/20 rounded-full blur-[120px] -z-[1]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[80px] -z-[2]"></div>
          </div>
        </motion.div>
        
        {/* Decorative Gradients */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-20" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-20 white__gradient opacity-10" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-10 bottom-10 blue__gradient opacity-30" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mb-10`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
