import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="public/Ravina.png"
              alt="Ravina Kumari"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
               Motivated Computer Science student with strong skills in full-stack development, algorithms, and cloud
technologies. Seeking a Software Development Engineer (SDE) role in a technology-driven organization to
contribute to building scalable and impactful software solutions while continuously enhancing my technical
expertise and problem-solving abilities.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              With extensive experience in modern web technologies and a strong
              foundation in both frontend and backend development, I help
              businesses build scalable solutions .
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
               
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
