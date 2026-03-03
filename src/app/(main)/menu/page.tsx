"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import menuData from "@/data/menu/menuItems.json"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Star } from "lucide-react"

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

/* ---------- Rating Component ---------- */
function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)

  return (
    <div className="flex items-center gap-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < fullStars
              ? "fill-[#C28A2C] text-[#C28A2C]"
              : "text-stone-300"
          }`}
        />
      ))}
      <span className="ml-1 text-xs text-[#4B3A2A]">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

/* ---------- Page ---------- */
export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
          Our Menu
        </h1>
        <p className="mt-3 sm:mt-4 text-[#4B3A2A] text-base sm:text-lg">
          Thoughtfully crafted drinks and seasonal bites.
        </p>
      </motion.div>

      {/* Tabs */}
      <Tabs
        defaultValue={menuData.categories[0].id}
        className="max-w-5xl mx-auto"
      >
        <TabsList className="flex sm:grid sm:grid-cols-3 gap-2 mb-8 bg-stone-200 sm:overflow-visible">
          {menuData.categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="whitespace-nowrap"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Category Content */}
        {menuData.categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
            >
              {cat.items.map((item) => (
                <motion.div key={item.id} variants={fadeUp}>
                  <Card className="border-none shadow-md bg-white/80 backdrop-blur hover:shadow-lg transition">
                    <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {/* Image */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-semibold text-[#6B3F1D]">
                          {item.name}
                        </h3>

                        <p className="text-sm text-[#4B3A2A]">
                          {item.description}
                        </p>

                        <RatingStars rating={item.rating} />

                        {item.tag && (
                          <Badge className="mt-1 bg-[#8A9A5B] text-white">
                            {item.tag}
                          </Badge>
                        )}
                      </div>

                      {/* Price + View */}
                      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 w-full sm:w-auto">
                        <span className="text-[#C28A2C] font-semibold">
                          ${item.price.toFixed(2)}
                        </span>

                        <Link href={item.route} className="w-full sm:w-auto">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full sm:w-auto"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  )
}
