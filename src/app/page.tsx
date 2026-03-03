"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <Image
          src="/images/oak-n-ember-logo-without-bg.png"
          alt="Oak & Ember Café Logo"
          width={220}
          height={220}
          priority
        />
      </motion.div>

      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-xl border-none bg-white/80 backdrop-blur">
          <CardContent className="p-8 text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold tracking-tight text-[#6B3F1D]"
            >
              Welcome to Oak & Ember
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#4B3A2A] text-lg leading-relaxed"
            >
              Where rich aromas, warm wood tones, and slow moments come together.
              Hand-crafted coffee, thoughtfully brewed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/menu" className="inline-block">
                  <Button className="bg-[#6B3F1D] hover:bg-[#5A3317] text-white px-8">
                    View Menu
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  className="border-[#C28A2C] text-[#C28A2C] hover:bg-[#C28A2C] hover:text-white px-8"
                >
                  Visit Us
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-10 text-sm text-[#8A9A5B]"
      >
        Crafted with care • Brewed with soul
      </motion.p>
    </main>
  )
}
