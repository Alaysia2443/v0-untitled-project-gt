"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface DemoBoxProps {
  className?: string
}

export default function DemoBox({ className = "" }: DemoBoxProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-gray-100 shadow-md transition-all duration-300 ${
        isHovered ? "shadow-lg" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="absolute left-0 top-0 h-16 w-16 bg-gradient-to-br from-green-500 to-green-600"></div>
      <div className="p-6 pt-12">
        <div className="font-serif text-xl font-medium">
          Demo
          <br />
          goes
          <br />
          here
        </div>
        <div className="mt-4 h-24 rounded-lg bg-gray-200/80"></div>
        <div className="mt-4 flex justify-end">
          <button className="rounded-full bg-green-600 px-4 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-300 hover:bg-green-700 group-hover:opacity-100">
            View Demo
          </button>
        </div>
      </div>
    </motion.div>
  )
}
