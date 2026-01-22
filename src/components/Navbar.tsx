'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/img/Slg .png"
                alt="OSSL Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="text-xl font-semibold text-black">OSSL</span>
            </Link>
          </div>

          {/* Navigation Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {/* Solutions with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setIsSolutionsOpen(false);
                }, 1000);
              }}
            >
              <button
                className="flex items-center space-x-1 text-black hover:text-blue-600 transition-colors"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <span>Solutions</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/solutions/fuel"
                    className="block px-4 py-2 text-black hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                      }
                      setIsSolutionsOpen(false);
                    }}
                  >
                    Fuel
                  </Link>
                  <Link
                    href="/solutions/logistics"
                    className="block px-4 py-2 text-black hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                      }
                      setIsSolutionsOpen(false);
                    }}
                  >
                    Logistics
                  </Link>
                  <Link
                    href="/solutions/insurance"
                    className="block px-4 py-2 text-black hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                      }
                      setIsSolutionsOpen(false);
                    }}
                  >
                    Insurance
                  </Link>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className="text-black hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-black hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              <button
                className="text-left px-4 py-2 text-black hover:bg-gray-50 rounded flex items-center justify-between"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <span>Solutions</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isSolutionsOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/solutions/fuel"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                    onClick={() => {
                      setIsSolutionsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Fuel
                  </Link>
                  <Link
                    href="/solutions/logistics"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                    onClick={() => {
                      setIsSolutionsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logistics
                  </Link>
                  <Link
                    href="/solutions/insurance"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                    onClick={() => {
                      setIsSolutionsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Insurance
                  </Link>
                </div>
              )}
              <Link
                href="/about"
                className="px-4 py-2 text-black hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-black hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
