'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function LogisticsPage() {
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
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/img/sea.jpg"
            alt="Logistics"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enabling Africa to Grow Safely and Efficiently
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover how our specialist understand, act and solve Logistics challenges quickly and efficiently in Africa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Customs Clearance */}
            <motion.div
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-900 group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/img/log1.jpg"
                  alt="Customs Clearance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Customs Clearance</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We deliver the market's most efficient and comprehensive customs clearance solutions.
                </p>
              </div>
            </motion.div>

            {/* Freight Solutions */}
            <motion.div
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-900 group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/img/gui.webp"
                  alt="Freight Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Freight Solutions</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We offer a full range of road freight services covering East and Central Africa.
                </p>
              </div>
            </motion.div>

            {/* Specialized Cargo */}
            <motion.div
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-900 group"
              variants={cardVariants}
              whileHover={{ y: -2 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/img/log3.jpg"
                  alt="Specialized Cargo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Specialized Cargo</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We excel in handling oversized, overweight, and hazardous cargo with unmatched precision, expertise, and care.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Purpose</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Olympus Support Solution, we are committed to transforming logistics operations across Africa. Our purpose-driven approach ensures that every client receives exceptional service, expert guidance, and innovative solutions that drive their business forward.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Leading Expertise */}
            <motion.div
              className="flex gap-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Leading Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Work with experts who go further, no matter what.
                </p>
              </div>
            </motion.div>

            {/* Vast Network */}
            <motion.div
              className="flex gap-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vast Network</h3>
                <p className="text-gray-700 leading-relaxed">
                  We get you anywhere you need to go—even where others can't.
                </p>
              </div>
            </motion.div>

            {/* Tailored Solutions */}
            <motion.div
              className="flex gap-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tailored Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Discover tailored solutions with integrated services and advanced technology.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Dangote */}
            <motion.div
              className="flex items-center justify-center h-32 w-full"
              variants={itemVariants}
            >
              <Image
                src="/img/dangote.png"
                alt="Dangote"
                width={180}
                height={90}
                className="object-contain max-h-24"
              />
            </motion.div>

            {/* Equinor */}
            <motion.div
              className="flex items-center justify-center h-32 w-full"
              variants={itemVariants}
            >
              <Image
                src="/img/equinor.png"
                alt="Equinor"
                width={180}
                height={90}
                className="object-contain max-h-24"
              />
            </motion.div>

            {/* HG */}
            <motion.div
              className="flex items-center justify-center h-32 w-full"
              variants={itemVariants}
            >
              <Image
                src="/img/hg.png"
                alt="HG"
                width={180}
                height={90}
                className="object-contain max-h-24"
              />
            </motion.div>

            {/* US Embassy */}
            <motion.div
              className="flex items-center justify-center h-32 w-full"
              variants={itemVariants}
            >
              <Image
                src="/img/us.png"
                alt="United States Embassy"
                width={180}
                height={90}
                className="object-contain max-h-24"
              />
            </motion.div>

            {/* WFP */}
            <motion.div
              className="flex items-center justify-center h-32 w-full"
              variants={itemVariants}
            >
              <Image
                src="/img/wfp.png"
                alt="World Food Programme"
                width={180}
                height={90}
                className="object-contain max-h-24"
              />
            </motion.div>

            {/* SEM */}
            <motion.div
              className="flex items-center justify-center h-32 w-full"
              variants={itemVariants}
            >
              <Image
                src="/img/sem.png"
                alt="SEM"
                width={180}
                height={90}
                className="object-contain max-h-24"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
