'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function FuelPage() {
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
        <Image
          src="/img/tanker.jpg"
          alt="Oil Tanker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fuel Supply Solutions
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl">
                We are continuously expanding and enhancing our business asset base and our business. Our goal and aim is to become the sole distributors for a specialized lubricant brand which will solidify our position as one of Africa's leading supplier of oil, gas & petroleum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <motion.div
            className="space-y-6 text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg">
              At Olympus Support Solution, we deliver dependable fuel supply solutions that keep your operations running without interruption. We ensure timely delivery of high-quality fuel for vehicles, fleets, generators, construction equipment, and industrial machinery—exactly when and where you need it.
            </p>
            <p className="text-lg">
              Our flexible scheduled and on-demand fuel delivery reduces downtime, improves efficiency, and helps you control operational costs. With a strong focus on safety, reliability, and compliance, we handle every stage of fuel supply with professionalism and care.
            </p>
            <p className="text-lg">
              By choosing Olympus Support Solution, you gain a trusted partner committed to powering your operations, improving productivity, and supporting your business continuity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Petroleum */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Petroleum</h3>
              <p className="text-sm text-gray-600">High-quality refined petroleum products for industrial and commercial use</p>
            </motion.div>

            {/* Gas */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gas</h3>
              <p className="text-sm text-gray-600">Reliable natural gas supply for power generation and industrial applications</p>
            </motion.div>

            {/* Oil */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oil</h3>
              <p className="text-sm text-gray-600">Premium crude oil and refined oil products for various industries</p>
            </motion.div>

            {/* LPG */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">LPG</h3>
              <p className="text-sm text-gray-600">Liquefied Petroleum Gas for cooking, heating, and industrial use</p>
            </motion.div>

            {/* Cereals */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cereals</h3>
              <p className="text-sm text-gray-600">Quality grain products and cereals for food and agricultural needs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
