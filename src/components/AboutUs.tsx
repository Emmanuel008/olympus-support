'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to Olympus Support Solution
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Olympus Support Solution provides integrated business support services designed to enhance operational efficiency, reduce risk, and support sustainable growth. We specialize in fuel supply, logistics services, and insurance brokerage, delivering reliable solutions that help businesses and individuals operate with confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our approach combines operational excellence with professional advisory services, ensuring our clients receive dependable support under one trusted partner.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/img/insu.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
