'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
        duration: 0.6
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
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
          <motion.div
            className="text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Olympus Support Solution Limited
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Delivering Integrated Business Support Services Across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Olympus Support Solution Limited is a professional business support services company delivering integrated solutions in fuel supply, logistics, and insurance brokerage. We support organizations across multiple sectors by ensuring operational continuity, efficiency, and effective risk management.
              </p>
              <p>
                Our services are designed to meet structured business requirements, including reliable fuel supply for operational assets, coordinated logistics for the movement of goods, and independent insurance advisory services that enable informed risk-transfer decisions.
              </p>
              <p>
                We work closely with trusted partners and insurance providers to deliver compliant, dependable, and cost-effective solutions. Through a client-centered and compliance-driven approach, Olympus Support Solution enables organizations to focus on their strategic objectives while we manage critical operational and risk-related functions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Areas of Capability
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              We specialize in three core areas that work together to provide comprehensive business support
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Fuel Supply */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-900 transition-colors">
                Fuel Supply
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                We provide consistent and reliable fuel supply solutions to support uninterrupted operations. Our services include fuel supply for vehicles, machinery, and operations with scheduled and on-demand delivery options.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Petroleum, Gas, Oil, and LPG supply</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Safe handling and transportation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Compliance with regulatory standards</span>
                </li>
              </ul>
            </motion.div>

            {/* Logistics Services */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-900 transition-colors">
                Logistics Services
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Our logistics solutions ensure efficient movement and management of goods across East and Central Africa. We deliver comprehensive customs clearance, freight solutions, and specialized cargo handling.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Customs clearance solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Road freight services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Specialized cargo handling</span>
                </li>
              </ul>
            </motion.div>

            {/* Insurance Brokerage */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-900 group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-900 transition-colors">
                Insurance Brokerage
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                As independent insurance brokers, we act in the best interest of our clients by providing professional insurance advisory services across diverse industries and risk categories.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Risk assessment and advisory</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Industry-specific expertise</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Approach
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                At Olympus Support Solution Limited, we believe in a client-centered approach that prioritizes understanding your unique business needs. Our team of experienced professionals works closely with you to develop tailored solutions that align with your operational requirements and strategic goals.
              </p>
              <p>
                We maintain the highest standards of quality, safety, and compliance across all our services. Whether it's ensuring timely fuel delivery, managing complex logistics operations, or securing appropriate insurance coverage, we handle every aspect with professionalism and care.
              </p>
              <p>
                Our commitment to excellence extends beyond service delivery. We continuously invest in building strong partnerships, staying updated with industry best practices, and leveraging technology to enhance our service capabilities. This enables us to provide reliable, efficient, and cost-effective solutions that support your business growth and success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
