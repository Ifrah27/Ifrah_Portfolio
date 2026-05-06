import styles from "../style";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex ${styles.flexCenter} bg-primary`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-20 h-20 border-4 border-teal-200 border-t-transparent rounded-full mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h1 
          className="font-poppins font-bold text-4xl text-white tracking-widest uppercase"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Ifrah <span className="text-gradient">Qureshi</span>
        </motion.h1>
        <motion.div 
          className="h-1 bg-gradient-to-r from-teal-200 to-blue-500 mt-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default Loading;
