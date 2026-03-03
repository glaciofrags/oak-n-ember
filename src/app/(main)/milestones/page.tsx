"use client"

import { motion } from "framer-motion"
import {
  Star,
  Users,
  Coffee,
  Rocket,
  CalendarCheck,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

/* ---------- Milestones Data ---------- */
const milestones = [
  {
    id: 1,
    title: "Oak & Ember Founded",
    description:
      "Oak & Ember began with a simple idea: create a warm place for meaningful moments.",
    date: "Jan 2024",
    icon: Rocket,
    tag: "Beginning",
  },
  {
    id: 2,
    title: "First Menu Launched",
    description:
      "Our handcrafted coffee menu officially launched with 12 signature drinks.",
    date: "Mar 2024",
    icon: Coffee,
    tag: "Menu",
  },
  {
    id: 3,
    title: "10,000 Happy Customers",
    description:
      "We proudly served over 10,000 customers in our first year.",
    date: "Aug 2024",
    icon: Users,
    tag: "Community",
  },
  {
    id: 4,
    title: "Seasonal Menu Expansion",
    description:
      "Added seasonal drinks and limited-edition pastries to the menu.",
    date: "Nov 2024",
    icon: Star,
    tag: "Update",
  },
  {
    id: 5,
    title: "25K Social Followers",
    description:
      "Reached 25,000 followers across our social platforms.",
    date: "Feb 2025",
    icon: Users,
    tag: "Social",
  },
  {
    id: 6,
    title: "MultiService Integration",
    description:
      "Introduced MultiService voice ordering and smart customer support.",
    date: "Jan 2026",
    icon: CalendarCheck,
    tag: "Technology",
  },
]

/* ---------- Page ---------- */
export default function MilestonesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
          Our Milestones
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#4B3A2A]">
          A journey of growth, community, and meaningful moments.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {milestones.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div key={item.id} variants={fadeUp}>
              <Card className="border-none bg-white/80 backdrop-blur shadow-md">
                <CardContent className="p-6 flex gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#6B3F1D]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#6B3F1D]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-[#6B3F1D]">
                        {item.title}
                      </h3>
                      <Badge className="bg-[#8A9A5B] text-white">
                        {item.tag}
                      </Badge>
                    </div>

                    <p className="text-sm text-[#4B3A2A] mb-2">
                      {item.description}
                    </p>

                    <span className="text-xs text-[#4B3A2A]">
                      {item.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </main>
  )
}
