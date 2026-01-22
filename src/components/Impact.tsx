'use client';

import { motion } from 'framer-motion';

export default function Impact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring' as const,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Abstract Dots Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stat 1 */}
          <motion.div
            className="text-center"
            variants={statVariants}
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">
              20+
            </div>
            <div className="text-sm md:text-base text-blue-900 font-medium">
              Our clients
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="text-center"
            variants={statVariants}
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">
              20+
            </div>
            <div className="text-sm md:text-base text-blue-900 font-medium">
              Years of experience
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="text-center"
            variants={statVariants}
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">
              13+
            </div>
            <div className="text-sm md:text-base text-blue-900 font-medium">
              Countries covered
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="text-center"
            variants={statVariants}
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">
              15+
            </div>
            <div className="text-sm md:text-base text-blue-900 font-medium">
              Sectors served
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
