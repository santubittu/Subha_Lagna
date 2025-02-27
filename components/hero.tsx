"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://image.wedmegood.com/resized/1000X/uploads/project/229988/1672312701_DSC_1232.jpg",
      title: "Capturing Your Perfect Moments",
      subtitle: "Professional Wedding Photography & Videography Services",
    },
    {
      image: "https://image.wedmegood.com/resized/1000X/uploads/project/229988/1672312726_DSC_1486.jpg",
      title: "Timeless Pre-Wedding Shoots",
      subtitle: "Creating Beautiful Memories Before Your Big Day",
    },
    {
      image: "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1703061641_DSC_5055.jpg",
      title: "Special Events & Celebrations",
      subtitle: "From Baby Showers to Anniversaries, We Capture It All",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{slides[currentSlide].subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919641271657">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Book Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

