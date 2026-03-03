"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"

/* ---------- Animation ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function MultiServiceLaunchPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        {/* Back */}
        <Link href="/events">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Events
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-6">
          <Badge className="bg-[#8A9A5B] text-white mb-3">
            Featured Event
          </Badge>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
            MultiService Launch Event
          </h1>

          <div className="mt-4 space-y-2 text-sm text-[#4B3A2A]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 10, 2026
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10:00 AM – 2:00 PM
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Downtown Convention Center
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-md mb-8">
          <Image
            src="/events/event-1.jpg"
            alt="MultiService Launch Event"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-[#4B3A2A] leading-relaxed">
          <p>
            We’re excited to officially launch <strong>MultiService</strong>,
            a smart platform designed to simplify everyday services and
            communication.
          </p>

          <p>
            This launch event brings together customers, partners, and
            innovators to experience MultiService firsthand — from live demos
            to interactive sessions.
          </p>

          <h2 className="text-xl font-semibold text-[#6B3F1D]">
            What to Expect
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Live MultiService platform demonstration</li>
            <li>Voice-enabled service walkthrough</li>
            <li>Networking with industry professionals</li>
            <li>Q&A session with the MultiService team</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#6B3F1D]">
            Who Should Attend
          </h2>

          <p>
            Whether you’re a business owner, service provider, or curious
            customer, this event is for anyone interested in smarter, more
            connected services.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-[#4B3A2A]">
            Seats are limited — reserve yours today.
          </span>

          <Link href="/contact">
            <Button className="bg-[#6B3F1D] hover:bg-[#5A3317] text-white">
              Register Now
            </Button>
          </Link>
        </div>
      </motion.article>
    </main>
  )
}
