'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function InsurancePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
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
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <Image
          src="/img/samole.jpg"
          alt="Insurance Broker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div
            className="text-center px-4 max-w-4xl relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why you need an Insurance Broker
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              An insurance broker plays an essential role in any successful risk management and in any economy in general. A good broker possesses expertise & skills and other resources, necessary to deal with specific risks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Left Side - Title and Description */}
            <motion.div variants={itemVariants}>
              <div className="text-left mb-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Our Services</h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl font-medium">
                  Our strength is in the personal service we provide and the detailed advice we offer to ensure clients are properly protected. Our services are a real alternative to impersonal global insurance companies.
                </p>
                <p className="text-lg md:text-xl font-medium">
                  We have a dedicated team of experienced, knowledgeable and understanding consultants who are happy to meet clients face to face, or arrange cover over the telephone.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="relative max-w-md mx-auto lg:mx-0 bg-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <Image
                    src="/img/icon.jpg"
                    alt="Insurance Services"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                    style={{
                      mixBlendMode: 'multiply',
                      filter: 'contrast(1.1) brightness(1.05)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Cover Cards Section */}
      <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We provide insurance cover for
          </motion.h3>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Motor Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Motor Insurance</h4>
            </motion.div>

            {/* Fire Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Fire Insurance</h4>
            </motion.div>

            {/* Medical Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Medical Insurance</h4>
            </motion.div>

            {/* Crop Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Crop Insurance</h4>
            </motion.div>

            {/* Aviation Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Aviation Insurance</h4>
            </motion.div>

            {/* Marine Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Marine Insurance</h4>
            </motion.div>

            {/* Life Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Life Insurance:</h4>
              <div className="text-left space-y-1 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Group Life</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Individual life insurance</span>
                </div>
              </div>
            </motion.div>

            {/* Travel Insurance */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Travel Insurance:</h4>
              <div className="text-left space-y-1 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Individual travel cover</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Student travel cover</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Group travel cover</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Multi destination travel cover</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Diverse Industry Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
              Recognising that expertise in certain fields can create advantages for our clients, OSSL Insurance Brokers has developed a deep understanding of the key industry sectors within the Tanzania economy. This has enabled us to offer high-quality, industry-specific insurance cover for business owners.
            </p>
            <p className="text-xl font-bold text-gray-900 mt-8">
              We provide various insurance covers in the following industries:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Accountants Practice */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Accountants Practice</h4>
            </motion.div>

            {/* Agriculture and Horticulture */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Agriculture and Horticulture</h4>
            </motion.div>

            {/* Energy */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Energy</h4>
            </motion.div>

            {/* Engineering */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Engineering</h4>
            </motion.div>

            {/* Consultancy */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Consultancy</h4>
            </motion.div>

            {/* Financial Services */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Financial Services</h4>
            </motion.div>


            {/* Government Contractors */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Government Contractors</h4>
            </motion.div>

            {/* Health Care */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Health Care</h4>
            </motion.div>

            {/* Marine */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Marine</h4>
            </motion.div>

            {/* Mining */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Mining</h4>
            </motion.div>


            {/* Real Estate */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Real Estate</h4>
            </motion.div>

            {/* Logistics */}
            <motion.div
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 text-center group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">Logistics</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
