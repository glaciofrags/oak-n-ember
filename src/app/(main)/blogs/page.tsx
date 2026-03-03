"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

/* ---------- Sample Blog Data ---------- */
const blogs = [
  {
    id: 1,
    title: "How MultiService Simplifies Daily Life",
    excerpt:
      "Discover how MultiService brings multiple solutions together to save your time and effort.",
    image: "/blogs/blog-1.jpg",
    date: "Jan 18, 2026",
    tag: "MultiService",
    slug: "/blogs/multiservice-simplifies-life",
  },
  {
    id: 2,
    title: "Why Smart Services Are the Future",
    excerpt:
      "From automation to voice support, smart services are changing how we live and work.",
    image: "/blogs/blog-2.jpg",
    date: "Jan 25, 2026",
    tag: "Technology",
    slug: "/blogs/smart-services-future",
  },
  {
    id: 3,
    title: "Customer Experience Matters More Than Ever",
    excerpt:
      "Learn why listening to users is the key to building trust and long-term success.",
    image: "/blogs/blog-3.jpg",
    date: "Feb 2, 2026",
    tag: "Insights",
    slug: "/blogs/customer-experience",
  },
]

/* ---------- Page ---------- */
export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
          Our Blog
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#4B3A2A]">
          Stories, insights, and updates from MultiService.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs.map((blog) => (
          <motion.div key={blog.id} variants={fadeUp}>
            <Card className="border-none bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition h-full flex flex-col">
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-[#8A9A5B] text-white">
                    {blog.tag}
                  </Badge>

                  <div className="flex items-center gap-1 text-xs text-[#4B3A2A]">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#6B3F1D] mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-[#4B3A2A] flex-1">
                  {blog.excerpt}
                </p>

                {/* CTA */}
                <Link href={blog.slug} className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
