import { motion } from "framer-motion";
import styles from '@/app/style.module.css';


const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const InvitationSection = () => {
  return (
    <motion.div
      className={styles.invitationContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.p
        className={`${styles.invitationText} ${styles.glow}`}
        variants={textVariants}
      >
        Dengan mengharap ridho Allah Subhanahu wa Ta'ala, kami mengundang
        Bapak/Ibu/Saudara/i untuk hadir dalam:
      </motion.p>
    </motion.div>
  );
};

export default InvitationSection;