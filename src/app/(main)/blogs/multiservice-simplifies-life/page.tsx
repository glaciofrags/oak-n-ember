"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

/* ---------- Animation ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        {/* Back Button */}
        <Link href="/blogs">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Blogs
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-6">
          <Badge className="bg-[#8A9A5B] text-white mb-3">
            MultiService
          </Badge>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
            How MultiService Simplifies Daily Life
          </h1>

          <div className="flex items-center gap-2 mt-3 text-sm text-[#4B3A2A]">
            <Calendar className="w-4 h-4" />
            Jan 18, 2026
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 shadow-md">
          <Image
            src="/blogs/blog-1.jpg"
            alt="How MultiService Simplifies Daily Life"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-[#4B3A2A] leading-relaxed">
          <p>
            In today’s fast-paced world, managing multiple services can feel
            overwhelming. From booking appointments to handling daily needs,
            everything takes time and effort.
          </p>

          <p>
            <strong className="text-[#6B3F1D]">MultiService</strong> was created
            with one simple idea: bring everything together in one place.
            Instead of juggling apps, calls, and platforms, users can rely on a
            single smart solution.
          </p>

          <h2 className="text-xl font-semibold text-[#6B3F1D]">
            One Platform, Many Solutions
          </h2>

          <p>
            Whether it’s customer support, service booking, or real-time
            communication, MultiService adapts to your needs. Our goal is to
            remove friction and let you focus on what truly matters.
          </p>

          <h2 className="text-xl font-semibold text-[#6B3F1D]">
            Listening Comes First
          </h2>

          <p>
            We believe the best services start with listening. That’s why
            MultiService emphasizes voice, feedback, and human-centered design.
            When users feel heard, better experiences follow.
          </p>

          <p>
            As technology evolves, MultiService continues to grow—always
            focused on simplicity, clarity, and trust.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 border-t pt-6 flex justify-between items-center">
          <span className="text-sm text-[#4B3A2A]">
            Thanks for reading ✨
          </span>

          <Link href="/contact">
            <Button className="bg-[#6B3F1D] hover:bg-[#5A3317] text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.article>
    </main>
  )
}
