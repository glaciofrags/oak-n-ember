"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

/* ---------- Sample Event Data ---------- */
const events = [
  {
    id: 1,
    title: "MultiService Launch Event",
    description:
      "Join us for the official launch of MultiService and experience smart services in action.",
    image: "/events/event-1.jpg",
    date: "March 10, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Downtown Convention Center",
    tag: "Featured",
    slug: "/events/multiservice-launch",
  },
  {
    id: 2,
    title: "Customer Experience Workshop",
    description:
      "A hands-on workshop focused on listening, feedback, and service design.",
    image: "/events/event-2.jpg",
    date: "March 22, 2026",
    time: "1:00 PM – 4:00 PM",
    location: "Innovation Hub",
    tag: "Workshop",
    slug: "/events/customer-experience-workshop",
  },
  {
    id: 3,
    title: "Smart Services Meetup",
    description:
      "Connect with professionals and explore the future of smart, connected services.",
    image: "/events/event-3.jpg",
    date: "April 5, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "Tech Park Hall",
    tag: "Meetup",
    slug: "/events/smart-services-meetup",
  },
]

/* ---------- Page ---------- */
export default function EventPage() {
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
          Events
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#4B3A2A]">
          Discover upcoming events and experiences with MultiService.
        </p>
      </motion.div>

      {/* Event Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {events.map((event) => (
          <motion.div key={event.id} variants={fadeUp}>
            <Card className="border-none bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition h-full flex flex-col">
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-5 flex flex-col flex-1">
                {/* Tag */}
                <Badge className="w-fit mb-3 bg-[#8A9A5B] text-white">
                  {event.tag}
                </Badge>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#6B3F1D] mb-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4B3A2A] mb-4 flex-1">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="space-y-1 text-sm text-[#4B3A2A] mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>

                {/* CTA */}
                <Link href={event.slug}>
                  <Button
                    size="sm"
                    className="w-full bg-[#6B3F1D] hover:bg-[#5A3317] text-white"
                  >
                    View Details
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
