"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const images = [
  { src: "/gallery/coffee-1.jpg", alt: "Freshly brewed coffee" },
  { src: "/gallery/coffee-2.jpg", alt: "Latte art" },
  { src: "/gallery/coffee-3.jpg", alt: "Cozy café interior" },
  { src: "/gallery/coffee-4.jpg", alt: "Barista at work" },
  { src: "/gallery/coffee-5.jpg", alt: "Coffee beans" },
  { src: "/gallery/coffee-6.jpg", alt: "Desserts & coffee" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
          Our Gallery
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#4B3A2A]">
          A glimpse into our coffee, our space, and our moments.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="
          max-w-6xl mx-auto
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
        "
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card className="overflow-hidden border-none bg-white shadow-md rounded-2xl">
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
