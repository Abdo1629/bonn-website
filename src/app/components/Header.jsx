"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const factories = [
  { name: "SkinCare", color: "#FFC0CB" },
  { name: "HairCare", color: "#FFD700" },
  { name: "BodyCare", color: "#ADFF2F" },
  { name: "Men's Line", color: "#87CEEB" },
  { name: "Medical", color: "#FF6347" },
  { name: "Luxury", color: "#D8BFD8" },
];

export default function FactoryHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-lg z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0056D2]">BONN</Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-4">
          {factories.map((factory) => (
            <Link
              key={factory.name}
              href={`/brands/${factory.name.toLowerCase()}`}
              className="px-4 py-2 rounded-md text-white font-medium shadow transition"
              style={{ backgroundColor: factory.color }}
            >
              {factory.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-grey rounded-md"
        >
          <HiOutlineMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu Content */}
            <motion.div
              className="fixed top-[70px] bg-white right-0 left-0 rounded-xl shadow-xl p-6 z-50"
              initial={{ y: -500, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -500, opacity: 0.8,}}
              transition={{ duration: 0.40, ease: "easeInOut"}}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {factories.map((factory) => (
                  <Link
                    key={factory.name}
                    href={`/factory/${factory.name.toLowerCase()}`}
                    className="block text-center py-3 rounded-lg text-white font-semibold hover:scale-105 transition shadow-md"
                    style={{ backgroundColor: factory.color }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {factory.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
