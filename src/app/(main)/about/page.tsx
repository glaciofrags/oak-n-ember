"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
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
          About Oak & Ember
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#4B3A2A]">
          Rooted in warmth, crafted with intention, and brewed for slow moments.
        </p>
      </motion.div>

      {/* Story */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center mb-16 sm:mb-20"
      >
        <Image
          src="/cafeInterior/Oak-n-Ember-CafeInterior.jpg"
          alt="Oak & Ember Cafe Interior"
          width={600}
          height={400}
          className="rounded-2xl object-cover shadow-lg w-full h-auto"
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#6B3F1D] mb-3">
            Our Story
          </h2>
          <p className="text-sm sm:text-base text-[#4B3A2A] leading-relaxed">
            Oak & Ember was born from a love of quiet mornings, crackling
            roasters, and the ritual of a well-crafted cup.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#4B3A2A] leading-relaxed">
            Every bean is thoughtfully sourced, every drink carefully brewed,
            and every space designed to feel like home.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "Thoughtful Sourcing",
            text: "We partner with ethical farms and roasters who care deeply about quality and sustainability.",
          },
          {
            title: "Craft Over Speed",
            text: "Great coffee takes time. We focus on technique, balance, and consistency.",
          },
          {
            title: "Warm Spaces",
            text: "Our cafés are designed with wood tones, soft light, and calm energy.",
          },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <Card className="border-none bg-white/80 backdrop-blur shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#6B3F1D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B3A2A] leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
