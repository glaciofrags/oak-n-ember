"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  MapPin,
  Phone,
  Mail,
  Timer,
  Calendar,
  TimerReset,
  Mic,
  Waves,
  AudioWaveform,
} from "lucide-react"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed")

      toast.success("Message sent successfully ☕")
      form.reset()
    } catch {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 sm:px-6 py-16 sm:py-20">
      {/* Listening Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-10"
      >

        {/* Logo */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-300 shadow-sm bg-white">
          <Image
            src="/service/MultiService.png" // ← replace with your logo path
            alt="MultiService Logo"
            className="w-full h-full object-cover"
            height={56}
            width={56}
          />
        </div>

        {/* Voice Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-sm border border-stone-200">
          <AudioWaveform className="w-4 h-4 text-[#6B3F1D]" />
          <span className="text-sm font-medium text-[#4B3A2A]">
            MultiService is listening you perfectly
          </span>
        </div>
      </motion.div>



     {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6B3F1D]">
          Contact Us
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#4B3A2A]">
          We’d love to hear from you. Send us a message anytime.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="border-none bg-white/80 backdrop-blur shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#6B3F1D]" />
                <p className="text-[#4B3A2A]">
                  123 Oak Street<br />Downtown District
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#6B3F1D]" />
                <p className="text-[#4B3A2A]">+91 8679352656</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#6B3F1D]" />
                <p className="text-[#4B3A2A]">hello.oakandember@gmail.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-white/80 backdrop-blur shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-[#6B3F1D] mb-2 flex gap-2">
                <Timer /> Opening Hours
              </h3>
              <p className="text-[#4B3A2A]">
                Mon – Sun
              </p>
              <p className="text-[#4B3A2A]">
                8:00 AM – 8:00 PM
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-none bg-white/80 backdrop-blur shadow-md">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="border-stone-300 focus-visible:ring-2 focus-visible:ring-[#6B3F1D]"
                />

                <Input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Mobile Number"
                  className="border-stone-300 focus-visible:ring-2 focus-visible:ring-[#6B3F1D]"
                />

                <Input
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  className="border-stone-300 focus-visible:ring-2 focus-visible:ring-[#6B3F1D]"
                />

                <Textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="
                    min-h-[140px]
                    max-h-[220px]
                    resize-none
                    overflow-y-auto
                    scroll-smooth
                    rounded-xl
                    border-stone-300
                    focus-visible:ring-2
                    focus-visible:ring-[#6B3F1D]
                    scrollbar-thin
                    scrollbar-thumb-stone-300
                    scrollbar-track-transparent
                  "
                />

                <Button
                  type="submit"
                  className="w-full bg-[#6B3F1D] hover:bg-[#5A3317] text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
