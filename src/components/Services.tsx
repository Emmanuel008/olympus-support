'use client';

import { motion } from 'framer-motion';

export default function Services() {
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
    <section className="pt-4 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600"></div>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Fuel Supply Card */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 group"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors text-center">Fuel Supply</h3>
            <p className="text-base text-gray-700 mb-3 leading-relaxed text-center">
              We provide consistent and reliable fuel supply solutions to support uninterrupted operations.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Fuel supply for vehicles, machinery, and operations</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Scheduled and on-demand fuel delivery</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Safe handling and transportation of fuel</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Compliance with regulatory and safety standards</span>
              </li>
            </ul>
          </motion.div>

          {/* Logistics Services Card */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 group"
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
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors text-center">Logistics Services</h3>
            <p className="text-base text-gray-700 mb-3 leading-relaxed text-center">
              Our logistics solutions are designed to ensure efficient movement and management of goods.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Transportation and distribution of goods</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">End-to-end logistics coordination and management</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Supply chain support and route optimization</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Timely and secure delivery solutions</span>
              </li>
            </ul>
          </motion.div>

          {/* Insurance Brokerage Card */}
          <motion.div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 group"
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors text-center">Insurance Brokerage</h3>
            <p className="text-base text-gray-700 mb-3 leading-relaxed text-center">
              As independent insurance brokers, we act in the best interest of our clients by providing professional insurance advisory services.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Risk assessment and advisory</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Market research across multiple insurance providers</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Policy selection and placement</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Policy administration and renewals</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Claims assistance and support</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
