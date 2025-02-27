"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Video, Heart, Baby, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Services() {
  const [selectedLocation, setSelectedLocation] = useState("")

  const services = [
    {
      icon: <Camera className="h-10 w-10 text-red-600" />,
      title: "Wedding Photography",
      description:
        "Capture every precious moment of your special day with our professional wedding photography services.",
    },
    {
      icon: <Video className="h-10 w-10 text-red-600" />,
      title: "Wedding Videography",
      description: "Create a cinematic story of your wedding day that you'll cherish for years to come.",
    },
    {
      icon: <Heart className="h-10 w-10 text-red-600" />,
      title: "Pre-Wedding Shoots",
      description: "Beautiful and romantic pre-wedding photoshoots at stunning locations.",
    },
    {
      icon: <Baby className="h-10 w-10 text-red-600" />,
      title: "Baby Showers & Events",
      description: "Celebrate life's special moments with our event photography services.",
    },
  ]

  const locations = [
    "Siliguri, West Bengal",
    "Coochbehar, West Bengal",
    "Darjeeling, West Bengal",
    "Sikkim",
    "Mathabhanga, West Bengal",
    "Jalpaiguri, West Bengal",
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            At Subha Lagna, we offer a wide range of photography and videography services to capture your special
            moments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="tel:+919641271657">
                <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">
                  Book Now
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-4 text-gray-800"
              >
                Service Locations
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 mb-6"
              >
                We are based in Siliguri, West Bengal, but we provide our services across multiple locations in North
                Bengal and Sikkim.
              </motion.p>

              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-gray-700 font-medium">Select your location:</span>
              </div>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location, index) => (
                    <SelectItem key={index} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedLocation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4"
                >
                  <p className="text-gray-700">
                    <span className="font-medium">Available in {selectedLocation}!</span> Contact us to book your
                    session.
                  </p>
                </motion.div>
              )}

              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <span className="text-gray-700 font-medium">Check availability:</span>
              </div>

              <a href="tel:+919641271657">
                <Button className="w-full bg-red-600 hover:bg-red-700">Call Now: +91-9641271657</Button>
              </a>
            </div>

            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0598972651!2d88.42!3d26.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44194d9aa2c65%3A0x42c9d2c93f1717ac!2sWard%20No.%2039%2C%20Shreema%20Sarani%2C%20Ward%2039%2C%20Haidar%20Para%2C%20Siliguri%2C%20West%20Bengal%20734006!5e0!3m2!1sen!2sin!4v1645520641290!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

