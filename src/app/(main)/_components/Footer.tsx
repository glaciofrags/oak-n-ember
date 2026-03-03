import {
  Compass,
  MapPin,
  Instagram,
  Twitter,
  Send,
  Youtube,
  Cloudy,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#6B3F1D] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Oak & Ember</h3>
          <p className="text-sm text-[#E7DED5]">
            Where rich aromas, warm wood tones, and slow moments come together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 flex gap-1.5 items-center">
            <Compass className="w-4 h-4" /> Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-semibold mb-3 flex gap-1.5 items-center">
            <MapPin className="w-4 h-4" /> Visit Us
          </h4>
          <p className="text-sm text-[#E7DED5]">
            123 Oak Street<br />
            Mon – Sun • 8am – 8pm
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-[#FAF7F2] hover:text-[#E7DED5] transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>

            <Link
              href="#"
              aria-label="X"
              className="text-[#FAF7F2] hover:text-[#E7DED5] transition"
            >
              <Twitter className="w-5 h-5" />
            </Link>

            <Link
              href="#"
              aria-label="Bluesky"
              className="text-[#FAF7F2] hover:text-[#E7DED5] transition"
            >
              {/* Bluesky icon workaround */}
              <Cloudy />
            </Link>

            <Link
              href="#"
              aria-label="Telegram"
              className="text-[#FAF7F2] hover:text-[#E7DED5] transition"
            >
              <Send className="w-5 h-5" />
            </Link>

            <Link
              href="#"
              aria-label="YouTube"
              className="text-[#FAF7F2] hover:text-[#E7DED5] transition"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#7A4A28] py-4 text-center text-xs text-[#E7DED5]">
        © {new Date().getFullYear()} Oak & Ember. All rights reserved.
      </div>
    </footer>
  )
}
