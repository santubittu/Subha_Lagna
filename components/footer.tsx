import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-amber-400 text-transparent bg-clip-text">
              Subha Lagna
            </h3>
            <p className="text-gray-400 mb-4">
              Professional wedding photography and videography services in Siliguri and across North Bengal.
            </p>
            <p className="text-gray-400 mb-4">
              <span className="font-medium text-white">Proprietor:</span> Suro Sarkar
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Photography</li>
              <li className="text-gray-400">Pre-Wedding Shoots</li>
              <li className="text-gray-400">Engagement Photography</li>
              <li className="text-gray-400">Baby Shower Photography</li>
              <li className="text-gray-400">Birthday Photography</li>
              <li className="text-gray-400">Wedding Videography</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <a href="tel:+919641271657" className="text-gray-400 hover:text-white transition-colors">
                  +91-9641271657
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@subhalagna.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@subhalagna.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <address className="text-gray-400 not-italic">
                  Ward No. 39, Shreema Sarani,
                  <br />
                  Haidar Para, Siliguri,
                  <br />
                  West Bengal 734006
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Subha Lagna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

