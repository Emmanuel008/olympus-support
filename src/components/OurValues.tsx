'use client';

import { motion } from 'framer-motion';

export default function OurValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-blue-600"></div>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Reliability */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
            variants={cardVariants}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Reliability</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We deliver consistent, dependable services that keep our clients' operations running without disruption.
            </p>
          </motion.div>

          {/* Client Commitment */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
            variants={cardVariants}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Client Commitment</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We focus on understanding client needs and providing tailored solutions that create real business value.
            </p>
          </motion.div>

          {/* Professional Excellence */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
            variants={cardVariants}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Professional Excellence</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We uphold high standards of quality, safety, and compliance to ensure trusted and effective service delivery.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
