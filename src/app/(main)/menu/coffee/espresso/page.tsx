"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function EspressoPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm text-[#6B3F1D] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Menu
        </Link>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Image */}
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/menu/coffee/espresso/espresso_coffee.jpg"
              alt="Espresso"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div>
            <Badge className="mb-3 bg-[#8A9A5B] text-white">
              Signature
            </Badge>

            <h1 className="text-4xl font-bold text-[#6B3F1D]">
              Espresso
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? "fill-[#C28A2C] text-[#C28A2C]"
                      : "text-stone-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-[#4B3A2A]">
                4.6 / 5
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-[#4B3A2A] leading-relaxed">
              A bold and concentrated shot crafted from freshly
              ground beans. Our espresso delivers rich crema,
              deep chocolate notes, and a smooth, lingering finish.
            </p>

            {/* Details */}
            <ul className="mt-6 space-y-2 text-sm text-[#4B3A2A]">
              <li>• Single origin beans</li>
              <li>• Brewed at 93°C</li>
              <li>• Served without milk</li>
            </ul>

            {/* Price + CTA */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-3xl font-bold text-[#C28A2C]">
                $3.50
              </span>

              <Button className="bg-[#6B3F1D] hover:bg-[#5A3317] text-white px-8 hover:bg-[#FAF7F2] hover:text-[#6B3F1D] hover:border-[#5A3317] hover:border rounded-xl">
                Get Now!
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
